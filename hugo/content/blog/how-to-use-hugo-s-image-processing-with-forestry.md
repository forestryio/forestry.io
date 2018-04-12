---
title: How To Use Hugo's Image Processing With Forestry
description: ''
date: 2018-04-11 07:09:02 +0000
authors:
- DJ Walker
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/04/hugo-forestry-img-processing.png"
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
Hugo’s `0.32` update introduced built-in [image processing](https://gohugo.io/content-management/image-processing/) for certain assets. One limitation of this feature is that it only works for [page resources](https://gohugo.io/content-management/page-resources/), which are page-relative assets stored alongside your posts in the `content/` directory of your site. Since Forestry’s uploads are stored in the `static/uploads/` directory by default, these assets cannot be resized in your templates using Hugo’s built-in resizer. This document will provide a step-by-step guide for working around this limitation.

![](/uploads/2018/04/media-library-hugo-img-processing.png)

## 1. Create the uploads content section

<!-- I don't love the word 'trick' - how about: Hugo needs to think we have a content type called `uploads`,... -->
We're going to trick Hugo into thinking we have a content type called `uploads`, so that Hugo can browse this section and locate subresources.

Create a folder in your `content/` directory called `uploads`, and add a file named `_index.md` with the following content:

``` yaml
---
headless: true
---
```

This will configure `content/uploads` as a [headless bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle), meaning Hugo will not generate pages for content it finds in here.

{{% warning %}}

There's an unfortunate side effect of this: you will now see **Uploads** under your content menu in the Forestry CMS. This is because both Hugo and Forestry treat this folder as a content section.

{{% /warning %}}

## 2. Change the upload file path in Forestry settings

Inside the CMS, click on `Settings` to access your site's settings. Scroll down to the **File Paths** section. By default, this will be set to `/static/uploads/:year:/:month:/:day:`. Change this to `/content/uploads` so that Hugo can view these files as Page Resources.

![](/uploads/2018/04/settings-content-uploads.png)

## 3. Update front matter and body upload URLs

In the same section, update the URLs in your front matter to match the new upload location: `/uploads`.

## 4. Lookup the page resource in your template

<!-- since you're using 'lookup' as a verb it's 'look up' -->

At this point, you can access image front matter by searching for it in the upload section resources:

```go-html-template
{{{ $imageResource := ($.Site.GetPage "section" "uploads").Resources.GetMatch (strings.TrimPrefix "/uploads/" .image) }}
<img src="{{ $imageResource.RelPermalink }}" />
```