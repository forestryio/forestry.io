---
title: 2018/02/02 Changelog
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018/02/02 17:02:01 +0000
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
aliases: []
menu:
  changelog:
    name: 2018/02/02
    parent: Changelog
    weight: 32

---
### Bug Fixes

* **Front Matter Groups:** Fixed a regression which prevented front matter groups from rendering inside data files.
* **Import from Gitlab:** Fixed an issue that prevented importing from Gitlab if a legacy ssh key existed.
* **Import site from subdirectory (Gitlab):** Fixed issue preventing the import of sites in subdirectories from Gitlab repositories.

### Security Update

* **Mixpanel Patch:**  A security vulnerability was discovered in the Mixpanel javascript libraray. They released a patch to handle this vulnerability and we upgraded immediately. See this [Reddit thread]() and this [Github issue](https://github.com/mixpanel/mixpanel-js/issues/164 "SECURITY CONCERN mixpanel autotracking password field") for more information.
