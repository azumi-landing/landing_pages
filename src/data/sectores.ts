import type { Sector, OtherSector } from '../types/sectores';

export const sectores: Sector[] = [
  {
    id: 'agricultura',
    icon: 'fa-seedling',
    title: 'Agricultura y agroindustria',
    description: 'Inspectores de campo registran estado de cultivos, plagas y cosechas con fotos y GPS. Supervisores ven avance en tiempo real y asignan nuevas parcelas desde la web.',
    shortDescription: 'Inspectores de campo registran estado de cultivos, plagas y cosechas con fotos y GPS. Supervisores ven avance en tiempo real y asignan nuevas parcelas desde la web.',
    fullDescription: 'Así se ve la solución para el sector agro: inspectores de campo registran estado de cultivos, plagas y cosechas desde su celular, mientras supervisores asignan nuevas parcelas y ven el avance en tiempo real desde la web.',
    mobileApp: {
      title: '🌱 Inspección de Campo',
      user: 'María González',
      cards: [
        {
          title: 'Parcela P-156',
          status: 'progress',
          details: 'Cultivo: Maíz<br>Estado: Etapa de floración',
          meta: ['📍 Lat: -33.4567', '📸 3 fotos']
        },
        {
          title: 'Detección de Plaga',
          status: 'urgent',
          details: 'Tipo: Gusano cogollero<br>Severidad: Media',
          meta: ['📍 Parcela P-160', '📸 Evidencia']
        }
      ],
      actions: [
        { label: '📷 Foto', variant: 'primary' },
        { label: '✓ Guardar', variant: 'secondary' }
      ]
    },
    dashboard: {
      title: 'Panel de Agricultura',
      url: 'agro.controlcampo.app',
      user: 'Supervisor Agro',
      sidebarIcons: ['fa-home', 'fa-seedling', 'fa-map', 'fa-chart-bar'],
      stats: [
        { value: '48', label: 'Parcelas activas' },
        { value: '6', label: 'Alertas plagas' },
        { value: '85%', label: 'Cobertura hoy' }
      ],
      table: {
        headers: ['Inspector', 'Parcelas', 'Estado'],
        rows: [
          ['María G.', '12/15', 'En campo'],
          ['Juan P.', '8/10', 'Sincronizando']
        ]
      }
    },
    features: [
      { icon: 'fa-leaf', label: 'Registro de cultivos y plagas' },
      { icon: 'fa-map-marker-alt', label: 'GPS de parcelas' },
      { icon: 'fa-camera', label: 'Fotos de evidencia' },
      { icon: 'fa-clipboard-check', label: 'Checklist de cosechas' },
      { icon: 'fa-chart-line', label: 'Avance en tiempo real' },
      { icon: 'fa-wifi-slash', label: 'Funciona sin internet' }
    ],
    workflow: [
      {
        phase: 'Planificación',
        title: 'Programación de inspecciones',
        description: 'Supervisor define parcelas a inspeccionar, fechas y asigna inspectores según disponibilidad y ubicación.',
        icon: 'fa-calendar-alt',
        actor: 'web'
      },
      {
        phase: 'Asignación',
        title: 'Envío a app móvil',
        description: 'Inspectores reciben en su celular la lista de parcelas asignadas con mapa GPS y checklists específicos.',
        icon: 'fa-mobile-alt',
        actor: 'mobile'
      },
      {
        phase: 'Ejecución',
        title: 'Inspección en campo',
        description: 'Inspector registra estado de cultivos, detecta plagas, toma fotos y completa formularios sin conexión.',
        icon: 'fa-seedling',
        actor: 'mobile'
      },
      {
        phase: 'Supervisión',
        title: 'Monitoreo en vivo',
        description: 'Supervisor ve avance de cada inspector en tiempo real, parcelas completadas y alertas detectadas.',
        icon: 'fa-eye',
        actor: 'web'
      },
      {
        phase: 'Auditoría',
        title: 'Revisión de evidencia',
        description: 'Equipo de calidad revisa fotos, valida información y aprueba o rechaza inspecciones según criterios.',
        icon: 'fa-search',
        actor: 'web'
      },
      {
        phase: 'Cierre',
        title: 'Sincronización y cierre',
        description: 'Datos validados se sincronizan al sistema central, se generan reportes de cosecha y trazabilidad.',
        icon: 'fa-check-circle',
        actor: 'both'
      },
      {
        phase: 'Analítica',
        title: 'Reportes de productividad',
        description: 'Dashboards con rendimiento por parcela, predicción de cosechas, histórico de plagas y recomendaciones.',
        icon: 'fa-chart-bar',
        actor: 'web'
      }
    ]
  },
  {
    id: 'manufactura',
    icon: 'fa-industry',
    title: 'Maquila y manufactura',
    description: 'Auditores de planta completan checklists de calidad en móvil. Jefes de línea monitorean cumplimiento, tiempos y asignan inspecciones desde el dashboard.',
    shortDescription: 'Auditores de planta completan checklists de calidad en móvil. Jefes de línea monitorean cumplimiento, tiempos y asignan inspecciones desde el dashboard.',
    fullDescription: 'Así se ve la solución para manufactura: auditores de planta completan checklists de calidad desde su celular, mientras jefes de línea monitorean cumplimiento y asignan inspecciones desde el dashboard web.',
    mobileApp: {
      title: '🏭 Auditoría de Calidad',
      user: 'Roberto Silva',
      cards: [
        {
          title: 'Línea L-03 - Lote A',
          status: 'urgent',
          details: 'Defecto: Acabado irregular<br>Estándar: ISO 9001',
          meta: ['⏰ 14:45', '📸 2 fotos']
        },
        {
          title: 'Checklist L-05',
          status: 'done',
          details: 'Ítems: 15/15 OK<br>Tiempo: 8 min',
          meta: ['✓ Firma digital', '📍 Línea 5']
        }
      ],
      actions: [
        { label: '📷 Defecto', variant: 'primary' },
        { label: '✓ Cerrar', variant: 'secondary' }
      ]
    },
    dashboard: {
      title: 'Control de Calidad',
      url: 'calidad.manufactura.app',
      user: 'Jefe de Línea',
      sidebarIcons: ['fa-home', 'fa-industry', 'fa-clipboard-check', 'fa-chart-pie'],
      stats: [
        { value: '96%', label: 'Aprobación hoy' },
        { value: '3', label: 'No conformidades' },
        { value: '12', label: 'Auditores activos' }
      ],
      table: {
        headers: ['Línea', 'Estado', '% Calidad'],
        rows: [
          ['Línea 3', 'Atención', '89%'],
          ['Línea 5', 'Óptimo', '98%']
        ]
      }
    },
    features: [
      { icon: 'fa-clipboard-list', label: 'Checklist de calidad' },
      { icon: 'fa-clock', label: 'Tiempos de inspección' },
      { icon: 'fa-camera', label: 'Evidencia de defectos' },
      { icon: 'fa-exclamation-triangle', label: 'Alertas de no conformidad' },
      { icon: 'fa-chart-pie', label: 'Indicadores de calidad' },
      { icon: 'fa-users', label: 'Asignación a auditores' }
    ],
    workflow: [
      {
        phase: 'Planificación',
        title: 'Programación de auditorías',
        description: 'Jefe de línea programa inspecciones de calidad, define líneas a auditar y frecuencia según plan HACCP/ISO.',
        icon: 'fa-calendar-alt',
        actor: 'web'
      },
      {
        phase: 'Asignación',
        title: 'Asignación a auditores',
        description: 'Auditores reciben notificación en app móvil con línea asignada, estándares a verificar y tiempo estimado.',
        icon: 'fa-user-check',
        actor: 'mobile'
      },
      {
        phase: 'Ejecución',
        title: 'Inspección en planta',
        description: 'Auditor completa checklist de calidad, registra defectos con fotos, toma tiempos y firma digital.',
        icon: 'fa-clipboard-check',
        actor: 'mobile'
      },
      {
        phase: 'Supervisión',
        title: 'Monitoreo de líneas',
        description: 'Jefe de línea ve estado de auditorías en curso, tiempos de inspección y alertas de no conformidad.',
        icon: 'fa-eye',
        actor: 'web'
      },
      {
        phase: 'Auditoría',
        title: 'Revisión de conformidad',
        description: 'Calidad revisa evidencias de defectos, valida criterios de rechazo y aprueba acciones correctivas.',
        icon: 'fa-search',
        actor: 'web'
      },
      {
        phase: 'Cierre',
        title: 'Cierre y acciones',
        description: 'Se cierra la auditoría con firma digital, se notifican responsables y se programa reinspección si aplica.',
        icon: 'fa-check-circle',
        actor: 'both'
      },
      {
        phase: 'Analítica',
        title: 'Indicadores de calidad',
        description: 'Dashboards con % de aprobación, PPM, defectos recurrentes y cumplimiento por línea y turno.',
        icon: 'fa-chart-pie',
        actor: 'web'
      }
    ]
  },
  {
    id: 'mineria',
    icon: 'fa-gem',
    title: 'Minería',
    description: 'Supervisores de faena documentan condiciones de seguridad y equipos con evidencia fotográfica. Gerencia opera tiene visibilidad de todas las frentes de trabajo en tiempo real.',
    shortDescription: 'Supervisores de faena documentan condiciones de seguridad y equipos con evidencia fotográfica. Gerencia opera tiene visibilidad de todas las frentes de trabajo en tiempo real.',
    fullDescription: 'Así se ve la solución para minería: supervisores de faena documentan condiciones de seguridad y equipos desde su celular, mientras gerencia tiene visibilidad de todas las frentes de trabajo en tiempo real desde la web.',
    mobileApp: {
      title: '⛏️ Seguridad en Faena',
      user: 'Diego Torres',
      cards: [
        {
          title: 'Frente Norte - Nivel 3',
          status: 'urgent',
          details: 'Condición: Derrumbe potencial<br>Equipos: Retroexcavadora R-12',
          meta: ['⚠️ Evacuar zona', '📍 Frente N-3']
        },
        {
          title: 'Inspección Diaria',
          status: 'done',
          details: 'EPP: 100% uso correcto<br>Checklist: 25/25 ítems',
          meta: ['✓ Firmado', '📸 Evidencia']
        }
      ],
      actions: [
        { label: '📷 Evidencia', variant: 'primary' },
        { label: '🚨 Alertar', variant: 'secondary' }
      ]
    },
    dashboard: {
      title: 'Control de Faena',
      url: 'faena.mineria.app',
      user: 'Gerente de Operaciones',
      sidebarIcons: ['fa-home', 'fa-hard-hat', 'fa-map', 'fa-exclamation-triangle'],
      stats: [
        { value: '5', label: 'Frentes activos' },
        { value: '1', label: 'Alertas críticas' },
        { value: '89', label: 'Trabajadores' }
      ],
      table: {
        headers: ['Frente', 'Estado', 'Supervisor'],
        rows: [
          ['Norte N-3', '⚠️ Riesgo', 'D. Torres'],
          ['Sur S-1', '✓ Normal', 'L. Méndez']
        ]
      }
    },
    features: [
      { icon: 'fa-hard-hat', label: 'Inspecciones de seguridad' },
      { icon: 'fa-map-marker-alt', label: 'Ubicación de frentes' },
      { icon: 'fa-camera', label: 'Evidencia fotográfica' },
      { icon: 'fa-exclamation-circle', label: 'Reporte de incidentes' },
      { icon: 'fa-chart-bar', label: 'Visibilidad en tiempo real' },
      { icon: 'fa-wifi-slash', label: 'Funciona en faenas remotas' }
    ],
    workflow: [
      {
        phase: 'Planificación',
        title: 'Programación de inspecciones',
        description: 'Gerencia programa inspecciones de seguridad por frente, define checklist EPP y criticidad de cada zona minera.',
        icon: 'fa-calendar-alt',
        actor: 'web'
      },
      {
        phase: 'Asignación',
        title: 'Asignación a supervisores',
        description: 'Supervisores reciben en app móvil las frentes a inspeccionar, mapa de riesgos y equipos a verificar.',
        icon: 'fa-hard-hat',
        actor: 'mobile'
      },
      {
        phase: 'Ejecución',
        title: 'Inspección en faena',
        description: 'Supervisor documenta condiciones de seguridad, estado de equipos, uso de EPP y reporta incidentes con evidencia.',
        icon: 'fa-exclamation-triangle',
        actor: 'mobile'
      },
      {
        phase: 'Supervisión',
        title: 'Control de frentes',
        description: 'Gerencia visualiza estado de todas las frentes, trabajadores por zona y alertas de seguridad en tiempo real.',
        icon: 'fa-eye',
        actor: 'web'
      },
      {
        phase: 'Auditoría',
        title: 'Revisión de incidentes',
        description: 'SSMA revisa reportes de incidentes, valida evidencias fotográficas y aprueba acciones preventivas.',
        icon: 'fa-search',
        actor: 'web'
      },
      {
        phase: 'Cierre',
        title: 'Cierre y sincronización',
        description: 'Datos de campo se sincronizan al retornar a red, se cierran inspecciones y se actualiza estado de frentes.',
        icon: 'fa-check-circle',
        actor: 'both'
      },
      {
        phase: 'Analítica',
        title: 'Reportes de seguridad',
        description: 'Dashboards con indicadores de seguridad, frecuencia de incidentes, cumplimiento EPP y cumplimiento legal.',
        icon: 'fa-chart-bar',
        actor: 'web'
      }
    ]
  },
  {
    id: 'energia',
    icon: 'fa-bolt',
    title: 'Energía',
    description: 'Alarmas de series de tiempo generan órdenes de servicio automáticas. Técnicos reciben asignaciones en app móvil, atienden averías, capturan evidencia. Coordinación ve métricas de MTTR, cobertura y cumplimiento en vivo.',
    shortDescription: 'Alarmas de series de tiempo generan órdenes de servicio automáticas. Técnicos reciben asignaciones en app móvil, atienden averías, capturan evidencia.',
    fullDescription: 'Así se ve la solución para una empresa de energía: técnicos de campo reciben órdenes de servicio en su celular, capturan evidencia de las averías y la coordinación visualiza todo en tiempo real desde la web.',
    mobileApp: {
      title: '⚡ Órdenes de Servicio',
      user: 'Carlos Ruiz',
      cards: [
        {
          title: 'Transformer T-45',
          status: 'urgent',
          details: 'Alarma: Sobrecarga detectada<br>Ubicación: Av. Principal 234',
          meta: ['⏰ Asignado: 14:30', '📍 2.3 km']
        },
        {
          title: 'Medidor M-892',
          status: 'progress',
          details: 'Falla: Lectura errática<br>Cliente: Industrias ACME',
          meta: ['⏰ Inicio: 13:15', '📍 1.8 km']
        }
      ],
      actions: [
        { label: '📷 Foto', variant: 'primary' },
        { label: '✓ Cerrar', variant: 'secondary' }
      ]
    },
    dashboard: {
      title: 'Panel de Control - Energía',
      url: 'dashboard.energia.app',
      user: 'Coordinador de Operaciones',
      sidebarIcons: ['fa-home', 'fa-bolt', 'fa-users', 'fa-chart-bar'],
      stats: [
        { value: '12', label: 'Órdenes activas' },
        { value: '2.4h', label: 'MTTR promedio' },
        { value: '94%', label: 'Cobertura' }
      ],
      table: {
        headers: ['Técnico', 'Estado', 'Ubicación'],
        rows: [
          ['Carlos R.', 'En campo', 'Zona Norte'],
          ['Ana M.', 'Disponible', 'Base']
        ]
      }
    },
    features: [
      { icon: 'fa-bell', label: 'Alarmas → Órdenes automáticas' },
      { icon: 'fa-map-marker-alt', label: 'GPS y georreferenciación' },
      { icon: 'fa-camera', label: 'Evidencia fotográfica' },
      { icon: 'fa-chart-bar', label: 'MTTR y KPIs en vivo' },
      { icon: 'fa-wifi-slash', label: 'Funciona offline' },
      { icon: 'fa-file-signature', label: 'Firma digital del cliente' }
    ],
    workflow: [
      {
        phase: 'Planificación',
        title: 'Programación de mantenimiento',
        description: 'Coordinador programa órdenes preventivas basadas en series de tiempo de consumo y histórico de fallas.',
        icon: 'fa-calendar-alt',
        actor: 'web'
      },
      {
        phase: 'Asignación',
        title: 'Generación y asignación',
        description: 'Alarmas automáticas generan órdenes de servicio que se asignan a técnicos según proximidad y especialidad.',
        icon: 'fa-bell',
        actor: 'both'
      },
      {
        phase: 'Ejecución',
        title: 'Atención en campo',
        description: 'Técnico atiende la avería, registra diagnóstico, captura evidencia fotográfica y obtiene firma del cliente.',
        icon: 'fa-bolt',
        actor: 'mobile'
      },
      {
        phase: 'Supervisión',
        title: 'Monitoreo de técnicos',
        description: 'Coordinación visualiza ubicación GPS, tiempo de respuesta MTTR y estado de órdenes en tiempo real.',
        icon: 'fa-eye',
        actor: 'web'
      },
      {
        phase: 'Auditoría',
        title: 'Revisión de atenciones',
        description: 'Calidad revisa fotos de evidencia, valida tiempos de respuesta y aprueba cierre de órdenes.',
        icon: 'fa-search',
        actor: 'web'
      },
      {
        phase: 'Cierre',
        title: 'Cierre de orden',
        description: 'Se cierra la orden con firma digital, se factura automáticamente y se actualiza historial del cliente.',
        icon: 'fa-check-circle',
        actor: 'both'
      },
      {
        phase: 'Analítica',
        title: 'KPIs de servicio',
        description: 'Dashboards con MTTR, MTBF, cobertura geográfica, satisfacción del cliente y productividad por técnico.',
        icon: 'fa-chart-line',
        actor: 'web'
      }
    ]
  },
  {
    id: 'forestal',
    icon: 'fa-tree',
    title: 'Forestal',
    description: 'Brigadistas inventarían parcelas y controlan extracción en zonas remotas (funciona offline). Oficina central audita trazabilidad completa del recurso forestal.',
    shortDescription: 'Brigadistas inventarían parcelas y controlan extracción en zonas remotas (funciona offline). Oficina central audita trazabilidad completa del recurso forestal.',
    fullDescription: 'Así se ve la solución para el sector forestal: brigadistas inventarían parcelas y controlan extracción desde zonas remotas sin internet, mientras oficina central audita la trazabilidad completa del recurso forestal desde la web.',
    mobileApp: {
      title: '🌲 Inventario Forestal',
      user: 'Ana Soto',
      cards: [
        {
          title: 'Parcela INV-2024-089',
          status: 'progress',
          details: 'Árboles: 45 | Especie: Pino<br>DAP promedio: 35.2 cm',
          meta: ['📍 Alt: 1,240 msnm', '📸 5 fotos']
        },
        {
          title: 'Marcado Extracción',
          status: 'done',
          details: 'Árboles marcados: 12<br>Código lote: EXT-2024-056',
          meta: ['🌲 Pino, Encino', '✓ GPS guardado']
        }
      ],
      actions: [
        { label: '📷 Foto', variant: 'primary' },
        { label: '✓ Guardar', variant: 'secondary' }
      ]
    },
    dashboard: {
      title: 'Control Forestal',
      url: 'bosques.forestal.app',
      user: 'Supervisor Forestal',
      sidebarIcons: ['fa-home', 'fa-tree', 'fa-map', 'fa-chart-bar'],
      stats: [
        { value: '128', label: 'Parcelas activas' },
        { value: '3,420', label: 'Árboles muestreados' },
        { value: '8', label: 'Brigadas en campo' }
      ],
      table: {
        headers: ['Brigada', 'Parcelas', 'Sincronizado'],
        rows: [
          ['Brigada A. Soto', '12/15', 'Hace 5 min'],
          ['Brigada P. López', '8/10', 'Offline']
        ]
      }
    },
    features: [
      { icon: 'fa-tree', label: 'Inventario de parcelas' },
      { icon: 'fa-map-marker-alt', label: 'GPS de árboles muestreados' },
      { icon: 'fa-camera', label: 'Fotos de especímenes' },
      { icon: 'fa-cut', label: 'Control de extracción' },
      { icon: 'fa-file-alt', label: 'Trazabilidad completa' },
      { icon: 'fa-wifi-slash', label: '100% offline' }
    ],
    workflow: [
      {
        phase: 'Planificación',
        title: 'Programación de inventario',
        description: 'Oficina central programa parcelas a inventariar, define especies objetivo y muestreo estadístico requerido.',
        icon: 'fa-calendar-alt',
        actor: 'web'
      },
      {
        phase: 'Asignación',
        title: 'Asignación a brigadas',
        description: 'Brigadistas reciben en app móvil las parcelas asignadas, mapa topográfico y protocolo de muestreo.',
        icon: 'fa-users',
        actor: 'mobile'
      },
      {
        phase: 'Ejecución',
        title: 'Inventario en campo',
        description: 'Brigadista inventaría parcela (DAP, altura, especie), toma fotos de especímenes y marca árboles para extracción.',
        icon: 'fa-tree',
        actor: 'mobile'
      },
      {
        phase: 'Supervisión',
        title: 'Seguimiento de brigadas',
        description: 'Supervisor forestal ve ubicación de brigadas, parcelas completadas y sincronización pendiente.',
        icon: 'fa-eye',
        actor: 'web'
      },
      {
        phase: 'Auditoría',
        title: 'Validación de datos',
        description: 'Oficina técnica revisa calidad de datos, valida identificación de especies y aprueba el inventario.',
        icon: 'fa-search',
        actor: 'web'
      },
      {
        phase: 'Cierre',
        title: 'Sincronización y cierre',
        description: 'Brigada sincroniza datos al regresar de campo, se cierra inventario y se genera certificación de volumen.',
        icon: 'fa-check-circle',
        actor: 'both'
      },
      {
        phase: 'Analítica',
        title: 'Gestión forestal',
        description: 'Dashboards con volumen maderable, crecimiento anual, distribución de especies y trazabilidad de lotes.',
        icon: 'fa-chart-bar',
        actor: 'web'
      }
    ]
  }
];

export const otrosSectores: OtherSector = {
  icon: 'fa-ellipsis-h',
  title: 'Otros sectores',
  description: '¿Tienes operarios en campo que usan papel, WhatsApp o no tienes visibilidad de su trabajo? Adaptamos la plataforma a tu flujo específico.'
};
