---
aliases:
- "/docs/developing-with-hugo/asset-pipeline/"
date: 2017-07-24 00:00:00 +0000
title: Asset Pipeline
description: Using Hugo pipes and image processing with Forestry CMS
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 5
menu:
  guides:
    parent: Developing with Hugo
    weight: 22

---
Hugo supports pre-processing CSS files via SCSS, and post-processing via PostCSS.

## Hugo's Built-in Asset Pipeline

Using Hugo's asset pipeline, you can use Sass, SCSS, and PostCSS. You can also bundle and minify assets.

- [See Hugo docs about Pipes](https://gohugo.io/hugo-pipes/introduction/)
- [How to use Hugo image processing in Forestry](/blog/how-to-use-hugo-s-image-processing-with-forestry/)

## Best Practices for Gulp, Grunt, and Other Build Tools

In order to use external build like Gulp, Grunt, or Webpack with Forestry's [instant preview][1], you should configure your project as follows:
 
1. Use a Node.js-based tool installable via npm and configured in `package.json`.
2. Use our Hugo + Node.js environment.
3. Define npm scripts in your `package.json` file to build and serve your site.
4. Use your npm serve script with your [custom build command](/docs/settings/build-commands/).

[1]: /docs/editing/previews
