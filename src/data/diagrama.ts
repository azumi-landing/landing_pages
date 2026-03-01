import type { FlowLevel, ResultItem } from '../types/diagrama';

export const flowLevels: FlowLevel[] = [
  {
    id: 'asignacion',
    title: '1. ASIGNACIÓN DESDE LA WEB',
    description: 'Programas tareas y rutas desde la plataforma web',
    level: 1,
    highlight: 'blue',
    icon: 'fa-tasks',
    items: [
      { icon: 'fa-calendar-alt', text: 'Programas tareas y rutas' },
      { icon: 'fa-user-plus', text: 'Asignas a operarios' },
      { icon: 'fa-bell', text: 'Notificación push al móvil' }
    ]
  },
  {
    id: 'app-campo',
    title: '2. APP MÓVIL EN CAMPO',
    description: 'Operarios ejecutan con datos estructurados y evidencia',
    level: 2,
    highlight: 'green',
    icon: 'fa-mobile-alt',
    items: [
      { icon: 'fa-eye', text: 'Ve asignaciones pendientes' },
      { icon: 'fa-edit', text: 'Captura datos estructurados', small: 'formularios con validación' },
      { icon: 'fa-camera', text: 'Fotos + GPS obligatorios' },
      { icon: 'fa-signature', text: 'Firma digital' }
    ]
  },
  {
    id: 'sincronizacion',
    title: '3. SINCRONIZACIÓN AUTOMÁTICA',
    description: 'Datos fluyen entre campo y oficina sin intervención',
    level: 3,
    highlight: 'yellow',
    icon: 'fa-sync',
    items: [
      { icon: 'fa-wifi', text: 'Enviado en tiempo real (con internet)' },
      { icon: 'fa-download', text: 'Almacenado localmente (modo offline)' },
      { icon: 'fa-upload', text: 'Sincroniza automático al recuperar señal' },
      { icon: 'fa-check-circle', text: 'Confirmación de recepción en web' }
    ]
  },
  {
    id: 'plataforma-web',
    title: '4. PLATAFORMA WEB ADMINISTRATIVA',
    description: 'Visibilidad total y control desde cualquier lugar',
    level: 4,
    highlight: 'purple',
    icon: 'fa-laptop',
    items: [
      { icon: 'fa-chart-line', text: 'Dashboard con métricas en tiempo real' },
      { icon: 'fa-map-marked-alt', text: 'Mapa de ubicaciones y cobertura' },
      { icon: 'fa-clipboard-check', text: 'Auditoría completa: quién, cuándo, dónde' },
      { icon: 'fa-bell', text: 'Alertas por desviaciones o atrasos' }
    ]
  },
  {
    id: 'integracion',
    title: '5. INTEGRACIÓN CON TUS SISTEMAS',
    description: 'Conecta con tu ecosistema existente',
    level: 5,
    highlight: 'orange',
    icon: 'fa-plug',
    items: [
      { icon: 'fa-sync', text: 'Sincronización bidireccional' },
      { icon: 'fa-database', text: 'ERP / SAP / CRM' },
      { icon: 'fa-file-export', text: 'Exportación automática de reportes' },
      { icon: 'fa-key', text: 'Single Sign-On (SSO)' }
    ]
  }
];

export const resultados: ResultItem[] = [
  { icon: 'fa-eye', text: '100% visibilidad de operaciones en campo en tiempo real', highlight: '100% visibilidad' },
  { icon: 'fa-check-double', text: 'Hasta -60% errores de captura con validación en origen', highlight: 'Hasta -60% errores' },
  { icon: 'fa-clipboard-check', text: 'Auditoría completa con evidencia inmutable (fotos, GPS, timestamp)', highlight: 'evidencia inmutable' },
  { icon: 'fa-chart-line', text: 'Decisiones basadas en datos actualizados al minuto, no al día siguiente', highlight: 'actualizados al minuto' },
  { icon: 'fa-users', text: '90% menos llamadas de seguimiento al equipo de campo', highlight: '90% menos llamadas' }
];
