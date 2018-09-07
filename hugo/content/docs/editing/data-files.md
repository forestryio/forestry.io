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
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Editing
    weight: 5

---
Data files are pieces of content that don’t belong to a specific page or piece of content. They are commonly used for managing content like social media handles and links, contact information, and branding (e.g, logo images and site colours).

## Configuring Datafile Access

Forestry currently supports two ways of providing access to data files in your sidebar. The **Datafile Sections** option allows you to explicitly configure how datafiles are included in your sidebar using the same [Sidebar Configuration](/docs/settings/content-sections/) rules as the rest of your content. If you don't opt-in to **Datafile Sections**, Forestry will fall back to looking in specific directories for your datafiles and adding them to the sidebar automatically.

### Datafile Sections

{{% tip "Opt-in Feature" %}}
To opt in to this method of handling Data files, go to your project settings, scroll to the bottom of the **General** tab, and activate the toggle labeled **Datafile Sections**.
{{% /tip %}}

The **Datafile Sections** behavior enables you to configure data files with [Sidebar Sections](/docs/settings/content-sections/), explicitly adding them to the sidebar like the rest of your content. In this case, your Sidebar Configuration will display the data editing UI for JSON, YAML, and TOML files instead of the default content UI. You can use the `match` and `new_doc_ext` options to configure a sidebar section that operates exclusively on data files.

{{% tip %}}
For more information on how to configure the sidebar for data files, view our [Sidebar Configuration documentation.](/docs/settings/content-sections/#configuring-data-file-sections)
{{% /tip %}}

### Legacy Datafile Behavior

If you don't opt-in to **Datafile Sections**, Forestry will import datafiles it finds in the `data` directory of your Hugo project, or the `_data` directory in your Jekyll project. These files will then appear under a **Data** heading in your sidebar.


![](/uploads/2018/01/11.png)

Forestry allows you to edit existing data files. They can be found under _Data_ in the sidebar.

## Customizing Fields

You can also apply [Front Matter Templates](/docs/settings/front-matter-templates/#applying-fmts-to-content) to your data files, allowing configuration of the fields that are displayed in the CMS. To do so, navigate to the Data File you want to customize:

1. Click the settings button in the top right, next to the "Save" button
2. Click "Change Template"
3. Choose the Front Matter Template you want and click "Done"

## Futher Reading

* [Hugo's Data Template Docs](https://gohugo.io/templates/data-templates/)
* [Jekyll's Data File Docs](https://jekyllrb.com/docs/datafiles/)