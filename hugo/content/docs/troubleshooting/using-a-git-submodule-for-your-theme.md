---
title: Using a Git Submodule for Your Theme
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-02-01 10:37:36 +0000
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
  troubleshooting:
    name: Using a Git submodule for you theme
    weight: 1
    parent: Troubleshooting

---
If you have a repository for your Jekyll or Hugo project and you want use a different repository for your theme, you should set up your theme repo as a [Git Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

To add a theme as a Git Submodule, run the following command from the root of your project:

    git submodule add https://github.com/spf13/hyde.git themes/hyde

Be sure to add the correct **URL** to your theme repo and the correct **path** to where you want this repo to live within your project.

![](/uploads/2018/02/submodules-1.png)

Once you create the submodule, you'll need to add and commit this from your parent repository.

You should also notice a `.gitsubmodules` file in your parent repository.

Going forward, if you make a change to your theme repository. You'll need to commit the change from your theme (child repository) and commit it from your parent repository too.