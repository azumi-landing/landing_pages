export const fieldOperationsFaqs = [
  {
    question: '¿Cuánto tiempo toma implementar la plataforma?',
    answer:
      'La implementación típica toma 2-3 semanas desde el primer contacto hasta operación productiva. Esto incluye configuración personalizada de formularios y flujos, instalación de la app en dispositivos, capacitación práctica y acompañamiento en las primeras operaciones en vivo.'
  },
  {
    question: '¿Funciona sin internet en zonas remotas?',
    answer:
      'Sí. La app está diseñada offline-first: el equipo captura datos, fotos y firmas sin conexión, y la sincronización ocurre automáticamente cuando el dispositivo detecta internet.'
  },
  {
    question: '¿Se integra con nuestro ERP, SAP o sistema actual?',
    answer:
      'Sí. La solución contempla APIs REST e integraciones personalizadas para leer catálogos, sincronizar resultados de campo y mantener trazabilidad entre sistemas empresariales.'
  },
  {
    question: '¿Qué pasa si un operario pierde o daña su celular?',
    answer:
      'Los datos se sincronizan al cloud tan pronto hay conexión, y el acceso a la app puede controlarse con credenciales corporativas y desactivación remota de dispositivos.'
  },
  {
    question: '¿Cómo garantizan la trazabilidad y evidencia para auditorías?',
    answer:
      'Cada registro puede incluir timestamp, GPS, fotos obligatorias y firma digital, todo dentro de un historial trazable desde la asignación hasta el cierre operativo.'
  },
  {
    question: '¿Para qué tipo de operaciones no sirve esta plataforma?',
    answer:
      'No es la opción ideal para equipos que buscan una solución genérica sin personalización, operaciones 100% indoor sin necesidad offline o procesos largos de implementación con consultoras grandes.'
  },
  {
    question: '¿Cómo se compara con otras plataformas de formularios móviles?',
    answer:
      'La diferencia está en que la solución se aterriza al flujo operativo real, incorpora trazabilidad con evidencias, opera offline y se implementa con acompañamiento directo en vez de dejar al cliente solo con una herramienta genérica.'
  }
] as const;
