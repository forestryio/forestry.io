---
aliases:
- "/docs/faq/what-versions-of-hugo-do-you-support/"
title: What versions of Hugo do you support?
weight: 5
layout: single
publishdate: 2017-12-31T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: '2018-08-20T04:00:00.000+00:00'
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  faqs:
    parent: FAQs
    weight: 5

---
Forestry supports all latest patched stable releases of Hugo from 0.17 to [latest release](https://github.com/gohugoio/hugo/releases).
If your project requires a version that is not available in the version dropdown, you can always enforce `HUGO_VERSION` to whatever version you need in your site preview settings.
## Asset Pipeline

Forestry supports all [Hugo's pipes](https://gohugo.io/hugo-pipes/) including [Sass compilation](https://gohugo.io/hugo-pipes/scss-sass/), [postCSS](https://gohugo.io/hugo-pipes/postcss/), [minification](https://gohugo.io/hugo-pipes/minification/), [bundling](https://gohugo.io/hugo-pipes/bundling/) and [fingerprinting](https://gohugo.io/hugo-pipes/fingerprint/).

If your Hugo site relies on postCSS, pick up the Hugo + Node image from the preview settings.