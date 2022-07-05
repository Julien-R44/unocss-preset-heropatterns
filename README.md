# unocss-preset-heropatterns

🏁 [UnoCSS](https://github.com/unocss/unocss) preset that integrates [Hero Patterns](https://heropatterns.com/)

## Installation
```
pnpm add -D @julr/unocss-preset-heropatterns
```

## Usage

```ts
import { defineConfig } from 'unocss'
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

export default defineConfig({
  presets: [
    presetHeroPatterns()
  ],
})
```

The only rule that is added via this preset is `bg-hero-{patternName}`.

We use [mask-image](https://developer.mozilla.org/fr/docs/Web/CSS/mask-image) to display the patterns, so to change the color of the pattern, its opacity, or the background color, you can use the classes you are used to, for example :

```html
<div class="bg-hero-rain bg-red-500 opacity-70"></div>
```

## List of patterns
- "jigsaw"
- "overcast"
- "formal-invitation"
- "topography"
- "texture"
- "jupiter"
- "architect"
- "cutout"
- "hideout"
- "graph-paper"
- "yyy"
- "squares"
- "falling-triangles"
- "piano-man"
- "pie-factory"
- "dominos"
- "hexagons"
- "charlie-brown"
- "autumn"
- "temple"
- "stamp-collection"
- "death-star"
- "church-on-sunday"
- "i-like-food"
- "overlapping-hexagons"
- "four-point-stars"
- "bamboo"
- "bathroom-floor"
- "cork-screw"
- "happy-intersection"
- "kiwi"
- "lips"
- "lisbon"
- "random-shapes"
- "steel-beams"
- "tiny-checkers"
- "x-equals"
- "anchors-away"
- "bevel-circle"
- "brick-wall"
- "fancy-rectangles"
- "heavy-rain"
- "overlapping-circles"
- "plus"
- "rounded-plus-connected"
- "volcano-lamp"
- "wiggle"
- "bubbles"
- "cage"
- "connections"
- "current"
- "diagonal-stripes"
- "flipped-diamonds"
- "floating-cogs"
- "glamorous"
- "houndstooth"
- "leaf"
- "lines-in-motion"
- "moroccan"
- "morphing-diamonds"
- "rails"
- "rain"
- "skulls"
- "squares-in-squares"
- "stripes"
- "tic-tac-toe"
- "zig-zag"
- "aztec"
- "bank-note"
- "boxes"
- "circles-squares"
- "circuit-board"
- "curtain"
- "diagonal-lines"
- "endless-clouds"
- "eyes"
- "floor-tile"
- "groovy"
- "intersecting-circles"
- "melt"
- "overlapping-diamonds"
- "parkay-floor"
- "pixel-dots"
- "polka-dots"
- "signal"
- "slanted-stars"
- "wallpaper"

## License

[MIT](./LICENSE.md) License © 2022 [Julien Ripouteau](https://github.com/Julien-R44)
