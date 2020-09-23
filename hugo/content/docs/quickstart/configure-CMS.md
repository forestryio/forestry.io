---
title: Configure the CMS
authors: []
publishdate: 2017-12-07T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
layout: single
weight: 2
date: '2019-05-08T06:00:00.000+00:00'
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Quick Start
    weight: 3

---
You [setup your site](/docs/quickstart/setup-site/ "Setup Your Site") with Forestry and now you're ready to configure your CMS.  This doc will go over:

1. Setting up the content sections that appear in the CMS sidebar
2. Setting up correct paths for images and other media
3. Enabling and configuring your site's preview
4. Configuring your content model (the fields used on each page, post, etc)

***

## Setting up Sidebar Content Sections

You are able to configure content sections to control what content editors have access to in the CMS. To do this, go to **Settings > Sidebar**. Here, you will be able to add and edit the content sections that appear in the CMS sidebar.

{{% pretty_screenshot img="/uploads/2019/07/sidebar-config-ui.png" %}}

For details on how to set up the sidebar, take a look at our [sidebar configuration guide](/docs/settings/content-sections/).

## Setting up Image Paths

When your team uploads images and other media, you want to ensure they're going to the right directory. Set this up by going to **Settings > Media**.

![](/uploads/2018/01/settings.png)

You should see the following settings which are described below.

![](/uploads/2019/02/file-paths.png)

### Upload Directory

The folder within your repo to store the uploaded media. If this is set to a directory that doesn't exist, Forestry will create that directory.

### Public Path

The path that will **prepend** media files uploaded from Front Matter fields. For example, if this value was set to `/uploads` Forestry would write out the following image value.

```yaml
---
title: My new post
date: 2020-06-11 12:00:00 -0400
image: /uploads/image.jpg
---
```

### Front Matter Path

This usually has the same value as the `Public Path`, but in some cases you may need these paths to be different.

***

### Media Settings examples

With Hugo, all [static assets](https://gohugo.io/content-management/static-files/) belong in your `/static` directory which then get outputted in the root of your built site.

Gatsby will store your assets in [`static` folder](https://www.gatsbyjs.org/docs/static-folder/).

Eleventy is very flexible and do no respond to a single convention, you often see projects [store images](https://www.11ty.io/docs/copy/) in a `/src/images/` folder.

Jekyll supports static assets in your project root. Many gem-based themes store images in `/assets/images`.

|  | Upload Directory | Front Matter File Path | Body File Path |
| --- | --- | --- | --- |
| Hugo | /static/uploads | /uploads | /uploads |
| Gatsby | /static/images | /images | /images |
| Eleventy | /src/images | /images | /images |
| Jekyll | /assets/images | /assets/images | /assets/images |

### Variables

Each of these settings supports the following variables at upload time:

* `:year:`: the current year, formatted `YYYY`
* `:month:`: the current month, formatted `MM`
* `:day:`: the current day, formatted `DD`

When these variables are used in the _Uploads Folder_ setting, Forestry will create the necessary folders if they don't exist when a file is uploaded.

For this (Hugo) site, we organize media like so:

```yaml
upload_dir: "static/uploads"
public_path: "/uploads"
file_template: ":year:/:month:/:filename:"
```

For more information on media settings visit the [Media Library doc](/docs/editing/media-library/#configuring-the-media-library).

***

## Configuring Previews

While editing content in the CMS, users can preview their unsaved changes in an ephemeral copy of your full website. In order to do this, you will need to tell Forestry how to build your site by [configuring the preview environment](/docs/previews/about-previews/).

## Content Modeling

### In this section, we will configure your content model. This determines which fields are displayed for your pages, posts, etc.

When you sync a new site with Forestry, all data found in the Front Matter for your pages will be displayed as UI fields.

However, if you want to configure how these fields are displayed for your editors and which fields should appear for new pieces of content, you'll need to set up a Front Matter Template (FMT).

![](/uploads/2018/01/front-matter-templates.png)

This is where we'll create a UI that's tailored to our Front Matter data.

{{% tip "Create template from an existing page" %}} If you just want to add fields that match an existing piece of content, navigate to that page and click the settings dropdown. From there, you can choose "Create Template" which will create a Front Matter Template based on that page's front matter data. {{% /tip %}}

If the Front Matter for your blog posts looks like this:

```yaml
---
title: My new post
date: 2020-06-11 12:00:00 -0400
image: /uploads/image.jpg
---
```

You'll want to create a template called **Posts** and add the following fields:

![Select a fied type to model your content type](/uploads/2019/05/field-types-example.png "Pick up text, date and image fields for example")

This will generate the following user interface for the front matter template:

![](/uploads/2019/05/fields-example.png)

#### Click the settings icon to configure each field

Here are our title text field settings:

![Text field settings](/uploads/2019/05/text-field-settings.png "Text field settings")

Some of the options available are:

* Setting a human-readable label
* Setting the name of the `key` to be written out to your Front Matter
* Adding help text
* Making some fields hidden from editors
* Setting a default value
* Mark a field as required
* Many more options depending on the field type

{{% tip "Default Values" %}}
To set default values for your fields, just edit the field value right in the Template editing interface and save your changes.
{{% /tip %}}

### Disable the Body Editor

If you do not need a WYSIWYG editor for this content type,  edit the template settings and select **Fields**

![](/uploads/2019/05/template-settings-no-body.png)

### Applying a Template to a Page

To apply an FMT to an individual page, navigate to the page you want to apply the FMT to and click **Settings > Change Template**

![](/uploads/2018/01/change-template.png)

Select your newly created template and save your changes.

Congrats! Now you should have fields set up for your different content types. For more information on Front Matter Templates, read the full doc [here](/docs/settings/front-matter-templates/)

{{% tip "Configuration Files" %}} You probably noticed Forestry committed a `.forestry` folder to your repository. This stores all of your site configuration (FMTs, image settings, etc). If you prefer working in a text file, you can set all of your site's configuration by [editing these files](/docs/settings/config-files/).

![](/uploads/2018/01/configuration-files.png)
{{% /tip %}}