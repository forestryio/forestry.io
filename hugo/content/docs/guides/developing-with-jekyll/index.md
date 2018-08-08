---
aliases:
- "/docs/developing-with-jekyll/"
- "/docs/developing-with-jekyll/intro/"
date: 2013-07-24 00:00:00 +0000
description: ''
tags: ''
title: Introduction
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: 1
menu:
  guides:
    parent: Developing with Jekyll
    identifier: _jekyll-intro
    weight: 3

---
Jekyll is one of the oldest static site generators available. Built by [GitHub][1], it has tons of community support and is very stable. Additional features can be added onto Jekyll through the use of plugins. It also uses the templating language [Liquid][2], which feels very familiar to developers and is also used by Shopify and other large-scale applications. 

### Choose Jekyll if you:

* Want a static site generator with great stability and the biggest community.
* Have a small site, like a portfolio or marketing site.
* Are comfortable with PHP, JS, Ruby, or Python, as Jekyll’s templating language will feel very familiar.
* Know building your own theme is not an interest, as Jekyll has a rich theme library

### Don’t choose Jekyll if you:

* Are building a smaller site that needs a lot of enterprise features, as Jekyll doesn’t support these out-of-the-box.
* Have a site with more than 500 pages, as Jekyll can be slow with large page counts.

## Getting Started
To get started developing for Jekyll, you’ll need a basic understanding of HTML and [Liquid][2], Jekyll's templating language. You’ll also likely want to [set up your local development environment][3].

We also recommend that you set up a Git repository to manage development of your site. Doing so offers you free backups, enables [content sync][5] with the CMS, and enables you to use [continuous deployment][6].

## Further Reading
- [Jekyll Documentation](http://jekyllrb.com/docs)
- [Jekyll Quickstart Guide](http://jekyllrb.com/docs/quickstart/)

[1]: https://github.com
[2]: https://shopify.github.io/liquid/
[3]: /docs/guides/developing-with-jekyll/local-development
[5]: /docs/git-sync/
[6]: /docs/settings/#deployment