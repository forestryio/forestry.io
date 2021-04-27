---
title: Storing Media Files
weight: 1
date: '2020-12-20T10:00:00.000+00:00'
publishdate: 2019-04-14T22:00:00.000+00:00
menu:
  docs:
    parent: Media
    weight: 1

---
Forestry provides multiple options for storing images — audio and video files are not supported.

## Git

The most basic option for storing media is to commit it to your Git repository like the rest of your content. This is the default setting for new projects.

{{% warning %}}
If your site has a large number of media files, we highly recommend [implementing Git LFS on your repository](https://forestry.io/blog/versioning-large-files-with-git-lfs/). Forestry will be able to handle Git LFS media for repositories hosted on GitHub.   
{{% /warning %}}

[Read the full guide on using Git for media storage](/docs/media/git/)

## Cloudinary

Forestry can use [Cloudinary](https://cloudinary.com/) to store your media files. With Cloudinary, you have the advantage of easy image manipulation directly in your templates.

[Read the full guide on using Cloudinary for media storage](/docs/media/cloudinary/)

## AWS S3

Forestry can use an [AWS S3 Bucket](/docs/media/s3/) to store your media files. With AWS S3, you can completely customize your image storage, image processing, and handling.

[Read the full guide on using AWS S3 for media storage](/docs/media/s3/)

## Netlify Large Media

Forestry can integrate with [Netlify Large Media](https://www.netlify.com/docs/large-media/) for storing your uploads. Netlify Large Media is a Git LFS target, enabling you to seamlessly incorporate large media files in your repository without the performance penalty that this usually requires.

[Read the full guide on using Netlify Large Media for media storage](/docs/media/netlify-large-media/)