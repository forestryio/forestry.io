---
title: HTML Editor
weight: 3
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Editing
    post: <span class="button extra-small primary">BETA</span>
    weight: 3

---
{{% tip %}}
The HTML editor is currently a _beta_ feature. For the best experience possible, please use the [markdown editor](/docs/editing/markdown-editor/).
{{% /tip %}}

Forestry has an _optional_ WYSIWYG HTML editor that allows you to edit content files with the `.HTML` extension. Your content's [front matter](/docs/settings/front-matter-templates/) is shown on the left, and your content's HTML body is shown on the right.

## HTML formatting

![](/uploads/2018/01/56.png)The HTML editor is intended to enable for WYSIWYG editing of HTML _prose_. When selecting text, a floating toolbar appears to allow for basic text formatting.

### Source editor

![](/uploads/2018/01/57.png)For advanced users, the full HTML source of your content body can be edited by clicking "view source" in the top right corner.

## Drafting and Publishing Content

The HTML editor fully supports creating draft content -- content that is not yet ready to be published to your production website -- as well as live, published content.

![](/uploads/2018/01/56-settings.png)This can be changed by clicking the more options icon (`...`), and clicking "Set as draft"/"Set as published".

## New File Format

Forestry can be [configured to create all new content](/docs/settings/#new-file-format) using the HTML editor.

## Front Matter Templates

The left-hand side of the HTML editor is your document's front matter. Forestry provides a powerful templating system for front matter, called [Front Matter Templates](/docs/front-matter-templates/).