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

## GA4 — configuración y prueba pendiente

La integración es directa con Google tag, sin GTM ni Google Ads. Copiá la variable vacía de `.env.example` a tu `.env` y asigná tu ID público:

```env
PUBLIC_GA4_MEASUREMENT_ID=G-HGXKWR00FG
```

No subas `.env` a Git. Configurá la misma variable en el hosting **antes del build**: Astro la incorpora al compilar. Vacía o inválida desactiva la integración. `npm run dev`, hosts de preview/locales, páginas `noindex` y rutas fuera del sitemap no cargan GA4. La comprobación en navegador exige el origen de producción `https://hguerra.com`; no se habilita telemetría local para probar por rutina.

En Firebase App Hosting, `apphosting.yaml` declara el ID público para BUILD y RUNTIME. Publicar ese cambio requiere un nuevo build/despliegue; el `.env` local no configura Firebase. Si existe una variable del mismo nombre en la consola de Firebase, revisá su valor: tiene prioridad sobre el archivo.

La etiqueta solo se descarga tras aceptar analítica, o con un permiso vigente guardado en ese navegador. La elección dura hasta 180 días. «Preferencias de analítica» permite rechazar o retirar el permiso sin recargar ni perder el formulario. Sin consentimiento no se encolan visitas o contactos para enviarlos después. El rechazo mantiene disponibles todas las funciones del sitio.

### Antes de pulsar «Probar instalación» en Google

1. En GA4 → Administrar → Flujos de datos → flujo web, **desactivá Medición mejorada**. Esta integración emite `page_view` y `generate_lead` explícitamente; la detección automática de formularios, clics, búsquedas o cambios de historial podría duplicar eventos y enviar URLs/textos adicionales. No actives recopilación automática de datos proporcionados por usuarios, Google Signals ni personalización publicitaria para esta fase.
2. Revisá la retención de datos en la propiedad (para este arranque, conservar 2 meses), las opciones de uso compartido y la política de privacidad. La configuración externa de GA4 no se modifica desde este repositorio.
3. Autorizá y desplegá la versión con la variable configurada. En una visita privada, aceptá analítica. El comprobador de Google puede no detectar la etiqueta si no acepta el consentimiento: **no retires el bloqueo para satisfacer ese comprobador**.
4. Con Tag Assistant y el informe En tiempo real, comprobá que aparece el ID correcto y una visita. En Network, antes de aceptar y tras rechazar no debe haber solicitudes de esta integración a Google Analytics/Google tag. Probar aceptación y retirada, incluida otra pestaña, no requiere enviar formularios.
5. La prueba de `generate_lead` queda separada: requiere un envío real autorizado de EmailJS. El evento se genera solo después de que EmailJS acepte el envío y si hay consentimiento. Una vez observado, marcalo como **evento clave** en GA4. No uses el clic en Enviar ni `form_submit` automático como contacto confirmado.

Las URLs medidas excluyen query/hash, y las referencias conservan solo el origen. Por minimización, esta fase no conserva parámetros UTM/GCLID: su tratamiento y la atribución publicitaria se revisarán al vincular Ads. No hay eventos de WhatsApp, remarketing, envío de correos/mensajes a Analytics ni captura retrospectiva de acciones anteriores al permiso. Bloqueadores de anuncios o restricciones del navegador pueden impedir medición; nunca deben bloquear el contacto.

Estado: código preparado; recepción en GA4, configuración de la propiedad y despliegue pendientes de comprobación por el propietario. No se afirma que «Probar instalación» o la conversión hayan pasado.
