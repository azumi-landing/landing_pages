## Why

La home actual mezcla la presentación profesional de Héctor Guerra, dos especialidades presentadas como equivalentes, tecnologías y promesas que la auditoría T0 identificó como no verificadas. Tras T1, la taxonomía comercial ya distingue el servicio core de las soluciones especializadas; la home debe reflejarla como hub de presentación y derivación comercial, sin convertirse en una landing del Sprint ni en un catálogo tecnológico.

## What Changes

- Reposicionar la home como presentación de Héctor Guerra y hub de Automatización de Procesos e IA, con una propuesta de valor centrada en convertir procesos manuales, información dispersa y operaciones difíciles de controlar en sistemas simples, medibles y automatizados.
- Reordenar la narrativa para comunicar: perfil profesional, problemas empresariales, servicio core, soluciones especializadas activas, forma de trabajo, evidencia verificable, capacidades técnicas secundarias y contacto.
- Presentar Automatización de Procesos e IA como el único servicio core, con una ruta y CTA hacia la landing activa, sin convertir el Sprint de Automatización en protagonista de la home.
- Añadir una sección extensible de soluciones especializadas que derive su contenido de las soluciones activas de la configuración comercial; inicialmente mostrará solo Operaciones de Campo y conservará Cursos por WhatsApp fuera de la superficie pública.
- Mantener tecnologías como capacidades de apoyo, no como la propuesta principal ni una lista de herramientas en el hero.
- Mostrar solo métricas provenientes de `VERIFIED_METRICS`; si el conjunto permanece vacío, la home no presentará métricas ni resultados cuantitativos no verificados.
- Limitar EnerHubHN a un eventual enlace discreto de marca relacionada fuera de la taxonomía y oferta comercial de HGuerra; este cambio no publicará energía como servicio.
- Ajustar metadata, estructura semántica, navegación por secciones cuando corresponda y estilos responsive de las superficies afectadas, sin modificar rutas activas, formulario, dependencias ni infraestructura.

## Capabilities

### New Capabilities
- `homepage-positioning`: Home pública que presenta a Héctor Guerra, comunica el servicio core y deriva hacia soluciones especializadas activas bajo la taxonomía comercial canónica.

### Modified Capabilities
- Ninguna.

## Impact

- Afecta principalmente `src/pages/index.astro`, `src/data/home.ts` y los componentes o estilos reutilizables estrictamente necesarios para una estructura extensible y accesible.
- Consume `src/data/commercial.ts`, incluida `coreService`, `activeSolutions` y `VERIFIED_METRICS`, sin cambiar sus términos comerciales ni crear un segundo servicio core.
- Puede actualizar metadata y JSON-LD de la home para alinear el contenido público, pero no añade endpoints, analítica, CMS, dependencias, rutas ni proveedores externos.
- La verificación incluirá build, typecheck disponible, comprobaciones de enlaces/navegación y revisión responsive a 360 px, tablet y desktop; la ausencia de scripts de test/lint y fallos preexistentes se reportarán explícitamente.
