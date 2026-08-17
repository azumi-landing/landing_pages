# Reposicionamiento de la raiz y servicios

## Objetivo

Convertir la raiz de HGuerra en una presentacion profesional centrada en Hector Guerra, su criterio y su experiencia, y presentar la gestion de operaciones de campo y la automatizacion inteligente como sus dos especialidades. La conversion principal de la raiz sera llevar al visitante a conocer el enfoque de trabajo; la conversion a contacto queda disponible, sin dominar el hero.

## Alcance

- Reordenar el contenido y la jerarquia de `src/pages/index.astro`.
- Actualizar el contenido de apoyo de la raiz en `src/data/home.ts`.
- Alinear los metadatos y enlaces de `src/data/site.ts`.
- Ajustar el mensaje de las dos landings a su especialidad y reforzar el contexto del perfil profesional.
- Corregir referencias a tres servicios por dos servicios.
- Conservar las URLs, el formulario, los CTAs de WhatsApp, el diseno establecido y la navegacion actual.

## Fuera de alcance

- Crear servicios, rutas o productos nuevos.
- Cambiar el stack, el formulario de contacto o la integracion con EmailJS.
- Reescribir por completo la pagina `sobre-mi`.
- Alterar la plantilla compartida de las landings salvo el copy de su bloque de perfil ya existente.

## Pagina raiz

### Hero

El hero debe identificar a Hector Guerra como consultor e implementador que convierte operaciones complejas en sistemas que el equipo usa. Debe incluir:

- Nombre, foto y credenciales concretas: mas de 10 anos de experiencia, mas de 5 millones de registros operativos y trabajo directo de punta a punta.
- Una promesa transversal que abarque operaciones, datos y automatizacion, sin presentar operaciones de campo como unico servicio.
- CTA principal `Conocer mi enfoque`, enlazado a la seccion de enfoque o metodo de la misma raiz.
- CTA secundario visualmente subordinado `Ver servicios`, enlazado a la seccion de dos especialidades.

### Enfoque profesional

Sustituir el bloque centrado en el dolor de Excel por una explicacion de las tres capacidades que se combinan en el trabajo de Hector:

1. Leer la operacion y detectar el cuello de botella real.
2. Disenar datos, integraciones y automatizaciones utiles.
3. Implementar y acompanar hasta que el equipo adopte el cambio.

Esta seccion debe explicar el criterio de seleccion de herramientas: primero proceso y restricciones reales; despues tecnologia.

### Prueba de experiencia

Mantener el caso de referencia, pero introducirlo como evidencia del enfoque y la capacidad de ejecucion. No debe sugerir que el caso o el trabajo de campo son la unica oferta. Conservar unicamente metricas y afirmaciones verificables.

### Dos especialidades

Mostrar dos tarjetas simetricas, con enlace a sus landings:

- **Gestion de Operaciones de Campo:** digitalizacion de captura, coordinacion de equipos, evidencia y trazabilidad desde terreno hasta auditoria.
- **Automatizacion Inteligente de Procesos:** orden de procesos internos, integraciones y automatizacion con RPA o IA bajo control humano.

Cada tarjeta debe explicar para quien aplica, que problema resuelve y el resultado esperado. La seccion debe indicar que ambas especialidades pueden combinarse cuando el caso lo requiera.

### Metodo y cierre

Conservar el proceso de tres pasos como expresion del metodo personal: entender, definir una solucion viable e implementar con acompanamiento. El cierre invita a describir el cuello de botella y mantiene el enlace a contacto, sin desplazar el CTA principal del hero.

## Landing: Gestion de Operaciones de Campo

La landing se dirige a organizaciones que coordinan personal, activos o evidencia en terreno. Su promesa prioritaria es capturar datos confiables, coordinar trabajo y lograr trazabilidad desde campo hasta control o auditoria.

- Mantener el caso real y las metricas operativas como prueba central.
- Reforzar que el resultado es visibilidad y control del ciclo completo, no solo una app movil.
- En el bloque de perfil de la plantilla, especificar experiencia relevante en operaciones criticas, datos y ejecucion directa.
- Enlazar a automatizacion inteligente como siguiente ruta cuando la captura ya este ordenada pero los procesos internos sigan manuales.

## Landing: Automatizacion Inteligente de Procesos

La landing se dirige a pymes y equipos con procesos administrativos, comerciales o internos dispersos. Su promesa prioritaria es ordenar primero y automatizar despues, con limites claros y aprobacion humana en decisiones sensibles.

- Mantener IA agentica, RPA e integraciones como medios tecnicos, no como la promesa principal.
- Priorizar resultados de negocio: menos tareas repetitivas, seguimiento visible, informacion conectada y control.
- En el bloque de perfil, especificar experiencia en automatizacion productiva, pipelines de datos y sistemas multiagente.
- Enlazar a operaciones de campo cuando el problema principal sea la ejecucion o evidencia en terreno.

## Navegacion, SEO y consistencia

- La raiz debe describirse como consultoria e implementacion de operaciones y automatizacion, con dos especialidades.
- Actualizar titulo, descripcion, imagen social si corresponde y schema de la raiz para que coincidan con el reposicionamiento.
- Conservar el schema `Service`, breadcrumbs y FAQs de cada landing.
- Corregir las referencias a `tres servicios` o `tres lineas de servicio` en raiz y pagina de perfil.
- Conservar los enlaces existentes a `/sobre-mi`, contacto y las dos landings.

## Implementacion prevista

Los cambios de contenido se concentraran en `src/data/home.ts`, `src/data/serviceLandings.ts` y `src/data/site.ts`. La estructura visual de la raiz se ajustara en `src/pages/index.astro`. El bloque de perfil existente de `src/components/templates/ServiceLanding.astro` se reutilizara con copy mas preciso; no se crearan nuevas rutas ni componentes si los existentes cubren el resultado.

## Validacion

- `npm run build` debe finalizar correctamente.
- Revisar `/`, `/gestion-de-operaciones-de-campo` y `/automatizacion-con-ia-agentica` en viewport movil y escritorio.
- Verificar CTA principal y secundario de la raiz, los enlaces cruzados entre servicios y los enlaces al perfil y contacto.
- Confirmar que no queden referencias a tres servicios y que los titulos y descripciones reflejen la oferta final.
