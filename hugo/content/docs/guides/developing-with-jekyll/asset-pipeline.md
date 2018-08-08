---
aliases:
- "/docs/developing-with-jekyll/asset-pipeline/"
date: 2013-07-24 00:00:00 +0000
description: ''
tags: ''
title: Asset Pipeline
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: 5
menu:
  guides:
    parent: Developing with Jekyll
    identifier: _jekyll-asset-pipeline
    weight: 14

---
If you’re planning on using any preprocessing on your assets (images, CSS, or JS) you’ll need to be careful how you implement this as it effects how Forestry builds your sites. 

## SASS

Jekyll supports `.sass` and `.scss` processing out of the box. It requires special configuration, so please see Jekyll’s docs on asset processing in the resources below.

## CoffeeScript

Jekyll also supports preprocessing CoffeeScript with an officially support gem. It requires special configuration, so please see Jekyll’s docs on asset processing in the resources below.

## Best Practises for Gulp, Grunt, and Other Build Tools

Forestry does not currently support external build tools in the build process.

When publishing, previewing, or saving drafts, Forestry will *only* run:
`jekyll build`

If you use Gulp, Grunt or another build tool to process your assets, you *must* commit your final working assets to your repository, otherwise [previewing](/docs/editing/previews) and [deployment](/docs/hosting) will **not** work.

## Further Reading
- [Jekyll Assets Reference](http://jekyllrb.com/docs/assets/)