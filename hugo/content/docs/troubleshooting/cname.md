---
title: How do I add a CNAME to my site?
authors: []
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-01-02 15:23:56 +0000
headline: ''
description: ''
textline: ''
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases:
- "/faq/use-a-cname-for-you-hugo-and-github-pages-site/"
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  troubleshooting:
    parent: Troubleshooting
    weight: 3

---
For some hosting providers (such as GitHub pages) you will need to place a `CNAME` file in the root of your site.

You'll need to ensure that the CNAME file is treated as a [static file](/docs/faqs/glossary/static-files), so that it is copied to the root of your site during the build.

{{% tip %}}
Make sure you place your `CNAME` file in your source directory, not your build directory. Otherwise it will be deleted during the next build
{{% /tip %}}

### Examples
- **Jekyll:** any file without [front matter](/docs/editing/front-matter) is treated as a static file, so place your `CNAME` file in the root of your source folder
- **Hugo**: any file inside of the `static/` directory in your source folder is treated as a static file.