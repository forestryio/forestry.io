---
authors:
- team forestry
title: 2019/05/17 Changelog
date: 2019-05-17T00:00:00-03:00
cta:
  headline: ''
  textline: ''
  calls_to_action: []
summary: Various bug fixes.
---
## Bug Fixes

* **Text Fields:** When exporting front matter to YAML, Forestry now makes sure quotes are added around numbers that are in Text Fields.   
  _Note:_ if the number is in a Number Field it will not be wrapped with quotes.
* **Cloudinary:** Fixed an issue where uploading the same image twice would overwrite the existing image without warning. It now creates a duplicate. This matches the existing behaviour when using Git as the media storage provider.