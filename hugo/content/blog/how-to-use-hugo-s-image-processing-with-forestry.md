---
title: How To Use Hugo's Image Processing With Forestry
description: ''
date: 2018-05-21 20:09:02 -1100
authors:
- DJ Walker
publishdate: 2018-05-22 04:00:00 +0000
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

---
`0.32` update introduced built-in [image processing](https://gohugo.io/content-management/image-processing/) for certain assets. One limitation of this feature is that it only works for [page resources](https://gohugo.io/content-management/page-resources/), which are page-relative assets stored alongside your posts in the `content/` directory of your site. Since Forestry’s uploads are stored in the `static/uploads/` directory by default, these assets cannot be resized in your templates using Hugo’s built-in resizer. This document will provide a step-by-step guide for working around this limitation.

![](/uploads/2018/04/media-library-hugo-img-processing.png){{% tip %}} 
**Interested in image processing?!** Watch our updates, we are adding [Cloudinary](https://cloudinary.com/) support for Forestry giving you access to powerful image processing capabilities.
{{% /tip %}}<p>

## 1. Create the uploads content section

In order for this to work, Hugo needs to think we have a content type called `uploads`, so that it can browse this section and locate subresources.

Create a folder in your `content/` directory called `uploads`, and add a file named `index.md` with the following content:

``` yaml
---
headless: true
---
```

This will configure `content/uploads` as a [headless bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle), meaning Hugo will not generate pages for content it finds in here.


## 2. Change the upload file path in Forestry settings

Inside the CMS, click on `Settings` to access your site's settings. Scroll down to the **Media Paths** section. We need to change the **Upload Directory** settings: By default, this will be set to `/static/uploads`. Change this to `content/uploads` so that Hugo can view these files as Page Resources.

![](/uploads/2018/05/media_paths_settings_ss.png)

## 3. Update file URL paths

In the same section, update the **Public Path** to match the new upload location: `/uploads`. Then open up the **Advanced** toggle and change the **File Path** to just `:filename:`.

## 4. Look up the page resource in your template

At this point, you can access image front matter by searching for it in the upload section resources:

```go-html-template
{{ with .Params.image }}
    {{ $imageResource := ($.Site.GetPage "section" "uploads").Resources.GetMatch (strings.TrimPrefix "/uploads/" . ) }}
    {{ $resized := $imageResource.Fill "200x200" }}
    <img src="{{ $resized.RelPermalink }}" />
{{ end }}
```

In this example, the image is in the item's front matter and has the key of `image`. Replace `.Params.image` with the name of your front matter field if this is different.

To use the page resource image, we have to search for it in the **uploads** content section we created earlier. We strip the `/uploads/` prefix to get the filename and use `.Resources.GetMatch` to perform the search, storing the result in a variable called `$imageResource`. You can then call any of the [image processing methods](https://gohugo.io/content-management/image-processing/#image-processing-methods) on `$imageResource` to get a resized version.
