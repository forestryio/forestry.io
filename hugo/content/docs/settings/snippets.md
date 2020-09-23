---
title: Snippets
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
authors: []
publishdate: 2018-07-20T03:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
layout: single
date: '2018-07-20T13:58:59.000+00:00'
headline: ''
description: ''
textline: ''
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: 
aliases: []
menu:
  docs:
    parent: Settings & Configuration
    weight: 6

---
**Snippets** in Forestry are pre-defined chunks of text that can be inserted into your content. You can put anything in a snippet that you might normally insert into your content, but they are especially useful in conjunction with [shortcodes](https://gohugo.io/content-management/shortcodes/) in Hugo or certain [Liquid tags](https://jekyllrb.com/docs/plugins/tags/) in Jekyll.

## Creating Snippets

To create a snippet, add a `.snippet` file to the `.forestry/snippets` directory in your repository. This file should contain the content that you wish to be inserted when your snippet is applied in the editor. You can also embed Markdown in your snippets.

### Examples

The Forestry.io website has a Hugo shortcode for adding helpful tips to our blog posts and documentation. To make inserting these easier, we have added a [Tip Snippet](https://github.com/forestryio/forestry.io/blob/master/hugo/.forestry/snippets/tip.snippet "Tip Snippet") for inserting that shortcode. Here is the snippet:

**.forestry/snippets/tip.snippet**

    {{%/* tip */%}} Tip Body {{%/* /tip */%}}

{{% tip %}}
At this time, there is no specific convention for identifying which parts of your snippet can be customized when the snippet is applied inside the editor. We recommend simply using descriptive placeholders, such as "Tip Body" in the example above.
{{% /tip %}}

Our Markdown editor does not [support Markdown tables](https://portal.productboard.com/forestry/1-forestry-io-roadmap/c/10-support-tables-in-markdown-editor) yet. So you might want to provide a Markdown table starter to help your editors.

A simple **.forestry/snippets/table.snippet** file:

```md
### Table title

| Header | Header | Header  |
| ------ | ------ | ------- |
| Cell   | Cell   | Cell   |
| Cell   | Cell   | Cell   |
| Cell   | Cell   | Cell   |
```

## Using Snippets

You can access the list of available snippets by clicking the `{ }` snippet icon in the editor toolbar.

![](/uploads/2018/07/snippet.png)

Clicking on a snippet in the list will insert its contents into your document at the cursor position.