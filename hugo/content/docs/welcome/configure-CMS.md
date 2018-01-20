---
title: Configure your CMS
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
weight: 2
date: 2017-12-07 04:00:00 +0000
menu:
  docs:
    parent: welcome
    weight: 3

---
You sync'd your repo with Forestry and now you're ready to configure your CMS.  This doc will go over:

1. Setting up correct paths for images and other media
2. Configuring your content model (the fields used on each page, post, etc)
3. Inviting others collaborators
4. Setting up deployment to your host

---

## Setting up Image Paths

When your team uploads images you want to ensure they're going to the right directory.

Go to **Settings > File Paths**

TK: image Settings

TK: image file-paths

Often, the upload directory will be different from the public path used to access your media file. For this reason, for this reason, we have multiple options here.

In the case of Hugo, your static files must be located in the `/static` directory, but when your site is compiled, those images are publicly viewable from the root of your project.  So `/static/images/file.jpg` becomes `/images/file.jpg`.





<!--

## FMTs

## Time zone

### Hide body

## Invite Collaborators

### Remote Admin

## Configure Deployment -->
