---
authors:
- team forestry
title: Changelog 2019/05/10
date: 2019-05-10T10:00:00-03:00
cta:
  headline: ''
  textline: ''
  calls_to_action: []
draft: true

---
## Enhancements

* **Front Matter Templates:** removing/renaming a template via git will now delete the template from Forestry.
* **Include Field**
  * _Validation:_ The FMT editing form now validates that all Include Fields reference front matter template that exist. 
  * _Display:_ When an Include field references a non-existent FMT a placeholder block will be shown to inform admins/develops of the error. 
* **Blocks Field**
  * _Validation:_ The FMT editing form now validates that all templates listed in a Block Fields exist.
  * _Adding Blocks:_ The blocks field dropdown disables any invalid template eferences when adding a new block to a page.
  * _Display:_ If a block references a template that does not exist, a placeholder is shown explaining the problem.