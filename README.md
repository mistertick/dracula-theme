# Dracula

Dracula theme for Mr. Tick, with light and dark palettes. This addon uses the published SDK and declares only the `theme` capability.

## Use the theme

Install the `.tladdon` file through the Mr. Tick addon manager, then select **Dracula** in the theme settings. The theme follows the application's light or dark mode. Installing the addon does not change the active theme automatically.

## Development

Requirements: Node.js 22 and Yarn 4.9.4.

```bash
yarn install --immutable
yarn build
yarn test:unit
yarn typecheck
yarn lint:fix
yarn validate
```

Edit [globals.css](globals.css) to change the colors. The build embeds the entire stylesheet into JavaScript, so the installed addon does not need filesystem access or private monorepo packages. The [icon](icon.png) is also included in the package.

The minimum SDK version is `0.10.0`. Packaging metadata lives in [manifest.yaml](manifest.yaml).

## Releases

The [workflow](.github/workflows/release.yml) checks types, lint, the build and the bundled stylesheet. On `main`, Changesets opens a version pull request. After that PR is merged, the pipeline:

1. Builds the addon and synchronizes its manifest using the SDK.
2. Generates the `.tladdon`, its SHA-256 checksum and package size.
3. Commits the generated manifest and publishes a GitHub Release.
4. Submits the release-tagged manifest URL to the catalog.

`0.0.0` is the project's bootstrap version. The initial changeset prepares `0.1.0`; the bot calculates the version. Do not edit versions or changelogs manually.

The workflow uses GitHub's built-in `GITHUB_TOKEN`. Under **Settings → Actions → General**, allow GitHub Actions to create pull requests. The catalog uses its own credential to update the central repository; this addon does not need npm or Cloudflare tokens.

For subsequent releases, run `yarn changeset`, describe the change and commit the changeset with the code. Releases follow the same version-PR flow.

## Identity

- Addon ID: `mistertick-dracula`
- Local theme ID: `dracula`
- Distribution: free, through GitHub Releases and the Mr. Tick addon catalog
- [SDK reference](https://mistertick.com/docs)

The colors are inspired by Dracula. This repository is a Mr. Tick extension and is not an official distribution of the Dracula project.
