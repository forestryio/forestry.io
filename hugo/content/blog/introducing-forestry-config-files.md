---
title: Introducing Forestry Config Files
date: 2017-08-30 16:09:44 +0000
Categories: []
author:
- bio: Community support at <a href="https://forestry.io">Forestry</a>
  img: "/blog/assets/images/AAEAAQAAAAAAAAaSAAAAJGJjNjM0NjAzLTVmZjMtNGNlZC1iZmNhLThhNGZmMWE4ODEwNQ-1-1.jpg"
  name: Chris Macrae
  twitter: ''
banner: "/blog/assets/images/introducing-config-files.jpg"
description: ''
excerpt: "Configure Settings and Front Matter Templates from your repo \U0001F389"
show_author: true
show_comments: true
show_signup: true
suggested:
- link: ''
  title: ''
- link: ''
  title: ''
- link: ''
  title: ''
tags: []
twitter_card: ''
hidden: default value
link: ''

---
## Introducing Forestry Config Files

Last month [we released a big update](https://forestry.io/blog/post/big-improvements-to-front-matter-templates/) to Front Matter Templates, which provided an unprecedented level of control over the user interface content editors use to edit their Hugo and Jekyll sites with.

Today we’re introducing a new feature to equally empower developers: **Forestry Config Files.**

Config files allow developers to create and manage the settings and Front Matter Templates of a site directly in the Git Repo.

Config Files will be available to ***all users*** starting immediately!

## How Config Files Work

<span style="font-size: 1rem;">It works as a bi-directional sync between Forestry’s CMS, and your projects Git repository. Changes you push to Git are imported and updated in Forestry, and changes you make in Forestry are committed back to Git.</span>

<img src="/blog/assets/images/2017-08-31%2012_31_44.gif" draggable="true" data-bukket-ext-bukket-draggable="true">

This empowers developers to bundle themes, starter sites, and production-ready projects with ready-to-use site configuration and user interface customization.

It also makes sites DRY by allowing developers to copy common configurations between multiple projects easily.

To get started with Config Files today, simply make a change in your CMS to have the `.forestry` configuration directory automatically added to your repo.

Feel free to read the [Config File docs](https://forestry.io/docs/site-configuration/config-files) to learn more, and become an all-star Forestry developer!

Let us know what you think in the comments below, or on twitter [@forestryio](https://twitter.com/forestryio)!