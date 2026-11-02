# Biblioteca RAG de este proyecto

Haiku.rag indexa `biblioteca/` en `.haiku-rag/biblioteca.lancedb`. El MCP `hg-rag-mcp` está configurado únicamente en el `opencode.json` de este repositorio y expone esa base en modo lectura. No es una configuración global ni una función del sitio web.

## Indexar y monitorear

Requiere Python 3 y `uvx`, acceso inicial a PyPI y Hugging Face para descargar haiku.rag y los modelos, y espacio en disco. Desde la raíz:

```sh
python3 scripts/indexar-biblioteca.py
```

En otra terminal:

```sh
python3 scripts/indexar-biblioteca.py --estado
tail -f .haiku-rag/indexacion.log
```

El script procesa un archivo a la vez, registra inicio, fin y errores y emite cada 30 segundos un latido con el archivo, PID, tiempo transcurrido y segundos desde la última salida. Un periodo sin salida no demuestra por sí solo un bloqueo: Docling o una descarga pueden estar trabajando sin imprimir. El intervalo es configurable con `--intervalo 10`. El estado refleja el último latido, no prueba que el proceso siga vivo después de un cierre inesperado; comprueba el PID y el registro.

El script retoma al ejecutarse de nuevo: omite archivos cuyo SHA-256 coincide con un éxito registrado, reintenta fallidos y vuelve a procesar los modificados. No elimina documentos del índice cuando se borran de `biblioteca/`; para retirarlos hay que hacerlo explícitamente con la CLI de haiku.rag. Detén el proceso con Ctrl+C y espera a que termine el hijo antes de reanudar. El archivo de bloqueo evita ejecuciones concurrentes del script; **no ejecutes otros comandos de escritura o ingesters simultáneamente**: haiku.rag requiere un único escritor por base. Los procesos MCP de lectura pueden coexistir.

El primer procesamiento puede tardar por descargas de modelos. Los PDF se dividen en grupos de 10 páginas para moderar el consumo de memoria; el límite de conversión es de 30 minutos por documento. El latido no mata el proceso por silencio: así no interrumpe una escritura y no confunde un PDF largo con un bloqueo. Si se necesita detener una tarea atascada, investiga el proceso y termínalo de forma controlada antes de reintentar.

## Cómo se usa desde OpenCode

Pide que busque en la biblioteca del proyecto y cite el documento y la página. El MCP ofrece búsqueda y lectura, no genera respuestas con su propio LLM: el modelo elegido en la sesión de OpenCode redacta la respuesta. Haiku.rag usa el modelo local multilingüe `sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2` para embeddings; indexar no requiere un LLM ni credenciales. El contenido de los fragmentos recuperados sí se envía al proveedor del modelo de OpenCode cuando se usan en una conversación.

Por diseño se extrae texto y tablas con OCR disponible, pero no se indexan imágenes como imágenes ni se guardan imágenes de página. La base y los registros se ignoran en Git; contienen texto de los documentos y deben mantenerse privados. El modelo y la versión están fijados: no cambies los embeddings de una base existente sin seguir el procedimiento de migración/reindexación de haiku.rag.

Las rutas y el hash del registro se usan para reanudar, no para auditar exhaustivamente la integridad de la base. Conserva los documentos originales. Si se ha alterado o restaurado la base por separado del estado, revisa ambos antes de reanudar.
