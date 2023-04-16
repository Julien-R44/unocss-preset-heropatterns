import { parseColor } from '@unocss/preset-mini/utils'
import patterns from './patterns'

import type { Preset } from 'unocss'

const availablePatterns = Object.keys(patterns)
const availablePatternsGroup = `(${availablePatterns.sort().reverse().join('|')})`
const bgHeroRegex = new RegExp(`^bg-hero-${availablePatternsGroup}-(.*)$`)
const bgMaskHeroRegex = new RegExp(`^mask-bg-hero-${availablePatternsGroup}$`)

export function presetHeroPatterns(): Preset {
  return {
    name: 'unocss-preset-hero-patterns',
    rules: [
      [
        bgHeroRegex,
        ([, name, color], { theme }) => {
          const pattern = patterns[name || '']
          const parsed = parseColor(color || '', theme)
          if (pattern && parsed) {
            const rgbComponents = parsed.cssColor?.components.join(',') ?? '0,0,0'
            const alpha = parsed.alpha?.toString() ?? '1'
            const bgImage = pattern
              .replace('FILLCOLOR', `rgb(${rgbComponents})`)
              .replace('FILLOPACITY', alpha)
            return {
              'background-image': bgImage,
            }
          }
        },
      ],
      [
        bgMaskHeroRegex,
        ([, name]) => {
          const pattern = patterns[name || '']
          if (pattern) {
            return {
              '-webkit-mask-image': pattern,
            }
          }
        },
      ],
    ],
  }
}
