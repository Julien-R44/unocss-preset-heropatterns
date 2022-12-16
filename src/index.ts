import patterns from './patterns'
import { colorResolver } from "@unocss/preset-mini/utils"
import type { Preset } from 'unocss'

const availablePatterns = Object.keys(patterns)
const availablePatternsGroup = `(${availablePatterns.join("|")})`
const bgHeroRegex = new RegExp(`^bg-hero-${availablePatternsGroup}-(.*)$`)
const bgMaskHeroRegex = new RegExp(`^mask-bg-hero-${availablePatternsGroup}$`)

export function presetHeroPatterns(): Preset {
  return {
    name: 'unocss-preset-hero-patterns',
    rules: [
      [
        bgHeroRegex,
        (match, context) => {
          const solveColor = (body: string) => colorResolver('prop', 'v')(['', body], context)
          const [, name, color] = match
          const bgImage = patterns[name || '']
          const cssColor = solveColor(color || '') as { 'prop': string, '--un-v-opacity': string }
          if (!bgImage || !cssColor) {
            return
          }
          return {
            'background-image': bgImage.replace(
              "FILLCOLOR", 
              cssColor['prop'].replace("var(--un-v-opacity)", "1")
            ).replace(
              "FILLOPACITY",
              cssColor["--un-v-opacity"]
            )
          }
        }
      ],
      [
        bgMaskHeroRegex,
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
