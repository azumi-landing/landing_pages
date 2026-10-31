# HGuerra · Brand Center

Manual de marca de HGuerra: conserva la identidad visual del sitio y documenta la nueva dirección de consultoría e implementación de datos e inteligencia artificial. El eslogan es «Inteligencia aplicada a desafíos reales».

El nuevo posicionamiento y los ejemplos de comunicación del manual **todavía no están aplicados al sitio web**, que conserva su contenido y su oferta anterior. Automatización y operaciones de campo pasan por ahora a legacy: pueden mencionarse como experiencia previa o aplicaciones cuando aporten contexto, pero no son líneas principales ni ofertas destacadas de la nueva etapa. Esta actualización no cambia páginas, navegación, componentes ni estilos de producción.

## Abrir

Abre `docs/brandcenter/index.html` directamente en el navegador. Funciona sin instalación, compilación, JavaScript, fuentes externas ni conexión a internet.

También puedes servirlo desde la raíz del proyecto:

```sh
python3 -m http.server 8000 --directory docs/brandcenter
```

Visita <http://localhost:8000>. Para obtener un PDF, usa la opción **Imprimir → Guardar como PDF** del navegador.

## Estructura

- `index.html`: esencia, logotipo, color, tipografía, lenguaje visual, voz, aplicaciones y recursos.
- `styles.css`: presentación del manual, adaptación móvil, foco de teclado e impresión.
- `tokens.css`: variables CSS reutilizables extraídas de la identidad actual, sin dependencias.
- `assets/hg-symbol.svg`: monograma extraído de `LogoHG.astro`, sin animación.
- `assets/hg-logo-white.svg`: composición descargable del monograma y el nombre para fondos oscuros.
- `assets/hg-logo-dark.svg`: la misma composición con nombre oscuro para fondos claros.
- `assets/hg-favicon.svg`: copia de la variante que usa actualmente el sitio.
- `assets/marca-personal/`: propuesta de marca para la nueva etapa de consultoría, sin modificar el sitio. Incluye nombre personal, firma HGuerra y versión con el eslogan, cada una para fondos claros y oscuros, más monogramas a color y monocromáticos.

Los nombres `white` y `dark` indican el color del **nombre**, no del fondo. Las composiciones horizontales empaquetan el monograma y el nombre de la navegación; no sustituyen el componente del sitio. Los SVG conservan texto con tipografía de sistema, **no letras convertidas a trazados**: el dibujo de los caracteres puede variar entre sistemas operativos. Antes de una entrega a imprenta que requiera geometría fija, convierte el texto a trazados en una herramienta vectorial.

En cambio, los archivos de `assets/marca-personal/` sí tienen letras convertidas a trazados y fondo transparente: no requieren fuentes instaladas. Los nombres `claro` y `oscuro` indican el **fondo recomendado**, no el color de las letras. Los monogramas `dark` y `white` indican el color del círculo; usa `dark` en fondos claros y `white` en oscuros. La propuesta emplea Inter de The Inter Project Authors (SIL Open Font License 1.1) para generar los trazados, sin cambiar la tipografía del sitio. El eslogan es «Inteligencia aplicada a desafíos reales». Para tamaños pequeños usa el monograma sin eslogan.

## Fuentes y transición

| Contenido | Fuente o estado |
| --- | --- |
| Superficies, radios, sombras, contenedores y tipografía | `src/styles/global.css` |
| Monograma y degradado principal | `src/components/LogoHG.astro` |
| Nombre junto al símbolo | `src/components/MainNav.astro` |
| Favicon azul, índigo y violeta | `public/hg-favicon.svg` |
| Acentos de servicios | `src/data/serviceThemes.ts` |
| Posicionamiento y mensajes de la nueva etapa | Decisiones de marca documentadas en este manual; aún no aplicadas al sitio |
| Mensajes publicados anteriormente | `src/pages/index.astro`, `src/data/home.ts` |
| Ofertas y condiciones publicadas anteriormente | `src/data/commercial.ts`; confirmar vigencia antes de comunicar ofertas de la nueva etapa |

`tokens.css` es una copia documental independiente, no una sincronización automática. Si cambia la identidad en esas fuentes, actualiza el manual y sus recursos. El violeta pertenece al favicon existente; no se introduce como acento principal del sitio.

Las pautas de aire, escala y redacción son recomendaciones de uso, no una certificación de marca. Las aplicaciones ilustran el nuevo enfoque: no son capturas del sitio, no establecen precios ni presentan resultados de clientes.
