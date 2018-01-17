---
title: HTML Editor
weight: 3
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: editing
    post: <span class="button extra-small primary">BETA</span>
layout: single
---
{{% tip %}}
The HTML editor is currently a *beta* feature. For the best experience possible, please use the [markdown editor](/docs/editing/markdown-editor/).
{{% /tip %}}

Forestry has an *optional* WYSIWYG HTML editor that allows you to edit content files with the `.HTML` extension. Your content's [front matter](/docs/front-matter-templates/) is shown on the right, and your content's HTML body is shown on the left.

TK: image

## HTML formatting
The HTML editor is intended to enable for WYSIWYG editing of HTML *prose*. When selecting text, a floating toolbar appears to allow for basic text formatting.

TK: image

### Source editor
For advanced users, the full HTML source of your content body can be edited by clicking "view source" in the top right corner.

TK: image

## Drafting and Publishing Content
The HTML editor fully supports creating draft content -- content that is not yet ready to be published to your production website -- as well as live, published content.

This can be changed by clicking the more options icon (`...`), and clicking "Set as draft"/"Set as published".

## New File Format
Forestry can be [configured to create all new content](/docs/settings/#new-file-format) using the HTML editor.

## Front Matter Templates
The left-hand side of the HTML editor is your document's front matter. Forestry provides a powerful templating system for front matter, called [Front Matter Templates](/docs/front-matter-templates/).