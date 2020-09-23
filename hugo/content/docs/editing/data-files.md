---
aliases:
- "/docs/managing-content/data-files/"
title: Data Files
weight: 5
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-05-25 20:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Editing
    weight: 4

---
Data files are pieces of content that don’t belong to a specific page or piece of content. They are commonly used for managing content like social media handles and links, contact information, and branding (e.g, logo images and site colours).

## Datafile Sections

You can configure access to data files with [Sidebar Sections](/docs/settings/content-sections/), explicitly adding them to the sidebar like the rest of your content. In this case, your Sidebar Configuration will display the data editing UI for JSON, YAML, and TOML files instead of the default content UI. You can use the `match` and `new_doc_ext` options to configure a sidebar section that operates exclusively on data files.

{{% tip %}}
For more information on how to configure the sidebar for data files, view our [Sidebar Configuration documentation.](/docs/settings/content-sections/#configuring-data-file-sections)
{{% /tip %}}

## Customizing Fields

You can also apply [Front Matter Templates](/docs/settings/front-matter-templates/#apply-a-template-to-content) to your data files, allowing configuration of the fields that are displayed in the CMS. To do so, navigate to the Data File you want to customize:

1. Click the settings button in the top right, next to the "Save" button
2. Click "Change Template"
3. Choose the Front Matter Template you want and click "Done"

## Futher Reading

* [Hugo's Data Template Docs](https://gohugo.io/templates/data-templates/)
* [Jekyll's Data File Docs](https://jekyllrb.com/docs/datafiles/)
* [Using JSON Configuration with VuePress](/blog/using-json-configuration-with-vuepress/)
