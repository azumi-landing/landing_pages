# ISP Honduras — base acordada para el diseño

- **Author:** Héctor Guerra
- **Fecha:** 2026-11-16
- **Estado:** contexto histórico del diseño aprobado; el propietario autorizó después la implementación local, registrada en `docs/designs/isp-honduras.md`. Sin commit o despliegue.
- **Repositorio:** `/home/hguerra/code/code_mini_wsl/personal_web`
- **EGM artifact directory:** `.dev/docs/isp-honduras/`
- **Diseño definitivo:** `docs/designs/isp-honduras.md`
- **Alcance autorizado:** definir y documentar la landing. Sin implementación, commit, despliegue o cambios de configuración.

## Problema que motivó esta revisión

El propietario considera superficial la landing actual. Nombrar ingresos, coordinación, calidad y KPIs no hace visible qué problema enfrenta el gerente, qué consecuencias tiene ni qué trabajo de HGuerra cambia esa situación. Ajustar titulares o aumentar el tamaño de las secciones no resuelve esa falta de argumento.

La conversión a slides conservó capacidades, pero condensó el contenido comercial y dejó explicaciones esenciales dentro de detalles. Los dibujos de prospectos, órdenes y red representan categorías, no demuestran suficientemente el trabajo que un responsable podría utilizar.

Esto es una evaluación editorial del propietario, no una caída de conversión medida.

## Audiencia, oferta y límites de marca

- Gerente técnico de un ISP de Honduras que también comprende ingresos, costos, atención e inversión.
- HGuerra es la marca personal de Héctor Guerra: consultoría y acompañamiento junto con ingeniería e implementación.
- Desarrollo a medida es una capacidad para cubrir una brecha, no una redefinición de HGuerra como agencia de software.
- Primero se comprueba qué pueden resolver los sistemas actuales. Se configura, integra, moderniza o desarrolla según la necesidad.
- El valor debe explicar comprensión y priorización del problema, implementación de una entrega útil y transferencia/acompañamiento.
- El lenguaje público será español con el voseo del sitio, directo y sin juzgar la estrategia comercial del ISP.
- Se conservan marca, eslogan, identidad slate/azul/cian y el posicionamiento del sitio general.

## Decisiones aprobadas

1. Organizar el argumento con escenarios por área, no con un catálogo de tecnologías.
2. Mantener en cada escenario cinco elementos visibles: situación, consecuencia, intervención de HGuerra, entrega utilizable y decisión o acción que habilita.
3. Equilibrar consecuencias de negocio, intervención concreta y entrega, sin convertir la landing en documentación técnica.
4. Utilizar `hg-rag-mcp` para fundamentar problemas y necesidades del ISP; no pedir al propietario que sustituya esa investigación.
5. Separar lo documentado por las fuentes del diseño de una posible intervención de HGuerra.
6. Conservar la presentación vertical con desplazamiento natural. El conteo de doce slides y una sola pantalla por área no son restricciones si perjudican la explicación.
7. Mostrar ejemplos del trabajo —conciliación, historial de recurrencias, relación calidad/capacidad— en lugar de usar ilustraciones como sustituto de contenido.
8. Marcar los ejemplos como ilustrativos, sin presentarlos como producto existente, caso de cliente o resultados entregados.
9. Dejar la ingeniería como respaldo explícito: qué registra el software, cómo se integra y valida, cómo se relaciona la historia y cómo se usa para actuar.
10. Definir los KPIs desde objetivos y decisiones, no como una lista de gráficos al final.
11. Mantener el siguiente paso comercial como evaluación de una primera mejora con alcance, entregables, inversión y condiciones acordados.
12. Trabajar en texto; el propietario rechazó el compañero visual. No abrirlo ni volver a ofrecerlo salvo nueva solicitud.

## Escenarios principales aprobados

### Comercial: ingresos y conciliación

- **Situación:** cuesta relacionar lo vendido, lo activo, lo facturado y lo cobrado cuando sus registros están separados.
- **Consecuencia posible:** reconstrucción manual, diferencias sin explicación o sin responsable y seguimiento lento. Una diferencia no equivale automáticamente a pérdida de ingresos.
- **Intervención:** revisar reglas, fechas y excepciones; integrar las fuentes disponibles y diseñar la gestión de diferencias.
- **Entrega propuesta:** conciliación por cliente, servicio y período; excepciones con evidencia, responsable y estado.
- **Utilidad:** localizar qué necesita revisión y asignar la siguiente acción sin reconstruir todo el recorrido.
- **Medición posible:** diferencias pendientes por antigüedad, tiempo de revisión y diferencias resueltas y validadas. No prometer recuperar un importe.

### Operativa: el ticket se cerró y el problema reaparece

- **Situación:** el nuevo reclamo no se relaciona suficientemente con trabajos previos, equipos, cambios e incidentes del servicio.
- **Consecuencia posible:** repetición de investigación y visitas; los cierres administrativos no explican si la recurrencia fue atendida.
- **Intervención:** conectar historial del servicio, incidentes e intervenciones; definir el registro de recurrencias y su investigación.
- **Entrega propuesta:** historial consultable y flujo con responsables y evidencia para investigar y dar seguimiento.
- **Utilidad:** distinguir la atención puntual de un problema que requiere una corrección de fondo.
- **Medición posible:** recurrencias y reaperturas según una ventana acordada, tiempos de atención/resolución y visitas repetidas.

### Técnica: decidir dónde investigar, mantener o evaluar capacidad

- **Situación:** alarmas y métricas aisladas no bastan para relacionar rendimiento, capacidad y servicios afectados.
- **Consecuencia posible:** dificultad para justificar qué atender y qué inversión evaluar primero.
- **Intervención:** integrar históricos, validar mediciones y relacionar calidad y utilización con servicios, zonas y períodos.
- **Entrega propuesta:** análisis de calidad/capacidad, alertas contextualizadas y criterios para priorizar.
- **Utilidad:** evaluar investigación, mantenimiento o capacidad sin asumir que toda degradación exige ampliar.
- **Medición posible:** disponibilidad, throughput, latencia, pérdidas, utilización y cobertura del monitoreo, con fuentes y ventanas explícitas.

## Los otros problemas no se eliminan

La selección prioriza qué desarrollar primero. Competencia/retención/margen, coherencia de planes y facturación, coordinación de instalaciones, recurrencias, disponibilidad, capacidad, consistencia de datos y protección de información siguen formando el alcance del argumento.

Retención y rentabilidad se conectan al contexto comercial; coordinación de instalaciones al operativo; disponibilidad al técnico. Datos y controles son transversales. No hace falta crear otra tarjeta o slide genérica para cada tema.

## Restricciones de afirmaciones y contratación

- No afirmar que todos los ISPs tienen los problemas descritos ni convertir las fuentes en un ranking hondureño.
- No inventar clientes, testimonios, métricas de resultados, capturas de un producto propio, precios o plazos.
- ARPU no equivale a margen. Analizar rentabilidad exige costos.
- Correlacionar reclamos, degradación y bajas no demuestra por sí solo causalidad.
- Integración y frecuencia dependen de accesos, interfaces, historia y calidad disponibles.
- IA, DWH, streaming y agentes no son requisitos de toda intervención. Los KPIs no necesitan pasar por IA.
- El DWH no reemplaza sistemas transaccionales ni el repositorio documental.
- Distinguir agentes que asisten el desarrollo de agentes operativos. No ejecutar cobros, cortes o cambios de red autónomamente por defecto.
- Seguridad se limita a controles acordados de los componentes entregados: permisos, registro y recuperación. No seguridad integral, SOC, invulnerabilidad o certificación.
- No ofrecer instalación física de red, conectividad ni NOC 24/7.
- La consulta inicial no es una contratación ni un diagnóstico completo gratuito.

## Alternativas valoradas y decisiones del propietario

| Alternativa | Decisión registrada | Motivo |
| --- | --- | --- |
| Cambiar solo el titular Comercial | Insuficiente tras la revisión posterior | El propietario sigue sin reconocer problemas y valor en el conjunto de la landing. |
| Escenarios por área | Elegida como estructura principal | Permite desarrollar problema, consecuencias, intervención, entrega y utilidad manteniendo las tres áreas. |
| Una historia transversal como organizador principal | No elegida como estructura principal; no se prohíbe conectar áreas | Aporta continuidad, pero desarrolla menos situaciones distintas. |
| Soluciones contratables como catálogo principal | No elegida como organizador principal | Hace tangible la contratación, pero puede volver al catálogo sin demostrar el problema. |
| Consecuencias sin explicar la entrega | No elegida como equilibrio editorial | El propietario aprobó negocio + intervención + entrega, no solo beneficios. |
| Detalle técnico como argumento dominante | No elegido | La ingeniería debe demostrar cómo se responde al escenario, no encabezar la venta. |
| Una sola pantalla a cualquier costo | Restricción retirada | El argumento puede dividirse en escenas si necesita espacio; no recortar ni reducir tipografía para forzarlo. |
| Compañero visual para comparar bocetos | Rechazado en este recorrido | El propietario prefirió seguir en texto. |
| «Competí por valor. No solo por precio» | Rechazado por el propietario | Lo consideró atrevido e inadecuado para 01 Comercial. No prescribir cómo debe competir el ISP. |

## Base documental

Consultada en el brainstorming del 2026-11-16 mediante `hg-rag-mcp`. Se reutiliza como evidencia de contexto; no son resultados de HGuerra.

| Documento | Localización | Qué fundamenta y qué no |
| --- | --- | --- |
| `GB991_TMForum_Core_Frameworks_Concepts_and_Principles_24.6.pdf` | p. PDF 13; ID `bdb89ebd-f257-48e9-8886-6d80928ea473` | Relación de fulfillment, assurance y billing; registros para facturación, pagos y costos. No prueba errores de un ISP visitante. |
| `03_FitSM-2_Process_Activities_2025.pdf` | PR5, p. PDF 21; PR10, p. PDF 32; ID `f20cb5e4-e7dc-4a81-8dce-e11a03d17666` | Necesidades y planes de capacidad; investigación de problemas usando incidentes, configuración, cambios y errores conocidos. Es una guía de gestión, no estadística local. |
| `TR-499 Broadband Service Metrics` | §8.3, p. PDF 24; ID `1014fba6-b6d6-4820-8068-21ac6ceeac43` | Métricas para acceso a Internet y distinción de dimensiones de calidad. No promete diagnosticar automáticamente una causa. |
| `01_Cable_One_Annual_Report_2025.pdf` | §«Our Strengths»; ID `776500c2-1a75-4db3-b54d-85edb3374011` | Ejemplo internacional de facturación unificada y mejoras de atención. No caso propio ni prueba de prevalencia hondureña. |
| `docs/servicios-isp-honduras.md` | Guía interna existente | Desarrollo de los ocho frentes, capacidades, propuestas de KPI, fuentes y límites. Su recorrido anterior no reemplaza las decisiones más recientes del propietario. |

Las referencias permanecen en documentos internos; no publicar bibliografía o instituciones como argumento comercial.

## Punto de partida en código

Inspección de archivos el 2026-11-16, sobre `b6209a7` y los cambios locales posteriores:

- `src/pages/isp-honduras.astro`: hero y doce slides; renderizado de las áreas y su detalle; formulario y FAQ.
- `src/data/ispCampaign.ts`: situaciones, textos, KPIs, capacidades, escenarios y FAQ.
- `src/components/sections/IspAreaScene.astro`: escenas ilustrativas por categoría, todavía no los nuevos ejemplos de trabajo.
- `src/components/sections/IspEngineering.astro` e `IspArchitecture.astro`: software, datos y conocimiento/acciones como respaldo técnico.
- `src/components/sections/IspSlide.astro`: estructura común con contador de doce slides fijado en el componente.
- `src/styles/ispCampaign.css`: estilo de presentación; las áreas ya mantienen alineación superior para no saltar al desplegar detalles.
- `ContactForm.astro`: componente compartido cuyo transporte, validación y contexto no deben cambiar para esta revisión editorial.

Las comprobaciones visuales y de envío documentadas en la memoria pertenecen a la versión anterior; no acreditan una implementación de este diseño.

## Alcance de definición al iniciar EGM — resuelto en el diseño aprobado

Los puntos siguientes eran los pendientes de entrada. Su definición se aprobó posteriormente por secciones y quedó reconciliada en `docs/designs/isp-honduras.md`; no son decisiones abiertas actuales.

- Texto público completo, incluidos hero, escenarios, apoyo técnico, contratación, dudas y contacto.
- Número y orden exacto de escenas y contenido de los ejemplos ilustrativos.
- Organización del respaldo técnico sin duplicar el catálogo ni ocultar información necesaria.
- Contrato de datos/componentes, archivos afectados y plan mínimo para implementar el diseño aprobado.
- Verificación proporcional al cambio; no añadir suites, infraestructura o pruebas de envíos intactos por rutina.

## Adenda — observaciones de revisión comercial del propietario

**Fecha:** 2026-11-16. Esta adenda registra la revisión solicitada después del primer borrador EGM. Las decisiones anteriores se conservan como historia; los puntos siguientes prevalecen donde amplían o sustituyen su redacción.

### Objetivo y audiencia revisados

La landing debe vender desarrollo de software e ingeniería de datos para ISP hondureños, cubriendo captura, integración, preparación/almacenamiento, análisis, visualización, automatización y aplicaciones. La audiencia incluye propietarios y gerentes generales, comerciales, operativos y técnicos, no solo gerencia técnica.

La campaña mantiene la identidad y el posicionamiento del sitio general. La revisión no autoriza convertir el resto de HGuerra.com en una agencia de desarrollo.

### Narrativa comercial

La cadena pública pasa a ser **Problema → Consecuencia → Solución → Beneficio → Llamado a la acción**. La entrega y su uso siguen siendo explícitos dentro de solución/beneficio; no se eliminan, pero dejan de presentarse como una guía de revisión de datos.

Primero se explica qué puede mejorar el ISP. Después se nombra qué construye o integra HGuerra, qué recibe el equipo y cómo lo utiliza. Indicadores y tecnologías no se usan como beneficios por sí mismos.

Se solicita reemplazar el hero abstracto de «conciliar, resolver o decidir» y dar al CTA una redacción accesible para iniciar una conversación con destino al formulario. La revisión propone «Conversemos sobre tu ISP» y fue aprobada posteriormente por el propietario para continuar las etapas documentales.

### Alcance de las tres áreas

- **Comercial:** captación, activaciones, facturación, cobros, retención y análisis de cancelaciones. Conciliación sigue siendo un ejemplo, no toda la oferta.
- **Operativa:** órdenes, instalaciones, soporte, cuadrillas, recurrencias y tareas manuales. El ticket cerrado que reaparece se conserva como ejemplo dentro de un problema más amplio de seguimiento y contexto.
- **Técnica:** monitoreo de red, herramientas NOC, disponibilidad, calidad, alertas y capacidad. La planificación de capacidad no representa por sí sola toda el área.

Cada escena conserva un problema principal y muestra soluciones relacionadas, sin un catálogo largo. Una escena amplia por área y dos escenas de ingeniería permanecen elegidas.

### Dirección visual y credibilidad — revisión inicial, actualizada por la adenda siguiente

El propietario solicita protagonismo de fotografías profesionales relacionadas con los problemas, junto con ejemplos breves de cómo se resolverían. La revisión en texto no autoriza abrir el compañero visual ni generar o adquirir imágenes.

Las tablas extensas y diagramas densos dejan de ser los visuales principales. Los ejemplos deben identificarse como ilustrativos y no simular productos o resultados reales. Las fotografías de contexto tampoco pueden presentarse como clientes, instalaciones o trabajo de HGuerra sin evidencia.

Conservar aplicaciones, APIs, ETL/ELT, Data Warehouse, algoritmos, visualización, automatización y agentes de IA como capacidades combinables, no una arquitectura obligatoria.

Se mantienen perfil profesional, entregables, transferencia, seguridad de datos, control de accesos y condiciones. No inventar testimonios, clientes, ahorros o experiencia con ISP. Herramientas NOC no significan operación NOC 24/7.

### Aceptación y autorización

El lector debe identificar en pocos segundos problema, solución, beneficio, capacidad de HGuerra y cómo conversar.

La instrucción es actualizar primero el documento de diseño para revisión. No implementar, realizar commits ni desplegar. Después de incorporar las observaciones, el propietario aprobó explícitamente el enfoque, textos y tratamiento visual para continuar con alternativas y plan detallado. Esa aprobación documental no autoriza implementación, commits o despliegue.

## Adenda — SVG/GIF en sustitución de fotografías, anterior a la recepción de archivos

**Fecha:** 2026-11-16. Al revisar el plan detallado, el propietario indicó que preparará ilustraciones y pidió seguir planificando mientras las sube. Ante la elección explícita entre sustituir o complementar las fotografías, eligió **sustituirlas**. Esta adenda prevalece sobre la dirección fotográfica anterior; no cambia la narrativa comercial, el CTA, el recorrido o el retrato profesional.

### Inventario aportado como intención de diseño

| Sección | Ilustración propuesta por el propietario | Formato |
| --- | --- | --- |
| Apertura | ISP con sistemas y datos interconectados | SVG |
| Comercial | Clientes, facturación y pagos: problema → solución | GIF |
| Operativa | Reclamos, órdenes de trabajo y automatización | GIF |
| Técnica | Red FTTH, monitoreo, alertas y análisis | GIF |
| Cómo trabajo | Entender → Implementar → Acompañar | SVG |
| Software y datos | Ciclo completo: aplicaciones → ETL → DWH → analítica | SVG |
| IA y automatización | RAG, agentes de IA, herramientas y acciones autorizadas | SVG |

Los siete activos sustituyen las cuatro fotografías de contexto del plan anterior; se mantiene `public/mi_foto_pro.jpeg` para el perfil. No se incorporan fotografías además de las ilustraciones ni un segundo diagrama que duplique cada imagen.

### Condiciones del plan ajustado

- La preparación de los archivos no bloquea la planificación o la finalización documental. Recibirlos y revisar contenido/procedencia/permiso sigue pendiente antes de integrarlos.
- La lista no acredita archivos ya subidos, licencias, dimensiones, peso, duración o aprobación de su contenido.
- Las ilustraciones y ejemplos siguen identificados como ilustrativos, sin simular productos o resultados reales de HGuerra. FTTH no amplía la oferta a instalación física; DWH, IA y agentes siguen siendo capacidades combinables, no requisitos universales.
- El plan propone versiones fijas para los GIF y reproducción/detención explícita, sin autoplay ni descarga inicial del GIF. Las versiones fijas pueden obtenerse de los originales al implementar; no se exige al propietario prepararlas ahora. Movimiento reducido y ausencia de JavaScript conservan la explicación fija/HTML.
- El control de GIF requiere un script mínimo del componente existente: sustituye la previsión anterior de no añadir interacción cliente, sin gobernar el scroll ni cambiar el formulario. No se crean bibliotecas o componentes adicionales para ello.
- Los SVG se prevén estáticos, como imágenes locales revisadas; el contenido comercial y sus relaciones no dependen de texto pequeño dentro de los archivos.

La sustitución visual está confirmada. Después de revisar el plan ajustado, el propietario eligió «Aprobar y guardar diseño». Se reconciliaron las decisiones del brief y sus adendas sin contradicciones abiertas para finalizar `docs/designs/isp-honduras.md`. La recepción estaba pendiente en esa etapa y quedó resuelta por la selección posterior registrada a continuación. Continúan excluidos implementación, generación/transformación de activos, commits y despliegue en esta fase.

## Adenda — borradores existentes elegidos para la primera versión

**Fecha:** 2026-11-16. El propietario indicó que los borradores de ejemplo están en `documentos/isp/ilustraciones/`, que se usarán esos y que realizará mejoras después de tener el sitio. No se debe bloquear la primera versión esperando ilustraciones definitivas.

Los archivos presentes son siete SVG, no cuatro SVG y tres GIF:

| Escena | Fuente existente en `documentos/isp/ilustraciones/` |
| --- | --- |
| Apertura | `01_hero_isp.svg` |
| Comercial | `02_comercial_animado.svg` |
| Operativa | `03_operativa_animado.svg` |
| Técnica | `04_tecnica_animado.svg` |
| Cómo trabajo | `05_como_trabajo.svg` |
| Software y datos | `06_software_datos.svg` |
| IA y automatización | `07_ia_automatizacion.svg` |

La inspección XML encontró proporción 1000×600 en los siete; los tres de área tienen animación CSS y reglas de movimiento reducido. No se detectaron scripts, manejadores de eventos, `foreignObject`, SMIL o referencias de recursos no locales en esa inspección. No se ejecutó una revisión visual ni una implementación nueva.

La selección de estos originales sustituye las previsiones de GIF y resuelve su recepción. No convertirlos a GIF ni exigir rediseños o rótulos internos antes de avanzar. El argumento comercial y los pasos de los ejemplos se mantienen en HTML.

El diseño vigente adapta el mismo control manual a SVG fijo/animado mediante cambio de imagen externa; las tres copias SVG fijas se prepararán al implementar, sin modificar los originales. No se necesitan fotogramas WebP ni nuevas ilustraciones del propietario. Se conserva el retrato profesional.

`docs/designs/isp-honduras.md` contiene el inventario real, correspondencias de publicación y plan actualizado. `design_draft.md` permanece como borrador cerrado con aviso de la actualización, no como un segundo plan vigente. Esta selección no inicia por sí sola la implementación, commit o despliegue.

*Base y evolución del contexto trasladadas a EGM. No es una implementación ni un diseño definitivo.*
