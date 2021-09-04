# nextjs-vanilla-extract-example

This is an example [Next.js](https://nextjs.org) project that's been <strike>hacked</strike> modified to use [🧁 vanilla-extract.](https://vanilla-extract.style)

---

**Setup:** `yarn`

**Local development:** `yarn dev`

**Production preview:** `yarn build && yarn start`

---

Notable changes I made to the basic [Next.js example](https://nextjs.org/learn):
 - Switched to Yarn.
 - Switched to TypeScript.
 - Installed deps with `yarn add --dev @vanilla-extract/webpack-plugin @vanilla-extract/babel-plugin @vanilla-extract/css`.
 - Added a `next.config.js` that modifies the webpack config, referencing `@vanilla-extract/webpack-plugin`.
 - Added a `.babelrc` file, referencing `@vanilla-extract/babel-plugin`.
 - Introduced a `components` folder and added a `HelloWorld` component with a matching `HelloWorld.css.ts` file, then rendered it on the index page.
 - Added a `browserslist` field to `package.json`.

---

This repo was based on work found in the vanilla-extract GitHub discussion ["Usage with Nextjs"](https://github.com/seek-oss/vanilla-extract/discussions/89). Thanks to the community for helping out on this 🙏