# Product Marketing Context

*Last updated: 2026-04-05*
*Status: V1 draft auto-generated from codebase (`src/data/*`, landing pages). Needs human review — see "Gaps to fill" at the bottom.*

## Product Overview
**One-liner:** Consultoría e implementación one-person-shop que convierte problemas operativos complejos en soluciones digitales claras, adoptables y útiles para equipos reales.

**What it does:** HGuerra (Héctor Guerra) diagnostica la operación, define el flujo correcto, e implementa la solución end-to-end en tres frentes: (1) Gestión de Operaciones de Campo con app móvil offline + dashboard web + trazabilidad, (2) Automatización con IA Agéntica usando agentes, orquestación e integraciones con supervisión humana, y (3) Automatización de Procesos con pipelines de datos, integraciones y ETL/ELT confiable. Trabajo directo con el cliente, sin intermediarios ni capas de consultora.

**Product category:** Consultoría + implementación técnica aplicada (operaciones, automatización, IA agéntica, ingeniería de datos). No es una plataforma SaaS; es servicio profesional especializado con entregables de software a medida.

**Product type:** Servicio profesional (consultoría boutique / comerciante individual). No es producto empaquetado.

**Business model:** Proyectos por implementación — diagnóstico, diseño, implementación y acompañamiento de adopción. Tres líneas de servicio principales conectadas por el mismo enfoque de ingeniería aplicada.

## Target Audience
**Target companies:** Empresas con operación en terreno o procesos críticos invisibles, principalmente en:
- Agricultura y agroindustria
- Maquila y manufactura
- Minería
- Energía / utilities
- Forestal
- Cualquier sector con equipos de campo, alarmas/series de tiempo que disparan trabajo, o procesos atrapados entre Excel y correos.

Mercado geográfico: Hispanohablante (locale `es_HN`, Honduras / LatAm implícito por el contenido). [A confirmar: ¿solo LatAm o también España/remoto global?]

**Decision-makers:**
- Gerentes de operaciones / Coordinadores de operaciones
- Jefes de línea / Supervisores de calidad (manufactura)
- Jefes de SSMA (minería)
- Gerentes técnicos / de TI con responsabilidad operativa
- Dueños o directores de empresas medianas que toman decisiones de tecnología directamente

**Primary use case:** Resolver un cuello de botella operativo donde el equipo ya intentó planillas, WhatsApp, Excel o una herramienta genérica y no funcionó — y necesita algo aterrizado a su flujo, que realmente se use, sin un proyecto de 6+ meses.

**Jobs to be done:**
- "Quiero saber qué pasa en mi operación de campo en tiempo real, sin tener que llamar a nadie"
- "Quiero automatizar decisiones repetitivas sin perder control ni trazabilidad"
- "Quiero que mi proceso crítico deje de depender de una persona clave y de copiar/pegar entre sistemas"
- "Quiero bajar el problema a una ruta útil en semanas, no a un backlog de meses"

**Use cases:**
- App móvil offline para inspectores, operarios, brigadistas, auditores y técnicos en terreno
- Órdenes de servicio generadas automáticamente desde alarmas / series de tiempo
- Dashboard con KPIs operativos (MTTR, cobertura, cumplimiento) en tiempo real
- Trazabilidad auditable con GPS, fotos, timestamp y firma digital
- Agentes IA con LangGraph + n8n para triage de tickets, clasificación, decisiones multi-paso con human-in-the-loop
- ETL/ELT con Airflow, validación de calidad de datos, orquestación de procesos críticos
- Integración con ERP, SAP, CRM y sistemas legados

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Gerente de Operaciones (Champion / Decision Maker) | Visibilidad, reducción de errores, control operativo | No ve qué pasa en campo; los reportes llegan tarde y la operación depende de personas clave | Dashboard en vivo + procesos estandarizados + menos dependencia de individuos |
| Supervisor / Jefe de línea (User) | Asignaciones claras, seguimiento, cumplimiento de estándares | Pierde tiempo llamando, reasignando y consolidando papel y WhatsApp | Flujo asignación→ejecución→cierre ordenado y trazable |
| Operario / Técnico / Inspector (End User) | Herramienta que no estorbe, funcione en terreno, no requiera capacitación larga | Apps complicadas, sin señal, sin instrucciones claras | App simple, 100% offline, captura guiada, menos errores |
| Gerente de TI / CTO (Technical Influencer) | Integración limpia, seguridad, arquitectura operable | Pilotos de IA/automatización que mueren al salir del notebook; soluciones que rompen el stack | Arquitectura GCP operable (Cloud Run, Pub/Sub, BigQuery), APIs, SSO, observabilidad |
| Director / Dueño (Financial Buyer) | ROI rápido, implementación real, no proyecto eterno | Ya fue quemado por consultoras grandes con entregables vacíos | Implementación directa sin intermediarios, en semanas, con resultados medibles |

## Problems & Pain Points
**Core problem:** Operaciones críticas (de campo o de datos) funcionan con planillas de papel, WhatsApp, Excel, correos y scripts sueltos. Nadie ve qué pasa en tiempo real, los datos llegan tarde o inconsistentes, y cada intento de tecnología anterior ofreció una herramienta genérica sin aterrizar al flujo real.

**Why alternatives fall short:**
- Soluciones SaaS genéricas de formularios no contemplan trazabilidad con evidencia ni offline real
- Consultoras grandes proponen proyectos de 6+ meses, caros, con capas de intermediarios
- Demos que se ven bien pero no operan en el mundo real
- Pilotos de IA que nunca llegan a producción porque no tienen despliegue, seguridad ni monitoreo
- Automatizaciones que mueven datos pero no validan calidad — propagan errores

**What it costs them:**
- Horas/días perdidos consolidando información manualmente
- Errores de captura que solo se detectan tarde
- Decisiones tardías por falta de flujo confiable
- Dependencia de personas clave que se vuelve riesgo operativo
- Hallazgos en auditorías externas por falta de trazabilidad
- Retrabajo cada vez que un sistema falla silenciosamente

**Emotional tension:** Frustración por haber intentado antes y no haber resultado; miedo legítimo a automatizar sin control ("¿y si la IA se equivoca?"); cansancio de discusiones sobre "cuál versión del dato es la correcta"; desconfianza de proveedores que prometen demos y entregan vaporware.

## Competitive Landscape
**Direct:** Plataformas SaaS de formularios móviles y field service (tipo ProntoForms, Fulcrum, Jotform, GoCanvas). Fallan porque: son genéricas, no se aterrizan al flujo operativo específico, la trazabilidad con evidencia es débil, la integración con ERP/SAP requiere más trabajo del anunciado, y el cliente queda solo con la herramienta.

**Secondary:** Consultoras grandes de transformación digital / integradores tradicionales. Fallan porque: proyectos de 6+ meses, caros, con varias capas de gente, foco en entregables de demo antes que operación real, poca continuidad en adopción.

**Indirect:** El status quo — hojas de Excel, WhatsApp, planillas de papel, scripts de ETL en cron, pilotos de IA en notebooks. Falla porque: "funciona" hasta que se rompe o hasta que la persona clave se va; no escala; oculta el problema en lugar de resolverlo.

También indirecto: Low-code/no-code generalista (Zapier, Make sin diseño de proceso). Falla porque: sin arquitectura de datos y orquestación real, solo traslada el problema.

## Differentiation
**Key differentiators:**
- One-person-shop especialista: trabajas directamente con el implementador, sin intermediarios
- Diagnóstico + diseño + implementación + acompañamiento en la misma conversación
- +10 años de experiencia real en operaciones de campo + formación de ingeniería eléctrica + maestría en ingeniería de la computación
- +5M de registros procesados en implementaciones reales (no slides)
- Offline-first real, no "offline parcial"
- Trazabilidad con evidencia inmutable (GPS + fotos + timestamp + firma) como default, no opción
- Arquitectura GCP operable para producción (no pilotos en notebook)
- Implementación en semanas, no meses

**How we do it differently:** Parto del problema operativo, no de una demo cerrada. Bajo la complejidad a una propuesta clara de proceso, experiencia, automatización y nivel de implementación. Acompaño la adopción hasta que el equipo realmente lo usa.

**Why that's better:** El cliente no queda solo con una herramienta. Queda con un sistema que ya entró en operación, con un equipo que lo usa, y con un responsable técnico directo que entiende todo el stack.

**Why customers choose us:** Porque ya se quemaron con lo genérico o con consultoras grandes, y quieren a alguien que entienda la operación, sepa programar de verdad, y se haga cargo hasta el final.

## Objections

| Objection | Response |
|-----------|----------|
| "Eres una sola persona, ¿qué pasa si te pasa algo?" | Trabajo con arquitectura documentada y stack estándar (GCP, Astro, Cloud Run, Airflow, LangGraph, n8n). El código y los procesos quedan operables por cualquier equipo técnico competente. Prefiero ser honesto sobre el alcance antes de inflar el equipo. |
| "Necesitamos una marca grande por tema de compliance / respaldo" | Si ese es el driver principal, probablemente no soy el mejor fit — está bien. Pero si el driver real es que el proyecto funcione, mi track record de +5M registros y +10 años en sectores críticos habla por sí solo. |
| "¿Cuánto tiempo toma implementar?" | Típicamente 2-3 semanas desde el primer contacto hasta operación productiva, incluyendo configuración, capacitación y acompañamiento en las primeras operaciones en vivo. |
| "¿Se integra con nuestro ERP/SAP?" | Sí, con APIs REST e integraciones personalizadas. Lo diseñamos en el diagnóstico inicial. |
| "¿Y si automatizamos algo crítico y la IA se equivoca?" | Todo flujo agéntico se diseña con guardrails, aprobaciones human-in-the-loop, rutas de fallback y observabilidad end-to-end. La IA no ejecuta acciones sensibles sin supervisión cuando el caso lo requiere. |

**Anti-persona:**
- Equipos que buscan una solución genérica sin personalización
- Operaciones 100% indoor que no necesitan offline
- Proyectos que toman 6+ meses por diseño
- Iniciativas que solo buscan "verse bien en demo" sin foco en adopción real
- Clientes sin interés en trazabilidad, control o mejora medible

## Switching Dynamics
**Push (lo que los aleja del status quo):**
- Planillas de papel que se pierden
- Fotos regadas en WhatsApp sin contexto
- Reportes que llegan días después
- Pilotos de IA que nunca salieron del notebook
- Consultoras grandes que cobraron mucho y entregaron poco
- Alguien clave renunció y se llevó el conocimiento del proceso

**Pull (lo que los atrae a HGuerra):**
- Posibilidad de hablar directamente con el implementador
- Implementación en semanas, no meses
- Enfoque que empieza por entender el problema, no por vender una herramienta
- Stack técnico sólido con trazabilidad y operabilidad real
- Experiencia demostrable en sectores con operación crítica

**Habit (lo que los mantiene estancados):**
- "Así siempre lo hemos hecho"
- El Excel ya está armado y todos saben usarlo
- Miedo a romper lo que (a medias) funciona
- Resistencia del equipo de campo a una nueva herramienta

**Anxiety (lo que los preocupa al cambiar):**
- "¿Y si el operario no lo usa?"
- "¿Y si no se integra con SAP?"
- "¿Y si pierdo datos en la migración?"
- "¿Y si esta persona desaparece a mitad del proyecto?"
- "¿Y si la IA se equivoca en una decisión crítica?"

## Customer Language
**How they describe the problem:**
- "Los operarios todavía usan papel"
- "Las fotos se pierden en WhatsApp"
- "Los datos llegan días después"
- "No tengo visibilidad de lo que pasa en campo"
- "Nadie sabe dónde se rompió el flujo"
- "Cada área tiene una versión distinta del dato"
- "Dependemos demasiado de [persona clave]"
- "La IA está, pero no hace nada útil todavía"
- "Probamos con una herramienta genérica y no cuajó"

**How they describe us:** [A capturar de clientes reales — gap clave]

**Words to use:**
- "Aterrizar", "bajar a", "entra en operación", "se usa de verdad"
- "Trazabilidad", "evidencia", "auditable"
- "Offline-first", "zonas sin cobertura"
- "Con control", "con guardrails", "human-in-the-loop"
- "Flujo operativo", "cuello de botella", "adopción"
- "Implementación directa", "sin intermediarios"
- "En semanas, no meses"
- "Operable en producción", "no un piloto"

**Words to avoid:**
- "Transformación digital" (vacío, suena a consultora grande)
- "Solución end-to-end" sin sustancia
- "Revolucionario", "disruptivo"
- "Magia de la IA", "IA que lo resuelve todo"
- "Plataforma" cuando sugiere producto empaquetado genérico
- Anglicismos innecesarios cuando existe término en español claro

**Glossary:**

| Term | Meaning |
|------|---------|
| Operación de campo | Trabajo ejecutado por personas fuera de oficina: inspectores, técnicos, brigadistas, auditores, operarios |
| Offline-first | App móvil que funciona 100% sin conexión y sincroniza al detectar red |
| Orden de servicio | Unidad de trabajo asignada a un operario (manual o automática desde alarma) |
| Series de tiempo | Datos secuenciales (sensores, métricas) que disparan alarmas y eventos |
| IA agéntica | Agentes con estado, memoria y tool-calling que ejecutan decisiones multi-paso, no solo responden |
| Human-in-the-loop | Puntos del flujo donde una persona aprueba o corrige antes de que el agente ejecute |
| Guardrails | Reglas y controles que limitan qué puede hacer un agente y cuándo escalar |
| LangGraph | Framework para agentes con control de flujo explícito |
| n8n | Orquestador de integraciones y workflows |
| Trazabilidad | Registro inmutable de quién hizo qué, cuándo y dónde |
| MTTR | Mean Time To Repair — tiempo medio de resolución |

## Brand Voice
**Tone:** Profesional, directo, honesto, sin hype. Habla de ingeniero a cliente inteligente. Evita el lenguaje de marketing inflado.

**Style:** Conversacional pero técnico cuando hace falta. Usa verbos concretos ("diseño", "implemento", "acompaño") en primera persona. Nombra el problema antes de ofrecer la solución. Cita herramientas específicas (`LangGraph`, `n8n`, `Airflow`, `Cloud Run`) en backticks porque el lector técnico los reconoce.

**Personality:** Pragmático, experimentado, directo, honesto, humilde pero confiado. 5 adjetivos: aterrizado, riguroso, directo, confiable, operable.

## Proof Points
**Metrics:**
- +10 años diseñando productos y operaciones digitales
- +5M registros procesados en implementaciones reales
- Implementaciones en semanas (2-3 semanas típicas)
- -60% errores de captura (según `servicios.ts`)
- Tiempo de respuesta de horas a minutos con órdenes automáticas

**Customers:** [Gap crítico — no hay nombres, logos ni casos públicos en el sitio actual. Recomendación: agregar 2-3 casos reales con permiso del cliente.]

**Testimonials:** [Gap crítico — no hay testimonios en el codebase.]

**Value themes:**

| Theme | Proof |
|-------|-------|
| "Se usa de verdad, no solo se entrega" | Metodología de 3 pasos (diagnóstico → definición → implementación con acompañamiento) |
| "Implementación en semanas, no meses" | 2-3 semanas típicas documentadas en FAQ |
| "Trazabilidad real, no check-the-box" | GPS + fotos + timestamp + firma digital como default |
| "Offline real, no parcial" | Captura completa sin red, sincronización sin pérdida ni duplicados |
| "Ingeniería aplicada, no demos" | Stack de producción GCP: Cloud Run, Pub/Sub, BigQuery, Airflow, LangGraph |
| "Sin intermediarios" | Comerciante individual, trabajas directamente con el implementador |

## Goals
**Business goal:** Generar conversaciones calificadas con empresas que tengan operación crítica (campo o procesos) y presupuesto/autoridad para implementar en semanas.

**Conversion action:** Contacto a través de `/contacto` (formulario EmailJS + WhatsApp directo). El formulario se adapta según el servicio de origen (operaciones de campo, IA agéntica, automatización de procesos) para capturar contexto del problema.

**Current metrics:** [Gap — no hay tracking analítico documentado en el codebase. Recomendación: confirmar si existe GA4 / tracking y definir baseline.]

---

## Gaps to fill (human review needed)

Esta V1 se armó leyendo el código. Las siguientes áreas necesitan tu confirmación o información que el repo no tiene:

1. **Mercado geográfico real** — ¿Solo LatAm? ¿Honduras principalmente? ¿Atiendes España / remoto global?
2. **Pricing / rangos de proyecto** — No aparece en el sitio. ¿Quieres capturarlo aquí o mantenerlo privado?
3. **Customer language verbatim** — ¿Qué frases exactas has oído de clientes reales al describir el problema? ¿Y al describirte a ti?
4. **Casos / testimonios / logos** — No hay ninguno en el código. ¿Tienes clientes que te den permiso de nombrar?
5. **Anti-persona más afilada** — Más allá de lo genérico, ¿has tenido algún tipo de cliente donde claramente NO fue fit y quisieras filtrarlos antes?
6. **Tu historia / por qué haces esto** — El "sobre mí" habla del enfoque técnico, pero no de la motivación personal. ¿Hay un "por qué" que quieras capturar?
7. **Métricas actuales del sitio** — ¿Conversiones, tráfico, fuentes principales?
8. **Competidores que mencionan clientes por nombre** — ¿Cuáles plataformas SaaS o consultoras escuchas nombrar en tus conversaciones de venta?
9. **Objeción más dolorosa** — ¿Cuál es la objeción que te sigue costando responder bien?
