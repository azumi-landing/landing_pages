## Why

La oferta actual modela Automatización y Operaciones de Campo como especialidades equivalentes, aunque la primera es la capacidad comercial general y la segunda es una solución construida sobre ella. La auditoría T0 también identificó CTAs, enlaces de WhatsApp y claims cuantitativos dispersos, lo que impide mantener una oferta coherente y verificable.

Se necesita una fuente estática, tipada y extensible que exprese un servicio core, soluciones especializadas y un funnel transversal, sin introducir infraestructura ni reescribir la arquitectura Astro existente.

## What Changes

- Añadir una configuración comercial compartida equivalente a `coreService` y `solutions[]`.
- Modelar Automatización de Procesos e IA como el único servicio core, con la ruta activa actual, CTA, capacidades y Sprint de Automatización desde L 19,900 con plazo de 10 a 15 días hábiles según alcance.
- Modelar Gestión/Digitalización de Operaciones de Campo como solución especializada activa con Piloto de Operaciones de Campo, sin inventar un precio fijo.
- Modelar Cursos por WhatsApp con estado de próxima disponibilidad, sin publicarlo como solución activa, y permitir soluciones futuras sin cambiar la taxonomía principal.
- Centralizar el funnel transversal: llamada de encaje gratuita de 15 minutos; diagnóstico operativo desde L 4,900 acreditable a una implementación contratada dentro de 30 días; y soporte y mejora continua desde L 4,000 mensuales.
- Centralizar CTAs y destinos comerciales reutilizables, sustituyendo URLs o etiquetas compartidas duplicadas cuando corresponda.
- Establecer `VERIFIED_METRICS` como única fuente de métricas cuantitativas comerciales renderizables; retirar o no renderizar claims sin evidencia validada y conservarlos solo como TODO interno si aporta valor.
- Mantener EnerHubHN fuera de la taxonomía comercial de HGuerra; solo podrá figurar en el futuro como enlace discreto de marca relacionada, no como servicio o solución.
- Preservar contratos de render actuales durante una adopción por etapas, sin CMS, base de datos, dependencias nuevas ni refactors ajenos.

## Capabilities

### New Capabilities
- `commercial-content-config`: Taxonomía comercial tipada de servicio core, soluciones especializadas, funnel transversal, acciones compartidas y métricas cuantitativas verificadas.

### Modified Capabilities
- Ninguna.

## Impact

- Afecta `src/data/`, `src/types/`, navegación, home, landings activas y componentes que consumen CTAs, enlaces, ofertas o métricas comerciales.
- Puede retirar de superficies activas métricas cuantitativas no validadas, conforme a la auditoría T0; no se inventará evidencia ni aproximaciones.
- Conserva las rutas activas existentes para evitar una migración de URL dentro de este change.
- No añade dependencias, APIs externas, CMS, base de datos ni infraestructura.
- La verificación deberá ejecutar los scripts disponibles; actualmente el repositorio solo declara `npm run build`, no `test`, `lint` ni `typecheck` dedicados.
