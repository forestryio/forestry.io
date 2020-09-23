---
title: Static Files
weight: 1
layout: single
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  faqs:
    parent: Glossary
    weight: 3

---
Static files are files that are not processed by your static site generator. Instead, they are just copied over as-is at built time.

## Examples

* **Hugo**: static files live in the `staticDir`, which defaults to `/static`.
* **Gatsby**: static files lives in the [`static` folder](https://www.gatsbyjs.org/docs/static-folder/).
* **NextJS**: static lives in the [`/public` folder](https://nextjs.org/docs/basic-features/static-file-serving).
* **Gridsome**: static directory is `/static`.
* **NuxtJS**: static files live in `/static` folder.
* **VuePress:**: static files live in `.vuepress/public`.
* **Jekyll**: any file without front matter.
* **Eleventy**: anything passed to the [`addPassthroughCopy`](https://www.11ty.dev/docs/copy/) function in your config file.
