---
aliases:
- "/docs/managing-content/media-management/"
- "/docs/site-configuration/media-uploads/"
- "/docs/faq/where-do-uploaded-images-get-saved/"
title: Media Library
weight: 6
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-05-25 20:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Editing
    weight: 7

---
The Media Library allows content editors to easily manage the media for your site. This allows content editors to easily add images, PDFs, and GIFs to their content without having to use Git.

![](/uploads/2018/01/19.png)

## Managing Media

The Media Library allows you to upload and delete media files. It also allows editors to insert media uploads into the [File Upload](/docs/settings/fields#file-upload) and [Multi-File Upload](/docs/settings/fields#multi-file-upload) front matter fields, and the content body.

### Uploading Media

To upload media files to the Media Library, navigate to the _Media Library_ page in Forestry, and follow these instructions:

1. Click the "+" thumbnail
2. Select a media file to upload from your local machine
3. A loading spinner will be displayed while the media file uploads

{{% tip %}}
You can also upload media files by dragging them from your desktop onto the Media Library. Give it a try!
{{% /tip %}}

### Deleting Media

To delete media files, navigate to the _Media Library_ page in the CMS, and follow these instructions:

1. Click "Select" on the thumbnail of each upload you'd like to delete
2. Click the trash icon in the top right corner of the page
3. You can confirm that each upload is being deleted by checking _Site Activity_ in the top right of the sidebar

## Configuring the Media Library

You can configure the paths used for your media files in the **Media Paths** section of your site settings.

![Media Path Settings](/uploads/2018/05/media-paths-settings.png)

### Upload Directory

The directory where media uploads should be saved, relative to the root of your repository.

### Public Path

The *URL path* that maps to your upload directory. For example, a Hugo website might use `static/uploads` as the **upload directory**, and `/uploads` as the **public path** since Hugo copies files placed in `static` directly into the root of the published website. 

### File Path

This value will be appended to both your **upload directory** and **public path**. You can use this setting to specify a subfolder to place your uploads in. You may use the following variables as a way of bucketing your uploads:

* `:year:`: the current year, formatted `YYYY`
* `:month:`: the current month, formatted `MM`
* `:day:`: the current day, formatted `DD`

### Front Matter Path

You may optionally use a different *public path* for images uploaded to front matter, as opposed to images uploaded via the content editor. You may wish to do this if you already have the *public path* value written into your templates where the front matter is used.

## Further Reading

* [Media Storage Options in Forestry](/docs/media/)
* [Hugo, Static Files](https://gohugo.io/content-management/static-files/)
* [Jekyll, Static Files](https://jekyllrb.com/docs/static-files/)