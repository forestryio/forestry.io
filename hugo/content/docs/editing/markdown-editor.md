---
aliases:
- "/docs/managing-content/editing-content/"
title: Markdown Editor
weight: "2"
publishdate: 2017-12-31T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: 2019-05-29T04:00:00-03:00
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Editing
    weight: 2

---
The Markdown editor is the main way of editing content in Forestry. Your content's [front matter](/docs/settings/front-matter-templates/) is shown on the left, and your content's Markdown body is shown on the right.

![](/uploads/2018/01/14.png)

An editing environment based on Markdown allows for fast formatting and a seamless authoring experience, which focuses entirely on the content being created. Markup is translated to visual formatting on-the-fly to provide the best experience possible.

## Markdown formatting

The Markdown editor works just like any other online WYSIWYG editor. A full toolbar is available at the bottom of the editor for easy formatting. Markdown is supported to allow for fast formatting and a familiar experience for developers.

{{% tip %}}
The Markdown editor is fully [commonmark compatible](https://commonmark.org/help/)! Give Markdown a try by typing `## My New Heading!` into the editor to get a level 2 heading!
{{% /tip %}}

![](/uploads/2018/01/14-markdown-formatting.png)

To find all available keyboard and Markdown shortcuts, click the keyboard icon in the bottom right corner.

{{% warning "Current limitations" %}}
Commonmark specification does not support Tables or Footnotes. We'll need to extend the editor to tackle those issues.
{{% /warning %}}


### Source editor

![](/uploads/2018/01/18.png)

For advanced users, the full Markdown source of your content body can be edited by clicking the more options icon (`...`), and selecting "Raw Editor".

## Drafting and Publishing Content

The Markdown editor fully supports creating draft content -- content that is not yet ready to be published to your production website -- as well as live, published content.

![](/uploads/2018/01/14-settings-button.png)

From a section douments list, this can be changed by clicking the more options icon (`...`), and clicking "Set as draft"/"Publish".

When you're editing a Markdown file, set Draft to ON or OFF.

{{% warning %}}
This option is only available for Jekyll and Hugo sites.
You can always use a [Toggle field](/docs/settings/fields/#toggle) in your front matter template to add a `draft` field.
{{% /warning %}}

## New File Format

By default, Forestry is [configured to create all new content](/docs/settings/#new-file-format) using the Markdown editor.

## Front Matter Templates

The left-hand side of the Markdown editor is your document's front matter. Forestry provides a powerful templating system for front matter, called [Front Matter Templates](/docs/front-matter-templates/).
