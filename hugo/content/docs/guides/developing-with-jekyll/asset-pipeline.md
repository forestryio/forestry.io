---
date: 2013-07-24 00:00:00 +0000
description: ''
related:
- title: Jekyll Assets Reference
  url: http://jekyllrb.com/docs/assets/
- title: Gulp.js
  url: http://gulpjs.com/
- title: Grunt.js
  url: https://gruntjs.com/
tags: ''
title: Asset Pipeline
menu:
  guides:
    parent: jekyll
weight: 5

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

If you use Gulp, Grunt or another build tool to process your assets, you *must* commit your final working assets to your repository, otherwise [previewing](/docs/deployment-and-management/previewing) and [deployment](/docs/deployment-and-management/setting-up-deployment) will **not** work.
