---
title: How to use YAML or JSON for Front Matter with Hugo?
weight: 2
layout: single
publishdate: 2019-01-15T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: '2019-01-15T04:00:00.000+00:00'
menu:
  faqs:
    weight: 2
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

This option has now been deprecated in Hugo. Front matter format is now based on the front matter of your archetypes.