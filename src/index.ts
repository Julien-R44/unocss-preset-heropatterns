import patterns from './patterns'
import type { Preset } from 'unocss'

export function presetHeroPatterns(): Preset {
  return {
    name: 'unocss-preset-hero-patterns',
    rules: [
      [
        /^bg-hero-(.*)$/,
        ([, name]) => {
          if (!name || !patterns[name]) {
            return
          }

          return {
            '-webkit-mask-image': patterns[name],
          }
        },
      ],
    ],
  }
}
