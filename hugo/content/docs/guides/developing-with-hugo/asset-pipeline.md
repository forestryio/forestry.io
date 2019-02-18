---
aliases:
- "/docs/developing-with-hugo/asset-pipeline/"
date: 2017-07-24 00:00:00 +0000
description: ''
tags: ''
title: Asset Pipeline
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: 5
menu:
  guides:
    parent: Developing with Hugo
    weight: 22

---
Hugo supports pre-procesing CSS files via SCSS, and post-processing via PostCSS.

## Hugo's Built-in Asset Pipeline

Using Hugo's asset pipeline, you can use Sass, SCSS, and PostCSS. You can also bundle and minify assets.

[Hugo docs: Pipes](https://gohugo.io/hugo-pipes/)


## Best Practises for Gulp, Grunt, and Other Build Tools

In order to use external build like Gulp, Grunt, or Webpack with Forestry's [previewing][1] and [deployment][2], you should configure them as follows:

1. Use a NodeJS-based tool installable via NPM and configured in `package.json`.
2. Define the build script(s) as NPM scripts in your `package.json` file.
3. Use [custom build commands](/docs/settings/build-commands/) to call these NPM scripts.

[1]: /docs/editing/previews
[2]: /docs/hosting/