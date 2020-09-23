---
title: 2018/04/09 Changelog
date: 2018-04-19 12:00:00 +0000
authors:
- Forestry Team
publishdate: 2018-04-09 04:00:00 +0000
layout: single
categories:
- CMS
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
aliases: []
headline: ''
description: ''
textline: ''
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
weight: ''
menu:
  changelog:
    name: 2018/04/09
    parent: Changelog
    weight: 30

---
### Hugo Support for v0.38.1

We updated our support to Hugo v0.38.1 and below. [See Hugo News](https://gohugo.io/news/)

### Bug Fixes

* **Documentation:** Links to documentation were updated
* **Github Authentication:** Increased timeout length and added a more descriptive message on timeout
* **Import:** Fixed a bug that prevents a complete list of repositories being listed for _Bitbucket_ users
* **Import:** Fixed a bug that prevents import if the config filename was provided in the import path
* **Media:** White images can now be detected in the _Media Library_
* **Notifications:** Team members of an _Organization_ now receive notifications without having to refresh the page
* **Redirect:** Removing a site from an _Organization_ does not redirect to _My Sites_ anymore
* **UI:** Fixed cropping of icons in CMS sidebar
* **UI:** Added a more descriptive explanation to the repo step in the starter template flow
* **User Roles:** _Manage Guests_ is now unavailable to Guests of a particular site