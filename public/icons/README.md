# Iconos — Portfolio Diego Gil Jiménez

Set de 5 iconos en blanco, estilo outline minimalista (estética enterprise/Salesforce, originales — no copias de SLDS).

- **Formato:** SVG, `viewBox="0 0 24 24"`, escalable a cualquier tamaño.
- **Color:** `stroke="#ffffff"` (blanco puro). Cambia el atributo `stroke` para recolorear.
- **Grosor:** `stroke-width="1.75"` — ajusta si quieres más fino o más bold.
- **Fondo:** transparente.

## Mapping emoji → archivo

Para que Claude Code (o quien edite) entienda dónde va cada uno:

| Emoji actual | Archivo            | Dónde se usa en la web                                                                 |
|--------------|--------------------|----------------------------------------------------------------------------------------|
| 🏆           | `trophy.svg`       | Sección **Trailhead Stats** → tarjeta **"Ranger"** (rango más alto, nivel 4)            |
| ⚡           | `bolt.svg`         | Sección **Trailhead Stats** → tarjeta **"Superbadge Champion"** (35+ superbadges)       |
| 🤖           | `robot.svg`        | Sección **Trailhead Stats** → tarjeta **"Einstein AI Expert"**                          |
| 🔥           | `flame.svg`        | **Hero card flotante** → "Ranger Nv.4 · Trailhead"                                      |
| 🎖           | `medal.svg`        | **Hero card flotante** → "8 Certs · Certificado"                                        |

## Uso en HTML / JSX

```html
<!-- Reemplazo directo del emoji -->
<img src="/icons/trophy.svg" alt="Ranger" width="32" height="32" />

<!-- O inline, para poder cambiar color con CSS -->
<svg width="32" height="32" aria-hidden="true">
  <use href="/icons/trophy.svg#icon" />
</svg>
```

## Uso en Next.js (tu stack)

Si los importas como componentes React (vía `@svgr/webpack` o similar):

```jsx
import TrophyIcon from '@/public/icons/trophy.svg';
import BoltIcon from '@/public/icons/bolt.svg';
import RobotIcon from '@/public/icons/robot.svg';
import FlameIcon from '@/public/icons/flame.svg';
import MedalIcon from '@/public/icons/medal.svg';

// Antes:
// <span className="card-icon">🏆</span>
// Después:
<TrophyIcon className="card-icon" width={40} height={40} />
```

O más simple, como `<img>`:

```jsx
<img src="/icons/trophy.svg" alt="" className="card-icon" aria-hidden="true" />
```

## Recolorear con CSS

Como son SVG con `stroke="#ffffff"` hardcoded, si quieres cambiar color desde CSS:
1. Edita el atributo `stroke` a `stroke="currentColor"` en cada archivo.
2. Luego en CSS: `.card-icon { color: #1589ee; }` y el icono toma ese color.

## Preview

Abre `preview.html` para ver los 5 iconos juntos sobre fondo oscuro.
