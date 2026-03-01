import type { CasoExito } from '../types/casos';

export const casosExito: CasoExito[] = [
  {
    id: 'pipeline-evidencias',
    sector: 'Gobierno',
    sectorIcon: 'fa-file-alt',
    title: 'Procesamiento masivo de evidencias sin intervención manual',
    description: 'Revisión manual de millones de archivos con riesgo de error y tiempos de días.',
    dolor: 'Revisión manual de millones de archivos con riesgo de error y tiempos de días.',
    solucion: 'Plataforma con app móvil para registro en campo (fotos, GPS) y web administrativa para supervisión. Validaciones automáticas y auditoría completa.',
    metricas: [
      '+5,000,000 archivos procesados con validaciones automáticas',
      'Revisión baja de días a minutos',
      'Auditoría completa sin intervención manual'
    ],
    stack: 'AppSheet → Cloud Run → Eventarc → Cloud SQL'
  },
  {
    id: 'inspeccion-campo',
    sector: 'Energía',
    sectorIcon: 'fa-search-location',
    title: 'Inspecciones sin errores con captura obligatoria y trazabilidad',
    description: 'Datos incompletos y errores en inspecciones manuales sin trazabilidad por activo.',
    dolor: 'Datos incompletos y errores en inspecciones manuales sin trazabilidad por activo.',
    solucion: 'App móvil con formularios inteligentes, fotos y GPS obligatorios. Sync offline/online. Dashboard web para supervisores con métricas en tiempo real.',
    metricas: [
      '-60% errores de captura en 3 semanas',
      'Trazabilidad completa por activo',
      'Inspecciones con validaciones en tiempo real'
    ],
    stack: 'Flutter + Firebase/GCP + Serverless sync'
  },
  {
    id: 'balance-energetico',
    sector: 'Energía',
    sectorIcon: 'fa-chart-line',
    title: 'Visibilidad completa de pérdidas para decisiones operativas inmediatas',
    description: 'Datos dispersos, reportes manuales y sin visibilidad clara de pérdidas por tramo.',
    dolor: 'Datos dispersos, reportes manuales y sin visibilidad clara de pérdidas por tramo.',
    solucion: 'Plataforma de captura en campo con app móvil, sincronización automática y dashboard web con KPIs de pérdidas y eficiencia.',
    metricas: [
      'Visibilidad completa de pérdidas y eficiencia por tramo',
      'Dashboards conectados a datos auditables',
      'Histórico masivo disponible para análisis'
    ],
    stack: 'Airflow ETL + BigQuery + Power BI + Dataproc (históricos)'
  },
  {
    id: 'control-insumos',
    sector: 'Agricultura',
    sectorIcon: 'fa-seedling',
    title: 'Control de insumos y certificaciones sin errores de inventario',
    description: 'Control manual de insumos agrícolas con errores frecuentes en inventarios y certificaciones sin trazabilidad.',
    dolor: 'Control manual de insumos agrícolas con errores frecuentes en inventarios y certificaciones sin trazabilidad.',
    solucion: 'App móvil para registro de insumos en campo (QR, fotos, GPS) y plataforma web para trazabilidad completa y reportes de certificación.',
    metricas: [
      'Trazabilidad completa de insumos por lote y parcela',
      'Certificaciones con evidencia auditable',
      'Inventarios confiables sin reprocesos manuales'
    ],
    stack: 'Flutter + Firebase + Airflow ETL + BigQuery'
  },
  {
    id: 'seguridad-minera',
    sector: 'Minería',
    sectorIcon: 'fa-hard-hat',
    title: 'Inspecciones de seguridad con evidencia completa y alertas automáticas',
    description: 'Inspecciones de seguridad en zonas remotas sin evidencia confiable y reportes que tardan días.',
    dolor: 'Inspecciones de seguridad en zonas remotas sin evidencia confiable y reportes que tardan días.',
    solucion: 'App móvil offline-first para zonas sin cobertura, con checklist de seguridad, fotos georreferenciadas y alertas automáticas al sincronizar.',
    metricas: [
      '100% inspecciones con evidencia georreferenciada',
      'Alertas críticas en minutos, no días',
      'Funciona offline en zonas sin conexión'
    ],
    stack: 'Flutter + Cloud Functions + Pub/Sub + BigQuery'
  },
  {
    id: 'procesamiento-distribuido',
    sector: 'Datos masivos',
    sectorIcon: 'fa-database',
    title: 'Cálculos intensivos en horas, no días, sin cuellos de botella',
    description: 'Procesos batch lentos que tardan días y bloquean decisiones operativas.',
    dolor: 'Procesos batch lentos que tardan días y bloquean decisiones operativas.',
    solucion: 'Procesamiento distribuido para grandes volúmenes con integración directa a herramientas de decisión.',
    metricas: [
      'Cálculos batch en horas, no días',
      'Escalabilidad sin re-trabajos de arquitectura',
      'Integración lista para BI y reportes'
    ],
    stack: 'Dataproc (Spark) + BigQuery + Cloud Storage'
  }
];
