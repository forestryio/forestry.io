---
title: Front Matter
weight: 1
layout: single
publishdate: 2017-12-31T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: '2020-06-11T04:00:00.000+00:00'
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  faqs:
    parent: Glossary
    weight: 6

---
Front matter is structured metadata that is stored at the top of a content file, and is identified by delimiters before and after the metadata.

This metadata is available to your templates when generating your site, and allows you to build robust, dynamic features into your static site.

Depending your [static site generator](/docs/faqs/glossary/static-site-generators/), Front Matter can be formatted as `YAML`, `TOML`, or `JSON`.

## Examples

### YAML
```yaml
---
title: My New Post
date: 2018-07-01 04:00:00 +0000
images:
- /uploads/2018/07/01/twitter_card.png
- /uploads/2018/07/01/banner.png
layout: default
---
```

### TOML
```
+++
title = "My New Post"
date = "2018-07-01 04:00:00 +0000"
images = ["/uploads/2018/07/01/twitter_card.png", "/uploads/2018/07/01/banner.png"]
layout = "default"
+++
```

### JSON
```
{
    "title": "My New Post",
    "date": "2018-07-01 04:00:00 +0000",
    "images" [
        "/uploads/2018/07/01/twitter_card.png",
        "/uploads/2018/07/01/banner.png"
    ],
    "layout": "default"
}
```