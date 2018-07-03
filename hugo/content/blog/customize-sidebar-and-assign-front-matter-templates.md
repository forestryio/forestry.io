---
title: Customize Sidebar and Assign Front Matter Templates
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
Another week full of new things! While we were launching our Blocks theme [uBuild](https://forestry.io/blog/ubuild-a-new-theme-for-static-sites-using-blocks/) for Jekyll and Hugo, our developer team kept working on a new product feature.

We kept hearing from you that making the sidebar configurable was really high up on your wish list and this is the week we decided to make it happen. We also added support to specify Front Matter Templates for specific types of content.

Let’s look at a few examples and feel free to open up your code editor and follow along.

All of your sidebar configurations are organized in your `settings.yml` under `sections`/`collections` depending on whether you use Hugo or Jekyll. So let's go ahead and open that.
<hr />
## Customize Visibility of Content Types

You can now decide which content types are visible by using our `hidden` tag. Also, all your content types will appear in the order they are specified under `sections`/`collections`.

![](/uploads/2018/07/remove-content-type.gif)

Jekyll
```
collections:
- path: _posts
  label: Posts
  hidden: true
```

Hugo
```
sections:
- path: content/posts
  label: Posts
  hidden: true
```
<hr />
## Label Categories

Sometimes naming a directory a certain way makes sense for development purposes but not for editing purposes. That’s why you can now choose to label your content types differently from your directory names.

![](/uploads/2018/07/switch-label.gif)

Jekyll
```
collections:
- path: _posts
  label: Blog
```

Hugo
```
sections:
- path: content/posts
  label: Blog
```
<hr />
## Assign Front Matter Templates

Until now everytime you created new content you would have to choose from a long list of all available templates, even if they didn’t make sense for that part of a site. We heard you. Now you can assign one or more Front Matter Templates for a specific content type (top-level directory) and only expose those when a specific type of content is edited. Simply use

![](/uploads/2018/07/create-posts.gif)

Jekyll
```
collections:
- path: _posts
  templates:
  - post
  - article
```

Hugo
```
sections:
- path: content/posts
  templates:
  - post
  - article
```