---
title: Snippets
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-07-20 02:58:59 -1100
draft: true
menu:
  docs:
    parent: Settings & Configuration
    weight: 2
---

Snippets are pieces of content that can be inserted into the body of your

## Creating Snippets

You can create a snippet by simply adding a `.snippet` file to
the `.forestry/snippets` directory in your repository.

**.forestry/snippets/tip.snippet**

```
{{%/* tip */%}} Tip Body {{%/* /tip */%}}
```

{{% tip %}}

## Using Snippets

Snippets are available in any the Body editor and WYSIWYG Textareas.
