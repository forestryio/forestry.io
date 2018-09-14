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
    name: Using a Git submodule for your theme
    weight: 3
    parent: Troubleshooting

---
If you have a repository for your Jekyll or Hugo project and you want use a different repository for your theme, you should set up your theme repo as a [Git Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

To add a theme as a Git Submodule, run the following command from the root of your project:

    git submodule add https://github.com/spf13/hyde.git themes/hyde

Be sure to add the correct **URL** to your theme repo and the correct **path** to where you want this repo to live within your project.

![](/uploads/2018/02/submodules-1.png)

Once you create the submodule, you'll notice a `.gitmodules` file in the root of your project. Commit this file as well as the module inside of your theme directory to your project.

If you need to make a change to this theme, the changes should be pushed to the original repository you created the submodule from. You can then update the submodule on your site with the following command:

```
git submodule update --remote
```

This is also how you update a third-party theme that you have installed as a submodule.

{{% tip %}}
Don't forget to set the theme you just installed as your active theme! In Hugo this is your [config.toml](https://gohugo.io/themes/installing-and-using-themes/#config-file) file, and in Jekyll this will be [_config.yml](https://help.github.com/articles/adding-a-jekyll-theme-to-your-github-pages-site/#adding-a-jekyll-theme-in-your-sites-_configyml-file).
{{% /tip %}}