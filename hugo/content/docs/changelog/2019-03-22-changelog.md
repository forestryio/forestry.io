---
authors:
- team forestry
title: 2019/03/22
date: 2019-03-22 03:00:00 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
menu:
  changelog:
    parent: Changelog
    weight: 1

---
## Enhancements

* **Front Matter Templates:** We smoothed out the creation flow for FMTs.
* **Refresh for Updates:** When important changes have been release, the CMS will now display a banner prompting the user to refresh.
* **Focused Commits:**  Forestry used to do the equivalent of `git add .` before committing. This would occasionally result in unwanted changes being pushed to repositories. We have switched to being more explicit about which files we add to the Forestry commits.

## Bug Fixes

* **Media Library:** An unnecessary decoding of filenames sometimes caused the Media Library to break (e.g. if there was a `%` in the name).
* **Instant Preview:** New tabs used to be empty, we've added a nice loading screen.