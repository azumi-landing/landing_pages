# Auditoría técnica y comercial del estado actual de hguerra.com

- Fecha de corte: 2026-08-17T12:22:59-06:00
- Rama inspeccionada: `develop`
- Commit inspeccionado: `e8fae0ff4c27cfa397a08a0a549a53fe750fe28e`
- Dominio inspeccionado: `https://hguerra.com`

## Resumen ejecutivo

El sitio está operativo y el contenido principal desplegado coincide con el repositorio inspeccionado. El build termina correctamente, las rutas públicas principales responden y la metadata básica está presente. El render observado no mostró errores de consola ni recursos fallidos; las cuatro rutas principales probadas no tienen overflow horizontal a 390 px, pero una revisión ampliada detectó 5 px de overflow en SENTINEL.

La base, sin embargo, tiene cinco riesgos prioritarios antes de ampliar o reposicionar el sitio:

1. La landing de operaciones de campo publica claims absolutos y legales sin soporte verificable dentro del repositorio: "auditorías sin hallazgos", "trazabilidad inmutable", "sin manipulación posible", "respaldo legal", "sin pérdida ni duplicados" y varios porcentajes absolutos.
2. La página SENTINEL está públicamente accesible, identifica a ENEE y describe datos, arquitectura y flujos operativos. `noindex` evita indexación deseada, pero no controla acceso ni confidencialidad.
3. El formulario depende por completo de JavaScript y EmailJS. Sin JavaScript, el navegador resuelve el formulario como `GET` hacia la página actual, con riesgo de colocar email y detalle en la URL. Tampoco hay protección anti-spam o validación del lado servidor visible en el repositorio.
4. El lockfile está desalineado con `node_modules` y `npm audit` reporta 15 vulnerabilidades sobre el árbol bloqueado: 12 altas, 2 moderadas y 1 baja.
5. No existe analytics. No hay línea base cuantitativa de tráfico, clics de CTA, aperturas de WhatsApp ni envíos de formulario.

Este trabajo no cambia funcionalidad, copy, dependencias ni configuración del sitio. Solo añade este reporte.

## Alcance, método y límites

Se inspeccionaron el repositorio, el build local y el despliegue público. Se revisaron rutas, HTML renderizado, metadata, JSON-LD, enlaces hash, consola del navegador, requests fallidos, cabeceras HTTP, formulario, scripts, configuración, dependencias y estado Git.

No se tuvo acceso a Firebase Console, EmailJS Dashboard, Google Search Console, proveedores DNS, contratos, datasets fuente, informes de auditoría, registros de clientes ni documentación de integraciones entregadas. Por eso, "sin evidencia en el repositorio" significa que el claim necesita trazabilidad documental; no significa que sea falso.

No se envió el formulario real para evitar generar un contacto comercial. Tampoco se ejecutaron pruebas destructivas, escaneo intrusivo, carga, pentesting ni cambios de DNS.

El contenido principal observado en producción coincide con el código actual, pero el despliegue no expone un hash de commit. No puede probarse que cada byte publicado provenga exactamente de `e8fae0f`.

## 1. Stack

| Capa | Estado actual | Evidencia |
|---|---|---|
| Framework | Astro 5. Rango declarado `^5.16.3`, lock `5.16.5`, instalado localmente `5.18.2` | `package.json:17`, `package-lock.json`, `npm ls` |
| Render | Estático por defecto con una ruta on-demand, `/contacto` | `astro.config.mjs:7-8`, `src/pages/contacto.astro:2` |
| Adaptador | `@astrojs/node` standalone. Rango `^9.5.1`, lock `9.5.1`, instalado `9.5.5` | `astro.config.mjs:2,8`, `package.json:23` |
| Runtime | Node `22.x`; auditoría ejecutada con Node `22.22.2` | `package.json:5-7` |
| Lenguaje | Astro, TypeScript estricto y JavaScript de navegador sin framework cliente | `tsconfig.json`, scripts en componentes `.astro` |
| CSS | Tailwind CSS 4 mediante `@tailwindcss/vite` y tokens CSS propios | `astro.config.mjs:3,10-12`, `src/styles/global.css` |
| Formulario | EmailJS Browser 4.4.1 | `src/components/sections/ContactForm.astro:119-120`, `package.json:15` |
| Hosting | Firebase App Hosting con build y ejecución Node | `firebase.json`, `apphosting.yaml` |
| Package manager | npm, lockfile v3 | `package-lock.json:4` |

La aplicación no usa React, Vue, Svelte, CMS, base de datos ni API propia para el sitio. La mayor parte del HTML se renderiza en build. `/contacto` se renderiza bajo demanda para leer parámetros de contexto.

### Dependencias y deriva local

El árbol instalado no reproduce el lockfile. Ejemplos:

| Paquete | Lockfile | Instalado al auditar | Última versión consultada |
|---|---:|---:|---:|
| `astro` | 5.16.5 | 5.18.2 | 7.2.2 |
| `@astrojs/node` | 9.5.1 | 9.5.5 | 11.1.2 |
| `tailwindcss` | 4.1.18 | 4.3.3 | 4.3.3 |
| `postcss` | 8.5.6 | 8.5.26 | No consultada por separado |
| `flowbite` | 4.0.1 | 4.0.2 | No consultada por separado |

`npm ci --dry-run` indicó que una instalación reproducible cambiaría 101 paquetes, añadiría 103 y eliminaría 13. El build verificado en esta auditoría usa el árbol instalado, no el árbol exacto del lockfile.

No se detectó uso en el código activo de `flowbite`, `daisyui`, `@tailwindcss/postcss`, `@tailwindcss/typography`, `autoprefixer`, `send` ni `server-destroy`. Esto los convierte en candidatos a validación, no en dependencias declaradas como definitivamente prescindibles.

`server.js` importa `express`, pero `express` no es una dependencia directa y ese archivo no es invocado por `npm run start`. El script efectivo ejecuta `dist/server/entry.mjs`.

## 2. Arquitectura

### Estructura principal

| Área | Responsabilidad |
|---|---|
| `src/pages/` | File-based routing de Astro |
| `src/layouts/PageLayout.astro` | Shell compartido: SEO, navegación, footer y botón flotante |
| `src/components/templates/ServiceLanding.astro` | Plantilla data-driven para las dos landings activas de servicio |
| `src/components/` | Átomos, moléculas, secciones, navegación y componentes heredados |
| `src/data/` | Copy, configuración comercial, rutas, schemas y contenido de landings |
| `src/types/` | Contratos TypeScript del contenido |
| `src/styles/global.css` | Tailwind 4, tokens y clases semánticas globales |
| `public/` | OG images, foto, logos, favicon y `robots.txt` |

### Flujo de render

`PageLayout` importa `global.css`, renderiza `SeoHead`, `MainNav`, un `SectionNav` opcional, el contenido de página, `SiteFooter` y `WhatsAppFloatingButton`. Todas las rutas indexables usan este layout.

Las landings activas consumen configuraciones de `src/data/serviceLandings.ts` y las pasan a `ServiceLanding`. La home y `sobre-mi` tienen composición propia. La ruta SENTINEL evita `PageLayout` y mantiene metadata, estilos, tokens y scripts propios en un archivo de más de 1.400 líneas.

`/contacto` es la única ruta no prerenderizada. Lee `service`, `origin` y `originLabel` de la query, normaliza el servicio conocido y preconfigura el formulario. No existe endpoint propio de envío: el navegador llama directamente a EmailJS.

### Sistema de estilos y tokens

`src/styles/global.css:3-19` define tokens de contenedores, espaciado, radios, sombras, superficies, texto y bordes. Encima de ellos se usan utilidades Tailwind con numerosos colores y medidas literales.

`src/data/serviceThemes.ts` aporta variables por servicio. `ServiceLanding` las inyecta como custom properties. SENTINEL tiene un segundo sistema de tokens local en `src/pages/sentinel/...astro:38-238`.

El sistema visual es parcialmente centralizado, no un design system cerrado. Hay tres capas concurrentes: tokens globales, utilidades Tailwind literales y tokens aislados de SENTINEL.

## 3. Mapa de rutas

| Ruta | Fuente | Render | Indexación | Estado público observado |
|---|---|---|---|---|
| `/` | `src/pages/index.astro` | Prerender | `index,follow` | `200` |
| `/gestion-de-operaciones-de-campo` | `src/pages/gestion-de-operaciones-de-campo.astro` | Prerender | `index,follow` | `200` |
| `/automatizacion-con-ia-agentica` | `src/pages/automatizacion-con-ia-agentica.astro` | Prerender | `index,follow` | `200` |
| `/automatizacion-de-procesos` | `src/pages/automatizacion-de-procesos.astro` | Página de redirect estática | `noindex`, canonical a la ruta nueva | `200` con meta refresh, no `301` HTTP |
| `/contacto` | `src/pages/contacto.astro` | On-demand | `index,follow` | `200` |
| `/sobre-mi` | `src/pages/sobre-mi.astro` | Prerender | `index,follow` | `200` |
| `/privacidad` | `src/pages/privacidad.astro` | Prerender | `index,follow` | `200` |
| `/terminos` | `src/pages/terminos.astro` | Prerender | `index,follow` | `200` |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` | Prerender | Recurso XML | `200`, `application/xml` |
| `/robots.txt` | `public/robots.txt` | Estático | Permite todo y declara sitemap | `200`, `text/plain` |
| `/sentinel/a7f3e9c2-4b81-4d6f-9e5a-1c8b2d4e7f0a` | Página standalone | Prerender | `noindex,nofollow` | `200` |
| Ruta inexistente | Fallback de plataforma | On-demand | No aplica | `404` correcto |

### Observaciones de routing

- `Astro.redirect(..., 301)` no se materializa como `301` en el despliegue estático de `/automatizacion-de-procesos`. Producción entrega una página `200` con `<meta http-equiv="refresh">`, `noindex` y canonical a la ruta nueva.
- Las variantes con slash final también responden `200`; las canonicals usan la variante sin slash. La canonical mitiga duplicación, pero no existe redirección de normalización.
- `http://hguerra.com/` redirige con `301` a `https://hguerra.com:443/`. El puerto explícito es innecesario y difiere de la canonical visual.
- `www.hguerra.com` no resolvió por DNS durante la auditoría. No existe redirect de `www` al apex.
- SENTINEL es una ruta huérfana: no está en sitemap ni tiene enlaces internos detectados.
- Las siete rutas canónicas indexables sí aparecen en el sitemap.

## 4. Componentes relevantes

| Componente | Uso actual | Observación |
|---|---|---|
| `PageLayout.astro` | Todas las páginas públicas salvo SENTINEL | Punto central para cambios globales |
| `SeoHead.astro` | Metadata, OG, Twitter, canonical y JSON-LD | Añade Organization, WebSite y WebPage a cada ruta |
| `MainNav.astro` | Navegación desktop y móvil | Menú de servicios y contacto contextual |
| `SiteFooter.astro` | Navegación principal, servicios, contacto y legal | Repite propuesta de dos especialidades |
| `LogoHG.astro` | Nav y footer | Genera `id="hg-gradient"`; al renderizarse dos veces crea IDs duplicados |
| `ServiceLanding.astro` | Dos landings activas | Plantilla de aproximadamente 780 líneas con varias etiquetas CTA hardcodeadas |
| `SectionNav.astro` | Landings de servicio en desktop XL | Scroll por secciones; elimina el widget si encuentra menos de dos secciones |
| `ServiceStatusCard.astro` | Dos tarjetas de servicio en home | Marca ambos servicios como disponibles |
| `TrustBand.astro` | Home y landings | Presenta métricas y señales de confianza |
| `RelatedServices.astro` | Final de landings | Cross-link entre especialidades y `sobre-mi` |
| `ContactStrip.astro` | CTA final de home | Formulario y WhatsApp |
| `Contact/index.astro` | CTA final de landings | Enlaza al formulario unificado con contexto y a WhatsApp |
| `ContactForm.astro` | `/contacto` | Envío directo por EmailJS |
| `WhatsAppFloatingButton.astro` | Todas las páginas con layout | Abre WhatsApp en nueva pestaña |

El browser audit detectó `hg-gradient` duplicado en todas las páginas que usan el layout. Es HTML/SVG inválido y puede causar que ambas instancias resuelvan el primer gradiente del documento.

### Componentes y datos aparentemente dormidos

No se detectaron consumidores activos para estas colecciones: `src/data/sectores.ts`, `casos.ts`, `servicios.ts`, `about.ts`, `diagrama.ts`, `investigacion.ts` y `stack.ts`. Solo se reexportan desde `src/data/index.ts`.

Tampoco se detectaron consumidores de varios componentes asociados: `SectorCard`, `SectorModal`, `PhoneMockup`, `WebMockup`, `WorkflowTimeline`, `CasoCard`, `ServiceCard`, `AboutCard`, `StackItem` y `HeroIllustration`.

`processAutomationLanding` sigue definido en `src/data/serviceLandings.ts:680-1153`, pero su ruta ahora entrega el redirect estático hacia la landing agéntica. Su copy no forma parte de la página actual.

## 5. Integraciones

| Integración | Estado verificable | Riesgo o límite |
|---|---|---|
| Firebase App Hosting | Configurado con backend, build, run y escalado | Consola y configuración efectiva no disponibles |
| EmailJS | Uso directo desde browser con `sendForm` | Configuración de allowed origins, cuotas y anti-abuse no verificable |
| WhatsApp `wa.me` | CTA global y CTAs específicos | Dos URLs de la landing agéntica hardcodean el número fuera de `contactConfig` |
| CDNJS Font Awesome | CSS 6.5.2 en páginas principales | Sin SRI; depende de tercero |
| Google Fonts | Solo SENTINEL | Añade origen externo adicional en una página sensible |
| Schema.org | JSON-LD local | No es una llamada de runtime |

Variables declaradas:

| Variable | Uso |
|---|---|
| `PUBLIC_EMAILJS_SERVICE_ID` | Identifica servicio EmailJS |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | Identifica plantilla EmailJS |
| `PUBLIC_EMAILJS_PUBLIC_KEY` | Clave pública del SDK EmailJS |
| `PUBLIC_WHATSAPP_NUMBER` | Número para enlaces `wa.me` y schema de contacto |
| `PORT` | Puerto del servidor standalone |

`.env` está ignorado y contiene las mismas cuatro claves públicas declaradas en `.env.example`. `apphosting.yaml` guarda valores literales para ellas en un archivo versionado. Al usar prefijo `PUBLIC_`, los identificadores de EmailJS se incorporan al cliente y no deben considerarse secretos. El control de abuso debe depender de restricciones del servicio, no de ocultarlos.

Las tecnologías mencionadas comercialmente, como SAP, Salesforce, Oracle, ERP, CRM, GCP, Airflow, LangGraph, Flutter, BigQuery, Cloud Run, Firestore, Cloud SQL, Pub/Sub, Dataform, n8n, RPA y WhatsApp Business, no son integraciones runtime de este sitio. Son claims de experiencia o capacidad de servicio.

## 6. QA disponible

### Scripts declarados

| Script | Comando | Resultado o función |
|---|---|---|
| `dev` | `astro dev` | Desarrollo local |
| `build` | `astro build` | Build de producción |
| `preview` | `astro preview` | Preview local |
| `start` | `node ./dist/server/entry.mjs --host 0.0.0.0 --port $PORT` | Servidor standalone |

No existen scripts para `test`, `lint`, `typecheck`, `check`, `format` o E2E. Tampoco se encontraron archivos de pruebas ni configuraciones de Vitest, Jest, Playwright, Cypress, ESLint, Prettier, Biome, Stylelint o Lighthouse.

`tsconfig.json` extiende `astro/tsconfigs/strict`, pero `@astrojs/check` no está instalado. El modo recomendado de typecheck para plantillas Astro no está disponible como QA del repositorio.

### Verificaciones ejecutadas

| Comando o prueba | Resultado |
|---|---|
| `npm run build` | Correcto. Generó rutas estáticas y servidor para `/contacto` |
| `npx tsc --noEmit` | Falló con 13 `TS2307` al resolver imports `.astro` en `src/components/atoms/index.ts` y `src/components/molecules/index.ts` |
| `npm audit --json` | 15 vulnerabilidades sobre el lock: 12 altas, 2 moderadas, 1 baja |
| `npm audit --omit=dev --json` | 14 vulnerabilidades al omitir dependencias dev: 12 altas, 1 moderada, 1 baja |
| `npm outdated --json` | Astro y adaptador Node están dos majors detrás de las últimas versiones consultadas |
| `npm ci --dry-run` | Confirmó deriva amplia entre lockfile y `node_modules` |
| Smoke local del build | Rutas principales, contacto contextual, sitemap, SENTINEL y 404 respondieron como se esperaba |
| Browser audit público | Sin errores de consola ni requests fallidos en las ocho rutas inspeccionadas |
| Browser audit móvil | Sin overflow horizontal en home, dos servicios, contacto y sobre mí a 390 px; SENTINEL presenta 5 px por badges laterales posicionados fuera del contenedor |

El typecheck fallido no fue introducido por esta auditoría. Es una limitación preexistente de configuración y barrels que exportan componentes `.astro`.

## 7. Formulario y seguridad

### Flujo actual

1. `/contacto` recibe contexto opcional por query string.
2. Astro preselecciona una de tres categorías: operaciones de campo, automatización inteligente u otro.
3. El usuario completa email, motivo y detalle.
4. JavaScript arma campos ocultos para EmailJS y ejecuta `emailjs.sendForm`.
5. El botón queda deshabilitado durante el envío.
6. El handler muestra éxito, error genérico o mensaje específico para `429`.

### Controles positivos

- Todos los campos visibles tienen label asociado.
- Email usa `type="email"`, `required` y `autocomplete="email"`.
- Select y detalle son obligatorios.
- La UI evita doble envío mientras espera respuesta.
- El texto informa tratamiento básico y enlaza privacidad y términos.
- Los mensajes se escriben con `textContent`, no con HTML generado desde input.
- Astro escapa el contexto de query al renderizarlo.

### Riesgos del formulario

| Severidad | Hallazgo | Evidencia |
|---|---|---|
| Alta | El `<form>` no declara `action` ni `method`. Sin JavaScript, el método resuelto es `GET` y los campos visibles pueden terminar en la URL, historial y logs | `ContactForm.astro:38-43`; DOM público inspeccionado |
| Alta | No hay validación o envío server-side propio; el cliente controla todos los campos enviados a EmailJS | `ContactForm.astro:156-228` |
| Alta | No se detectó honeypot, CAPTCHA, Turnstile ni otra defensa anti-spam en el código | Búsqueda completa en `src/` |
| Media | No hay `minlength` o `maxlength`; un cliente puede intentar payloads muy grandes | `ContactForm.astro:58-100` |
| Media | Los parámetros `origin` y `originLabel` pueden ser aportados por el usuario y terminan en el mensaje | `contacto.astro:16-28`, `ContactForm.astro:171-198` |
| Media | El feedback dinámico no tiene `aria-live` ni `role` | `ContactForm.astro:107` y DOM público |
| Media | La política no detalla responsable, contacto específico de privacidad, base jurídica, plazo concreto, transferencias o enlace a la política del procesador | `src/pages/privacidad.astro` |
| Baja | La aceptación se comunica como texto al enviar, sin checkbox explícito | `ContactForm.astro:109-115` |

La ausencia de CSRF no es el problema principal porque no hay sesión ni mutación en un backend propio. El riesgo dominante es abuso del servicio EmailJS y exposición accidental de PII por el fallback `GET`.

### Seguridad HTTP y frontend

En las rutas públicas muestreadas no se observaron estas cabeceras:

- `Strict-Transport-Security`
- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

HTTPS funciona y HTTP redirige, pero no hay HSTS. Font Awesome se carga desde CDNJS sin `integrity`. Existen scripts y estilos inline, especialmente en SENTINEL, por lo que una CSP estricta requeriría inventario y despliegue gradual.

Los usos de `set:html` detectados procesan datos estáticos del repositorio. `MainNav` usa `innerHTML` con iconos constantes. No se encontró input de usuario conectado directamente a esos sinks.

## 8. SEO

### Estado positivo

- `robots.txt` permite crawl y declara `https://hguerra.com/sitemap.xml`.
- El sitemap responde como XML y contiene solo las siete rutas canónicas indexables.
- Las páginas indexables tienen canonical absoluta, title, description, robots, OG y Twitter Card.
- Todas las páginas indexables inspeccionadas tienen exactamente un H1.
- No se detectaron imágenes sin atributo `alt` en el DOM renderizado.
- Los JSON-LD renderizados se pudieron parsear como JSON válido.
- Home incluye Organization, WebSite, WebPage y FAQPage.
- Landings incluyen Organization, WebSite, WebPage, Service, BreadcrumbList y FAQPage.
- Contacto incluye ContactPage y BreadcrumbList.
- Sobre mí incluye Person y BreadcrumbList.
- La respuesta de una ruta inexistente es `404`, no soft 404.
- Las imágenes OG PNG referenciadas existen y miden 1200 x 630.

### Hallazgos SEO

| Prioridad | Hallazgo | Impacto probable |
|---|---|---|
| Alta | El redirect legado es `200` con meta refresh en vez de `301` HTTP | Señal de migración más débil y gasto de crawl innecesario |
| Media | `www.hguerra.com` no resuelve | Usuarios y enlaces con `www` fallan en vez de consolidarse |
| Media | Todos los `lastmod` del sitemap se calculan con la fecha del build | La fecha no representa cambios reales por URL |
| Media | Las variantes con slash y sin slash responden `200` | Duplicación técnica mitigada, no eliminada, por canonical |
| Media | No se detectó verificación de Search Console en HTML o archivo | Puede existir por DNS; no verificable desde el repositorio |
| Baja | `hg-gradient` está duplicado | HTML/SVG inválido, posible colisión visual |
| Baja | SENTINEL no tiene canonical | Aceptable por `noindex`, aunque sigue siendo pública |
| Baja | Páginas estáticas responden `Cache-Control: public, max-age=0` | Oportunidad de cache y rendimiento |
| Baja | SENTINEL presenta 5 px de overflow horizontal a 390 px | Los badges laterales en `src/pages/sentinel/...astro:973,981` exceden el viewport |

### Longitud aproximada de metadata

Las longitudes son heurísticas, no límites de ranking.

| Ruta | Title | Description | Observación |
|---|---:|---:|---|
| `/` | 60 | 190 | Description larga para snippet típico |
| Operaciones de campo | 71 | 154 | Title probablemente truncado |
| Automatización | 60 | 164 | Ambos en el límite alto |
| Contacto | 58 | 134 | Rango razonable |
| Sobre mí | 18 | 171 | Title muy genérico/corto y description larga |
| Privacidad | 32 | 85 | Correcta para página legal |
| Términos | 25 | 83 | Correcta para página legal |

### Inconsistencias de structured data

- Solo la landing agéntica declara una `Offer` de precio `0 HNL` para el diagnóstico. Operaciones de campo también promete diagnóstico gratuito, pero su schema Service no incluye Offer.
- La landing agéntica declara `areaServed: Honduras`, mientras el copy habla de Honduras y LatAm.
- La entidad Organization representa una marca personal. Es válida técnicamente, pero conviene validar si Organization, Person o ProfessionalService refleja mejor la entidad contractual real.
- No se ejecutó Rich Results Test ni se consultó Search Console; JSON parseable no equivale a elegibilidad para rich results.

## 9. Analytics

No se detectó GA4, Google Tag Manager, Meta Pixel, PostHog, Plausible, Mixpanel, Segment, Umami, Fathom ni otro SDK de analytics en `src/`, configuración o requests del browser audit.

Consecuencias actuales:

- No hay pageviews comparables por ruta.
- No se miden clics de CTA, navegación entre servicios ni aperturas de WhatsApp.
- No se mide inicio, error o éxito del formulario.
- No hay funnel desde landing hasta contacto.
- No hay atribución UTM persistida en el formulario o WhatsApp.
- No puede establecerse una línea base comercial cuantitativa antes de futuros cambios.

Firebase o el CDN podrían conservar logs técnicos y Search Console podría estar verificada por DNS, pero no fueron accesibles en esta auditoría. No deben confundirse con analytics de conversión.

## 10. Inventario de contenido y claims

### Propuesta de valor actual

La home posiciona a Héctor Guerra como consultor e implementador que convierte operaciones complejas en sistemas utilizables. La propuesta combina lectura operativa, diseño de datos e integraciones, implementación y acompañamiento de adopción.

La diferenciación repetida es:

- Una persona de diagnóstico a implementación.
- Operación antes que herramienta.
- Stack estándar y documentado.
- Producción y adopción en lugar de demos.
- Dos especialidades que pueden combinarse.

### Servicios actuales

| Servicio | Promesa central | Audiencia declarada |
|---|---|---|
| Gestión de Operaciones de Campo | App offline, coordinación, evidencia, dashboard, trazabilidad e integración | Equipos en terreno, supervisores y gerencia |
| Automatización Inteligente de Procesos | Ordenar procesos internos y automatizar tareas con RPA, IA e integraciones bajo control humano | Pymes de Honduras y LatAm |

### CTAs y precios

Los CTAs principales son diagnóstico gratuito de 30 minutos, formulario y WhatsApp. No se publican precios de implementación. La FAQ de home indica precio por tamaño real del problema, sin tarifa fija ni paquetes.

Existe una inconsistencia en `ServiceLanding.astro:166-169`: el texto hardcodeado dice "Solicitar diagnóstico gratis por WhatsApp", pero en operaciones de campo el href es `#contacto`, no WhatsApp.

La landing agéntica contiene dos URLs `wa.me` con número literal en `serviceLandings.ts:26,384-385`; el resto del sitio usa `PUBLIC_WHATSAPP_NUMBER`. Un cambio de número puede dejar CTAs divergentes.

### Casos reales, ilustrativos y ambiguos

| Contenido | Clasificación observable | Riesgo de interpretación |
|---|---|---|
| Caso de home, "Proyecto de operación crítica en Honduras" | Presentado como experiencia aplicada real | Sin cliente, periodo, fuente o testimonio público |
| Cuatro casos de operaciones de campo | Presentados bajo "Dónde encaja mejor" con resultados numéricos | No indican expresamente si son reales, compuestos o hipotéticos |
| Nueve casos sectoriales de automatización | Introducidos como ejemplos y casos de uso comunes | Claramente más cercanos a escenarios ilustrativos |
| Seis bloques antes/después de automatización | Introducidos como ejemplos concretos | Ilustrativos, no case studies atribuidos |
| SENTINEL | Micrositio narrativo con mockups, nombre de ENEE y detalles operativos | No declara si describe una propuesta, un escenario hipotético o un sistema productivo |
| Datos sectoriales dormidos | Incluyen nombres, dominios y dashboards de mockup | No se renderizan hoy, pero podrían reaparecer por accidente |

No se observaron testimonios, logos autorizados, citas de clientes, enlaces a estudios de caso, metodología de medición ni fuentes adjuntas a métricas.

### Claims de mayor atención

| Claim | Superficie pública | Evidencia encontrada en el repositorio | Evaluación |
|---|---|---|---|
| Más de 10 años | Home, sobre mí, ambas especialidades | `docs/micv.md:43` describe experiencia desde 2014 | Plausible y documentado internamente |
| Más de 5M registros procesados | Home, sobre mí, operaciones de campo | Planning docs repiten el claim; CV documenta +2M clientes, no +5M registros | Requiere fuente, definición de registro y periodo |
| -60% errores en 3 semanas | Home y operaciones de campo | No se encontró dataset, baseline, muestra o metodología | Claim cuantitativo de alto riesgo |
| 2-3 semanas a producción | Home, sobre mí, operaciones de campo | CV ofrece proyectos de 4-12 semanas y advisory de 1-2 semanas | Requiere delimitar alcance y reconciliar formatos |
| Menos de 1 hora de respuesta | Home y contacto | Config y copy lo repiten | Promesa operativa, contradicha por "menos de 24 horas hábiles" en sobre mí |
| En 15 minutos define fit | Contacto | Solo copy | Promesa operativa sin condición clara |
| Miles de órdenes semanales | Caso de home | Sin fuente adjunta | Requiere cuantificación y periodo |
| Aproximadamente 5% de órdenes con problemas | Caso de home | Sin fuente o metodología | Requiere baseline y definición de problema |
| 30% del tiempo del supervisor en llamadas | Operaciones de campo | Sin fuente | Presentado como hecho general |
| Más de 5.000.000 archivos procesados | Caso de operaciones de campo | `casos.ts` repite el mismo texto; no hay fuente | Puede confundirse con +5M registros |
| 100% de inspecciones con evidencia | Caso de operaciones de campo | Sin denominador, periodo o fuente | Absoluto cuantitativo |
| Horas a minutos, cero órdenes perdidas, ruta optimizada | Capacidad de operaciones de campo | Sin evidencia de benchmark o implementación | Mezcla resultado, absoluto y promesa de optimización |
| Auditorías sin hallazgos | Hero, capability y diferenciador de operaciones de campo | No hay informes de auditoría | Claim absoluto y de compliance |
| Cumplimiento normativo demostrable | Operaciones de campo | No se especifican normas o jurisdicción | Claim legal/compliance indeterminado |
| Respaldo legal de cada operación | Operaciones de campo | No se define firma, validez, jurisdicción ni control probatorio | Claim legal de alto riesgo |
| Trazabilidad/evidencia inmutable | Operaciones de campo | No hay arquitectura de append-only, firmas criptográficas, WORM o ledger documentada | "Inmutable" no está sustentado técnicamente |
| Sin manipulación posible | Operaciones de campo | No se documenta threat model ni control criptográfico | Absoluto técnicamente indefendible con evidencia actual |
| Sin pérdida ni duplicados | Operaciones de campo | No se documentan idempotencia, colas, resolución de conflictos o pruebas | Absoluto distribuido sin soporte técnico visible |
| 100% offline | Operaciones de campo | Se menciona SQLite y sync, sin matriz de pruebas | Requiere definir funcionalidades, dispositivos y límites |
| Conectores SAP, Salesforce y Oracle; SSO | Operaciones de campo | No hay conectores, repos, demos o casos documentados aquí | Puede leerse como integraciones ya desarrolladas |
| Operable por cualquier equipo técnico competente | Home, sobre mí y landings | No hay ejemplo de documentación o handover en este repo | Claim amplio de mantenibilidad |
| Maestría en ingeniería de la computación | Sobre mí | `docs/micv.md:134` indica "en curso" | La página pública omite el estado y puede sugerir grado completado |
| Sectores trabajados: agro, manufactura, minería, energía y forestal | Sobre mí | El CV visible en repo documenta energía y ambiente; no prueba todos los sectores listados | Requiere atribución o reformulación |

Los términos indican que el sitio no garantiza resultados idénticos para todos los proyectos, pero un disclaimer general no aporta evidencia a claims concretos ni neutraliza absolutos técnicos o legales.

### Tecnologías mencionadas

| Grupo | Tecnologías |
|---|---|
| Sitio actual | Astro, Tailwind, Node, Firebase App Hosting, EmailJS |
| Experiencia pública con soporte en CV | Python, SQL, GCP, BigQuery, Cloud Run, Airflow/Composer, LangGraph, Flutter, PostgreSQL, Power BI, Grafana |
| Capacidad pública sin implementación demostrable en este repo | RPA, n8n, Firestore, Pub/Sub, Cloud SQL, Dataform, SQLite, CRM, ERP, SAP, Salesforce, Oracle, SSO, WhatsApp Business |
| SENTINEL | ML, anomaly detection, deep learning, RAG, MCP, PostgreSQL, OpenAPI, Cloud Tasks, Cloud Run, OCR, Cloud Storage, ISO 50001, SOE |
| Fuente dormida | AppSheet, Eventarc, Dataproc, Firebase/GCP, Spark, Looker Studio, GraphQL, A/B testing |

## 11. Inventario de métricas

| Métrica | Dónde aparece | Contexto |
|---|---|---|
| `+10 años` | Home, automatización, operaciones de campo, sobre mí | Experiencia profesional |
| `+5M registros` | Home, sobre mí, operaciones de campo | Escala de implementaciones |
| `2-3 semanas` | Home, sobre mí, operaciones de campo | Contacto a producción |
| `-60%` | Home y operaciones de campo | Errores de captura |
| `<1 hora` | Home y contacto | Respuesta personal |
| `0 intermediarios` | Home | Relación directa |
| `≈5%` | Caso de home | Órdenes con problemas de manipulación manual |
| Miles por semana | Caso de home | Órdenes de servicio |
| `30 minutos` | Home, contacto, sobre mí y landings | Diagnóstico gratuito |
| `15 minutos` | Contacto | Definición de fit |
| 3 preguntas | Contacto | Fricción declarada del formulario |
| `<24 horas hábiles` | Sobre mí | Respuesta, en conflicto con `<1 hora` |
| Desde los 13 años | Sobre mí | Historia personal |
| `30%` | Operaciones de campo | Tiempo de supervisión en llamadas |
| `+5.000.000 archivos` | Caso de operaciones de campo | Procesamiento de evidencias |
| `100% inspecciones` | Caso de operaciones de campo | Evidencia georreferenciada |
| `100% sin internet` | Operaciones de campo | Operación offline |
| Horas a minutos | Operaciones de campo | Respuesta y procesamiento |
| `6+ meses` | Home, sobre mí, operaciones de campo | Contraste competitivo |
| Precio `0 HNL` | JSON-LD de automatización | Offer de diagnóstico gratuito |
| `+2M clientes` | SENTINEL | Universo ENEE; coincide con escala documentada en CV |
| 47 medidores, top 20, 20 ODS | SENTINEL | Escenario de terminal/mockup |
| 5 o 500 aprobaciones | SENTINEL | Claim de paralelismo |
| 12 meses de histórico | SENTINEL | Datos precargados al técnico |
| 25%-92% | Gráfica SENTINEL | Alturas CSS sin escala o fuente explícita |
| `90% menos llamadas` | `src/data/diagrama.ts`, dormido | No se renderiza hoy |
| `100% visibilidad` | `src/data/diagrama.ts`, dormido | No se renderiza hoy |

## 12. Inconsistencias y artefactos residuales

### Inconsistencias comerciales

| Tema | Inconsistencia |
|---|---|
| Unidad de escala | El sitio usa `+5M registros` y `+5.000.000 archivos`; no explica si son el mismo universo |
| Evidencia interna | El CV documenta `+2M clientes`, no el claim público de `+5M registros/archivos` |
| Respuesta | Menos de 1 hora en home/contacto frente a menos de 24 horas hábiles en sobre mí |
| Implementación | 2-3 semanas públicas frente a proyectos de 4-12 semanas en el CV |
| Formación | Sobre mí presenta la maestría sin indicar que está en curso |
| Audiencia | Home/automatización hablan de pymes; operaciones de campo vende SAP, Oracle, SSO y sectores de gran empresa/gobierno |
| Naming | "Automatización Inteligente de Procesos", "IA Agéntica", "automatización de procesos" y "IA + RPA + Pipelines" compiten como nombre del mismo servicio |
| Geografía | Copy de Honduras y LatAm frente a schema `areaServed` solo Honduras |
| Casos | Field operations mezcla casos con métricas reales sin marcar real, compuesto o ilustrativo |
| CTA | Texto "por WhatsApp" apunta a sección de contacto en operaciones de campo |
| Precio schema | Diagnóstico gratuito modelado como Offer solo en automatización |

### Contenido repetido

Los siguientes mensajes se repiten en home, sobre mí, contacto y landings:

- Proceso antes que tecnología.
- Diagnóstico gratuito de 30 minutos.
- Trabajo directo sin intermediarios.
- 2-3 semanas.
- +10 años y +5M registros.
- -60% errores.
- WhatsApp, Excel y papel como estado inicial.
- Producción y adopción frente a demo o slides.

La repetición refuerza posicionamiento, pero también multiplica el costo de corregir una cifra o promesa. Hoy algunas copias ya divergen.

### Artefactos probables

| Artefacto | Estado |
|---|---|
| `processAutomationLanding` | Config completa de una ruta que hoy solo redirige |
| Colecciones legacy de `src/data/` | Sin consumidores activos detectados |
| Componentes legacy de sectores/casos/mockups | Sin consumidores activos detectados |
| `server.js` | No usado por scripts; importa dependencia no declarada directamente |
| `hg.txt` | Archivo vacío |
| `public/imagen.png`, `logo1.png`, `logins.png`, `favicon.svg` | Sin referencias activas detectadas |
| SVG OG duplicados | Solo `og-home.svg` se usa en sobre mí; los demás SVG no se referencian |
| `og-process-automation.*` | Asociado a configuración dormida |
| README | Enlace absoluto a `.env.example` apunta a otra ruta local |
| SENTINEL | Micrositio standalone, noindex, público y fuera del layout actual |

No se eliminó ningún artefacto en esta auditoría.

## 13. Riesgos

| Severidad | Riesgo | Impacto |
|---|---|---|
| Alta | Claims absolutos, legales y de compliance sin evidencia adjunta | Riesgo reputacional, contractual y de objeción comercial |
| Alta | SENTINEL público con nombre de cliente/entidad y detalles operativos | Confidencialidad; `noindex` no es autenticación |
| Alta | 15 vulnerabilidades en el árbol bloqueado | Riesgo de build/runtime y deuda de actualización |
| Alta | Fallback `GET` del formulario con PII | Email y detalle pueden quedar en URL o logs si falla JS |
| Alta | Formulario cliente sin anti-spam visible | Abuso de cuota, spam y degradación del canal comercial |
| Media | Lockfile y entorno instalado divergen ampliamente | Builds locales y de CI/deploy pueden comportarse distinto |
| Media | Ausencia total de analytics | Imposible medir impacto de próximos cambios |
| Media | Redirect legado no es HTTP 301 | Señales SEO y migración subóptimas |
| Media | `www` sin DNS | Pérdida de tráfico y errores en enlaces mal formados |
| Media | Sin cabeceras de seguridad | Menor defensa ante clickjacking, MIME sniffing, XSS y downgrade |
| Media | Credenciales públicas EmailJS y configuración literal versionada | No son secretos, pero facilitan reconocimiento para abuso si faltan restricciones |
| Media | No hay tests, lint ni Astro typecheck | Regresiones solo se detectan en build o revisión manual |
| Media | Promesas de respuesta y plazo contradictorias | Expectativas comerciales inconsistentes |
| Baja | Duplicidad de IDs SVG | HTML inválido y potencial inconsistencia visual |
| Baja | Cache estática con `max-age=0` | Rendimiento y eficiencia CDN subóptimos |

### Estado Git al iniciar la auditoría

- Rama actual: `develop`.
- `develop`, `main`, `origin/develop` y `origin/main` apuntaban a `e8fae0f`.
- `develop` no tenía upstream configurado; `main` sí seguía `origin/main`.
- El único cambio visible era `.codegraph/` sin seguimiento, creado al inicializar Codegraph.
- `origin` seguía apuntando a la ubicación antigua del repositorio, aunque GitHub informó previamente que el repositorio se movió.
- Al generar este reporte, `docs/audits/` también quedó sin seguimiento. No se modificó ningún archivo previamente versionado.

## 14. Archivos probablemente afectados por los siguientes cambios

### Posicionamiento, copy y claims

- `src/pages/index.astro`
- `src/data/home.ts`
- `src/data/serviceLandings.ts`
- `src/pages/sobre-mi.astro`
- `src/pages/contacto.astro`
- `src/data/contact.ts`
- `src/components/SiteFooter.astro`
- `src/components/MainNav.astro`
- `src/components/sections/RelatedServices.astro`

### Casos, métricas y prueba

- `src/data/home.ts`
- `src/data/serviceLandings.ts`
- `docs/micv.md`
- `src/data/casos.ts` si se reactiva contenido legacy
- `src/data/servicios.ts` si se reactiva contenido legacy
- `src/data/diagrama.ts` si se reactiva contenido legacy
- `src/pages/sentinel/a7f3e9c2-4b81-4d6f-9e5a-1c8b2d4e7f0a.astro`

### Formulario, privacidad y seguridad

- `src/components/sections/ContactForm.astro`
- `src/pages/contacto.astro`
- `src/pages/privacidad.astro`
- `src/pages/terminos.astro`
- `apphosting.yaml`
- `firebase.json`
- `astro.config.mjs`

### SEO, metadata y redirects

- `src/components/SeoHead.astro`
- `src/data/site.ts`
- `src/pages/sitemap.xml.ts`
- `public/robots.txt`
- `src/pages/automatizacion-de-procesos.astro`
- Configuración de dominio y redirects de Firebase App Hosting

### Arquitectura visual y componentes

- `src/layouts/PageLayout.astro`
- `src/components/templates/ServiceLanding.astro`
- `src/components/LogoHG.astro`
- `src/styles/global.css`
- `src/data/serviceThemes.ts`

### QA y dependencias

- `package.json`
- `package-lock.json`
- `tsconfig.json`
- Nuevos archivos de configuración/pruebas, si se introduce QA automatizado

### Residuos a decidir, no borrar automáticamente

- `src/data/{about,casos,diagrama,index,investigacion,sectores,servicios,stack}.ts`
- Componentes legacy de `src/components/molecules/` y `src/components/organisms/SectorModal.astro`
- `server.js`
- `hg.txt`
- Assets públicos sin referencias activas
- Configuración dormida `processAutomationLanding`

## Conclusión de línea base

La arquitectura actual es pequeña, comprensible y funcional: Astro con una plantilla compartida, dos landings data-driven, una página de contacto on-demand y despliegue Firebase. La principal deuda no es de complejidad estructural, sino de verificabilidad comercial, seguridad del canal de contacto, reproducibilidad de dependencias y ausencia de medición.

Antes de rediseñar o reposicionar, conviene conservar esta separación: contenido públicamente renderizado, fuente dormida y evidencia interna. Cualquier cambio posterior debería poder demostrar qué claim se mantiene, cuál se suaviza, cuál se documenta y cuál se retira.
