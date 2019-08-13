---
authors:
- team forestry
title: 2019/05/03 Changelog
date: 2019-05-03T11:00:00-03:00
cta:
  headline: ''
  textline: ''
  calls_to_action: []
summary: Access private Git submodules, document list sorting and more.
---
## Enhancements

* **Accessing Private Git Submodules:** Forestry now exposes the public key for sites that were setup using oauth. Users experiencing issues with private git submodules can copy the public key and set it as a user/organization level key.
* **Document List Sorting:** It is now possible to switch the sorting methods  between ascending and descending.

## Bug Fixes

* **Formatting Dates:** Fixed a bug with how some dates were exported to YAML
* **Normalizing Front Matter:** Fixed a bug that prevented fields defined in blocks, repeatable groups, and includes from being normalized.
* **Navigating from Errors:** Fixed a bug that prevented users from navigating away from the current page if there was a critical error.
* **Instant Previews:** Fixed a bug that caused Instant Previews to occasionally return HTTP 502 status code.