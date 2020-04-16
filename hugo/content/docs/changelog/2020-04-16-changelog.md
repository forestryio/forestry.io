---
authors:
- team forestry
date: 2020-04-15
title: 2020/04/16 Changelog
summary: ''
draft: true

---
## Features

* [Markdown in front matter template's field description](https://portal.productboard.com/forestry/1-forestry-io-roadmap/c/87-allow-links-in-field-description):  add links to your field descriptions 🔗 ([watch demo](https://www.loom.com/share/776b2233d51e4bba91741885c0143dbb))

## Enhancements

* Upgrade our Instant Previews images
  * `forestryio/ruby:2.6` now runs Ruby 2.6.6 💎
  * Hugo + Node 12

## Fixes

* VuePress should now write **YAML** by default 😅
* Add host key verification to all Instant Preview images 🔑: people using Stackbit Themes like [Ghost Casper Theme for VuePress](https://github.com/alexander-heimbuch/vuepress-theme-casper) can now run Instant Previews with the `forestryio/node:10` or `forestryio/node:12` images.
* Properly erase users and sites. This allows former deleted accounts to recreate an account if needed.
* **Limit media search to filenames**: some searches were collapsing with Cloudinary keywords.