# HGuerra personal web

## Brand Center

La identidad visual y verbal está documentada en [`docs/brandcenter/index.html`](docs/brandcenter/index.html). El refactor 2027 aplica ese enfoque al código del sitio; la publicación en producción es un hito separado. El manual se abre sin compilación ni conexión. Instrucciones en [`docs/brandcenter/README.md`](docs/brandcenter/README.md).

## Estructura del sitio

Páginas principales: `/`, `/metodologia`, `/soluciones`, `/tecnologia`, `/sobre-mi` y `/contacto`. Privacidad y Términos se conservan como auxiliares.

Tecnología concentra el detalle técnico en tres bloques con desplegables nativos: datos, IA e ingeniería. Las otras páginas enlazan a esos bloques sin repetir el catálogo; las fuentes del RAG siguen siendo internas. Alcance en [`docs/plan-pagina-tecnologia.md`](docs/plan-pagina-tecnologia.md).

El código de Campo se conserva en `src/pages/_gestion-de-operaciones-de-campo.astro`, excluido del router y del build por la convención `_` de Astro. Las rutas anteriores de automatización redirigen con HTTP 301 a `/soluciones` mediante el adaptador Node. No basta con subir solo los archivos estáticos para conservar Contacto y esas redirecciones.

Al desplegar, retirar artefactos y cachés antiguos de Campo y verificar su 404 en producción. Plan y criterios: [`docs/plan-refactor-negocio-2027.md`](docs/plan-refactor-negocio-2027.md).

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

Puedes tomar como base el archivo [`.env.example`](.env.example).
