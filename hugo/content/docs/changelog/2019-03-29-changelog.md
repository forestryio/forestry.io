---
authors:
- team forestry
title: 2019/03/29 Changelog
date: 2019-03-29 03:00:00 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
summary:
---
## Bug Fixes

* **Creating Documents:** Fixed a bug which told the users that they had no FMTs if the section had no valid templates listed.
* **Validation:** Fixed a widely used form validator that would sometimes blow up.

## Enhancements

* **Timezone Settings:**  Added some descriptive text clarifying the purpose of the timezone in Settings > General.
* **Front Matter Templates:** If a front matter template no longer exists, display a warning from the section's template config.
* **Front Matter Templates:** Display a different warning modal if a site has no templates vs if a section's templates no longer exist.
* **User Interface:** Increased the consistency of the user interface styling in a number of small ways.

## Beta

* **Front Matter Template UI:** We made a lot of progress this week on the new Front Matter Template forms. Improvements to errors, settings, and most of the nested fields interface.
* **Gatsby:** Don't automatically add "date" field onto new documents.