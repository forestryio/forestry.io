---
title: Data Files, Directories, and Duplicating Pages
description: ''
date: 2018-10-23 03:00:00 -1100
authors:
- DJ Walker
publishdate: 2018-10-23 03:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
categories:
- CMS
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
<div style="text-align: center;">
<img src="/uploads/2018/10/homer_lumberjack.gif" />
</div>

The lumberjacks have been busy lately! Here's what we've been up to:

## Agnostic Data File Handling

We have removed support for our old way of handling data files. Previously, we used some heuristics to automatically discover data files in your Jekyll and Hugo projects. Data files must now be manually configured by [creating sections for them](https://forestry.io/docs/settings/content-sections/#configuring-data-file-sections).

## VuePress Now Out of Beta

![](/uploads/2018/10/vuepress-removebeta.gif)

Abstracting data file discovery in our content manager has paved the way for more easily supporting other static site generators. We have now removed the **beta** flag from our VuePress importer, as we believe that our editor can now **fully support VuePress content management**.

## More Content Manipulation tools

We've added some quality-of-life improvements for content creation.

![](/uploads/2018/10/create-directory-ui.png)

Forestry users can now **create folders** in any content section with `create: all` permissions.

![](/uploads/2018/10/duplicate-document-ui.png)

In addition, you can **duplicate pages** by clicking the `...` next to the item in the pages listing and selecting **Duplicate**.

## Sidebar Editor Improvements

We've made configuring content sections in your sidebar a little easier.

![](/uploads/2018/10/sidebar-config-ui.png)

The list of your sidebar sections contains more contextual information now, to help you see how your sidebar is configured at a glance.

![](/uploads/2018/10/section-config-ui-1.png)

We've also broken up sidebar management into a two-step process and reorganized the configuration screen to make things a bit easier to understand.

## Performance Improvements & Bugfixes

We've trimmed some fat to improve frontend performance, and squashed a few bugs along the way.

To stay on top of the improvements we make to Forestry, be sure to check our [changelog](https://forestry.io/docs/changelog/) from time to time!