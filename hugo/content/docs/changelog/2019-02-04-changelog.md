---
title: 2019/02/04 Changelog
authors:
- team forestry
date: 2019-02-04 12:00:00 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
menu:
  changelog:
    name: 2019/02/04
    parent: Changelog
    weight: 4

---
## Enhancements

* **Commit Batching:** Queued commits are now grouped together to improve processing time. Commit messages show all of the authors who contributed to a commit.

## Layout

* **Settings:** Moved build tab contents into the Preview tab and Deploy tab.
* **Settings:** Settings tabs are now vertical.

## Bug Fixes

* **Missing Output Directory:**  Return a helpful error message when your site is missing its output directory.
* **Remote Admin:** Fixed an issue that would prevent admins from accessing admin-features in the remote admin.
* **Media:** Fixed an issue where svgs without XML tag wouldn't show up in the media library.
* **Media:** Fixed an issue where media added to your repo wouldn't immediately import into Forestry.
* **Blocks:** Fixed drag and drop in nested blocks.
* **Passwords:** Require password verification for in-app password reset.