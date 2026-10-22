import fs from 'node:fs'

import type { AddonContext, AddonTheme } from '@mr-tick/sdk'
import { describe, expect, it, vi } from 'vitest'

import DraculaAddon from '../dist/index.js'

describe('Dracula packaged theme', () => {
  it('registers the built theme with the complete original stylesheet', () => {
    const register = vi.fn<(theme: AddonTheme) => void>()
    const context = {
      contributions: { themes: { register } },
    } as unknown as AddonContext
    const originalCss = fs.readFileSync(
      new URL('../globals.css', import.meta.url),
      'utf8',
    )

    new DraculaAddon().activate(context)

    expect(register).toHaveBeenCalledExactlyOnceWith({
      id: 'dracula',
      name: 'Dracula',
      description: 'Light and dark palettes inspired by Dracula.',
      css: originalCss,
    })
  })
})
