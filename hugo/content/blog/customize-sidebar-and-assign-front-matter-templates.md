---
title: Customize Your Sidebar and Limit Front Matter Templates to Sections
description: Making the sidebar configurable was really high up on your wish list
  and this is the week we decided to make it happen. Some of you also wanted to limit
  access to Front Matter Templates for some content sections. You can do that now,
  too.
date: 2018-07-04 02:17:18 -1100
authors:
- Sebastian Engels
publishdate: 2018-07-03 16:00:00 -1100
expirydate: 2029-12-31 17:00:00 -1100
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
menu: []

---
Another week full of new features! While the marketing team launched the Blocks theme [uBuild](https://forestry.io/blog/ubuild-a-new-theme-for-static-sites-using-blocks/) for Jekyll and Hugo, the development team kept working on new product features.

Making the sidebar configurable was really high up on your wish list and this week we made it happen. Some of you also wanted to limit access to [Front Matter Templates](https://forestry.io/docs/settings/front-matter-templates/) to specific content sections. You can do that now, too.

Let’s look at a few examples and feel free to open up your code editor and follow along.

All of your sidebar configurations are organized in your `settings.yml` under `sections`/`collections` depending on whether you use Hugo or Jekyll. So let's go ahead and open that file.

***

## Hide Sections 🙈

Some sections of a site are not important for content editing purposes, so they shouldn't add clutter to your content manager!

You can now decide which sections are visible by using our `hidden` tag. Also, your content sections will appear in the exact order you specify them under `sections`/`collections`.

![](/uploads/2018/07/remove-content-type.gif)

_For Jekyll:_

    collections:
    - path: _posts
      hidden: true

_For Hugo:_

    sections:
    - path: content/posts
      hidden: true

***

## Switch Labels 🏷️

Sometimes your directory names might not be ideal outside a development environment. That’s why you can now choose to rename the labels of your content sections without changing the name of the directory itself.

![](/uploads/2018/07/switch-label.gif)

_For Jekyll:_

    collections:
    - path: _posts
      label: Blog

_For Hugo:_

    sections:
    - path: content/posts
      label: Blog

***

## Assign Front Matter Templates to Sections  👈👆👉

Until now every time you created new content you would have to choose from a long list of Front Matter Templates. That wasn't ideal and bogged content editors down.

Now you can assign one or more Front Matter Templates to a specific content section and only expose them for that section. You can even provide them in an order you specify.

![](/uploads/2018/07/create-posts.gif)

_For Jekyll:_

    collections:
    - path: _posts
      templates:
      - post
      - article

_For Hugo:_

    sections:
    - path: content/posts
      templates:
      - post
      - article
      
{{% tip %}}
If you only add one template to a section, that template will be pre-selected and we won't show the dropdown anymore.
{{% /tip %}}

---

## Restrict Adding More Content to a Section

You can also prevent content to be added to a section altogether.

![](/uploads/2018/07/content-all-none.gif)

_For Jekyll:_

    collections:
    - path: _posts
      create: none

_For Hugo:_

    sections:
    - path: content/posts
      create: none


Read more on these updates in our [docs](https://forestry.io/docs/settings/config-files#section-collection-options) 📖

You can also check out our [previous update](https://forestry.io/blog/hugo-support-sorting-for-pages-and-more/) 😍