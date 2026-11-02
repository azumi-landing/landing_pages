export const technologySections = [
  {
    id: 'datos',
    number: '01',
    title: 'Datos para decidir',
    description:
      'Conectar la información es solo el comienzo. La utilidad aparece cuando los datos son confiables, tienen un significado compartido y ayudan a responder las preguntas del negocio.',
    example:
      'Reunir información de varias áreas, construir indicadores consistentes y detectar desviaciones que requieren atención.',
    groups: [
      {
        title: 'Integración y preparación',
        items: [
          'Ingeniería e integración de datos: conectar fuentes y definir cómo se actualiza la información.',
          'ETL/ELT: extraer, cargar y transformar datos en el orden adecuado al entorno, con orquestación de flujos y control de dependencias.',
          'Bases de datos relacionales y no relacionales según la estructura, las consultas y las necesidades de acceso.',
          'Calidad y validación de datos para identificar inconsistencias antes de que afecten el análisis.'
        ]
      },
      {
        title: 'Información de negocio',
        items: [
          'Almacenes de datos (DWH) y modelado dimensional para organizar hechos, dimensiones e historia de negocio.',
          'Inteligencia de negocios (BI) e indicadores de desempeño (KPIs) con definiciones consistentes.',
          'Analítica y visualización para explorar resultados, entender tendencias y comunicar lo que necesita atención.'
        ]
      },
      {
        title: 'Análisis y predicción',
        items: [
          'Análisis estadístico para estudiar relaciones, variabilidad e incertidumbre.',
          'Machine Learning y modelos predictivos para estimar comportamientos, clasificar casos o detectar anomalías.',
          'Optimización matemática para comparar alternativas con objetivos y restricciones definidos; la formulación depende del problema y de los datos disponibles.'
        ]
      }
    ]
  },
  {
    id: 'ia',
    number: '02',
    title: 'Inteligencia para asistir y actuar',
    description:
      'Texto, imágenes y conocimiento también son información de trabajo. La IA puede ayudar a comprenderlos, recuperar contexto y coordinar tareas, con límites claros sobre lo que puede decidir y ejecutar.',
    example:
      'Interpretar una solicitud y sus documentos, recuperar información pertinente y preparar una acción para revisión o ejecución autorizada.',
    groups: [
      {
        title: 'Comprensión de información',
        items: [
          'Deep Learning para aprender patrones complejos cuando el caso y los datos lo justifican.',
          'Procesamiento de lenguaje natural (NLP) para clasificar, resumir y extraer información de textos.',
          'Visión artificial para analizar imágenes y contenido visual de documentos.',
          'IA generativa, modelos de lenguaje (LLM) y modelos multimodales para trabajar con texto, imágenes u otras modalidades según el alcance.'
        ]
      },
      {
        title: 'Conocimiento y asistencia',
        items: [
          'Búsqueda semántica para encontrar información por su significado, no solo por palabras exactas.',
          'Respuestas apoyadas en información recuperada de documentos y sistemas: generación aumentada por recuperación (RAG).',
          'Asistentes inteligentes conectados con el contexto de la empresa y con acceso acorde a los permisos definidos.'
        ]
      },
      {
        title: 'Coordinación y ejecución',
        items: [
          'IA agéntica y sistemas multiagente para coordinar pasos o responsabilidades especializadas cuando esa complejidad aporta valor.',
          'Integración y ejecución de herramientas y funciones para consultar sistemas o realizar acciones autorizadas.',
          'Automatización de procesos con reglas, revisión humana y tratamiento de excepciones; no todo requiere un agente ni un modelo generativo.'
        ]
      }
    ]
  },
  {
    id: 'ingenieria',
    number: '03',
    title: 'Ingeniería para sostenerlo',
    description:
      'Una solución necesita encajar con los sistemas existentes y poder operarse después de la entrega. La arquitectura, el despliegue y el seguimiento se diseñan según el contexto, no por una herramienta de moda.',
    example:
      'Integrar una solución mediante APIs, desplegarla en el entorno acordado y seguir su calidad, uso y costo para decidir cómo evolucionarla.',
    groups: [
      {
        title: 'Software e integración',
        items: [
          'Desarrollo de APIs y servicios para conectar capacidades con los flujos reales de trabajo.',
          'Arquitectura de software con responsabilidades e interfaces claras, documentación y una complejidad que el equipo pueda sostener.',
          'Microservicios cuando la separación de componentes aporte una ventaja concreta, no como requisito de todos los proyectos.'
        ]
      },
      {
        title: 'Infraestructura y entrega',
        items: [
          'Contenedores para empaquetar aplicaciones y sus dependencias de forma reproducible.',
          'Infraestructura cloud, on-premise o híbrida según las restricciones de acceso, operación y datos.',
          'Integración y despliegue continuo (CI/CD) para entregar cambios de forma controlada y repetible.'
        ]
      },
      {
        title: 'Operación y evolución',
        items: [
          'MLOps para gestionar versiones, evaluación, despliegue y seguimiento del ciclo de vida de los modelos.',
          'Observabilidad para comprender el comportamiento, los fallos y el rendimiento de la solución.',
          'Seguridad, gobernanza y gestión de riesgos con responsabilidades, permisos y controles acordes al alcance.',
          'Optimización de costos y mejora continua para ajustar el uso de recursos según su utilidad real.'
        ]
      }
    ]
  }
] as const;
