---
authors:
- team forestry
date: 2020-04-16
title: 2020/04/16 Changelog
summary: "Markdown in template's field description, Instant Previews upgrade, and
  a lot of fixes \U0001F389 "

---
## Features

* [Markdown in front matter template's field description](https://portal.productboard.com/forestry/1-forestry-io-roadmap/c/87-allow-links-in-field-description):  add links to your field descriptions 🔗 ([watch demo](https://www.loom.com/share/776b2233d51e4bba91741885c0143dbb))

## Enhancements

* **Upgrade our Instant Previews** images, new defaults are:
  * [Node 12](https://hub.docker.com/r/forestryio/node "Our node image on Docker Hub")
  * [Hugo + Node 12](https://hub.docker.com/r/forestryio/hugo "Our Hugo Image on Docker Hub")
  * Ruby 2.6 + Node 12,
  * [Ruby 2.6.6 and Ruby 2.7.1](https://hub.docker.com/r/forestryio/ruby "Our Ruby image on Docker Hub")
  * Previous Node 10 version is still available, a **manual opt-in is required** if you want to use those latest versions.
* Set default **Hugo** version up to **0.69.0** on new site import. You can always set `HUGO_VERSION` to whatever version you need in your site previews settings.

## Fixes

* Correctly write number fields as numbers 🔢 (Thanks to [Nicholas Grazilla](https://github.com/nicfits) for the complete test suite)
* Correctly write default date to now in group fields 📅
* VuePress should now write **YAML** by default 😅
* Add host key verification to all Instant Preview images 🔑: people using **Stackbit Themes** like [Ghost Casper Theme for VuePress](https://github.com/alexander-heimbuch/vuepress-theme-casper) can now run Instant Previews with the `forestryio/node:10` or `forestryio/node:12` images. 👀
* Properly erase users and sites. This allows former deleted accounts to recreate an account if needed.
* **Limit media search to filenames**: some searches were collapsing with Cloudinary keywords. 🔍
* Fix an offset pagination problem
