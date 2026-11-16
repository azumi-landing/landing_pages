export const ispChallenges = [
  {
    id: 'comercial', area: 'Comercial', title: 'Ganar y conservar clientes sin perder de vista el negocio.',
    pains: [
      { id: 'retencion', title: 'Competir no puede ser solo bajar el precio.', text: 'La presión por descontar exige equilibrar captación, retención y valor por cliente.' },
      { id: 'facturacion', title: 'Planes, tarifas y facturación necesitan coherencia.', text: 'Al cambiar ofertas o crecer, ventas, activación y cobros deben compartir las mismas reglas.' }
    ],
    solution: 'Construyo o integro seguimiento comercial, módulos de planes y altas y conciliaciones. Relaciono ingresos y bajas para analizar la retención por plan o segmento.',
    sources: 'CRM · Facturación · Pagos · Atención',
    decision: 'Identificar dónde se pierden oportunidades y qué clientes requieren seguimiento.',
    kpis: 'Conversión a altas · Churn · ARPU · Cartera vencida',
    measurementNote: 'ARPU no equivale a margen: evaluar rentabilidad requiere relacionar también los costos.'
  },
  {
    id: 'operativa', area: 'Operativa', title: 'Que el servicio avance sin perseguir cada traspaso.',
    pains: [
      { id: 'coordinacion', title: 'Una instalación no debería depender de perseguir mensajes.', text: 'Citas, técnicos, materiales y responsables necesitan avanzar con el mismo contexto.' },
      { id: 'recurrencias', title: 'Cerrar el ticket no alcanza si la falla vuelve.', text: 'Relacionar antecedentes, equipos y cambios ayuda a investigar causas, no solo a cerrar casos.' }
    ],
    solution: 'Desarrollo apps de órdenes y campo. Integro atención, agenda, inventario e historial de incidentes; automatizo traspasos y facilito la consulta de procedimientos.',
    sources: 'Tickets · Órdenes · Cuadrillas · Inventario',
    decision: 'Coordinar cada caso y distinguir una resolución efectiva de un cierre administrativo.',
    kpis: 'Tiempo de instalación · Tiempo de resolución · Visitas repetidas',
    measurementNote: 'Acordamos fechas de inicio y cierre, pausas, reaperturas y seguimiento de pendientes.'
  },
  {
    id: 'tecnica', area: 'Técnica', title: 'Entender el impacto antes de decidir dónde intervenir.',
    pains: [
      { id: 'continuidad', title: 'La alarma no siempre explica quién está afectado.', text: 'Necesitás relacionar eventos y métricas con servicios, abonados y zonas para orientar la atención.' },
      { id: 'capacidad', title: 'Ampliar tarde afecta al servicio. Ampliar sin criterio también cuesta.', text: 'La utilización y la demanda deben orientar dónde mantener, ampliar o reasignar capacidad.' }
    ],
    solution: 'Conecto monitoreo, inventario, eventos y reclamos. Construyo alertas contextualizadas y análisis de utilización; evalúo modelos de demanda o capacidad si hay historia suficiente.',
    sources: 'Monitoreo · Logs · Inventario · Telemetría',
    decision: 'Priorizar atención, mantenimiento y ampliaciones según el impacto en el servicio.',
    kpis: 'Disponibilidad · Latencia y pérdida de paquetes · Utilización en hora pico',
    measurementNote: 'Definimos puntos de medición, ventanas y cómo reportar brechas de monitoreo.'
  }
];

export const ispFoundations = [
  {
    id: 'datos', title: 'Que cada área no tenga una versión distinta del negocio.',
    pain: 'Clientes, servicios, ingresos y calidad deben poder relacionarse sin reconstruir la información a mano.',
    solution: 'Instrumento el software, integro y valido datos y construyo un modelo compartido con KPIs trazables para las decisiones de tu ISP.'
  },
  {
    id: 'proteccion', title: 'Que una integración no abra accesos innecesarios.',
    pain: 'Un acceso indebido puede comprometer información de clientes y continuidad operativa.',
    solution: 'Diseño permisos, registro de acciones y recuperación de los componentes entregados, con responsabilidades acordadas. No es seguridad integral ni una promesa de invulnerabilidad.'
  }
];

export const ispScenarioSteps = [
  { title: 'Técnica entiende el impacto', description: 'Cruza eventos y utilización con servicios, abonados y zonas.', decision: 'Qué servicios requieren atención y qué información falta.' },
  { title: 'Operación atiende con contexto', description: 'Conecta tickets, antecedentes, cambios y responsables de la intervención.', decision: 'Quién interviene y qué antecedentes debe revisar.' },
  { title: 'Comercial da seguimiento', description: 'Dispone del contexto del caso y puede contrastar reclamos con bajas.', decision: 'Qué clientes necesitan contacto y seguimiento, sin asumir causas.' },
  { title: 'Gerencia elige la siguiente acción', description: 'Revisa disponibilidad, recurrencia, resolución y utilización de capacidad.', decision: 'Si priorizar una corrección, un cambio o una ampliación.' }
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
    answer: 'No por defecto. Revisamos qué funciona y cómo integrarlo. Podemos agregar una herramienta o modernizar una parte; la viabilidad depende de los accesos e interfaces disponibles.'
  },
  {
    question: '¿Puedo empezar por una sola necesidad?',
    answer: 'Sí. Podemos partir de ventas, cobranza, instalaciones, soporte o una necesidad técnica. Acordamos una primera entrega y los KPIs para evaluarla. No hace falta contratar todo el ciclo ni incorporar IA si no aporta valor.'
  },
  {
    question: '¿Cómo definimos inversión y plazos?',
    answer: 'Después de entender la necesidad y sus dependencias, acordamos alcance, entregables, inversión, plazos y acompañamiento antes de iniciar. No hay un precio o una duración universal; la consulta inicial no incluye un diagnóstico completo gratuito.'
  }
];
