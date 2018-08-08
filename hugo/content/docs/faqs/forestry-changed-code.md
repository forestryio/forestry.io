---
aliases:
- "/docs/faq/what-changes-will-forestry-make-to-my-repository/"
title: Why did Forestry edit my files?
weight: 1
layout: single
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  faqs:
    parent: FAQs
    weight: 4

---
As devs, we hate when people mess with our code. So we try to do this as little as possible but sometimes it is unavoidable.

## Front Matter
Forestry will remove comments and other formatting from front matter, and will also reorder your fields alphabetically. This is unfortunately unavoidable, as comments and order are not respected in the `YAML` or `TOML` specifications.

## Newlines
New lines will be normalized so that all line endings are the same. This can make it look like your content was changed when all you did was edit your front matter.

## Menus
When using Forestry's [Menus feature](/docs/editing/menus/), any internal page or post that is used in the menu will be updated with the front matter data related to the menu.

Any external link that is added to menus will be added to your Hugo config file, or Jekyll `menus.yml` data file.

## Config Files
If you are using Hugo, your config file will be changed if you update the Site Params. Site Params are the params that are stored in your config file. It will also be updated when you edit menus.