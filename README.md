# nextjs-vanilla-extract-example

This is an example [Next.js](https://nextjs.org) project using [🧁 vanilla-extract.](https://vanilla-extract.style) via the official [Next.js plugin.](https://vanilla-extract.style/documentation/setup/#nextjs)

---

**Setup:** `yarn`

**Local development:** `yarn dev`

**Production preview:** `yarn build && yarn start`

---

Notable changes I made to the basic [Next.js example](https://nextjs.org/learn):
 - Switched to Yarn.
 - Switched to TypeScript.
 - Installed deps with `yarn add --dev @vanilla-extract/next-plugin @vanilla-extract/babel-plugin @vanilla-extract/css`.
 - Added a `next.config.js` using `@vanilla-extract/next-plugin`.
 - Added a `.babelrc` using `@vanilla-extract/babel-plugin`.
 - Introduced a `components` folder and added a `HelloWorld` component with a matching `HelloWorld.css.ts` file, then rendered it on the index page.
 - Added a `browserslist` field to `package.json`.

---

This repo was originally based on work found in the vanilla-extract GitHub discussion ["Usage with Nextjs"](https://github.com/seek-oss/vanilla-extract/discussions/89), which then turned into the official Next.js plugin. Thanks to the community for helping out on this 🙏