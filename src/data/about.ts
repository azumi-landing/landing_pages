import type { AboutCard, AboutFilter } from '../types/about';

export const aboutCards: AboutCard[] = [
  {
    id: 'app-adopcion',
    icon: 'fa-mobile-alt',
    title: 'App móvil que tus operarios adoptan rápido',
    description: 'Interfaz simple que no requiere capacitación extensa',
    bullets: [
      'Interfaz simple: No requiere capacitación extensa',
      'Funciona offline: En zonas sin internet sigue operando',
      'Captura guiada: Formularios con validación en campo, no después',
      'Menos errores desde el primer día de uso'
    ]
  },
  {
    id: 'visibilidad',
    icon: 'fa-chart-line',
    title: 'Visibilidad total y procesos documentados',
    description: 'Dashboard en tiempo real para controlar operaciones',
    bullets: [
      'Dashboard en tiempo real: Mira qué pasa en campo sin llamar a nadie',
      'Procesos estandarizados: Flujos documentados de asignación→ejecución→cierre',
      'Auditoría completa: GPS, fotos, timestamp de cada registro para trazabilidad',
      'Base para certificaciones de calidad y mejora continua'
    ]
  },
  {
    id: 'acompanamiento',
    icon: 'fa-hands-helping',
    title: 'Acompañamiento de principio a fin',
    description: 'Despliegue ágil en semanas, no meses',
    bullets: [
      'Despliegue ágil: En semanas, no meses',
      'Configuración personalizada: Adaptada a tus formularios y flujos específicos',
      'Soporte directo: Te acompaño en la adopción con tu equipo de campo',
      'Transición suave desde tus procesos actuales'
    ]
  },
  {
    id: 'atencion-personalizada',
    icon: 'fa-user-tie',
    title: 'Atención personalizada de un especialista',
    description: 'Trabajas directamente conmigo, sin intermediarios',
    bullets: [
      'Comerciante individual: Trabajas directamente conmigo, sin intermediarios',
      '+10 años de experiencia en operaciones de campo en sectores críticos',
      '+5M registros procesados en implementaciones reales',
      'Respuesta directa y compromiso total con tu proyecto'
    ]
  }
];

export const aboutFilter: AboutFilter = {
  icon: 'fa-exclamation-triangle',
  title: 'Para quién NO trabajo',
  intro: 'Si buscas lo siguiente, no soy la persona indicada:',
  exclusions: [
    'Una solución genérica sin personalización',
    'Software que no funciona sin internet en zonas remotas',
    'Dashboards sin conexión real con operaciones de campo',
    'Proyectos que toman 6 meses o más en implementarse'
  ]
};
