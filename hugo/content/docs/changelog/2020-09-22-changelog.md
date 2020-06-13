---
authors:
- team forestry
date: 2020-06-12
title: 2020/06/12 Changelog
summary: Hot module reloading support, zero-config instant previews and various fixes.

---
Forestry CMS never felt so fast to use, while instant previews really deserve their naming.

## Enhancements

* **Hot Module Reloading 🚀:** You can now decide if Instant Previews should do a full refresh or if you prefer to [rely on your static site generator Hot Module Reloading capability](https://forestry.io/docs/previews/instant-previews/#hot-module-reloading "How to opt in for HMR Previews in Forestry").   
  For Gatsby, Gridsome, NuxtJS or NextJS sites it will also ensure [the preview stays on the currently edited page](https://www.loom.com/share/aaccc79de8b240d78c4f3739798f1708 "HMR Preview with a Gatsby Site on Forestry").
* **Zero config instant previews ✨:** For static site generators using a default port other than `8080`, you don't need to pass any more options to your preview command: `npm run develop` or `hugo serve` will do, Forestry will do all the network binding for you! This is particularly useful for people importing Gatsby themes from [Stackbit](https://app.stackbit.com/create?cms=forestry "Import a Stackbit theme to Forestry").
* **New starters**: [Parsa](https://github.com/forestryio/hugo-parsa-forestry) (Hugo), [Minimal Mistakes](https://github.com/DirtyF/jekyll-minimal-mistakes-forestry) (Jekyll).
* To save precious resources ♻️ on our servers, Forestry will now archive **personal sites** after 3 months of inactivity. You will be prompted to restore an archived site in a single click after a long period of inactivity. Organization sites remain always active and are not impacted by this change.

### Fixes

* **Duplicate** files: Forestry now names a duplicated document with the new `title` entered.
