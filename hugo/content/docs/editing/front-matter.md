---
aliases:
- "/docs/faq/how-ui-elements-are-determined-from-front-matter/"
- "/docs/site-configuration/front-matter-templates/"
title: Front Matter
weight: 4
publishdate: 2017-12-31T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: '2020-06-11T04:00:00.000+00:00'
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Editing
    weight: 3

---
## What is Front Matter?

Front Matter is structured metadata that lives at the top of your [content files](/docs/faqs/glossary/content-files/) that allows you to add custom variables to your pages. Depending on your static site generator, Front Matter can be defined in a variety of formats including [YAML](/docs/faqs/glossary/front-matter#yaml), [TOML](/docs/faqs/glossary/front-matter#toml), and [JSON](/docs/faqs/glossary/front-matter#json).

For example, YAML Front Matter may look like this:

```yaml
---
title: Homepage
---
## Welcome to the homepage!
Thanks for visiting our site!
```

Forestry provides a simple and intuitive editor for Front Matter, for both [Markdown](/docs/editing/markdown-editor/) and HTML documents.

![](/uploads/2018/01/14.png)

Forestry offers a variety of UI elements called [_Front Matter Fields_](/docs/settings/fields/) that allow editors to easily update Front Matter. When importing your site, Forestry will try to choose the best _Front Matter Field_ for each _Front Matter value_.

{{% tip %}} You can customize the _Front Matter Fields_ of a page using Forestry's [_Front Matter Templates_](/docs/settings/front-matter-templates/). These templates allow fields to be ordered and configured in a variety of ways such as making them required, setting default values, adding descriptions, and much more! {{% /tip %}}