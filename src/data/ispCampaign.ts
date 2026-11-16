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
  solution: string;
  deliverable: string;
  benefit: string;
  relatedSolutions: string[];
  illustration: Extract<IspIllustration, { kind: 'animated-svg' }>;
  sources: string;
  measurementNote: string;
}

export const ispScenarios: IspScenario[] = [
  {
    id: 'comercial', area: 'Comercial',
    title: 'Más seguimiento comercial, desde el primer contacto hasta el cobro.',
    problem: 'Cuando ventas, activaciones y pagos quedan separados, pueden quedar oportunidades, altas o diferencias sin atender.',
    consequence: 'También cuesta reconstruir qué pasó antes de una cancelación.',
    solution: 'Conectá el recorrido comercial y el historial del cliente. Desarrollo o integro aplicaciones para seguimiento, activaciones, facturación y cobros.',
    deliverable: 'Estados, pendientes y diferencias relacionados, con responsables y evidencia para darles seguimiento.',
    benefit: 'Tu equipo puede retomar oportunidades, destrabar altas, revisar cobros y orientar la atención sin reconstruir cada caso.',
    relatedSolutions: ['Captación y activaciones', 'Facturación y cobros', 'Retención y análisis de cancelaciones'],
    illustration: ispIllustrations.comercial,
    sources: 'CRM · Facturación · Pagos · Atención',
    measurementNote: 'Una diferencia no equivale automáticamente a pérdida de ingresos. Analizar cancelaciones ayuda a investigar, no prueba causas ni garantiza retención. Según el alcance, medimos conversión a altas, tiempos de activación, cartera y bajas. Evaluar margen requiere costos; ARPU no lo sustituye.'
  },
  {
    id: 'operativa', area: 'Operativa',
    title: 'Menos tareas dispersas. Más continuidad en la atención.',
    problem: 'Órdenes, citas y reclamos repartidos entre mensajes, llamadas y sistemas hacen difícil saber qué falta o qué se hizo antes.',
    consequence: 'Se puede repetir trabajo mientras un caso sigue pendiente.',
    solution: 'Reuní órdenes, responsables e historial. Construyo aplicaciones para instalaciones y soporte, conecto el trabajo de las cuadrillas y automatizo traspasos que hoy dependen de seguimiento manual.',
    deliverable: 'Un flujo con pendientes, asignaciones y evidencia de atención, conectado al servicio del cliente.',
    benefit: 'Tu equipo sabe quién atiende cada caso y cuenta con antecedentes para coordinar la siguiente intervención.',
    relatedSolutions: ['Órdenes e instalaciones', 'Soporte y reclamos recurrentes', 'Automatización de tareas y avisos'],
    illustration: ispIllustrations.operativa,
    sources: 'Tickets · Órdenes · Cuadrillas · Inventario',
    measurementNote: 'Los criterios de recurrencia, evidencia de cierre y responsabilidades se acuerdan con el equipo; no se promete detección automática de causas. Tiempos de instalación o resolución, reaperturas y visitas repetidas permiten evaluar el proceso, con ventanas y definiciones explícitas.'
  },
  {
    id: 'tecnica', area: 'Técnica',
    title: 'Del aviso de red a la prioridad de atención.',
    problem: 'Las alertas por sí solas no explican qué clientes o servicios están afectados.',
    consequence: 'Cuesta priorizar incidentes, seguir la calidad y sustentar decisiones de capacidad.',
    solution: 'Relacioná monitoreo, servicios e historial. Desarrollo o integro herramientas para NOC, alertas contextualizadas y análisis de disponibilidad, calidad y capacidad.',
    deliverable: 'Información relacionada, criterios de alerta y vistas para revisar el servicio y sus tendencias.',
    benefit: 'Tu equipo puede enfocar la atención y planificar la revisión de capacidad con contexto, en lugar de decidir por una señal aislada.',
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
