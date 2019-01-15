---
title: How to use YAML with Hugo?
weight: 1
layout: single
publishdate: 2019-01-15 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2019-01-15 04:00:00 +0000
draft: true

---
Forestry respects the configuration set for your Front Matter format (JSON, TOML or YAML) set in you `config.yml` or `config.tml` file. 

{{% code_tabs %}} {{% tab "toml" %}}

    ## Possible options "yaml", "toml" or "json"
    metaDataFormat = "toml"

{{% /tab %}} {{% tab "yaml" %}}

    ## Possible options "yaml", "toml" or "json"
    metaDataFormat: "toml"

{{% /tab %}} {{% /code_tabs %}}