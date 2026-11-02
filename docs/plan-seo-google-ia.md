# Especificación y plan — SEO para Google y búsqueda con IA

**Estado:** ejecución local realizada tras autorización del propietario; publicación y validaciones externas pendientes.  
**Fecha:** 2026-11-01.  
**Sitio:** https://hguerra.com.  
**Base:** `develop`, commit `6a12d9a`.  
**Rama de trabajo:** `audit/seo-google-ia`, creada desde esa base.  
**Método:** Spec-Driven Development (SDD): propuesta → requisitos y escenarios → diseño → TODO → evidencia de aceptación.

> Este es el único artefacto Markdown de esta propuesta: reúne especificación, diseño, tareas, hallazgos y decisiones pendientes. El propietario autorizó su ejecución con «implmenta el plan». No se generan archivos separados de OpenSpec. Commit, merge, push, despliegue y cambios en servicios externos siguen requiriendo autorización adicional. La evidencia de ejecución y sus límites se registran en la sección 11.

## 1. Problema y objetivo

El refactor de negocio 2027 cambió el contenido, las rutas y el posicionamiento. Corresponde revisar que Google y los sistemas de búsqueda de los asistentes puedan descubrir, interpretar y utilizar correctamente esa nueva versión, sin recuperar ofertas anteriores ni inventar credenciales.

**Objetivo comercial:** facilitar que responsables de empresas, negocio y tecnología encuentren a Héctor Guerra para consultoría, acompañamiento e implementación de datos e inteligencia artificial, y puedan continuar hacia `/contacto`.

**Objetivo técnico/editorial:** identificar barreras de descubrimiento y oportunidades de claridad, corregir las de alcance local aprobado y dejar un backlog priorizado de las acciones externas o de mayor alcance.

La visibilidad en respuestas con búsqueda de ChatGPT, Claude, Gemini, Perplexity y Copilot no equivale a incorporar el sitio a la memoria de sus modelos. Ni las posiciones, ni la indexación, ni las menciones o citas pueden garantizarse con cambios en el repositorio.

## 2. Contexto y evidencia disponible

Fuentes internas: `.agents/product-marketing-context.md`, los planes del refactor y de Tecnología, y el código de la base indicada. `docs/audits/hguerra-current-site.md` es un antecedente histórico: sus observaciones de producción no se tratarán como hechos actuales sin nueva evidencia.

| Observación en el repositorio | Consecuencia para el plan |
| --- | --- |
| `SeoHead.astro` ya emite title, description, robots, canonical, Open Graph, Twitter y JSON-LD. | Reutilizar y corregir lo existente, no crear un segundo sistema SEO. |
| `site.ts` define `Person`, `WebSite`, `WebPage`, servicios, breadcrumbs y FAQ. | Revisar identidad, relaciones, identificadores y correspondencia con contenido visible. |
| `public/robots.txt` permite rastreo general y declara el sitemap. | No presumir bloqueo de bots ni añadir reglas redundantes sin motivo. Revisar también la respuesta pública y posibles restricciones del hosting. |
| `sitemap.xml.ts` usa la fecha de generación como `lastmod` de todas las rutas. | Proponer omitir `lastmod` cuando no exista una fecha real fiable por página; no sustituirlo por otra fecha inventada. |
| Los servicios de `/soluciones` pasan rutas con fragmentos a un constructor que añade `#service`. | Revisar la composición de identificadores y usar un único fragmento estable cuando corresponda. |
| Varios encabezados principales priorizan el eslogan o mensajes generales. | Evaluar claridad temática junto con título e introducción; no asumir que un eslogan sea por sí mismo un error SEO. |
| Las dos rutas anteriores de automatización declaran redirección HTTP 301 y `prerender = false`. | La declaración local no demuestra cómo responde producción. Confirmar el comportamiento del despliegue, sin cambiar su infraestructura automáticamente. |
| Campo está conservado en un archivo con prefijo `_`; existe además una ruta auxiliar bajo `src/pages/sentinel/`. | Inventariar exclusiones y páginas auxiliares sin promocionarlas, añadirlas al sitemap ni ampliar su exposición. |

Estas observaciones son una base de planificación, no una auditoría completa ni evidencia de que el último push esté desplegado.

## 3. Alcance y límites

### Incluido en la ejecución autorizada

1. Auditar las seis páginas principales, las dos legales, robots, sitemap, redirecciones y exclusiones relevantes.
2. Separar resultados del código local, del HTML/respuestas públicas y de plataformas externas.
3. Revisar intención de búsqueda, metadatos, encabezados, enlaces internos y claridad de las páginas actuales.
4. Revisar accesibilidad del contenido para buscadores y asistentes, identidad de la persona y datos estructurados.
5. Aplicar mejoras locales pequeñas y justificadas dentro de esta especificación, únicamente después de confirmar el hallazgo correspondiente.
6. Registrar prioridades, evidencia, decisiones pendientes y una pauta mínima de medición en este mismo documento.

### Fuera de alcance

- Rediseñar el sitio, cambiar de framework, instalar dependencias SEO o crear infraestructura de pruebas/monitorización.
- Crear un blog, páginas por ciudad, comparativas, nuevas landings o un catálogo ampliado de servicios. Solo proponerlos si existe una oportunidad demostrable.
- Alterar la oferta 50 % consultoría/acompañamiento y 50 % ingeniería/implementación, los precios o las condiciones comerciales.
- Cambiar campos, transporte o lógica de EmailJS/WhatsApp; realizar envíos reales.
- Publicar la biblioteca, el CV íntegro, documentos del RAG, fuentes metodológicas internas, datos de clientes o información de rutas auxiliares.
- Reactivar Campo o difundir páginas que deliberadamente no se promocionan. `noindex` no se considerará un mecanismo de control de acceso.
- Comprar enlaces, generar reseñas, crear perfiles externos, registrar cuentas, contratar herramientas o ejecutar consultas masivas.
- Modificar DNS, CDN/WAF, hosting, Search Console, Bing Webmaster Tools, analytics o políticas de entrenamiento sin la autorización pertinente.
- Añadir `llms.txt` como requisito del PMV: su ausencia no se clasificará como bloqueo SEO ni se prometerán beneficios sin evidencia.

## 4. Especificación de requisitos

**DEBE** indica una condición de esta propuesta; **PUEDE**, una opción condicionada a evidencia. Los escenarios definen aceptación, no obligan a crear un test automatizado por requisito.

### SEO-01 — Descubrimiento y continuidad de rutas

El sitio DEBE ofrecer rutas principales descubribles mediante enlaces HTML y un sitemap con URLs canónicas destinadas a indexación. No DEBE incluir redirecciones, fragmentos, consultas del formulario, rutas inexistentes o páginas excluidas.

- **Dado** un enlace a cualquiera de las dos rutas anteriores de automatización, **cuando** se inspeccione la respuesta pública, **entonces** debe identificarse si devuelve 301 hacia `/soluciones` o documentarse la discrepancia de despliegue.
- **Dada** una ruta retirada o inexistente, **cuando** se consulte, **entonces** debe distinguirse un 404 real de una página 200 que simula no existir. No se redirigirán indiscriminadamente las rutas desconocidas a Inicio.
- **Dado** el sitemap, **cuando** no exista una fecha real de modificación por URL, **entonces** `lastmod` se omitirá en lugar de afirmar la fecha del build como actualización editorial.

### SEO-02 — Canonical y metadatos coherentes

Cada página destinada a indexación DEBE tener título y descripción propios, canonical HTTPS absoluta coherente con la URL preferida y metadatos sociales válidos. Las variantes HTTP, `www`, slash y parámetros se revisarán sin asumir que puedan corregirse desde Astro.

- **Dada** una página con parámetros de contacto o navegación, **cuando** se revise su canonical, **entonces** no debe crear una URL indexable distinta por esos parámetros.
- **Dada** una descripción o título, **cuando** se proponga un cambio, **entonces** debe mejorar precisión, intención o presentación; no se usarán conteos de caracteres como límites de ranking ni la meta description como promesa de posicionamiento.

### SEO-03 — Intención y contenido comprensible

Cada página principal DEBE tener un propósito reconocible, un encabezado principal claro y jerarquía coherente. El conjunto de título, H1 e introducción DEBE explicar qué encontrará la persona sin repetir mecánicamente keywords.

- **Dada** una persona que llega desde una consulta de servicio, **cuando** lea el encabezado y la introducción, **entonces** debe entender quién presta el servicio, qué problema aborda y cuál es el siguiente paso.
- **Dada** una recomendación editorial, **cuando** se aplique, **entonces** conservará el voseo, la primera persona, el eslogan como recurso de marca y el equilibrio comercial aprobado. No se reformularán todas las páginas por rutina.

### SEO-04 — Identidad y datos estructurados fieles

El marcado DEBE describir únicamente información visible, vigente y verificable. Se reutilizará `Person` para Héctor Guerra, con relaciones coherentes hacia el sitio, páginas y servicios. Los `@id` DEBEN ser estables y no concatenar fragmentos ambiguos.

- **Dados** los cuatro servicios de `/soluciones`, **cuando** se revise su marcado, **entonces** cada servicio debe tener una identidad diferenciada y un vínculo coherente con su sección visible y la persona que lo presta.
- **Dada** una FAQ marcada, **cuando** se compare con la página, **entonces** las preguntas y respuestas deben corresponder al contenido accesible al usuario.
- No se añadirán reseñas, `AggregateRating`, titulaciones, `sameAs`, precios, disponibilidad geográfica o resultados sin respaldo. Un marcado válido no garantiza un resultado enriquecido; `FAQPage` y `Service` no se presentarán como mecanismos garantizados para conseguirlo.

### IA-01 — Acceso para búsqueda, separado del entrenamiento

La auditoría DEBE distinguir rastreadores de búsqueda, accesos solicitados por usuarios y rastreadores de entrenamiento. No DEBE cambiar permisos de entrenamiento para perseguir citas.

- **Dada** la revisión de ChatGPT y Claude, **cuando** se evalúe el acceso, **entonces** se considerarán `OAI-SearchBot`, `Claude-SearchBot` y los agentes de recuperación pertinentes según su documentación oficial vigente; `GPTBot` y `ClaudeBot` se tratarán separadamente como agentes de entrenamiento.
- **Dadas** las funciones de IA de Google Search, **cuando** se revise su elegibilidad, **entonces** se comprobarán los fundamentos de Google Search y Googlebot, sin confundirlos con el control de Google-Extended.
- **Dado** un rechazo del hosting o CDN, **cuando** se detecte, **entonces** se registrará la evidencia y el cambio externo necesario; no se intentará eludir la protección ni se afirmará que basta modificar robots.txt.

### IA-02 — Contenido extraíble y citable con honestidad

El contenido DEBE permitir identificar de forma directa la oferta, destinatarios, método, entregables y límites. PUEDE incorporar respuestas breves o ajustar FAQ existentes cuando cubran preguntas reales sin duplicar secciones.

- **Dada** una pregunta como «¿cómo evaluar la madurez para adoptar IA?», **cuando** se inspeccione Metodología, **entonces** debe poder extraerse una explicación comprensible del trabajo, su alcance y sus entregables sin depender de lenguaje promocional ambiguo.
- **Dado** el detalle técnico dentro de `<details>`, **cuando** se revise el contenido emitido, **entonces** debe estar presente en el HTML, sin requerir una consulta al RAG ni ejecución de JavaScript para obtenerlo.
- No se fabricarán estadísticas, casos, testimonios, experiencia, fuentes públicas o fechas de actualización. No se publicará bibliografía que el propietario decidió mantener interna.

### EVI-01 — Evidencia, prioridades y estados separados

Cada hallazgo DEBE indicar requisito relacionado, evidencia y entorno, impacto, recomendación, esfuerzo aproximado y estado. «No verificado» no equivale a «fallido».

- **Dado** un dato no accesible de Search Console o de un asistente, **cuando** se cierre la revisión local, **entonces** quedará como pendiente externo sin inventar posiciones, cobertura, tráfico o citas.
- **Dada** una corrección local, **cuando** se comunique, **entonces** se distinguirá de un despliegue, indexación o mejora de resultados observada.

## 5. Diseño de la solución

### 5.1 Arquitectura mínima

Se mantendrá el circuito existente: `src/data/site.ts` → `SeoHead.astro` → `PageLayout.astro` → páginas. El sitemap continuará consumiendo `publicSiteRoutes`. No se creará una segunda configuración de rutas o un plugin que duplique estos datos.

| Área | Trabajo previsto, condicionado a hallazgos |
| --- | --- |
| `src/data/site.ts` | Coherencia de entidad, IDs, relaciones y URLs preferidas. |
| `src/components/SeoHead.astro` y `src/layouts/PageLayout.astro` | Emisión de etiquetas y marcado sin duplicados ni cambios innecesarios. |
| `src/pages/sitemap.xml.ts` | Fechas veraces y selección de rutas canónicas. |
| Páginas principales y sus datos/componentes de contenido | Ajustes pequeños de intención, encabezados, introducciones, respuestas y enlaces. |
| `public/robots.txt` | Solo cambios justificados de rastreo; no nuevas políticas de entrenamiento por defecto. |
| Redirecciones, rutas excluidas y páginas auxiliares | Inspección de continuidad/exclusión; no promoción ni reactivación. |
| Hosting y plataformas externas | Recomendaciones y pendientes; sin modificaciones remotas. |

### 5.2 Mapa inicial de intención

Este mapa orienta la revisión; no representa investigación de volumen ni keywords definitivas. No exige nuevas URLs.

| Página | Intención principal | Diferenciación |
| --- | --- | --- |
| `/` | Encontrar consultoría independiente en datos e IA. | Presentar persona, propuesta y dos capacidades complementarias. |
| `/metodologia` | Entender evaluación de madurez para IA y diseño de una hoja de ruta. | Método, alcance, evidencia y entregables. |
| `/soluciones` | Evaluar ayuda en madurez, adopción, datos e IA aplicada. | Problemas, trabajo posible y conversación comercial. |
| `/tecnologia` | Comprender capacidades de ingeniería de datos e IA. | Profundidad técnica sin duplicar la oferta comercial. |
| `/sobre-mi` | Verificar quién es Héctor Guerra y su experiencia. | Identidad, trayectoria real y credenciales correctamente expresadas. |
| `/contacto` | Contactar al consultor. | Acceso y expectativas claras, sin cambiar el formulario. |
| `/privacidad` y `/terminos` | Consultar condiciones legales. | Accesibilidad y coherencia; no competir por consultas comerciales. |

La primera evaluación de consultas y competidores se limitará a una muestra pequeña vinculada con estas intenciones. No se inventarán volúmenes de búsqueda ni se ejecutarán consultas masivas a asistentes. La atribución de fuentes o menciones se registrará solo cuando sea observable.

### 5.3 Política de prioridades

- **P0 — bloqueo concreto:** exclusión accidental de páginas principales, canonical hacia otro sitio, pérdida de rutas de entrada o exposición sensible que no deba amplificarse. Si aparece, delimitar la intervención; corregir permisos o publicación requiere el alcance y autorización adecuados.
- **P1 — alto impacto local:** continuidad de redirecciones, sitemap fiable, identidad/marcado incoherentes, intención de servicio poco clara.
- **P2 — mejora acotada:** presentación de metadatos, enlaces descriptivos, respuestas más claras y optimización de un recurso si existe evidencia de impacto.
- **Backlog externo/editorial:** DNS, CDN, perfiles, contenidos nuevos, referencias externas o medición sin acceso. No bloquea la entrega local segura.

Rendimiento se revisará con la evidencia disponible y una muestra representativa, preferentemente Inicio en móvil. No se convertirá esta tarea en una optimización general del frontend ni se presentarán datos de laboratorio como Core Web Vitals reales de usuarios.

## 6. Decisiones y dependencias pendientes

| Decisión o acceso | Tratamiento mientras no esté resuelto |
| --- | --- |
| Mercado prioritario: Honduras/Centroamérica o mercado hispanohablante general. | Mantener lenguaje no excluyente y la ubicación personal verificable; no crear landings geográficas ni afirmar cobertura comercial no acordada. No bloquea el trabajo técnico. |
| Política sobre uso del contenido para entrenamiento. | Conservar la política actual. La optimización de búsqueda no autoriza modificarla. |
| Perfiles profesionales que el propietario quiera vincular. | No inventar `sameAs`, afiliaciones o acreditaciones. |
| Search Console, Bing Webmaster Tools y medición existentes. | Usar solo acceso o exportaciones autorizadas; la ausencia de una metaetiqueta de verificación no demuestra falta de verificación por DNS. |
| Versión realmente desplegada, hosting y control del CDN. | Registrar primero qué responde el dominio y si coincide con la base de trabajo. No asumir despliegue a partir del push. |
| Herramientas/acceso para observar respuestas de asistentes. | Registrar solo resultados accesibles; las plataformas no observadas quedarán pendientes, no como ausencia de visibilidad. |

No se solicitarán contraseñas, tokens ni secretos dentro del documento. Las decisiones habituales y reversibles dentro del alcance no requieren aprobaciones por archivo.

## 7. TODO de ejecución

### Preparación ya realizada

- [x] Crear `audit/seo-google-ia` desde `develop` en `6a12d9a`, sin incluir `biblioteca/` ni `.codegraph/`.
- [x] Revisar el contexto comercial, las convenciones y los puntos de integración SEO necesarios para redactar esta especificación.
- [x] Reunir propuesta, requisitos, diseño, aceptación y TODO en este único Markdown.
- [x] Obtener autorización expresa del propietario para ejecutar el plan: «implmenta el plan».

### Fase A — Auditoría con evidencia

- [x] Inventariar rutas, destinos, canonical, metadatos, marcado y exclusiones; contrastar solo los antecedentes históricos aún relevantes. Cubre SEO-01, SEO-02 y SEO-04.
- [x] Inspeccionar las respuestas públicas relevantes y distinguir la versión desplegada del código local, incluidos robots, sitemap y redirecciones del refactor. Cubre SEO-01 e IA-01.
- [x] Revisar el mapa de intención y una muestra acotada de consultas/competidores; analizar claridad, autoridad real, enlaces y contenido disponible sin JavaScript. Cubre SEO-03 e IA-02.
- [x] Incorporar hallazgos priorizados, evidencia local/pública y pendientes externos a este mismo documento. Cubre EVI-01.

### Fase B — Mejoras locales dentro del alcance aprobado

- [x] Corregir los hallazgos confirmados de sitemap, canonical y metadatos reutilizando la configuración existente. Cubre SEO-01 y SEO-02.
- [x] Normalizar el marcado confirmado como incoherente, en particular identidad, relaciones e IDs de servicios, sin inventar datos. Cubre SEO-04.
- [x] Ajustar únicamente el contenido, encabezados, respuestas y enlaces que necesiten mayor claridad de intención o extracción, manteniendo oferta y voz. Cubre SEO-03 e IA-02. Los enlaces existentes ya conectan las páginas y sus bloques; no se añadieron enlaces redundantes.
- [x] Resolver solo los problemas de acceso que pertenezcan al código y alcance aprobados; registrar los del proveedor y mantener sin cambios la política de entrenamiento. Cubre IA-01. No se detectó un bloqueo local que exigiera cambiar robots o las rutas.

### Fase C — Revisión y entrega local

- [x] Revisar el delta contra los requisitos, reutilizando evidencia vigente; confirmar que no se alteran contacto, exclusiones, identidad visual ni fuentes internas.
- [x] Registrar qué se corrigió, con qué evidencia, y qué depende de despliegue, cuentas externas o decisiones del propietario. Cubre EVI-01.
- [x] Dejar en este documento una línea base disponible y una pauta de seguimiento para consultas, clics/contactos orgánicos y referencias de IA, sin instalar herramientas automáticamente.
- [x] Entregar resumen y backlog restante. Mantener commit, merge, push y despliegue pendientes de autorización.

Una tarea solo se marcará como completada con evidencia correspondiente. La falta de acceso externo se registrará como pendiente; no obligará a rehacer trabajo local ni a repetir revisiones sin cambios relevantes.

## 8. Criterios de aceptación y verificación proporcional

### Aceptación de la planificación (anterior a la implementación)

- Existe un solo Markdown nuevo con objetivo, límites, requisitos identificables, escenarios, diseño, decisiones y TODO.
- Está en la rama nueva basada en `develop`, sin cambios de aplicación, configuración, dependencias o archivos ajenos.
- Su estado deja explícito que la implementación necesita autorización posterior.

### Aceptación de la futura ejecución

1. Los hallazgos están trazados a requisitos, con evidencia, entorno, prioridad y acción; lo no observado está identificado como tal.
2. Las correcciones locales aprobadas respetan SEO-01 a SEO-04 e IA-01 a IA-02; las discrepancias externas permanecen visibles y no se presentan como corregidas.
3. Se preservan el posicionamiento, las seis páginas principales, el recorrido a Contacto, las exclusiones y la confidencialidad de las fuentes internas.
4. No se afirma mejora de posiciones, indexación, citas, rendimiento real o conversiones sin observación posterior que la respalde.
5. No se ejecutan operaciones de Git compartido, publicación o cambios de cuentas sin autorización específica.

### Evidencia mínima

La entrega inicial documental solo requirió revisar el archivo y el estado/diff de Git. No justificaba builds, smoke, tests o auditorías adicionales.

Para la futura auditoría se usará revisión focal de fuentes y del HTML/respuestas relevantes disponibles. Una extracción de texto de una página no basta para afirmar que no existe JSON-LD: se inspeccionará el HTML completo y, si hay inyección por JavaScript, una representación renderizada accesible. JSON válido no equivale por sí solo a conformidad semántica o elegibilidad para resultados enriquecidos.

No se crearán pruebas por archivo, matrices exhaustivas, suites amplias ni builds de cierre por rutina. Una prueba adicional solo se justificará por un riesgo crítico concreto no cubierto, como bloquear una ruta principal o exponer información restringida; se limitará al caso afectado. El formulario no recibe envíos de prueba por esta tarea.

## 9. Seguimiento posterior a una publicación autorizada

- **Google/Bing:** consultas e impresiones de las páginas prioritarias, clics y cobertura, utilizando los accesos o exportaciones disponibles.
- **Negocio:** contactos atribuibles al tráfico orgánico si existe instrumentación suficiente; no confundir visitas con oportunidades comerciales.
- **Asistentes:** observaciones fechadas de consultas prioritarias con búsqueda activada, indicando plataforma, idioma/mercado, URL citada y contexto. Una observación aislada no representa una cuota de visibilidad estable.
- **Plazo:** comparar con una línea base y una ventana posterior comparable; no esperar cambios inmediatos ni considerar el rastreo o la recomendación como un gate técnico de cierre local.

La verificación pública se realizará cuando se conozca que la versión correspondiente está desplegada. Si todavía no lo está, permanecerá pendiente sin declarar una aceptación inexistente.

## 10. Referencias para las decisiones técnicas

Documentación oficial consultada durante la planificación; se reconfirmará solo si una decisión concreta depende de un cambio posterior. Estas referencias son internas al plan, no una instrucción de añadir bibliografía al sitio comercial.

- [Google Search: funciones de IA y sitios web](https://developers.google.com/search/docs/appearance/ai-features): fundamentos SEO, elegibilidad y ausencia de requisitos especiales de archivos o schema para AI Overviews/AI Mode.
- [OpenAI: crawlers y agentes](https://platform.openai.com/docs/bots): diferencia entre OAI-SearchBot, GPTBot y ChatGPT-User.
- [Anthropic: rastreo web y controles para propietarios](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler): diferencia entre Claude-SearchBot, Claude-User y ClaudeBot.

## 11. Resultado de ejecución y evidencia

### 11.1 Inventario público observado antes de los cambios locales

Inspección mediante solicitudes GET sin seguir automáticamente redirecciones, lectura del HTML completo y revisión de fuentes en esta ejecución. Los títulos, H1 y datos estructurados públicos coinciden con las características de la base `6a12d9a`; esto no identifica de forma criptográfica el commit desplegado. La respuesta del sitemap contiene `2026-11-02` como `lastmod` uniforme; se conserva ese valor observado sin usarlo como fecha de auditoría ni de modificación editorial.

| Recurso | Resultado observado | Interpretación |
| --- | --- | --- |
| `/`, `/metodologia`, `/soluciones`, `/tecnologia`, `/sobre-mi`, `/contacto` | HTTP 200; un H1, título propio, canonical HTTPS de la ruta y `index,follow`. | No se detectó un bloqueo de indexación en estas etiquetas. Esto no demuestra indexación efectiva. |
| `/privacidad`, `/terminos` | HTTP 200; título, H1 y canonical propios, indexables. | Se preservan como auxiliares legales. |
| `/robots.txt` | HTTP 200, texto plano; `User-agent: *`, `Allow: /` y referencia al sitemap. | Sin prohibiciones específicas para Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot o PerplexityBot; sin cambios de política. |
| `/sitemap.xml` | HTTP 200, `application/xml`, ocho URLs canónicas y sin fragmentos. | Inventario correcto; fechas no fiables corregidas solo en código local. |
| `/automatizacion-de-procesos` y `/automatizacion-con-ia-agentica` | HTTP 301, `Location: /soluciones`. | El problema histórico del meta refresh ya no se reproduce; no se modifican redirecciones. |
| Campo y una URL deliberadamente inexistente | HTTP 404 real. | No se reproduce soft 404 ni reactivación de Campo. |
| `/contacto?origen=tecnologia` | HTTP 200 y canonical `/contacto`. | La canonical no incorpora parámetros. El parámetro funcional usado por la aplicación es `origin`, no `origen`; la revisión de `path="/contacto"` confirma independencia de ambos. |
| `/soluciones/` | HTTP 200; canonical `/soluciones`. | Variante duplicada consolidada por canonical; normalización por redirect queda como recomendación externa, no como bloqueo. |
| `http://hguerra.com/` | HTTP 301 hacia `https://hguerra.com:443/`. | HTTPS existe; conviene retirar el puerto explícito en el proveedor. |
| `https://www.hguerra.com/` | Error de resolución de nombre desde este entorno. | Pendiente revisar DNS/certificado y redirección del host `www`; no se modificó DNS. |
| Ruta auxiliar bajo `src/pages/sentinel/` | En fuentes: `noindex,nofollow` para robots y Googlebot; fuera de `publicSiteRoutes`. | No se promociona ni se publica contenido de esa página en el informe. No se afirma control de acceso ni ausencia de exposición por usar `noindex`. |

En Inicio, los enlaces HTML globales alcanzan las ocho páginas canónicas, y la imagen del retrato tiene `alt`, dimensiones explícitas y carga no diferida. En Tecnología hay tres `<details>` y el contenido técnico (incluidos ETL, RAG y MLOps) está en el HTML de respuesta, sin ejecutar JavaScript. Las FAQ visibles y su marcado reutilizan `businessFaqs`; no se añadieron preguntas duplicadas ni schema que represente contenido inexistente.

### 11.2 Hallazgos priorizados y correcciones

| ID / requisito | Prioridad / impacto | Evidencia y entorno | Acción / esfuerzo | Estado |
| --- | --- | --- | --- | --- |
| H01 / SEO-01 | P1 / fiabilidad del sitemap | Fuente `sitemap.xml.ts` genera `lastmod` con `new Date()`; respuesta pública muestra la misma fecha en ocho URLs. | Omitir `lastmod` hasta contar con fecha editorial real por URL; esfuerzo bajo. | Corregido localmente, pendiente de publicación. |
| H02 / SEO-04 | P1 / coherencia de entidades | HTML público de Soluciones y constructor local producen IDs como `#datos#service`. | Componer un único fragmento con `URL.hash`: `#madurez-service`, `#acompanamiento-service`, `#datos-service`, `#ia-service`. Conservar la URL visible de la sección y el proveedor Person. Esfuerzo bajo. | Corregido localmente. |
| H03 / SEO-04 | P2 / claridad del grafo | En fuentes y HTML, ContactPage usa `#contactpage` y WebPage `#webpage` para la misma página; Person usa Inicio como URL. | Unificar ContactPage en `#webpage` para que ambas descripciones refieran al mismo nodo; enlazar Person a `/sobre-mi` y a su `#webpage`; normalizar WebSite a la URL raíz con slash. Esfuerzo bajo. | Corregido localmente; sin cambiar el formulario. |
| H04 / SEO-03, IA-02 | P1 / comprensión de la oferta | H1 públicos de Metodología y Soluciones expresan mensajes generales sin nombrar el servicio. | H1 e introducciones más específicos; Metodología define evaluación, dimensiones y entregables. Inicio nombra persona y servicio sin quitar el eslogan. Tecnología explicita ingeniería de datos e IA y ajusta su title. Esfuerzo bajo. | Implementado localmente, pendiente de aceptación visual/publicación. |
| H05 / SEO-02 | P2 / consolidación técnica | HTTP redirige a `:443`; `www` no resuelve; `/soluciones/` entrega 200 con canonical correcta. | Revisar DNS, certificado y normalización en hosting. Esfuerzo dependiente del proveedor. | Pendiente externo; no se alteraron Astro ni rutas para compensarlo. |
| H06 / IA-01 | Sin bloqueo local demostrado | Robots permite rastreo general y el contenido es accesible por HTTP desde este entorno. | Conservar robots y permisos de entrenamiento. El acceso desde las IP reales de cada crawler/CDN no está observado. | Revisión local realizada; confirmación con logs pendiente externo. |
| H07 / EVI-01 | P1 / actualización tras el refactor | La búsqueda de marca devuelve un extracto histórico sobre operaciones/campo aunque el HTML actual ya cambió. | Tras publicación autorizada, inspeccionar las URLs prioritarias en Search Console y solicitar rastreo si procede. Esfuerzo bajo con acceso. | Pendiente externo. No prueba que Google muestre ese mismo extracto ni permite estimar demora. |

No se encontraron bloqueos P0 en las respuestas principales inspeccionadas. La revisión no constituye una auditoría de seguridad de páginas auxiliares.

### 11.3 Muestra de consultas y competencia

Se utilizó la herramienta de búsqueda disponible; no una sesión de Google localizada ni una medición de ranking. Las observaciones se basan en sus resultados/extractos y no validan cifras o promesas de terceros.

| Consulta | Resultados relevantes de la muestra | Decisión aplicada |
| --- | --- | --- |
| `consultoría madurez inteligencia artificial hoja de ruta empresas Honduras` | [Sozpic](https://www.sozpic.com/consultoria-estrategica-ia/) describe evaluación, oportunidades y hoja de ruta; [NEXT LATAM](https://next-latam.com/) presenta diagnóstico y ejecución; [GO Consultores](https://www.goconsultores.com/servicios-de-tecnologias-informacion/servicios-de-inteligencia-artificial/) expone servicios y proceso para empresas. | Explicar evaluación y entregables directamente en Metodología; diferenciar consultoría personal con capacidad de implementación, sin copiar ofertas gratuitas, plazos o garantías de terceros. |
| `consultor ingeniería de datos inteligencia artificial Honduras Héctor Guerra` | Aparece `hguerra.com` con contenido histórico, junto a resultados educativos y otros profesionales de nombre similar. | Reforzar la identificación de Héctor Guerra y el servicio en la introducción de Inicio y en el grafo Person; mantener el mapa de intención. No atribuir perfiles ajenos mediante `sameAs`. |

No se midieron volúmenes ni posiciones. ChatGPT, Claude, Gemini, Perplexity y Copilot no se consultaron como productos con búsqueda activada: sus menciones/citas permanecen **no observadas**, no «ausentes».

### 11.4 Rendimiento y límites de la evidencia

Se solicitó una única evaluación de Inicio móvil al endpoint público de PageSpeed Insights: devolvió **HTTP 429 (Too Many Requests)**. No se repitió la solicitud ni se inventaron puntuaciones, LCP, INP o CLS. Las respuestas HTML de Inicio y Tecnología declaran `Cache-Control: public, max-age=0`; por sí solo esto no demuestra un fallo de Core Web Vitals. El HTML contiene también un ID SVG `hg-gradient` duplicado, una mejora técnica secundaria fuera de las correcciones SEO prioritarias realizadas.

La revisión final del delta cubre el constructor de IDs, las referencias Person/WebSite/ContactPage, el sitemap y los cuatro cambios editoriales. No hay cambios en EmailJS, formulario, orígenes de contacto, rutas, `noindex`, estilos, dependencias, MCP, biblioteca o robots. Se mantiene la serialización JSON-LD con escape de `<` existente.

Por tratarse de marcado y contenido sin una frontera crítica modificada, no se añadieron ni ejecutaron tests, suites, builds o envíos de formulario. No se ha renderizado la versión local modificada ni ejecutado Rich Results Test; la evidencia pública descrita corresponde a la versión anterior a estos cambios locales. La revisión del código no se presenta como validación de resultados enriquecidos o de diseño en navegador.

### 11.5 Línea base y backlog externo

- **Base observable:** seis páginas principales y dos legales responden 200; redirecciones antiguas 301; Campo 404; robots y sitemap accesibles; contenido técnico presente en HTML. Los defectos H01–H04 se observaron antes de corregirlos localmente.
- **Sin datos:** impresiones, clics, consultas reales, indexación en Google/Bing, conversiones orgánicas y referencias de IA. No se asume cero en ninguna métrica.
- **Tras autorizar publicación:** comprobar solo sitemap, marcado y páginas modificadas; reutilizar la evidencia de rutas no alteradas salvo que cambie la configuración de despliegue.
- **Con acceso del propietario:** obtener una exportación de Search Console de los últimos 28 días para las páginas prioritarias y una ventana posterior comparable, anotando la fecha de publicación. Consultar cobertura en Google y Bing sin crear cuentas automáticamente.
- **Asistentes:** observar una muestra de preguntas de marca, evaluación de madurez y servicios de datos/IA; registrar fecha, plataforma, idioma/mercado y URL citada. No automatizar herramientas ni contratar monitorización.
- **Negocio:** relacionar contactos con tráfico orgánico solo si la instrumentación disponible permite hacerlo; no cambiar el formulario para inferir atribución.
- **Decisiones del propietario:** mercado prioritario, perfiles profesionales verificables y permisos para casos reales; hasta entonces no se añaden cobertura geográfica comercial ni acreditaciones.
- **Proveedor:** revisar `www`, puerto explícito y normalización de slash (H05); comprobar acceso de bots mediante logs si están disponibles (H06). PageSpeed móvil queda pendiente por cuota externa, no por un fallo demostrado del sitio.

**Siguiente acción:** aceptación del propietario y decisión sobre commit/publicación. La implementación está únicamente en la rama local; no se han ejecutado commit, merge, push ni despliegue. El seguimiento externo no impide entregar las correcciones locales.
