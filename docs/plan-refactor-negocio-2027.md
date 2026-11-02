# Plan de refactor de negocio 2027 — hguerra.com

**Estado:** aprobado e implementado localmente; verificación local realizada. Aceptación y despliegue pendientes.
**Fecha de preparación:** 30 de octubre de 2026.  
**Rama de trabajo:** `refactor/negocio-2027`, creada desde `develop`.  
**Tipo de trabajo:** refactor incremental del proyecto existente, sin reconstrucción del sitio ni versiones legacy paralelas.

> Este documento propone el alcance y la ejecución. Su creación no autoriza a implementar, desplegar, enviar correos reales ni realizar operaciones de Git compartido. La implementación comenzará únicamente después de la aprobación explícita del propietario.

## 1. Objetivo

Posicionar a Héctor Guerra como consultor independiente en madurez, datos e inteligencia artificial, capaz de comprender los desafíos empresariales, evaluar capacidades, diseñar hojas de ruta e implementar soluciones tecnológicas.

El sitio debe comunicar una relación de trabajo continua: entender, orientar, construir, acompañar y mejorar. No vender herramientas ni presentar la IA como un fin en sí mismo.

### Equilibrio de posicionamiento

- **50 % consultoría y acompañamiento empresarial:** comprensión del negocio, evaluación de madurez, priorización, estrategia, adopción, gobierno y evolución. Su referencia metodológica principal será `The_AI_Adoption_Maturity_Model.pdf`, complementada por los demás documentos pertinentes del RAG, sin excluirlos.
- **50 % ingeniería e implementación tecnológica:** integración y calidad de datos, información para decidir, soluciones de IA, puesta en operación y mantenimiento evolutivo.

Esta proporción se refiere al peso comercial, visual y narrativo de ambas capacidades. No impone una distribución de horas, presupuesto, puntuaciones de madurez o etapas para todos los proyectos.

### Eslogan y mensaje rector

**Eslogan aprobado:** «Inteligencia aplicada a desafíos reales».

Mensaje de trabajo propuesto:

> Te ayudo a entender dónde está tu empresa, definir cómo avanzar e implementar soluciones de datos e inteligencia artificial.

## 2. Alcance y límites

### Incluido

1. Refactorizar el contenido, la arquitectura de información y los recorridos comerciales del sitio actual.
2. Organizar cinco páginas principales: Inicio, Metodología, Soluciones, Sobre mí y Contacto.
3. Despublicar la ruta de Operaciones de Campo conservando su código.
4. Usar la landing de automatización con IA agéntica como base de reutilización, no como oferta principal del nuevo sitio.
5. Conservar y adaptar la página y el formulario de Contacto sin perder funcionalidades.
6. Mantener la identidad del Brand Center y mejorar la claridad de la UI/UX existente.
7. Actualizar navegación, enlaces, sitemap, metadatos y datos estructurados afectados.
8. Fundamentar la metodología con fuentes recuperadas del RAG local.
9. Alinear la configuración comercial y el contexto de marketing con las decisiones aprobadas.
10. Aplicar revisión y verificación focalizadas en los riesgos concretos del cambio.

### No incluido

- Crear otro sitio, una carpeta legacy o copias de las páginas anteriores.
- Cambiar de framework, actualizar dependencias por rutina o incorporar un CMS.
- Crear un autodiagnóstico interactivo, una certificación de madurez o una plataforma de evaluación.
- Integrar el RAG como servicio público, chatbot o funcionalidad del navegador.
- Publicar documentos de `biblioteca/`, bases, registros, credenciales o configuración privada.
- Incorporar CRM, analítica, reservas de calendario, autenticación o nuevos proveedores de envío.
- Inventar biografía, clientes, testimonios, resultados, acreditaciones o condiciones comerciales.
- Cambiar rutas técnicas ajenas al refactor ni ampliar sus permisos.
- Desplegar, modificar infraestructura remota, purgar cachés remotas, hacer push o crear un commit sin autorización adicional.

## 3. Estado observado y dependencias

### Proyecto

- Astro 5 con Tailwind CSS y adaptador Node.
- Salida estática con páginas concretas renderizadas bajo demanda; `/contacto` usa `prerender = false`.
- `PageLayout.astro` centraliza navegación, pie, SEO y botón de WhatsApp.
- `ServiceLanding.astro` y `src/data/serviceLandings.ts` contienen bloques y contenidos reutilizables de las landings.
- El formulario utiliza `@emailjs/browser` y una plantilla externa con campos ya definidos.
- `src/data/site.ts` concentra enlaces, rutas del sitemap y constructores de datos estructurados.
- El Brand Center ya define el nuevo posicionamiento, pero el sitio conserva el anterior.
- `.agents/product-marketing-context.md` es un borrador del posicionamiento previo; no prevalece sobre las decisiones actuales ni valida por sí solo sus afirmaciones.

### Dependencia que debe resolverse antes de ocultar Campo

`src/data/contact.ts` y `src/data/serviceLandings.ts` buscan Operaciones de Campo dentro de `activeSolutions` y lanzan un error si no la encuentran.

Cambiar únicamente su estado a oculto rompería consumidores compartidos. La implementación debe separar la existencia de la configuración de Campo de su publicación comercial. Se conservará su configuración necesaria sin exigir que figure como oferta activa ni duplicar el sistema de servicios.

### Cambios preexistentes que se deben preservar

Al preparar este plan existen modificaciones en `opencode.json` y `docs/biblioteca-rag.md` por el renombrado del MCP. También existen `.codegraph/` y `biblioteca/` sin seguimiento. No se descartarán, sobrescribirán ni incorporarán automáticamente a un commit.

## 4. Fuentes y uso del RAG

### Verificación realizada durante la planificación

- `opencode mcp list` informa que **`hg-rag-mcp` está conectado**.
- Se recuperaron documentos, búsquedas y secciones del modelo de madurez mediante herramientas del MCP.
- El registro de `scripts/indexar-biblioteca.py` confirma que la ejecución terminó el 30 de octubre de 2026 a las 23:04:29 (-06:00), con 25 de 25 archivos con registro de éxito y 0 errores en esa ejecución.
- La conexión, la recuperación consultada y la finalización registrada están comprobadas; no equivalen a una auditoría exhaustiva de integridad o de calidad de extracción de cada documento.

### Referencia principal

**The AI Adoption Maturity Model v1.0**, desarrollado por Carnegie Mellon University Software Engineering Institute y Accenture. Archivo local: `biblioteca/The_AI_Adoption_Maturity_Model.pdf`.

| Referencia recuperada | Aplicación al sitio |
| --- | --- |
| Sección 1.2, pp. 25–26 del PDF | Medir capacidades y progreso con evidencia, no con promesas o listas superficiales. |
| Sección 2.2, pp. 32–34 del PDF | Definir el alcance por empresa, unidad o proceso antes de evaluar. |
| Sección 4.2, p. 50 del PDF | Considerar capacidades organizacionales y de ingeniería, no solo herramientas. |
| Sección 5.2, p. 111 y siguientes del PDF | Construir una hoja de ruta según estado objetivo, brechas, valor, esfuerzo y dependencias. |

Las ocho dimensiones de referencia son:

**Cambio organizacional**
1. Estrategia organizacional.
2. Personas y cultura.
3. Rediseño de procesos de trabajo.
4. Riesgos y gobierno.

**Ingeniería del ciclo de vida de IA**
5. Datos.
6. Ingeniería.
7. Operación.
8. Ecosistema tecnológico.

El modelo también describe cinco niveles: exploración, implementación, alineación, escalado y preparación para la evolución futura. Si se muestran en el sitio, se explicarán como niveles de adopción de IA, no como una clasificación universal del éxito empresarial.

### Política de prioridad documental para este trabajo

`The_AI_Adoption_Maturity_Model.pdf` será la fuente principal para estructurar el 50 % de consultoría y acompañamiento: evaluación de capacidades, madurez, adopción organizacional, estado objetivo y hoja de ruta. Prioridad no significa exclusividad ni obliga a atribuir a ese documento asuntos que no cubre.

La recuperación mediante `hg-rag-mcp` seguirá este orden:

1. Para estos temas, consultar primero el modelo mediante un filtro por su URI/nombre de archivo, y leer las secciones relevantes antes de redactar.
2. Consultar después la biblioteca completa, sin ese filtro, para recuperar fundamentos complementarios, matices y aplicaciones pertinentes.
3. Para el 50 % de ingeniería e implementación, utilizar las fuentes técnicas más adecuadas al asunto, manteniendo la coherencia con las necesidades y capacidades identificadas en el diagnóstico.
4. Registrar documento y página de las afirmaciones utilizadas. Si hay diferencias entre fuentes, explicarlas según su alcance y contexto; la prioridad no autoriza a ignorar evidencia contraria.
5. Si el modelo no contiene sustento para una afirmación, indicarlo y buscarlo en las demás fuentes, sin inventarlo ni atribuírselo al modelo.

Haiku.rag permite dirigir consultas mediante filtros documentales; el agente aplicará esta secuencia y la jerarquía editorial. No se asumirá un peso automático y persistente en el ranking de búsquedas generales. Esta política queda definida para el refactor y no cambia por sí sola la configuración del MCP.

No se eliminarán documentos, limitarán permanentemente las colecciones ni modificarán embeddings, índices o modelos para conseguir esta prioridad. Tampoco se usarán porcentajes artificiales de fragmentos o citas como sustituto de la pertinencia de las fuentes.

### Fuentes complementarias

**NIST AI Risk Management Framework Playbook**, archivo local `biblioteca/AI_RMF_Playbook.pdf`: pp. 9–10 del PDF para priorización de riesgos; pp. 18–20 para responsabilidades, formación y coordinación organizacional.

Esta referencia no constituye una lista cerrada: los demás documentos de la biblioteca seguirán disponibles y se consultarán cuando aporten evidencia pertinente.

### Límites de interpretación

- El modelo principal evalúa madurez de adopción de IA. No sustituye una evaluación integral de toda la empresa, ni acredita a HGuerra como certificador o representante de sus autores.
- La propuesta comercial se describirá como evaluación de capacidades de la empresa para evolucionar con datos e IA, indicando el alcance acordado.
- Una empresa no necesita alcanzar el máximo nivel en todas las dimensiones. El estado objetivo depende de sus necesidades y restricciones.
- No se inventarán escalas, puntuaciones ni ponderaciones atribuidas al modelo.
- Las fuentes fundamentan el método; no prueban experiencia, resultados o acreditaciones personales.
- Por decisión posterior del propietario, las fuentes se utilizarán únicamente como apoyo interno. No se publicarán bibliografías, nombres de documentos o instituciones ni enlaces a marcos externos en el sitio comercial. Tampoco se atribuirá autoría propia de modelos ajenos. No se enlazarán rutas locales ni se distribuirán los PDF.
- No es necesario reindexar la biblioteca para ejecutar el refactor mientras la recuperación requerida siga funcionando.

## 5. Arquitectura de información y navegación

```text
Inicio (/)
├── Metodología (/metodologia)
├── Soluciones (/soluciones)
├── Sobre mí (/sobre-mi)
└── Contacto (/contacto)

Auxiliares legales: /privacidad y /terminos
```

### Navegación principal

Orden: **Inicio → Metodología → Soluciones → Sobre mí → Contacto**.

- Mantener el logo enlazado a Inicio.
- Sustituir el desplegable comercial anterior por enlaces directos a las cinco páginas.
- Contacto debe dirigir siempre a `/contacto`, incluso desde Inicio.
- Mantener el menú móvil existente, adaptando sus enlaces y estados activos.
- Conservar `aria-current`, controles de expansión y cierre por teclado pertinentes.
- El pie repetirá los destinos principales y conservará enlaces legales y canales de contacto.

### Enlaces contextuales

- Inicio presenta el recorrido y enlaza a Metodología, Soluciones y Contacto.
- Metodología enlaza a soluciones relacionadas y a Contacto con el motivo pertinente.
- Soluciones enlaza a Metodología para explicar el enfoque y a Contacto con contexto.
- Sobre mí enlaza a Metodología, Soluciones y Contacto sin repetir el catálogo completo.
- Contacto ofrece acceso a Sobre mí y a las condiciones legales sin distraer del envío.
- Las páginas interiores tendrán contexto de navegación y breadcrumbs coherentes con su URL; no habrá páginas comerciales huérfanas.

## 6. Contenido propuesto por página

### 6.1 Inicio — `/`

**Objetivo:** explicar quién eres, qué problemas comprendes y cómo conectas orientación empresarial con ejecución técnica.

Secuencia propuesta:
1. Presentación personal, eslogan y propuesta de valor clara.
2. Desafíos reconocibles: decisiones con información dispersa, iniciativas sin prioridades, capacidades insuficientes o pilotos que no se sostienen.
3. Dos capacidades con igual jerarquía: consultoría y acompañamiento; ingeniería e implementación.
4. Resumen del recorrido: comprender y evaluar; priorizar y diseñar; implementar y mejorar.
5. Aplicaciones orientadas a resultados, con ejemplos explícitamente identificados como tales.
6. Presentación breve de Héctor y enlace a Sobre mí.
7. Invitación a conversar sobre el desafío.

CTA principal: **«Conversemos sobre tu desafío»**. Secundario: **«Explorar cómo trabajo»**.

No se publicarán métricas solo para llenar espacios. `VERIFIED_METRICS` seguirá limitado a evidencia validada y trazable.

### 6.2 Metodología — `/metodologia`

**Objetivo:** mostrar un proceso serio, comprensible y adaptado al punto de partida del cliente.

Se conservarán las tres macroetapas del Brand Center, explicando cinco actividades:

| Macroetapa | Actividad | Entregable o resultado de trabajo propuesto |
| --- | --- | --- |
| Comprender y evaluar | Comprender el desafío y acordar el alcance | Objetivos, contexto, restricciones y responsables definidos. |
| Comprender y evaluar | Evaluar capacidades y madurez | Situación actual, evidencia disponible y brechas relevantes. |
| Priorizar y diseñar | Definir el estado objetivo y la hoja de ruta | Iniciativas priorizadas, dependencias, criterios de éxito y próximos pasos. |
| Implementar y mejorar | Diseñar e implementar | Solución integrada, controles, documentación y transferencia apropiados al alcance. |
| Implementar y mejorar | Acompañar, medir y ajustar | Adopción, seguimiento de resultados y decisiones de evolución. |

La página explicará qué se evalúa, cómo participa el cliente y qué recibe. No impondrá un proceso exhaustivo a todos los proyectos ni prometerá un diagnóstico completo en una conversación inicial.

### 6.3 Soluciones — `/soluciones`

**Objetivo:** conectar necesidades empresariales con formas concretas de intervención.

Dos bloques de igual importancia:

| Consultoría y acompañamiento | Ingeniería e implementación |
| --- | --- |
| Evaluación de madurez y hoja de ruta. | Integración, calidad y disponibilidad de datos e indicadores. |
| Adopción, gobierno y acompañamiento empresarial. | IA aplicada a documentos, conocimiento y procesos, con controles adecuados. |

Para cada línea se describirá:
- El desafío que ayuda a abordar y las señales de que puede ser pertinente.
- El trabajo que se realiza y sus límites.
- Entregables comprensibles y utilidad esperada.
- Criterios acordables para evaluar el cambio, sin garantizar resultados no comprobados.
- La relación entre decisiones de negocio y trabajo técnico.
- Una invitación contextual a Contacto.

La base será la landing de `/automatizacion-con-ia-agentica`: conservar los ejemplos, principios de control humano, integraciones, FAQ y componentes que sigan siendo pertinentes. Eliminar repeticiones y reformular el enfoque centrado en automatización.

Automatización e IA agéntica podrán aparecer como capacidades subordinadas al problema, no como identidad dominante. No habrá un catálogo de proveedores ni herramientas como argumento de compra.

### 6.4 Sobre mí — `/sobre-mi`

**Objetivo:** generar confianza en la persona que orienta y ejecuta el trabajo.

- Refactorizar la página actual conservando el retrato y los antecedentes personales comprobables.
- Explicar cómo se complementan la formación técnica, el criterio empresarial y la implementación directa.
- Mantener una voz en primera persona, sin simular una corporación o un equipo inexistente.
- Presentar el acompañamiento, la documentación y la transferencia como parte de una relación profesional sostenible.
- Reformular objeciones y criterios de encaje que actualmente restringen la oferta a campo u offline.
- No inventar una historia personal, experiencia, credenciales ni testimonios para reforzar el relato.
- Usar el código y las referencias personales existentes como punto de partida, verificando afirmaciones antes de publicarlas.

### 6.5 Contacto — `/contacto`

**Objetivo:** permitir que el visitante describa su situación sin necesitar una solución técnica predefinida.

- Conservar la página existente y su renderizado bajo demanda.
- Mantener el formulario breve con correo, motivo de consulta y descripción del desafío.
- Proponer motivos para madurez y hoja de ruta, datos e indicadores, IA aplicada, acompañamiento y «No estoy seguro».
- Conservar la selección contextual desde otras páginas y resolver de forma segura los parámetros desconocidos.
- Mantener compatibilidad razonable con enlaces de contacto anteriores mediante normalización de motivos, sin conservar el catálogo anterior como oferta pública.
- Explicar qué ocurre después del envío y qué información ayuda a responder.
- No afirmar que se conoce información del visitante más allá del contexto realmente transmitido en el enlace.
- No prometer agenda reservada, diagnóstico completo gratuito ni tiempos de respuesta que no estén acordados.

## 7. Despublicación y migración de rutas

| Ruta actual | Tratamiento propuesto | Resultado esperado |
| --- | --- | --- |
| `/` | Refactorizar la página existente. | Inicio del nuevo posicionamiento. |
| `/gestion-de-operaciones-de-campo` | Conservar su archivo como `src/pages/_gestion-de-operaciones-de-campo.astro`, excluido del router de Astro. | Sin página generada ni contenido servido; acceso directo devuelve 404. |
| `/automatizacion-con-ia-agentica` | Reutilizar el contenido vigente en Soluciones y dejar una redirección. | 301 HTTP directo a `/soluciones`. |
| `/automatizacion-de-procesos` | Actualizar la redirección existente. | 301 HTTP directo a `/soluciones`, sin pasar por la URL anterior. |
| `/sobre-mi` | Refactorizar la página existente. | Mismo destino, nuevo enfoque. |
| `/contacto` | Refactorizar la página y su formulario. | Mismo destino y continuidad de funciones. |
| `/privacidad` y `/terminos` | Conservar; ajustar únicamente referencias afectadas si resulta necesario. | Acceso desde el formulario y el pie. |

Se crearán `/metodologia` y `/soluciones` dentro del proyecto actual.

### Reglas de publicación

- El prefijo `_` es una convención nativa de Astro para excluir archivos del enrutamiento y de la salida generada; no crea otra versión del sitio.
- Campo no se redirigirá a una versión pública alternativa ni se dejará accesible solo con `noindex`.
- Retirar Campo y los destinos antiguos de menús, tarjetas, servicios relacionados, sitemap y referencias comerciales estructuradas.
- Conservar el código y la configuración de Campo necesarios, sin exigir que esté activo en el catálogo público.
- Las redirecciones serán respuestas HTTP reales. Con la salida estática actual, no basta con generar una página de meta-refresh: se utilizará el mecanismo compatible con el adaptador Node, sin cambiar todo el sitio a SSR.
- Al desplegar, comprobar que el alojamiento no conserva HTML antiguo ni respuestas cacheadas de Campo. La despublicación local no prueba que producción haya cambiado.
- La exclusión de una página no pretende ocultar código de un repositorio público ni sustituye controles de acceso para datos privados.

## 8. UI/UX y contrato de marca

Fuente de verdad: `docs/brandcenter/index.html` y `docs/brandcenter/README.md`, en coordinación con los estilos del proyecto.

Se conservarán:
- Monograma HG y recursos SVG existentes, respetando sus proporciones y fondos recomendados.
- Paleta slate, azul y cian; no introducir violeta como acento principal.
- Tipografía del sistema; no incorporar fuentes externas.
- Superficies claras y oscuras, radios, contenedores y botones definidos en el sistema existente.
- Retrato profesional e iconografía coherente con la familia ya utilizada.

Mejoras previstas:
- Títulos más breves, jerarquía clara y párrafos legibles.
- Menos repeticiones entre páginas y menos tarjetas cuando un bloque de texto sea suficiente.
- Igual protagonismo visual para orientación empresarial e ingeniería.
- Una acción principal por bloque y recorridos claros hacia Contacto.
- Navegación y formularios utilizables en pantallas pequeñas y con teclado.
- Estados de foco visibles, encabezados ordenados y elementos semánticos.
- Movimiento prescindible y respetuoso de `prefers-reduced-motion`.
- Estados explicados con texto, no exclusivamente por color.

No se rediseñará la marca ni se copiará la estructura completa del manual como si fuera una plantilla de páginas web. Sus notas sobre el sitio publicado no se marcarán como resueltas antes de verificar el despliegue.

## 9. Reutilización y cambios técnicos previstos

| Área | Archivos principales | Intervención |
| --- | --- | --- |
| Páginas | `src/pages/index.astro`, `sobre-mi.astro`, `contacto.astro`; nuevas `metodologia.astro` y `soluciones.astro` | Implementar la arquitectura aprobada sobre el código actual. |
| Publicación de rutas | Páginas de Campo y automatización; configuración Astro solo si corresponde | Excluir Campo y resolver redirecciones reales sin cadenas. |
| Navegación y pie | `src/components/MainNav.astro`, `SiteFooter.astro`, `src/data/site.ts` | Cinco destinos principales y enlaces legales auxiliares. |
| Configuración comercial | `src/data/commercial.ts` | Sustituir la jerarquía anterior, preservar configuración no pública y centralizar los mensajes compartidos. |
| Contenido reutilizable | `src/data/home.ts`, `src/data/serviceLandings.ts`, `src/types/serviceLanding.ts` si se necesita | Adaptar contenido y tipos sin duplicar estructuras. |
| Plantilla y secciones | `ServiceLanding.astro`, `ContactStrip.astro`, `sections/Contact/index.astro`, `RelatedServices.astro` | Reutilizar bloques pertinentes y eliminar dependencias comerciales obsoletas. |
| Contacto | `src/data/contact.ts`, `ContactForm.astro`, `src/pages/contacto.astro` | Actualizar motivos y contexto preservando el contrato de envío. |
| SEO | `SeoHead.astro`, `src/data/site.ts`, `src/pages/sitemap.xml.ts`, recursos sociales afectados | Alinear identidad, metadatos y URLs públicas. |
| Estilos | `src/styles/global.css` y estilos locales afectados | Ajustes mínimos dentro del sistema de marca, sin crear otro sistema visual. |
| Contexto y documentación | `.agents/product-marketing-context.md`, `README.md` cuando corresponda | Evitar contradicciones con el nuevo enfoque y distinguir implementación de publicación. |

### Clean Code y DRY

- Mantener Astro, las dependencias y las convenciones actuales.
- Compartir mensajes, destinos y datos cuando varios consumidores los necesitan.
- Extraer componentes solo cuando exista reutilización efectiva; no crear una arquitectura genérica para necesidades hipotéticas.
- No forzar todas las páginas a usar la landing completa ni rellenar configuraciones vacías para satisfacer una plantilla demasiado amplia.
- Mantener tipado claro para datos comerciales y de contacto.
- Retirar únicamente referencias o código cuya obsolescencia derive de este refactor. No hacer limpieza general de módulos ajenos.
- No borrar los recursos conservados de Campo ni duplicarlos como una versión legacy.

## 10. Continuidad del formulario y seguridad

### Funcionalidades a preservar

- Envío mediante EmailJS y las variables públicas de configuración existentes.
- Nombres de campos utilizados por la plantilla: correo, respuesta, nombre derivado, motivo, etiqueta del servicio, asunto, mensaje, origen, página y fecha de envío.
- Contexto de origen y motivo preseleccionado.
- Validación de los campos requeridos.
- Prevención de envíos duplicados mientras una solicitud está en curso.
- Mensaje de éxito, manejo de errores y de límite de intentos.
- Conservación del texto introducido cuando falla el envío.
- Restablecimiento coherente después de un envío exitoso.
- WhatsApp y su comportamiento alternativo si no está configurado.
- Enlaces a Privacidad y Términos.

### Adaptaciones

- CTA de formulario coherente, por ejemplo «Enviar consulta», sin fingir una reserva de calendario.
- Mensajes de estado accesibles mediante mecanismos semánticos apropiados.
- Instrucciones contextualizadas por motivo, sin exigir al visitante conocer tecnologías.
- Normalizar motivos y rutas de origen conocidos; tratar los parámetros como datos no confiables.
- Mantener el escape de contenido y no insertar entradas del usuario mediante HTML sin sanear.
- No exponer claves privadas; una clave pública de EmailJS no se tratará como si fuera un secreto de servidor.
- No añadir capturas de documentos sensibles ni almacenamiento persistente de lo escrito.

No se atribuirá al frontend protección equivalente a controles del proveedor. Si se detecta una limitación concreta en dominios permitidos, plantilla o control de abuso de EmailJS, se documentará y se solicitará autorización para el cambio externo necesario.

## 11. SEO y contenido responsable

- Títulos y descripciones específicos para cada página, alineados con madurez, datos, IA y consultoría independiente.
- Canonical hacia el destino final de cada página, sin parámetros de contacto.
- Actualizar Open Graph e imágenes sociales afectadas para no seguir anunciando ofertas anteriores.
- Revisar la identidad estructurada de Héctor Guerra como `Person`, sus servicios y la relación con la marca, evitando sugerir una corporación inexistente.
- Reutilizar los constructores actuales de datos estructurados; no incorporar un sistema paralelo.
- Asegurar que el JSON-LD refleje contenido visible, identidad real y ofertas vigentes.
- No publicar precios, condiciones ni métricas antiguas dentro del JSON-LD después de retirarlas del contenido visible.
- Mantener un sitemap coherente con las páginas indexables: cinco páginas comerciales y las auxiliares legales pertinentes, sin Campo ni redirecciones.
- No usar `robots.txt` como mecanismo de despublicación ni prometer retirada inmediata de resultados de buscadores.
- Corregir enlaces y anclas afectados por la reorganización.
- Describir capacidades tecnológicas en lenguaje neutral: integración de sistemas, calidad de datos, indicadores, búsqueda sobre conocimiento, procesamiento documental, supervisión humana y operación confiable.
- Diferenciar ejemplos hipotéticos, objetivos de mejora y resultados realmente demostrados.

## 12. Secuencia de ejecución tras aprobación

### Fase 1 — Configuración compartida y límites de publicación

1. Preservar el trabajo preexistente y continuar en la rama actual.
2. Separar configuración conservada de Campo y publicación activa.
3. Definir los destinos principales, motivos de consulta y mensajes compartidos.
4. Retirar del nuevo recorrido las ofertas, importes y condiciones anteriores no confirmados.

**Resultado:** base de datos de contenido coherente que no obliga a publicar Campo para que funcionen las demás páginas.

### Fase 2 — Contenido y composición de las cinco páginas

1. Refactorizar Inicio y Sobre mí.
2. Construir Metodología con el alcance y las fuentes descritas.
3. Transformar los recursos vigentes de automatización en Soluciones.
4. Reutilizar y ajustar los bloques compartidos necesarios, conservando el contrato visual del Brand Center.

**Resultado:** recorrido comercial completo con equilibrio entre consultoría e ingeniería.

### Fase 3 — Contacto y navegación

1. Adaptar página, motivos, instrucciones y contexto de contacto.
2. Preservar el contrato de EmailJS y los canales alternativos.
3. Ajustar accesibilidad de estados y consistencia de los botones.
4. Actualizar navegación principal, móvil, pie y enlaces contextuales.

**Resultado:** continuidad del flujo principal de captación con el nuevo posicionamiento.

### Fase 4 — Publicación de rutas y SEO

1. Excluir Campo del router sin borrar su código.
2. Implementar los destinos y redirecciones acordados.
3. Actualizar sitemap, canonical, metadatos, imágenes sociales y datos estructurados afectados.
4. Alinear el contexto de marketing y la documentación pertinente, sin afirmar despliegue.

**Resultado:** estructura local lista para aceptación, sin duplicación de páginas comerciales.

### Fase 5 — Verificación focal y entrega

Aplicar la verificación mínima descrita a continuación, corregir hallazgos concretos y entregar un resumen de cambios, evidencia y pendientes externos. No desplegar automáticamente.

## 13. QA y criterios de aceptación

La verificación se concentra en dos riesgos concretos: seguir sirviendo la página que debe retirarse y bloquear o degradar el flujo principal de contacto. Para contenido, estilos y componentes ordinarios se priorizará revisión focal del código y evidencia existente, sin crear pruebas por archivo ni infraestructura nueva.

### A. Publicación y rutas

- Campo conserva su código, pero no figura como ruta generada ni artefacto público.
- El acceso directo a su antigua URL, con y sin barra final según el servidor, devuelve 404 y no sirve su contenido.
- Campo no aparece en navegación, sitemap ni recomendaciones comerciales.
- Las dos rutas antiguas de automatización devuelven un 301 HTTP directo a `/soluciones`, sin bucles, cadenas ni depender únicamente de meta-refresh.
- Las cinco páginas principales tienen destinos coherentes y las rutas legales siguen disponibles.

Se utilizará la evidencia mínima que permita comprobar el comportamiento real de enrutamiento y salida con el adaptador actual. Si es necesaria una compilación para comprobar los artefactos de publicación, se hará para cubrir ese riesgo concreto, no como ritual de cierre ni en ciclos repetidos sin cambios relevantes.

### B. Contacto

- Cambiar la visibilidad de Campo no provoca errores de importación en Contacto ni en las páginas que consumen datos compartidos.
- Los motivos y el contexto nuevos llegan al contrato de la plantilla de EmailJS sin perder correo, mensaje u origen.
- Las entradas antiguas o desconocidas se normalizan o reciben una alternativa segura.
- La comprobación mínima del flujo cubre el envío exitoso y el fallo sin pérdida del mensaje; se reutilizarán herramientas existentes o interceptación de transporte cuando estén disponibles, sin enviar correos reales por defecto.
- La llamada a la acción no promete una cita que no se ha reservado.
- WhatsApp y los enlaces legales mantienen su comportamiento.

### C. Revisión focal del entregable

- El contenido da igual protagonismo a consultoría/acompañamiento y a ingeniería/implementación.
- Se respeta el Brand Center: identidad, tipografía, paleta, proporciones y voz.
- Se revisan semántica, jerarquía, foco, contraste y reglas responsive de los elementos modificados.
- El contenido no vende proveedores, inventa resultados o presenta el modelo de referencia como certificación propia.
- El sitemap y el JSON-LD no contradicen los destinos y ofertas visibles.

No se incorporarán suites amplias, pruebas de carga, snapshots, objetivos de cobertura ni herramientas de auditoría general por rutina. Solo se repetirá evidencia invalidada por un cambio relevante o por un fallo concreto.

## 14. Aceptación, despliegue y pendientes externos

### Separación de hitos

1. **Aprobación del plan:** autoriza el alcance de implementación local descrito.
2. **Entrega local:** incluye código, evidencia real y limitaciones conocidas; no significa que hguerra.com haya cambiado.
3. **Aceptación y despliegue:** requieren autorización y acceso correspondientes.
4. **Verificación en producción:** confirma rutas, caché y funcionamiento externo que no pueden acreditarse solo desde el código local.

### Aspectos externos

- Entrega real del correo y compatibilidad efectiva con la plantilla y restricciones de la cuenta EmailJS.
- Configuración real de WhatsApp y variables del alojamiento.
- Retirada de artefactos o cachés anteriores de Campo en el despliegue.
- Propagación de cambios a buscadores y vistas previas sociales; no es inmediata ni está garantizada por el sitemap.
- Precios, plazos, gratuidad de prestaciones y condiciones de la nueva oferta si el propietario decide publicarlos.
- Afirmaciones biográficas o comerciales que necesiten validación del propietario.

Estos pendientes no impiden continuar trabajo local seguro. No se reconstruirá el sitio ni se repetirá investigación para forzar su cierre sin nueva evidencia.

## 15. Decisiones aprobadas por el propietario

1. Cinco páginas comerciales principales y conservación de Privacidad y Términos como auxiliares.
2. Campo despublicado con 404, código conservado mediante exclusión nativa de Astro y sin página alternativa pública.
3. Las dos rutas anteriores de automatización redirigen directamente a `/soluciones`.
4. Uso de `The_AI_Adoption_Maturity_Model.pdf` como referencia principal del 50 % de consultoría y acompañamiento, consultándolo primero y complementándolo con toda la biblioteca, con su alcance explícito y sin promesas de certificación.
5. Equilibrio comercial y visual 50/50, sin imponerlo como reparto contractual.
6. Formulario breve y contrato de EmailJS conservados, sin añadir calendario, CRM o un nuevo backend.
7. No trasladar automáticamente precios, plazos, condiciones o promesas de diagnóstico gratuito de la oferta anterior.
8. Sin nuevas versiones legacy, rediseño de marca, migración de framework ni despliegue automático.

## 16. Resultado de implementación y evidencia local

- Implementadas las cinco páginas principales con igual jerarquía para consultoría/acompañamiento e ingeniería/implementación, respetando el sistema visual existente.
- Consultado primero el modelo de madurez mediante filtro documental del MCP y después la biblioteca sin filtro, recuperando material complementario de NIST. Tras la revisión del propietario se retiró la sección pública de referencias: las fuentes quedan como apoyo interno, no como contenido comercial.
- Campo conserva exactamente el contenido del archivo original: se comprobó igualdad con la versión de Git; únicamente se renombró con `_` para excluirlo del router.
- Generada la salida de Astro con el adaptador Node. La compilación terminó correctamente y no produjo HTML público de Campo.
- En el servidor local de producción se verificaron las cinco páginas con respuesta 200; Campo con 404, incluidas variantes con barra final y `index.html`; ambas rutas antiguas de automatización con 301 directo a `/soluciones`; y sitemap con los destinos nuevos y auxiliares legales, sin rutas retiradas.
- El formulario se comprobó en un navegador real con transporte de EmailJS interceptado: campos de plantilla y contexto presentes, éxito con restablecimiento coherente, error 429 sin perder el mensaje y botón habilitado nuevamente. También se comprobó la normalización de un motivo anterior y el descarte de un origen desconocido y una etiqueta arbitraria. No se envió ningún correo real.
- Tras ajustar las ayudas del formulario se regeneró la salida y se repitió únicamente la comprobación del flujo de Contacto afectado. La verificación temporal no añadió dependencias de pruebas al proyecto.
- Se actualizaron metadatos, identidad estructurada como persona, imagen social, navegación compartida y contexto de marketing. La formación personal distingue la maestría en curso, tal como figura en el CV local.

**Pendiente externo:** aceptación visual del propietario, entrega efectiva de correo con la cuenta real, autorización de despliegue, retirada de cachés/artefactos antiguos y comprobación de hguerra.com en producción. No se ha desplegado ni creado un commit de este refactor.

**Siguiente acción:** revisar la implementación local y decidir su aceptación. La verificación local no equivale a publicación en producción.
