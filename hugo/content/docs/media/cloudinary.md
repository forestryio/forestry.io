---
title: Cloud Media Storage With Cloudinary
weight: 3
menu:
  docs:
    parent: Media
    weight: 3
    name: Cloudinary
---

## Linking Your Cloudinary Account

## Migrating Existing Media

## Using Cloudinary Images

Cloudinary supports a vast array of image manipulation options that can be implemented directly in the image URL. Cloudinary has [so many transformation options](https://cloudinary.com/documentation/image_transformations) that, rather than attempt to support a subset of them in our UI, we have instead decided to make it easy for developers to configure these image transformations themselves in the site's templates.

When adding a Cloudinary image to a front matter field, Forestry will only save the base filename in the page's front matter, like this:

```
---
main_image: img.png
#...
---
```

When using these images in your templates, you should prepend them with the URL to your cloud. We recommend storing this URL in your site's configuration and referencing it via variable in your templates. For example, in a Hugo site you might put the following in `config.toml`:

```
cloudinary_url = "https://res.cloudinary.com/demo/image/upload/"
```

You could then use these front matter images in your templates as follows:

```
<img src="{{ .Site.cloudinary_url }}/{{ .Params.main_image }}" />
```

Using this approach, adding in one or more transformations is easy and transparent:

```
<img src="{{ .Site.cloudinary_url }}/w_250,h_250,c_fill/{{ .Params.main_image }}">
```

{{% tip %}}
View Cloudinary's [image transformations documentation](https://cloudinary.com/documentation/image_transformations) to check out the wide array of things you can do with Cloudinary!
{{% /tip %}}