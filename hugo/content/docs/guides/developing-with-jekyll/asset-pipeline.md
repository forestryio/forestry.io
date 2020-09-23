---
aliases:
- "/docs/developing-with-jekyll/asset-pipeline/"
date: 2017-07-24 00:00:00 +0000
description: ''
tags: ''
title: Asset Pipeline
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 5
menu:
  guides:
    parent: Developing with Jekyll
    identifier: _jekyll-asset-pipeline
    weight: 20

---
If you’re planning on using any preprocessing on your assets (images, CSS, or JS) you’ll need to be careful how you implement this as it affects how Forestry builds your sites.

## SASS

Jekyll supports `.sass` and `.scss` processing out of the box. It requires special configuration, so please see Jekyll’s docs on asset processing in the resources below.

## CoffeeScript

Jekyll also supports preprocessing CoffeeScript with an officially support gem. It requires special configuration, so please see Jekyll’s docs on asset processing in the resources below.

## Best Practices for Gulp, Grunt, and Other Build Tools

In order to use external build like Gulp, Grunt, or Webpack with Forestry's [previewing][1], you should configure it as follows:

1. Use a NodeJS-based tool installable via NPM and configured in `package.json`.
2. Define the build script(s) as NPM scripts in your `package.json` file.
3. Use [custom build commands](/docs/settings/build-commands/) to call these NPM scripts.

[1]: /docs/editing/previews

## Further Reading
- [Jekyll Assets Reference](https://jekyllrb.com/docs/assets/)
