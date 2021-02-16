---
title: How to use YAML or JSON for Front Matter with Hugo?
weight: 8
layout: single
publishdate: 2019-01-15T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: '2019-01-15T04:00:00.000+00:00'
menu:
  faqs:
    weight: 6
    parent: FAQs

---
Forestry respects the configuration set in your Hugo `config` file. The variable you have to set to change the default Front Matter format is called `metaDataFormat`.

{{% code_tabs %}} {{% tab "toml" %}}

    ## Possible options "yaml", "toml" or "json"
    metaDataFormat = "toml"

{{% /tab %}} {{% tab "yaml" %}}

    ## Possible options "yaml", "toml" or "json"
    metaDataFormat: "yaml"

{{% /tab %}} {{% /code_tabs %}}

{{% warning %}}
This option has been deprecated in recent Hugo versions but **Forestry still relies on this option so keep it in your config file**. In recent Hugo versions, the format is now based on the front matter format used in your [archetypes](https://gohugo.io/content-management/archetypes/). It's useful to know if you use Hugo to create new content from the command line.
{{% /warning %}}
