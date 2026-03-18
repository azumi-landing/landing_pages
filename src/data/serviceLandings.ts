import type { ServiceLandingConfig } from '../types/serviceLanding';
import { agenticAutomationTheme, processAutomationTheme } from './serviceThemes';

export const agenticAutomationLanding: ServiceLandingConfig = {
  seoTitle: 'HGuerra | Automatización con IA Agéntica',
  seoDescription: 'Diseño agentes, flujos orquestados y automatización inteligente conectada a tus sistemas con LangGraph, n8n, ML aplicado y servicios de GCP.',
  path: '/automatizacion-con-ia-agentica',
  theme: agenticAutomationTheme,
  badge: 'Agentes + Orquestación + Trazabilidad operativa',
  title: 'Automatiza decisiones y flujos operativos con IA agéntica conectada a tus sistemas',
  subtitle:
    'Diseño agentes que leen contexto, consultan datos, usan herramientas y ejecutan acciones con supervisión humana cuando hace falta. No vendo demos aisladas: construyo automatización útil para operaciones y equipos de TI.',
  benefits: [
    'Menos trabajo manual para priorizar, clasificar y responder',
    'Decisiones automatizadas con trazabilidad y control',
    'Integración real con tus fuentes de datos, APIs y workflows'
  ],
  metrics: [
    { value: 'De lectura manual a flujo orquestado', label: 'decisiones repetitivas automatizadas' },
    { value: 'Contexto + herramientas + guardrails', label: 'agentes operando con control' },
    { value: 'Observabilidad end-to-end', label: 'cada acción queda trazada' }
  ],
  primaryCtaLabel: 'Explorar capacidades',
  primaryCtaHref: '#capacidades',
  secondaryCtaLabel: 'Ver casos de aplicación',
  secondaryCtaHref: '#casos-aplicaciones',
  problemTitle: '¿Tu operación ya usa IA, pero todavía depende de demasiada intervención manual?',
  problemSubtitle:
    'El problema no suele ser “falta de IA”. El problema es que la IA queda aislada del proceso: sin contexto, sin herramientas, sin trazabilidad y sin capacidad real de ejecutar decisiones útiles.',
  problemCards: [
    {
      icon: 'fa-envelope-open-text',
      title: 'Correos, tickets y solicitudes que alguien debe leer uno por uno',
      description: 'La clasificación y priorización sigue siendo manual, lenta y dependiente de la experiencia de pocas personas.'
    },
    {
      icon: 'fa-comments',
      title: 'Prompts sueltos sin conexión con la operación',
      description: 'El equipo prueba IA en chats o copilots, pero nada queda integrado al flujo real ni genera acciones confiables.'
    },
    {
      icon: 'fa-triangle-exclamation',
      title: 'Alertas que solo generan ruido',
      description: 'Hay eventos, anomalías o incidencias, pero no un mecanismo claro que interprete contexto y active el siguiente paso.'
    },
    {
      icon: 'fa-diagram-project',
      title: 'Procesos que requieren varias decisiones seguidas',
      description: 'Reglas simples ya no alcanzan cuando hay que consultar fuentes distintas, evaluar condiciones y decidir con contexto.'
    },
    {
      icon: 'fa-user-clock',
      title: 'Analistas ocupados en tareas repetitivas',
      description: 'El tiempo valioso se consume en revisar, resumir, copiar, etiquetar y escalar información entre herramientas.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Temor legítimo a automatizar sin control',
      description: 'Si no hay guardrails, aprobaciones y observabilidad, cualquier automatización inteligente se vuelve un riesgo operativo.'
    }
  ],
  riskTitle: 'El riesgo de improvisar con IA',
  riskDescription:
    'Cuando la IA se conecta sin diseño de proceso, termina generando más fricción: respuestas inconsistentes, acciones no auditables, dependencias frágiles y desconfianza del equipo. La oportunidad no está en “usar IA”, sino en orquestarla bien.',
  capabilitiesTitle: 'Capacidades que incluyo en una solución de IA agéntica',
  capabilitiesSubtitle:
    'Combino agentes, automatización, ML aplicado e integración para que la IA haga trabajo real dentro de tu operación y no solo produzca texto.',
  capabilities: [
    {
      icon: 'fa-robot',
      title: 'Agentes con estado y control de flujo',
      pain: 'Los flujos se rompen cuando una sola llamada al modelo no basta para resolver una tarea compleja.',
      solution: 'Diseño agentes con `LangGraph` para manejar contexto, memoria de trabajo, decisiones multietapa y rutas alternativas.',
      outcome: 'La automatización deja de depender de prompts lineales y puede operar como un proceso con lógica real.',
      bullets: [
        'Estados y transiciones explícitas',
        'Tool-calling y decisiones condicionales',
        'Rutas de fallback y escalamiento',
        'Memoria acotada por caso o sesión'
      ]
    },
    {
      icon: 'fa-plug-circle-bolt',
      title: 'Orquestación e integraciones con n8n',
      pain: 'La IA no genera valor si no puede leer eventos, llamar APIs y activar acciones en otros sistemas.',
      solution: 'Uso `n8n` para conectar formularios, CRMs, correos, ERPs, bases de datos y servicios internos con los agentes.',
      outcome: 'Los agentes pasan de “responder” a ejecutar pasos concretos dentro del proceso.',
      bullets: [
        'Triggers por correo, webhook o scheduler',
        'Conexión con APIs y servicios SaaS',
        'Normalización y enrutamiento de datos',
        'Automatizaciones híbridas con reglas + IA'
      ]
    },
    {
      icon: 'fa-brain',
      title: 'ML aplicado a clasificación, priorización y decisión asistida',
      pain: 'No todo debe resolverse con un LLM; muchas decisiones mejoran con modelos especializados y señales históricas.',
      solution: 'Incorporo ML para scoring, clasificación, detección de anomalías, extracción o recomendación dentro del flujo del agente.',
      outcome: 'La IA agéntica se vuelve más precisa y útil porque combina lenguaje, reglas y modelos orientados al problema.',
      bullets: [
        'Clasificación automática de solicitudes',
        'Scoring de prioridad o riesgo',
        'Detección de patrones anómalos',
        'Extracción estructurada desde texto o documentos'
      ]
    },
    {
      icon: 'fa-database',
      title: 'Contexto vivo desde tus datos y documentos',
      pain: 'Un agente sin contexto termina inventando, preguntando de más o actuando sin información suficiente.',
      solution: 'Conecto el flujo a bases operativas, knowledge bases, logs, documentos y métricas para que el agente decida con evidencia.',
      outcome: 'Las respuestas y acciones nacen del estado real del negocio, no de contexto genérico.',
      bullets: [
        'Consulta de Cloud SQL, BigQuery o Firestore',
        'Recuperación de documentos relevantes',
        'Enriquecimiento por entidad, cliente o incidente',
        'Versionado de fuentes y contexto'
      ]
    },
    {
      icon: 'fa-user-check',
      title: 'Human-in-the-loop y aprobaciones',
      pain: 'Automatizar sin supervisión es inviable cuando hay impacto comercial, operativo o reputacional.',
      solution: 'Diseño puntos de revisión humana para excepciones, aprobaciones o decisiones de alto riesgo.',
      outcome: 'El equipo gana velocidad sin perder control ni responsabilidad sobre el proceso.',
      bullets: [
        'Aprobaciones antes de ejecutar acciones sensibles',
        'Bandejas de revisión para excepciones',
        'Escalamiento a analista o supervisor',
        'Reglas para cuándo intervenir y cuándo no'
      ]
    },
    {
      icon: 'fa-cloud',
      title: 'Arquitectura operable en GCP',
      pain: 'Muchos pilotos de IA mueren al salir del notebook porque no tienen despliegue, seguridad ni monitoreo.',
      solution: 'Despliego agentes y servicios en `Cloud Run`, eventos en `Pub/Sub`, secretos en `Secret Manager`, observabilidad en `Cloud Logging` y analítica en `BigQuery`.',
      outcome: 'La solución queda lista para operar en producción con trazabilidad, seguridad y capacidad de evolucionar.',
      bullets: [
        'Cloud Run para servicios y workers',
        'Pub/Sub para eventos y colas',
        'Secret Manager y control de acceso',
        'BigQuery y Logging para auditoría y análisis'
      ]
    }
  ],
  workflowTitle: 'Cómo aterrizo la IA agéntica en un proceso operativo real',
  workflowSubtitle:
    'La lógica no empieza en el modelo. Empieza en el flujo: evento, contexto, decisión, ejecución y trazabilidad.',
  workflow: [
    {
      id: 'evento',
      title: '1. EVENTO O SOLICITUD DE ENTRADA',
      description: 'Correo, ticket, alerta, formulario o webhook dispara el flujo',
      level: 1,
      highlight: 'blue',
      icon: 'fa-inbox',
      items: [
        { icon: 'fa-envelope', text: 'Correo o ticket recibido' },
        { icon: 'fa-bell', text: 'Alerta o evento operativo' },
        { icon: 'fa-file-import', text: 'Documento o formulario nuevo' }
      ]
    },
    {
      id: 'contexto',
      title: '2. ENRIQUECIMIENTO CON CONTEXTO',
      description: 'El agente consulta datos, historial, reglas y documentos relevantes',
      level: 2,
      highlight: 'green',
      icon: 'fa-database',
      items: [
        { icon: 'fa-database', text: 'Consulta bases y APIs' },
        { icon: 'fa-book', text: 'Recupera documentación' },
        { icon: 'fa-clock-rotate-left', text: 'Usa historial del caso' },
        { icon: 'fa-tags', text: 'Agrega scoring o clasificación ML' }
      ]
    },
    {
      id: 'decision',
      title: '3. DECISIÓN DEL AGENTE',
      description: 'LangGraph coordina el razonamiento y decide qué herramienta o ruta usar',
      level: 3,
      highlight: 'yellow',
      icon: 'fa-robot',
      items: [
        { icon: 'fa-sitemap', text: 'Evalúa condiciones y rutas' },
        { icon: 'fa-toolbox', text: 'Selecciona herramienta adecuada' },
        { icon: 'fa-shield-halved', text: 'Aplica guardrails' },
        { icon: 'fa-user-check', text: 'Escala a humano si aplica' }
      ]
    },
    {
      id: 'ejecucion',
      title: '4. EJECUCIÓN E INTEGRACIÓN',
      description: 'n8n y servicios backend activan acciones sobre sistemas y equipos',
      level: 4,
      highlight: 'purple',
      icon: 'fa-gears',
      items: [
        { icon: 'fa-arrows-rotate', text: 'Actualiza estados y registros' },
        { icon: 'fa-paper-plane', text: 'Envía respuesta o notificación' },
        { icon: 'fa-list-check', text: 'Crea tareas u órdenes' },
        { icon: 'fa-plug', text: 'Llama APIs internas o SaaS' }
      ]
    },
    {
      id: 'auditoria',
      title: '5. OBSERVABILIDAD Y MEJORA',
      description: 'Cada paso queda trazado para auditoría, análisis y optimización',
      level: 5,
      highlight: 'orange',
      icon: 'fa-chart-line',
      items: [
        { icon: 'fa-file-lines', text: 'Logs por acción y decisión' },
        { icon: 'fa-chart-column', text: 'Métricas de desempeño' },
        { icon: 'fa-magnifying-glass', text: 'Análisis de errores y excepciones' },
        { icon: 'fa-repeat', text: 'Mejora continua del flujo' }
      ]
    }
  ],
  casesTitle: 'Dónde aporta más valor este enfoque',
  casesSubtitle:
    'Aplicaciones típicas para operaciones y TI donde un agente con contexto resuelve mejor que un script lineal o un prompt aislado.',
  cases: [
    {
      icon: 'fa-triangle-exclamation',
      label: 'Incidencias',
      title: 'Priorización y enrutamiento automático de incidentes',
      challenge: 'Los equipos reciben solicitudes mezcladas, con urgencias mal clasificadas y demasiadas revisiones manuales.',
      approach: 'Agente que lee el contexto del caso, clasifica prioridad, detecta riesgo, propone respuesta y crea la siguiente acción en el sistema.',
      result: 'Menos tiempo perdido triageando y mejor uso del criterio humano en los casos que sí requieren intervención.',
      stack: 'LangGraph + n8n + Cloud Run + Pub/Sub + Cloud SQL'
    },
    {
      icon: 'fa-file-lines',
      label: 'Documentos',
      title: 'Lectura estructurada de correos, archivos y solicitudes',
      challenge: 'Documentos y mensajes llegan en formatos distintos y terminan obligando a capturar datos manualmente.',
      approach: 'ML + LLM para extraer información, validar campos, enriquecer con contexto y activar flujos posteriores.',
      result: 'La información entra más rápido al proceso y con menos fricción para el equipo operativo.',
      stack: 'Vertex AI/Gemini + Cloud Run + Firestore + n8n'
    },
    {
      icon: 'fa-satellite-dish',
      label: 'Monitoreo',
      title: 'Alertas accionables, no solo notificaciones',
      challenge: 'Las anomalías llegan como ruido y requieren a alguien que interprete qué hacer y a quién involucrar.',
      approach: 'Agente que consume eventos, consulta historial, aplica scoring y decide si abrir tarea, pedir validación o responder automáticamente.',
      result: 'Las alertas se convierten en flujo operativo con contexto y trazabilidad.',
      stack: 'Pub/Sub + BigQuery + ML scoring + LangGraph + Cloud Functions'
    }
  ],
  stackTitle: 'Stack y arquitectura que aplico para agentic automation',
  stackSubtitle:
    'La elección tecnológica depende del caso, pero la arquitectura siempre prioriza control, integración, trazabilidad y operabilidad.',
  stackGroups: [
    {
      icon: 'fa-robot',
      title: 'Capa de agentes',
      description: 'Motor de decisión y orquestación del flujo inteligente.',
      items: [
        'LangGraph para estados, rutas y tool-calling',
        'Vertex AI / Gemini cuando el caso pide LLM gestionado',
        'Prompts y políticas acopladas al proceso, no aisladas'
      ]
    },
    {
      icon: 'fa-link',
      title: 'Capa de automatización',
      description: 'Conectores, triggers y ejecución coordinada entre sistemas.',
      items: [
        'n8n para flujos, triggers e integraciones',
        'Webhooks, APIs REST y colas de eventos',
        'Aprobaciones humanas y automatizaciones híbridas'
      ]
    },
    {
      icon: 'fa-brain',
      title: 'ML aplicado',
      description: 'Modelos complementarios para clasificación, scoring y detección.',
      items: [
        'Clasificación y priorización de casos',
        'Extracción estructurada desde texto',
        'Detección de anomalías para activar agentes'
      ]
    },
    {
      icon: 'fa-cloud',
      title: 'Servicios GCP',
      description: 'Base de despliegue, eventos, datos y observabilidad.',
      items: [
        'Cloud Run, Cloud Functions y Pub/Sub',
        'Cloud SQL, Firestore y BigQuery',
        'Secret Manager, Cloud Logging y Cloud Storage'
      ]
    }
  ],
  differentiationTitle: '¿Qué hace útil esta propuesta frente a otras aproximaciones de IA?',
  differentiationSubtitle:
    'La diferencia no está en “usar modelos”. Está en integrar agentes al proceso con control operativo y diseño de producto.',
  differentiators: [
    {
      icon: 'fa-route',
      title: 'No diseño demos; diseño flujos',
      subtitle: 'El punto de partida es el proceso',
      description: 'La automatización se define a partir de decisiones, dependencias, excepciones y responsables reales.',
      highlight: 'La IA queda acoplada a una operación concreta'
    },
    {
      icon: 'fa-eye',
      title: 'Observabilidad desde el inicio',
      subtitle: 'Cada decisión se puede revisar',
      description: 'Logs, métricas, rutas y excepciones quedan visibles para poder auditar, mejorar y confiar en la solución.',
      highlight: 'Sin caja negra operativa'
    },
    {
      icon: 'fa-user-shield',
      title: 'Control humano donde sí importa',
      subtitle: 'Automatización con guardrails',
      description: 'No todo debe ejecutarse sin revisión. Defino puntos de aprobación según riesgo y costo de error.',
      highlight: 'Velocidad sin perder control'
    },
    {
      icon: 'fa-plug-circle-check',
      title: 'Integración real con sistemas',
      subtitle: 'No se queda en un chat',
      description: 'Los agentes leen y escriben en tus herramientas, disparan flujos y devuelven resultados útiles al negocio.',
      highlight: 'La IA termina trabajo, no solo responde'
    }
  ],
  notIdealTitle: 'Para quién NO es la mejor opción',
  notIdealIntro: 'Esta línea no es la mejor elección si buscas lo siguiente:',
  notIdealItems: [
    'Un chatbot genérico sin integración con tus procesos',
    'Automatizar decisiones sensibles sin revisión ni trazabilidad',
    'Un piloto de IA sin intención de llevarlo a operación',
    'Resolver un problema que todavía puede cubrirse mejor con reglas simples'
  ],
  faqTitle: 'Preguntas frecuentes',
  faqSubtitle: 'Respuestas directas para operaciones y TI antes de automatizar con agentes.',
  faqs: [
    {
      question: '¿Cuándo conviene usar IA agéntica y cuándo basta con reglas fijas?',
      answer:
        'Conviene usar agentes cuando el flujo requiere interpretar contexto, consultar varias fuentes, elegir herramientas y manejar excepciones. Si el proceso es determinístico y estable, una automatización basada solo en reglas suele ser más simple y conveniente.'
    },
    {
      question: '¿Qué rol juega LangGraph dentro de la solución?',
      answer:
        'LangGraph me sirve para modelar estados, transiciones, herramientas, aprobaciones y rutas alternativas. Eso permite que el comportamiento del agente se parezca más a un proceso controlado que a un prompt aislado.'
    },
    {
      question: '¿n8n reemplaza al agente?',
      answer:
        'No. n8n resuelve la orquestación e integración entre sistemas. El agente decide, clasifica, interpreta y propone acciones; n8n ejecuta y conecta el flujo con herramientas y eventos.'
    },
    {
      question: '¿Cómo evitas errores o acciones incorrectas?',
      answer:
        'Con guardrails, tool-calling restringido, contexto acotado, validaciones previas y puntos de revisión humana cuando el riesgo lo amerita. La automatización debe diseñarse para operar con límites claros.'
    },
    {
      question: '¿Se puede desplegar todo esto en GCP?',
      answer:
        'Sí. La combinación típica incluye Cloud Run para servicios, Pub/Sub para eventos, Cloud SQL o Firestore para persistencia, BigQuery para análisis y Secret Manager/Cloud Logging para operación segura.'
    }
  ],
  contact: {
    eyebrow: 'Diagnóstico de automatización con IA',
    title: 'Identifiquemos un flujo candidato para agentic automation',
    description:
      'Revisamos un proceso real de tu operación, detectamos dónde un agente sí aporta valor y definimos una primera arquitectura con control, integración y métricas.',
    detailsTitle: 'En esta conversación revisamos:',
    detailsItems: [
      'Qué parte del flujo hoy sigue dependiendo de lectura, clasificación o decisiones manuales',
      'Dónde conviene usar agentes y dónde bastan reglas o automatización tradicional',
      'Qué datos, herramientas y aprobaciones necesita la solución para operar con control',
      'Cuál sería una primera arquitectura viable para llevarlo a producción'
    ],
    topics: [
      { value: '', label: 'Selecciona el tipo de flujo o necesidad', disabled: true, selected: true },
      { value: 'triage-incidentes', label: 'Priorización y enrutamiento de incidentes' },
      { value: 'lectura-documentos', label: 'Lectura estructurada de correos o documentos' },
      { value: 'agentes-con-tools', label: 'Agentes con tool-calling e integraciones' },
      { value: 'human-in-the-loop', label: 'Aprobaciones y human-in-the-loop' },
      { value: 'arquitectura-gcp', label: 'Arquitectura operable en GCP' },
      { value: 'otro', label: 'Otro / Aún no lo tengo claro' }
    ],
    formTitle: 'Cuéntame de tu desafío con IA agéntica',
    detailPlaceholder: '¿Qué flujo quieres automatizar? ¿Qué sistemas participan hoy? ¿Dónde está el cuello de botella?',
    source: 'automatizacion-con-ia-agentica'
  }
};

export const processAutomationLanding: ServiceLandingConfig = {
  seoTitle: 'HGuerra | Automatización de Procesos',
  seoDescription: 'Automatización de procesos con Airflow, SQL, NoSQL, ETL/ELT, ML aplicado y servicios de GCP para flujos críticos y datos confiables.',
  path: '/automatizacion-de-procesos',
  theme: processAutomationTheme,
  badge: 'Procesos + Datos + Integración operativa',
  title: 'Automatiza procesos críticos con datos confiables, reglas claras y ejecución trazable',
  subtitle:
    'Diseño automatizaciones robustas para procesos que hoy dependen de Excel, correos, cargas manuales y demasiados pasos invisibles. Integro datos, sistemas y reglas para que la operación avance con menos fricción y más control.',
  benefits: [
    'Menos retrabajo y menos dependencia de tareas manuales',
    'Datos listos para operar y decidir, no solo para reportar',
    'Procesos trazables, monitoreados y preparados para escalar'
  ],
  metrics: [
    { value: 'De scripts sueltos a orquestación visible', label: 'procesos críticos con control' },
    { value: 'SQL + NoSQL + ETL/ELT', label: 'datos alineados al flujo operativo' },
    { value: 'Alertas y trazabilidad', label: 'errores detectados antes de escalar' }
  ],
  primaryCtaLabel: 'Ver capacidades',
  primaryCtaHref: '#capacidades',
  secondaryCtaLabel: 'Ver casos y aplicaciones',
  secondaryCtaHref: '#casos-aplicaciones',
  problemTitle: '¿Tu operación sigue moviéndose entre Excel, correos, cargas manuales y sistemas que no conversan bien?',
  problemSubtitle:
    'El cuello de botella no siempre está en una sola herramienta. Suele estar en el proceso completo: datos que no coinciden, dependencias invisibles, pasos manuales y reportes que llegan tarde.',
  problemCards: [
    {
      icon: 'fa-file-excel',
      title: 'Procesos críticos que viven en hojas y correos',
      description: 'Cada actualización depende de copiar, pegar, consolidar o reenviar información entre personas y áreas.'
    },
    {
      icon: 'fa-shuffle',
      title: 'Sistemas que no se integran de forma confiable',
      description: 'La operación salta entre ERP, CRM, app, base de datos y reportes sin una capa clara de sincronización.'
    },
    {
      icon: 'fa-bug',
      title: 'ETL frágil o invisible',
      description: 'Las cargas funcionan hasta que fallan, y cuando fallan nadie sabe rápido dónde se rompió el flujo ni qué quedó inconsistente.'
    },
    {
      icon: 'fa-database',
      title: 'Datos distintos según el área que los mire',
      description: 'Finanzas, operaciones y analítica terminan trabajando con versiones parciales o contradictorias del mismo proceso.'
    },
    {
      icon: 'fa-user-gear',
      title: 'Dependencia excesiva de personas clave',
      description: 'El conocimiento operativo queda en quien armó el script, conoce el orden correcto o sabe cómo “arreglarlo” manualmente.'
    },
    {
      icon: 'fa-hourglass-half',
      title: 'Decisiones tardías por falta de flujo confiable',
      description: 'Cuando el dato llega tarde o mal, la automatización no acelera: solo mueve el problema a otra parte.'
    }
  ],
  riskTitle: 'El costo de no estructurar bien el proceso',
  riskDescription:
    'Si el flujo no tiene orquestación, calidad de datos y observabilidad, cada excepción genera retrabajo, retrasos y discusiones sobre cuál versión es la correcta. Automatizar sin diseño de proceso solo oculta el problema.',
  capabilitiesTitle: 'Qué incluyo en una automatización de procesos bien aterrizada',
  capabilitiesSubtitle:
    'La meta no es “mover datos”. La meta es que el proceso completo funcione mejor, con menos intervención manual y con información confiable en cada paso.',
  capabilities: [
    {
      icon: 'fa-diagram-project',
      title: 'Orquestación de workflows con Airflow',
      pain: 'Los procesos con múltiples dependencias se vuelven inmanejables cuando viven en scripts, cron jobs y pasos manuales.',
      solution: 'Uso `Airflow` para programar, encadenar, monitorear y reintentar procesos con dependencias claras.',
      outcome: 'El flujo deja de ser una caja negra y pasa a ser un proceso visible, medible y mantenible.',
      bullets: [
        'DAGs con dependencias explícitas',
        'Reintentos, alertas y trazabilidad',
        'Ejecuciones programadas o por evento',
        'Visibilidad por etapa y responsable técnico'
      ]
    },
    {
      icon: 'fa-table',
      title: 'Modelado y operación con SQL',
      pain: 'Muchos procesos fallan porque la estructura de datos no acompaña el flujo real del negocio.',
      solution: 'Diseño modelos transaccionales y analíticos en `Cloud SQL`, PostgreSQL o BigQuery según el tipo de proceso.',
      outcome: 'Los datos quedan listos para operar, conciliar y reportar sin duplicidades innecesarias.',
      bullets: [
        'Modelado relacional y reglas de integridad',
        'Queries y transformaciones operativas',
        'Tablas intermedias para reconciliación',
        'Diseño orientado a proceso y analítica'
      ]
    },
    {
      icon: 'fa-server',
      title: 'Persistencia NoSQL cuando el flujo lo requiere',
      pain: 'No todo proceso encaja bien en estructuras rígidas o en esquemas que cambian lento.',
      solution: 'Incorporo `Firestore` u otras capas NoSQL cuando el caso pide flexibilidad, eventos o documentos semiestructurados.',
      outcome: 'El sistema gana velocidad de implementación sin perder coherencia con la arquitectura global.',
      bullets: [
        'Eventos y estados ligeros',
        'Persistencia documental o semiestructurada',
        'Soporte para integraciones por webhook',
        'Complemento a la capa SQL, no reemplazo automático'
      ]
    },
    {
      icon: 'fa-right-left',
      title: 'ETL/ELT con validación y calidad de datos',
      pain: 'Mover datos sin validar solo propaga errores a más sistemas y más áreas.',
      solution: 'Diseño pipelines ETL/ELT con controles de calidad, validaciones y puntos de auditoría.',
      outcome: 'Las automatizaciones downstream operan sobre datos más confiables y con menos corrección manual.',
      bullets: [
        'Reglas de calidad antes de publicar',
        'Auditoría de cargas y transformaciones',
        'Normalización entre fuentes heterogéneas',
        'Trazabilidad de qué entró, cambió o falló'
      ]
    },
    {
      icon: 'fa-brain',
      title: 'ML para automatización de decisiones repetitivas',
      pain: 'Algunos procesos requieren algo más que reglas fijas: detectar anomalías, priorizar casos o anticipar desvíos.',
      solution: 'Incorporo ML donde sí agrega valor al flujo: scoring, clasificación, detección y activación de acciones.',
      outcome: 'El proceso no solo se automatiza; también mejora su capacidad de respuesta y priorización.',
      bullets: [
        'Detección de anomalías',
        'Clasificación y priorización automática',
        'Alertas basadas en patrones',
        'Activación de workflows a partir de señales'
      ]
    },
    {
      icon: 'fa-cloud',
      title: 'Servicios GCP para operar y escalar',
      pain: 'Sin una base cloud coherente, cada integración o pipeline nuevo agrega complejidad y fragilidad.',
      solution: 'Combino `Cloud Run`, `Cloud Functions`, `Pub/Sub`, `BigQuery`, `Cloud Storage`, `Dataproc` y `Cloud SQL` según el perfil del flujo.',
      outcome: 'La solución queda preparada para crecer, monitorearse y evolucionar sin rehacer la arquitectura cada vez.',
      bullets: [
        'Cloud Run y Functions para procesamiento',
        'Pub/Sub para desacoplar eventos',
        'BigQuery y Storage para histórico y analítica',
        'Dataproc cuando el volumen exige procesamiento distribuido'
      ]
    }
  ],
  workflowTitle: 'Cómo estructuro una automatización de procesos de punta a punta',
  workflowSubtitle:
    'No se trata solo de programar tareas. Se trata de diseñar un flujo donde dato, validación, integración y salida convivan de forma operable.',
  workflow: [
    {
      id: 'ingesta',
      title: '1. INGESTA Y CAPTURA',
      description: 'Los datos entran desde apps, archivos, APIs, formularios o sistemas legados',
      level: 1,
      highlight: 'blue',
      icon: 'fa-file-import',
      items: [
        { icon: 'fa-mobile-screen', text: 'Apps y formularios' },
        { icon: 'fa-file-csv', text: 'Archivos o lotes' },
        { icon: 'fa-plug', text: 'APIs y sistemas externos' }
      ]
    },
    {
      id: 'calidad',
      title: '2. VALIDACIÓN Y CALIDAD',
      description: 'Antes de avanzar, el proceso valida estructura, reglas y consistencia',
      level: 2,
      highlight: 'green',
      icon: 'fa-circle-check',
      items: [
        { icon: 'fa-list-check', text: 'Reglas de negocio' },
        { icon: 'fa-filter', text: 'Limpieza y normalización' },
        { icon: 'fa-shield-halved', text: 'Controles de calidad' },
        { icon: 'fa-triangle-exclamation', text: 'Detección de errores' }
      ]
    },
    {
      id: 'transformacion',
      title: '3. TRANSFORMACIÓN Y ORQUESTACIÓN',
      description: 'Airflow coordina dependencias, cargas, reintentos y publicaciones',
      level: 3,
      highlight: 'yellow',
      icon: 'fa-diagram-project',
      items: [
        { icon: 'fa-clock', text: 'Programación y secuencia' },
        { icon: 'fa-repeat', text: 'Reintentos y recuperación' },
        { icon: 'fa-code-branch', text: 'Dependencias claras' },
        { icon: 'fa-bell', text: 'Alertas ante fallos' }
      ]
    },
    {
      id: 'persistencia',
      title: '4. PERSISTENCIA E INTEGRACIÓN',
      description: 'Los datos se publican en la capa adecuada y activan procesos posteriores',
      level: 4,
      highlight: 'purple',
      icon: 'fa-database',
      items: [
        { icon: 'fa-table', text: 'Cloud SQL / PostgreSQL' },
        { icon: 'fa-server', text: 'Firestore / NoSQL' },
        { icon: 'fa-chart-line', text: 'BigQuery para analítica' },
        { icon: 'fa-share-nodes', text: 'APIs y sistemas conectados' }
      ]
    },
    {
      id: 'operacion',
      title: '5. MONITOREO Y MEJORA',
      description: 'El proceso se observa, se mide y se ajusta con base en resultados reales',
      level: 5,
      highlight: 'orange',
      icon: 'fa-chart-column',
      items: [
        { icon: 'fa-gauge-high', text: 'Métricas operativas' },
        { icon: 'fa-file-lines', text: 'Logs y auditoría' },
        { icon: 'fa-brain', text: 'ML para detectar desvíos' },
        { icon: 'fa-screwdriver-wrench', text: 'Optimización continua' }
      ]
    }
  ],
  casesTitle: 'Casos y aplicaciones donde este enfoque encaja bien',
  casesSubtitle:
    'El repo ya refleja varios patrones de este tipo de trabajo: ETL crítica, procesamiento histórico, integración operativa y automatización de reporting.',
  cases: [
    {
      icon: 'fa-chart-line',
      label: 'ETL crítica',
      title: 'Pipelines para reporting operativo y decisiones diarias',
      challenge: 'Datos dispersos, cargas manuales y baja visibilidad sobre pérdidas, desvíos o cumplimiento.',
      approach: 'ETL orquestada con Airflow, transformaciones en SQL, cargas analíticas a BigQuery y consumo desde BI.',
      result: 'La operación deja de esperar cierres manuales y gana visibilidad más rápida sobre lo que está ocurriendo.',
      stack: 'Airflow ETL + BigQuery + Power BI + Dataproc'
    },
    {
      icon: 'fa-seedling',
      label: 'Trazabilidad',
      title: 'Consolidación de datos operativos y evidencia de campo',
      challenge: 'Información capturada en distintas etapas termina desalineada, incompleta o difícil de auditar.',
      approach: 'Integración entre captura, validación, almacenamiento y reporting para dejar trazabilidad completa por entidad, lote o activo.',
      result: 'Menos reprocesos y mejor capacidad para certificar, auditar o analizar productividad.',
      stack: 'Flutter + Firebase + Airflow ETL + BigQuery'
    },
    {
      icon: 'fa-database',
      label: 'Escala',
      title: 'Procesamiento histórico y automatización sobre grandes volúmenes',
      challenge: 'Los cálculos batch crecen, los históricos pesan más y el proceso deja de responder al ritmo que necesita el negocio.',
      approach: 'Procesamiento distribuido con Dataproc, almacenamiento en Cloud Storage/BigQuery y activación de cargas downstream.',
      result: 'Los procesos intensivos pasan de ser cuello de botella a una capa operable para análisis y automatización.',
      stack: 'Dataproc + BigQuery + Cloud Storage + procesos downstream'
    }
  ],
  stackTitle: 'Stack y servicios que aplico en automatización de procesos',
  stackSubtitle:
    'La selección depende de criticidad, volumen, latencia y madurez del equipo, pero el principio es el mismo: procesos observables, integrables y mantenibles.',
  stackGroups: [
    {
      icon: 'fa-diagram-project',
      title: 'Orquestación',
      description: 'Coordinación de dependencias y control del flujo.',
      items: [
        'Apache Airflow para DAGs y dependencias',
        'Schedulers, reintentos y alertas',
        'Procesos por lote, periódicos o disparados por eventos'
      ]
    },
    {
      icon: 'fa-database',
      title: 'SQL y NoSQL',
      description: 'Persistencia elegida según estructura del dato y naturaleza del proceso.',
      items: [
        'Cloud SQL / PostgreSQL para consistencia transaccional',
        'BigQuery para analítica e histórico',
        'Firestore para estados, documentos o eventos flexibles'
      ]
    },
    {
      icon: 'fa-arrow-right-arrow-left',
      title: 'ETL/ELT e integración',
      description: 'Transformación, sincronización y publicación entre herramientas.',
      items: [
        'Pipelines SQL y Python',
        'APIs REST, webhooks y colas',
        'Reconciliación y validación entre fuentes'
      ]
    },
    {
      icon: 'fa-cloud',
      title: 'Servicios GCP',
      description: 'Base cloud para procesar, almacenar y monitorear.',
      items: [
        'Cloud Run, Cloud Functions y Pub/Sub',
        'Cloud Storage, BigQuery y Cloud SQL',
        'Dataproc para cargas distribuidas y Logging para operación'
      ]
    }
  ],
  differentiationTitle: '¿Qué diferencia esta propuesta de una automatización “rápida” pero frágil?',
  differentiationSubtitle:
    'La diferencia está en diseñar el proceso completo: reglas, datos, fallos, monitoreo, integración y evolución futura.',
  differentiators: [
    {
      icon: 'fa-gears',
      title: 'No automatizo pasos sueltos; automatizo procesos',
      subtitle: 'La unidad de diseño es el flujo completo',
      description: 'Busco dónde nace, se transforma, se valida y se consume la información para que la automatización sí cambie el resultado operativo.',
      highlight: 'Menos parches, más coherencia operativa'
    },
    {
      icon: 'fa-bug-slash',
      title: 'Calidad y monitoreo desde el principio',
      subtitle: 'No solo “si corre”',
      description: 'Las validaciones, alertas y puntos de auditoría son parte del diseño, no una capa agregada después del primer incidente.',
      highlight: 'Menos sorpresas y mejor capacidad de reacción'
    },
    {
      icon: 'fa-layer-group',
      title: 'SQL, NoSQL y cloud según el problema',
      subtitle: 'No por moda tecnológica',
      description: 'El stack se elige por estructura del dato, criticidad del flujo y capacidad del equipo para operarlo.',
      highlight: 'Arquitectura más defendible y durable'
    },
    {
      icon: 'fa-chart-line',
      title: 'Preparado para analítica y ML posterior',
      subtitle: 'No se queda en mover datos',
      description: 'La automatización deja una base sobre la que luego puedes activar alertas, scoring, predicción o agentes.',
      highlight: 'El proceso mejora hoy y habilita capacidades mañana'
    }
  ],
  notIdealTitle: 'Para quién NO es la mejor opción',
  notIdealIntro: 'Esta línea no es la mejor elección si lo que buscas es:',
  notIdealItems: [
    'Un script rápido sin intención de mantenimiento ni monitoreo',
    'Mover datos entre dos puntos sin revisar calidad ni reglas de negocio',
    'Centralizar todo en una sola tecnología por comodidad, aunque no encaje',
    'Resolver un problema de producto o adopción solo con backend y pipelines'
  ],
  faqTitle: 'Preguntas frecuentes',
  faqSubtitle: 'Lo que normalmente conviene aclarar antes de automatizar procesos críticos.',
  faqs: [
    {
      question: '¿Cuándo conviene usar Airflow?',
      answer:
        'Cuando el proceso tiene dependencias claras, varias etapas, reintentos, programación o necesidad de monitoreo operativo. Si el flujo es muy simple, puede resolverse con una alternativa más ligera.'
    },
    {
      question: '¿Cómo decides entre SQL y NoSQL?',
      answer:
        'Depende del tipo de dato y del comportamiento esperado del proceso. Uso SQL cuando la integridad y las relaciones son críticas; uso NoSQL cuando el flujo necesita flexibilidad estructural, documentos o estados event-driven.'
    },
    {
      question: '¿ETL o ELT?',
      answer:
        'Ambas. La elección depende de dónde conviene validar, transformar y publicar. En procesos críticos priorizo trazabilidad, calidad y claridad de operación antes que dogmas de arquitectura.'
    },
    {
      question: '¿Cómo entra ML en automatización de procesos?',
      answer:
        'No como adorno. Lo incorporo cuando ayuda a clasificar, detectar anomalías, priorizar o activar decisiones repetitivas. Si una regla simple resuelve el problema, no fuerzo ML.'
    },
    {
      question: '¿Se puede hacer todo esto sobre GCP?',
      answer:
        'Sí. Una arquitectura típica puede combinar Cloud Run, Cloud Functions, Pub/Sub, Cloud SQL, BigQuery, Cloud Storage, Dataproc y observabilidad con Cloud Logging.'
    }
  ],
  contact: {
    eyebrow: 'Diagnóstico de automatización de procesos',
    title: 'Revisemos un proceso crítico que hoy esté frenando tu operación',
    description:
      'Mapeamos el flujo actual, detectamos cuellos de botella y definimos una automatización con datos confiables, monitoreo y una arquitectura que puedas sostener.',
    detailsTitle: 'En esta conversación revisamos:',
    detailsItems: [
      'Dónde se rompen hoy los datos, las integraciones o las dependencias del proceso',
      'Qué parte conviene orquestar, validar o monitorear primero',
      'Cómo estructurar datos, reglas y ejecución sin dejar una automatización frágil',
      'Qué arquitectura te deja una base mantenible para crecer después'
    ],
    topics: [
      { value: '', label: 'Selecciona el proceso o necesidad', disabled: true, selected: true },
      { value: 'etl-elt', label: 'Pipelines ETL / ELT y calidad de datos' },
      { value: 'airflow-orquestacion', label: 'Orquestación de workflows con Airflow' },
      { value: 'integracion-sistemas', label: 'Integración entre sistemas y fuentes' },
      { value: 'sql-nosql', label: 'Modelado SQL / NoSQL para operación' },
      { value: 'ml-alertas', label: 'ML para clasificación, alertas o anomalías' },
      { value: 'otro', label: 'Otro / Aún no lo tengo claro' }
    ],
    formTitle: 'Cuéntame de tu proceso crítico',
    detailPlaceholder: '¿Qué proceso hoy depende de tareas manuales, archivos, correos o integraciones frágiles?',
    source: 'automatizacion-de-procesos'
  }
};
