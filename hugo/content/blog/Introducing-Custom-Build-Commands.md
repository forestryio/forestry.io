---
title: Introducing Custom Preview Commands
description: |-
  We're excited to announce Custom Preview Commands! You can now decide what build command should be run for your project.

  Until now Forestry chose the build command that needed to be run for you, which worked fine for most cases. However, this meant that projects that needed a custom build process were unable to use Forestry's previews.
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
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu: []

---
We're excited to announce Custom Preview Commands! You can now decide what command should be run for your project.

Until now Forestry chose the build command that needed to be run for you, which worked fine for most cases. However, this meant that projects that needed a custom build process were unable to use Forestry's previews.

Picking your own commands enables you to really choose your own workflow and give you the flexibility you need.

***

**Custom Preview Commands**

When you add custom preview commands to your project, Forestry will run those commands when creating a preview. Learn [how to set up preview commands](/docs/previews/build-commands/).

build:
  preview_env:
  - HUGO_ENV=staging
  - HUGO_VERSION=0.82.1
  preview_output_directory: public
  preview_docker_image: forestryio/hugo:latest
  mount_path: "/srv"
  working_dir: "/srv"
  instant_preview_command: hugo server -D -E -F --port 8080 --bind 0.0.0.0 --renderToDisk
    -d public

***

**Sites with Frontend Asset Pipelines**

You no longer need to compile your frontend assets (with tools such as Gulp or Webpack). With custom build commands, Forestry compiles your assets for your previews. Effectively, we can now replace you external CI tools. Simply add your custom commands to your `settings.yml`. Go to the [docs](/docs/previews/build-commands/).

***

**Preview for VuePress**

When we first introduced VuePress support, previewing was not possible for VuePress sites. Now, adding custom build commands for your VuePress site will unlock preview capabilities in Forestry! 🌲🎉

![](/uploads/2018/09/vuepress-add-preview-1.gif)

***

**Flexibility for More Workflows**

We want our users to get the most out of Forestry. With **custom preview commands**, we aim to support your workflow so you can use everything we have to offer.

_To review all changes, please visit our_ [_changelog_](/docs/changelog/) _to see if any features are going to be replaced or removed._
