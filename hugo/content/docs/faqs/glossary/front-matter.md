---
title: Front Matter
weight: 1
layout: single
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
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