# Reposicionamiento de raíz y servicios Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir `/` en perfil profesional de Héctor Guerra y hub de dos especialidades; mantener las landings como rutas de conversión específicas y coherentes.

**Architecture:** La raíz conserva `index.astro` como composición visual y `home.ts` como fuente de contenido. Las dos landings conservan `ServiceLanding.astro` y reciben posicionamiento específico desde `serviceLandings.ts`; `RelatedServices.astro` conecta ambas rutas. No se crean rutas, componentes ni dependencias nuevas.

**Tech Stack:** Astro 5, TypeScript, Tailwind CSS 4, schema.org JSON-LD, validación de navegador con Playwright.

---

## Decisiones aprobadas

- Audiencia: pequeñas y medianas empresas de Honduras y LatAm.
- Raíz: conocer perfil → elegir servicio → agendar diagnóstico.
- Especialidad 1: **Gestión de Operaciones de Campo**.
- Especialidad 2: **Automatización Inteligente de Procesos**.
- RPA, IA agéntica e integraciones son capacidades de la segunda especialidad, no su promesa primaria.
- Se conserva `/automatizacion-con-ia-agentica` para no cambiar la URL indexable.
- Voz pública uniforme: **vos**.
- No usar testimonios reconstruidos ni nuevas métricas no verificables.

## Estructura de archivos

- Modificar: `src/data/home.ts` — contenido de perfil, criterio y prueba de la raíz.
- Modificar: `src/pages/index.astro` — orden de secciones, CTAs, copy y metadatos de `/`.
- Modificar: `src/data/serviceLandings.ts` — promesas, metadatos y bloques de perfil de ambas landings.
- Modificar: `src/components/templates/ServiceLanding.astro` — incluir ruta relacionada antes del contacto.
- Modificar: `src/components/sections/RelatedServices.astro` — transición entre especialidades y perfil.
- Modificar: `src/data/site.ts` — descripción institucional y menú de servicios.
- Modificar: `src/pages/sobre-mi.astro` — oferta de dos especialidades y voz consistente.
- Verify only: `src/pages/gestion-de-operaciones-de-campo.astro` y `src/pages/automatizacion-con-ia-agentica.astro` — conservar URL, schemas, breadcrumbs y FAQ.

### Task 1: Preparar línea base en `develop`

**Files:**
- Reference: `docs/superpowers/specs/2026-07-19-reposicionamiento-home-servicios-design.md`
- Reference: `docs/superpowers/plans/2026-08-08-reposicionamiento-home-servicios.md`

- [ ] **Step 1: Confirmar rama y cambios preexistentes**

Run:

```bash
git branch --show-current && git status --short
```

Expected: `develop`; preservar `.gitignore` modificado y `docs/superpowers/` sin seguimiento. No añadirlos a commits de producto salvo los documentos creados explícitamente para este trabajo.

- [ ] **Step 2: Generar baseline de compilación**

Run:

```bash
npm run build
```

Expected: exit code `0`. Si falla, detener implementación y reportar fallo como preexistente.

- [ ] **Step 3: Registrar contrato de regresión visual**

Crear lista de aceptación para navegador:

```text
/ — un H1 personal, CTAs a #enfoque y #servicios, dos tarjetas de especialidad.
/gestion-de-operaciones-de-campo — enlace a automatización y /sobre-mi antes de contacto.
/automatizacion-con-ia-agentica — enlace a campo y /sobre-mi antes de contacto.
```

Expected: esta lista guía verificación final; no introducir framework de tests ni dependencia nueva para un cambio de contenido.

### Task 2: Convertir contenido de raíz en perfil y criterio

**Files:**
- Modify: `src/data/home.ts:1-142`

- [ ] **Step 1: Reemplazar bullets del hero por capacidades transversales**

```ts
export const homeHeroBullets = [
  'Leo tu operación completa para encontrar el cuello de botella real',
  'Diseño datos, integraciones y automatizaciones que tu equipo puede usar',
  'Implemento y acompaño el cambio hasta que entra en operación'
];
```

- [ ] **Step 2: Reemplazar `homeProblemPoints` por criterio profesional**

Conservar nombre y forma (`icon`, `title`, `quote`) para no cambiar la interfaz de `index.astro`:

```ts
export const homeProblemPoints = [
  {
    icon: 'fa-route',
    title: 'Operación antes que herramienta',
    quote: 'Mapeo flujo, decisiones, datos y restricciones antes de proponer tecnología.'
  },
  {
    icon: 'fa-diagram-project',
    title: 'Sistemas útiles y conectados',
    quote: 'Diseño captura, datos, integraciones y automatizaciones como un solo sistema operable.'
  },
  {
    icon: 'fa-people-group',
    title: 'Implementación con adopción',
    quote: 'La entrega termina cuando el equipo incorpora el cambio a su trabajo diario.'
  }
];
```

- [ ] **Step 3: Reencuadrar caso como evidencia, no única oferta**

Usar estos campos conservando solo hechos existentes:

```ts
eyebrow: 'Experiencia aplicada',
client: 'Proyecto de operación crítica en Honduras'
```

No agregar porcentajes, clientes, testimonios ni resultados no presentes en fuente verificable.

- [ ] **Step 4: Alinear primer paso del método con perfil**

```ts
title: 'Entiendo tu operación antes de hablar de tecnología',
description:
  'Parto del flujo real: personas, decisiones, datos, herramientas y restricciones. Así identificamos el primer cambio que vale la pena implementar.'
```

- [ ] **Step 5: Compilar cambios de contenido**

Run:

```bash
npm run build
```

Expected: exit code `0`; sin errores de tipos ni iconos inexistentes.

### Task 3: Reordenar `/` para perfil → servicios → diagnóstico

**Files:**
- Modify: `src/pages/index.astro:17-353`

- [ ] **Step 1: Actualizar metadata de la raíz**

Sustituir props de `PageLayout` por:

```astro
title="Héctor Guerra | Operaciones, datos y automatización aplicada"
description="Consultor e implementador para ordenar operaciones, conectar datos y automatizar procesos. Especialidades en operaciones de campo y automatización inteligente para pymes de Honduras y LatAm."
```

Mantener `path="/"`, `image="/og-home.png"` y FAQ schema actual. No crear un segundo `Person` schema con ID distinto del perfil existente.

- [ ] **Step 2: Reescribir hero personal y CTAs de exploración**

Conservar foto, métricas existentes y estructura de dos columnas. Sustituir badge, H1, párrafo y bloque CTA por:

```astro
<span class="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200 mb-6">
  Héctor Guerra · Consultor e implementador · Honduras y LatAm
</span>
<h1 class="max-w-4xl text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
  Convierto operaciones complejas en sistemas que tu equipo sí usa.
</h1>
<p class="text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
  Combino lectura operativa, datos y automatización para llevar procesos críticos del desorden a una operación visible, trazable y sostenible.
</p>
<div class="flex flex-col sm:flex-row gap-4">
  <a href="#enfoque" class="action-primary text-lg">Conocé mi enfoque</a>
  <a href="#servicios" class="action-secondary text-lg">Ver especialidades</a>
</div>
```

Eliminar texto de agenda abierta bajo hero; diagnóstico queda como CTA de cierre para respetar secuencia aprobada.

- [ ] **Step 3: Convertir `#el-problema` en `#enfoque`**

Actualizar ID y encabezado:

```astro
<section id="enfoque" class="section-shell section-light">
  <p class="section-eyebrow justify-center text-slate-500">Cómo trabajo</p>
  <h2 class="section-title text-slate-950">
    Entiendo la operación, diseño el sistema y acompaño la ejecución.
  </h2>
  <p class="section-copy text-slate-600">
    La herramienta es una consecuencia. El trabajo empieza por el flujo que hoy depende de personas, archivos, mensajes o decisiones sin visibilidad.
  </p>
</section>
```

Eliminar párrafo que declara “Los tres servicios que ofrezco”. Renderizar únicamente las tres tarjetas de `homeProblemPoints` actualizadas.

- [ ] **Step 4: Mover especialidades antes de caso y prueba**

Orden final de secciones después del hero:

```text
#enfoque → #servicios → #caso → TrustBand → #como-trabajo → #faq → ContactStrip
```

En `#servicios`, usar:

```astro
<p class="section-eyebrow justify-center text-slate-500">Dos especialidades</p>
<h2 class="section-title text-slate-950">Dos rutas para ordenar y mejorar tu operación.</h2>
<p class="section-copy text-slate-600">
  Podés necesitar una especialidad o combinarlas: la captura y coordinación en terreno, y los procesos internos que convierten datos en acciones.
</p>
```

- [ ] **Step 5: Hacer simétricas tarjetas de especialidad**

Mantener `href` existentes. Sustituir solo títulos, descripciones y CTA:

```astro
title="Gestión de Operaciones de Campo"
description="Digitalizo captura, coordinación y evidencia de equipos en terreno para que supervisores y gerencia vean una operación trazable de punta a punta."
cta="Ver operación de campo"
```

```astro
title="Automatización Inteligente de Procesos"
description="Ordeno procesos internos, conecto herramientas y automatizo tareas repetitivas con reglas claras, RPA o IA bajo control humano."
cta="Ver automatización de procesos"
```

- [ ] **Step 6: Limpiar evidencia no atribuible**

Eliminar `figure`, `blockquote` y `figcaption` de testimonio reconstruido dentro de `#caso`. Mantener columnas Antes / Lo que implementé / Resultado.

- [ ] **Step 7: Verificar compilación y anchors**

Run:

```bash
npm run build && rg -n 'id="(enfoque|servicios|como-trabajo)"|href="#(enfoque|servicios)"' src/pages/index.astro
```

Expected: exit code `0`; ambos CTAs apuntan a IDs existentes.

- [ ] **Step 8: Commit de la raíz**

```bash
git add src/data/home.ts src/pages/index.astro && git commit -m "feat: centrar la raíz en perfil y especialidades"
```

Expected: commit contiene solo contenido y jerarquía de `/`.

### Task 4: Alinear landings con especialidades y voz `vos`

**Files:**
- Modify: `src/data/serviceLandings.ts:5-677`
- Modify: `src/data/serviceLandings.ts:1155-1603`

- [ ] **Step 1: Reposicionar automatización como servicio paraguas**

En `agenticAutomationLanding`, sustituir campos iniciales:

```ts
seoTitle: 'Automatización de procesos para pymes | RPA e IA con control',
seoDescription:
  'Ordená procesos internos, conectá WhatsApp, Excel, CRM y sistemas actuales. Automatización con RPA e IA agéntica bajo control humano para pymes de Honduras y LatAm.',
badge: 'Procesos internos ordenados + automatización con control humano',
title: 'Ordená tus procesos internos antes de automatizar lo que sí conviene.',
subtitle:
  'Trabajo con vos para entender cómo fluye la información entre WhatsApp, Excel, correo, formularios y sistemas internos. Después implemento el cambio más simple que reduzca trabajo repetitivo, mejore el seguimiento y mantenga control humano donde importa.'
```

Conservar `path: '/automatizacion-con-ia-agentica'` y CTAs actuales.

- [ ] **Step 2: Explicar RPA e IA agéntica como capacidades complementarias**

En `capabilitiesSubtitle` usar:

```ts
'No vendo IA por moda. RPA resuelve tareas repetitivas y deterministas; la IA agéntica ayuda a interpretar información, priorizar casos y coordinar pasos. Primero reviso tu proceso y después propongo la alternativa más simple que resuelva tu problema.'
```

En `execution`, usar:

```ts
title: 'Trabajás directo con un ingeniero que lleva datos y automatización a producción',
description:
  'Combino lectura de proceso con experiencia en pipelines de datos, integraciones y sistemas multiagente. No propongo IA por moda: elijo la alternativa más simple que podés operar.',
  'Experiencia en automatización y pipelines operativos sobre volúmenes reales.',
  'IA, RPA e integraciones se usan solo cuando aportan una mejora concreta.',
  'Reglas, aprobaciones y trazabilidad quedan definidas antes de automatizar acciones sensibles.'
]
```

- [ ] **Step 3: Afinar promesa de operaciones de campo**

En `fieldOperationsLanding`, sustituir campos iniciales:

```ts
badge: 'Coordinación de campo + evidencia confiable + trazabilidad operativa',
title: 'Hacé visible y trazable el trabajo que hoy ocurre fuera de la oficina.',
subtitle:
  'Diseño e implemento sistemas para coordinar equipos en terreno, capturar evidencia confiable y conectar cada visita con supervisión, auditoría y decisiones. Funciona incluso cuando la conectividad es limitada.'
```

Sustituir `execution` por:

```ts
title: 'Trabajás directo con quien entiende la operación de campo y construye el sistema',
description:
  'Integro lectura de equipos y restricciones en terreno con diseño de app, datos, integraciones y puesta en marcha. No entrego una app aislada: acompaño el flujo completo.',
  'Experiencia en captura, evidencia, auditoría y flujos operativos de extremo a extremo.',
  'Diseño offline, trazabilidad y adopción para condiciones reales del equipo en terreno.',
  'Implementación directa desde diagnóstico hasta estabilización inicial.'
]
```

- [ ] **Step 4: Normalizar voz pública de ambas configuraciones**

Reemplazar pronombres de segunda persona de `serviceLandings.ts` por voseo en todo texto visible:

```text
tu/tú → tu/vos según función gramatical
puedes → podés
tienes → tenés
quieres → querés
necesitas → necesitás
trabajas → trabajás
sabes → sabés
estás → estás
```

No cambiar nombres de campos, URLs, IDs, nombres de herramientas, valores de formulario ni términos técnicos. Validar con:

```bash
rg -n -i '\b(tú|puedes|tienes|quieres|necesitas|trabajas|sabes)\b' src/data/serviceLandings.ts
```

Expected: sin resultados en copy visible.

- [ ] **Step 5: Compilar landings**

Run:

```bash
npm run build
```

Expected: exit code `0`; `ServiceLandingConfig` acepta cambios de texto sin modificar tipos.

### Task 5: Conectar especialidades y perfil desde cada landing

**Files:**
- Modify: `src/components/templates/ServiceLanding.astro`
- Modify: `src/components/sections/RelatedServices.astro`

- [ ] **Step 1: Renderizar sección relacionada antes de contacto**

Agregar import:

```astro
import RelatedServices from '../sections/RelatedServices.astro';
```

Entre bloque FAQ y `<Contact ... />`, insertar:

```astro
<RelatedServices currentPath={config.path} />
```

Conservar `currentPath`; componente filtra servicio activo y muestra únicamente otra especialidad.

- [ ] **Step 2: Actualizar transición y tarjetas relacionadas**

En `RelatedServices.astro`, usar este encabezado:

```astro
<h2 class="section-title text-slate-950">
  Puede que tu cuello de botella esté en la otra parte de tu operación.
</h2>
<p class="section-copy text-slate-600">
  Gestión de campo organiza lo que ocurre en terreno. Automatización inteligente ordena procesos internos que reciben, transforman o activan esos datos. Revisá la otra especialidad o conocé mi enfoque antes de decidir.
</p>
```

Actualizar contenido normalizado:

```ts
'/gestion-de-operaciones-de-campo': {
  title: 'Gestión de Operaciones de Campo',
  description: 'Coordinación, captura offline, evidencia y trazabilidad para equipos que trabajan en terreno.'
},
'/automatizacion-con-ia-agentica': {
  title: 'Automatización Inteligente de Procesos',
  description: 'Procesos internos ordenados con integraciones, RPA e IA bajo control humano.'
}
```

En tarjeta de perfil, sustituir descripción y CTA:

```astro
<p class="text-slate-600 leading-relaxed">
  Conocé la experiencia, el criterio técnico y la forma de trabajo detrás de las dos especialidades.
</p>
...
Conocé mi enfoque
```

- [ ] **Step 3: Probar build y enlaces compilados**

Run:

```bash
npm run build && rg -n 'gestion-de-operaciones-de-campo|automatizacion-con-ia-agentica|/sobre-mi' dist/gestion-de-operaciones-de-campo/index.html dist/automatizacion-con-ia-agentica/index.html
```

Expected: exit code `0`; cada HTML contiene enlace a servicio alterno y `/sobre-mi`.

- [ ] **Step 4: Commit de landings y enlaces cruzados**

```bash
git add src/data/serviceLandings.ts src/components/templates/ServiceLanding.astro src/components/sections/RelatedServices.astro && git commit -m "feat: alinear especialidades y enlaces cruzados"
```

Expected: commit no incluye cambios de raíz ni archivos preexistentes.

### Task 6: Unificar navegación, perfil y SEO institucional

**Files:**
- Modify: `src/data/site.ts:3-25`
- Modify: `src/pages/sobre-mi.astro:54-104`
- Modify: cualquier texto público detectado por búsqueda en `src/`.

- [ ] **Step 1: Actualizar descripción institucional y menú**

En `siteConfig`:

```ts
description:
  'Héctor Guerra es consultor e implementador de operaciones, datos y automatización aplicada. Especialidades en gestión de operaciones de campo y automatización inteligente de procesos.'
```

En `serviceLinks`:

```ts
description: 'Coordinación, captura offline, evidencia y trazabilidad para equipos que trabajan en terreno.'
```

```ts
description: 'Orden e integración de procesos internos con automatización, RPA e IA bajo control humano.'
```

- [ ] **Step 2: Corregir oferta y voz en perfil**

En `sobre-mi.astro`, cambiar CTA:

```astro
Ver las dos especialidades
```

Actualizar hero para usar voseo y promesa consistente:

```astro
Soy Héctor Guerra. Diseño e implemento <strong class="text-white">operaciones de campo y automatización inteligente de procesos</strong> para pymes con procesos críticos que no pueden fallar.
```

Cambiar descripción SEO a:

```astro
description="Héctor Guerra diseña e implementa operaciones de campo y automatización inteligente de procesos para pymes. Sin intermediarios, con +5M registros procesados en producción."
```

- [ ] **Step 3: Auditar contradicciones y voseo en todo texto público**

Run:

```bash
rg -n -i 'tres servicios|tres líneas de servicio|tres lineas de servicio' src
rg -n -i '\b(tú|puedes|tienes|quieres|necesitas|trabajas|sabes)\b' src
```

Expected: primer comando sin resultados. Segundo sin resultados en contenido dirigido al visitante; no modificar comentarios, tipos, URLs, datos técnicos ni texto de terceros si existiera.

- [ ] **Step 4: Compilar metadata final**

Run:

```bash
npm run build
```

Expected: exit code `0`; cada página conserva title, description y JSON-LD válidos.

- [ ] **Step 5: Commit de consistencia institucional**

```bash
git add src/data/site.ts src/pages/sobre-mi.astro && git commit -m "fix: unificar oferta y voz institucional"
```

Expected: commit contiene solo navegación, SEO y perfil.

### Task 7: Verificación funcional, responsive y accesible

**Files:**
- Verify: `src/pages/index.astro`
- Verify: `src/pages/gestion-de-operaciones-de-campo.astro`
- Verify: `src/pages/automatizacion-con-ia-agentica.astro`

- [ ] **Step 1: Consultar helper de servidor antes de prueba de navegador**

Run:

```bash
python /home/hguerra/.agents/skills/webapp-testing/scripts/with_server.py --help
```

Expected: exit code `0`; usar helper sin leer o modificar su código.

- [ ] **Step 2: Ejecutar verificación visual desktop y móvil**

Iniciar `npm run dev` con helper y abrir `/`, `/gestion-de-operaciones-de-campo` y `/automatizacion-con-ia-agentica` en viewports `1440x900` y `390x844`.

Verificar:

```text
/ muestra un solo H1 personal, #enfoque antes de #servicios y exactamente dos tarjetas.
/ “Conocé mi enfoque” llega a #enfoque; “Ver especialidades” llega a #servicios.
/gestion-de-operaciones-de-campo mantiene promesa de campo, presenta enlace a automatización y perfil antes de contacto.
/automatizacion-con-ia-agentica presenta automatización de procesos; RPA e IA se explican como capacidades, no como promesa única.
Las tres páginas no recortan CTAs ni generan scroll horizontal en móvil.
```

- [ ] **Step 3: Validar navegación por teclado y estructura semántica**

En cada página, usar `Tab`, `Enter`, `Space` y `Escape` para verificar foco visible, menú y CTAs. Confirmar un único `h1`, secuencia `h2`/`h3`, enlaces con texto único y controles nativos sin ARIA redundante.

- [ ] **Step 4: Ejecutar verificación de producción y diff**

Run:

```bash
npm run build && git diff --check && git status --short && git log --oneline --decorate -5
```

Expected: build exit code `0`, `git diff --check` sin salida, solo archivos previstos y commits temáticos. No incluir `.gitignore` ni documentos preexistentes no relacionados.

### Task 8: Revisiones independientes y cierre

**Files:**
- Review: diff completo contra `main`

- [ ] **Step 1: Revisión de especificación**

Enviar diff y criterios aprobados a revisor independiente. Bloquear si falta perfil-raíz, dos especialidades, voseo, URL conservada, mezcla correcta RPA/IA o enlaces cruzados.

- [ ] **Step 2: Revisión de calidad**

Tras `SPECIFICATION: PASS`, enviar diff completo a revisor independiente para revisar exactitud de enlaces, SEO/schema, accesibilidad, regresiones responsive, contenido no verificable y preservación de cambios ajenos.

- [ ] **Step 3: Verificación fresca después de correcciones**

Run:

```bash
npm run build && git diff --check && git status --short
```

Expected: exit code `0`, sin whitespace errors, sin archivos ajenos incluidos.
