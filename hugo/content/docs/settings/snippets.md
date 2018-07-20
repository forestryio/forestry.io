---
title: Snippets
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
authors: []
publishdate: 2018-07-19 16:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-07-20 02:58:59 -1100
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
weight: ''
aliases: []
menu:
  docs:
    parent: Settings & Configuration
    weight: 2

---

## Creating Snippets

To create a snippet, add a `.snippet` file to the `.forestry/snippets` directory in your repository. Fill that file with whatever text should be inserted. 

### Example

The Forestry.io websites has a Hugo shortcode for adding helpful tips to our blog posts and documentation. To make inserting these easier, we have added a [Tip Snippet](https://github.com/forestryio/forestry.io/blob/master/hugo/.forestry/snippets/tip.snippet "Tip Snippet") for inserting that shortcode. Here is the snippet:

**.forestry/snippets/tip.snippet**

    {{%/* tip */%}} Tip Body {{%/* /tip */%}}

## Using Snippets

You can access the list of available snippets by clicking the `{ }` snippet icon in the editor toolbar. 

![](/uploads/2018/07/snippet-toolbar.png)