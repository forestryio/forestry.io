---
title: 2018/4/4 Changelog
date: 2018-04-04 12:00:00 +0000
authors:
- Forestry Team
publishdate: 2018-04-04 04:00:00 +0000
layout: single
categories:
- CMS
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
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
    parent: Changelog
    weight: 27

---
### Hugo Support for v0.38.1

We updated our support to Hugo v0.38.1 and below. To give you a quick overview to what has changes have been made to Hugo since our last update, here is a list of the most important features, bug fixes and enhancements:

- Page Bundles and Image Processing ([see v0.32](https://gohugo.io/news/0.32-relnotes/))
- Full custom layout and type support + Metadata for Images ([see v0.33](https://gohugo.io/news/0.33-relnotes/))
- Standard wildcard syntax for API used to find images and other resources in your page bundles ([see v0.34](https://gohugo.io/news/0.34-relnotes/))
- Headless Bundles ([see v0.35](https://gohugo.io/news/0.35-relnotes/))
- Smart Image Cropping ([see v0.36](https://gohugo.io/news/0.36-relnotes/))
- Preserve PNG Colour Palette ([see v0.37](https://gohugo.io/news/0.37-relnotes/))
- Fetching Date and Slug from the Content Filename ([see v0.38](https://gohugo.io/news/0.38-relnotes/))
[see releases](https://gohugo.io/news/)

### Bug Fixes

* **Documentation:** Links to documentation were updated
* **Github Authentication:** Increased timeout length and added a more descriptive message on timeout
* **Import:** Fixed a bug that prevents a complete list of repositories being listed for *Bitbucket* users
* **Import:** Fixed a bug that prevents import if the config filename was provided in the import path
* **Media:** White images can now be detected in the *Media Library*
* **Notifications:** Team members of an *Organization* now receive notifications without having to refresh the page
* **Redirect:** Removing a site from an *Organization* does not redirect to *My Sites* anymore
* **UI:** Fixed cropping of icons in CMS sidebar
* **UI:** Added a more descriptive explanation to the repo step in the starter template flow 
* **User Roles:** *Manage Guests* is now unavailable to Guests of a particular site
