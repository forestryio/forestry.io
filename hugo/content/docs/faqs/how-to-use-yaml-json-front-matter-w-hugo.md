---
title: How to use YAML or JSON for Front Matter with Hugo?
weight: 2
layout: single
publishdate: 2019-01-15 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2019-01-15 04:00:00 +0000
menu:
  faqs:
    weight: 2
    parent: FAQs

---
Forestry respects the configuration set in your `config` file. The variable you have to set to change the default Front Matter format is called `metaDataFormat`.

{{% code_tabs %}} {{% tab "toml" %}}

    ## Possible options "yaml", "toml" or "json"
    metaDataFormat = "toml"

{{% /tab %}} {{% tab "yaml" %}}

    ## Possible options "yaml", "toml" or "json"
    metaDataFormat: "yaml"

{{% /tab %}} {{% /code_tabs %}}