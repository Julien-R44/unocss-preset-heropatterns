import { parseColor } from '@unocss/preset-mini/utils'
import patterns from './patterns'

import type { Preset } from 'unocss'

const availablePatterns = Object.keys(patterns)
const availablePatternsGroup = `(${availablePatterns.sort().reverse().join('|')})`
const bgHeroRegex = new RegExp(`^bg-hero-${availablePatternsGroup}-(.*)$`)
const bgMaskHeroRegex = new RegExp(`^mask-bg-hero-${availablePatternsGroup}$`)

function getBgImage(pattern: string, rgb = '0,0,0', alpha = '1') {
  return pattern.replace('FILLCOLOR', `rgb(${rgb})`).replace('FILLOPACITY', alpha)
}

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
            return {
              'background-image': getBgImage(
                pattern,
                parsed.cssColor?.components.join(','),
                parsed.alpha?.toString()
              ),
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
              '-webkit-mask-image': getBgImage(pattern),
            }
          }
        },
      ],
    ],
  }
}
