import type { Servicio } from '../types/servicios';

export const servicios: Servicio[] = [
  {
    id: 'app-movil',
    icon: 'fa-mobile-alt',
    title: 'App móvil para tu equipo de campo',
    description: 'Operarios con planillas de papel, fotos perdidas en WhatsApp y datos incompletos que llegan días después.',
    pain: 'Operarios con planillas de papel, fotos perdidas en WhatsApp y datos incompletos que llegan días después.',
    promise: 'App intuitiva donde reciben asignaciones, capturan datos estructurados, toman fotos con GPS integrado y firman digitalmente — todo en tiempo real.',
    proof: '-60% errores de captura y evidencia completa desde el momento del registro en campo.',
    features: [
      'Asignaciones push con notificaciones',
      'Formularios inteligentes con validación en campo',
      'Fotos y geolocalización obligatoria',
      'Firma digital y confirmación de entrega'
    ],
    cta: 'Ver demo de la app'
  },
  {
    id: 'ordenes-servicio',
    icon: 'fa-bolt',
    title: 'Órdenes de servicio y asignaciones automatizadas',
    description: 'Alarmas de series de tiempo, anomalías o eventos que generan trabajo de campo, pero la asignación es manual, lenta y sin seguimiento.',
    pain: 'Alarmas de series de tiempo, anomalías o eventos que generan trabajo de campo, pero la asignación es manual, lenta y sin seguimiento.',
    promise: 'Las órdenes se generan automáticamente desde alarmas/series de tiempo, o manualmente según criterios de tu negocio. El sistema asigna inteligentemente al operario más cercano/disponible o puedes asignar manualmente.',
    proof: 'Tiempo de respuesta de horas a minutos. Cero órdenes perdidas. Ruta optimizada automáticamente.',
    features: [
      'Generación automática de órdenes desde alarmas/series de tiempo',
      'Asignación inteligente por proximidad, habilidad y carga de trabajo',
      'Programación manual de rutas y visitas',
      'Escalamiento automático si no hay respuesta en tiempo definido'
    ],
    cta: 'Ver demo de órdenes automáticas'
  },
  {
    id: 'dashboard',
    icon: 'fa-chart-line',
    title: 'Dashboard web con métricas y KPIs en tiempo real',
    description: 'Reportes de campo que tardan días en llegar, decisiones basadas en datos desactualizados y sin visibilidad del momento.',
    pain: 'Reportes de campo que tardan días en llegar, decisiones basadas en datos desactualizados y sin visibilidad del momento.',
    promise: 'Plataforma web donde supervisores y gerencia ven métricas en vivo: avance de tareas, cumplimiento, tiempos de respuesta, geolocalización de equipo.',
    proof: 'Decisiones informadas en el momento, con datos que se actualizan automáticamente desde la app móvil.',
    features: [
      'Dashboard con KPIs configurables',
      'Mapa de calor de cobertura de campo',
      'Alertas automáticas por desviaciones',
      'Exportación de reportes en un clic'
    ],
    cta: 'Ver demo del dashboard'
  },
  {
    id: 'auditoria',
    icon: 'fa-clipboard-check',
    title: 'Auditoría completa con evidencia inmutable',
    description: 'Sin registro de quién hizo qué, cuándo y dónde; evidencia perdida o manipulada; auditorías externas con hallazgos por falta de trazabilidad.',
    pain: 'Sin registro de quién hizo qué, cuándo y dónde; evidencia perdida o manipulada; auditorías externas con hallazgos por falta de trazabilidad.',
    promise: 'Cada registro en campo queda con timestamp, GPS, fotos obligatorias y firma digital. Trazabilidad completa e inmutable desde la app hasta el dashboard.',
    proof: 'Auditorías sin hallazgos, cumplimiento normativo demostrable y respaldo legal de cada operación de campo.',
    features: [
      'Registro automático de fecha, hora y ubicación GPS',
      'Fotos obligatorias con metadatos preservados',
      'Firma digital del operario y del cliente',
      'Historial inmutable de cambios'
    ],
    cta: 'Ver funcionalidad de auditoría'
  },
  {
    id: 'offline',
    icon: 'fa-wifi',
    title: 'Funciona offline en zonas sin cobertura',
    description: 'Operaciones en zonas remotas, minas, bosques o fincas donde no hay internet y los datos se pierden o se duplican.',
    pain: 'Operaciones en zonas remotas, minas, bosques o fincas donde no hay internet y los datos se pierden o se duplican.',
    promise: 'App móvil que funciona 100% offline. Los operarios capturan todo normalmente y al recuperar señal se sincroniza automáticamente con la plataforma web.',
    proof: 'Cobertura completa de campo sin depender de conectividad. Datos sincronizados sin pérdida ni duplicados.',
    features: [
      'Captura offline completa: fotos, formularios, firmas',
      'Sincronización automática al detectar red',
      'Resolución inteligente de conflictos',
      'Indicador de sincronización para supervisores'
    ],
    cta: 'Ver demo modo offline'
  },
  {
    id: 'integracion',
    icon: 'fa-plug',
    title: 'Integración con tus sistemas actuales',
    description: 'Plataformas aisladas que no hablan con tu ERP, SAP o sistema de facturación. Doble trabajo de migración de datos.',
    pain: 'Plataformas aisladas que no hablan con tu ERP, SAP o sistema de facturación. Doble trabajo de migración de datos.',
    promise: 'APIs y conectores para integrar la plataforma con tus sistemas existentes: sincroniza clientes, activos, órdenes de trabajo y resultados automáticamente.',
    proof: 'Ecosistema unificado sin romper lo que ya funciona. Datos fluídos entre campo y oficina central.',
    features: [
      'API REST para integraciones custom',
      'Conectores SAP, Salesforce, Oracle, etc.',
      'Sincronización bidireccional de datos',
      'Single Sign-On (SSO) con tus credenciales'
    ],
    cta: 'Ver opciones de integración'
  }
];
