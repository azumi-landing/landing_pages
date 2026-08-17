## Why

Los siguientes cambios comerciales y técnicos necesitan una línea base verificable del sitio actual para distinguir comportamiento activo, contenido público, datos dormidos y afirmaciones sin evidencia. La auditoría debe quedar formalizada antes de modificar posicionamiento, precios, servicios o claims.

## What Changes

- Auditar el repositorio y el despliegue público actual de `hguerra.com` sin modificar funcionalidad, diseño ni copy.
- Documentar stack, arquitectura, rutas, layouts, componentes, estilos, configuración, integraciones, variables de entorno y estado Git.
- Registrar QA disponible y resultados de build, typecheck, dependencias y smoke tests proporcionales.
- Inventariar propuesta de valor, servicios, CTAs, precios, casos, tecnologías, claims, métricas, absolutos, repeticiones y residuos.
- Separar afirmaciones públicamente renderizadas, contenido dormido y evidencia interna; ausencia de evidencia no se tratará como falsedad.
- Mantener el reporte persistente en `docs/audits/hguerra-current-site.md` como línea base para cambios posteriores.

## Capabilities

### New Capabilities

Ninguna. Este change produce documentación de auditoría y no añade comportamiento al sitio. `.openspec.yaml` declara `skip_specs: true` para evitar requisitos artificiales.

### Modified Capabilities

Ninguna. No cambia requisitos ni comportamiento observable de capacidades existentes.

## Impact

- Documentación: `docs/audits/hguerra-current-site.md`.
- Planificación: artefactos bajo `openspec/changes/audit-hguerra-current-site/`.
- Superficies inspeccionadas: `src/`, `public/`, configuración raíz, package metadata y despliegue público.
- Dependencias y runtime: sin cambios.
- APIs, rutas, formularios, SEO y copy: sin cambios.
