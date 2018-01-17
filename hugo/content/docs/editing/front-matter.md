---
aliases:
- /docs/faq/how-ui-elements-are-determined-from-front-matter/
- /docs/site-configuration/front-matter-templates/
title: Front Matter
weight: 4
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: editing
layout: single
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

Forestry provides a simple and intuitive editor for Front Matter, for both [Markdown](/docs/editing/markdown-editor/) and [HTML documents](/docs/editing/html-editor/).

TK: image of the editor

Forestry offers a variety of UI elements called [*Front Matter Fields*](/docs/settings/fields/) that allow editors to easily update Front Matter. When importing your site, Forestry will try to choose the best *Front Matter Field* for each *Front Matter value*.

{{% tip %}}
You can customize your *Front Matter Fields* easily using Forestry's *[Front Matter Templates](/docs/settings/front-matter-templates/)*, allowing you to make certain fields required, set up restrictions or default values, add descriptions, and much more!
{{% /tip %}}