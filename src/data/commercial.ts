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
    status: 'active',
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
