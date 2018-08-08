---
title: Configure the CMS
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
weight: 2
date: 2017-03-23 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Quick Start
    weight: 3

---
You [setup your site](/docs/quickstart/setup-site/ "Setup Your Site") with Forestry and now you're ready to configure your CMS.  This doc will go over:

1. Setting up correct paths for images and other media
2. Configuring your content model (the fields used on each page, post, etc)

---

## Setting up Image Paths

When your team uploads images and other media, you want to ensure they're going to the right directory. Set this up by going to **Settings > File Paths**.

![](/uploads/2018/01/settings.png)

You should see the following settings which are described below. 

![](/uploads/2018/01/file-paths2.png)

### Upload Folder
The folder within your repo to store the uploaded media. If this is set to a directory that doesn't exist, Forestry will create that directory.

### Front Matter File URL
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

### Example Media Settings

With Hugo, all static assets belong in your `/static` directory which then get outputted in the root of your built site.

However, Jekyll supports static assets in your project root.  For this reason, we often see the following File Path settings in Forestry:

<table>
  <tr>
    <th></th>
    <th>Upload Directory</th>
    <th>Front Matter File Path</th>
    <th>Body File Path</th>
  </tr>
  <tr>
    <td>Hugo</td>
    <td><code>/static/uploads</code></td>
    <td><code>/uploads</code></td>
    <td><code>/uploads</code></td>
  </tr>
  <tr>
    <td>Jekyll</td>
    <td><code>/uploads</code></td>
    <td><code>/uploads</code></td>
    <td><code>/uploads</code></td>
  </tr>
</table>



### Variables
Each of these settings supports the following variables at upload time:

* `:year:`: the current year, formatted `YYYY`
* `:month:`: the current month, formatted `MM`
* `:day:`: the current day, formatted `DD`

 When these variables are used in the _Uploads Folder_ setting, Forestry will create the necessary folders if they don't exist when a file is uploaded.  

For this (Hugo) site, we organize media by month, like so:
```
upload_path: /hugo/static/uploads/:year:/:month:
frontmatter_file_url_template: /uploads/:year:/:month:
body_file_url_template: /uploads/:year:/:month:
```

For more information on media settings visit the [Media Library doc](/docs/editing/media-library/#configuring-the-media-library).


---
## Your Content Model &amp; Front Matter Templates

### In this section we will configure your content model. This determines which fields are displayed for your pages, posts, etc.

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

### Click the settings icon to configure each field

![](/uploads/2018/01/field-settings.png)

Some of the options available are:

* Adding help text
* Making some fields hidden from editors
* Setting a human-readable label
* Setting the name of the `key` to be written out to your Front Matter
* Many more options depending on the field type

{{% tip "Default Values" %}}
To set default values for your fields, just edit the field value right in the Template editing interface and save your changes.
{{% /tip %}}


### Disable the Body Editor
Finally, if you do not need a WYSIWYG editor for this content type, enable the  **Hide Body** toggle.

![](/uploads/2018/01/hide-body.gif)

### Applying a Template to a Page
To apply an FMT to an individual page, navigate to the page you want to apply the FMT to and click **Settings > Change Template**

![](/uploads/2018/01/change-template.png)

Select your newly created template and save your changes.

Congrats! Now you should have fields set up for your different content types. For more information on Front Matter Templates, read the full doc [here](/docs/settings/front-matter-templates/)


{{% tip "Configuration Files" %}}
You probably noticed Forestry committed a .forestry folder to your repository. This stores all of your sites configuration (FMTs, image settings, etc). If you prefer working in a text file, you can set all of your site's configuration by editing these files. More info [here](/docs/settings/config-files/).  

![](/uploads/2018/01/configuration-files.png)
{{% /tip %}}



<!--

## Invite Collaborators

## Configure Deployment -->