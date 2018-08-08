---
title: 2018/08/08 Changelog
date: 2018-08-08 05:25:47 -1100
aliases: []
type: ''
authors: []
publishdate: 2018-08-08 06:00:00 -1100
expirydate: ''
layout: ''
categories: []
headline: ''
description: ''
textline: ''
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
weight: ''
images: []
menu:
  changelog:
    weight: 1
    parent: Changelog
draft: true

---
## Features

* **New Section Types:**
  * **Heading:** Organize your content in the sidebar. 

    ```yaml
    sections:
    - type: heading
      label: Docs
    ```
  * **Document:** Link to a single document from the sidebar

    ```yaml
    sections:
    - type: document
      label: Change Log
      path: CHANGELOG.md
    ```

## Enhancements

* **Front Matter Errors:** Improved the language and visibility of error messages for _Blocks_, _Groups_, and _Group Lists_.

## Bug Fixes

* **Section Configuration:** Fixed bug causing section's to shuffle after saving.

## Performance

* **Settings:** Isolate the request for timezones to the General tab in order to improve load times for the other settings tabs.