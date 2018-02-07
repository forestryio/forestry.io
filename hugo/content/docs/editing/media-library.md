---
aliases:
- "/docs/managing-content/media-management/"
- "/docs/site-configuration/media-uploads/"
- "/docs/faq/where-do-uploaded-images-get-saved/"
title: Media Library
weight: 6
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Editing
    weight: 8

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

{{% tip %}}
If you deleted a media upload by accident, worry not! All media uploads are stored in your Git repositories history.
{{% /tip %}}

## Configuring the Media Library

The Media Library displays media files found inside a single uploads folder. This can be configured from your site's settings.

![](/uploads/2018/01/settings-filepaths.png)

#### Upload Folder

The upload path where media uploads should be saved, relative to the root of your repository.

* _Default:_ `/uploads/:year:/:month:/:day:/`

#### Front Matter File URL

The relative path from the root of your site for media uploads inserted into front matter fields.

* _Default:_ `/uploads/:year:/:month:/:day:/`

{{% tip %}}
The _Front Matter File URL_ may need to be different than the _Content Body File URL_ if your theme handles appending the path to the media upload.
{{% /tip %}}

#### Content Body File URL

The relative path from the site's root for media uploads in the content body.

* _Default:_ `/uploads/:year:/:month:/:day:/`

{{% tip %}}
The _Content Body File URL_ should always be the relative path to your media uploads folder from the root of your site to ensure that images load correctly.
{{% /tip %}}

#### Variables

Each of these settings support the following variables at upload time:

* `:year:`: the current year, formatted `YYYY`
* `:month:`: the current month, formatted `MM`
* `:day:`: the current day, formatted `DD`

## Futher Reading

* [Hugo, Static Files](https://gohugo.io/content-management/static-files/)
* [Jekyll, Static Files](https://jekyllrb.com/docs/static-files/)