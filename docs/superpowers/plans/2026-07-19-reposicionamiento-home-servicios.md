# Reposicionamiento de raiz y servicios Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposicionar la raiz como perfil profesional de Hector Guerra y presentar gestion de operaciones de campo y automatizacion inteligente como dos especialidades coherentes.

**Architecture:** Se conservaran las rutas y componentes existentes. La raiz se reorganizara en `index.astro` usando contenido centralizado en `home.ts`; las dos landings reutilizaran `ServiceLanding.astro`, con copy especifico en `serviceLandings.ts` y enlaces cruzados renderizados por `RelatedServices.astro`.

**Tech Stack:** Astro 5, TypeScript, Tailwind CSS 4, schema.org JSON-LD.

---

## Estructura de archivos

- Modificar: `src/pages/index.astro` - jerarquia y copy de la raiz.
- Modificar: `src/data/home.ts` - contenido de enfoque, prueba, servicios y metodo de la raiz.
- Modificar: `src/data/serviceLandings.ts` - copy de posicionamiento de ambas especialidades.
- Modificar: `src/components/templates/ServiceLanding.astro` - renderizar enlaces entre servicios antes del contacto.
- Modificar: `src/components/sections/RelatedServices.astro` - copy de transicion entre las dos rutas y el perfil.
- Modificar: `src/data/site.ts` - descripcion institucional y descripciones breves de servicios.
- Modificar: `src/pages/sobre-mi.astro` - corregir la referencia a tres lineas de servicio.
- Modificar: `src/pages/index.astro` - corregir la referencia a tres servicios y SEO de la raiz.

## Fase 1: Aislamiento y linea base

### Task 1: Crear el worktree de implementacion

**Files:**
- Create: worktree aislado fuera del directorio actual.
- Reference: `docs/superpowers/specs/2026-07-19-reposicionamiento-home-servicios-design.md`
- Reference: `docs/superpowers/plans/2026-07-19-reposicionamiento-home-servicios.md`

- [ ] **Step 1: Confirmar el estado actual antes de aislar trabajo**

Run: `git status --short && git branch --show-current`

Expected: Registrar archivos modificados no relacionados antes de crear el worktree. No revertirlos ni incluirlos en la nueva rama.

- [ ] **Step 2: Crear una rama y worktree aislados**

Run: `git worktree add ../personal_web-reposicionamiento -b feat/reposicionamiento-home-servicios`

Expected: Git crea `../personal_web-reposicionamiento` en la rama `feat/reposicionamiento-home-servicios` y deja intacto el worktree original.

- [ ] **Step 3: Confirmar que el worktree apunta a la rama de implementacion**

Run: `git branch --show-current && git status --short`

Expected: La rama activa es `feat/reposicionamiento-home-servicios`. El estado solo contiene cambios que se hagan dentro de este trabajo.

- [ ] **Step 4: Generar la linea base de compilacion**

Run: `npm run build`

Expected: `astro build` termina con codigo 0 antes de los cambios.

## Fase 2: Raiz centrada en el perfil

### Task 2: Reescribir el contenido compartido de la raiz

**Files:**
- Modify: `src/data/home.ts:1-142`

- [ ] **Step 1: Sustituir `homeHeroBullets` por capacidades transversales**

```ts
export const homeHeroBullets = [
  'Leo la operacion completa para encontrar el cuello de botella real',
  'Diseno datos, integraciones y automatizaciones que el equipo puede usar',
  'Implemento y acompano el cambio hasta que entre en operacion'
];
```

- [ ] **Step 2: Cambiar los textos de `homeProblemPoints` por tres capacidades profesionales**

Mantener el tipo de dato actual (`icon`, `title`, `quote`) para no crear componentes nuevos. Definir exactamente estas tarjetas:

```ts
export const homeProblemPoints = [
  {
    icon: 'fa-route',
    title: 'Operacion antes que herramienta',
    quote: 'Mapeo el flujo, las decisiones, los datos y las restricciones antes de proponer tecnologia.'
  },
  {
    icon: 'fa-diagram-project',
    title: 'Sistemas utiles y conectados',
    quote: 'Diseno captura, datos, integraciones y automatizaciones como un solo sistema operable.'
  },
  {
    icon: 'fa-people-group',
    title: 'Implementacion con adopcion',
    quote: 'La entrega termina cuando el equipo incorpora el cambio a su trabajo diario.'
  }
];
```

- [ ] **Step 3: Reencuadrar el caso de referencia como prueba de experiencia**

Cambiar `homeCaseStudy.eyebrow` a `Experiencia aplicada` y `homeCaseStudy.client` a `Un proyecto de operacion critica en Honduras`. Conservar los hechos y metricas actuales; no agregar cifras ni testimonios no verificables.

- [ ] **Step 4: Ajustar el primer paso de `homeWorkflowSteps`**

Conservar los tres pasos y actualizar el titulo y descripcion del primer paso:

```ts
title: 'Entiendo la operacion antes de hablar de tecnologia',
description:
  'Parto del flujo real: personas, decisiones, datos, herramientas y restricciones. Asi identificamos el primer cambio que vale la pena implementar.'
```

- [ ] **Step 5: Verificar tipos y compilacion parcial**

Run: `npm run build`

Expected: El build termina con codigo 0; no hay errores de tipos por los nuevos iconos ni por la estructura de datos.

### Task 3: Reestructurar la pagina raiz alrededor del perfil y las dos especialidades

**Files:**
- Modify: `src/pages/index.astro:17-353`

- [ ] **Step 1: Actualizar SEO y schema de la raiz**

Cambiar las props de `PageLayout` a:

```astro
title="Hector Guerra | Operaciones, datos y automatizacion aplicada"
description="Consultor e implementador para ordenar operaciones, conectar datos y automatizar procesos criticos. Especialidades en operaciones de campo y automatizacion inteligente para Honduras y LatAm."
```

Agregar `buildPersonSchema` a la importacion desde `../data/site` y sumar `buildPersonSchema({ path: '/', name: 'Hector Guerra', description: 'Consultor e implementador de operaciones, datos y automatizacion aplicada.' })` al arreglo `schemas` junto al FAQ existente.

- [ ] **Step 2: Reescribir el hero sin cambiar la estructura visual existente**

Mantener la columna de copy y el `aside` con foto. Reemplazar el badge, H1, parrafo y CTAs por:

```astro
<span class="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200 mb-6">
  Hector Guerra · Consultor e implementador · Honduras y LatAm
</span>
<h1 class="max-w-4xl text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
  Convierto operaciones complejas en sistemas que el equipo si usa.
</h1>
<p class="text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
  Combino lectura operativa, datos y automatizacion para llevar procesos criticos del desorden a una operacion visible, trazable y sostenible.
</p>
<a href="#como-trabajo" class="action-primary text-lg">Conocer mi enfoque</a>
<a href="#servicios" class="action-secondary text-lg">Ver servicios</a>
```

Mantener el texto de disponibilidad debajo de los CTAs y ajustar el `aside` para que diga `Hector Guerra` y `Operacion, datos y automatizacion aplicada`.

- [ ] **Step 3: Convertir la seccion `#el-problema` en `#enfoque`**

Cambiar `id="el-problema"` por `id="enfoque"` y reemplazar su encabezado por:

```astro
<p class="section-eyebrow justify-center text-slate-500">Como trabajo</p>
<h2 class="section-title text-slate-950">
  Entiendo la operacion, diseno el sistema y acompano la ejecucion.
</h2>
<p class="section-copy text-slate-600">
  La herramienta es una consecuencia. El trabajo empieza por el flujo que hoy depende de personas, archivos, mensajes o decisiones sin visibilidad.
</p>
```

Renderizar las tres tarjetas desde el arreglo actualizado de `homeProblemPoints` y eliminar el parrafo que afirma `Los tres servicios que ofrezco`.

- [ ] **Step 4: Reencuadrar el caso y mover las especialidades antes de la prueba extensa**

En la seccion `#caso`, cambiar el H2 por `Un ejemplo de como llevo un problema operativo a produccion`. Mover la seccion `#servicios` inmediatamente despues de `#enfoque` y antes de `#caso`, sin alterar sus dos `ServiceStatusCard`.

Cambiar el encabezado de servicios a:

```astro
<p class="section-eyebrow justify-center text-slate-500">Dos especialidades</p>
<h2 class="section-title text-slate-950">
  Dos rutas para ordenar y mejorar una operacion.
</h2>
<p class="section-copy text-slate-600">
  Puedes necesitar una de estas especialidades o combinarlas: la captura y coordinacion en terreno, y los procesos internos que convierten esos datos en acciones.
</p>
```

- [ ] **Step 5: Ajustar copy de las tarjetas de servicio**

Usar estas descripciones, manteniendo los `href` actuales:

```astro
description="Digitalizo la captura, coordinacion y evidencia de equipos en terreno para que supervisores y gerencia vean una operacion trazable de punta a punta."
```

```astro
description="Ordeno procesos internos, conecto herramientas y automatizo tareas repetitivas con reglas claras, RPA o IA bajo control humano."
```

- [ ] **Step 6: Ejecutar el build**

Run: `npm run build`

Expected: `astro build` termina con codigo 0 y la raiz no contiene enlaces a IDs eliminados.

- [ ] **Step 7: Commit de la fase de raiz**

Run: `git add src/data/home.ts src/pages/index.astro && git commit -m "feat: centrar la raiz en el perfil profesional"`

Expected: Un commit enfocado en contenido y jerarquia de la raiz.

## Fase 3: Especialidades y rutas relacionadas

### Task 4: Alinear el copy de las dos landings

**Files:**
- Modify: `src/data/serviceLandings.ts:5-677`
- Modify: `src/data/serviceLandings.ts:1155-1603`

- [ ] **Step 1: Afinar la promesa de automatizacion inteligente**

Actualizar los primeros campos de `agenticAutomationLanding` a:

```ts
badge: 'Procesos internos ordenados + automatizacion con control humano',
title: 'Ordena tus procesos internos antes de automatizar lo que si conviene.',
subtitle:
  'Trabajo contigo para entender como fluye la informacion entre WhatsApp, Excel, correo, formularios y sistemas internos. Despues implemento el cambio mas simple que reduzca trabajo repetitivo, mejore el seguimiento y mantenga el control humano donde importa.',
```

Mantener beneficios, casos, FAQs y CTAs existentes salvo que contradigan esa promesa.

- [ ] **Step 2: Ajustar el bloque `execution` de automatizacion**

Reemplazarlo por:

```ts
execution: {
  eyebrow: 'Quien hace el trabajo',
  title: 'Trabajas directo con un ingeniero que ha llevado datos y automatizacion a produccion',
  description:
    'Combino la lectura de proceso con experiencia en pipelines de datos, integraciones y sistemas multiagente. No propongo IA por moda: elijo la alternativa mas simple que puedas operar.',
  bullets: [
    'Experiencia en automatizacion y pipelines operativos sobre volumenes reales.',
    'IA, RPA e integraciones se usan solo cuando aportan una mejora concreta.',
    'Reglas, aprobaciones y trazabilidad quedan definidos antes de automatizar acciones sensibles.'
  ],
  ctaLabel: 'Ver experiencia y enfoque'
},
```

- [ ] **Step 3: Afinar la promesa de operaciones de campo**

Actualizar los primeros campos de `fieldOperationsLanding` a:

```ts
badge: 'Coordinacion de campo + evidencia confiable + trazabilidad operativa',
title: 'Haz visible y trazable el trabajo que hoy ocurre fuera de la oficina.',
subtitle:
  'Diseno e implemento sistemas para coordinar equipos en terreno, capturar evidencia confiable y conectar cada visita con supervision, auditoria y decisiones. Funciona incluso cuando la conectividad es limitada.',
```

- [ ] **Step 4: Ajustar el bloque `execution` de campo**

Reemplazar el bloque por:

```ts
execution: {
  eyebrow: 'Quien hace el trabajo',
  title: 'Trabajas directo con quien entiende la operacion de campo y construye el sistema',
  description:
    'Integro la lectura de equipos y restricciones en terreno con el diseno de la app, los datos, las integraciones y la puesta en marcha. No entrego una app aislada: acompano el flujo completo.',
  bullets: [
    'Experiencia en captura, evidencia, auditoria y flujos operativos de extremo a extremo.',
    'Diseno offline, trazabilidad y adopcion para las condiciones reales del equipo en terreno.',
    'Implementacion directa desde el diagnostico hasta la estabilizacion inicial.'
  ],
  ctaLabel: 'Ver experiencia y enfoque'
},
```

- [ ] **Step 5: Ejecutar el build**

Run: `npm run build`

Expected: El tipado de `ServiceLandingConfig` acepta ambos bloques y el build termina con codigo 0.

### Task 5: Renderizar enlaces cruzados entre servicios

**Files:**
- Modify: `src/components/templates/ServiceLanding.astro:1-8,677`
- Modify: `src/components/sections/RelatedServices.astro:31-79`

- [ ] **Step 1: Importar y renderizar `RelatedServices` en la plantilla**

Agregar en los imports:

```astro
import RelatedServices from '../sections/RelatedServices.astro';
```

Entre el cierre de la seccion FAQ y `<Contact ... />`, insertar:

```astro
<RelatedServices currentPath={config.path} />
```

Esto muestra unicamente la otra especialidad porque el componente ya filtra `service.href !== currentPath`.

- [ ] **Step 2: Corregir el copy generico de `RelatedServices`**

Cambiar el H2 y parrafo por:

```astro
<h2 class="section-title text-slate-950">
  Puede que tu cuello de botella este en la otra parte de la operacion.
</h2>
<p class="section-copy text-slate-600">
  La gestion de campo organiza lo que ocurre en terreno. La automatizacion inteligente ordena los procesos internos que reciben, transforman o activan esos datos. Revisa la otra especialidad o conoce mi enfoque antes de decidir.
</p>
```

- [ ] **Step 3: Ajustar la tarjeta del perfil**

Reemplazar descripcion por `Conoce la experiencia, el criterio tecnico y la forma de trabajo detras de las dos especialidades.` y CTA por `Conocer mi enfoque`.

- [ ] **Step 4: Ejecutar build y comprobar enlaces renderizados**

Run: `npm run build && rg 'RelatedServices|Conocer mi enfoque' dist -g '*.html'`

Expected: El build termina con codigo 0 y las paginas compiladas incluyen enlaces a la otra especialidad y a `/sobre-mi`.

- [ ] **Step 5: Commit de las landings**

Run: `git add src/data/serviceLandings.ts src/components/templates/ServiceLanding.astro src/components/sections/RelatedServices.astro && git commit -m "feat: alinear servicios con el perfil profesional"`

Expected: Un commit que contiene solamente las landings y sus enlaces relacionados.

## Fase 4: SEO y consistencia de oferta

### Task 6: Actualizar descripciones institucionales y referencias obsoletas

**Files:**
- Modify: `src/data/site.ts:3-25`
- Modify: `src/pages/sobre-mi.astro:98-104`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Actualizar `siteConfig.description` y descripciones de `serviceLinks`**

Usar:

```ts
description:
  'Hector Guerra es consultor e implementador de operaciones, datos y automatizacion aplicada. Especialidades en gestion de operaciones de campo y automatizacion inteligente de procesos.'
```

Y las descripciones de servicios:

```ts
description: 'Coordinacion, captura offline, evidencia y trazabilidad para equipos que trabajan en terreno.'
```

```ts
description: 'Orden e integracion de procesos internos con automatizacion, RPA e IA bajo control humano.'
```

- [ ] **Step 2: Corregir el CTA obsoleto de la pagina de perfil**

En `sobre-mi.astro`, sustituir el texto `Ver las tres lineas de servicio` por `Ver las dos especialidades` sin cambiar el enlace `/#servicios`.

- [ ] **Step 3: Buscar referencias obsoletas en codigo fuente**

Run: `rg -n -i 'tres servicios|tres lineas de servicio' src`

Expected: Sin resultados. Si aparece una referencia, corregirla solo cuando describa la oferta publica actual.

- [ ] **Step 4: Ejecutar el build**

Run: `npm run build`

Expected: El build termina con codigo 0 y los metadatos no producen errores de Astro.

- [ ] **Step 5: Commit de consistencia y SEO**

Run: `git add src/data/site.ts src/pages/sobre-mi.astro src/pages/index.astro && git commit -m "fix: alinear la oferta con dos especialidades"`

Expected: Un commit enfocado en SEO, navegacion y referencias de oferta.

## Fase 5: Validacion de experiencia y entrega

### Task 7: Verificacion visual y funcional en navegador

**Files:**
- Verify: `src/pages/index.astro`
- Verify: `src/pages/gestion-de-operaciones-de-campo.astro`
- Verify: `src/pages/automatizacion-con-ia-agentica.astro`

- [ ] **Step 1: Iniciar el sitio local**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Astro informa una URL local accesible.

- [ ] **Step 2: Revisar la raiz en desktop y movil**

Usar el navegador de pruebas para abrir `/` en 1440px y 390px. Verificar:

- El H1 presenta a Hector Guerra y la promesa transversal.
- `Conocer mi enfoque` navega a `#como-trabajo`.
- `Ver servicios` navega a `#servicios`.
- Hay exactamente dos tarjetas de especialidad.
- La seccion de enfoque aparece antes del caso de referencia.

- [ ] **Step 3: Revisar ambas landings en desktop y movil**

Abrir `/gestion-de-operaciones-de-campo` y `/automatizacion-con-ia-agentica` en 1440px y 390px. Verificar:

- Cada hero describe su especialidad sin prometer el otro servicio como principal.
- El bloque de perfil especifica experiencia relevante.
- La seccion de servicios relacionados muestra la otra especialidad y el enlace al perfil.
- Los CTAs existentes de contacto y WhatsApp mantienen su destino.

- [ ] **Step 4: Verificar la compilacion de produccion y el diff final**

Run: `npm run build && git diff --check && git status --short`

Expected: Build con codigo 0, sin errores de whitespace y solo archivos previstos en el worktree.

- [ ] **Step 5: Revisar commits antes de entregar**

Run: `git log --oneline --decorate -5 && git status --short`

Expected: Los commits corresponden a las fases de raiz, landings y consistencia. El worktree no contiene cambios inesperados.
