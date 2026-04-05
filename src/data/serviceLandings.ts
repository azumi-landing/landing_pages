import type { ServiceLandingConfig } from '../types/serviceLanding';
import { agenticAutomationTheme, fieldOperationsTheme, processAutomationTheme } from './serviceThemes';
import { fieldOperationsFaqs } from './faqs';

export const agenticAutomationLanding: ServiceLandingConfig = {
  seoTitle: 'HGuerra | Automatización con IA Agéntica',
  seoDescription: 'Consultoría e implementación de automatización con IA agéntica para integrar agentes, datos y sistemas en flujos operativos con control, trazabilidad y supervisión humana.',
  seoImage: '/og-agentic-automation.svg',
  path: '/automatizacion-con-ia-agentica',
  theme: agenticAutomationTheme,
  badge: 'Agentes + Orquestación + Trazabilidad operativa',
  title: 'Tu piloto de IA se ve bien en demo, pero nunca entró a producción. El problema no es el modelo — es que nadie diseñó el proceso.',
  subtitle:
    'Diseño e implemento agentes con `LangGraph` y `n8n` que leen contexto, consultan datos, usan herramientas y ejecutan acciones con supervisión humana. No vendo demos aisladas: construyo automatización útil que opera en producción con guardrails, trazabilidad y control.',
  benefits: [
    'Menos trabajo manual para priorizar, clasificar y responder',
    'Decisiones automatizadas con trazabilidad y control',
    'Integración real con tus fuentes de datos, APIs y workflows'
  ],
  metrics: [
    { value: '+10 años', label: 'diseñando operaciones digitales y automatización' },
    { value: '+5M', label: 'registros procesados en implementaciones reales' },
    { value: '2-3 sem', label: 'del primer contacto a operación productiva' },
    { value: 'Guardrails', label: 'human-in-the-loop y observabilidad por defecto' }
  ],
  primaryCtaLabel: 'Revisar mi flujo en 30 min',
  primaryCtaHref: '#contacto',
  secondaryCtaLabel: 'Ver cómo funciona',
  secondaryCtaHref: '#como-funciona',
  problemTitle: '¿Tu operación ya usa IA, pero todavía depende de demasiada intervención manual?',
  problemSubtitle:
    'El problema no suele ser “falta de IA”. El problema es que la IA queda aislada del proceso: sin contexto, sin herramientas, sin trazabilidad y sin capacidad real de ejecutar decisiones útiles.',
  problemCards: [
    {
      icon: 'fa-envelope-open-text',
      title: 'Alguien lee correos y tickets uno por uno para clasificarlos',
      description: 'La priorización sigue siendo manual, lenta y dependiente de pocas personas que "saben" cómo escalar.'
    },
    {
      icon: 'fa-comments',
      title: 'Probamos ChatGPT para triage y nadie lo usa dos veces',
      description: 'El equipo probó IA en chats o copilots, pero nada quedó integrado al flujo real ni genera acciones confiables.'
    },
    {
      icon: 'fa-triangle-exclamation',
      title: 'Las alertas llegan, pero nadie sabe qué hacer con ellas',
      description: 'Hay eventos y anomalías, pero no un mecanismo que interprete contexto y active el siguiente paso sin intervención manual.'
    },
    {
      icon: 'fa-diagram-project',
      title: 'Reglas simples ya no alcanzan para decidir',
      description: 'El proceso necesita consultar varias fuentes, evaluar condiciones y tomar rutas distintas según contexto — y eso hoy lo hace una persona.'
    },
    {
      icon: 'fa-user-clock',
      title: 'Los analistas pasan el día clasificando, copiando y escalando',
      description: 'El tiempo valioso se consume en tareas repetitivas que un agente con contexto y herramientas podría resolver en segundos.'
    },
    {
      icon: 'fa-shield-halved',
      title: '"¿Y si la IA se equivoca en algo crítico?"',
      description: 'Temor legítimo. Sin guardrails, aprobaciones y observabilidad, cualquier automatización inteligente se vuelve un riesgo operativo.'
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
      icon: 'fa-plug',
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
  casesTitle: 'Dónde encaja mejor este servicio',
  casesSubtitle:
    'Casos operativos donde un agente con contexto, herramientas y guardrails aporta más valor que un script lineal o un prompt aislado.',
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
  proofTitle: 'Prueba de valor y señales de confianza',
  proofSubtitle:
    'La propuesta no se sostiene por “lo inteligente” del modelo, sino por qué tan controlado, visible e integrado queda el flujo en operación.',
  proofMetrics: [
    {
      value: 'Controlado',
      label: 'decisiones con guardrails y revisión humana',
      detail: 'La automatización no depende de un prompt abierto ni de una sola llamada al modelo.'
    },
    {
      value: 'Trazable',
      label: 'acciones, rutas y excepciones visibles',
      detail: 'Cada paso queda disponible para auditoría, mejora y confianza operativa.'
    },
    {
      value: 'Conectado',
      label: 'integración real con datos y sistemas',
      detail: 'La IA dispara acciones útiles dentro del proceso, no solo respuestas.'
    }
  ],
  proofPoints: [
    {
      icon: 'fa-eye',
      title: 'Observabilidad desde el diseño',
      description: 'Logs, métricas y rutas de decisión quedan visibles para auditar y ajustar el flujo sin perder contexto.'
    },
    {
      icon: 'fa-user-shield',
      title: 'Criterio humano donde sí importa',
      description: 'Las aprobaciones y excepciones se diseñan desde el inicio para acelerar sin ceder control.'
    },
    {
      icon: 'fa-link',
      title: 'Integración útil con la operación',
      description: 'El agente lee, decide y actúa sobre tus herramientas para cerrar trabajo real en lugar de quedarse en un chat.'
    }
  ],
  trustBand: {
    eyebrow: 'Señales de relación',
    title: 'IA agéntica aplicada con criterio operativo, no como experimento aislado',
    description:
      'Antes de hablar de modelos o prompts, la propuesta deja claro cómo se lee el problema: flujo, contexto, control y ejecución conectados.',
    items: [
      {
        value: 'Proceso primero',
        label: 'el flujo y las decisiones mandan antes que el modelo o el prompt.'
      },
      {
        value: 'Con guardrails',
        label: 'agentes, aprobaciones y trazabilidad se diseñan desde el inicio.'
      },
      {
        value: 'Integrado',
        label: 'la automatización lee y actúa sobre sistemas reales, no sobre un sandbox.'
      },
      {
        value: 'Directo',
        label: 'diagnóstico, arquitectura y ejecución se trabajan en la misma conversación.'
      }
    ]
  },
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
      icon: 'fa-link',
      title: 'Integración real con sistemas',
      subtitle: 'No se queda en un chat',
      description: 'Los agentes leen y escriben en tus herramientas, disparan flujos y devuelven resultados útiles al negocio.',
      highlight: 'La IA termina trabajo, no solo responde'
    },
    {
      icon: 'fa-handshake',
      title: 'Trabajas directo conmigo — sin intermediarios',
      subtitle: 'Stack estándar, código operable',
      description: 'Una sola persona del diagnóstico al deploy. El código queda documentado sobre `GCP`, `LangGraph`, `n8n` — operable por cualquier equipo técnico si decides continuar sin mí.',
      highlight: '+10 años y +5M registros en implementaciones reales'
    }
  ],
  notIdealTitle: 'Cuándo NO soy tu mejor opción',
  notIdealIntro: 'Prefiero filtrar esto en cinco minutos y no en el mes dos del proyecto. Si tu caso encaja en alguno de estos puntos, te lo digo directo:',
  notIdealItems: [
    'Buscas un chatbot genérico sin integración con tus procesos ni datos.',
    'Quieres automatizar decisiones sensibles sin revisión humana ni trazabilidad.',
    'Necesitas un piloto de IA para mostrar en una reunión, sin intención de llevarlo a producción.',
    'El problema se resuelve mejor con reglas simples — y preferís no complicarlo.',
    'El driver principal de la compra es el logo de una marca grande, no que la solución funcione.'
  ],
  execution: {
    eyebrow: 'Quién ejecuta',
    title: 'La arquitectura del agente y la conversación operativa se trabajan directo conmigo',
    description:
      'Si el caso avanza, no pasas de una capa comercial a otra técnica. La misma persona que aterriza el flujo define herramientas, límites y forma de despliegue.',
    bullets: [
      'Diagnóstico de flujo, diseño de agente y decisiones de integración conectados.',
      'Criterio para separar lo que conviene resolver con IA, con reglas o con revisión humana.',
      'Implementación pensada para operación real, no solo para demo o laboratorio.'
    ],
    ctaLabel: 'Ver experiencia y enfoque'
  },
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
    title: 'Cuéntame el flujo que quieres automatizar. Te digo si puedo ayudarte antes de cobrarte nada.',
    description:
      'En la primera conversación (30 minutos, sin costo) mapeamos el flujo, validamos si un agente aporta valor real, y si encaja te propongo cómo lo abordaría. Si no encaja, te lo digo en esa misma llamada.',
    detailsTitle: 'En esta conversación revisamos:',
    detailsItems: [
      'Qué parte del flujo hoy sigue dependiendo de lectura, clasificación o decisiones manuales',
      'Dónde conviene usar agentes y dónde bastan reglas o automatización tradicional',
      'Qué datos, herramientas y aprobaciones necesita la solución para operar con control',
      'Si mi enfoque encaja o no — si no encaja, te lo digo en esa misma llamada'
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
  seoDescription: 'Consultoría e implementación de automatización de procesos para integrar sistemas, ordenar datos y ejecutar flujos críticos con control, monitoreo y trazabilidad.',
  seoImage: '/og-process-automation.svg',
  path: '/automatizacion-de-procesos',
  theme: processAutomationTheme,
  badge: 'Procesos + Datos + Integración operativa',
  title: 'Tus procesos críticos viven en Excel, correos y cargas manuales — y cada persona clave que renuncia se lleva el "cómo se hace".',
  subtitle:
    'Diseño automatizaciones robustas con `Airflow`, `BigQuery` y `Cloud Run` para procesos que hoy dependen de scripts sueltos, pasos invisibles y demasiada intervención manual. Integro datos, sistemas y reglas para que la operación avance con trazabilidad, monitoreo y sin depender de una persona clave.',
  benefits: [
    'Menos retrabajo y menos dependencia de tareas manuales',
    'Datos listos para operar y decidir, no solo para reportar',
    'Procesos trazables, monitoreados y preparados para escalar'
  ],
  metrics: [
    { value: '+10 años', label: 'diseñando operaciones digitales y pipelines de datos' },
    { value: '+5M', label: 'registros procesados en implementaciones reales' },
    { value: '2-3 sem', label: 'del primer contacto a operación productiva' },
    { value: 'Monitoreo', label: 'alertas, calidad de datos y trazabilidad por defecto' }
  ],
  primaryCtaLabel: 'Revisar mi proceso en 30 min',
  primaryCtaHref: '#contacto',
  secondaryCtaLabel: 'Ver cómo funciona',
  secondaryCtaHref: '#como-funciona',
  problemTitle: '¿Tu operación sigue moviéndose entre Excel, correos, cargas manuales y sistemas que no conversan bien?',
  problemSubtitle:
    'El cuello de botella no siempre está en una sola herramienta. Suele estar en el proceso completo: datos que no coinciden, dependencias invisibles, pasos manuales y reportes que llegan tarde.',
  problemCards: [
    {
      icon: 'fa-file-excel',
      title: 'El proceso crítico vive en un Excel que “solo Juan sabe usar”',
      description: 'Cada actualización depende de copiar, pegar, consolidar o reenviar información entre personas y áreas. Si Juan se va, el proceso se frena.'
    },
    {
      icon: 'fa-shuffle',
      title: 'El ERP, el CRM y la base de datos no se hablan entre sí',
      description: 'La operación salta entre sistemas sin una capa clara de sincronización. Alguien consolida a mano — y ese “alguien” ya está saturado.'
    },
    {
      icon: 'fa-bug',
      title: 'El ETL funciona... hasta que falla y nadie se entera',
      description: 'Las cargas corren en silencio hasta que se rompen, y cuando fallan nadie sabe rápido dónde ni qué quedó inconsistente.'
    },
    {
      icon: 'fa-database',
      title: 'Cada área tiene una versión distinta del mismo dato',
      description: 'Finanzas, operaciones y analítica trabajan con versiones parciales o contradictorias. “¿Cuál es el dato correcto?” — depende de a quién le preguntes.'
    },
    {
      icon: 'fa-user-gear',
      title: 'Si la persona clave renuncia, el proceso se muere',
      description: 'El conocimiento operativo queda en quien armó el script, conoce el orden correcto o sabe cómo “arreglarlo” manualmente.'
    },
    {
      icon: 'fa-hourglass-half',
      title: 'Las decisiones llegan tarde porque el dato llega tarde',
      description: 'Cuando la información no fluye, la automatización no acelera — solo traslada el cuello de botella a otra parte.'
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
  casesTitle: 'Dónde encaja mejor este servicio',
  casesSubtitle:
    'Patrones operativos donde la automatización gana valor cuando datos, reglas, monitoreo e integración se diseñan como un mismo flujo.',
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
  proofTitle: 'Prueba de valor y señales de confianza',
  proofSubtitle:
    'Una automatización útil no se mide solo porque “corra”. Se mide por la calidad del dato, la visibilidad del flujo y la capacidad de sostenerlo.',
  proofMetrics: [
    {
      value: 'Visible',
      label: 'monitoreo y alertas desde el día uno',
      detail: 'El proceso deja de depender de scripts invisibles y fallos difíciles de rastrear.'
    },
    {
      value: 'Confiable',
      label: 'datos validados antes de mover decisiones',
      detail: 'Las reglas de calidad entran en el diseño y no como parche posterior.'
    },
    {
      value: 'Escalable',
      label: 'arquitectura preparada para crecer',
      detail: 'La solución soporta nuevas fuentes, cargas y casos sin rehacer el flujo completo.'
    }
  ],
  proofPoints: [
    {
      icon: 'fa-shield-halved',
      title: 'Calidad desde la entrada',
      description: 'Las validaciones y puntos de control evitan propagar errores a más sistemas, áreas y reportes.'
    },
    {
      icon: 'fa-chart-column',
      title: 'Trazabilidad operativa',
      description: 'Cada dependencia, carga, reintento y fallo puede ubicarse con rapidez para corregir sin improvisación.'
    },
    {
      icon: 'fa-brain',
      title: 'Base lista para mejorar después',
      description: 'La automatización resuelve hoy y deja una capa útil para analítica, alertas, scoring o ML posterior.'
    }
  ],
  trustBand: {
    eyebrow: 'Señales de relación',
    title: 'Automatización de procesos con criterio operativo y arquitectura mantenible',
    description:
      'La conversación no se centra en mover datos por moverlos. Se centra en qué flujo hay que estabilizar, cómo se monitorea y cómo se sostiene en el tiempo.',
    items: [
      {
        value: 'End-to-end',
        label: 'se diseña el proceso completo, no un parche sobre un paso aislado.'
      },
      {
        value: 'Datos confiables',
        label: 'la calidad, validación y reconciliación entran desde el diseño.'
      },
      {
        value: 'Monitoreado',
        label: 'alertas, auditoría y puntos de control quedan definidos desde el inicio.'
      },
      {
        value: 'Directo',
        label: 'lectura operativa, decisiones de arquitectura y ejecución se trabajan en una sola relación.'
      }
    ]
  },
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
      icon: 'fa-shield-halved',
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
    },
    {
      icon: 'fa-handshake',
      title: 'Trabajas directo conmigo — sin intermediarios',
      subtitle: 'Stack estándar, código operable',
      description: 'Una sola persona del diagnóstico al deploy. El código queda documentado sobre `Airflow`, `BigQuery`, `Cloud Run` — operable por cualquier equipo técnico si decides continuar sin mí.',
      highlight: '+10 años y +5M registros en implementaciones reales'
    }
  ],
  notIdealTitle: 'Cuándo NO soy tu mejor opción',
  notIdealIntro: 'Prefiero filtrar esto en cinco minutos y no en el mes dos del proyecto. Si tu caso encaja en alguno de estos puntos, te lo digo directo:',
  notIdealItems: [
    'Buscas un script rápido sin intención de mantenimiento, monitoreo ni documentación.',
    'Quieres mover datos entre dos puntos sin revisar calidad ni reglas de negocio.',
    'La prioridad es centralizar todo en una sola tecnología por comodidad, aunque no encaje.',
    'El problema es de producto o adopción y crees que solo con backend y pipelines se resuelve.',
    'El driver principal de la compra es el logo de una marca grande, no que la automatización funcione.'
  ],
  execution: {
    eyebrow: 'Quién ejecuta',
    title: 'La conversación de proceso, datos y arquitectura se trabaja directo conmigo',
    description:
      'No separo el diagnóstico operativo de las decisiones técnicas. Si el caso avanza, la misma lectura del flujo se traduce en reglas, datos, monitoreo y despliegue.',
    bullets: [
      'Mapeo de proceso, diseño de automatización y criterio de arquitectura conectados.',
      'Decisiones sobre calidad de datos, integraciones y monitoreo hechas con foco en sostenibilidad.',
      'Implementación orientada a operación continua, no a entregar un script y desaparecer.'
    ],
    ctaLabel: 'Ver experiencia y enfoque'
  },
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
    title: 'Cuéntame qué proceso te tiene frenado. Te digo si puedo ayudarte antes de cobrarte nada.',
    description:
      'En la primera conversación (30 minutos, sin costo) mapeamos el flujo actual, detectamos el cuello de botella y validamos si encaja con lo que hago. Si no encaja, te lo digo en esa misma llamada.',
    detailsTitle: 'En esta conversación revisamos:',
    detailsItems: [
      'Dónde se rompen hoy los datos, las integraciones o las dependencias del proceso',
      'Qué parte conviene orquestar, validar o monitorear primero',
      'Cómo estructurar datos, reglas y ejecución sin dejar una automatización frágil',
      'Si mi enfoque encaja o no — si no encaja, te lo digo en esa misma llamada'
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

export const fieldOperationsLanding: ServiceLandingConfig = {
  seoTitle: 'HGuerra | Gestión de Operaciones de Campo',
  seoDescription: 'App móvil offline + dashboard web + trazabilidad auditable con GPS y fotos. Implementación directa en 2-3 semanas. +5M registros procesados en producción.',
  seoImage: '/og-field-operations.svg',
  path: '/gestion-de-operaciones-de-campo',
  theme: fieldOperationsTheme,
  badge: 'Operaciones de campo + Offline real + Trazabilidad auditable',
  title: 'Tus operarios capturan en papel, las fotos se pierden en WhatsApp y los reportes llegan días tarde. La operación es una caja negra.',
  subtitle:
    'Diseño e implemento app móvil offline + dashboard web + trazabilidad con GPS, fotos y firma digital para que sepas qué pasa en campo en tiempo real. Trabajas directo conmigo — sin intermediarios, en producción en 2-3 semanas.',
  benefits: [
    '-60% errores de captura con validaciones y evidencia obligatoria',
    'Visibilidad de la operación en vivo, no cuando alguien manda el reporte',
    'Auditorías sin hallazgos: GPS + foto + timestamp + firma en cada registro'
  ],
  metrics: [
    { value: '+5M', label: 'registros procesados en implementaciones reales' },
    { value: '-60%', label: 'errores de captura en las primeras 3 semanas' },
    { value: '2-3 sem', label: 'del primer contacto a operación productiva' },
    { value: '+10 años', label: 'diseñando operaciones digitales en campo' }
  ],
  primaryCtaLabel: 'Revisar mi operación en 30 min',
  primaryCtaHref: '#contacto',
  secondaryCtaLabel: 'Ver cómo funciona',
  secondaryCtaHref: '#como-funciona',
  problemTitle: '¿Tu operación de campo sigue siendo una caja negra?',
  problemSubtitle:
    'El supervisor llama al operario: "¿Ya inspeccionaste la línea 3? ¿Enviaste las fotos?". El operario: "Sí, jefe, las mandé por WhatsApp hace una hora... ¿o era a la otra supervisora?". Si esa conversación te suena familiar, este es tu problema.',
  problemCards: [
    {
      icon: 'fa-clock',
      title: 'Los reportes de campo llegan días después',
      description: 'Cuando la información llega, ya no sirve para corregir. Las decisiones se toman con datos desactualizados o incompletos.'
    },
    {
      icon: 'fa-image',
      title: 'Las fotos se pierden en WhatsApp',
      description: 'Fotos sin contexto, sin GPS, sin timestamp, revueltas entre chats personales. Imposible auditar ni reconstruir qué pasó.'
    },
    {
      icon: 'fa-phone-slash',
      title: 'Los supervisores viven al teléfono',
      description: 'El 30% de su tiempo se va en llamadas de seguimiento que no deberían existir. Eso no es supervisión — es apagar fuegos.'
    },
    {
      icon: 'fa-user-gear',
      title: 'La operación depende de una persona clave',
      description: 'El conocimiento de quién hace qué, dónde y cuándo vive en la cabeza de alguien. Si esa persona falta, la operación se frena.'
    },
    {
      icon: 'fa-triangle-exclamation',
      title: 'Las auditorías nos encuentran sin trazabilidad',
      description: 'Cada revisión externa es una ruleta rusa de no-conformidades por falta de evidencia. "¿Quién hizo qué y cuándo?" — silencio incómodo.'
    },
    {
      icon: 'fa-wifi',
      title: 'Trabajamos en zonas sin internet y los datos se pierden',
      description: 'Minas, bosques, fincas. Sin cobertura, los datos se capturan en papel y se transcriben después — con errores, duplicados y semanas de atraso.'
    }
  ],
  riskTitle: 'El riesgo de no actuar',
  riskDescription:
    'Una auditoría externa, un incidente de seguridad o un reclamo legal puede exponer que tu trazabilidad no existe cuando más la necesitas. Mientras tanto, cada foto que se pierde, cada reporte que llega tarde y cada decisión con datos viejos te cuesta dinero real.',
  capabilitiesTitle: 'Qué incluyo en una solución de operaciones de campo',
  capabilitiesSubtitle:
    'No entrego una app genérica. Diseño la solución completa: captura, sincronización, trazabilidad, integración, dashboard y acompañamiento hasta que tu equipo la use de verdad.',
  capabilities: [
    {
      icon: 'fa-mobile-alt',
      title: 'App móvil offline-first para tu equipo en terreno',
      pain: 'Operarios con planillas de papel, fotos perdidas en WhatsApp y datos incompletos que llegan días después.',
      solution: 'App intuitiva donde reciben asignaciones, capturan datos estructurados, toman fotos con GPS y firman digitalmente — todo sin internet.',
      outcome: '-60% errores de captura y evidencia completa desde el momento del registro en campo.',
      bullets: [
        'Captura offline completa: fotos, formularios, firmas',
        'Sincronización automática al detectar red',
        'Validaciones en campo que evitan datos incompletos',
        'Diseñada para operarios, no para técnicos de IT'
      ]
    },
    {
      icon: 'fa-bolt',
      title: 'Órdenes de servicio desde alarmas y series de tiempo',
      pain: 'Las alarmas generan trabajo de campo, pero la asignación es manual, lenta y sin seguimiento.',
      solution: 'Las órdenes se crean automáticamente desde alarmas SCADA/IoT o manualmente. Se asignan al operario más cercano o disponible.',
      outcome: 'Tiempo de respuesta de horas a minutos. Cero órdenes perdidas. Ruta optimizada.',
      bullets: [
        'Generación automática desde alarmas y series de tiempo',
        'Asignación por proximidad, habilidad y carga de trabajo',
        'Escalamiento si no hay respuesta en tiempo definido',
        'Programación de rutas y visitas preventivas'
      ]
    },
    {
      icon: 'fa-chart-line',
      title: 'Dashboard web con KPIs operativos en vivo',
      pain: 'Reportes de campo que tardan días en llegar. Decisiones basadas en datos viejos sin visibilidad del momento.',
      solution: 'Plataforma web donde supervisores y gerencia ven métricas en vivo: avance, cumplimiento, MTTR, cobertura geográfica.',
      outcome: 'Decisiones informadas en el momento, con datos que se actualizan automáticamente desde la app móvil.',
      bullets: [
        'KPIs configurables por rol y operación',
        'Mapa de calor de cobertura de campo',
        'Alertas automáticas por desviaciones',
        'Exportación de reportes en un clic'
      ]
    },
    {
      icon: 'fa-clipboard-check',
      title: 'Trazabilidad inmutable con GPS, fotos y firma',
      pain: 'Sin registro de quién hizo qué, cuándo y dónde. Evidencia perdida o manipulada. Auditorías con hallazgos.',
      solution: 'Cada registro queda con timestamp, GPS, fotos obligatorias y firma digital. La trazabilidad no es opcional — es el default.',
      outcome: 'Auditorías sin hallazgos, cumplimiento normativo demostrable y respaldo legal de cada operación.',
      bullets: [
        'Registro automático de fecha, hora y ubicación GPS',
        'Fotos obligatorias con metadatos preservados',
        'Firma digital del operario y del cliente',
        'Historial inmutable de cambios y evidencia'
      ]
    },
    {
      icon: 'fa-plug',
      title: 'Integración con tu ERP, SAP y sistemas actuales',
      pain: 'Plataformas aisladas que no hablan con tu ERP o sistema de facturación. Doble trabajo de migración.',
      solution: 'APIs REST para sincronizar clientes, activos, órdenes de trabajo y resultados con tus sistemas existentes.',
      outcome: 'Ecosistema unificado sin romper lo que ya funciona. Datos fluyen entre campo y oficina central.',
      bullets: [
        'APIs REST documentadas para integraciones',
        'Conectores SAP, Salesforce, Oracle',
        'Sincronización bidireccional de datos',
        'Single Sign-On (SSO) con tus credenciales'
      ]
    },
    {
      icon: 'fa-cloud',
      title: 'Arquitectura operable en GCP',
      pain: 'Soluciones que funcionan como piloto pero no aguantan operación real: sin monitoreo, sin escalabilidad, sin seguridad.',
      solution: 'Despliego sobre `Cloud Run`, `Pub/Sub`, `Firestore`, `BigQuery` y `Cloud Logging` para una base que aguante producción.',
      outcome: 'La solución queda lista para operar, escalar y ser mantenida por cualquier equipo técnico competente.',
      bullets: [
        'Cloud Run para servicios backend',
        'Pub/Sub para eventos y sincronización',
        'Firestore para datos offline/online',
        'BigQuery y Logging para auditoría y análisis'
      ]
    }
  ],
  workflowTitle: 'Cómo funciona la solución de punta a punta',
  workflowSubtitle:
    'Desde que el operario recibe la asignación en su celular hasta que el gerente ve el dato en el dashboard — todo conectado, trazable y sin intervención manual.',
  workflow: [
    {
      id: 'captura',
      title: '1. CAPTURA EN TERRENO',
      description: 'El operario recibe la asignación y captura datos, fotos y firmas desde la app — con o sin internet',
      level: 1,
      highlight: 'blue',
      icon: 'fa-mobile-alt',
      items: [
        { icon: 'fa-list-check', text: 'Formularios guiados y validados' },
        { icon: 'fa-camera', text: 'Fotos con GPS y timestamp' },
        { icon: 'fa-file-signature', text: 'Firma digital del operario' }
      ]
    },
    {
      id: 'sincronizacion',
      title: '2. SINCRONIZACIÓN OFFLINE',
      description: 'Al detectar red, la app sincroniza automáticamente sin pérdida ni duplicados',
      level: 2,
      highlight: 'green',
      icon: 'fa-arrows-rotate',
      items: [
        { icon: 'fa-wifi', text: 'Detección automática de red' },
        { icon: 'fa-shield-halved', text: 'Resolución de conflictos' },
        { icon: 'fa-database', text: 'Persistencia local completa' }
      ]
    },
    {
      id: 'validacion',
      title: '3. VALIDACIÓN Y ORQUESTACIÓN',
      description: 'El backend valida datos, dispara alertas y genera órdenes desde alarmas o series de tiempo',
      level: 3,
      highlight: 'yellow',
      icon: 'fa-gears',
      items: [
        { icon: 'fa-circle-check', text: 'Validaciones automáticas' },
        { icon: 'fa-bell', text: 'Alarmas que generan órdenes' },
        { icon: 'fa-bolt', text: 'Asignación inteligente' },
        { icon: 'fa-triangle-exclamation', text: 'Escalamiento por SLA' }
      ]
    },
    {
      id: 'integracion',
      title: '4. PERSISTENCIA E INTEGRACIÓN',
      description: 'Los datos se almacenan con trazabilidad y se sincronizan con ERP, SAP y sistemas existentes',
      level: 4,
      highlight: 'purple',
      icon: 'fa-database',
      items: [
        { icon: 'fa-server', text: 'Firestore + Cloud SQL' },
        { icon: 'fa-chart-line', text: 'BigQuery para analítica' },
        { icon: 'fa-plug', text: 'APIs REST hacia ERP/SAP' },
        { icon: 'fa-share-nodes', text: 'Webhooks y eventos' }
      ]
    },
    {
      id: 'operacion',
      title: '5. DASHBOARD Y AUDITORÍA',
      description: 'Supervisores y gerencia ven la operación en vivo con KPIs, mapas y evidencia auditable',
      level: 5,
      highlight: 'orange',
      icon: 'fa-chart-column',
      items: [
        { icon: 'fa-gauge-high', text: 'KPIs: MTTR, cobertura, cumplimiento' },
        { icon: 'fa-map-location-dot', text: 'Mapa de operaciones en vivo' },
        { icon: 'fa-file-lines', text: 'Evidencia auditable por registro' },
        { icon: 'fa-download', text: 'Exportación de reportes' }
      ]
    }
  ],
  casesTitle: 'Dónde encaja mejor este servicio',
  casesSubtitle:
    'Casos operativos donde la combinación de app móvil offline, trazabilidad y dashboard resuelve un problema que herramientas genéricas no pudieron.',
  cases: [
    {
      icon: 'fa-file-alt',
      label: 'Evidencias',
      title: 'Procesamiento masivo de evidencias sin intervención manual',
      challenge: 'Revisión manual de millones de archivos con riesgo de error y tiempos de días.',
      approach: 'App móvil para registro en campo (fotos, GPS) + plataforma web para supervisión. Validaciones automáticas y auditoría completa.',
      result: '+5,000,000 archivos procesados con validaciones automáticas. Revisión baja de días a minutos.',
      stack: 'AppSheet → Cloud Run → Eventarc → Cloud SQL'
    },
    {
      icon: 'fa-search-location',
      label: 'Inspecciones',
      title: 'Inspecciones sin errores con captura obligatoria y trazabilidad',
      challenge: 'Datos incompletos y errores en inspecciones manuales sin trazabilidad por activo.',
      approach: 'App móvil con formularios inteligentes, fotos y GPS obligatorios. Sync offline/online. Dashboard con métricas en tiempo real.',
      result: '-60% errores de captura en 3 semanas. Trazabilidad completa por activo.',
      stack: 'Flutter + Firebase/GCP + Serverless sync'
    },
    {
      icon: 'fa-hard-hat',
      label: 'Seguridad minera',
      title: 'Inspecciones de seguridad con evidencia completa y alertas automáticas',
      challenge: 'Inspecciones de seguridad en zonas remotas sin evidencia confiable y reportes que tardan días.',
      approach: 'App móvil offline-first para zonas sin cobertura, checklist de seguridad, fotos georreferenciadas y alertas automáticas al sincronizar.',
      result: '100% inspecciones con evidencia georreferenciada. Alertas críticas en minutos, no días.',
      stack: 'Flutter + Cloud Functions + Pub/Sub + BigQuery'
    },
    {
      icon: 'fa-seedling',
      label: 'Agro',
      title: 'Control de insumos y certificaciones sin errores de inventario',
      challenge: 'Control manual de insumos agrícolas con errores frecuentes en inventarios y certificaciones sin trazabilidad.',
      approach: 'App móvil para registro de insumos en campo (QR, fotos, GPS) y plataforma web para trazabilidad completa y reportes de certificación.',
      result: 'Trazabilidad completa de insumos por lote y parcela. Certificaciones con evidencia auditable.',
      stack: 'Flutter + Firebase + Airflow ETL + BigQuery'
    }
  ],
  proofTitle: 'Prueba de valor y señales de confianza',
  proofSubtitle:
    'La propuesta no se sostiene por la tecnología detrás. Se sostiene por lo que el equipo en terreno usa, lo que el supervisor ve y lo que el auditor encuentra.',
  proofMetrics: [
    {
      value: 'Offline real',
      label: 'captura completa sin red, sin pérdida ni duplicados',
      detail: 'No es un "modo offline" parcial. La app está construida desde cero para operar 100% sin internet.'
    },
    {
      value: 'Trazable',
      label: 'GPS + foto + timestamp + firma en cada registro',
      detail: 'No es opcional. Cada captura incluye evidencia inmutable automáticamente — el operario no puede "olvidar" la foto.'
    },
    {
      value: 'Integrado',
      label: 'conectado a tu ERP, SAP y sistemas existentes',
      detail: 'APIs REST documentadas. La plataforma no vive aislada — los datos fluyen entre campo y oficina central.'
    }
  ],
  proofPoints: [
    {
      icon: 'fa-wifi',
      title: 'Funciona donde no hay señal',
      description: 'Minas, bosques, fincas remotas. El equipo captura todo normalmente y al detectar red, sincroniza sin intervención.'
    },
    {
      icon: 'fa-fingerprint',
      title: 'Evidencia inmutable por defecto',
      description: 'GPS, fotos, timestamp y firma digital se registran automáticamente. Sin atajos, sin manipulación posible.'
    },
    {
      icon: 'fa-handshake',
      title: 'Implementación directa, sin intermediarios',
      description: 'Trabajas conmigo desde el diagnóstico hasta que el equipo en campo lo está usando. Sin capas comerciales ni rotación de consultores.'
    }
  ],
  trustBand: {
    eyebrow: 'Señales de relación',
    title: 'Operaciones de campo con trazabilidad real, no con una app genérica de formularios',
    description:
      'La diferencia no está en tener una app. Está en conectar campo, oficina y trazabilidad dentro de una operación que sí se puede sostener.',
    items: [
      {
        value: 'Offline-first real',
        label: 'diseñado para zonas sin cobertura, no como feature añadido.'
      },
      {
        value: 'Trazabilidad inmutable',
        label: 'GPS + foto + timestamp + firma son el default, no una opción.'
      },
      {
        value: 'Conectado',
        label: 'integración con ERP, SAP y sistemas existentes vía APIs REST.'
      },
      {
        value: 'Directo',
        label: 'diagnóstico, implementación y acompañamiento se trabajan en la misma conversación.'
      }
    ]
  },
  stackTitle: 'Stack y arquitectura que aplico para operaciones de campo',
  stackSubtitle:
    'La elección tecnológica depende del caso, pero la arquitectura siempre prioriza offline, trazabilidad, integración y operabilidad.',
  stackGroups: [
    {
      icon: 'fa-mobile-alt',
      title: 'App móvil',
      description: 'Captura en terreno con soporte offline completo.',
      items: [
        'Flutter para iOS y Android nativos',
        'SQLite local para persistencia offline',
        'Sincronización automática con resolución de conflictos'
      ]
    },
    {
      icon: 'fa-server',
      title: 'Backend',
      description: 'Servicios, eventos y lógica de negocio.',
      items: [
        'Cloud Run para APIs y workers',
        'Pub/Sub para eventos y sincronización',
        'Firestore para estados y datos en tiempo real'
      ]
    },
    {
      icon: 'fa-database',
      title: 'Datos y analítica',
      description: 'Almacenamiento, transformación y reporte.',
      items: [
        'BigQuery para analítica e histórico',
        'Cloud SQL cuando el flujo pide SQL relacional',
        'Dataform para transformaciones limpias'
      ]
    },
    {
      icon: 'fa-chart-column',
      title: 'Observabilidad',
      description: 'Monitoreo, alertas y auditoría de la operación.',
      items: [
        'Cloud Logging para auditoría de eventos',
        'Alertas configurables por SLA y desviaciones',
        'Dashboard con KPIs operativos: MTTR, cobertura, cumplimiento'
      ]
    }
  ],
  differentiationTitle: '¿Qué hace útil este enfoque frente a una herramienta genérica de formularios?',
  differentiationSubtitle:
    'La diferencia no está en "tener una app". Está en que la operación completa — captura, trazabilidad, integración y adopción — funcione de verdad.',
  differentiators: [
    {
      icon: 'fa-user-tie',
      title: 'No soy un software genérico — soy un especialista que implementa',
      subtitle: 'La solución se diseña para tu flujo, no al revés',
      description: 'No vendo licencias y desaparezco. Diseño tu operación específica y acompaño la adopción con tu equipo de campo hasta que funcione.',
      highlight: 'Implementación en 2-3 semanas, no 6+ meses'
    },
    {
      icon: 'fa-wifi',
      title: 'Offline-first de verdad, no un feature añadido',
      subtitle: 'Diseñado para minas, bosques y fincas remotas',
      description: 'La app está construida desde cero para operar 100% sin internet, con sincronización inteligente. No es un modo degradado.',
      highlight: 'Captura completa sin red, sin pérdida ni duplicados'
    },
    {
      icon: 'fa-fingerprint',
      title: 'Trazabilidad inmutable por defecto',
      subtitle: 'GPS + timestamp + fotos obligatorias + firma digital',
      description: 'No es opcional. Cada registro incluye evidencia completa automáticamente. El operario no puede "olvidar" el GPS o la foto.',
      highlight: 'Auditorías sin hallazgos por falta de documentación'
    },
    {
      icon: 'fa-handshake',
      title: 'Trabajas directo conmigo — sin intermediarios',
      subtitle: '+10 años en operaciones de campo',
      description: 'La misma persona que entiende tu problema diseña la solución, la implementa y te acompaña. Sin capas de consultora ni rotación de equipo.',
      highlight: '+5M registros procesados en implementaciones reales'
    }
  ],
  notIdealTitle: 'Cuándo NO soy tu mejor opción',
  notIdealIntro: 'Prefiero filtrar esto en cinco minutos y no en el mes dos del proyecto. Si tu caso encaja en alguno de estos puntos, te lo digo directo:',
  notIdealItems: [
    'Buscas una plataforma genérica de formularios sin personalización para tu flujo operativo.',
    'Tu operación es 100% indoor, sin necesidad de offline, GPS ni trazabilidad con evidencia.',
    'El driver principal de la compra es el logo de una marca grande por tema de compliance — no que la herramienta funcione.',
    'Quieres una demo rápida para mostrar en una reunión, no una solución que entre a producción.',
    'No hay interés en adopción real: si el equipo de campo no la va a usar, la tecnología no resuelve el problema.'
  ],
  execution: {
    eyebrow: 'Quién ejecuta',
    title: 'La lectura de tu operación, el diseño de la solución y la implementación se trabajan directo conmigo',
    description:
      'Si el caso avanza, no pasas de una capa comercial a otra técnica. La misma persona que entiende tu problema en campo define app, backend, integración y acompañamiento.',
    bullets: [
      'Diagnóstico de la operación, diseño de la solución y decisiones de integración conectados.',
      'Criterio para separar lo que necesita app móvil, lo que necesita dashboard y lo que necesita automatización.',
      'Implementación pensada para adopción real, no solo para demo o piloto corto.'
    ],
    ctaLabel: 'Ver experiencia y enfoque'
  },
  faqTitle: 'Preguntas frecuentes',
  faqSubtitle: 'Lo que normalmente conviene aclarar antes de digitalizar operaciones de campo.',
  faqs: [...fieldOperationsFaqs],
  contact: {
    eyebrow: 'Diagnóstico de operaciones de campo',
    title: 'Cuéntame el cuello de botella de tu operación. Te digo si puedo ayudarte antes de cobrarte nada.',
    description:
      'En la primera conversación (30 minutos, sin costo) mapeamos el problema, validamos si encaja con lo que hago, y si encaja te propongo cómo lo abordaría. Si no encaja, te lo digo en esa misma llamada.',
    detailsTitle: 'En esta conversación revisamos:',
    detailsItems: [
      'Cómo se captura hoy la información en campo y qué se pierde en el proceso',
      'Dónde está el cuello de botella real: captura, supervisión, trazabilidad o integración',
      'Qué nivel de offline, evidencia y trazabilidad necesita tu operación',
      'Si mi enfoque encaja o no — si no encaja, te lo digo en esa misma llamada'
    ],
    topics: [
      { value: '', label: 'Selecciona el tipo de operación o necesidad', disabled: true, selected: true },
      { value: 'app-movil-offline', label: 'App móvil offline para equipo de campo' },
      { value: 'ordenes-automaticas', label: 'Órdenes de servicio desde alarmas o series de tiempo' },
      { value: 'dashboard-kpis', label: 'Dashboard web con KPIs operativos' },
      { value: 'trazabilidad-auditoria', label: 'Trazabilidad y auditoría con evidencia' },
      { value: 'integracion-erp-sap', label: 'Integración con ERP, SAP u otros sistemas' },
      { value: 'otro', label: 'Otro / Aún no lo tengo claro' }
    ],
    formTitle: 'Cuéntame de tu operación de campo',
    detailPlaceholder: '¿Qué operación hoy depende de papel, WhatsApp o herramientas genéricas? ¿Dónde se pierde la información? ¿Qué intentaron antes?',
    source: 'gestion-operaciones-de-campo'
  }
};
