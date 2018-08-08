---
title: How do I set fallback/hidden values for Front Matter?
weight: 1
layout: single
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  faqs:
    parent: FAQs
    weight: 8

---
Adding [Front Matter](/docs/editing/front-matter) to your content allows you to add variables and configuration to your pages that can be used in your templates.

Often times, you will find that you are repeating the same front matter values across many files. For example, setting the same layout, or adding the same author across many posts.

Or you may want to provide a default value for optional fields.

In this scenario, it's possible to provide a fallback or hidden value.

## Fallback/Hidden Values in Hugo
To set a fallback or hidden value for front matter in Hugo, you can use the [`.Param` template function](https://gohugo.io/functions/param/).

This will look for the value inside the current page, and if not found, will look for the value in your Site Params, stored in your config file.

For example, setting up a social image:

Inside `config.toml`
```toml
[params]
social_image = "/uploads/2018/01/26/og_image.jpg"
``` 

Inside `content/posts/example-post.md`
```toml
+++
social_image = "/uploads/2018/01/31/og_image_example-post.jpg"
+++
```

Inside `layouts/default/single.html`
```
<head>
  <meta property="og:image" content="{{ .Param "social_image }}" />
  ...
</head>
```

## Fallback/Hidden Values in Jekyll
To set a fallback or hidden value for front matter in Hugo, you can use [Front Matter Defaults](https://jekyllrb.com/docs/configuration/#front-matter-defaults).

This allows you to specify default values for files based on a scope. For example, if you wanted to set a default author for all posts in the `_posts` collection:

In `_config.yml`
```yaml
defaults:
  -
    scope:
      path: "" # an empty string here means all files in the project
      type: "posts"
    values:
      layout: "post"
      author: "Scott Gallant"
```

Inside `_layouts/post.html`:
```
<div class="author">{{ page.author }}</div> 
```