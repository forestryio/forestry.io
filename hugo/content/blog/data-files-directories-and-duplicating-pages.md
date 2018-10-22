---
title: Data Files, Directories, and Duplicating Pages
description: ''
date: 2018-10-19 07:36:31 -1100
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
![](/uploads/2018/10/homer_lumberjack.gif)

The lumberjacks have been busy lately! Here's what we've been up to:

## Agnostic Data File Handling

We have removed support for our old way of handling data files. Previously, we used some heuristics to automatically discover data files in your Jekyll and Hugo projects. Data files must now be manually configured by [creating sections for them](https://forestry.io/docs/settings/content-sections/#configuring-data-file-sections).

## VuePress Now Out of Beta

{{% screencast "vuepress-removebeta" %}}

Abstracting data file discovery in our content manager has paved the way for more easily supporting other static site generators. We have now removed the **beta** flag from our VuePress importer, as we believe that our editor can now **fully support VuePress content management**.

## More Content Manipulation tools

We've added some small quality-of-life improvements for content creation. Forestry users can now **create folders** in any content section with `create: all` permissions. In addition, you can **duplicate pages** by clicking the `...` next to the item in the pages listing and selecting **Duplicate**.

## More Goodies

* Sidebar items show more info
* Performance improvements
* Bugfixes