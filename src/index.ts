import type { AddonContext, IAddon } from '@mr-tick/sdk'

import css from '../globals.css'

export default class DraculaAddon implements IAddon {
  activate(context: AddonContext): void {
    context.contributions.themes.register({
      id: 'dracula',
      name: 'Dracula',
      description: 'Light and dark palettes inspired by Dracula.',
      css,
    })
  }

  deactivate(): void {}
}
