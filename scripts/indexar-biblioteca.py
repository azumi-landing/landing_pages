#!/usr/bin/env python3
"""Indexa un fichero por proceso y conserva progreso legible y reanudable."""

import argparse
import datetime as dt
import fcntl
import hashlib
import json
import os
from pathlib import Path
import selectors
import subprocess
import sys
import time


ROOT = Path(__file__).resolve().parent.parent
LIBRARY = ROOT / "biblioteca"
STATE_DIR = ROOT / ".haiku-rag"
DB = STATE_DIR / "biblioteca.lancedb"
STATE = STATE_DIR / "progreso.json"
LOG = STATE_DIR / "indexacion.log"
CONFIG = ROOT / "haiku.rag.yaml"
COMMAND = ["uvx", "--from", "haiku-rag==0.104.0", "haiku-rag", "--config", str(CONFIG)]
EXTENSIONS = {".pdf", ".md", ".txt", ".html", ".docx", ".pptx", ".xlsx", ".csv", ".epub"}


def now():
    return dt.datetime.now().astimezone().isoformat(timespec="seconds")


def sha256(path):
    digest = hashlib.sha256()
    with path.open("rb") as source:
        for block in iter(lambda: source.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def save(state):
    temporary = STATE.with_suffix(".tmp")
    temporary.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    os.replace(temporary, STATE)


def report(message):
    line = f"[{now()}] {message}"
    print(line, flush=True)
    with LOG.open("a", encoding="utf-8") as log:
        log.write(line + "\n")


def show_status():
    if not STATE.exists():
        print("Aún no hay progreso. Ejecuta: python3 scripts/indexar-biblioteca.py")
        return
    state = json.loads(STATE.read_text(encoding="utf-8"))
    print(json.dumps(state, ensure_ascii=False, indent=2))
    print(f"Registro: {LOG}")
    print("La antigüedad de la última salida es orientativa, no demuestra por sí sola un bloqueo.")


def run_file(path, state, heartbeat, lock_fd):
    relative = str(path.relative_to(LIBRARY))
    started = time.monotonic()
    last_output = started
    last_heartbeat = started
    state.update(actual=relative, iniciado=now(), ultima_salida=None, latido=now(), pid_hijo=None)
    save(state)
    report(f"INICIO {relative}")
    env = os.environ.copy()
    env.update(PYTHONUNBUFFERED="1", TOKENIZERS_PARALLELISM="false", NO_COLOR="1")
    process = subprocess.Popen(
        COMMAND + ["add-src", str(path)], cwd=ROOT, env=env,
        stdout=subprocess.PIPE, stderr=subprocess.STDOUT, pass_fds=(lock_fd,),
    )
    state["pid_hijo"] = process.pid
    save(state)
    selector = selectors.DefaultSelector()
    selector.register(process.stdout, selectors.EVENT_READ)
    try:
        with LOG.open("a", encoding="utf-8") as log:
            while selector.get_map() or process.poll() is None:
                for key, _ in selector.select(timeout=1):
                    data = os.read(key.fd, 65536)
                    if not data:
                        selector.unregister(key.fileobj)
                        continue
                    text = data.decode("utf-8", errors="replace")
                    log.write(text)
                    log.flush()
                    last_output = time.monotonic()
                    state["ultima_salida"] = now()
                current = time.monotonic()
                if current - last_heartbeat >= heartbeat:
                    elapsed = int(current - started)
                    quiet = int(current - last_output)
                    state.update(latido=now(), segundos_transcurridos=elapsed, segundos_sin_salida=quiet)
                    save(state)
                    report(f"EN CURSO {relative} | {elapsed}s transcurridos | {quiet}s sin salida | PID {process.pid}")
                    last_heartbeat = current
        return process.wait()
    except KeyboardInterrupt:
        report(f"INTERRUMPIDO {relative}: esperando a que termine el proceso hijo")
        process.send_signal(2)
        process.wait()
        raise
    finally:
        selector.close()
        process.stdout.close()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--estado", action="store_true", help="mostrar progreso guardado")
    parser.add_argument("--intervalo", type=int, default=30, help="segundos entre latidos (por defecto: 30)")
    args = parser.parse_args()
    if args.estado:
        show_status()
        return 0
    if args.intervalo < 1:
        parser.error("--intervalo debe ser mayor que cero")
    if not LIBRARY.is_dir():
        parser.error(f"No existe {LIBRARY}")
    STATE_DIR.mkdir(mode=0o700, exist_ok=True)
    with (STATE_DIR / "indexacion.lock").open("a") as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            print("Ya hay una indexación activa. Consulta --estado.", file=sys.stderr)
            return 1
        files = sorted(p for p in LIBRARY.rglob("*") if p.is_file() and p.suffix.lower() in EXTENSIONS)
        if not files:
            print("No hay documentos compatibles en biblioteca/.", file=sys.stderr)
            return 1
        state = json.loads(STATE.read_text(encoding="utf-8")) if STATE.exists() else {}
        # Never trust a checkpoint if the associated database was removed.
        if not DB.exists():
            state = {"estado": "inicializando", "inicio_ejecucion": now(), "actual": None}
            save(state)
            report("Inicializando base local de biblioteca")
            result = subprocess.run(COMMAND + ["init"], cwd=ROOT, pass_fds=(lock.fileno(),))
            if result.returncode:
                state.update(estado="error de inicialización", fin_ejecucion=now())
                save(state)
                report(f"ERROR al inicializar la base: código {result.returncode}")
                return result.returncode
        completed = state.setdefault("completados", {})
        state.update(estado="en curso", total=len(files), actual=None, inicio_ejecucion=now(), errores={})
        save(state)
        try:
            for index, path in enumerate(files, 1):
                relative = str(path.relative_to(LIBRARY))
                digest = sha256(path)
                if completed.get(relative, {}).get("sha256") == digest:
                    report(f"OMITIDO {index}/{len(files)} {relative} (sin cambios)")
                    continue
                state.update(posicion=index, total=len(files))
                result = run_file(path, state, args.intervalo, lock.fileno())
                if result == 0 and sha256(path) == digest:
                    completed[relative] = {"sha256": digest, "fecha": now()}
                    state["actual"] = None
                    save(state)
                    report(f"COMPLETADO {index}/{len(files)} {relative}")
                else:
                    completed.pop(relative, None)
                    reason = f"código {result}" if result else "el archivo cambió durante la indexación"
                    state["errores"][relative] = reason
                    state["actual"] = None
                    save(state)
                    report(f"ERROR {index}/{len(files)} {relative}: {reason}")
            state.update(estado="con errores" if state["errores"] else "completado", actual=None, fin_ejecucion=now(), pid_hijo=None)
            save(state)
            report(f"FIN: {state['estado']} | {len(completed)} con registro de éxito | {len(state['errores'])} errores en esta ejecución")
            return 1 if state["errores"] else 0
        except KeyboardInterrupt:
            state.update(estado="interrumpido", fin_ejecucion=now(), pid_hijo=None)
            save(state)
            return 130


if __name__ == "__main__":
    sys.exit(main())
