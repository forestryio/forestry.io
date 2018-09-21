---
title: Introducing Custom Build Commands and Creating Directories
description: ''
date: 2018-09-20 18:11:49 -1100
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
You can now decide what command should be run to build your project. Forestry now supports custom Build Commands.

Until now Forestry chose the command that needed to be run for your project, which worked fine for many projects. However, this meant that projects that needed to run their own build commands were unable to use Forestry's deployment tools and in some cases unable to use Forestry's previews. We'll now run _your_ commands for deployments as well as previews.

Did you ever get frustrated that you couldn't create directories inside Forestry? So did we. Now, users can create new directories in Forestry and keep their content organized.

---  
  
Custom Build Commands

When you add custom build commands to your project, Forestry will run those commands when creating a preview or preparing your site for deployment. Custom build commands are added in your `.forestry/settings.yml` file. To set up custom build commands for your site, check out our [build commands documentation](/docs/settings/build-commands/).

**Sites with Frontend Asset Pipelines**

If your site uses a build process to compile your frontend assets (such as Gulp or Webpack) then you previously had to commit compiled assets to your repo in order for your site to preview correctly, and had to stick with an external CI tool for deploying your site. **That is no longer necessary,** as Forestry can now run those scripts when building your site for preview or deployment.

**Preview & Deploy for VuePress**

When we first introduced VuePress support, previewing and deployment were not possible for VuePress sites. Now, adding custom build commands for your VuePress site will unlock preview and deployment capabilities in Forestry!

**Flexibility for More Workflows**

We want our users to get the most out of Forestry. With **custom build commands**, we aim to support your workflow so you can use everything we have to offer.

_To review all changes, please visit our_ [_changelog_](/docs/changelog/)_, or visit our_ [_sunset notices_](/docs/sunset/) _to see if any features are going to be replaced or removed._