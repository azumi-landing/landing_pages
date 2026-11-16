# Landing ISP Honduras — desarrollo de software e ingeniería de datos

- **Author:** Héctor Guerra
- **Fecha:** 2026-11-16
- **Estado:** Borrador cerrado al guardar el diseño; conserva la versión anterior a la selección de los SVG existentes. Referencia vigente: `docs/designs/isp-honduras.md`.
- **Entrada de contexto:** `.dev/docs/isp-honduras/concepts_brief.md`, incluidas las adendas comercial y SVG/GIF.
- **EGM artifact directory:** `.dev/docs/isp-honduras/`
- **Destino al finalizar:** `docs/designs/isp-honduras.md`
- **Alcance:** finalizar y guardar el diseño aprobado. No implementar, realizar commits, desplegar ni modificar configuración.

> **Actualización posterior:** el propietario eligió los siete SVG de borrador de `documentos/isp/ilustraciones/` para la primera versión, tres con animación CSS en lugar de GIF. La recepción ya está resuelta y las mejoras gráficas serán posteriores. Los archivos exactos y el plan vigente se mantienen en `docs/designs/isp-honduras.md`; las previsiones de GIF y activos pendientes de este borrador son históricas.

## Revisión que sustituye la propuesta anterior

Las observaciones del propietario amplían la audiencia y cambian el énfasis del borrador. La landing debe vender desarrollo de software e ingeniería de datos mediante una narrativa publicitaria, no presentar un ejercicio de conciliación o una guía técnica como oferta principal.

Esta revisión:

- Amplía la audiencia a propietarios y gerentes generales, comerciales, operativos y técnicos de ISP hondureños.
- Sustituye la apertura abstracta sobre «conciliar, resolver o decidir» por problemas empresariales reconocibles.
- Amplía las tres áreas sin convertirlas en catálogos: un problema principal, soluciones relacionadas y un ejemplo concreto por área.
- Hace explícito el beneficio empresarial antes de detallar tecnologías o indicadores.
- Da protagonismo a las siete ilustraciones SVG/GIF que prepara el propietario; retira las tablas extensas y diagramas densos de la composición principal.
- Propone un único CTA comercial, «Conversemos sobre tu ISP», con destino al formulario existente.
- Mantiene perfil, entregables, transferencia, controles y condiciones; no añade pruebas sociales o resultados inventados.

Se conservan las decisiones de **una escena amplia por área**, **dos escenas de ingeniería**, formato vertical y desplazamiento natural. No se reabren las páginas ni el posicionamiento general de HGuerra.

**Cambio visual posterior confirmado por el propietario:** los SVG y GIF sustituyen las fotografías de contexto; no las complementan. Se conserva únicamente la fotografía profesional real del perfil. Esta decisión reemplaza la dirección fotográfica aprobada en la revisión comercial anterior. La preparación de los archivos no bloquea la planificación ni la finalización documental, pero su recepción y revisión siguen siendo dependencias de la implementación.

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

Los SVG y GIF muestran el problema, las relaciones o un uso posible, sin imitar un producto existente. La idea debe entenderse también sin movimiento y con texto HTML. No se satura la escena con párrafos, tablas o diagramas.

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
- Abrir el compañero visual, generar imágenes, transformar archivos o adquirir activos/licencias en esta revisión documental. El propietario prepara los SVG y GIF.
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
- Una ilustración GIF protagonista relacionada con la situación, con versión fija y movimiento bajo control del visitante.
- Una solución en lenguaje de negocio, seguida de qué construye o integra HGuerra y qué recibe el equipo.
- Un beneficio explícito y un ejemplo breve de cómo se usaría la entrega, integrado a la ilustración y descrito en HTML; no otro visual que compita con ella.
- El mismo CTA hacia el formulario.

La cadena publicitaria es conceptual: no se dibujan cinco tarjetas ni se repite una etiqueta técnica por cada frase. Los textos de la siguiente sección son el contenido principal previsto. Las notas de alcance, dirección de ilustraciones y medición son instrucciones de diseño; no se vuelcan como párrafos adicionales en la pantalla.

Como orientación editorial, el cuerpo principal de cada área debe ser breve, próximo a 100–140 palabras, sin contar rótulos. No es un límite que justifique recortar la entrega o reducir la letra. Las tres líneas de soluciones relacionadas y un ejemplo compacto sustituyen al catálogo extenso y a las tablas de revisión.

En escritorio, ilustración y argumento se relacionan en columnas, con espacio suficiente para leer. En móvil se apilan en orden comprensible; la información principal sigue siendo texto HTML. No se fuerza una tabla ancha o un gráfico con texto diminuto. La altura crece con el contenido.

Se conserva la alineación superior estable de `.area-slide`. No se añade snap, carrusel, control de rueda o desplazamiento mediante JavaScript. Las ampliaciones no esconden el valor central ni recentran toda la escena al abrirse.

### 3. Apertura comercial — texto aprobado

**Antetítulo:** Software e ingeniería de datos para ISPs de Honduras.

**Titular:** ¿Tu ISP pierde seguimiento entre ventas, instalaciones y soporte?

**Consecuencia:** Cuando la información queda repartida, cuesta saber qué está pendiente, quién debe atenderlo y cómo afecta al cliente.

**Solución y beneficio:** Conecto tus sistemas y desarrollo aplicaciones, análisis y automatizaciones para seguir clientes, coordinar el trabajo y aprovechar los datos de tu red.

**Alcance breve:** Desde la captura y la integración hasta las herramientas que usa tu equipo.

**CTA:** Conversemos sobre tu ISP.

**Microcopy:** Contame qué querés mejorar. Si hay encaje, acordamos una primera entrega, su alcance e inversión.

**Dirección visual:** SVG de un ISP con sistemas y datos interconectados, según la propuesta del propietario. Relaciona clientes, operación y red sin convertir la apertura en un mapa de arquitectura. No una pantalla llena de código, un collage de logos tecnológicos o una infraestructura sin relación con el problema.

Se retira el titular «¿Qué necesitás conciliar, resolver o decidir en tu ISP?» y la composición de tres preguntas abstractas como visual principal.

### 4. 01 Comercial — continuidad del cliente

**Problema principal:** se pierde continuidad entre el interés del cliente, la activación, el cobro y la relación posterior.

#### Contenido principal aprobado

**Titular:** Más seguimiento comercial, desde el primer contacto hasta el cobro.

**Problema y consecuencia:** Cuando ventas, activaciones y pagos quedan separados, pueden quedar oportunidades, altas o diferencias sin atender. También cuesta reconstruir qué pasó antes de una cancelación.

**Solución:** Conectá el recorrido comercial y el historial del cliente. Desarrollo o integro aplicaciones para seguimiento, activaciones, facturación y cobros.

**Qué recibe tu equipo:** Estados, pendientes y diferencias relacionados, con responsables y evidencia para darles seguimiento.

**Beneficio:** Tu equipo puede retomar oportunidades, destrabar altas, revisar cobros y orientar la atención sin reconstruir cada caso.

**Soluciones relacionadas:** Captación y activaciones · Facturación y cobros · Retención y análisis de cancelaciones.

**CTA:** Conversemos sobre tu ISP.

#### Ilustración y ejemplo

- **Ilustración GIF:** clientes, facturación y pagos, del problema de registros separados al seguimiento relacionado.
- **Ejemplo narrado en HTML:** «Activación registrada → Factura por relacionar → Revisión asignada». Puede integrarse en la secuencia ilustrada sin añadir una segunda figura.
- **Detalle breve:** confirmar fecha, ciclo y vínculo entre registros antes de considerar la diferencia un error.
- **Rótulo:** Ejemplo ilustrativo de seguimiento.

La conciliación permanece como ejemplo concreto, no como toda la oferta Comercial. No se muestra una tabla de tres casos en la composición principal.

#### Condiciones y medición complementarias

La aplicación al sistema existente depende de accesos e interfaces. Una diferencia no equivale automáticamente a pérdida de ingresos. Historial y análisis de cancelaciones ayudan a investigar, no prueban causas ni garantizan retención.

Conversión a altas, tiempos de activación, cartera y bajas pueden medir el proceso según el alcance. El margen necesita costos; ARPU no lo sustituye. Estos indicadores no son el beneficio ni otra lista dominante en la escena.

### 5. 02 Operativa — trabajo coordinado e historial

**Problema principal:** órdenes, personas y antecedentes no tienen un mismo seguimiento, por lo que la atención depende de reconstruir el contexto y de tareas manuales.

#### Contenido principal aprobado

**Titular:** Menos tareas dispersas. Más continuidad en la atención.

**Problema y consecuencia:** Órdenes, citas y reclamos repartidos entre mensajes, llamadas y sistemas hacen difícil saber qué falta o qué se hizo antes. Se puede repetir trabajo mientras un caso sigue pendiente.

**Solución:** Reuní órdenes, responsables e historial. Construyo aplicaciones para instalaciones y soporte, conecto el trabajo de las cuadrillas y automatizo traspasos que hoy dependen de seguimiento manual.

**Qué recibe tu equipo:** Un flujo con pendientes, asignaciones y evidencia de atención, conectado al servicio del cliente.

**Beneficio:** Tu equipo sabe quién atiende cada caso y cuenta con antecedentes para coordinar la siguiente intervención.

**Soluciones relacionadas:** Órdenes e instalaciones · Soporte y reclamos recurrentes · Automatización de tareas y avisos.

**CTA:** Conversemos sobre tu ISP.

#### Ilustración y ejemplo

- **Ilustración GIF:** reclamos, órdenes de trabajo y automatización del seguimiento. Representa software que apoya al ISP, no instalaciones físicas realizadas por HGuerra.
- **Ejemplo narrado en HTML:** «Intervención registrada → Ticket cerrado → Reclamo relacionado». La animación puede mostrar el vínculo con los antecedentes y la siguiente atención.
- **Siguiente acción mostrada:** consultar antecedentes, responsable y evidencia antes de tratar el reclamo como un caso aislado.
- **Rótulo:** Ejemplo ilustrativo de atención.

Se conserva el ejemplo del ticket cerrado cuyo problema vuelve. La secuencia de cuatro filas de investigación deja de ser el visual dominante.

#### Condiciones y medición complementarias

Los criterios de recurrencia, evidencia de cierre y responsabilidades se acuerdan con el equipo. No se promete detección automática de causas.

Tiempos de instalación o resolución, reaperturas y visitas repetidas permiten evaluar lo acordado, con ventanas y definiciones explícitas; no equivalen por sí solos a una mejora conseguida.

### 6. 03 Técnica — monitoreo con contexto del servicio

**Problema principal:** las alertas y métricas de red no siempre muestran qué servicio requiere atención ni qué información justifica una intervención.

#### Contenido principal aprobado

**Titular:** Del aviso de red a la prioridad de atención.

**Problema y consecuencia:** Las alertas por sí solas no explican qué clientes o servicios están afectados. Cuesta priorizar incidentes, seguir la calidad y sustentar decisiones de capacidad.

**Solución:** Relacioná monitoreo, servicios e historial. Desarrollo o integro herramientas para NOC, alertas contextualizadas y análisis de disponibilidad, calidad y capacidad.

**Qué recibe tu equipo:** Información relacionada, criterios de alerta y vistas para revisar el servicio y sus tendencias.

**Beneficio:** Tu equipo puede enfocar la atención y planificar la revisión de capacidad con contexto, en lugar de decidir por una señal aislada.

**Soluciones relacionadas:** Monitoreo y herramientas NOC · Disponibilidad y calidad · Alertas y planificación de capacidad.

**CTA:** Conversemos sobre tu ISP.

#### Ilustración y ejemplo

- **Ilustración GIF:** red FTTH, monitoreo, alertas y análisis, según la propuesta del propietario. La topología es esquemática, no una red real de un cliente ni una oferta de instalación física.
- **Ejemplo narrado en HTML:** «Alerta de red → Servicio relacionado → Revisión prioritaria». No incluir datos de clientes, direcciones, credenciales o topología sensible.
- **Detalle breve:** contrastar calidad, utilización y período antes de decidir la siguiente acción.
- **Rótulo:** Ejemplo ilustrativo de priorización.

La planificación de capacidad sigue presente, pero deja de representar por sí sola toda el área Técnica. Se retira la matriz extensa de evidencias del contenido principal.

#### Condiciones y medición complementarias

Desarrollar e integrar herramientas para el NOC no significa operar un NOC 24/7. Tampoco implica realizar mantenimiento o ampliación física de red.

Disponibilidad, latencia, pérdidas, throughput, utilización y cobertura del monitoreo se usan cuando corresponden. Una coincidencia no prueba causalidad; no toda degradación exige ampliar y los modelos de demanda requieren historia y evaluación.

### 7. Cómo trabajo — conectar la necesidad con una entrega

**Titular:** De una necesidad de tu ISP a una solución que el equipo pueda usar.

**Apoyo:** Primero entiendo dónde se traba el proceso. Después acordamos qué mejorar y qué hay que integrar, adaptar o desarrollar.

1. **Definimos la prioridad.** Revisamos el trabajo, las fuentes y las personas involucradas; elegimos una primera entrega.
2. **Construyo e integro.** Aprovecho tus sistemas actuales y desarrollo lo que falta, con criterios de aceptación y registro de la información necesaria.
3. **Transferimos y acompañamos.** Dejamos documentación y responsables, y acordamos cómo sostener y revisar la solución.

**Nota breve:** No hace falta reemplazar todo ni incorporar IA para empezar.

**CTA:** Conversemos sobre tu ISP.

El enfoque consultivo sirve a la implementación; no se presenta como un diagnóstico genérico que el visitante debe comprar antes de comprender la oferta.

**Dirección visual:** SVG «Entender → Implementar → Acompañar». Apoya los tres pasos del texto, sin convertirlos en otra metodología o requerir movimiento.

### 8. Ingeniería — software y ciclo completo de datos

**Titular:** Del registro diario a las herramientas que usa tu equipo.

**Beneficio y solución:** Para seguir un alta, una orden, un cobro o una alerta, la información debe poder capturarse, relacionarse y llegar al lugar donde se necesita. Desarrollo aplicaciones e integraciones y preparo los datos para análisis y uso operativo.

**Dirección visual:** SVG del ciclo completo «Aplicaciones → ETL → DWH → Analítica», según la propuesta del propietario. Es una combinación posible de capacidades, no una arquitectura obligatoria. Su explicación HTML conserva tres grupos comprensibles:

1. **Capturar y conectar:** aplicaciones, formularios, APIs e integración con sistemas y fuentes autorizadas.
2. **Preparar y relacionar:** validación, ETL/ELT e historia compartida; Data Warehouse cuando la necesidad lo justifique.
3. **Analizar y usar:** algoritmos, visualización, automatización y aplicaciones que devuelven información al proceso.

**Mensaje obligatorio:** Combinamos estas capacidades según tu necesidad. No todos los proyectos requieren todos los componentes.

El SVG se acompaña del mensaje anterior; ni la secuencia ilustrada ni el DWH se presentan como requisitos de todos los proyectos. Las aplicaciones pueden capturar información y también utilizar los datos preparados; no se presentan únicamente como último paso. No se añade junto al SVG un segundo diagrama con el mismo contenido.

Los KPIs se definen desde objetivos, fuentes, período y responsables. Sirven para evaluar el proceso; no son una promesa de mejora por instalar un tablero y no requieren pasar por IA.

**Controles visibles y breves:** Calidad del dato · Acceso por responsabilidad · Trazabilidad.

**Profundidad disponible:** conservar aplicaciones, APIs, ETL/ELT, Data Warehouse, algoritmos y visualización, con sus entregables, anclas y condiciones. Frecuencia, fallos, historia, fórmulas, documentación y recuperación pactada quedan en ampliaciones legibles. El modelo analítico no sustituye el sistema que factura, cobra o activa servicios.

### 9. Ingeniería — automatización y agentes de IA

**Titular:** Menos traspasos manuales para concentrarse en la atención.

**Beneficio y solución:** Automatizo consultas, avisos y preparación de tareas para que el equipo no tenga que reconstruir el contexto en cada paso. Integro reglas, herramientas y agentes de IA cuando aportan valor a esa necesidad.

Se distinguen dos usos mediante ejemplos pequeños:

- **Consultar conocimiento:** encontrar un procedimiento o antecedente con fuentes autorizadas, evaluación y escalamiento humano.
- **Preparar o ejecutar una tarea:** consultar contexto, aplicar reglas y pasar por autorización cuando corresponda, dejando registro del resultado.

**Dirección visual:** SVG de RAG, agentes de IA, herramientas y acciones autorizadas. Distingue consultar conocimiento de preparar o ejecutar una tarea. El apoyo HTML conserva la secuencia **Solicitud → Contexto y reglas → Aprobación cuando aplica → Registro**, sin añadir otro diagrama técnico de varios carriles lleno de texto.

**Controles:** permisos por tarea, trazabilidad, límites de autonomía y revisión de acciones sensibles. No se ofrecen cobros, cortes o cambios de red autónomos por defecto.

Se conservan RAG y agentes con sus mecanismos y entregables en las ampliaciones. Recuperar documentos no elimina errores. Una regla puede bastar sin un agente, y los agentes que asisten el desarrollo no son agentes operativos incluidos automáticamente en el producto.

### 10. Primera entrega, credibilidad y condiciones

**Titular:** Trabajás conmigo, con una entrega y un alcance acordados.

Se conserva la fotografía profesional real y la identidad ya publicadas:

> Héctor Guerra · Ingeniero Electricista Industrial · Tegucigalpa, Honduras.
>
> Mi experiencia conecta desarrollo de software, ingeniería de datos, telemetría e IA aplicada a procesos. Trabajo con vos desde la definición hasta la implementación.

Esta experiencia no se transforma en afirmaciones de proyectos, clientes o resultados con ISP.

**Qué recibe el cliente:**

- **La entrega acordada:** aplicación, integración, automatización o solución de datos utilizable para el proceso priorizado.
- **Criterios y medición:** fuentes, reglas, responsables, aceptación e indicadores pertinentes.
- **Transferencia:** documentación, formación o transferencia acordada y condiciones de mantenimiento y acompañamiento.

**Condiciones del servicio:** alcance, inversión, dependencias y plazos acordados antes de iniciar. Seguridad de datos, accesos, registro de acciones y recuperación se definen para los componentes entregados y sus responsabilidades.

No se ofrece seguridad integral, invulnerabilidad, certificación regulatoria, instalación física de red o servicio NOC 24/7. Estos límites se explican una vez en el respaldo/condiciones, no como párrafos defensivos repetidos en cada titular comercial.

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

### 12. Ilustraciones aportadas por el propietario

#### Inventario confirmado y destinos propuestos

| Sección | Ilustración que prepara el propietario | Formato | Destino futuro |
| --- | --- | --- | --- |
| Apertura | ISP con sistemas y datos interconectados | SVG | `public/images/isp/hero.svg` |
| Comercial | Clientes, facturación y pagos: problema → solución | GIF | `public/images/isp/comercial.gif` |
| Operativa | Reclamos, órdenes de trabajo y automatización | GIF | `public/images/isp/operativa.gif` |
| Técnica | Red FTTH, monitoreo, alertas y análisis | GIF | `public/images/isp/tecnica.gif` |
| Cómo trabajo | Entender → Implementar → Acompañar | SVG | `public/images/isp/como-trabajo.svg` |
| Software y datos | Ciclo completo: aplicaciones → ETL → DWH → analítica | SVG | `public/images/isp/software-datos.svg` |
| IA y automatización | RAG, agentes, herramientas y acciones autorizadas | SVG | `public/images/isp/ia-automatizacion.svg` |

Estas siete ilustraciones sustituyen las cuatro fotografías de contexto del plan anterior. Se mantiene `/mi_foto_pro.jpeg` en el perfil. Los nombres son destinos propuestos para la integración, no requisitos para que el propietario pueda subir los originales ni afirmaciones de que ya existen.

#### Entrega y preparación

- Se puede seguir planificando y guardar el diseño aprobado antes de recibir los archivos. La recepción, revisión y preparación quedan pendientes para la implementación autorizada.
- Los SVG se prevén estáticos, con `viewBox` y proporción definida. Los textos internos deben ser breves; el argumento comercial y la explicación permanecen en HTML.
- Para cada GIF se necesita una versión fija que comunique el problema y la solución sin esperar una animación. Puede aportarla el propietario o prepararse a partir de los originales al implementar; no se exige que cree ahora tres ilustraciones adicionales.
- Destinos futuros de esas versiones: `public/images/isp/comercial-estatico.webp`, `public/images/isp/operativa-estatico.webp` y `public/images/isp/tecnica-estatico.webp`. Se elegirá un fotograma representativo, no necesariamente el primero si está vacío o incompleto.
- Dimensiones, duración, peso y encuadre se decidirán a partir de los archivos recibidos. No se declaran optimizados ni se impone un presupuesto numérico sin conocerlos. No se cambia el formato GIF por video u otro formato sin acordarlo.

#### Honestidad y derechos

- Registrar autoría/procedencia y permiso de publicación y adaptación; que el propietario suba un archivo no acredita por sí solo derechos de terceros. Incluir atribución si corresponde.
- Usar rótulos visibles como «Esquema ilustrativo» o los ejemplos específicos de área. No presentar animaciones como productos funcionando, instalaciones o resultados de HGuerra.
- Evitar marcas ajenas, registros de clientes, credenciales o topología sensible. La red FTTH es un contexto de software y análisis, no amplía la oferta a trabajos físicos.
- Integrar SVG mediante `<img>` desde archivos locales revisados, no mediante `object`, `iframe` o inyección del XML en el DOM. Revisar que no incluyan scripts, manejadores de eventos, `foreignObject` o referencias externas innecesarias; no añadir una biblioteca de sanitización para esta landing.
- Esta revisión no recibe, genera, transforma ni valida archivos finales. Aprobar el inventario no equivale a aprobar el contenido o los derechos de originales aún no aportados.

#### Movimiento, accesibilidad y carga

- **Estado inicial fijo:** mostrar la versión estática, sin descargar o reproducir los GIF automáticamente. Ni el scroll ni el foco inician la animación.
- **Control explícito:** cada área dispone de un botón nativo «Reproducir animación» / «Detener animación», con contexto accesible del área. Detener sustituye el GIF por la versión fija; no se promete pausar/reanudar en el mismo fotograma. CSS `animation-play-state` no detiene los fotogramas de un GIF.
- **Movimiento reducido:** con `prefers-reduced-motion: reduce` se mantiene la versión fija y no se habilita reproducción mientras esa preferencia esté activa. Si se activa durante la reproducción, se vuelve al estado fijo. La preferencia no sustituye el control de detener para el resto de visitantes.
- **Mejora progresiva:** un único script pequeño dentro de `IspAreaScene.astro` controla el cambio fijo/GIF de las tres instancias, sin librerías, framework de cliente, canvas ni control de scroll. Solo muestra el botón cuando puede funcionar. Sin JavaScript o ante error de carga, permanecen la imagen fija y el contenido HTML.
- **Sin destellos:** evitar flashes, parpadeos rápidos o cambios que dificulten leer. El significado completo debe estar disponible sin movimiento y sin depender solo del color.
- **Semántica:** usar `<figure>`, `<img>` y leyenda pertinente. `alt` describe la finalidad sin repetir todo el texto; una relación compleja tiene explicación HTML breve. La ilustración no contiene el único titular, beneficio o CTA de la escena.
- **Adaptación:** conservar la proporción y la composición completa, sin recortar nodos o rótulos como si fueran fotografías. Ajustar al ancho disponible; si un original contiene texto ilegible en móvil, adaptar el activo antes de integrarlo, no reducir toda la interfaz.
- **Carga:** reservar las dimensiones reales; el SVG de apertura no usa carga diferida. Las imágenes posteriores pueden usarla. El GIF solo se solicita al reproducirlo; ocultarlo con CSS o usar `loading="lazy"` no basta para cumplir esa condición.

Los botones de animación son controles del contenido, no nuevas ofertas comerciales. El CTA único sigue siendo «Conversemos sobre tu ISP». No se incorporan tablas extensas, dashboards ficticios ni un segundo diagrama que duplique cada ilustración.

### 13. Datos, componentes y metadatos previstos

Esta sección es una especificación futura; no modifica archivos de producción.

| Pieza | Ajuste del diseño |
| --- | --- |
| `src/data/ispCampaign.ts` | `ispScenarios` contendrá `id`, `area`, `title`, `problem`, `consequence`, `solution`, `deliverable`, `benefit`, `relatedSolutions`, `illustration` y condiciones de medición complementarias. `ispIllustrations` reúne metadatos de los siete activos; cada escenario reutiliza su entrada. Centralizar el texto único del CTA. |
| `IspScenario` | Mantener IDs `comercial`, `operativa`, `tecnica`. Problema, consecuencia, solución, entrega y beneficio son campos explícitos; un KPI no sustituye a `benefit`. El CTA compartido cierra la narrativa. |
| `src/pages/isp-honduras.astro` | Conservar las diez escenas y sus áreas, actualizar apertura y copy comercial, incorporar los SVG de apertura/método y los ejemplos GIF de área, y usar el mismo CTA al formulario. No extraer componentes de un uso por rutina. |
| `IspAreaScene.astro` | Representar el GIF aportado para cada área con versión fija, control de reproducción y explicación HTML breve. Retirar los dibujos anteriores y evitar una segunda ilustración con el mismo contenido. |
| `IspSlide.astro` | Recibir `total` obligatorio para contador y nombre accesible, manteniendo título, índice, tono y clases. No conservar el literal 12. |
| `IspEngineering.astro` | Dos escenas: software/ciclo de datos y automatización/IA, con beneficios primero y capacidades combinables. No volver al catálogo de tecnologías como argumento principal. |
| `IspArchitecture.astro` | Reutilizar sus dos modos para los SVG de software/datos y automatización/IA, con leyenda y explicación HTML breve; sustituir los diagramas anteriores, no acumularlos. No imponer una arquitectura obligatoria. |
| `src/styles/ispCampaign.css` | Dar jerarquía a ilustraciones y copy breve, mantener alcance `.isp-deck`, identidad de marca, altura adaptable y expansión estable. |
| SVG/GIF y versiones fijas | Incorporar los siete originales aportados y las tres versiones fijas solo al implementar, tras revisar contenido, procedencia y uso autorizado. No crear archivos o enlaces rotos para simular que están disponibles. |

Las ocho capacidades y sus anclas `capacidad-*` siguen disponibles. Las condiciones transversales se distribuyen entre ingeniería y entrega. El ejemplo de alta puede conservarse como ampliación; el ejemplo transversal retirado no requiere una slide adicional.

Se preservan `#introduccion`, `#comercial`, `#operativa`, `#tecnica`, `#ingenieria`, `#automatizacion`, `#primera-entrega`, `#dudas`, `#conversemos` y `#contenido`. `#ciclo-datos` sigue siendo un destino dentro de ingeniería, sin IDs duplicados.

La implementación mantiene HTML renderizado por Astro, sin nuevas bibliotecas, backend, almacenamiento, APIs públicas del sitio o controles de presentación/scroll. La única interacción nueva es el control local fijo/GIF con JavaScript mínimo; el contenido y la conversión no dependen de él. Las APIs ofrecidas al ISP son una capacidad comercial, no endpoints que deban construirse en esta landing.

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

**Evolución de la decisión del autor:** la revisión comercial eligió inicialmente fotografías profesionales de contexto y ejemplos breves. Después el autor confirmó sustituir esas fotografías por siete SVG/GIF que prepara. Se mantiene el rechazo de tablas y diagramas densos dominantes: una ilustración esquemática no debe convertirse en otro catálogo técnico. El detalle se conserva en ampliaciones, sin simular productos o resultados reales.

### A6. CTA técnico, ofertas distintas o canales paralelos

**Mecanismo alternativo:** pedir «Evaluar una mejora», alternar distintos CTA por área o promover formulario, WhatsApp, demo y diagnóstico como acciones comerciales equivalentes.

**Ventaja:** permite expresar acciones o preferencias de canal diferentes.

**Costos y punto de fallo:** puede exigir al visitante un alcance que aún no ha definido, dispersar la acción o crear expectativas de auditoría/demostración que no se ofrecen.

**Decisión del autor en la revisión aprobada:** «Conversemos sobre tu ISP» como único CTA comercial al formulario, repetible sin crear ofertas distintas. Se conserva el envío, la accesibilidad y las condiciones del formulario; no se promociona otro canal en paralelo en esta landing.

### A7. Ilustraciones como complemento o sustitución de fotografías

**Mecanismo alternativo:** conservar las fotografías de contexto e incorporar los SVG/GIF como apoyo adicional.

**Ventaja:** combina contexto humano con una explicación del mecanismo.

**Costo:** aumenta la cantidad de activos y puede hacer competir foto, ilustración y argumento dentro de una escena.

**Decisión explícita posterior del autor:** las siete ilustraciones sustituyen las fotografías de contexto como protagonistas, no las complementan. Se conserva el retrato profesional real. No se le atribuye un motivo adicional que no expresó; se registra el intercambio aclaratorio y el nuevo inventario.

## Critical User Journeys

### CUJ 1. Reconocer la oferta sin ser especialista técnico

- **Given:** llega un propietario o gerente general, comercial, operativo o técnico de un ISP.
- **When:** ve la apertura y la escena correspondiente a su necesidad.
- **Then:** identifica problema, solución, beneficio, capacidad de HGuerra y CTA sin interpretar un diagrama o abrir un desplegable. Reconoce las imágenes como ilustrativas y puede comprenderlas sin reproducir los GIF.

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

Este plan describe trabajo futuro. Aprobarlo no modifica la landing ni autoriza commits o despliegue. Se necesita autorización de implementación para ejecutarlo.

### Dependencias de ejecución y alcance

- Partir de los cambios locales existentes sobre `b6209a7`, no restablecer ese commit ni sobrescribir trabajo ajeno. `apphosting.yaml` y los archivos no relacionados quedan fuera.
- Recibir los siete SVG/GIF que prepara el propietario y confirmar uso autorizado antes de integrarlos. Esta etapa documental no genera, transforma, compra o publica imágenes.
- Preparar tres versiones fijas para los GIF al implementar. Los originales pueden llegar con otros nombres; las rutas del inventario son destinos futuros, no bloqueos para subirlos.
- La recepción y revisión de activos son dependencias de ejecución, no bloqueos para continuar planificando o guardar el diseño aprobado. Mientras falten, no dejar enlaces rotos, fabricar sustitutos o declarar completa la experiencia ilustrada.
- No cambiar el formulario compartido, la instrumentación de analítica, el consentimiento, la configuración de hosting o las páginas generales.

### Lista única de implementación

1. **Recibir y preparar las siete ilustraciones y tres versiones fijas.**
   - Integrar los SVG en `public/images/isp/hero.svg`, `public/images/isp/como-trabajo.svg`, `public/images/isp/software-datos.svg` y `public/images/isp/ia-automatizacion.svg`.
   - Integrar los GIF en `public/images/isp/comercial.gif`, `public/images/isp/operativa.gif` y `public/images/isp/tecnica.gif`.
   - Preparar `public/images/isp/comercial-estatico.webp`, `public/images/isp/operativa-estatico.webp` y `public/images/isp/tecnica-estatico.webp` a partir de un fotograma representativo o de la versión fija aportada. No extraerlos en la fase documental.
   - Revisar los SVG como imágenes estáticas locales, sin scripts, eventos, contenido activo o dependencias externas innecesarias. Los GIF no deben incluir destellos ni información esencial disponible solo durante el movimiento.
   - Adaptar tamaño/peso sin recortar relaciones o rótulos esenciales. Registrar dimensiones y proporción reales; revisar duración y legibilidad a partir del material recibido. No convertir los GIF a otro formato de animación sin acuerdo.
   - Registrar autoría/procedencia, permiso, adaptaciones permitidas y crédito necesario en la sección de recursos visuales de `docs/servicios-isp-honduras.md`.
   - Conservar `public/mi_foto_pro.jpeg` sin cambios para el perfil. No preparar las cuatro fotografías ni las rutas `.webp` del plan sustituido.
   - Estas diez rutas son destinos futuros: no existen ni están validadas por haberlas enumerado. La entrega de originales sigue a cargo del propietario.

2. **Actualizar `src/data/ispCampaign.ts` para la narrativa comercial.**
   - Crear `ispScenarios` como fuente de los tres escenarios y sustituir el uso de `ispChallenges`. Los IDs siguen siendo `comercial`, `operativa` y `tecnica`.
   - Cada escenario contiene `id`, `area`, `title`, `problem`, `consequence`, `solution`, `deliverable`, `benefit`, `relatedSolutions`, `illustration`, `sources` y `measurementNote`.
   - `relatedSolutions` contiene las tres agrupaciones aprobadas, no listas de funcionalidades anidadas. `sources` y `measurementNote` sirven a la ampliación técnica, no al beneficio publicitario.
   - Exportar `ispIllustrations` con entradas para `introduccion`, `comercial`, `operativa`, `tecnica`, `forma-de-trabajo`, `ingenieria` y `automatizacion`. Cada escenario reutiliza la entrada de su área en `illustration`, sin duplicar metadatos.
   - El tipo `IspIllustration` distingue `kind: 'svg'` y `kind: 'gif'`. Ambos contienen `src`, `alt`, `width`, `height`, `caption` y `credit` opcional; GIF requiere además `posterSrc` para la versión fija. Dimensiones y créditos proceden de los activos recibidos, no de estimaciones. El GIF y su versión fija comparten proporción para evitar saltos.
   - Exportar `ispCtaLabel` con el único texto «Conversemos sobre tu ISP». Mantener el texto de envío «Enviar mi consulta» como control funcional del formulario, no como otra oferta.
   - Conservar las ocho `ispEngineeringCapabilities`, sus identificadores y `ispActivationSteps`; ajustar las descripciones para apoyar el enfoque de capacidades combinables. Alinear `ispFaqs` con las respuestas públicas del diseño.
   - Retirar `ispFoundations` e `ispScenarioSteps` al retirar sus slides y trasladar sus condiciones útiles a ingeniería/entrega. La inspección de consumidores en `src` del 2026-11-16 los encontró solo en la página y su módulo; comprobar únicamente si ese hecho cambió antes de eliminarlos.
   - No almacenar KPIs con valores de rendimiento ficticios ni registros reales de clientes en los datos de ejemplo.

3. **Modificar `src/components/sections/IspSlide.astro` para el total correcto.**
   - Añadir `total` numérico obligatorio y utilizarlo tanto en el contador visible como en su nombre accesible.
   - Mantener `id`, `index`, `label`, `tone`, `titleId` y `class`, así como el encabezado, slots y pie.
   - El índice del argumento conserva 01 Comercial, 02 Operativa y 03 Técnica. El ordinal de la presentación cuenta la apertura como primera de diez escenas.
   - No añadir detección de scroll, estado de cliente o navegación de diapositivas.

4. **Modificar `src/components/sections/IspAreaScene.astro` para GIF y ejemplo breve.**
   - Restringir `area` a los tres IDs y recibir su `illustration` de tipo GIF, sin extraer un componente nuevo.
   - Renderizar inicialmente `posterSrc` con texto alternativo, dimensiones y leyenda/crédito que correspondan; permitir carga diferida de esa imagen fija. No colocar el GIF en `src`/`srcset` ni precargarlo antes de reproducir.
   - Añadir el botón nativo de reproducir/detener, con nombre contextual y foco visible, mediante mejora progresiva. Un único script del componente gestiona las tres instancias: cambia entre `posterSrc` y `src`, conserva el foco y no intenta pausar fotogramas con CSS.
   - Con movimiento reducido, mantener la imagen fija y no ofrecer reproducción; observar un cambio de preferencia para detener una animación activa. Sin JavaScript, los botones no se muestran y la imagen fija/explicación siguen disponibles. Ante fallo del GIF, restaurar la imagen fija.
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
   - Declarar un único total de diez escenas y pasarlo a todos los `IspSlide` y a `IspEngineering`. Mantener orden e índices del inventario; no crear un motor genérico de slides.
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
   - Adaptar SVG, GIF y versiones fijas al ancho disponible sin recortar su composición. En móvil, preservar orden de lectura, etiquetas y texto legible sin desplazamiento horizontal.
   - Reservar dimensiones coherentes entre GIF y versión fija. Estilizar los botones de reproducción como controles secundarios, no como CTA comerciales. CSS no intenta detener los fotogramas del GIF.
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

Los únicos archivos nuevos de producción previstos son los siete SVG/GIF y las tres versiones fijas enumeradas. El control de animación se aloja en el componente existente; no se crean componentes, scripts separados, endpoints o archivos de pruebas adicionales.

### Verification Plan

Esta fase no ha ejecutado la implementación ni las comprobaciones siguientes.

**Revisión de fuentes y contenido:** contrastar los consumidores afectados, el orden/total de diez escenas, IDs únicos, props y ausencia de referencias a bloques retirados. Comprobar que las FAQ públicas y estructuradas proceden de la misma fuente y todos los CTA comerciales mantienen texto/destino.

**Inspección visual solicitada:** cargar solo `/isp-honduras` localmente en un ancho de escritorio y uno móvil, reutilizando herramientas disponibles. Revisar las siete ilustraciones con su texto, perfil y contacto. Verificar legibilidad, composición completa, ausencia de recortes/desbordamiento, rótulos ilustrativos y créditos. En la misma inspección, revisar el control compartido fijo/GIF: estado inicial sin descarga del GIF, reproducir/detener con teclado, retorno a imagen fija con movimiento reducido y contenido legible sin JavaScript. No se convierte en una matriz de dispositivos o una suite E2E.

**Flujo principal que puede afectar el DOM:** seguir un CTA hacia `#conversemos` y comprobar acceso al correo con el siguiente Tab; revisar una ampliación para confirmar que su disparador no brinca. No hace falta repetir envíos simulados o reales mientras transporte, validación y campos compartidos no cambien: existe evidencia previa de esa frontera.

**Activos aportados:** revisar procedencia/permiso y atribución, relación con el escenario, dimensiones/proporción reales y ausencia de datos sensibles. Inspeccionar los SVG antes de servirlos y revisar los GIF sin destellos ni información esencial exclusiva del movimiento. Una versión fija debe comunicar el ejemplo. Lo no recibido o no revisado queda pendiente, no como comprobación superada.

**Límites de verificación:** no hay objetivo de cobertura ni tests unitarios nuevos para textos, estilos, imágenes o glue estático. No se planifica build, smoke o suite general de cierre. Si el render local revela un error de sintaxis o integración, utilizar la herramienta existente más acotada para ese fallo. No se validan servicios de clientes, redes, recuperaciones, modelos, rendimiento de ISP, entrega externa de correo o impacto en ventas mediante esta landing.

### Artefactos de diseño de esta fase

`.dev/docs/isp-honduras/concepts_brief.md` conserva la base y evolución de decisiones; `.dev/docs/isp-honduras/design_draft.md` conserva el borrador reconciliado. `docs/designs/isp-honduras.md` es la referencia definitiva aprobada conforme a la convención acordada. No se crean informes Goldfish ni se afirma revisión independiente por haber redactado este plan.

## Reconciliación y aprobación documental

El 2026-11-16 se contrastó el diseño completo con `.dev/docs/isp-honduras/concepts_brief.md` y sus adendas. No quedan contradicciones abiertas: la audiencia ampliada, narrativa comercial, CTA, diez escenas y sustitución de fotografías por siete SVG/GIF corresponden a decisiones explícitas. El plan ajustado, incluidas las versiones fijas y los controles de animación, fue aprobado por el propietario para guardar este documento.

La aprobación es documental. No acredita recepción o validación de los activos, implementación, pruebas del nuevo diseño, aceptación externa, commit, despliegue o revisión Goldfish.

## Pendientes de ejecución y aceptación

- Recibir los cuatro SVG y tres GIF que prepara el propietario; revisar su contenido/uso autorizado y preparar las tres versiones fijas al implementar. No se da por recibido o aprobado un archivo futuro.
- La preparación de activos no impide guardar el diseño documental aprobado. No adquirir las fotografías del plan sustituido.
- Obtener autorización posterior para implementar; realizar entonces solo la verificación dirigida prevista y registrar los pendientes reales.
- Contrastar el mensaje con anuncios si se aporta una campaña; no hay evidencia actual de alineación o efecto sobre consultas y ventas.
- El diseño aprobado puede guardarse con las dependencias externas identificadas. No declarar completa la experiencia de implementación o lista para publicar mientras falten activos autorizados o aceptación pertinente.

## Recursos de contexto y límites de evidencia

- `.dev/docs/isp-honduras/concepts_brief.md`: base del brainstorming y adendas con las observaciones y decisiones del propietario.
- `src/pages/isp-honduras.astro`, `IspSlide.astro`, `IspAreaScene.astro`, `IspEngineering.astro` y `src/styles/ispCampaign.css`: punto de partida de la futura implementación, no evidencia de que este diseño ya se cumpla.
- `docs/servicios-isp-honduras.md`: investigación y desarrollo técnico internos, no texto que deba volcarse íntegro en la landing.
- TM Forum GB991 v24.6, p. PDF 13: relación entre solicitudes, operación, facturación y pagos.
- FitSM-2, PR5 p. PDF 21 y PR10 p. PDF 32: capacidad y gestión de problemas recurrentes.
- TR-499, §8.3 p. PDF 24: dimensiones de calidad de acceso a Internet.
- Cable One Annual Report 2025, §«Our Strengths»: experiencia internacional en facturación y atención; no resultados de HGuerra o prueba del mercado hondureño.

Los IDs del RAG y límites de inferencia están en el brief. No se realizó nueva investigación o validación comercial para esta edición documental ni se publicarán estas referencias como prueba de proyectos propios.

*Diseño documentado con EGM y aprobado por el propietario. Sin implementación ni revisión Goldfish.*
