export const homeHeroBullets = [
  'Unifico tus datos operativos hoy dispersos en Excels, correos y WhatsApp',
  'Te doy visibilidad en tiempo real del flujo campo → gestión → auditoría',
  'Automatizo procesos repetidos con IA agéntica y trazabilidad, no con IA a ciegas'
];

export const homeProofPoints = [
  { value: '+10 años', label: 'diseñando productos y operaciones digitales' },
  { value: '+5M', label: 'registros procesados en implementaciones reales' },
  { value: 'Semanas', label: 'para aterrizar una solución útil, no meses de indefinición' }
];

export const homeTrustPoints = [
  { value: '2-3 semanas', label: 'del primer contacto a operación productiva — no proyectos de 6 meses' },
  { value: '-60%', label: 'errores de captura en las primeras 3 semanas de implementación' },
  { value: '< 1 hora', label: 'de respuesta personal a tu primer mensaje — yo mismo, sin chatbot' },
  { value: '0 intermediarios', label: 'diagnóstico, diseño e implementación con la misma persona de principio a fin' }
];

export const homeProblemPoints = [
  {
    icon: 'fa-file-excel',
    title: 'Datos atrapados en Excels distintos',
    quote: '"Me cuesta cruzar datos y crear analítica desde tantos Excels distintos."'
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Operación en papel y WhatsApp',
    quote: '"Los operarios todavía usan papel y las fotos se pierden en WhatsApp."'
  },
  {
    icon: 'fa-database',
    title: 'Sin gobernanza ni datos unificados',
    quote: '"No tengo políticas de gobernanza ni datos unificados para hacer mejores análisis."'
  },
  {
    icon: 'fa-user-lock',
    title: 'Proceso atado a una persona clave',
    quote: '"Dependemos demasiado de una persona que conoce el proceso de memoria."'
  },
  {
    icon: 'fa-robot',
    title: 'IA que no baja del notebook',
    quote: '"Si pudiera tener un agente de IA, muchos de estos procesos se harían solos."'
  },
  {
    icon: 'fa-exclamation-triangle',
    title: 'Errores silenciosos que se descubren tarde',
    quote: '"Un porcentaje de las órdenes sale con problemas por la manipulación manual de archivos."'
  }
];

export const homeCaseStudy = {
  eyebrow: 'Caso de referencia',
  client: 'Programa gubernamental de regularización predial — Honduras',
  before: {
    title: 'Antes',
    points: [
      'Miles de órdenes de servicio semanales gestionadas en hojas Excel distintas',
      'Fotos y PDFs procesados manualmente, sin trazabilidad entre campo, gestión y auditoría',
      '≈5% de las órdenes presentaban problemas derivados de la manipulación manual de archivos',
      'Especialistas de asignación, procesamiento y revisión consumiendo horas en consolidación manual'
    ]
  },
  solution: {
    title: 'Lo que implementé',
    points: [
      'App móvil para la operativa de campo conectada a backend con APIs y PostgreSQL',
      'Flujo unificado: captura en campo → gestión de la medida → auditoría en centro técnico',
      'Pipeline en Cloud Run para procesar fotos y PDFs automáticamente',
      'Datos operativos integrados en una sola fuente confiable'
    ]
  },
  result: {
    title: 'Resultado',
    points: [
      'Ciclo completo trazable de extremo a extremo, sin consolidación manual',
      'Reducción significativa de órdenes con errores por manipulación de archivos',
      'Horas liberadas para los especialistas de asignación, procesamiento y revisión',
      'Base de datos unificada lista para analítica y futura automatización con IA'
    ]
  }
};

export const homeWorkflowSteps = [
  {
    step: '01',
    title: 'Entiendo tu operación y el problema que hoy te frena',
    description:
      'La conversación empieza por tu contexto: qué está fallando, dónde se atasca el equipo y qué impacto tiene en tiempo, errores o visibilidad.',
    points: [
      'Mapeo del flujo actual y de los cuellos de botella',
      'Lectura de restricciones reales: personas, datos, herramientas y tiempos',
      'Priorización del problema que más conviene resolver primero'
    ]
  },
  {
    step: '02',
    title: 'Defino contigo una solución que sí calza con tu realidad',
    description:
      'No parto de una demo cerrada. Bajo la complejidad a una propuesta clara: proceso, experiencia, automatizaciones y nivel de implementación necesario.',
    points: [
      'Alcance aterrizado a tu operación actual',
      'Decisiones de producto y automatización con criterio de negocio',
      'Ruta de implementación con foco en adopción y velocidad'
    ]
  },
  {
    step: '03',
    title: 'Implemento y acompaño hasta que el equipo lo use de verdad',
    description:
      'La entrega no termina en una pantalla bonita. Te acompaño en el despliegue para que la solución entre en operación con seguimiento y ajustes tempranos.',
    points: [
      'Implementación directa sin intermediarios innecesarios',
      'Ajustes de detalle según el uso real del equipo',
      'Seguimiento inicial para estabilizar adopción y resultados'
    ]
  }
];

export const homeFaqs = [
  {
    question: '¿Eres una sola persona? ¿Qué pasa si te pasa algo?',
    answer:
      'Trabajo con arquitectura documentada y stack estándar (GCP, PostgreSQL, Cloud Run, LangGraph, n8n, Airflow). El código y los procesos quedan operables por cualquier equipo técnico competente. Prefiero ser honesto sobre el alcance antes que inflar un equipo para aparentar.'
  },
  {
    question: '¿Cuánto tiempo toma una implementación?',
    answer:
      'Típicamente 2 a 3 semanas desde el primer contacto hasta operación productiva, incluyendo configuración, capacitación y acompañamiento durante las primeras operaciones en vivo. Si el alcance es mayor, lo partimos en fases útiles en lugar de un proyecto de 6 meses.'
  },
  {
    question: '¿Y si automatizamos algo crítico con IA y se equivoca?',
    answer:
      'Todo flujo agéntico se diseña con guardrails, aprobaciones human-in-the-loop, rutas de fallback y observabilidad end-to-end. La IA no ejecuta acciones sensibles sin supervisión cuando el caso lo requiere. El objetivo es control, no reemplazo ciego.'
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'El precio se define según el tamaño real del problema — no manejo tarifa fija ni paquetes empaquetados. En el diagnóstico inicial (gratuito, 30 minutos) revisamos alcance y definimos un rango de inversión realista antes de avanzar.'
  }
];
