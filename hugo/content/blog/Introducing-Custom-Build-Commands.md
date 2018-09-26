---
title: Introducing Custom Build Commands
description: |-
  We're excited to announce Custom Build Commands! You can now decide what build command should be run for your project.

  Until now Forestry chose the build command that needed to be run for you, which worked fine for most cases. However, this meant that projects that needed a custom build process were unable to use Forestry's deployment tools and (in some cases) previews.
date: 2018-09-21 05:11:49 +0000
authors:
- DJ Walker
publishdate: 2018-09-21 03:00:00 +0000
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
images: []
menu: []

---
We're excited to announce Custom Build Commands! You can now decide what build command should be run for your project.

Until now Forestry chose the build command that needed to be run for you, which worked fine for most cases. However, this meant that projects that needed a custom build process were unable to use Forestry's deployment tools and (in some cases) previews.

Picking your own commands enables you to really choose your own workflow and give you the flexibility you need.

***

**Custom Build Commands**

When you add custom build commands to your project, Forestry will run those commands when creating a preview or preparing your site for deployment. Learn [how to set up build commands](/docs/settings/build-commands/).

    build:
      preview_command: hugo -D -F -E
      publish_command: hugo
      output_directory: public
      ...

***

**Sites with Frontend Asset Pipelines**

You no longer need to compile your frontend assets (with tools such as Gulp or Webpack). With custom build commands, Forestry compiles your assets for your previews and deployments. Effectively, we can now replace you external CI tools. Simply add your custom build commands to your `settings.yml`. Go to the [docs](/docs/settings/build-commands/).

***

**Preview & Deploy for VuePress**

When we first introduced VuePress support, previewing and deployment were not possible for VuePress sites. Now, adding custom build commands for your VuePress site will unlock preview and deployment capabilities in Forestry! 🌲🎉

![](/uploads/2018/09/vuepress-add-preview-1.gif)

***

**Flexibility for More Workflows**

We want our users to get the most out of Forestry. With **custom build commands**, we aim to support your workflow so you can use everything we have to offer.

_To review all changes, please visit our_ [_changelog_](/docs/changelog/)_, or visit our_ [_sunset notices_](/docs/sunset/) _to see if any features are going to be replaced or removed._