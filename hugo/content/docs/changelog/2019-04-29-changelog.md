---
authors:
- team forestry
title: 2019/04/29 Changelog
date: 2019-04-29T15:00:00.000+00:00
cta:
  headline: ''
  textline: ''
  calls_to_action: []
summary: Import Azure Devops repositories and date field enhancements.
---
## Features

* **Import Azure Devops Repositories:** Forestry is now supports importing from git repositories hosted on [Azure Devops](https://forestry.io/docs/git-sync/azure-devops/ "Git Sync: Azure Devops").

## Enhancements

* **Default Date Prop**
  * "date" fields are no longer added to new pages by default. If you want this behaviour to continue, you must add a "date" field to your front matter templates.
* **Date Picker vs Time Picker**
  * We now conditionally only show the datepicker, or the timepicker based on how your display format is configured.  
    E.g, if there was a `time display format` set, but no `date display format`... Only the time picker will be shown when the date field is clicked.
* **Date Export Format**
  * the `Export Format` is now configurable for each date field. If this is not set, the format will default to its engine default.
* **FMT docs links:** Added links to docs from inside each of the front matter template edit-field modals