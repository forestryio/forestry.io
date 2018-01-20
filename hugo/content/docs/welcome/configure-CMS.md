---
title: Quick Start - Configure your CMS
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

When your team uploads images and other media, you want to ensure they're going to the right directory. Set this up by going to **Settings > File Paths**.

![](/uploads/2018/01/settings.png)

You should see the following settings which are described below.

![](/uploads/2018/01/file-paths.png)

### Upload Folder
The folder within your repo to store the uploaded media. If this is set to a directory that doesn't exist, Forestry will create that directory.

### Font Matter File URL
The path that will **prepend** media files uploaded from Front Matter fields. For example, if this value were set to `/uploads` Forestry would write out the following image value.

```yaml
---
title: My new post
date: 2017-12-31 12:00:00 -0400
image: /uploads/image.jpg
---
```

### Content Body URL
The path that will **prepend** media files uploaded in the body editor.

This usually has the same value as the `Front Matter File URL`, but in some cases you may need these paths to be different. If this value were set to `/uploads` Forestry would write out the following in your Markdown body:

```
## My new post

The content body URL path is prepended to images
uploaded in the document body, like so:

![](/uploads/image.jpg)
```

---


### Variables
Each of these settings supports the following variables at upload time:

* `:year:`: the current year, formatted `YYYY`
* `:month:`: the current month, formatted `MM`
* `:day:`: the current day, formatted `DD`

 When these variables are used in the _Uploads Folder_ setting, Forestry will create the necessary folders if they don't exist when a file is uploaded.

For more information on media settings visit the [Media Library doc](/docs/editing/media-library/#configuring-the-media-library).

---
## Your Content Model &amp; Front Matter Templates

When you sync a new site with Forestry, all data found in the Front Matter for your pages will be displayed as UI fields.

However, if you want to configure how these fields are displayed for your editors and which fields should appear for new pieces of content, you'll need to set up a Front Matter Template (FMT).

![](/uploads/2018/01/front-matter-templates.png)

This is where we'll create a UI that's tailored to our Front Matter data.


{{% tip "Create template from an existing page" %}}
If you just want to add fields that match an existing piece of content, navigate to that page and click the settings drop down. From there, you can choose "Create Template" which will create a Front Matter Template based off that page's front matter data.
{{% /tip %}}


If the Front Matter for your blog posts looks like this:


```yaml
---
title: My new post
date: 2017-12-31 12:00:00 -0400
image: /uploads/image.jpg
---
```

You'll want to create a template called **Posts** and add the following fields:

![](/uploads/2018/01/forestry-fields-ex.png)

This will generate the following UI for your posts content:
![](/uploads/2018/01/front-matter-fields-ex1.png)


<!--

## Config as code

## Time zone

### Hide body

## Invite Collaborators

### Remote Admin

## Configure Deployment -->
