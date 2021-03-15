---
aliases:
- "/docs/faq/what-versions-of-jekyll-do-you-support/"
- "/docs/faq/what-versions-of-jekyll-and-plugins-does-forestry-support/"
title: What versions of Jekyll do you support?
weight: 6
layout: single
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  faqs:
    parent: FAQs
    weight: 7

---

Forestry uses whatever version of Jekyll is specified in your [`Gemfile`](https://jekyllrb.com/docs/ruby-101/).

If you don't have a `Gemfile`, run `bundle init` on your machine, then `bundle add jekyll` to use latest Jekyll.

[GiHub Pages currently runs Jekyll 3.9.0](https://pages.github.com/versions/). 

You can [use Jekyll 4.x on GitHub Pages with GitHub Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/).
