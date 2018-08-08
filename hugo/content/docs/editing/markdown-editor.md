---
aliases:
- "/docs/managing-content/editing-content/"
title: Markdown Editor
weight: 2
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Editing
    weight: 2

---
The markdown editor is the main way of editing content in Forestry. Your content's [front matter](/docs/settings/front-matter-templates/) is shown on the left, and your content's markdown body is shown on the right.

![](/uploads/2018/01/14.png)

An editing environment based on markdown allows for fast formatting and a seamless authoring experience, which focuses entirely on the content being created. Markup is translated to visual formatting on-the-fly to provide the best experience possible.

## Markdown formatting

The markdown editor works just like any other online WYSIWYG editor. A full toolbar is available at the bottom of the editor for easy formatting. Markdown is supported to allow for fast formatting and a familiar experience for developers.

{{% tip %}}
The markdown editor is fully [commonmark compatible](http://commonmark.org/help/)! Give markdown a try by typing `## My New Heading!` into the editor to get a level 2 heading!
{{% /tip %}}

![](/uploads/2018/01/14-markdown-formatting.png)

To find all available keyboard and markdown shortcuts, click the keyboard icon in the bottom right corner.

### Source editor![](/uploads/2018/01/18.png)

For advanced users, the full markdown source of your content body can be edited by clicking "view source" in the top right corner.

## Drafting and Publishing Content

The markdown editor fully supports creating draft content -- content that is not yet ready to be published to your production website -- as well as live, published content.

![](/uploads/2018/01/14-settings-button.png)

This can be changed by clicking the more options icon (`...`), and clicking "Set as draft"/"Set as published".

## New File Format

By default, Forestry is [configured to create all new content](/docs/settings/#new-file-format) using the markdown editor.

## Front Matter Templates

The left-hand side of the markdown editor is your document's front matter. Forestry provides a powerful templating system for front matter, called [Front Matter Templates](/docs/front-matter-templates/).