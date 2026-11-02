export type SolutionStatus = 'active' | 'coming-soon' | 'hidden';

interface CommercialCta {
  label: string;
}

interface CommercialPrice {
  amount: number;
  currency: 'HNL';
  qualifier: 'Desde' | 'Gratuita';
}

interface CommercialOffer {
  id: string;
  name: string;
  price?: CommercialPrice;
  duration?: string;
  cadence?: string;
  condition?: string;
}

interface CommercialService {
  id: string;
  name: string;
  shortName: string;
  description: string;
  path: string;
  contactService: string;
  cta: CommercialCta;
  cardCta: string;
  icon: string;
  capabilities: readonly string[];
  entryOffer: CommercialOffer;
}

interface SpecializedSolution extends CommercialService {
  status: SolutionStatus;
  slug: string;
}

export interface VerifiedMetric {
  id: string;
  value: string;
  meaning: string;
  evidenceReference: string;
}

export const commercialDestinations = {
  contactPath: '/contacto'
} as const;

export const commercialCtas = {
  fitCall: { label: 'Agendar llamada de encaje' },
  contact: { label: 'Abrir formulario' },
  whatsapp: {
    label: 'Abrir WhatsApp',
    message: 'Hola HGuerra, quiero contarte un desafío operativo para evaluar una posible solución.'
  }
} as const;

export const coreService: CommercialService = {
  id: 'automatizacion-de-procesos-e-ia',
  name: 'Automatización de Procesos e IA',
  shortName: 'Automatización de procesos e IA',
  description:
    'Automatización a la medida para procesos administrativos, comerciales y operativos: datos, documentos, ventas, inventario, reportes, aprobaciones, seguimiento e integraciones.',
  path: '/automatizacion-con-ia-agentica',
  contactService: 'automatizacion-con-ia-agentica',
  cta: commercialCtas.fitCall,
  cardCta: 'Ver Automatización',
  icon: 'fa-robot',
  capabilities: [
    'Ventas, inventario, solicitudes y documentos',
    'Reportes, aprobaciones y seguimiento',
    'Integraciones, workflows y reglas de negocio',
    'IA cuando aporta valor al proceso'
  ],
  entryOffer: {
    id: 'sprint-automatizacion',
    name: 'Sprint de Automatización',
    price: { amount: 19_900, currency: 'HNL', qualifier: 'Desde' },
    duration: '10 a 15 días hábiles según alcance'
  }
};

export const solutions: readonly SpecializedSolution[] = [
  {
    id: 'operaciones-de-campo',
    name: 'Digitalización de Operaciones de Campo',
    shortName: 'Operaciones de campo',
    description:
      'Sistemas para controlar órdenes, personal, evidencia y supervisión cuando el trabajo ocurre fuera de la oficina.',
    path: '/gestion-de-operaciones-de-campo',
    slug: 'gestion-de-operaciones-de-campo',
    status: 'hidden',
    contactService: 'gestion-operaciones-de-campo',
    cta: commercialCtas.fitCall,
    cardCta: 'Ver Operaciones de Campo',
    icon: 'fa-map-marked-alt',
    capabilities: [
      'Captura y coordinación de equipos en terreno',
      'Evidencia y seguimiento operativo',
      'Integración con procesos de oficina'
    ],
    entryOffer: {
      id: 'piloto-operaciones-de-campo',
      name: 'Piloto de Operaciones de Campo'
    }
  },
  {
    id: 'cursos-por-whatsapp',
    name: 'Cursos por WhatsApp',
    shortName: 'Cursos por WhatsApp',
    description: 'Formación práctica por WhatsApp para procesos y herramientas operativas.',
    path: '/cursos-por-whatsapp',
    slug: 'cursos-por-whatsapp',
    status: 'coming-soon',
    contactService: 'otro',
    cta: commercialCtas.contact,
    cardCta: 'Próximamente',
    icon: 'fa-comments',
    capabilities: [],
    entryOffer: {
      id: 'curso-por-whatsapp',
      name: 'Cursos por WhatsApp'
    }
  }
];

export const activeSolutions = solutions.filter((solution) => solution.status === 'active');

export const funnelOffers = {
  fitCall: {
    id: 'llamada-de-encaje',
    name: 'Llamada de encaje',
    price: { amount: 0, currency: 'HNL', qualifier: 'Gratuita' },
    duration: '15 minutos'
  },
  operationalDiagnosis: {
    id: 'diagnostico-operativo',
    name: 'Diagnóstico operativo',
    price: { amount: 4_900, currency: 'HNL', qualifier: 'Desde' },
    condition: 'Acreditable a una implementación contratada dentro de 30 días'
  },
  ongoingSupport: {
    id: 'soporte-y-mejora-continua',
    name: 'Soporte y mejora continua',
    price: { amount: 4_000, currency: 'HNL', qualifier: 'Desde' },
    cadence: 'mensuales'
  }
} as const;

// TODO: Promote only claims with validated evidence and a traceable reference.
export const VERIFIED_METRICS: readonly VerifiedMetric[] = [];

export const businessServices = [
  {
    id: 'madurez', group: 'consultoria', title: 'Madurez y hoja de ruta', icon: 'fa-route',
    need: 'Querés avanzar con datos e IA, pero no está claro por dónde empezar ni qué preparar primero.',
    work: 'Evaluamos objetivos, procesos, personas, datos y controles. Definimos el estado que necesitás alcanzar y priorizamos las brechas que importan.',
    deliverables: ['Diagnóstico con evidencia y alcance acordado', 'Hoja de ruta con prioridades, dependencias y responsables'],
    success: 'Claridad para decidir qué abordar primero y cómo evaluar el avance.'
  },
  {
    id: 'acompanamiento', group: 'consultoria', title: 'Adopción y acompañamiento', icon: 'fa-handshake',
    need: 'Las iniciativas existen, pero falta alineación, responsables o una forma de sostener el cambio.',
    work: 'Acompaño las decisiones, la adopción del equipo y la definición de responsabilidades. Revisamos resultados y ajustamos la ruta con criterio de negocio.',
    deliverables: ['Acuerdos de gobierno, uso y responsabilidades', 'Sesiones de seguimiento y prioridades de evolución'],
    success: 'Un equipo que entiende el cambio, lo incorpora y sabe cuándo corregir el rumbo.'
  },
  {
    id: 'datos', group: 'ingenieria', title: 'Datos confiables para decidir', icon: 'fa-database',
    need: 'Cada área tiene una versión del dato y preparar información sigue consumiendo tiempo que debería dedicarse a analizar.',
    work: 'Diseño e implemento integraciones, flujos de datos, controles de calidad e indicadores conectados con tus decisiones.',
    deliverables: ['Flujos de datos integrados y documentados', 'Indicadores, validaciones y seguimiento de fallos'],
    success: 'Evaluamos calidad, disponibilidad y utilidad de la información frente al punto de partida.'
  },
  {
    id: 'ia', group: 'ingenieria', title: 'Inteligencia artificial aplicada', icon: 'fa-brain',
    need: 'Hay documentos, conocimiento o tareas que podrían aprovecharse mejor, pero una demostración aislada no resuelve el trabajo real.',
    work: 'Construyo soluciones para consultar conocimiento, procesar documentos y asistir procesos. Integro los sistemas existentes y defino evaluación, límites y revisión humana.',
    deliverables: ['Solución integrada al flujo de trabajo acordado', 'Evaluación, controles, documentación y transferencia'],
    success: 'Medimos utilidad, calidad y riesgos antes de ampliar el alcance; no todo necesita IA.'
  }
] as const;
