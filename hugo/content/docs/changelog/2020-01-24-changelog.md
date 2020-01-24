---
authors:
- team forestry
date: 2020-01-24
title: 2020/01/24 Changelog
summary: "Faster section loading and fixes on blocks and included templates \U0001F389 "

---
### Enhancements

* **Sections** are now paginated and smartly lazy-loaded.  🚀🚀🚀 \
  🙏 Thanks to **Andrej Simeonov** for providing a testing repository with section containing more than 3000 documents! \
  _⚠️ Current limitation: lazy-loading is not supported on Safari 12. Upgrade or use another browser if you experience any issue._
* Enhance readability in select fields pointing to document references with long names.
* Enhance contrast on links in the WYSIWYM editor.
* [New Hugo starter: Casper3](https://forestry.io/starters/). \
  🙏 Thanks to **Jonathan Janssens** for porting [Casper theme](https://hugocasper3-demo.jonathanjanssens.com) to Hugo.

### Fixes

* **Defaults** value is now properly applied to blocks and included front matter templates.
* **Hidden fields** are now properly applied to blocks and included front matter templates
* **Fields types** are now properly applied to blocks and included front matter templates. \
  🙏 Thanks to **Nick Gracilla** for providing a test repository with included templates.
* **Relax domain constraint**:  you can now invite people using an email at _user@domain.education_ for instance.
* Fix a warning on number fields when `required` key was not properly set under `config`.