---
authors:
- team forestry
title: 2019/05/10 Changelog
date: 2019-05-10T13:00:00.000+00:00
cta:
  headline: ''
  textline: ''
  calls_to_action: []
summary: Front matter templates enhancements and bug fixes.
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

## Bug Fixes

* **Creating Documents/FMTs:** We more robustly handle not-yet-comitted files. This fixed an issue where, under _very_ precise timing, newly created documents and FMTs would not be committed to the repository.
* **Date Picker fixes:** There were some issues with the datepicker behaving in unexpected ways when using a different export timezone (in general settings) from a user's local timezone. There were also some issues using unexpected display & export date formats.

## Forestry Roadmap

Do you have ideas about what Forestry should build next? We'd love to hear them! Checkout the our [public roadmap](https://portal.productboard.com/forestry/ "Forestry Roadmap") portal to vote on upcoming features and submit your own request.