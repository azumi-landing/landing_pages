export type IspIllustration = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  credit?: string;
} & (
  | { kind: 'svg' }
  | { kind: 'animated-svg'; posterSrc: string }
);

export const ispCtaLabel = 'Conversemos sobre tu ISP';

export const ispIllustrations = {
  introduccion: {
    kind: 'svg', src: '/images/isp/hero.svg', width: 1000, height: 600,
    alt: 'Sistemas de gestión, operación y red relacionados alrededor de una solución digital.',
    caption: 'Esquema ilustrativo · Sistemas y datos conectados'
  },
  comercial: {
    kind: 'animated-svg', src: '/images/isp/comercial.svg', posterSrc: '/images/isp/comercial-estatico.svg',
    width: 1000, height: 600, alt: 'Clientes, facturas y pagos relacionados para el seguimiento comercial.',
    caption: 'Ejemplo ilustrativo de seguimiento'
  },
  operativa: {
    kind: 'animated-svg', src: '/images/isp/operativa.svg', posterSrc: '/images/isp/operativa-estatico.svg',
    width: 1000, height: 600, alt: 'Atención, órdenes de trabajo y antecedentes relacionados.',
    caption: 'Ejemplo ilustrativo de atención'
  },
  tecnica: {
    kind: 'animated-svg', src: '/images/isp/tecnica.svg', posterSrc: '/images/isp/tecnica-estatico.svg',
    width: 1000, height: 600, alt: 'Red FTTH y herramientas de monitoreo para revisar el servicio.',
    caption: 'Ejemplo ilustrativo de priorización'
  },
  'forma-de-trabajo': {
    kind: 'svg', src: '/images/isp/como-trabajo.svg', width: 1000, height: 600,
    alt: 'Profesionales colaborando en la definición y construcción de una solución.',
    caption: 'Esquema ilustrativo · Entender, implementar y acompañar'
  },
  ingenieria: {
    kind: 'svg', src: '/images/isp/software-datos.svg', width: 1000, height: 600,
    alt: 'Aplicaciones, información relacionada y visualización de datos.',
    caption: 'Esquema ilustrativo · Software y ciclo de datos'
  },
  automatizacion: {
    kind: 'svg', src: '/images/isp/ia-automatizacion.svg', width: 1000, height: 600,
    alt: 'Documentos, procesamiento de información y revisión humana.',
    caption: 'Esquema ilustrativo · Conocimiento y acciones autorizadas'
  }
} as const satisfies Record<string, IspIllustration>;

export interface IspScenario {
  id: 'comercial' | 'operativa' | 'tecnica';
  area: string;
  title: string;
  problem: string;
  consequence: string;
  solution: string | { before: string; emphasis: string; after: string };
  deliverable: string;
  benefit: string;
  relatedSolutions: string[];
  illustration: Extract<IspIllustration, { kind: 'animated-svg' }>;
  sources: string;
  indicators?: string;
  measurementNote: string;
}

export const ispScenarios: IspScenario[] = [
  {
    id: 'comercial', area: 'Comercial',
    title: '¿Se pierden oportunidades entre ventas, activaciones y cobros?',
    problem: 'Ventas, activaciones y cobros desconectados dificultan el seguimiento del cliente.',
    consequence: 'Una oportunidad puede enfriarse, una activación retrasarse o un cobro quedar sin revisar.',
    solution: {
      before: 'Entiendo tu proceso y ',
      emphasis: 'desarrollo software a medida, integro y analizo tus datos y automatizo procesos',
      after: ', con agentes de IA cuando aportan valor.'
    },
    deliverable: 'aplicaciones con historial del cliente, pendientes, responsables y alertas.',
    benefit: 'retomar oportunidades, agilizar activaciones y revisar cobros con contexto.',
    relatedSolutions: ['Captación y activaciones', 'Facturación y cobros', 'Retención y análisis de cancelaciones'],
    illustration: ispIllustrations.comercial,
    sources: 'CRM · Facturación · Pagos · Atención al cliente',
    indicators: 'conversión a altas, tiempos de activación, cartera y cancelaciones, según el alcance.',
    measurementNote: 'una diferencia de facturación no implica automáticamente pérdida de ingresos. El análisis de cancelaciones ayuda a investigar posibles causas, pero no garantiza retención. Evaluar rentabilidad requiere considerar costos; el ARPU no equivale al margen.'
  },
  {
    id: 'operativa', area: 'Operativa',
    title: '¿Se repiten reclamos y se acumulan órdenes de servicio pendientes?',
    problem: 'Órdenes de servicio y reclamos dispersos dificultan coordinar instalaciones y soporte.',
    consequence: 'Una visita puede repetirse, una instalación retrasarse o un reclamo quedar sin resolver.',
    solution: {
      before: 'Entiendo tu operación y ',
      emphasis: 'desarrollo software a medida, conecto tus órdenes de servicio e historial y automatizo tareas y avisos',
      after: '.'
    },
    deliverable: 'aplicaciones con órdenes de servicio, responsables, agenda e historial de atención.',
    benefit: 'coordinar cuadrillas, agilizar instalaciones y atender reclamos con antecedentes.',
    relatedSolutions: ['Órdenes de servicio e instalaciones', 'Soporte y reclamos recurrentes', 'Automatización de tareas y avisos'],
    illustration: ispIllustrations.operativa,
    sources: 'Tickets · Órdenes de servicio · Cuadrillas · Inventario',
    measurementNote: 'Los criterios de recurrencia, evidencia de cierre y responsabilidades se acuerdan con el equipo; no se promete detección automática de causas. Tiempos de instalación o resolución, reaperturas y visitas repetidas permiten evaluar el proceso, con ventanas y definiciones explícitas.'
  },
  {
    id: 'tecnica', area: 'Técnica',
    title: '¿Cuesta saber qué falla en la red y qué atender primero?',
    problem: 'Alertas y métricas aisladas dificultan identificar qué servicios o clientes están afectados.',
    consequence: 'Un incidente puede tardar en priorizarse y una decisión de capacidad tomarse sin suficiente contexto.',
    solution: {
      before: 'Entiendo tu monitoreo y ',
      emphasis: 'desarrollo herramientas a medida, integro y analizo datos de red y automatizo alertas',
      after: '.'
    },
    deliverable: 'aplicaciones con alertas contextualizadas, servicios relacionados e indicadores de calidad y capacidad.',
    benefit: 'priorizar incidentes, revisar la calidad del servicio y planificar capacidad con evidencia.',
    relatedSolutions: ['Monitoreo y herramientas NOC', 'Disponibilidad y calidad', 'Alertas y planificación de capacidad'],
    illustration: ispIllustrations.tecnica,
    sources: 'Monitoreo · Logs · Inventario · Telemetría',
    measurementNote: 'Disponibilidad, latencia, pérdidas, throughput, utilización y cobertura se usan cuando corresponden, con puntos y períodos definidos. Una coincidencia no prueba causalidad y no toda degradación exige ampliar. Los modelos de demanda requieren historia y evaluación. Integrar herramientas NOC no incluye operar un NOC 24/7 o ampliar físicamente la red.'
  }
];

export const ispActivationSteps = [
  { title: 'Consulta comercial', description: 'Prospecto y solicitud registrados.', record: 'Origen y fecha de la oportunidad' },
  { title: 'Orden de instalación', description: 'Agenda, responsable y recursos.', record: 'Asignación y cambios de estado' },
  { title: 'Activación', description: 'Cierre técnico conectado con facturación.', record: 'Fecha y servicio activado' },
  { title: 'Servicio en operación', description: 'Monitoreo y atención relacionados con el abonado.', record: 'Eventos, incidencias y seguimiento' }
];

export const ispEngineeringCapabilities = [
  {
    id: 'objetivos', title: 'Objetivos, KPIs y hoja de ruta',
    description: 'Definimos la decisión, la medición y una primera intervención según valor, esfuerzo y dependencias.',
    problem: 'Prioridades sin criterios para decidir qué resolver primero.',
    delivery: 'Alcance, ficha de KPIs, línea base y metas acordadas.'
  },
  {
    id: 'software', title: 'Desarrollo y modernización',
    description: 'Construyo aplicaciones, módulos e interfaces, registrando desde el diseño los eventos que necesitan tus indicadores.',
    problem: 'Procesos que tus sistemas actuales no cubren.',
    delivery: 'Software integrado, documentación y transferencia.'
  },
  {
    id: 'integracion', title: 'Integración y ETL/ELT',
    description: 'Diseño extracción, carga, transformación y validación, con orden ETL o ELT y frecuencia por lotes o continua según las fuentes.',
    problem: 'Traspasos manuales y fuentes que no concilian.',
    delivery: 'Flujos supervisados, reglas de calidad y manejo de fallos.'
  },
  {
    id: 'dwh', title: 'DWH y modelo compartido',
    description: 'Relaciono históricos con granularidad y definiciones consistentes de abonado, servicio, zona y tiempo.',
    problem: 'Áreas que calculan clientes, ingresos o calidad de forma distinta.',
    delivery: 'Modelo integrado y vistas por área, sin crear silos por defecto.'
  },
  {
    id: 'modelos', title: 'Algoritmos, predicción y optimización',
    description: 'Evalúo reglas y modelos frente a una referencia; su utilidad depende de los datos y las restricciones.',
    problem: 'Decisiones de retención, capacidad o recursos que no aprovechan el historial.',
    delivery: 'Análisis y recomendaciones evaluados, con límites explícitos.'
  },
  {
    id: 'conocimiento', title: 'IA para documentos y conocimiento',
    description: 'Integro búsqueda y asistentes con recuperación de fuentes autorizadas —RAG— y evaluación de sus respuestas.',
    problem: 'Soporte que depende de buscar manuales o consultar a pocas personas.',
    delivery: 'Conocimiento consultable con fuentes y escalamiento humano.'
  },
  {
    id: 'agentes', title: 'Automatización y agentes',
    description: 'Conecto herramientas para tareas delimitadas, con permisos, trazabilidad y aprobaciones según sus consecuencias.',
    problem: 'Consultas y traspasos que requieren coordinación manual constante.',
    delivery: 'Flujos controlados; reglas deterministas cuando bastan.'
  },
  {
    id: 'evolucion', title: 'Visualización y mejora continua',
    description: 'Construyo tableros por rol y acompaño la revisión de uso, KPIs, fallos y costos para priorizar mejoras.',
    problem: 'Reportes sin responsables, seguimiento ni acciones de mejora.',
    delivery: 'Vistas para decidir y evolución con condiciones acordadas.'
  }
];

export const ispFaqs = [
  {
    question: '¿Tengo que reemplazar los sistemas de mi ISP?',
    answer: 'No por defecto. Primero revisamos la necesidad, lo que funciona y las interfaces disponibles. Podemos integrar, adaptar o desarrollar solo lo que hace falta; la viabilidad depende de los accesos e interfaces de tus sistemas.'
  },
  {
    question: '¿Puedo empezar por una sola necesidad?',
    answer: 'Sí. Una aplicación, integración, automatización o mejora de datos puede ser una primera entrega sin contratar todo el ciclo. Acordamos el alcance y los indicadores pertinentes; no hace falta incorporar IA si no aporta valor.'
  },
  {
    question: '¿Cómo acordamos inversión y plazos?',
    answer: 'Después de entender la necesidad y sus dependencias, acordamos alcance, entregables, inversión, plazos y acompañamiento antes de iniciar. No hay un precio o una duración universal; la consulta inicial no incluye un diagnóstico completo gratuito.'
  }
];
