---
authors:
- team forestry
date: 2020-01-24
title: 2020/01/24 Changelog
summary: "Faster section loading and fixes on blocks and templates \U0001F389 "
draft: true

---
### Enhancements

* **Sections** are now paginated and smartly lazy-loaded.  🚀🚀🚀

  Thanks to **Andrej Simeonov** for providing a testing repository with section containing more than 3000 documents!

  _⚠ Current limitation: lazy-loading is not supported on Safari 12. Upgrade or use another browser if you experience any issue._
* Enhance readability in select fields pointing to document references with long names.
* Enhance contrast on links in the WYSIWYM editor.

### Fixes

* **Defaults** value is now properly applied to blocks and included front matter templates.
* **Hidden fields** are now properly applied to blocks and included front matter templates
* **Fields types** are now properly applied to blocks and included front matter templates.
* **Relax domain constraint**:  you can now invite people using an email at _user@domain.education_ for instance.
* Fix a warning on number fields when `required` key was not properly set under `config`.