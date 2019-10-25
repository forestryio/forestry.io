---
title: 2018/10/05 Changelog
authors:
- team forestry
date: 2018-10-05 18:47:44 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
menu:
  changelog:
    name: 2018/10/05
    parent: Changelog
    weight: 9

---
## Bug Fixes

* **VuePress Publishing:** Fixed bug preventing publishing to VuePress sites when the build directory was not set in the config.
* **Title Hashes:** Fixed issue where having a non-string title for document would cause the document list to blow up.

## Improvements

* **Sidebar Config:** Improved the drag and drop experience when re-ordering sections.

## Performance

* **Initial CMS Load:** Removed duplicate requests that slowed the initial page load.
* **Media & Pages:** Optimized queries to greatly increase load times.