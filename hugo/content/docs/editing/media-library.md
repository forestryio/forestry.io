---
aliases:
- /docs/managing-content/media-management/
- /docs/site-configuration/media-uploads/
- /docs/faq/where-do-uploaded-images-get-saved/
title: Media Library
weight: 6
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: editing
layout: single
---
The Media Library allows content editors to easily manage media uploads for your site. This allows content editors to easily add images, videos, PDFs, and other media formats to their content without having to use Git.

TK: image of media library

## Managing Media
The Media Library allows you to upload and delete media files. It also allows editors to insert media uploads into the [File Upload](/docs/front-matter-templates/fields#file-upload) and [Multi-File Upload](/docs/front-matter-templates/fields#multi-file-upload) front matter fields, and the content body.

### Uploading Media
To upload media files to the Media Library, navigate to the *Media Library* page in Forestry, and follow these instructions:

1. Click "+" placeholder thumbnail
2. Select a media file to upload from your local machine
3. A loading spinner will be displayed while the media file uploads

{{% tip %}}
You can also upload media files by dragging them from your desktop onto the Media Library. Give it a try!
{{% /tip %}}

### Deleting Media
To delete media files, navigate to the *Media Library* page in the CMS, and follow these instructions:

1. Click "Select" on the thumbnail of each upload you'd like to delete
2. Click the trash icon in the top right corner of the page
3. You can confirm that each upload is being deleted by checking *Site Activity* in the top right of the sidebar

{{% tip %}}
If you deleted a media upload by accident, worry not! All media uploads are stored in your Git repositories history.
{{% /tip %}}

## Configuring the Media Library
The Media Library displayed media files found inside a single uploads folder. This can be configured from your site's settings.

TK: image of media library options

#### Upload Folder
Upload path where media uploads should be saved, relative to the root of your repository.

* *Default:* `/uploads/:year:/:month:/:day:/`

#### Front Matter File URL
The relative path from the root of your site to append to media uploads inserted into front matter fields.

* *Default:* `/uploads/:year:/:month:/:day:/`

{{% tip %}}
The *Front Matter File URL* may need to be different than the *Content Body File URL* if your theme handles appending the path to the media upload.
{{% /tip %}}

#### Content Body File URL 
The relative path from the root of your site to append to media uploads inserted into the Markdown or HTML content body.

* *Default:* `/uploads/:year:/:month:/:day:/`

{{% tip %}}
The *Content Body File URL* should always be the relative path to your media uploads folder from the root of your site to ensure that images load correctly.
{{% /tip %}}

#### Variables
Each of these settings supports the following variables at upload time:

* `:year:`: the current year, formatted `YYYY`
* `:month:`: the current month, formatted `MM`
* `:day:`: the current day, formatted `DD`

## Futher Reading

- [Hugo, Static Files](https://gohugo.io/content-management/static-files/)
- [Jekyll, Static Files](https://jekyllrb.com/docs/static-files/)