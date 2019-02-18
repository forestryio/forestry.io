---
title: Storing Media Files
weight: 1
date: 2018-05-25 20:00:00 +0000
menu:
  docs:
    parent: Media
    weight: 1

---
Forestry provides multiple options for media storage.

## Git

The most basic option for storing media is to commit it to your git repo like the rest of your content. This is the default setting for new projects.

{{% warning %}}
If your site has a large number of media files, we highly recommend you select a different storage option. Very large git repos are slower to clone and work with and will not present an optimal development experience.
{{% /warning %}}

[Read the full guide on using git for media storage](/docs/media/git)

## Cloudinary

Forestry can use [Cloudinary](https://cloudinary.com/) to store your media files. With Cloudinary, you have the advantage of easy image manipulation directly in your templates.

[Read the full guide on using cloudinary for media storage](/docs/media/cloudinary)