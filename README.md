# HGuerra personal web

## Brand Center

La identidad visual y el nuevo posicionamiento de datos e IA están documentados en [`docs/brandcenter/index.html`](docs/brandcenter/index.html); el sitio todavía conserva su contenido anterior. Ábrelo directamente en el navegador; no necesita compilación ni conexión. Incluye logotipos SVG, paleta, tipografía, ejemplos y tokens CSS. Instrucciones en [`docs/brandcenter/README.md`](docs/brandcenter/README.md).

## Biblioteca RAG

El MCP de haiku.rag y su base son exclusivos de este proyecto. Consulta [`docs/biblioteca-rag.md`](docs/biblioteca-rag.md) para indexar y monitorear cada archivo de `biblioteca/`.

## Commands

- `npm install`: instala dependencias.
- `npm run dev`: arranca el entorno local.
- `npm run build`: genera el build de producción.
- `npm run preview`: sirve el build localmente.

## EmailJS

El formulario unificado vive en `/contacto` y usa EmailJS desde el navegador.

Variables requeridas:

- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`
- `PUBLIC_WHATSAPP_NUMBER`

Puedes tomar como base el archivo [`.env.example`](/home/hguerra/code/personal_web/.env.example).
