export const ispAreas = [
  {
    number: '01', name: 'Comercial', title: 'De la consulta al cliente activo.',
    pain: 'Una venta se queda entre WhatsApp, la cotización y una instalación que nadie confirma.',
    solution: 'Conecto ventas, altas, facturación y pagos para dar seguimiento a cada oportunidad hasta la activación.',
    examples: ['Seguimiento de prospectos y activaciones', 'Portales de abonados y gestión de solicitudes', 'Cobranza y conciliación entre sistemas'],
    outcome: 'Para dar seguimiento a las oportunidades y entender dónde se detienen los ingresos.',
    kpis: ['Conversión de prospectos a altas activadas', 'Bajas de clientes — churn', 'Ingreso promedio por abonado — ARPU', 'Cartera vencida'],
    kpiDecision: '¿Dónde se pierden oportunidades o ingresos y qué clientes requieren seguimiento?'
  },
  {
    number: '02', name: 'Operación', title: 'Del reclamo a una solución trazable.',
    pain: 'El cliente vuelve a llamar. Soporte no sabe qué hizo el técnico y la orden sigue abierta.',
    solution: 'Integro atención, órdenes, técnicos e inventario para que cada equipo trabaje con el contexto que necesita.',
    examples: ['Tickets con responsables y escalamiento', 'Aplicaciones para instalaciones y visitas', 'Equipos, materiales y evidencia de cierre'],
    outcome: 'Para coordinar el trabajo, reducir tareas repetidas y seguir cada caso hasta su cierre.',
    kpis: ['Tiempo de instalación', 'Tiempo de resolución de reclamos', 'Visitas repetidas por el mismo problema'],
    kpiDecision: '¿Qué está retrasando la atención y dónde hay que ajustar el proceso o los recursos?'
  },
  {
    number: '03', name: 'Técnica', title: 'De la alarma al impacto en el cliente.',
    pain: 'El monitoreo muestra eventos, pero cuesta relacionarlos con abonados, reclamos y prioridades.',
    solution: 'Relaciono monitoreo, red y datos de servicio para apoyar el diagnóstico y planificar capacidad.',
    examples: ['Incidencias relacionadas con clientes y zonas', 'Calidad, disponibilidad y capacidad', 'Gestión de cambios y mantenimientos'],
    outcome: 'Para priorizar fallas e inversiones con una visión del servicio, no solo de los equipos.',
    kpis: ['Disponibilidad del servicio', 'Latencia y pérdida de paquetes', 'Utilización de capacidad en hora pico'],
    kpiDecision: '¿Qué servicios necesitan atención y dónde conviene priorizar mantenimiento o ampliaciones?'
  }
];

export const ispServices = [
  {
    id: 'ruta', title: 'Diagnóstico y hoja de ruta',
    description: 'Acordamos el problema y los KPIs que permitirán evaluar el avance, revisamos los sistemas y priorizamos por valor, esfuerzo, riesgo y dependencias. Si ya tenés una necesidad definida, podemos partir de ella.',
    delivery: 'Una primera intervención con alcance, responsables, entregables y KPIs de partida y metas acordadas.'
  },
  {
    id: 'software', title: 'Desarrollo y modernización de software',
    description: 'Construyo aplicaciones, módulos e interfaces que te faltan, o mejoro los existentes. Desde el diseño, registro los eventos necesarios para medir tus KPIs y conecto los datos al ETL mediante APIs, eventos o extracciones autorizadas.',
    delivery: 'Software útil para tu operación, integrado al ciclo de datos; no otra aplicación aislada.'
  },
  {
    id: 'etl', title: 'ETL por lotes o en tiempo real',
    description: 'Extraigo, transformo, valido y cargo datos de tus sistemas. Programo procesos para cierres y conciliaciones o flujos continuos cuando el caso y las fuentes lo permiten.',
    delivery: 'Información con la frecuencia acordada, controles de calidad y seguimiento de fallos.'
  },
  {
    id: 'dwh', title: 'Almacén de datos empresarial — DWH',
    description: 'Relaciono clientes, servicios, facturas, pagos, órdenes e indicadores técnicos en una base histórica con definiciones compartidas y accesos por responsabilidad.',
    delivery: 'Una base confiable para comparar períodos y conectar las decisiones de distintas áreas.'
  },
  {
    id: 'algoritmos', title: 'Algoritmos, predicción y optimización',
    description: 'Desarrollo análisis y modelos para estudiar bajas, proyectar demanda o capacidad y apoyar la asignación de recursos, según el historial y las restricciones disponibles.',
    delivery: 'Recomendaciones evaluadas frente al punto de partida, no predicciones presentadas como certezas.'
  },
  {
    id: 'ia', title: 'IA para documentos y conocimiento',
    description: 'Integro procesamiento documental y asistentes que consultan procedimientos, manuales y fuentes autorizadas del ISP, con evaluación y escalamiento humano.',
    delivery: 'Conocimiento más accesible para soporte y administración, sin depender de respuestas genéricas.'
  },
  {
    id: 'agentes', title: 'Agentes conectados con tus procesos',
    description: 'Conecto agentes con herramientas para consultar información, clasificar solicitudes, enriquecer tickets o preparar acciones. Los permisos y las aprobaciones se definen según el riesgo.',
    delivery: 'Menos coordinación manual, con límites y trazabilidad sobre lo que se consulta y ejecuta.'
  },
  {
    id: 'bi', title: 'KPIs, tableros e inteligencia de negocio',
    description: 'Defino con tu equipo los indicadores clave de desempeño: objetivo, fórmula, fuentes, período, responsable, línea base, meta y acción ante desviaciones. Los conecto con datos validados y vistas para cada área.',
    delivery: 'KPIs trazables para dirigir ingresos, cartera, instalaciones, reclamos y calidad. No solo gráficos: criterios para decidir y evaluar mejoras.'
  },
  {
    id: 'evolucion', title: 'Operación y mejora continua',
    description: 'Acompaño el uso y la evolución de software, ETL, modelos y agentes. Revisamos los KPIs frente a la línea base y las metas, junto con fallos, costos y calidad, para priorizar mejoras con evidencia.',
    delivery: 'Una solución que pueda sostenerse y mejorar, con condiciones de mantenimiento acordadas.'
  }
];

export const ispFaqs = [
  {
    question: '¿Los KPIs vienen definidos o los construimos para mi ISP?',
    answer: 'Los definimos con vos: objetivo, fórmula, fuente, período, responsable, línea base y meta. Acordamos qué hacer ante desviaciones y conectamos su medición con software, ETL y DWH. Los ejemplos no son metas universales.'
  },
  {
    question: '¿Tengo que reemplazar la facturación o el software de mi ISP?',
    answer: 'No por defecto. Primero reviso lo que funciona. Podemos integrarlo, agregar un módulo o modernizar una parte. La viabilidad depende de los accesos e interfaces de tus sistemas.'
  },
  {
    question: '¿Puedo empezar por un solo problema?',
    answer: 'Sí: ventas, cobranza, órdenes, soporte o una necesidad técnica. Acordamos una primera entrega y su conexión con los datos. No necesitás contratar todo el ciclo.'
  },
  {
    question: '¿Cuánto cuesta y cuándo estaría en producción?',
    answer: 'Depende del alcance y de tus sistemas. Acordamos entregables, inversión y plazos antes de iniciar. Priorizo reutilización y entregas pequeñas para contener costos y avanzar con control, sin un precio o plazo universal.'
  },
  {
    question: '¿Quién dirige el trabajo y qué pasa después de la entrega?',
    answer: 'Trabajás directamente conmigo, Héctor Guerra. Acordamos documentación, transferencia y acompañamiento para sostener lo implementado. No se ofrece operación NOC 24/7 ni certificación de cumplimiento regulatorio.'
  }
];
