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

![](/uploads/2018/01/settings.png)

Often, the upload directory will be different from the public path used to access your media file. For this reason, there are multiple options.
In the case of Hugo, your static files must be located in the `/static` directory, but when your site is compiled, those images are publicly viewable from the root of your project.  So `/static/images/file.jpg` becomes `/images/file.jpg`.

![](/uploads/2018/01/file-paths.png)

**Upload Folder**  
The folder within your repo to store the uploaded media

**Font Matter File URL**  
The path that will be **prepended** to all media files uploaded from Front Matter fields. For example:

![](/uploads/2018/01/image-field-upload-1.png)

```yaml
---
title: My new post
date: 2017-12-31 12:00:00 -0400
image: /uploads/image.jpg
---
```

**Content Body URL**
The path that will be **prepended** to all media files uploaded from the body editor.

This usually has the same value as your _Front Matter File URL_, but in some cases you may want to prepend a different path to images and media uploaded via the body editor.

{{% tip %}}
asdf
{{% /tip %}}

<!--

## FMTs

## Time zone

### Hide body

## Invite Collaborators

### Remote Admin

## Configure Deployment -->