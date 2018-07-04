---
title: Customize Your Sidebar and Limit Templates to Sections
description: ''
date: 2018-07-03 04:17:18 -1100
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
Another week full of new things! While we were launching our Blocks 🔲🔲🔲 theme [uBuild](https://forestry.io/blog/ubuild-a-new-theme-for-static-sites-using-blocks/) for Jekyll and Hugo, our developer team kept working on a new product feature.

Making the sidebar configurable was really high up on your wish list and this is the week we decided to make it happen. Some of you also wanted to limit access to Front Matter Templates for some content sections (e.g. the Front Matter Templates for posts should in certain cases only be available in the Blog content section). You can do that now, too.

Let’s look at a few examples and feel free to open up your code editor and follow along.

All of your sidebar configurations are organized in your `settings.yml` under `sections`/`collections` depending on whether you use Hugo or Jekyll. So let's go ahead and open `settings.yml`

***

## Hide Sections 🙈

Some sections of a site are not important for content editing purposes, so they shouldn't add clutter to your content manager!

You can now decide which content types are visible by using our `hidden` tag. Also, all your content types will appear in the exact order you specify them under `sections`/`collections`.

![](/uploads/2018/07/remove-content-type.gif)

Jekyll

    collections:
    - path: _posts
      hidden: true

Hugo

    sections:
    - path: content/posts
      hidden: true

***

## Switch Labels 🏷️

Sometimes your directory names might not be ideal outside a development environment. That’s why you can now choose to rename the labels of your content types.

![](/uploads/2018/07/switch-label.gif)

Jekyll

    collections:
    - path: _posts
      label: Blog

Hugo

    sections:
    - path: content/posts
      label: Blog

***

## Assign Front Matter Templates to Sections  👈👆👉

Until now every time you created new content you would have to choose from a long list of Front Matter Templates. That wasn't ideal and bogged content editors down.

Now you can assign one or more Front Matter Templates for a specific content type and only expose them for that type of content. You can even provide them in an order you specify.

![](/uploads/2018/07/create-posts.gif)

Jekyll

    collections:
    - path: _posts
      templates:
      - post
      - article

Hugo

    sections:
    - path: content/posts
      templates:
      - post
      - article

Read more on these updates in our [docs](https://forestry.io/docs/settings/config-files#section-collection-options)📖