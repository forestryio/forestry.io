---
title: 2018/09/24 Changelog
authors:
- team forestry
date: 2018-09-19 18:50:56 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
menu:
  changelog:
    name: 2018/09/24
    parent: Changelog
    weight: 15

---
## Features

* **Publish/Preview Commands:** You can now specify the commands to run when publishing and previewing your site. This is noteworthy for two reasons:
  * Preprocess Scripts (e.g. gulp/webpack)
  * VuePress Support
* **Create Directories:** It is now possible to create directories from inside of Forestry. This can be configured at the section level.

## Bug Fixes

* **Relative Dir Config:** Fixed a bug in Jekyll sites where setting the `source` value in the `_config.yml` would break import if it started with `./`. For example: `source: ./site`
* **Non-Latin Characters:** Changed the way we generate the filename of new documents so that non-latin characters are no longer stripped.
* **Sites Dashboard:** Fixed bug that prevented manually imported sites from being visible in the dashboard.