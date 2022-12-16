import { defineConfig, presetMini } from 'unocss'

import { presetHeroPatterns } from '../src'

export default defineConfig({
  presets: [
    presetMini(),
    presetHeroPatterns(),
  ],
})
