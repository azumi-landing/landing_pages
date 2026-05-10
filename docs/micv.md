---
mainfont: "Montserrat"
mainfontoptions:
  - Path=/usr/share/fonts/truetype/montserrat/
  - Extension=.ttf
  - UprightFont=Montserrat-Regular
  - BoldFont=Montserrat-Bold
  - ItalicFont=Montserrat-Italic
  - BoldItalicFont=Montserrat-BoldItalic
sansfont: "Montserrat"
sansfontoptions:
  - Path=/usr/share/fonts/truetype/montserrat/
  - Extension=.ttf
  - UprightFont=Montserrat-Regular
  - BoldFont=Montserrat-Bold
  - ItalicFont=Montserrat-Italic
  - BoldItalicFont=Montserrat-BoldItalic
geometry: margin=2cm
colorlinks: true
linkcolor: MidnightBlue
header-includes:
  - \usepackage{xcolor}
  - \definecolor{accent}{HTML}{0B7285}
  - \usepackage{graphicx}
  - \usepackage{titlesec}
  - \titleformat{\section}{\Large\bfseries\color{accent}}{}{0pt}{}
  - \titleformat{\subsection}{\normalsize\bfseries\color{accent}}{}{0pt}{}
  - \titlespacing*{\section}{0pt}{18pt}{6pt}
  - \titlespacing*{\subsection}{0pt}{12pt}{4pt}
  - \setlength{\parindent}{0pt}
  - \setlength{\parskip}{4pt}
---

# Héctor Reynel Guerra Flores
### Senior Data Engineer · Data, IoT & AI Agents · Sector Energético

**Ubicación:** Tegucigalpa, Honduras · Remoto LATAM · Consultoría y full-time \
**Email:** hector.reynel.guerra@gmail.com · **Tel:** +504 3204-5265 \
**LinkedIn:** [linkedin.com/in/hectorreynelguerra](https://www.linkedin.com/in/hectorreynelguerra)

## Perfil

Ingeniero Senior con **+10 años** diseñando pipelines de datos, plataformas backend y soluciones IoT en el sector energético y ambiental. Opero en la intersección de **Data Engineering, Backend y dominio de negocio**, con foco reciente en **sistemas multi-agente con LLMs (LangGraph)** para automatización de procesos críticos.

- **Escala operativa:** pipelines y modelos de ML en producción sobre **+2M clientes** de medición inteligente a nivel nacional.
- **Diferenciador:** sistema multi-agente con LangGraph desplegado en producción orquestando tareas operativas sobre pipelines de datos energéticos.
- **Fullstack pragmático:** desde firmware en C embebido y filtros de Kalman en IoT, hasta BigQuery, Airflow y apps móviles de operativa de campo.

## Formatos de colaboración

- **Full-time** — Senior/Staff Data Engineer, AI Engineer o tech lead de plataforma de datos.
- **Consultoría por proyecto (4–12 semanas)** — diseño de pipelines, arquitectura de datos, PoCs de AI agents con LangGraph, detección de anomalías en series de tiempo.
- **Advisory / diagnóstico (1–2 semanas)** — auditoría técnica de plataforma de datos, revisión de arquitectura GCP, setup de agentes LLM en producción.

## Experiencia

### Especialista de Balance de Energía · ENEE – PNRP
_ene. 2025 – abr. 2026 · Tegucigalpa, Honduras_

Lideré la automatización de los procesos de balance de energía del Programa Nacional de Reducción de Pérdidas (PNRP) — función crítica que previamente falló ejecutándose de forma manual a escala nacional.

- Diseñé pipelines para el **cálculo automatizado de balances de energía** por circuito, segmento y macromedidor, reemplazando un proceso manual insostenible.
- Desplegué en producción un **sistema multi-agente con LangGraph** coordinando agentes especializados que ejecutan acciones sobre los pipelines operativos.
- Integré múltiples fuentes de datos heterogéneas: lecturas de medidores, facturación e infraestructura de red a nivel nacional.
- Construí apps móviles en Flutter para operativa de campo: **Vínculo Cliente-Red (VCR)** para amarrar clientes a transformadores, y flujo completo asignación → visita → auditoría.
- Implementé pipelines de procesamiento de fotografías y documentos técnicos con GCP Cloud Run.

_Stack:_ Python · LangGraph · LangChain · GCP (BigQuery, Cloud Run, Composer) · Airflow · Flutter · PostgreSQL · Docker

### Especialista de Telegestión · ENEE – PNRP
_ago. 2023 – dic. 2024 · Honduras_

Análisis de datos de medidores telegestionados a nivel nacional para detección de anomalías asociadas a pérdidas no técnicas sobre **+2M clientes**.

- Construí un **sistema de detección de anomalías** integrando perfiles de carga, alarmas de equipos e historiales de órdenes de servicio.
- Diseñé DAGs en Airflow para procesamiento continuo a escala nacional, automatizando procesos que requerían intervención manual.
- **Desplegué modelos de ML en producción real** (no exploratorio) para apoyo a decisiones operativas.
- Desarrollé dashboards operativos de perfiles de carga y alarmas consumidos por equipos de campo.

_Stack:_ Python · SQL · Airflow · Machine Learning (detección de anomalías) · GCP · Power BI · Grafana

### Software Developer · Sidereal Ocean
_ene. 2020 – feb. 2024 · Jornada completa · Honduras_

Empresa de geomática enfocada en datos espaciales. Desarrollo backend y modelos matemáticos de estimación de estado para dispositivos IoT de tracking GPS.

- Implementé **Filtros de Kalman Extendido (EKF)** embebidos en dispositivos IoT para estimar variables de estado no observables a partir de mediciones con ruido.
- Diseñé la **arquitectura serverless en AWS** (IoT Core + Lambda) para ingesta y procesamiento de telemetría en tiempo real.
- Programé firmware en **C embebido** optimizado para microcontroladores con recursos limitados.
- Integré el ciclo end-to-end: dispositivo → cloud → dashboard, bajo metodología SCRUM.

_Stack:_ C Embedded · Python · Node.js · AWS IoT · Lambda · MongoDB · DynamoDB

### Software Developer · OCP MiAmbiente – PNUD / GEF
_jun. 2017 – dic. 2019 · Jornada completa · Honduras_

Plataformas de software para integración y análisis de datos geoespaciales de proyectos ambientales financiados por PNUD y GEF.

- Construí una **Infraestructura de Datos Espaciales (IDE)** unificando información geográfica de múltiples proyectos internacionales: REDD+, ONU-REDD, GARM, Eficiencia Energética.
- Implementé servicios de publicación geoespacial con GeoServer y visualización web con Leaflet.
- Contenedoricé servicios con Docker para despliegues reproducibles; administré servidores Linux y virtualización con VMware ESXi.

_Stack:_ Python/Django · Node.js · GeoServer · PostGIS · Leaflet · Docker · Linux

### Admin Sys & Backend Developer · SERNA / MiAmbiente
_ene. 2014 – may. 2017 · Honduras_

- Construí la **Infraestructura de Datos Espaciales nacional** unificando información geográfica ambiental de estaciones meteorológicas y múltiples proveedores.
- Administré servidores Linux/Windows que soportaban plataformas SIG a nivel nacional.
- Enlace técnico entre TI y proyectos internacionales de financiamiento ambiental (PNUD/GEF).

_Stack:_ Python/Django · Node.js · GeoServer · Leaflet · Linux · VMware ESXi

## Proyectos destacados

- **Sistema multi-agente con LangGraph en producción (2025–2026).** Orquestación de tareas operativas sobre pipelines de datos energéticos con agentes especializados — primer despliegue productivo de este tipo dentro de la operación del PNRP.
- **Detección de anomalías sobre +2M clientes de telegestión (2023–2024).** ML clásico sobre perfiles de carga, alarmas y órdenes de servicio; desplegado para apoyar decisiones de intervención en pérdidas no técnicas.
- **Automatización del balance de energía nacional (2025–2026).** Reemplazo de un proceso manual fallido por pipelines automatizados de cálculo por circuito, segmento y macromedidor.
- **Filtros de Kalman Extendido en IoT GPS (2020–2024).** Estimación de variables no observables en hardware con recursos limitados, integrados al ciclo firmware → cloud → dashboard.

## Stack técnico

- **Data & Orquestación:** Airflow · BigQuery · Dataproc · ETL/ELT · PostgreSQL · PostGIS · TimescaleDB · MongoDB · Firestore
- **AI / ML:** LangGraph · LangChain · LLMs · Detección de anomalías · Series de tiempo · Embeddings · ML clásico en producción
- **Cloud:** GCP (BigQuery, Cloud Run, Composer, Pub/Sub, Cloud SQL, Storage, IAM) · AWS (IoT Core, Lambda, DynamoDB)
- **Lenguajes:** Python · Node.js · JavaScript · SQL · C embebido
- **Backend & APIs:** Cloud Run · Lambda · Express · Django · REST/JSON · arquitecturas serverless
- **Frontend & Mobile:** Next.js · React · Flutter
- **IoT & Geoespacial:** AWS IoT · GeoServer · Leaflet · PostGIS · firmware C/MCU
- **DevOps:** Docker · Linux · Git · CI/CD

## Formación

- **Maestría en Ingeniería de la Computación** — en curso
- **Ingeniero Electricista Industrial** — UNAH
- **Técnico en Electrónica** — Instituto Técnico Honduras
- **Formación continua** — Coursera · Udemy (Data · Cloud · IA)
- **Inglés técnico:** lectura/escritura fluida (documentación, papers, herramientas de IA)

![QR de validación de título — UNAH](QRU.png){ width=3cm }
