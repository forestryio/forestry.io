---
title: 2018/09/07 Changelog
authors:
- team forestry
date: 2018-09-07 18:14:55 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
menu:
  changelog:
    name: 2018/09/07
    weight: 20
    parent: Changelog

---
## Features

* **Datafile Sections:** Sections will now import data files (`.json`, `.yaml`, and `.toml`). This is a replacement for the current method of importing datafiles. Visit our [docs](https://forestry.io/docs/editing/data-files/ "Forestry.io Datafile Docs") to learn more.
  * All new sites will have this feature enabled by default.
  * Users with existing VuePress sites will also have this feature enabled.
  * Existing Jekyll and Hugo sites will continue to use the old method of importing datafiles. You may opt-in to the new importing method from the settings page for your site.

## Bug Fixes

* **Admin Path:** Fixed bug preventing a site’s admin path in the general settings page to be cleared.
* **Edit Template of a Document:** When a document was using the default FMT of it’s section, the _Edit Template_ link was not a valid URL.
* **Manual Import:** Fixed issue that meant if you deleted a site’s ssh key and then deleted the site, you were unable to re-import that site afterwards.