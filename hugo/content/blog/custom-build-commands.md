---
title: Custom Build Commands!
description: "Forestry now supports custom build commands! When you add custom build commands to your project, Forestry will run those commands when creating a preview or preparing your site for deployment.

If your site uses a build process to compile your frontend assets (such as Gulp or Webpack,) Forestry can now run those scripts when building your site for preview or deployment."
date: 2018-09-21 09:00:00 +0000
authors:
- DJ Walker
publishdate: 2018-09-21 09:00:00 +0000
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
draft: true

---
Forestry now supports **custom build commands**!

When you add custom build commands to your project, Forestry will run those commands when creating a preview or preparing your site for deployment. Custom build commands are added in your `.forestry/settings.yml` file. To learn how to set up custom build commands for your site, check out our [build commands documentation](/docs/settings/build-commands/).

**Sites with Frontend Asset Pipelines**

If your site uses a build process to compile your frontend assets (such as Gulp or Webpack,) you previously had to commit compiled assets to your repo in order for your site to preview correctly, and had to stick with an external CI tool for deploying your site. **That is no longer necessary,** as Forestry can now run those scripts when building your site for preview or deployment.

**Preview & Deploy for VuePress** 

When we first introduced VuePress support, previewing and deployment were not possible for VuePress sites. Now, adding custom build commands for your VuePress site will unlock preview and deployment capabilities in Forestry!

**Flexibility for More Workflows**

We want our users to get the most out of Forestry. With **custom build commands**, we aim to support your workflow so you can use everything we have to offer.


*To review all changes, please visit our [changelog](/docs/changelog/), or visit our [sunset notices](/docs/sunset/) to see if any features are going to be replaced or removed.*