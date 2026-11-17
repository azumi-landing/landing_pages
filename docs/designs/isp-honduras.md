# Landing ISP Honduras — desarrollo de software e ingeniería de datos

- **Author:** Héctor Guerra
- **Fecha:** 2026-11-17
- **Estado:** Simplificación PAS implementada localmente en `develop`, posterior a `29f2e76`. Sin nuevo commit, push o despliegue.
- **Entrada de contexto:** `.dev/docs/isp-honduras/concepts_brief.md`, incluidas las adendas comercial, visual y de selección de borradores existentes.
- **EGM artifact directory:** `.dev/docs/isp-honduras/`
- **Destino al finalizar:** `docs/designs/isp-honduras.md`
- **Alcance vigente:** implementación local autorizada por el propietario después del cierre del diseño. No realizar commits, desplegar ni modificar hosting, analítica o formulario compartido.

## Versión vigente — cinco slides siguiendo el video

El propietario consideró complicada la estructura de diez escenas y aprobó reemplazarla por cinco, siguiendo el diálogo PAS de su video: dificultad para seguir clientes, coordinar instalaciones y priorizar fallas → posibles cancelaciones, cobros pendientes y reclamos → integración, automatización y soluciones a medida → reunión breve. El contenido comercial-técnico amplía ese argumento, no crea otro catálogo de tecnologías.

| Slide | Contenido | Recurso |
| --- | --- | --- |
| Hero | Pregunta del video, oferta y CTA «Conversemos sobre tu ISP» | Short `https://youtube.com/shorts/LNKeNj_uYgU`, formato 9:16 |
| Problemas | Seguimiento a clientes, coordinación de instalaciones, priorización de fallas | Ilustraciones 01–03 |
| Consecuencias | Cancelaciones, cobros pendientes y reclamos acumulados, sin diagnosticar al visitante | Ilustraciones 04–06 |
| Solución | Integración/automatización y desarrollo a medida; entregas e indicadores acordados | Ilustraciones 07–08 |
| Conversación | Reunión breve, identidad y trabajo directo de Héctor, formulario y condiciones | Ilustración 09 y fotografía real |

**Implementación:** `src/pages/isp-honduras.astro`, datos `ispProblems`, `ispConsequences`, `ispSolutions` e `ispMeeting` en `src/data/ispCampaign.ts`, composición compartida `IspSlide.astro` y estilos limitados a `.isp-deck` en `src/styles/ispCampaign.css`. Se retiran del código los componentes de la versión sustituida (`IspAreaScene`, `IspArchitecture`, `IspEngineering`), sin consumidores restantes. Los SVG anteriores permanecen conservados.

**Recursos:** el paquete aportado se movió desde la raíz a `documentos/isp/HGuerra-ilustraciones-landing/`, conservando SVG/PNG, vista previa, índices, fuentes y licencia unDraw. Los nueve SVG de uso web se copian a `public/images/isp/`. Se conservan colores y proporciones, sobre fondos azul oscuro y sin tarjetas de ilustración. No se añaden animaciones ni librerías.

**Video y privacidad:** miniatura oficial de YouTube guardada localmente como `public/images/isp/video-poster.jpg`. El enlace inicial funciona sin JavaScript; con JS se convierte en botón que inserta un iframe de `youtube-nocookie.com` solo al pulsarlo. Ese gesto solicita la reproducción; no hay iframe, miniatura remota ni SDK de YouTube en la carga inicial. El reproductor conserva controles de YouTube, pantalla completa, título y foco, con enlace externo siempre disponible. Aviso junto al video y explicación en `/privacidad#videos`; activar el video no concede consentimiento de analítica.

**Contacto y navegación:** se mantienen `#conversemos`, correo/necesidad, EmailJS, motivo interno `otro`, origen ISP y analítica existente. Botón de envío «Coordinar una reunión breve»: envía una consulta para coordinar, no reserva automáticamente ni ofrece diagnóstico completo gratuito. Alcance/inversión/plazos antes de iniciar. Cinco slides, flechas y contador actualizados, scroll natural y crecimiento en móvil/zoom; sin capturar rueda o teclado. Se conservan las anclas de área `#comercial`, `#operativa` y `#tecnica` sobre sus bloques de problemas. Se retira el FAQ y su JSON-LD, pues ya no hay FAQ visible; el schema de servicio permanece.

**Ajuste móvil solicitado después:** las flechas laterales y su espacio reservado se ocultan hasta 800 px inclusive mediante el breakpoint existente de `src/styles/ispCampaign.css`. En escritorio se mantienen; en móvil se usa scroll natural con todo el ancho disponible. Revisión focal de la cascada CSS, sin pruebas/builds ni nueva revisión visual.

**Agrupación de tarjetas en móvil, posterior a `c028aa8`:** el propietario confirmó que la distribución de escritorio se ve bien, pero en móvil confundía la imagen de cada tarjeta con el texto anterior o el título de sección. En problemas, consecuencias y solución, cada `article` abre ahora con su `h3.item-heading` en el DOM, seguido de imagen y descripción. CSS Grid conserva visualmente imagen → título → descripción en escritorio, con las columnas, tamaños y separaciones anteriores. Hasta 800 px muestra título → imagen → descripción; una línea superior y padding de 1,5 rem delimitan cada bloque, con separación interna de 1 rem. Sin duplicar contenido o imágenes, sin JS nuevo ni cambio de copy, hero/contacto o flechas. Revisión focal de markup y cascada CSS; sin nuevas pruebas/builds o revisión visual en navegador. Local en `develop`, sin commit/push.

**Evidencia y límites:** la ruta se generó con el servidor Astro local y contiene las cinco secciones y nueve SVG esperados. El HTML inicial no incluye iframe ni subrecursos de YouTube; existe el CDN de iconos heredado de `SeoHead`, ajeno a este cambio. No se ejecutaron build o suites generales, ni envío del formulario. No acredita revisión visual en navegador, reproducción efectiva del embed, entrega externa, aceptación del propietario o despliegue.

## Historial — diseño de diez escenas sustituido el 2026-11-17

Lo que sigue conserva la evolución anterior; sus referencias a «vigente», diez slides, siete ilustraciones, FAQ, anclas técnicas y componentes retirados no describen la versión actual.

### Revisión que sustituyó la propuesta anterior

Las observaciones del propietario amplían la audiencia y cambian el énfasis del borrador. La landing debe vender desarrollo de software e ingeniería de datos mediante una narrativa publicitaria, no presentar un ejercicio de conciliación o una guía técnica como oferta principal.

Esta revisión:

- Amplía la audiencia a propietarios y gerentes generales, comerciales, operativos y técnicos de ISP hondureños.
- Sustituye la apertura abstracta sobre «conciliar, resolver o decidir» por problemas empresariales reconocibles.
- Amplía las tres áreas sin convertirlas en catálogos: un problema principal, soluciones relacionadas y un ejemplo concreto por área.
- Hace explícito el beneficio empresarial antes de detallar tecnologías o indicadores.
- Da protagonismo a las siete ilustraciones SVG aportadas por el propietario, tres con animación; retira las tablas extensas y diagramas densos de la composición principal.
- Propone un único CTA comercial, «Conversemos sobre tu ISP», con destino al formulario existente.
- Mantiene perfil, entregables, transferencia, controles y condiciones; no añade pruebas sociales o resultados inventados.

Se conservan las decisiones de **una escena amplia por área**, **dos escenas de ingeniería**, formato vertical y desplazamiento natural. No se reabren las páginas ni el posicionamiento general de HGuerra.

**Dirección visual vigente:** las siete ilustraciones de `documentos/isp/ilustraciones/` sustituyen las fotografías de contexto; se conserva la fotografía profesional real del perfil. Se habían previsto cuatro SVG y tres GIF, pero los archivos elegidos son siete SVG: cuatro estáticos y tres animados mediante CSS. El propietario indicó usar estos borradores para la primera versión y mejorarlos después de tener el sitio. No se espera un acabado gráfico definitivo ni se convierten a GIF para ajustarlos al plan anterior.

## Overview

La landing `/isp-honduras` es una página comercial de HGuerra.com para vender servicios de desarrollo de software e ingeniería de datos a ISP de Honduras.

La oferta cubre el ciclo completo: captura de información, integración de sistemas, preparación y almacenamiento de datos, análisis, visualización, automatización y aplicaciones que utiliza el equipo. Estas capacidades se combinan según el problema; no se vende una arquitectura obligatoria o una plataforma existente.

El visitante debe reconocer una dificultad del negocio y comprender qué puede mejorar, qué solución puede recibir y cómo la utilizaría. Después encuentra el mecanismo técnico, la experiencia profesional del responsable y las condiciones para iniciar una conversación.

La narrativa principal es:

**Problema → Consecuencia → Solución → Beneficio → Llamado a la acción.**

El titular anticipa una mejora o una dificultad reconocible. Dentro de «Solución» se explica primero la mejora buscada y luego qué construye o integra HGuerra y qué recibe el cliente. «Beneficio» expresa una utilidad operativa o empresarial, no el nombre de una tecnología o indicador.

La definición, priorización y el acompañamiento sustentan el servicio de implementación. No se redefine el sitio general como agencia de software ni se obliga a contratar consultoría completa antes de una necesidad ya definida.

## Audiencia y lenguaje

La misma página debe resultar comprensible para:

- **Propietarios y gerencia general:** continuidad del negocio, clientes, costos de coordinación, seguimiento e inversión.
- **Gerencia comercial:** captación, activaciones, facturación, cobros, retención y análisis de cancelaciones.
- **Gerencia operativa:** órdenes, instalaciones, soporte, cuadrillas, recurrencias y tareas manuales.
- **Gerencia técnica:** monitoreo, herramientas NOC, disponibilidad, calidad, alertas y capacidad.

No son cuatro recorridos o páginas distintos. Las tres áreas organizan los problemas y el respaldo técnico permite profundizar sin exigir conocimientos de ETL, DWH o agentes para comprender la propuesta.

La voz sigue siendo profesional, cercana, en primera persona y con el voseo del sitio. No se le indica al ISP cómo debe competir o fijar precios. No se afirma que todos los operadores padecen las situaciones propuestas.

## The Problem

### El borrador anterior parecía una explicación de procesos

La apertura y los casos se habían concentrado en conciliación, investigación y criterios de medición. Son ejemplos válidos, pero no bastan para comunicar el alcance de software e ingeniería de datos que puede contratar un ISP.

Una lista de indicadores, reglas o fuentes no explica por sí sola qué mejora obtiene el negocio. Una tabla de excepciones tampoco debe ocupar el lugar de la propuesta comercial.

### El detalle puede ocultar el valor

Mostrar muchos párrafos o un diagrama completo obliga al lector a reconstruir la relación entre problema y solución. La página debe explicarla directamente y utilizar las imágenes para situar el problema y hacer comprensible una posible entrega.

La profundidad técnica permanece disponible. Lo que cambia es su jerarquía, no la capacidad ofrecida.

### La credibilidad no puede fabricarse

Las fuentes del RAG fundamentan necesidades y escenarios; no prueban proyectos de HGuerra, prevalencia local ni resultados comerciales. Las ilustraciones y ejemplos deben distinguirse de clientes, instalaciones o productos reales de HGuerra.

Esta revisión responde a la evaluación editorial del propietario, no a una caída de conversión medida ni a un resultado demostrado por una prueba comercial.

## Goals

### G1. Reconocimiento comercial en pocos segundos

La apertura identifica la oferta, la audiencia y problemas reconocibles. No exige interpretar verbos abstractos, siglas o una arquitectura.

### G2. Un argumento por área, con cobertura suficiente

Cada área tiene un problema principal, su consecuencia, una solución concreta, un beneficio y el mismo CTA. Las soluciones relacionadas se agrupan en un máximo de tres líneas breves; no se enumeran todas las funcionalidades posibles.

### G3. Beneficio antes que mecanismo

Primero se explica qué puede mejorar el ISP; después, qué construye o integra HGuerra, qué recibe el cliente y cómo lo usa. «Una API», «un DWH» o «el KPI de churn» no se presentan como beneficios.

### G4. Diferenciación por capacidad de construir

Debe ser visible que HGuerra puede desarrollar aplicaciones, integrar APIs y trabajar todo el ciclo de datos hasta análisis, visualización y automatización. La revisión de procesos y el acompañamiento hacen viable esa implementación; no sustituyen la entrega.

### G5. Presentación ilustrada y legible

Los SVG estáticos y animados apoyan el problema, las relaciones o un uso posible, sin imitar un producto existente. La idea debe entenderse también sin movimiento y con texto HTML. Los borradores aportados no necesitan representar por sí solos todos los pasos: la explicación comercial permanece en la página. No se satura la escena con párrafos, tablas o diagramas.

### G6. Conversación comercial accesible

La única acción comercial dirige al formulario con «Conversemos sobre tu ISP». El visitante no tiene que escoger una tecnología, solicitar una auditoría o aceptar un alcance antes de escribir.

### G7. Credibilidad y condiciones explícitas

Se conservan perfil profesional, entregables, transferencia, seguridad de datos, accesos y condiciones del servicio. No se prometen resultados, diagnósticos gratuitos completos o capacidades no ofrecidas.

### Criterio de aceptación de la revisión

Un gerente de ISP debe poder identificar en pocos segundos:

1. Qué problema de su negocio puede resolver HGuerra.
2. Qué solución concreta puede recibir.
3. Qué beneficio operativo o empresarial puede obtener.
4. Por qué HGuerra tiene las capacidades para desarrollarla.
5. Cómo solicitar una conversación comercial.

La revisión editorial comprobará esa relación, no solo la presencia de palabras como «software», «datos» o «beneficios». No se fija una mejora de conversión o una duración de lectura como resultado ya validado.

## Non-Goals

- Cambiar las seis páginas principales, navegación, marca o eslogan del sitio general.
- Construir un sistema ISP, una demo funcional, nuevas APIs o un backend para ilustrar la oferta.
- Prescribir reemplazo de sistemas, un DWH o IA para cualquier proyecto.
- Inventar testimonios, clientes, casos, cifras, precios, plazos o resultados garantizados.
- Presentar ilustraciones o material referencial como clientes, productos, resultados o instalaciones propias.
- Ofrecer instalación física de redes, conectividad, operación NOC 24/7, SOC, invulnerabilidad o certificación.
- Alterar transporte, validación, tratamiento de datos, analítica o consentimiento del formulario.
- Abrir el compañero visual, generar o rediseñar ilustraciones o adquirir activos/licencias fuera del alcance. Solo se preparan las copias SVG y versiones fijas previstas; los originales elegidos no se modifican.
- Implementar, realizar commits, desplegar o declarar listo para publicar un material sin autorización.

## Technical Plan

### 1. Recorrido conservado

Se mantienen las diez escenas propuestas y las dos decisiones de composición del autor. Cambia su contenido y tratamiento visual:

| Índice | Escena | ID | Función comercial |
| --- | --- | --- | --- |
| 0 | Apertura | `introduccion` | Reconocer el problema y presentar software e ingeniería de datos como servicio. |
| 1 | 01 Comercial | `comercial` | Dar continuidad al recorrido de clientes, desde captación y activación hasta cobros y retención. |
| 2 | 02 Operativa | `operativa` | Coordinar órdenes, instalaciones, soporte y cuadrillas sin perder el historial del trabajo. |
| 3 | 03 Técnica | `tecnica` | Relacionar monitoreo e impacto en el servicio para priorizar atención y capacidad. |
| 4 | 04 Cómo trabajo | `forma-de-trabajo` | Comprender, implementar y acompañar una primera solución. |
| 5 | 05 Software y datos | `ingenieria` | Mostrar el ciclo completo y las capacidades combinables. |
| 6 | 06 Automatización e IA | `automatizacion` | Explicar tareas automatizables, conocimiento y acciones con controles. |
| 7 | 07 Primera entrega | `primera-entrega` | Identificar al responsable y concretar entregables y condiciones. |
| 8 | 08 Antes de avanzar | `dudas` | Resolver objeciones de sistemas existentes, alcance e inversión. |
| 9 | 09 Conversación | `conversemos` | Recibir correo y necesidad mediante el formulario actual. |

Las bases transversales y el ejemplo de una zona con reclamos no vuelven como slides independientes. Su contenido útil se incorpora a las áreas, entregables y controles.

### 2. Jerarquía visual y límites de contenido

Cada escena de área tiene:

- Un titular breve que anticipa una mejora y un texto corto que une problema y consecuencia.
- Una ilustración SVG animada protagonista relacionada con la situación, con versión fija y movimiento bajo control del visitante.
- Una solución en lenguaje de negocio, seguida de qué construye o integra HGuerra y qué recibe el equipo.
- Un beneficio explícito y un ejemplo breve de cómo se usaría la entrega, integrado a la ilustración y descrito en HTML; no otro visual que compita con ella.
- El mismo CTA hacia el formulario.

La cadena publicitaria es conceptual: no se dibujan cinco tarjetas ni se repite una etiqueta técnica por cada frase. Los textos de la siguiente sección son el contenido principal previsto. Las notas de alcance, dirección de ilustraciones y medición son instrucciones de diseño; no se vuelcan como párrafos adicionales en la pantalla.

Como orientación editorial, el cuerpo principal de cada área debe ser breve, próximo a 100–140 palabras, sin contar rótulos. No es un límite que justifique recortar la entrega o reducir la letra. Las tres líneas de soluciones relacionadas y un ejemplo compacto sustituyen al catálogo extenso y a las tablas de revisión.

En escritorio, ilustración y argumento se relacionan en columnas, con espacio suficiente para leer. En móvil se apilan en orden comprensible; la información principal sigue siendo texto HTML. No se fuerza una tabla ancha o un gráfico con texto diminuto. La altura crece con el contenido.

Se conserva la alineación superior estable de `.area-slide`. No se añade snap, carrusel o captura de rueda/teclas globales. Por petición posterior del propietario se incorporan flechas laterales que saltan inmediatamente a la escena adyacente; fuera de esa acción explícita, el scroll sigue siendo natural. Las ampliaciones no esconden el valor central ni recentran toda la escena al abrirse.

### 3. Apertura comercial — texto aprobado

**Antetítulo:** Software e ingeniería de datos para ISPs de Honduras.

**Titular:** ¿Qué problemas están frenando el crecimiento de tu ISP?

**Situaciones reconocibles:** Clientes que cancelan, procesos manuales y sistemas desconectados dificultan el crecimiento y el control de tu negocio.

**Énfasis:** **Cada ISP tiene desafíos diferentes. La solución comienza por entenderlos.**

**Solución y alcance:** En HGuerra.com diseño e implemento soluciones a medida con **software personalizado, ingeniería de datos y agentes de inteligencia artificial**.

**CTA:** [Conversemos sobre tu ISP](/isp-honduras#conversemos).

**Microcopy:** Cuéntame qué necesitas mejorar y evaluemos una primera solución.

**Revisión posterior del propietario:** este texto fue proporcionado completo después del ajuste de viewport/flechas y sustituye la apertura sobre pérdida de seguimiento entre ventas, instalaciones y soporte. Se respeta el tuteo y las negritas entregadas sin reescribir el resto de la landing; ilustración, antetítulo, navegación y formulario se conservan.

La actualización siguiente del propietario acorta situaciones, propuesta y microcopy a la versión reproducida arriba. Conserva título, frase de énfasis y CTA; no modifica las condiciones de contratación del resto de la página.

**Dirección visual:** SVG de un ISP con sistemas y datos interconectados, según la propuesta del propietario. Relaciona clientes, operación y red sin convertir la apertura en un mapa de arquitectura. No una pantalla llena de código, un collage de logos tecnológicos o una infraestructura sin relación con el problema.

**Ajustes posteriores del propietario:** retirar el recuadro blanco y las dos leyendas de la ilustración del hero («Esquema ilustrativo · Sistemas y datos conectados» y «No es un producto listo ni un caso de cliente»). `.hero-visual` queda sin fondo, borde, radio o relleno de tarjeta y sin `figcaption`, integrada sobre el fondo oscuro. Se conserva el texto alternativo accesible de la imagen. No se modifica el SVG ni los contenedores o leyendas de otras escenas.

Se retira el titular «¿Qué necesitás conciliar, resolver o decidir en tu ISP?» y la composición de tres preguntas abstractas como visual principal.

### 4. 01 Comercial — continuidad del cliente

**Ajuste visual posterior del propietario:** la ilustración Comercial se muestra sin tarjeta, borde o leyendas visibles y arranca animada automáticamente al inicializar JavaScript. Se elimina el botón grande de reproducción; solo queda un icono discreto de pausa/reanudación accesible. Movimiento reducido, ausencia de JavaScript o fallo de carga mantienen la copia fija. Esta excepción sustituye el inicio manual y las leyendas previstos originalmente para Comercial; Operativa y Técnica no cambian. El argumento comercial de la columna de texto permanece intacto.

**Problema principal:** se pierde continuidad entre el interés del cliente, la activación, el cobro y la relación posterior.

#### Contenido principal aprobado

**Marco editorial vigente:** PAS — Problema, Agitación y Solución, solicitado específicamente para 01 Comercial. Problema y agitación se leen en párrafos separados, seguidos de solución, entrega, utilidad y el mismo CTA. No modifica el hero ni las demás áreas.

**Revisión posterior:** el propietario suministró primero un texto PAS completo y después pidió resumirlo para formato slide y quitar «Fuentes y condiciones». La versión breve siguiente sustituye la literal anterior; conserva énfasis, entrega, utilidad y CTA.

**Titular:** ¿Se pierden oportunidades entre ventas, activaciones y cobros?

**Problema:** Ventas, activaciones y cobros desconectados dificultan el seguimiento del cliente.

**Agitación:** Una oportunidad puede enfriarse, una activación retrasarse o un cobro quedar sin revisar.

**Subtítulo:** Cómo puedo ayudarte

Entiendo tu proceso y **desarrollo software a medida, integro y analizo tus datos y automatizo procesos**, con agentes de IA cuando aportan valor.

**Qué recibe tu equipo:** aplicaciones con historial del cliente, pendientes, responsables y alertas.

**Para qué le sirve:** retomar oportunidades, agilizar activaciones y revisar cobros con contexto.

**Captación y activaciones · Facturación y cobros · Retención y análisis de cancelaciones**

**CTA:** [Conversemos sobre tu ISP](/isp-honduras#conversemos).

#### Ilustración y ejemplo

- **Ilustración SVG animada:** `02_comercial_animado.svg`, de clientes, facturación y pagos. El paso del problema a la solución se explica en HTML sin exigir rehacer ahora el borrador.
- **Ejemplo narrado en HTML:** «Activación registrada → Factura por relacionar → Revisión asignada». Puede integrarse en la secuencia ilustrada sin añadir una segunda figura.
- **Detalle breve:** confirmar fecha, ciclo y vínculo entre registros antes de considerar la diferencia un error.
- **Rótulo:** Ejemplo ilustrativo de seguimiento.

La conciliación permanece como ejemplo concreto, no como toda la oferta Comercial. No se muestra una tabla de tres casos en la composición principal.

#### Condiciones y medición complementarias

Por petición posterior del propietario, Comercial ya no muestra el desplegable ni su contenido. Se conserva aquí como referencia interna, no como copy público de la slide. Operativa y Técnica mantienen sus detalles.

**Fuentes:** CRM · Facturación · Pagos · Atención al cliente.

**Indicadores:** conversión a altas, tiempos de activación, cartera y cancelaciones, según el alcance.

**Consideraciones:** una diferencia de facturación no implica automáticamente pérdida de ingresos. El análisis de cancelaciones ayuda a investigar posibles causas, pero no garantiza retención. Evaluar rentabilidad requiere considerar costos; el ARPU no equivale al margen.

Las soluciones dependen de los sistemas, accesos y calidad de los datos disponibles.

### 5. 02 Operativa — trabajo coordinado e historial

**Composición posterior solicitada:** en 02 la ilustración precede al copy en el HTML: izquierda/derecha en escritorio y arriba/abajo en móvil con la cuadrícula existente. No se invierte solo con CSS, para mantener orden visual y de lectura coherentes. No cambia el copy, la animación o las demás slides.

**Revisión posterior solicitada:** aplicar a 02 el criterio de 01: PAS breve para slide, entrega y utilidad explícitas, sin bloque público de fuentes/condiciones. Ilustración sin tarjeta ni leyendas, animación automática y pequeño control accesible de pausa/reanudación; mantiene `alt`, copia fija sin JS y movimiento reducido. Técnica no cambia.

**Problema principal:** órdenes de servicio, personas y antecedentes no tienen un mismo seguimiento, por lo que la atención depende de reconstruir el contexto y de tareas manuales. El propietario precisó usar «órdenes de servicio» y eliminar «citas» del copy de 02.

#### Contenido principal aprobado

**Titular:** ¿Se repiten reclamos y se acumulan órdenes de servicio pendientes?

**Problema:** Órdenes de servicio y reclamos dispersos dificultan coordinar instalaciones y soporte.

**Agitación:** Una visita puede repetirse, una instalación retrasarse o un reclamo quedar sin resolver.

**Subtítulo:** Cómo puedo ayudarte

Entiendo tu operación y **desarrollo software a medida, conecto tus órdenes de servicio e historial y automatizo tareas y avisos**.

**Qué recibe tu equipo:** aplicaciones con órdenes de servicio, responsables, agenda e historial de atención.

**Para qué le sirve:** coordinar cuadrillas, agilizar instalaciones y atender reclamos con antecedentes.

**Órdenes de servicio e instalaciones · Soporte y reclamos recurrentes · Automatización de tareas y avisos**

**CTA:** [Conversemos sobre tu ISP](/isp-honduras#conversemos).

#### Ilustración y ejemplo

- **Ilustración SVG animada:** `03_operativa_animado.svg`, de atención, recurrencias y órdenes de trabajo. El texto explica el seguimiento y su automatización; no representa instalaciones físicas realizadas por HGuerra.
- **Ejemplo narrado en HTML:** «Intervención registrada → Ticket cerrado → Reclamo relacionado». La animación puede mostrar el vínculo con los antecedentes y la siguiente atención.
- **Siguiente acción mostrada:** consultar antecedentes, responsable y evidencia antes de tratar el reclamo como un caso aislado.
- **Rótulo:** Ejemplo ilustrativo de atención.

Se conserva el SVG del ticket cerrado cuyo problema vuelve. Las leyendas y el ejemplo narrado previstos arriba se retiraron del HTML en esta revisión; el sentido se comunica en el copy breve y el `alt`, sin tarjeta o textos bajo la imagen.

#### Condiciones y medición complementarias

Referencia interna: Operativa ya no muestra el desplegable ni este contenido, siguiendo la limpieza de 01.

Los criterios de recurrencia, evidencia de cierre y responsabilidades se acuerdan con el equipo. No se promete detección automática de causas.

Tiempos de instalación o resolución, reaperturas y visitas repetidas permiten evaluar lo acordado, con ventanas y definiciones explícitas; no equivalen por sí solos a una mejora conseguida.

### 6. 03 Técnica — monitoreo con contexto del servicio

**Revisión posterior solicitada:** replica el formato breve PAS de 01/02, con negritas, entrega y utilidad explícitas, mismo CTA y sin desplegable de fuentes/condiciones. Ilustración sin tarjeta ni leyendas, automática con pausa discreta, `alt` y copia fija ante movimiento reducido, falta de JS o fallo. Conserva el texto a la izquierda y la imagen a la derecha; solo 02 invierte las columnas.

**Problema principal:** las alertas y métricas de red no siempre muestran qué servicio requiere atención ni qué información justifica una intervención.

#### Contenido principal aprobado

**Titular:** ¿Cuesta saber qué falla en la red y qué atender primero?

**Problema:** Alertas y métricas aisladas dificultan identificar qué servicios o clientes están afectados.

**Agitación:** Un incidente puede tardar en priorizarse y una decisión de capacidad tomarse sin suficiente contexto.

**Subtítulo:** Cómo puedo ayudarte

Entiendo tu monitoreo y **desarrollo herramientas a medida, integro y analizo datos de red y automatizo alertas**.

**Qué recibe tu equipo:** aplicaciones con alertas contextualizadas, servicios relacionados e indicadores de calidad y capacidad.

**Para qué le sirve:** priorizar incidentes, revisar la calidad del servicio y planificar capacidad con evidencia.

**Monitoreo y herramientas NOC · Disponibilidad y calidad · Alertas y planificación de capacidad**

**CTA:** [Conversemos sobre tu ISP](/isp-honduras#conversemos).

#### Ilustración y ejemplo

- **Ilustración SVG animada:** `04_tecnica_animado.svg`, de FTTH y monitoreo. La topología y el trabajo sobre equipos contextualizan la operación del ISP, no una red real de un cliente ni una oferta de instalación física de HGuerra.
- **Ejemplo narrado en HTML:** «Alerta de red → Servicio relacionado → Revisión prioritaria». No incluir datos de clientes, direcciones, credenciales o topología sensible.
- **Detalle breve:** contrastar calidad, utilización y período antes de decidir la siguiente acción.
- **Rótulo:** Ejemplo ilustrativo de priorización.

La planificación de capacidad sigue presente, pero deja de representar por sí sola toda el área Técnica. Se retira la matriz extensa de evidencias del contenido principal. Los rótulos y ejemplos narrados previstos arriba quedan como referencia interna: ya no se renderizan bajo la ilustración.

#### Condiciones y medición complementarias

Referencia interna: Técnica ya no muestra el desplegable ni este contenido, siguiendo a 01/02.

Desarrollar e integrar herramientas para el NOC no significa operar un NOC 24/7. Tampoco implica realizar mantenimiento o ampliación física de red.

Disponibilidad, latencia, pérdidas, throughput, utilización y cobertura del monitoreo se usan cuando corresponden. Una coincidencia no prueba causalidad; no toda degradación exige ampliar y los modelos de demanda requieren historia y evaluación.

### 7. Cómo trabajo — conectar la necesidad con una entrega

**Revisión 04–07 aprobada e implementada localmente:** sustituye el copy extenso por formato slide y limpia los visuales. Conserva columnas, SVG estáticos, fotografía real y anclas; CTA principal dentro de cada bloque de texto, sin duplicarlo en el pie. El detalle técnico pasa a respaldo interno, no a desplegables comerciales.

**Titular:** ¿Tenés mejoras pendientes y no sabés por dónde empezar?

**Apoyo:** Sin una prioridad clara, las mejoras pueden quedarse en ideas o cambios que no resuelven el problema.

1. **Entender.** Revisamos tu proceso y elegimos qué mejorar primero.
2. **Construir e integrar.** Aprovecho lo que funciona y desarrollo lo que falta.
3. **Acompañar.** Transfiero el uso y acordamos cómo sostener la solución.

**Qué recibe tu equipo:** una primera solución utilizable, con alcance y criterios acordados.

**Para qué le sirve:** avanzar por etapas sin cambiarlo todo.

**CTA:** [Conversemos sobre tu ISP](/isp-honduras#conversemos).

El enfoque consultivo sirve a la implementación; no se presenta como un diagnóstico genérico que el visitante debe comprar antes de comprender la oferta.

**Dirección visual:** `05_como_trabajo.svg`, de colaboración profesional, sin tarjeta ni leyenda. Conserva `alt`, proporción y carga diferida; no se añade animación.

### 8. Ingeniería — software y ciclo completo de datos

**Titular:** ¿Tus sistemas acumulan datos, pero cuesta usarlos para decidir?

**Problema:** La información desconectada obliga a cruzar registros y preparar reportes a mano.

**Agitación:** Las decisiones pueden demorarse o apoyarse en datos incompletos.

**Cómo puedo ayudarte:** Parto de tus objetivos y **desarrollo aplicaciones, integro tus sistemas y analizo tus datos**.

**Qué recibe tu equipo:** aplicaciones, información relacionada y vistas con indicadores acordados.

**Para qué le sirve:** dar seguimiento al negocio y decidir sin reconstruir cada reporte.

**Objetivos y KPIs · Integración y calidad · Visualización y mejora**

**Nota breve:** Definimos objetivo, fórmula, fuentes y responsables de cada KPI. Un Data Warehouse solo se incorpora si la necesidad lo justifica.

**CTA:** [Conversemos sobre tu ISP](/isp-honduras#conversemos).

**Dirección visual:** `06_software_datos.svg`, estático, sin tarjeta, leyendas o mensajes auxiliares bajo el SVG. Las precisiones sobre KPI/DWH permanecen en el copy.

**Respaldo interno:** aplicaciones, APIs, ETL/ELT, DWH, algoritmos, visualización, entregables, calidad, acceso y trazabilidad permanecen documentados en la guía y los datos internos de capacidades. Se retiran de la página el desplegable extenso y el ejemplo de alta. Las ocho anclas `capacidad-*`, `#ciclo-datos` y `#architecture-notes` se conservan sobre frases visibles relacionadas. Los KPIs no requieren IA ni un tablero garantiza mejoras; el modelo analítico no sustituye sistemas transaccionales.

### 9. Ingeniería — automatización y agentes de IA

**Titular:** ¿Tu equipo sigue repitiendo tareas que podrían automatizarse?

**Problema:** Buscar procedimientos, copiar datos y coordinar avisos consume tiempo de atención.

**Agitación:** Una solicitud puede quedar pendiente mientras el equipo reconstruye el contexto.

**Cómo puedo ayudarte:** Reviso tu proceso y **automatizo consultas, tareas y avisos**, incorporando agentes de IA cuando aportan valor.

**Qué recibe tu equipo:** asistentes para consultar conocimiento autorizado y flujos conectados con sus herramientas.

**Para qué le sirve:** atender solicitudes con contexto y reducir traspasos manuales.

**Conocimiento consultable · Tareas y avisos · Agentes de IA**

**Nota breve:** Una regla puede bastar sin IA. Acordamos permisos, trazabilidad y revisión humana de acciones sensibles.

**CTA:** [Conversemos sobre tu ISP](/isp-honduras#conversemos).

**Dirección visual:** SVG estático de IA y automatización, sin tarjeta ni leyendas. No se añade animación.

**Respaldo interno:** se retira el desplegable de agentes. Recuperar fuentes no elimina errores; no se ofrecen cobros, cortes o cambios de red autónomos por defecto. Los agentes de desarrollo no están incluidos automáticamente en el producto. Evaluación, permisos y límites siguen en la guía.

### 10. Primera entrega, credibilidad y condiciones

**Titular:** ¿Qué vas a recibir y quién te va a acompañar?

Se conserva la fotografía profesional real y la identidad ya publicadas:

> Héctor Guerra · Ingeniero Electricista Industrial · Tegucigalpa, Honduras.
>
> Trabajo directamente con vos, desde entender la necesidad hasta implementar y transferir la solución.

Esta experiencia no se transforma en afirmaciones de proyectos, clientes o resultados con ISP.

**Qué recibe el cliente:**

- **Una solución utilizable:** Software, integración, automatización o datos para la necesidad priorizada.
- **Criterios de aceptación:** Cómo validar la entrega y medir lo acordado.
- **Transferencia y continuidad:** Documentación, formación y acompañamiento según el alcance.

**Antes de iniciar:** acordamos entrega, alcance, inversión, dependencias y plazos.

**Para qué le sirve a tu equipo:** saber qué recibirá, cómo se evaluará y cómo usarlo.

**Nota breve:** Accesos, trazabilidad y recuperación se acuerdan para los componentes entregados; no es seguridad integral ni operación de red 24/7.

**CTA:** [Conversemos sobre tu ISP](/isp-honduras#conversemos).

07 conserva la fotografía, nombre, profesión y ubicación, sin inventar una ilustración o experiencia ISP. Se resumen la lista de entregas y las condiciones; no se ofrece invulnerabilidad, certificación regulatoria o instalación física de red.

### 11. Conversión, dudas y formulario

#### Una sola acción comercial

**Texto único:** Conversemos sobre tu ISP.

**Destino único:** `#conversemos`.

Puede repetirse en apertura, cierre de áreas y bloques de decisión. Repetir el mismo CTA no crea ofertas distintas. No se alterna con «Evaluar una mejora», «Solicitar diagnóstico», «Ver demo», calendario, descarga o un CTA paralelo de WhatsApp.

Se conserva el formulario y su botón funcional «Enviar mi consulta»: enviar el formulario es la continuación de la misma conversación, no una oferta adicional.

No se cambia el comportamiento compartido de contingencia/accesibilidad del formulario. La landing deja de promocionar un enlace de WhatsApp como alternativa comercial simultánea; no se altera ese canal en el sitio general.

#### Dudas

Se conservan los tres temas y se ajusta su redacción al enfoque comercial:

1. **¿Tengo que reemplazar mis sistemas?** No por defecto; primero se revisan la necesidad, lo que funciona y las interfaces disponibles.
2. **¿Puedo empezar por una sola necesidad?** Sí; una aplicación, integración, automatización o mejora de datos puede ser una primera entrega sin contratar todo el ciclo.
3. **¿Cómo acordamos inversión y plazos?** Según alcance, entregables, dependencias y acompañamiento, antes de iniciar. No hay precio o duración universal.

Las FAQ estructuradas se generan desde los textos públicos aprobados.

#### Contacto

**Titular:** Conversemos sobre lo que querés mejorar en tu ISP.

**Apoyo:** Contame qué ISP representás y qué se está trabando hoy. Revisamos si puedo ayudarte y qué primera entrega tendría sentido.

Se mantiene `ContactForm` con correo y necesidad visibles, `defaultService="otro"`, `showService={false}` y origen `/isp-honduras`. Se conservan validación, transporte, aviso de no compartir datos confidenciales, privacidad, términos y consentimiento.

**Después de escribir:** reviso el contexto, conversamos sobre el encaje y, si avanzamos, acordamos una propuesta con entrega, alcance e inversión.

**Expectativa explícita:** la consulta no contrata ni incluye un diagnóstico completo gratuito. La conversación es un paso comercial hacia un trabajo acordado.

### 12. Ilustraciones de borrador elegidas para la primera versión

#### Archivos recibidos y destinos previstos

Las fuentes de la tabla están en `documentos/isp/ilustraciones/`; se conservan sin modificaciones en esta fase.

| Sección | Archivo fuente existente | Formato real | Destino al implementar |
| --- | --- | --- | --- |
| Apertura | `01_hero_isp.svg` | SVG estático | `public/images/isp/hero.svg` |
| Comercial | `02_comercial_animado.svg` | SVG animado con CSS | `public/images/isp/comercial.svg` |
| Operativa | `03_operativa_animado.svg` | SVG animado con CSS | `public/images/isp/operativa.svg` |
| Técnica | `04_tecnica_animado.svg` | SVG animado con CSS | `public/images/isp/tecnica.svg` |
| Cómo trabajo | `05_como_trabajo.svg` | SVG estático | `public/images/isp/como-trabajo.svg` |
| Software y datos | `06_software_datos.svg` | SVG estático | `public/images/isp/software-datos.svg` |
| IA y automatización | `07_ia_automatizacion.svg` | SVG estático | `public/images/isp/ia-automatizacion.svg` |

El propietario eligió expresamente estos borradores para construir la primera versión y realizar mejoras gráficas después de tener el sitio. Se incorporaron copias en `public/images/isp/`, sin rediseñar los originales, completar rótulos internos o convertir a GIF. Se mantiene `/mi_foto_pro.jpeg` en el perfil. Esta integración es local, no un despliegue.

#### Entrega y preparación

- La recepción y la preparación de copias están resueltas tras la autorización de implementación local; las mejoras gráficas del propietario quedan para una iteración posterior.
- La inspección estructural del 2026-11-16 encontró los siete SVG con `width="1000"`, `height="600"` y `viewBox="0 0 1000 600"`, de aproximadamente 4–8 KB por archivo. Comercial, Operativa y Técnica contienen animaciones CSS repetidas y una regla interna `prefers-reduced-motion: reduce`; los otros cuatro no contienen reglas de animación.
- En esa inspección XML no se detectaron scripts, manejadores de eventos, `foreignObject`, animaciones SMIL ni referencias de recursos no locales. Es inspección del código de los activos, no una revisión visual en navegador o una certificación de seguridad.
- Preparar tres copias SVG fijas desactivando las animaciones, sin alterar la geometría: `public/images/isp/comercial-estatico.svg`, `public/images/isp/operativa-estatico.svg` y `public/images/isp/tecnica-estatico.svg`. No se exige al propietario crear archivos adicionales ni se rasterizan o convierten a GIF.
- Conservar proporción, composición y los originales de `documentos/isp/ilustraciones/`. La explicación HTML aporta los pasos de cada ejemplo sin atribuir al dibujo detalles que no contiene.

#### Honestidad y derechos

- Registrar autoría/procedencia y permiso de publicación y adaptación; que el propietario suba un archivo no acredita por sí solo derechos de terceros. Incluir atribución si corresponde.
- Usar rótulos visibles como «Esquema ilustrativo» o los ejemplos específicos de área. No presentar animaciones como productos funcionando, instalaciones o resultados de HGuerra.
- Evitar marcas ajenas, registros de clientes, credenciales o topología sensible. La red FTTH es un contexto de software y análisis, no amplía la oferta a trabajos físicos.
- Integrar SVG mediante `<img>` desde archivos locales revisados, no mediante `object`, `iframe` o inyección del XML en el DOM. Revisar que no incluyan scripts, manejadores de eventos, `foreignObject` o referencias externas innecesarias; no añadir una biblioteca de sanitización para esta landing.
- La instrucción del propietario acredita la elección de estos borradores para la primera versión, no una autoría o licencia de terceros que no se haya declarado. Registrar procedencia y atribución si corresponde; no inventarlas. No se han transformado ni publicado los originales.

#### Movimiento, accesibilidad y carga

- **Estado inicial fijo:** mostrar la copia SVG sin animación, sin descargar o reproducir el SVG animado automáticamente. Ni el scroll ni el foco inician la animación.
- **Control explícito:** cada área dispone de un botón nativo «Reproducir animación» / «Detener animación», con contexto accesible del área. Detener sustituye el SVG animado por su copia fija; no se promete pausar/reanudar en el mismo punto. El CSS de la página no controla las animaciones internas de un SVG externo cargado mediante `<img>`.
- **Movimiento reducido:** con `prefers-reduced-motion: reduce` se mantiene la versión fija y no se habilita reproducción mientras esa preferencia esté activa. Si se activa durante la reproducción, se vuelve al estado fijo. La preferencia no sustituye el control de detener para el resto de visitantes.
- **Mejora progresiva:** un único script pequeño dentro de `IspAreaScene.astro` alterna el SVG fijo/animado de las tres instancias, sin librerías, framework de cliente, canvas ni control de scroll. Solo muestra el botón cuando puede funcionar. Sin JavaScript o ante error de carga, permanecen la imagen fija y el contenido HTML. Se conservan además las reglas internas de movimiento reducido de los archivos aportados.
- **Sin destellos:** evitar flashes, parpadeos rápidos o cambios que dificulten leer. El significado completo debe estar disponible sin movimiento y sin depender solo del color.
- **Semántica:** usar `<figure>`, `<img>` y leyenda pertinente. `alt` describe la finalidad sin repetir todo el texto; una relación compleja tiene explicación HTML breve. La ilustración no contiene el único titular, beneficio o CTA de la escena.
- **Adaptación:** conservar la proporción y la composición completa, sin recortar nodos o rótulos como si fueran fotografías. Ajustar al ancho disponible; si un original contiene texto ilegible en móvil, adaptar el activo antes de integrarlo, no reducir toda la interfaz.
- **Carga:** reservar la proporción real 1000×600; el SVG de apertura no usa carga diferida. Las imágenes posteriores pueden usarla. El SVG animado solo se solicita al reproducirlo; ocultarlo con CSS o usar `loading="lazy"` no basta para cumplir esa condición.

Los botones de animación son controles del contenido, no nuevas ofertas comerciales. El CTA único sigue siendo «Conversemos sobre tu ISP». No se incorporan tablas extensas, dashboards ficticios ni un segundo diagrama que duplique cada ilustración.

### 13. Datos, componentes y metadatos previstos

Esta sección es una especificación futura; no modifica archivos de producción.

| Pieza | Ajuste del diseño |
| --- | --- |
| `src/data/ispCampaign.ts` | `ispScenarios` contendrá `id`, `area`, `title`, `problem`, `consequence`, `solution`, `deliverable`, `benefit`, `relatedSolutions`, `illustration` y condiciones de medición complementarias. `ispIllustrations` reúne metadatos de los siete activos; cada escenario reutiliza su entrada. Centralizar el texto único del CTA. |
| `IspScenario` | Mantener IDs `comercial`, `operativa`, `tecnica`. Problema, consecuencia, solución, entrega y beneficio son campos explícitos; un KPI no sustituye a `benefit`. El CTA compartido cierra la narrativa. |
| `src/pages/isp-honduras.astro` | Conservar las diez escenas y sus áreas, actualizar apertura y copy comercial, incorporar los SVG elegidos y usar el mismo CTA al formulario. No extraer componentes de un uso por rutina. |
| `IspAreaScene.astro` | Representar el SVG animado aportado para cada área con copia fija, control de reproducción y explicación HTML breve. Retirar los dibujos anteriores y evitar una segunda ilustración con el mismo contenido. |
| `IspSlide.astro` | Recibir `total` obligatorio para contador y nombre accesible, manteniendo título, índice, tono y clases. No conservar el literal 12. |
| `IspEngineering.astro` | Dos escenas: software/ciclo de datos y automatización/IA, con beneficios primero y capacidades combinables. No volver al catálogo de tecnologías como argumento principal. |
| `IspArchitecture.astro` | Reutilizar sus dos modos para los SVG de software/datos y automatización/IA, con leyenda y explicación HTML breve; sustituir los diagramas anteriores, no acumularlos. No imponer una arquitectura obligatoria. |
| `src/styles/ispCampaign.css` | Dar jerarquía a ilustraciones y copy breve, mantener alcance `.isp-deck`, identidad de marca, altura adaptable y expansión estable. |
| SVG y copias fijas | Incorporar copias de los siete originales elegidos y preparar tres SVG fijos al implementar. Mantener los originales de `documentos/isp/ilustraciones/` y no exigir un rediseño gráfico previo. |

Las ocho capacidades y sus anclas `capacidad-*` siguen disponibles. Las condiciones transversales se distribuyen entre ingeniería y entrega. El ejemplo de alta puede conservarse como ampliación; el ejemplo transversal retirado no requiere una slide adicional.

Se preservan `#introduccion`, `#comercial`, `#operativa`, `#tecnica`, `#ingenieria`, `#automatizacion`, `#primera-entrega`, `#dudas`, `#conversemos` y `#contenido`. `#ciclo-datos` sigue siendo un destino dentro de ingeniería, sin IDs duplicados.

La implementación mantiene HTML renderizado por Astro, sin nuevas bibliotecas, backend, almacenamiento o APIs públicas. Las interacciones locales son el control SVG fijo/animado y las flechas anterior/siguiente solicitadas después. Sin JavaScript, el contenido, las imágenes fijas y el scroll siguen disponibles. Las APIs ofrecidas al ISP son una capacidad comercial, no endpoints que deban construirse en esta landing.

**Título SEO propuesto:** Software e ingeniería de datos para ISPs en Honduras | HGuerra.

**Descripción SEO propuesta:** Aplicaciones, integraciones, análisis y automatización para conectar clientes, operación y monitoreo de tu ISP. Conversemos sobre una primera solución con alcance acordado.

El servicio estructurado se denomina «Desarrollo de software e ingeniería de datos para ISPs», con Honduras como área y el mismo URL. No se añaden reseñas, resultados o datos estructurados que no estén respaldados por el contenido público.

## Alternatives Considered

Estas alternativas proceden del brainstorming, las elecciones de composición y las observaciones del propietario registradas en `.dev/docs/isp-honduras/concepts_brief.md`. No constituyen una nueva ronda de decisiones ni atribuyen al autor motivos históricos que no expresó.

### A1. Catálogo de capacidades o una historia transversal como organizador principal

**Mecanismo alternativo:** ordenar la página por servicios/tecnologías, o seguir un único caso que pase entre todas las áreas.

**Ventajas:** el catálogo permite localizar una capacidad; la historia transversal ofrece continuidad.

**Costos y punto de fallo:** el catálogo puede nombrar herramientas sin demostrar su utilidad. Una sola historia desarrolla menos situaciones y puede hacer que un área parezca secundaria.

**Decisión del autor:** escenarios Comercial, Operativo y Técnico como estructura principal. Se mantienen conexiones entre áreas y capacidades de respaldo, pero no sustituyen la narrativa de cada escena.

### A2. Conciliación, recurrencias y capacidad como toda la oferta

**Mecanismo alternativo:** concentrar el contenido público en los tres ejemplos detallados del primer borrador EGM.

**Ventaja:** permite explicar cada caso con precisión.

**Costos y punto de fallo:** puede presentar a HGuerra como un servicio de revisión de datos y dejar fuera captación, aplicaciones, instalaciones, automatización, monitoreo y herramientas NOC.

**Sustituida por revisión del autor:** mantener los ejemplos como demostraciones, ampliar cada área con soluciones relacionadas y expresar primero la mejora de negocio. La apertura abstracta y el papel de indicadores/tecnologías como beneficios se sustituyen por el enfoque comercial aprobado.

### A3. Dos escenas por área frente a una escena amplia

**Mecanismo alternativo:** separar situación/consecuencia de intervención/entrega en dos slides vinculadas.

**Ventaja:** ofrece más espacio por escena y permite dar énfasis distinto al problema y la solución.

**Costos y punto de fallo:** duplica las escenas centrales y exige reconstruir el contexto si la conexión entre ambas no es clara.

**No elegida por el autor para esta versión:** eligió una escena amplia por área. La consecuencia es admitir altura adaptable y organizar ilustración, copy breve y ejemplo; no comprimir el contenido para imponer una pantalla.

### A4. Tres escenas de ingeniería o una arquitectura completa obligatoria

**Mecanismo alternativo:** presentar software, ciclo de datos y conocimiento/acciones como tres capítulos independientes, o dibujar un único flujo técnico que todos los proyectos deban recorrer.

**Ventaja:** cada capacidad dispone de más espacio.

**Costos y punto de fallo:** puede repetir soluciones ya mostradas y convertir el respaldo técnico en el argumento dominante. Un flujo obligatorio falsea el alcance cuando basta una aplicación, integración o automatización pequeña.

**Decisión del autor:** dos escenas de ingeniería, con capacidades combinables y todas las existentes disponibles. La revisión comercial refuerza que no se venda una arquitectura obligatoria.

### A5. Tablas y diagramas como visuales principales

**Mecanismo alternativo:** usar matrices de conciliación, cronologías extensas y diagramas de varios carriles como protagonistas de cada escena.

**Ventaja:** permiten inspeccionar reglas y relaciones con detalle.

**Costos y punto de fallo:** exigen lectura técnica antes de reconocer el problema y saturan la presentación. Sustituirlos solo por iconos tampoco demuestra una solución utilizable.

**Evolución de la decisión del autor:** la revisión comercial eligió inicialmente fotografías de contexto. El autor las sustituyó por ilustraciones y finalmente eligió los siete SVG de borrador de `documentos/isp/ilustraciones/`, tres con animación, para mejorarlos después de tener el sitio. Se mantiene el rechazo de tablas y diagramas densos dominantes. El detalle se conserva en ampliaciones, sin simular productos o resultados reales.

### A6. CTA técnico, ofertas distintas o canales paralelos

**Mecanismo alternativo:** pedir «Evaluar una mejora», alternar distintos CTA por área o promover formulario, WhatsApp, demo y diagnóstico como acciones comerciales equivalentes.

**Ventaja:** permite expresar acciones o preferencias de canal diferentes.

**Costos y punto de fallo:** puede exigir al visitante un alcance que aún no ha definido, dispersar la acción o crear expectativas de auditoría/demostración que no se ofrecen.

**Decisión del autor en la revisión aprobada:** «Conversemos sobre tu ISP» como único CTA comercial al formulario, repetible sin crear ofertas distintas. Se conserva el envío, la accesibilidad y las condiciones del formulario; no se promociona otro canal en paralelo en esta landing.

### A7. Ilustraciones como complemento o sustitución de fotografías

**Mecanismo alternativo:** conservar las fotografías de contexto e incorporar las ilustraciones como apoyo adicional.

**Ventaja:** combina contexto humano con una explicación del mecanismo.

**Costo:** aumenta la cantidad de activos y puede hacer competir foto, ilustración y argumento dentro de una escena.

**Decisión explícita posterior del autor:** las siete ilustraciones sustituyen las fotografías de contexto como protagonistas, no las complementan. Se conserva el retrato profesional real. La selección posterior de borradores existentes resuelve su recepción sin exigir versiones definitivas antes de construir la primera landing.

## Critical User Journeys

### CUJ 1. Reconocer la oferta sin ser especialista técnico

- **Given:** llega un propietario o gerente general, comercial, operativo o técnico de un ISP.
- **When:** ve la apertura y la escena correspondiente a su necesidad.
- **Then:** identifica problema, solución, beneficio, capacidad de HGuerra y CTA sin interpretar un diagrama o abrir un desplegable. Reconoce las imágenes como ilustrativas y puede comprender el argumento sin reproducir las animaciones.

### CUJ 2. Comprobar qué puede desarrollar HGuerra

- **Given:** el visitante necesita saber si la oferta incluye una aplicación, integración, análisis o automatización.
- **When:** lee la solución, entrega y respaldo de ingeniería.
- **Then:** relaciona el beneficio con una capacidad concreta y entiende que se selecciona según la necesidad. No interpreta un indicador como beneficio, ni DWH/IA como requisitos universales, ni herramientas NOC como operación NOC contratada.

### CUJ 3. Iniciar una conversación comercial

- **Given:** el visitante identifica una prioridad, sin tener una tecnología o alcance elegidos.
- **When:** activa «Conversemos sobre tu ISP».
- **Then:** llega al formulario en `#conversemos`, cuyo siguiente campo enfocable es el correo. Envía correo y necesidad con el contexto ISP existente, sin contratación, diagnóstico completo, calendario o automatismo adicional.

Estos recorridos son criterios del diseño, no pruebas ejecutadas de una nueva implementación.

## Detailed Implementation Plan

Este plan registra el trabajo aprobado. Después de cerrar el diseño y elegir los SVG existentes, el propietario autorizó explícitamente iniciar su implementación local. No autoriza commits o despliegue.

### Dependencias de ejecución y alcance

- Partir de los cambios locales existentes sobre `b6209a7`, no restablecer ese commit ni sobrescribir trabajo ajeno. `apphosting.yaml` y los archivos no relacionados quedan fuera.
- Los siete originales están en `documentos/isp/ilustraciones/` y el propietario eligió usarlos como borradores de primera versión. La implementación utiliza copias locales de publicación sin modificar esas fuentes o desplegarlas.
- Preparar las copias de publicación y tres versiones SVG fijas al implementar, conservando los originales. No esperar GIF ni un rediseño gráfico.
- La integración y revisión visual dentro de la landing siguen pendientes de ejecución; no declarar completa esa experiencia por haber inspeccionado los XML.
- No cambiar el formulario compartido, la instrumentación de analítica, el consentimiento, la configuración de hosting o las páginas generales.

### Lista única de implementación

1. **Preparar copias de las siete ilustraciones existentes y tres versiones SVG fijas.**
   - Integrar los SVG en `public/images/isp/hero.svg`, `public/images/isp/como-trabajo.svg`, `public/images/isp/software-datos.svg` y `public/images/isp/ia-automatizacion.svg`.
   - Copiar los tres SVG animados a `public/images/isp/comercial.svg`, `public/images/isp/operativa.svg` y `public/images/isp/tecnica.svg`. Las correspondencias exactas de fuente/destino están en el inventario de la sección 12.
   - Preparar `public/images/isp/comercial-estatico.svg`, `public/images/isp/operativa-estatico.svg` y `public/images/isp/tecnica-estatico.svg` desactivando las animaciones en copias, sin alterar su geometría. No crear GIF ni imágenes rasterizadas o modificar los originales.
   - Mantener SVG como imágenes locales externas, sin scripts, eventos o dependencias externas innecesarias. Conservar las reglas de movimiento reducido de las tres fuentes animadas.
   - Usar la proporción real 1000×600 y la composición completa. Revisar legibilidad y movimiento al integrar, sin exigir un acabado gráfico definitivo: las mejoras del propietario son posteriores a la primera versión del sitio.
   - Registrar autoría/procedencia, permiso, adaptaciones permitidas y crédito necesario en la sección de recursos visuales de `docs/servicios-isp-honduras.md`.
   - Conservar `public/mi_foto_pro.jpeg` sin cambios para el perfil. No preparar las cuatro fotografías ni las rutas `.webp` del plan sustituido.
   - Las diez rutas están preparadas e incorporadas a la landing local. Las siete fuentes originales se conservan, sin despliegue.

2. **Actualizar `src/data/ispCampaign.ts` para la narrativa comercial.**
   - Crear `ispScenarios` como fuente de los tres escenarios y sustituir el uso de `ispChallenges`. Los IDs siguen siendo `comercial`, `operativa` y `tecnica`.
   - Cada escenario contiene `id`, `area`, `title`, `problem`, `consequence`, `solution`, `deliverable`, `benefit`, `relatedSolutions`, `illustration`, `sources` y `measurementNote`.
   - `relatedSolutions` contiene las tres agrupaciones aprobadas, no listas de funcionalidades anidadas. `sources` y `measurementNote` sirven a la ampliación técnica, no al beneficio publicitario.
   - Exportar `ispIllustrations` con entradas para `introduccion`, `comercial`, `operativa`, `tecnica`, `forma-de-trabajo`, `ingenieria` y `automatizacion`. Cada escenario reutiliza la entrada de su área en `illustration`, sin duplicar metadatos.
   - El tipo `IspIllustration` distingue `kind: 'svg'` y `kind: 'animated-svg'`. Ambos contienen `src`, `alt`, `width`, `height`, `caption` y `credit` opcional; el animado requiere además `posterSrc` para su copia fija. Registrar las dimensiones 1000×600 observadas y créditos solo si corresponden. Las copias animada/fija comparten proporción para evitar saltos.
   - Exportar `ispCtaLabel` con el único texto «Conversemos sobre tu ISP». Mantener el texto de envío «Enviar mi consulta» como control funcional del formulario, no como otra oferta.
   - Conservar las ocho `ispEngineeringCapabilities`, sus identificadores y `ispActivationSteps`; ajustar las descripciones para apoyar el enfoque de capacidades combinables. Alinear `ispFaqs` con las respuestas públicas del diseño.
   - Retirar `ispFoundations` e `ispScenarioSteps` al retirar sus slides y trasladar sus condiciones útiles a ingeniería/entrega. La inspección de consumidores en `src` del 2026-11-16 los encontró solo en la página y su módulo; comprobar únicamente si ese hecho cambió antes de eliminarlos.
   - No almacenar KPIs con valores de rendimiento ficticios ni registros reales de clientes en los datos de ejemplo.

3. **Modificar `src/components/sections/IspSlide.astro` para el total correcto.**
   - Añadir `total` numérico obligatorio y utilizarlo tanto en el contador visible como en su nombre accesible.
   - Mantener `id`, `index`, `label`, `tone`, `titleId` y `class`, así como el encabezado, slots y pie.
   - El índice del argumento conserva 01 Comercial, 02 Operativa y 03 Técnica. El ordinal de la presentación cuenta la apertura como primera de diez escenas.
   - Mantener el componente de estructura sin estado de cliente. La navegación lateral añadida posteriormente se integra una sola vez en la página, no en cada instancia.

4. **Modificar `src/components/sections/IspAreaScene.astro` para SVG animado y ejemplo breve.**
   - Restringir `area` a los tres IDs y recibir su `illustration` de tipo `animated-svg`, sin extraer un componente nuevo.
   - Renderizar inicialmente `posterSrc` con texto alternativo, dimensiones y leyenda/crédito que correspondan; permitir carga diferida de esa imagen fija. No colocar la versión animada en `src`/`srcset` ni precargarla antes de reproducir.
   - Añadir el botón nativo de reproducir/detener, con nombre contextual y foco visible, mediante mejora progresiva. Un único script del componente gestiona las tres instancias: cambia entre `posterSrc` y `src` y conserva el foco. No intenta controlar el CSS interno del SVG externo desde la página.
   - Con movimiento reducido, mantener la imagen fija y no ofrecer reproducción; observar un cambio de preferencia para detener una animación activa. Sin JavaScript, los botones no se muestran y la imagen fija/explicación siguen disponibles. Ante fallo del SVG animado, restaurar la imagen fija.
   - Mantener las tres secuencias como explicaciones HTML breves: activación/factura/revisión; intervención/cierre/reclamo relacionado; alerta/servicio/revisión prioritaria. No renderizar además otro dibujo o diagrama del mismo ejemplo.
   - Identificar cada variante como ilustrativa; no simular un producto operativo ni usar controles falsos dentro de la ilustración.
   - Retirar los dibujos y estilos actuales de prospecto/abonado, teléfono de campo y red que ya no tengan uso. No reemplazarlos por tablas extensas.
   - Este componente muestra el ejemplo, no replica el argumento comercial de la página ni contiene un formulario o lógica de negocio de un ISP.

5. **Modificar `src/components/sections/IspArchitecture.astro` sin imponer toda la arquitectura.**
   - Conservar los modos `data` e `intelligence` y recibir los metadatos de su ilustración SVG. Mantener destinos de contenido e IDs únicos.
   - Sustituir los nodos/flechas del diagrama actual por `<img>` local del SVG correspondiente y una leyenda breve; no inyectar el XML ni duplicar el diagrama al lado del activo.
   - En datos, utilizar `software-datos.svg` con el mensaje de capacidades combinables. Su explicación HTML mantiene capturar/conectar, preparar/relacionar y analizar/usar. Aplicaciones pueden ser origen y destino; Data Warehouse no es requisito universal.
   - En automatización, utilizar `ia-automatizacion.svg` y distinguir en HTML consultas RAG de acciones con herramientas, reglas, autorización y registro. IA no es dependencia de toda automatización.
   - Mantener explicación, controles y detalle legibles sin depender de etiquetas internas diminutas. Retirar únicamente estilos de los diagramas sustituidos; no incorporar librerías.

6. **Modificar `src/components/sections/IspEngineering.astro` para las dos escenas elegidas.**
   - Recibir `total` y el CTA compartido y renderizar las escenas de índices 5 y 6 del inventario.
   - Integrar el desarrollo de aplicaciones al ciclo de registro/datos en lugar de mantener una tercera slide comercial independiente de software.
   - Mostrar el beneficio y después el mecanismo/capacidades. Pasar los SVG de `ispIllustrations` a los modos de `IspArchitecture`, sin añadir un segundo esquema.
   - Conservar los entregables y las ocho anclas `capacidad-*` en ampliaciones organizadas: objetivos, software, integración, DWH, modelos y evolución en software/datos; conocimiento y agentes en automatización.
   - Mantener el ejemplo de alta de `ispActivationSteps` como ampliación de software, no como una escena adicional.
   - Incluir calidad, permisos, trazabilidad, recuperación acordada y límites de autonomía, sin prometer seguridad integral o capacidades NOC de operación.

7. **Modificar `src/pages/isp-honduras.astro` como composición comercial.**
   - Utilizar el copy aprobado de este documento y `ispScenarios`, no volver a resumirlo con el hero abstracto o con indicadores como beneficios.
   - Declarar un único total de diez escenas y pasarlo a todos los `IspSlide` y a `IspEngineering`. Mantener orden e índices del inventario; no crear un motor genérico de slides. El ajuste posterior añade la navegación lateral con los IDs ya existentes.
   - Apertura: oferta explícita, problema reconocible, SVG `hero.svg`, apoyo y CTA al formulario; no diferir la imagen de apertura.
   - Áreas: renderizar problema/consecuencia, solución, entrega y beneficio en una escena amplia por área; mostrar las tres agrupaciones relacionadas y su ilustración/ejemplo mediante `IspAreaScene`. El CTA de área reutiliza el mismo texto y destino.
   - Método: incorporar `como-trabajo.svg` con la explicación HTML de los tres pasos, sin un componente adicional de un uso.
   - Mantener dos escenas técnicas, perfil/entrega, FAQ y contacto. No añadir ilustraciones nuevas a estas últimas tres escenas; conservar el retrato real. Retirar las slides independientes de fundamentos y ejemplo transversal, sin perder sus condiciones útiles.
   - Mantener `#contenido`, las tres áreas, `#ingenieria`, `#automatizacion`, `#primera-entrega`, `#dudas` y `#conversemos`; conservar `#ciclo-datos` dentro del contenido de datos.
   - Mantener el componente `ContactForm` con sus props de campaña y aviso de datos. No modificar el envío o la validación para cambiar el lenguaje de la página.
   - Retirar el enlace comercial paralelo de WhatsApp y su preparación/importación de esta página si deja de tener uso. No cambiar el fallback o comportamiento del componente compartido.
   - Actualizar título, descripción y nombre de servicio estructurado según la sección de metadatos. Generar las FAQ estructuradas desde `ispFaqs`.
   - Conservar consentimiento, enlaces legales y perfil real. No cambiar sitemap, navegación general o configuración de analítica para una ruta ya existente.

8. **Modificar `src/styles/ispCampaign.css` para la jerarquía aprobada.**
   - Mantener alcance `.isp-deck`, tokens de marca y presentación vertical.
   - Dar espacio a ilustración, titular y copy breve; distinguir solución, entrega y beneficio sin crear cinco tarjetas o párrafos extensos por área.
   - Adaptar SVG estáticos/animados al ancho disponible sin recortar su composición. En móvil, preservar orden de lectura y texto HTML legible sin desplazamiento horizontal.
   - Reservar dimensiones coherentes entre SVG animado y copia fija. Estilizar los botones de reproducción como controles secundarios, no como CTA comerciales. No intentar detener el CSS interno de un SVG externo desde la página.
   - Mantener altura adaptable, alineación superior de las áreas y expansión estable de detalles. No imponer una altura máxima o esconder contenido para encajar.
   - Reutilizar patrones actuales de foco/hover y controles. Retirar solo estilos de los bloques efectivamente eliminados, sin un refactor de estilos del sitio.

9. **Actualizar documentación pertinente, sin duplicar el diseño.**
   - `.agents/product-marketing-context.md`: actualizar solo la sección de campaña con audiencia, narrativa, alcance de las tres áreas, CTA y límites aprobados. Distinguir el estado local implementado del despliegue.
   - `docs/servicios-isp-honduras.md`: alinear el recorrido comercial y el papel de los ejemplos, conservar la investigación y los KPIs, y registrar procedencia/permisos de las siete ilustraciones y sus versiones fijas.
   - `docs/designs/isp-honduras.md`: conservarlo como referencia aprobada de diseño e implementación. Si la ejecución descubre una decisión sustancial nueva o una contradicción, pedir su resolución antes de cambiar el diseño; no adaptarlo retroactivamente como si siempre hubiera sido así.
   - Actualizar la ficha local `/home/hguerra/Obsidian/SegundoCerebro/Proyectos/personal_web-hguerra.md` con cambios realmente implementados, evidencia y pendientes. No copiar datos sensibles o contenido de entorno.
   - No modificar `.gitignore` ni mover documentos anteriores por la convención de EGM.

10. **Realizar solo la verificación dirigida descrita abajo y entregar los pendientes reales.**
    - Corregir únicamente fallos observados del cambio; no añadir infraestructura, suites o trabajo transversal para cerrar casillas.
    - La entrega de implementación debe indicar qué originales se recibieron y revisaron, qué se inspeccionó localmente y qué falta aceptar o publicar.
    - No realizar `git add`, commits, push o despliegue sin una solicitud posterior que los autorice.

### Archivos fuera de modificación

`src/components/sections/ContactForm.astro`, `src/data/contact.ts`, `AnalyticsConsent.astro`, configuración de hosting, dependencias, rutas generales y archivos ajenos no forman parte del cambio previsto. Si una necesidad real exige tocarlos, se debe justificar el delta y confirmar el alcance antes de ampliar este plan.

Los únicos archivos nuevos de producción previstos son las siete copias SVG y las tres versiones SVG fijas enumeradas. Los originales de `documentos/isp/ilustraciones/` no se modifican. El control de animación se aloja en el componente existente; no se crean componentes, scripts separados, endpoints o archivos de pruebas adicionales.

### Verification Plan

Los criterios siguientes guiaron la revisión dirigida. La evidencia ejecutada y sus límites se registran al final; enumerar un criterio no acredita por sí solo una prueba.

**Revisión de fuentes y contenido:** contrastar los consumidores afectados, el orden/total de diez escenas, IDs únicos, props y ausencia de referencias a bloques retirados. Comprobar que las FAQ públicas y estructuradas proceden de la misma fuente y todos los CTA comerciales mantienen texto/destino.

**Inspección visual solicitada:** cargar solo `/isp-honduras` localmente en un ancho de escritorio y uno móvil, reutilizando herramientas disponibles. Revisar las siete ilustraciones con su texto, perfil y contacto. Verificar legibilidad, composición completa, ausencia de recortes/desbordamiento, rótulos ilustrativos y créditos. En la misma inspección, revisar el control compartido SVG fijo/animado: estado inicial sin descarga de la versión animada, reproducir/detener con teclado, retorno a imagen fija con movimiento reducido y contenido legible sin JavaScript. No se convierte en una matriz de dispositivos o una suite E2E.

**Flujo principal que puede afectar el DOM:** seguir un CTA hacia `#conversemos` y comprobar acceso al correo con el siguiente Tab; revisar una ampliación para confirmar que su disparador no brinca. No hace falta repetir envíos simulados o reales mientras transporte, validación y campos compartidos no cambien: existe evidencia previa de esa frontera.

**Activos aportados:** la selección y la inspección estructural están documentadas en la sección 12. Al integrar, comprobar que las copias corresponden a esas fuentes, conservar la proporción y revisar la animación sin destellos ni información esencial exclusiva del movimiento. El texto y la copia fija permiten comprender el argumento. Registrar procedencia/atribución pertinente; no repetir una revisión estructural sin cambios de los originales ni exigir nuevas ilustraciones por ser borradores.

**Límites de verificación:** no hay objetivo de cobertura ni tests unitarios nuevos para textos, estilos, imágenes o glue estático. No se planifica build, smoke o suite general de cierre. Si el render local revela un error de sintaxis o integración, utilizar la herramienta existente más acotada para ese fallo. No se validan servicios de clientes, redes, recuperaciones, modelos, rendimiento de ISP, entrega externa de correo o impacto en ventas mediante esta landing.

### Artefactos de diseño de esta fase

`.dev/docs/isp-honduras/concepts_brief.md` conserva la base y evolución de decisiones; `.dev/docs/isp-honduras/design_draft.md` conserva el borrador reconciliado. `docs/designs/isp-honduras.md` es la referencia definitiva aprobada conforme a la convención acordada. No se crean informes Goldfish ni se afirma revisión independiente por haber redactado este plan.

## Reconciliación y aprobación documental

El 2026-11-16 se contrastó el diseño completo con `.dev/docs/isp-honduras/concepts_brief.md` y sus adendas. No quedan contradicciones abiertas: la audiencia ampliada, narrativa comercial, CTA, diez escenas y sustitución de fotografías por siete SVG/GIF corresponden a decisiones explícitas. El plan ajustado, incluidas las versiones fijas y los controles de animación, fue aprobado por el propietario para guardar este documento.

**Actualización posterior de activos:** el propietario eligió los siete SVG de `documentos/isp/ilustraciones/` para la primera versión y pospuso mejoras gráficas hasta tener el sitio. Esta selección sustituye el formato GIF previsto por SVG animado y resuelve la recepción; conserva el mecanismo de imagen fija/reproducción manual, el resto del diseño y los límites de autorización.

La aprobación es documental. La recepción y la inspección estructural posteriores constan en la sección 12; no acreditan integración, revisión visual de la nueva landing, pruebas del producto, aceptación externa, commit, despliegue o revisión Goldfish.

## Implementación y evidencia local — 2026-11-16

El propietario autorizó iniciar la implementación local, sin commit ni despliegue. Se aplicaron el recorrido de diez escenas, copy, escenarios, dos escenas técnicas, ocho capacidades/anclas, contador compartido, CTA único, metadatos y FAQ. Se incorporaron las siete ilustraciones y tres copias SVG fijas. Los originales, el retrato y el formulario compartido permanecen sin cambios; tampoco se modificaron hosting, dependencias o analítica.

Revisión local con Chrome a 1440×900 y 375×667, reutilizando Playwright Core temporal fuera del repositorio y bloqueando solicitudes externas:

- Página HTTP 200, sin errores de página o respuestas locales fallidas observados; ancho del documento igual al viewport, diez escenas y ocho anclas de capacidades sin IDs duplicados.
- Capturas de escenas y siete ilustraciones inspeccionadas; composición completa, texto legible y altura natural. Algunas capturas largas de elemento muestran el artefacto de captura del skip-link conocido y la barra de desarrollo de Astro; no se alteró el comportamiento de producción para ocultarlos.
- Siete imágenes cargadas; ninguna versión animada solicitada antes de reproducir. Reproducir con Enter y detener con Espacio alternan la imagen y el nombre del control.
- Activar movimiento reducido devuelve la copia fija. Tras corregir la pérdida de foco del `disabled` nativo, una comprobación dirigida confirmó foco conservado, `aria-disabled`, bloqueo de reproducción, ocultamiento al salir del control y disponibilidad al volver a movimiento normal.
- Sin JavaScript, las tres áreas conservan SVG fijos y contenido HTML sin mostrar controles inoperantes.
- CTA y siguiente Tab llegan a `#conversemos` y `contact-email`. El detalle Comercial conserva scroll y posición del disparador al abrir/cerrar.

Evidencia temporal: `/tmp/opencode/isp-implementation.FiqFZw/` (`review.json`, `focus-motion.json` y capturas). Revisión focal de consumidores/estilos y `git diff --check` dirigido sin errores observados. No se ejecutaron suites o builds generales ni envíos simulados/reales; el transporte y la validación del formulario no cambiaron. La revisión no acredita entrega externa de correo, resultados comerciales, aceptación del propietario en navegador, despliegue o revisión Goldfish.

## Pendientes de aceptación y publicación

- Revisión del propietario sobre la landing local; las mejoras gráficas previstas serán una iteración posterior, sin exigir activos nuevos para esta primera versión.
- No adquirir las fotografías o generar GIF del plan sustituido.
- El checkpoint `94e01f6` fue creado posteriormente por solicitud expresa. El ajuste de viewport/flechas aún no tiene otro commit; no se hizo push o despliegue.
- Contrastar el mensaje con anuncios si se aporta una campaña; no hay evidencia actual de alineación o efecto sobre consultas y ventas.

## Ajuste posterior — viewport y navegación lateral

**Solicitud del propietario, 2026-11-16:** adaptar cada slide al tamaño de pantalla y añadir una flecha arriba y otra abajo en el lateral derecho para cambiar rápidamente. Esta decisión sustituye la exclusión inicial de navegación de presentación, no el requisito de conservar contenido y scroll natural.

- `src/styles/ispCampaign.css`: mínimo `100dvh`, escala de títulos/espacios según ancho y alto, imágenes con proporción completa y límite de alto, y reglas compactas para escritorio de hasta 800 px de altura. No hay alto máximo, recorte de texto, scroll anidado o escalado por `transform`.
- `src/components/sections/IspEngineering.astro`: nota de capacidades combinables y controles se distribuyen junto a la ilustración de datos, conservando todos los textos y anclas.
- `src/pages/isp-honduras.astro`: navegación fija de dos botones nativos, contador y `aria-disabled` en los extremos. Los botones saltan con `scrollIntoView({ behavior: 'instant' })`, mantienen su foco para uso repetido y no interceptan teclas o rueda. Un `IntersectionObserver` con franja de un píxel al 25 % del alto actualiza la posición al hacer scroll; se reconstruye al redimensionar. La navegación solo aparece al inicializar JavaScript.
- Una franja lateral y el área segura de pantalla evitan superponer flechas sobre contenido, imágenes o formulario. Sin JavaScript no se reserva esa franja y los controles permanecen ocultos.
- En pantallas pequeñas, zoom o detalles abiertos, prima la legibilidad: la escena crece y se recorre con scroll. No se promete encajar todo el contenido móvil en una sola pantalla.

**Aumento tipográfico posterior solicitado por el propietario:** toda la tipografía de la landing ISP se incrementa un 10 % mediante `--deck-type-scale: 1.1` en `src/styles/ispCampaign.css`. Incluye títulos, párrafos, botones, leyendas de otras escenas, pies, contador y textos/campos del formulario solo en esta página. Se mantienen `rem`, rangos fluidos e interlineados relativos, sin zoom o escalado visual de la página. La descripción del hero pasa de 16–17,6 px a 17,6–19,36 px con raíz de 16 px. Esta revisión es de CSS en fuente; el encaje de diez escenas en 900/720 px documentado abajo corresponde a la tipografía anterior y no debe extrapolarse al texto ampliado. Se permite crecimiento antes que recortar contenido.

**Evidencia dirigida:** Chrome local a 1440×900, 1280×720 y 375×667, con solicitudes externas bloqueadas y sin envíos. Las diez escenas cerradas miden 900 px y 720 px respectivamente en los dos escritorios; en móvil crecen con su contenido. Sin desbordamiento horizontal en los tres tamaños; la franja de contenido queda a la izquierda de las flechas. Avance repetido, retroceso con Enter, sincronización tras scroll manual, límites primero/último, detalle Comercial estable y navegación oculta sin JS observados. Capturas focales inspeccionadas. Evidencia temporal en `/tmp/opencode/isp-navigation.Fmxhjw/` (`review.json`, `layout.json`, `layout-short.json` y capturas); no son pruebas nuevas en el repositorio ni una revisión de formulario/transportes, producción o impacto comercial.

## Recursos de contexto y límites de evidencia

- `.dev/docs/isp-honduras/concepts_brief.md`: base del brainstorming y adendas con las observaciones y decisiones del propietario.
- `documentos/isp/ilustraciones/`: siete fuentes SVG de borrador elegidas por el propietario; originales conservados y copias incorporadas en `public/images/isp/`.
- `src/pages/isp-honduras.astro`, `src/data/ispCampaign.ts`, `IspSlide.astro`, `IspAreaScene.astro`, `IspArchitecture.astro`, `IspEngineering.astro` y `src/styles/ispCampaign.css`: implementación local; evidencia dirigida descrita en el apartado anterior.
- `docs/servicios-isp-honduras.md`: investigación y desarrollo técnico internos, no texto que deba volcarse íntegro en la landing.
- TM Forum GB991 v24.6, p. PDF 13: relación entre solicitudes, operación, facturación y pagos.
- FitSM-2, PR5 p. PDF 21 y PR10 p. PDF 32: capacidad y gestión de problemas recurrentes.
- TR-499, §8.3 p. PDF 24: dimensiones de calidad de acceso a Internet.
- Cable One Annual Report 2025, §«Our Strengths»: experiencia internacional en facturación y atención; no resultados de HGuerra o prueba del mercado hondureño.

Los IDs del RAG y límites de inferencia están en el brief. No se realizó nueva investigación o validación comercial para esta edición documental ni se publicarán estas referencias como prueba de proyectos propios.

*Diseño documentado con EGM y aprobado por el propietario; implementación local autorizada después. Sin revisión Goldfish, commit o despliegue.*
