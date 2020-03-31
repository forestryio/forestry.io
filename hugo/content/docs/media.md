---
title: Storing Media Files
weight: 1
date: '2018-05-25T20:00:00.000+00:00'
publishdate: 2019-04-14T22:00:00+00:00
menu:
  docs:
    parent: Media
    weight: 1

---
Forestry provides multiple options for media storage.

## Git

The most basic option for storing media is to commit it to your git repo like the rest of your content. This is the default setting for new projects.

{{% warning %}}
If your site has a large number of media files, we highly recommend [implementing Git LFS on your repository](https://forestry.io/blog/versioning-large-files-with-git-lfs/). Forestry will be able to handle Git LFS media for repositories hosted on GitHub and GitLab.
{{% /warning %}}

[Read the full guide on using Git for media storage](/docs/media/git)

## Cloudinary

Forestry can use [Cloudinary](https://cloudinary.com/) to store your media files. With Cloudinary, you have the advantage of easy image manipulation directly in your templates.

[Read the full guide on using Cloudinary for media storage](/docs/media/cloudinary)