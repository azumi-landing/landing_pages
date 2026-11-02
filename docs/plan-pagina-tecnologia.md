# Plan — Página Tecnología y enlaces contextuales

**Estado:** aprobado por el propietario e implementado localmente. Aceptación visual y despliegue pendientes.
**Proyecto:** hguerra.com.  
**Rama:** `refactor/negocio-2027`.  
**Antecedente:** [Refactor de negocio 2027](plan-refactor-negocio-2027.md).

> La implementación local fue autorizada por el propietario. El despliegue, los envíos reales de correo, commits y operaciones remotas no están autorizados por este plan. Se preserva el trabajo existente, incluidos los cambios pendientes del refactor anterior.

## 1. Objetivo

Crear `/tecnologia` para mostrar la capacidad de ingeniería de Héctor Guerra sin saturar las páginas comerciales con siglas, herramientas o explicaciones técnicas extensas.

El recorrido será:

**Entiendo tu desafío → explico cómo puedo ayudarte → si querés, profundizás en la tecnología.**

- **Soluciones:** qué desafíos ayudo a resolver y qué trabajo podemos realizar.
- **Tecnología:** qué capacidades permiten construir y sostener esas soluciones.
- **Metodología:** cómo evaluamos, priorizamos, implementamos y mejoramos.

La nueva página profundiza el 50 % de ingeniería e implementación. No cambia el equilibrio comercial 50/50 del posicionamiento principal ni convierte el sitio en un catálogo de proveedores.

## 2. Alcance

### Incluido

1. Crear la página estática `/tecnologia` en el proyecto Astro existente.
2. Organizar el contenido en tres bloques con dos niveles de lectura: explicación breve y detalle técnico opcional.
3. Añadir Tecnología al menú principal, al menú móvil, al pie y al sitemap.
4. Añadir enlaces contextuales desde Inicio, Soluciones, Metodología y Sobre mí.
5. Mantener acceso desde Contacto mediante navegación y pie, sin distraer dentro del formulario.
6. Reutilizar los estilos, el layout, los componentes de contacto y los patrones nativos de desplegables existentes.
7. Configurar metadatos, canonical y breadcrumb de la nueva página con los mecanismos actuales.
8. Registrar `/tecnologia` como origen válido de contacto para conservar ese contexto.
9. Actualizar la documentación y el contexto de marketing afectados, una vez implementado.

### No incluido

- Rehacer el sitio, crear versiones legacy o cambiar de framework.
- Añadir demostraciones ejecutables, chatbots, agentes en vivo, búsquedas públicas o acceso al RAG desde la web.
- Publicar bibliografías, nombres de documentos o instituciones, enlaces a marcos externos o bloques de «fundamento metodológico».
- Crear una tarjeta por keyword, una nube de etiquetas o un muro de logos de herramientas.
- Crear páginas secundarias por tecnología, catálogos comerciales, nuevas tarifas o nuevos servicios.
- Modificar el transporte o la plantilla de EmailJS, los campos del formulario o la integración de WhatsApp.
- Reactivar Campo o cambiar las redirecciones anteriores de automatización.
- Cambiar la identidad del Brand Center, instalar dependencias o agregar infraestructura de pruebas por rutina.
- Desplegar, enviar correos reales, hacer commit o push sin autorización adicional.

## 3. Estructura de la página

### 3.1 Encabezado breve

**Nombre de la página:** Tecnología.

**Título propuesto:**

> La tecnología detrás de cada solución.

**Introducción propuesta:**

> Conecto datos, modelos y sistemas según lo que tu empresa necesita. Estas son las capacidades que permiten llevar una idea a la práctica.

El encabezado no enumerará todas las tecnologías ni competirá con el mensaje de negocio. Usará la composición, tipografía, paleta y jerarquía del sitio actual.

### 3.2 Tres bloques principales

| Bloque | Ancla estable | Resumen visible |
| --- | --- | --- |
| **Datos para decidir** | `/tecnologia#datos` | Integrar información, mejorar su calidad y convertirla en indicadores y análisis útiles. |
| **Inteligencia para asistir y actuar** | `/tecnologia#ia` | Comprender documentos e imágenes, consultar conocimiento y coordinar tareas con controles. |
| **Ingeniería para sostenerlo** | `/tecnologia#ingenieria` | Integrar las soluciones, desplegarlas en el entorno adecuado y sostener su operación. |

Cada bloque tendrá únicamente:

1. Un título claro y un párrafo breve sobre su utilidad.
2. Un ejemplo corto de aplicación posible, integrado en el bloque.
3. Un desplegable **«Explorar capacidades técnicas»** con los conceptos agrupados por afinidad.

Los bloques estarán en un orden de lectura natural, sin convertir cada término en una tarjeta. El detalle permanecerá cerrado inicialmente. Las anclas estarán en las secciones visibles, no en contenido oculto, para que los enlaces externos lleguen siempre a un contexto comprensible.

### 3.3 Cierre y conversión

Un único cierre comercial mediante `ContactStrip.astro`, sin añadir un formulario a Tecnología.

**CTA propuesto:** «Conversemos sobre lo que necesitás construir».

Destino: `/contacto`, usando el constructor de enlaces existente y conservando `/tecnologia` como origen. El motivo inicial será el valor existente `otro`: no se creará una nueva línea de servicio solo por añadir la página.

No se repetirá un botón de contacto en cada familia técnica. Los accesos globales ya existentes permanecerán.

## 4. Cobertura de las keywords

La lista siguiente es una guía de cobertura editorial, no una lista que deba mostrarse completa al abrir la página.

### A. Datos para decidir

**Integración y preparación**
- Ingeniería e integración de datos.
- Procesos ETL/ELT y orquestación de flujos.
- Bases de datos relacionales y no relacionales.
- Calidad y validación de datos.

**Información de negocio**
- Almacenes de datos (DWH) y modelado dimensional.
- Inteligencia de negocios (BI).
- Indicadores de desempeño (KPIs).
- Analítica y visualización.

**Análisis y predicción**
- Análisis estadístico.
- Machine Learning y modelos predictivos.
- Optimización matemática, explicando su aplicación concreta y sus restricciones.

**Ejemplo visible propuesto:** reunir información de varias áreas, construir indicadores consistentes y detectar desviaciones que requieren atención.

### B. Inteligencia para asistir y actuar

**Comprensión de información**
- Deep Learning.
- Procesamiento de lenguaje natural (NLP).
- Visión artificial.
- Inteligencia artificial generativa y multimodal.
- Modelos de lenguaje (LLM).

**Conocimiento y asistencia**
- Búsqueda semántica.
- Generación aumentada por recuperación (RAG), explicada en lenguaje humano antes de usar la sigla.
- Asistentes inteligentes conectados con información pertinente de la empresa.

**Coordinación y ejecución**
- IA agéntica y sistemas multiagente.
- Integración y ejecución de herramientas y funciones.
- Automatización de procesos, subordinada al desafío y sin recuperar el posicionamiento anterior como oferta principal.

**Ejemplo visible propuesto:** interpretar una solicitud y sus documentos, recuperar contexto y preparar una acción para revisión o ejecución autorizada.

### C. Ingeniería para sostenerlo

**Software e integración**
- Desarrollo de APIs y servicios.
- Arquitectura de software.
- Microservicios cuando aporten una ventaja real, no como arquitectura obligatoria.

**Infraestructura y entrega**
- Contenedores.
- Infraestructura cloud, on-premise e híbrida.
- Integración y despliegue continuo (CI/CD).

**Operación y evolución**
- MLOps y ciclo de vida de modelos.
- Observabilidad.
- Seguridad, gobernanza y gestión de riesgos.
- Optimización de costos y mejora continua.

**Ejemplo visible propuesto:** integrar una solución mediante APIs, desplegarla en el entorno acordado y seguir su calidad, uso y costo para decidir cómo evolucionarla.

## 5. Reglas para evitar saturación

- La lectura inicial debe explicar las tres capacidades sin abrir ningún desplegable.
- Mantener un párrafo breve y un ejemplo por bloque; no duplicar el contenido de Soluciones.
- Usar subtítulos y listas breves dentro de cada desplegable, no una enumeración corrida de siglas.
- Explicar primero para qué sirve una capacidad y después su nombre técnico.
- No crear nueve secciones principales ni un sistema de pestañas, filtros o modales para navegar el catálogo.
- No abrir todos los detalles de manera predeterminada ni exigir JavaScript para consultarlos.
- No añadir una sección independiente de ejemplos, diagramas complejos, FAQ o casos si repite lo ya explicado.
- No incluir promesas cuantificadas, superlativos ni ejemplos presentados como resultados reales.
- Mantener voz personal: «trabajo», «diseño», «integro». No sugerir una corporación o tecnologías propietarias con expresiones como «nuestra plataforma».

## 6. Enlaces desde las demás páginas

Todos serán enlaces secundarios y descriptivos. No reemplazarán los CTA comerciales existentes ni competirán visualmente con Contacto.

| Origen | Ubicación | Texto propuesto | Destino |
| --- | --- | --- | --- |
| **Inicio** | Al final del bloque de ingeniería, junto a la posibilidad de explorar soluciones. | «Conocé la tecnología detrás de las soluciones» | `/tecnologia` |
| **Soluciones: datos** | Dentro de la solución de datos, después de explicar trabajo y utilidad. | «Explorar capacidades de datos» | `/tecnologia#datos` |
| **Soluciones: IA** | Dentro de la solución de IA, después de explicar trabajo y utilidad. | «Explorar capacidades de inteligencia artificial» | `/tecnologia#ia` |
| **Metodología** | En el bloque de implementación y acompañamiento, sin añadir otra sección. | «Cómo construyo y sostengo las soluciones» | `/tecnologia#ingenieria` |
| **Sobre mí** | Al final de la presentación de experiencia técnica. | «Explorar mis capacidades técnicas» | `/tecnologia` |
| **Contacto** | Navegación principal y pie compartidos. | «Tecnología» | `/tecnologia` |

### Aplicación al componente compartido

`ServicePillars.astro` aparece tanto en Inicio como en Soluciones. La implementación debe aprovechar su variante `detailed`:

- En Inicio, añadir únicamente el enlace general en el pilar de ingeniería.
- En Soluciones, añadir los dos enlaces específicos en las soluciones `datos` e `ia`.
- No añadir enlaces técnicos equivalentes a las tarjetas de madurez o acompañamiento, ni repetir el enlace general además de los dos específicos.
- Mantener la consulta comercial como acción de mayor jerarquía; el enlace técnico será una invitación opcional de menor énfasis.

### Navegación global

Orden acordado:

**Inicio → Metodología → Soluciones → Tecnología → Sobre mí → Contacto.**

Tecnología se añadirá a `mainNavLinks`, no a `serviceLinks`: es una página de capacidades, no otra oferta comercial. El menú de escritorio y el móvil ya consumen esa configuración.

El pie requiere un ajuste explícito: actualmente filtra sus enlaces principales por una lista de rutas. Añadir una entrada a `footerLinks` no basta para que Tecnología se muestre allí.

## 7. Uso del RAG y honestidad del contenido

- Reutilizar la investigación ya realizada con `hg-rag-mcp` sobre datos, BI, modelos, IA, agentes, infraestructura y operación; no repetirla completa por rutina.
- El modelo de madurez continúa como referencia principal del 50 % de consultoría. Para esta página de ingeniería, utilizar los documentos técnicos pertinentes a cada tema sin excluir el resto de la biblioteca.
- La investigación previa encontró cobertura especialmente sólida en ETL, modelado dimensional, BI, estadística, aprendizaje automático, visión, RAG, agentes e infraestructura/operación.
- La cobertura específica de ELT y del tratamiento general de bases no relacionales fue más parcial. No atribuir al RAG un respaldo específico que no se haya recuperado. Completar la explicación con criterio técnico y experiencia validada, o acotarla si resulta necesario.
- Diferenciar conceptos, aplicaciones posibles y experiencia personal comprobable. La existencia de un documento en la biblioteca no demuestra una implementación realizada por Héctor.
- Usar ejemplos conceptuales breves, sin nombres de clientes, cifras o afirmaciones de éxito no verificadas.
- No volver a publicar la sección de referencias que el propietario pidió retirar. Las fuentes, sus nombres, autores e instituciones son contexto interno, no parte de esta página.
- No publicar contenidos extensos copiados de los documentos ni acceder al RAG desde el navegador.
- No modificar la configuración, los embeddings o la indexación del MCP para este cambio.

## 8. UI/UX, accesibilidad y SEO

### Identidad y lectura

- Mantener el Brand Center: HG, paleta slate/azul/cian, tipografía del sistema, superficies y espaciado actuales.
- Reutilizar `PageLayout.astro` y los patrones de secciones y enlaces existentes.
- No incorporar fuentes, iconos de otra familia, dependencias o un sistema visual alternativo.
- Evitar que el sexto enlace comprima la cabecera; ajustar solo el comportamiento existente si la composición lo necesita, sin crear un megamenú.

### Desplegables y anclas

- Usar HTML nativo `<details>` y `<summary>`, siguiendo el patrón ya utilizado por las FAQ.
- Mantener todo el contenido en el HTML, disponible también sin JavaScript; no cargarlo desde el MCP ni desde una API.
- Conservar foco visible, acceso por teclado, encabezados jerárquicos y contraste suficiente.
- Identificar cada desplegable con el contexto de su bloque, aunque compartan el texto visible «Explorar capacidades técnicas».
- Situar `#datos`, `#ia` y `#ingenieria` en las secciones visibles y respetar el desplazamiento configurado para la cabecera fija.

### SEO

- Título propuesto: **«Tecnología | Ingeniería de datos e inteligencia artificial — Héctor Guerra»**.
- Descripción propuesta: **«Conocé las capacidades de datos, inteligencia artificial e ingeniería que permiten integrar, desplegar y sostener soluciones para tu empresa.»**
- Canonical: `https://hguerra.com/tecnologia`.
- Reutilizar la imagen social general del refactor, sin crear una pieza adicional por rutina.
- Reutilizar los datos estructurados de página y persona del layout y añadir breadcrumb Inicio → Tecnología.
- No presentar esta página como una aplicación de software, producto o servicio nuevo mediante su marcado estructurado.
- Añadir `/tecnologia` a `publicSiteRoutes`; sus anclas no son entradas adicionales del sitemap.

## 9. Cambios técnicos previstos

| Archivo o área | Cambio |
| --- | --- |
| `src/pages/tecnologia.astro` | Nueva página estática con encabezado, tres bloques y cierre de contacto. |
| `src/data/technology.ts` | Contenido de los tres bloques y sus familias técnicas, siguiendo la separación de datos ya utilizada en el proyecto. |
| `src/data/site.ts` | Añadir Tecnología al orden de navegación y a las rutas públicas del sitemap. |
| `src/components/SiteFooter.astro` | Incluir la nueva ruta entre los enlaces que realmente se renderizan. |
| `src/components/sections/ServicePillars.astro` | Enlace general desde Inicio y enlaces técnicos específicos desde Soluciones, según la variante existente. |
| `src/pages/metodologia.astro` | Enlace secundario dentro del bloque existente de implementación/acompañamiento. |
| `src/pages/sobre-mi.astro` | Enlace secundario junto a la experiencia técnica. |
| `src/data/contact.ts` | Añadir el contexto permitido `/tecnologia`, con etiqueta Tecnología y motivo inicial `otro`. |
| `README.md` y `.agents/product-marketing-context.md` | Documentar seis páginas principales y la separación entre soluciones y detalle técnico; mantener fuentes exclusivamente internas. |

No se requiere editar `contacto.astro` ni `ContactForm.astro`: la página Contacto recibe el enlace global mediante los componentes compartidos y conserva sus funcionalidades.

No crear un componente genérico de catálogo o un motor de acordeones. Los tres bloques pueden renderizarse a partir de sus datos dentro de la página; extraer un componente solo si existe una necesidad real de reutilización.

## 10. Secuencia tras aprobación

1. **Contenido:** redactar los tres resúmenes, ejemplos y detalles agrupados, respetando la cobertura y los límites anteriores.
2. **Página:** componer `/tecnologia` con el layout actual y desplegables nativos, sin nuevas dependencias.
3. **Descubrimiento:** añadir navegación, pie, sitemap y enlaces contextuales, sin duplicar el contenido técnico en otras páginas.
4. **Contacto y documentación:** registrar el origen permitido y actualizar los documentos afectados sin modificar el envío.
5. **Revisión y entrega:** revisar el delta y comunicar lo implementado y los pendientes externos, sin publicar ni hacer commit automáticamente.

## 11. Criterios de aceptación y verificación proporcional

### Contenido y recorrido

- Existe una sexta página principal, Tecnología, sin modificar el propósito de las otras cinco.
- La lectura inicial contiene tres bloques breves y comprensibles; la profundidad técnica es opcional.
- Las keywords están cubiertas por familias, no por una proliferación de tarjetas.
- Los enlaces contextuales llegan a la página o al bloque acordado y tienen menor énfasis que los CTA comerciales.
- Contacto no recibe distracciones nuevas dentro del formulario.
- No reaparecen bibliografías, instituciones, enlaces a marcos ni afirmaciones de experiencia no respaldadas.

### Integración

- La configuración compartida contiene la nueva ruta en el orden acordado y el pie la renderiza explícitamente.
- Las tres anclas corresponden a secciones visibles y no cambian por el texto editorial de los títulos.
- El constructor existente de contacto conserva el origen `/tecnologia` sin admitir rutas arbitrarias ni cambiar los valores válidos del formulario.
- Campo permanece excluido y las redirecciones previas no se modifican.

### Evidencia mínima

La mayor parte del cambio es contenido, navegación y UI ordinaria: se realizará revisión focal del código y de los enlaces declarados. No se añadirán pruebas por archivo, infraestructura de pruebas, suites amplias, builds o auditorías generales por rutina.

La lógica de envío de Contacto queda fuera del cambio; se reutilizará su evidencia previa y no se repetirán envíos ni pruebas de EmailJS por añadir un origen permitido. Si aparece un fallo concreto que bloquee el recorrido principal, se reproducirá y verificará únicamente el caso mínimo afectado.

La aceptación visual del propietario y la publicación en producción son hitos separados de escribir el código. No afirmar despliegue, entrega real de correo o resultados de verificación que no se hayan observado.

## 12. Entrega y siguiente acción

La entrega esperada, después de aprobar este plan, será la página Tecnología integrada al sitio actual, los enlaces secundarios acordados y la documentación actualizada, sin nuevas dependencias ni exposición del RAG.

### Resultado de ejecución local

- Creada `src/pages/tecnologia.astro` y su contenido en `src/data/technology.ts` con tres bloques, ejemplos de aplicación y detalle agrupado en `<details>` cerrado inicialmente. Sin JavaScript adicional ni nuevas dependencias.
- Añadidos los enlaces generales y contextuales acordados, con las anclas `#datos`, `#ia` y `#ingenieria` situadas en secciones visibles.
- Añadida Tecnología al menú compartido, al pie y a las rutas del sitemap. Reutilizados el layout, los metadatos y la imagen social existentes; añadido breadcrumb.
- Registrado `/tecnologia` como origen permitido de contacto, con motivo `otro`. No se modificaron el formulario, su transporte ni las rutas retiradas anteriormente.
- Reutilizada la investigación previa del RAG; no se publicaron fuentes ni se modificó el MCP.
- Revisión focal del delta: contenido, correspondencia entre enlaces y anclas, configuración de navegación y registro del origen. No se añadieron ni ejecutaron suites, builds generales o pruebas de envío para este cambio de contenido y navegación.

**Siguiente acción:** revisión visual del propietario y decisión de publicación. No se ha desplegado ni creado un commit de esta ampliación.
