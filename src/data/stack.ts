import type { StackItem } from '../types/stack';

export const stackItems: StackItem[] = [
  {
    id: 'cloud-serverless',
    icon: 'fa-cloud',
    title: 'Cloud & Serverless',
    description: 'Arquitecturas serverless y event-driven en GCP',
    details: [
      'Google Cloud Platform: Cloud Run, Cloud Functions, Eventarc, Pub/Sub',
      'Arquitecturas: Event-driven, serverless, microservicios',
      'Integración: APIs REST, webhooks, messaging',
      'Escalabilidad: Auto-scaling, alta disponibilidad'
    ]
  },
  {
    id: 'datos-analitica',
    icon: 'fa-database',
    title: 'Datos & Analítica',
    description: 'Pipelines ETL/ELT y procesamiento distribuido',
    details: [
      'Pipelines: Apache Airflow, ETL/ELT workflows',
      'Procesamiento: Dataproc (Apache Spark), batch y streaming',
      'Almacenamiento: BigQuery, Cloud SQL, PostgreSQL',
      'Calidad: Validación de datos, versionado, linaje',
      'BI: Power BI, Looker Studio, dashboards operativos'
    ]
  },
  {
    id: 'desarrollo',
    icon: 'fa-code',
    title: 'Desarrollo',
    description: 'Full-stack con enfoque en datos y operaciones',
    details: [
      'Backend: Python, SQL, Node.js',
      'Frontend/Mobile: Flutter, Astro, React, PWA',
      'APIs: REST, GraphQL, webhooks',
      'Integraciones: WhatsApp Business API, AppSheet, servicios externos',
      'Testing: Unit tests, integration tests, CI/CD'
    ]
  },
  {
    id: 'infraestructura-devops',
    icon: 'fa-server',
    title: 'Infraestructura & DevOps',
    description: 'Deploy y operación de sistemas en producción',
    details: [
      'Hosting: Firebase, Cloud Run, App Engine',
      'Storage: Cloud Storage, Firestore',
      'Monitoreo: Cloud Logging, alertas, métricas',
      'Seguridad: IAM, secrets management, autenticación',
      'CI/CD: Automatización de deploy, rollbacks'
    ]
  },
  {
    id: 'ia-machine-learning',
    icon: 'fa-brain',
    title: 'IA & Machine Learning',
    description: 'Modelos en producción y procesamiento de datos',
    details: [
      'Modelos: Detección de anomalías, clasificación, predicción',
      'RAG: Retrieval-Augmented Generation para chatbots',
      'Procesamiento: NLP, análisis de texto, embeddings',
      'Producción: Modelos en Cloud Run, versionado, A/B testing'
    ]
  }
];
