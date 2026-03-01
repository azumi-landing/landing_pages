import type { AreaEspecializacion } from '../types/investigacion';

export const areasEspecializacion: AreaEspecializacion[] = [
  {
    id: 'deteccion-perdidas',
    icon: 'fa-brain',
    title: 'Detección de pérdidas y anomalías',
    description: 'Modelos para detectar patrones inusuales y reducir pérdidas no técnicas antes de que escalen.',
    keywords: [
      'Detección temprana antes de que escale',
      'Alertas accionables, no solo modelos'
    ]
  },
  {
    id: 'procesamiento-distribuido',
    icon: 'fa-bolt',
    title: 'Procesamiento distribuido a gran escala',
    description: 'Volúmenes masivos procesados para alimentar decisiones diarias sin cuellos de botella.',
    keywords: [
      'Procesos en horas, no días',
      'Menos cuellos de botella'
    ]
  },
  {
    id: 'ordenes-automatizadas',
    icon: 'fa-robot',
    title: 'Órdenes de servicio y asignaciones automatizadas',
    description: 'Detección automática de alarmas y series de tiempo que generan órdenes de servicio y asignación inteligente al operario más cercano.',
    keywords: [
      'Alarmas → Órdenes → Asignación automática',
      'De horas a minutos de respuesta'
    ]
  },
  {
    id: 'integracion-movil-nube',
    icon: 'fa-network-wired',
    title: 'Integración móvil–nube–analítica',
    description: 'Captura obligatoria en apps de campo conectada a nube y analítica; datos listos para decidir.',
    keywords: [
      'Captura obligatoria en campo',
      'Datos listos para decidir'
    ]
  }
];
