import type { ServiceLandingConfig } from '../types/serviceLanding';
import { agenticAutomationTheme, fieldOperationsTheme, processAutomationTheme } from './serviceThemes';
import { fieldOperationsFaqs } from './faqs';

export const agenticAutomationLanding: ServiceLandingConfig = {
  seoTitle: 'Automatización Inteligente de Procesos — IA Agéntica, RPA y Consultoría',
  seoDescription: 'Consultoría integral de automatización: machine learning, deep learning, LLMs, RPA, IA agéntica e infraestructura cloud. Del diagnóstico a la operación con control humano y trazabilidad.',
  seoImage: '/og-agentic-automation.png',
  path: '/automatizacion-con-ia-agentica',
  theme: agenticAutomationTheme,
  badge: 'Consultoría integral: IA Agéntica + RPA + Automatización de procesos',
  title: 'Automatiza procesos de negocio con IA y control humano, desde el diagnóstico hasta la operación.',
  subtitle:
    'No empiezo por la tecnología. Primero entiendo tu proceso, elimino lo que no agrega valor y luego defino si conviene IA agéntica para decisiones y seguimiento, RPA para tareas repetitivas entre sistemas, o una combinación. El objetivo: menos trabajo manual, más trazabilidad y procesos que no dependan de una sola persona.',
  benefits: [
    'Menos seguimiento manual, menos mensajes perdidos y datos confiables',
    'IA con guardrails, aprobaciones humanas y rutas de escalamiento',
    'Procesos orquestados, monitoreados y preparados para escalar'
  ],
  metrics: [
    { value: '+10 años', label: 'diseñando operaciones digitales y automatización' },
    { value: '+5M', label: 'registros procesados en implementaciones reales' },
    { value: 'Por etapas', label: 'empezamos simple y subimos complejidad con control' },
    { value: 'Control humano', label: 'guardrails, aprobaciones y trazabilidad por defecto' }
  ],
  primaryCtaLabel: 'Escribir por WhatsApp',
  primaryCtaHref: 'https://wa.me/50432045265?text=Hola+H%C3%A9ctor%2C+quiero+revisar+un+proceso+de+mi+empresa+que+hoy+manejamos+con+WhatsApp%2C+Excel+o+seguimiento+manual.+Me+interesa+saber+si+se+puede+automatizar+con+IA+y+control+humano.',
  secondaryCtaLabel: 'Agendar diagnóstico de 30 min',
  secondaryCtaHref: '#como-funciona',
  problemTitle: '¿Tu empresa todavía depende de WhatsApp, Excel y recordatorios manuales?',
  problemSubtitle:
    'En muchas empresas hondureñas el problema no es falta de tecnología. Es que el seguimiento vive regado entre chats, hojas de cálculo, llamadas y personas que tienen que acordarse de todo.',
  problemCards: [
    {
      icon: 'fa-comments',
      title: 'Los clientes escriben y nadie les da seguimiento a tiempo',
      description: 'Entre WhatsApp, llamadas y correos, una consulta importante puede quedar enterrada.'
    },
    {
      icon: 'fa-file-excel',
      title: 'La información queda en Excel, chats y libretas',
      description: 'El gerente no ve el estado completo del proceso sin pedir reportes o revisar mensajes.'
    },
    {
      icon: 'fa-user-clock',
      title: 'Demasiado tiempo se va en copiar, responder y recordar',
      description: 'El equipo termina haciendo seguimiento manual en vez de atender mejor al cliente.'
    },
    {
      icon: 'fa-user-gear',
      title: 'Una persona clave sabe cómo funciona todo',
      description: 'Si esa persona se atrasa, se enferma o se va, el proceso queda frágil.'
    },
    {
      icon: 'fa-robot',
      title: 'Ya probaron IA, pero no quedó en operación',
      description: 'Usar un chat suelto ayuda poco si no está conectado al flujo real de trabajo.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Hay desconfianza hacia automatizar demasiado',
      description: 'Es una preocupación válida. Por eso los flujos se diseñan con límites, aprobaciones y revisión humana.'
    }
  ],
  riskTitle: 'Automatizar sin diagnosticar el proceso es acelerar el caos',
  riskDescription:
    'La oportunidad no está en conectar un chatbot o un script y esperar milagros. Está en definir qué proceso necesita orden, qué puede automatizarse con bajo riesgo, qué debe aprobar una persona y cómo dejar trazabilidad de cada paso importante.',
  capabilitiesTitle: 'IA no es solo un chatbot. Esto es lo que realmente abarca.',
  capabilitiesSubtitle:
    'Cuando hablo de automatización inteligente no me refiero solo a conectar un LLM. La solución puede combinar machine learning, deep learning, RPA, agentes de IA e infraestructura cloud — según lo que el proceso necesite. Cada proyecto usa las piezas que corresponden, no las que están de moda.',
  capabilities: [
    {
      icon: 'fa-brain',
      title: 'Machine Learning',
      pain: '',
      solution: 'Detección de anomalías, clasificación automática, scoring y priorización de casos.',
      outcome: 'El sistema aprende patrones de los datos y automatiza decisiones repetitivas basadas en evidencia, no en reglas fijas.',
      bullets: [
        'Clasificación y scoring',
        'Detección de anomalías',
        'Priorización automática'
      ]
    },
    {
      icon: 'fa-microchip',
      title: 'Deep Learning',
      pain: '',
      solution: 'Reconocimiento de patrones complejos en imágenes, documentos, audio o secuencias.',
      outcome: 'Procesa información no estructurada que antes requería revisión humana exhaustiva.',
      bullets: [
        'Reconocimiento de imágenes y texto',
        'Procesamiento de documentos',
        'Patrones en datos secuenciales'
      ]
    },
    {
      icon: 'fa-robot',
      title: 'LLMs y lenguaje natural',
      pain: '',
      solution: 'Modelos de lenguaje para interpretar mensajes, clasificar solicitudes y generar respuestas contextuales.',
      outcome: 'Lo que el cliente o empleado escribe en lenguaje natural se convierte en una acción del proceso.',
      bullets: [
        'Interpretación de mensajes',
        'Respuestas contextuales',
        'Escalamiento con criterio'
      ]
    },
    {
      icon: 'fa-gears',
      title: 'RPA',
      pain: '',
      solution: 'Automatización de tareas repetitivas entre sistemas — copiar datos de un PDF a un ERP, consolidar planillas.',
      outcome: 'Elimina el trabajo manual de mover datos entre pantallas, reducir errores y liberar al equipo.',
      bullets: [
        'Integración entre sistemas',
        'Extracción y carga de datos',
        'Automatización de planillas'
      ]
    },
    {
      icon: 'fa-code-branch',
      title: 'IA Agéntica',
      pain: '',
      solution: 'Agentes que deciden, ejecutan, escalan y aprenden con supervisión humana y guardrails.',
      outcome: 'Procesos completos que corren con intervención humana solo donde realmente se necesita criterio.',
      bullets: [
        'Agentes con guardrails',
        'Aprobaciones humanas',
        'Ejecución con trazabilidad'
      ]
    },
    {
      icon: 'fa-cloud',
      title: 'Infraestructura cloud',
      pain: '',
      solution: 'Bases de datos, almacenamiento, procesamiento distribuido (Dataproc), orquestación (Airflow), APIs y monitoreo.',
      outcome: 'Todo corre sobre infraestructura escalable, monitoreada y lista para crecer con tu operación.',
      bullets: [
        'Bases de datos SQL y NoSQL',
        'Dataproc y Airflow',
        'APIs, monitoreo y cloud storage'
      ]
    }
  ],
  methodologyTitle: 'Cómo trabajamos juntos: del diagnóstico a la operación',
  methodologySubtitle:
    'No automatizo a ciegas. Sigo un proceso de 6 etapas pensado para asegurar que la solución resuelva un problema real de tu empresa — no uno que yo asumo. Cada etapa tiene un entregable concreto y vos participás en las decisiones importantes. Un proyecto típico puede tomar entre 8 y 15 semanas, dependiendo de la complejidad del proceso.',
  methodologySteps: [
    {
      step: 1,
      title: 'Entendemos tu contexto y definimos prioridades',
      description: 'Antes de hablar de tecnología, entiendo qué hace tu empresa, cuál es tu operación y qué procesos vale la pena mejorar primero.',
      icon: 'fa-magnifying-glass-chart',
      items: [
        'Conversamos sobre los dolores reales de tu operación: ¿dónde se pierde tiempo, clientes o dinero?',
        'Seleccionamos juntos el proceso con mayor potencial de mejora y menor riesgo.',
        'Definimos qué significaría "éxito" para vos: ¿más velocidad, menos errores, mejor trazabilidad, menos dependencia de una persona?'
      ]
    },
    {
      step: 2,
      title: 'Mapeamos cómo funciona tu proceso hoy',
      description: 'Entrevisto a las personas que viven el proceso a diario para entenderlo sin filtros, usando datos reales cuando existen.',
      icon: 'fa-diagram-project',
      items: [
        'Hablo con tu equipo: quienes reciben solicitudes, quienes deciden, quienes ejecutan.',
        'Reviso documentos, sistemas y registros que ya tengas para contrastar lo que se dice con lo que realmente pasa.',
        'Te entrego un mapa claro del proceso actual: entradas, pasos, cuellos de botella y dependencias.'
      ]
    },
    {
      step: 3,
      title: 'Identificamos qué mejorar antes de automatizar',
      description: '"Automatizar el caos solo produce caos más rápido". Por eso primero eliminamos pasos innecesarios y simplificamos el flujo.',
      icon: 'fa-arrows-spin',
      items: [
        'Clasificamos cada paso: ¿agrega valor al cliente, es necesario para el negocio o es puro desperdicio?',
        'Eliminamos esperas, traspasos innecesarios y duplicaciones antes de meter tecnología.',
        'Te propongo un flujo rediseñado más simple, más rápido y listo para automatizar.'
      ]
    },
    {
      step: 4,
      title: 'Decidimos juntos qué tecnología usar',
      description: 'No todo requiere IA. Analizamos cada parte del proceso y elegimos la herramienta correcta: IA agéntica, RPA, pipelines de datos o una combinación.',
      icon: 'fa-code-branch',
      items: [
        'Para tareas repetitivas entre sistemas (ej. copiar datos de un PDF a tu ERP) → automatización tradicional o RPA.',
        'Para tareas que requieren interpretar mensajes, clasificar con criterio o decidir en contexto → IA agéntica con supervisión humana.',
        'Para integrar datos entre sistemas, validar calidad y preparar reportes → pipelines de datos orquestados.'
      ]
    },
    {
      step: 5,
      title: 'Implementamos con control y sin sorpresas',
      description: 'Armo la solución, la conecto con tus sistemas y defino qué pasa cuando algo falla o cuando la IA no tiene certeza.',
      icon: 'fa-gears',
      items: [
        'Conecto la automatización con tus herramientas actuales (WhatsApp, Excel, CRM, ERP, APIs).',
        'Definimos juntos las reglas: ¿qué puede ejecutarse solo y qué necesita tu aprobación?',
        'Preparamos el plan para los "días lluviosos": ¿qué hace el sistema si falta un dato, si falla una conexión o si llega algo inesperado?'
      ]
    },
    {
      step: 6,
      title: 'Medimos, ajustamos y te dejo operando',
      description: 'No entrego y desaparezco. Dejo dashboards para que veas el proceso en tiempo real y ajustamos lo necesario con base en el uso real.',
      icon: 'fa-chart-line',
      items: [
        'Dashboards para que vos y tu equipo vean el estado de cada caso sin pedir reportes.',
        'Alertas automáticas si algo se desvía de lo esperado.',
        'Ajustes basados en lo que funcione y lo que no durante las primeras semanas de operación real.',
        'Documentación clara para que tu equipo pueda operar y mantener la solución.'
      ]
    }
  ],
  workflowTitle: '',
  workflowSubtitle: '',
  workflow: [],
  casesTitle: 'Casos de uso comunes',
  casesSubtitle:
    'Estos son casos donde la automatización — con IA agéntica, RPA o pipelines de datos — puede aplicarse con bajo riesgo. Si tu rubro o tipo de proceso no aparece, igual podemos revisar si hay un flujo que valga la pena automatizar.',
  cases: [
    {
      icon: 'fa-house',
      label: 'Inmobiliarias',
      title: 'Seguimiento a prospectos y visitas',
      challenge: 'Los interesados escriben por WhatsApp, piden información y luego se pierde el seguimiento.',
      approach: 'Clasificar leads, responder preguntas frecuentes, recordar visitas y registrar qué propiedad busca cada cliente.',
      result: 'No perder clientes por falta de respuesta y dar seguimiento con más orden.',
      stack: 'WhatsApp + hojas de cálculo + CRM o base interna'
    },
    {
      icon: 'fa-stethoscope',
      label: 'Clínicas',
      title: 'Citas, resultados y consultas frecuentes',
      challenge: 'Recepción pasa mucho tiempo confirmando citas, explicando pasos y respondiendo lo mismo.',
      approach: 'Recordatorios automáticos, clasificación de consultas y escalamiento a personal humano cuando aplica.',
      result: 'Atención más rápida sin quitar control al equipo clínico o administrativo.',
      stack: 'WhatsApp + calendario + formularios + sistema existente'
    },
    {
      icon: 'fa-hammer',
      label: 'Ferreterías',
      title: 'Cotizaciones y pedidos de materiales',
      challenge: 'Los clientes preguntan por precios, existencia y entregas en varios chats.',
      approach: 'Ordenar solicitudes, pedir datos faltantes, preparar cotizaciones y alertar cuando requiere revisión.',
      result: 'Menos confusión y mejor seguimiento a oportunidades de venta.',
      stack: 'WhatsApp + inventario + Excel o sistema de ventas'
    },
    {
      icon: 'fa-hotel',
      label: 'Hoteles y tours',
      title: 'Reservas, disponibilidad y pagos pendientes',
      challenge: 'En temporada alta, las consultas y confirmaciones se mezclan entre recepción y administración.',
      approach: 'Responder información básica, registrar solicitudes, recordar pagos y escalar casos especiales.',
      result: 'Más orden en reservas sin depender de revisar cada chat manualmente.',
      stack: 'WhatsApp + calendario + formularios + hojas de control'
    },
    {
      icon: 'fa-landmark',
      label: 'Cooperativas',
      title: 'Documentos pendientes y orientación inicial',
      challenge: 'El cliente pregunta por requisitos, estados o pasos, y el seguimiento queda manual.',
      approach: 'Orientar sobre requisitos, recordar documentos pendientes y escalar casos que requieren evaluación.',
      result: 'Menos llamadas repetitivas y mejor control del avance de cada solicitud.',
      stack: 'WhatsApp + formularios + sistema interno o base de datos'
    },
    {
      icon: 'fa-car',
      label: 'Talleres',
      title: 'Citas, repuestos y cotizaciones',
      challenge: 'Las solicitudes llegan incompletas y alguien debe pedir placa, modelo, fotos o datos del repuesto.',
      approach: 'Pedir datos necesarios, ordenar cotizaciones, recordar citas y registrar estado del caso.',
      result: 'Menos mensajes perdidos y mejor seguimiento al cliente.',
      stack: 'WhatsApp + agenda + inventario o hoja de pedidos'
    },
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
  casesCta: {
    title: '¿Tienes otro tipo de negocio o un proceso más complejo?',
    description:
      'También se pueden revisar procesos de energía, operación técnica, mantenimiento, monitoreo, aprobaciones internas o flujos con varios sistemas. La forma prudente no es automatizar todo de golpe: empezamos con una parte sencilla y bien controlada, medimos si aporta valor y luego avanzamos hacia procesos más complejos.',
    ctaLabel: 'Consultar mi proceso por WhatsApp',
    ctaHref:
      'https://wa.me/50432045265?text=Hola+H%C3%A9ctor%2C+tengo+un+proceso+operativo+que+podr%C3%ADa+automatizarse+con+IA+ag%C3%A9ntica.+Quiero+revisar+si+conviene+empezar+con+un+flujo+sencillo+y+luego+aumentar+la+complejidad+por+etapas.'
  },
  proofTitle: '',
  proofSubtitle: '',
  proofMetrics: [],
  proofPoints: [],
  trustBand: {
    eyebrow: '',
    title: '',
    description: '',
    items: []
  },
  stackTitle: '',
  stackSubtitle: '',
  stackGroups: [],
  differentiationTitle: 'Qué hace útil este enfoque',
  differentiationSubtitle:
    'La diferencia no está en usar una tecnología de moda. Está en entender tu proceso, elegir la herramienta correcta y trabajar con control real.',
  differentiators: [
    {
      icon: 'fa-route',
      title: 'No empiezo por la tecnología',
      subtitle: 'Empiezo por tu proceso',
      description: 'Primero entendemos tu operación real — quién hace qué, dónde se pierde tiempo, qué datos importan. La tecnología se elige después.',
      highlight: 'La solución se adapta a tu realidad'
    },
    {
      icon: 'fa-code-branch',
      title: 'No todo requiere IA',
      subtitle: 'RPA, reglas o pipelines cuando sea mejor',
      description: 'Algunas tareas se resuelven mejor con automatización tradicional. No fuerzo IA donde no conviene — te digo si alcanza con algo más simple.',
      highlight: 'Tecnología correcta para cada problema'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Control, no caja negra',
      subtitle: 'Guardrails, trazabilidad y aprobaciones humanas',
      description: 'Cada automatización incluye límites claros, registro de acciones y revisión humana donde importa. Si la IA no tiene certeza, escala.',
      highlight: 'Velocidad sin perder el control'
    },
    {
      icon: 'fa-handshake',
      title: 'Trabajas directo conmigo',
      subtitle: 'Sin intermediarios, del diagnóstico al deploy',
      description: 'Una sola persona entiende tu flujo, define la solución, la implementa y te la deja operando. Con documentación clara y código mantenible.',
      highlight: '+10 años y +5M registros en producción'
    }
  ],
  notIdealTitle: 'Cuándo NO soy tu mejor opción',
  notIdealIntro: 'Prefiero filtrar esto en cinco minutos y no en el mes dos del proyecto. Si tu caso encaja en alguno de estos puntos, te lo digo directo:',
  notIdealItems: [
    'Solo quieres un chatbot genérico o un script rápido sin intención de entender el proceso, mantenerlo ni monitorearlo.',
    'Quieres automatizar decisiones sensibles sin supervisión humana, guardrails ni trazabilidad.',
    'No tienes claro qué flujo quieres mejorar ni qué problema concreto resolvemos.',
    'Quieres mover datos entre dos puntos sin revisar calidad, reglas de negocio ni integridad.',
    'El problema se resuelve mejor con un cambio de proceso, una regla simple o capacitación, no con automatización.',
    'Buscas una promesa de resultados mágicos sin revisar datos, equipo ni operación real.',
    'La prioridad es usar una marca o tecnología específica por comodidad, no que la solución funcione en tu contexto.'
  ],
  execution: {
    eyebrow: '',
    title: '',
    description: '',
    bullets: [],
    ctaLabel: ''
  },
  faqTitle: 'Preguntas frecuentes',
  faqSubtitle: 'Respuestas directas para gerentes y dueños antes de automatizar procesos.',
  faqs: [
    {
      question: '¿La IA va a reemplazar a mi equipo?',
      answer:
        'No es el enfoque. La automatización se usa como apoyo operativo para tareas repetitivas: clasificar, responder preguntas frecuentes, recordar pendientes, mover datos entre sistemas o escalar casos. Las decisiones sensibles quedan bajo revisión humana con guardrails y aprobaciones.'
    },
    {
      question: '¿Necesito tener sistemas modernos para empezar?',
      answer:
        'No necesariamente. Muchas empresas empiezan con WhatsApp, Excel, formularios o correo. Primero se ordena el flujo, se elimina lo que no agrega valor y luego se decide qué integración o tecnología conviene.'
    },
    {
      question: '¿Esto sirve para empresas pequeñas o solo para corporativos?',
      answer:
        'Sirve para cualquier empresa donde exista un proceso repetitivo que consume tiempo, causa pérdida de clientes o depende de una sola persona. La recomendación es empezar con un flujo pequeño, claro y de bajo riesgo, y escalar por etapas si el caso lo amerita.'
    },
    {
      question: '¿Qué pasa si la automatización se equivoca o falla?',
      answer:
        'Por eso se diseñan guardrails, aprobaciones humanas, rutas de escalamiento y monitoreo desde el día uno. La automatización no debe ejecutar acciones sensibles sin control ni fallar en silencio. Las excepciones se modelan como parte del diseño.'
    },
    {
      question: '¿Cuánto cuesta y cómo empezamos?',
      answer:
        'Depende del flujo, las integraciones y el nivel de control requerido. Por eso conviene empezar con un diagnóstico de 30 minutos sin costo: revisamos el proceso, detectamos cuellos de botella y definimos si conviene automatizar — y con qué herramientas. Si no encaja, te lo digo en esa misma llamada.'
    }
  ],
  contact: {
    eyebrow: 'Diagnóstico de automatización sin costo',
    title: 'Cuéntame qué proceso quieres ordenar. Te digo si conviene IA agéntica, RPA, pipelines o algo más simple.',
    description:
      'En una llamada de 30 minutos revisamos el flujo, detectamos cuellos de botella y definimos si mi enfoque encaja con tu caso. Si no encaja, te lo digo en esa misma llamada.',
    detailsTitle: 'En esta conversación revisamos:',
    detailsItems: [
      'Qué parte del flujo depende hoy de WhatsApp, Excel, seguimiento manual o scripts frágiles',
      'Dónde se pierden clientes, tiempo, datos o trazabilidad',
      'Qué se puede automatizar con bajo riesgo y qué debe revisar una persona',
      'Si conviene IA agéntica, RPA, pipelines de datos o una combinación'
    ],
    topics: [
      { value: '', label: 'Selecciona el tipo de proceso', disabled: true, selected: true },
      { value: 'whatsapp-seguimiento', label: 'WhatsApp y seguimiento a clientes' },
      { value: 'recordatorios', label: 'Recordatorios automáticos y alertas' },
      { value: 'cotizaciones-pedidos', label: 'Cotizaciones, pedidos o reservas' },
      { value: 'clasificacion-solicitudes', label: 'Clasificación de solicitudes y triage' },
      { value: 'etl-elt', label: 'Pipelines ETL / ELT y calidad de datos' },
      { value: 'airflow-orquestacion', label: 'Orquestación de workflows con Airflow' },
      { value: 'integracion-sistemas', label: 'Integración entre sistemas y fuentes' },
      { value: 'otro', label: 'Otro / Aún no lo tengo claro' }
    ],
    formTitle: 'Cuéntame el proceso que quieres ordenar',
    detailPlaceholder: '¿Qué proceso manejan hoy con WhatsApp, Excel, seguimiento manual, scripts o integraciones frágiles? ¿Dónde se pierde tiempo, clientes o datos?',
    source: 'automatizacion-con-ia-agentica'
  }
};

export const processAutomationLanding: ServiceLandingConfig = {
  seoTitle: 'Automatización de Procesos — Airflow, integraciones y datos confiables',
  seoDescription: 'Consultoría e implementación de automatización de procesos para integrar sistemas, ordenar datos y ejecutar flujos críticos con control, monitoreo y trazabilidad.',
  seoImage: '/og-process-automation.png',
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
  seoTitle: 'Gestión de Operaciones de Campo — App offline, dashboard y trazabilidad',
  seoDescription: 'App móvil offline + dashboard web + trazabilidad auditable con GPS y fotos. Implementación directa en 2-3 semanas. +5M registros procesados en producción.',
  seoImage: '/og-field-operations.png',
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
