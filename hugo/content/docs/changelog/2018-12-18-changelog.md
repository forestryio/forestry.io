---
title: 2018/12/18 Changelog
authors:
- team forestry
date: 2018-12-18 16:54:05 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
menu:
  changelog:
    name: 2018/12/18
    parent: Changelog
    weight: 6

---
## Enhancements

* **Build Commands UI:** It is now possible to edit the build commands for publishing and preview your site from inside the CMS. Go to `Settings > Build` to edit your configuration.
* **Setup Checklist:** In order to help users in setting up their site, we've added a Setup Checklist to the sidebar. This checklist guides users through the basic steps of configuring a site with Forestry.
* **Help Banner in Settings:** We've added a help banner to the top of the Sidebar, Media, and Deploy tabs in the Settings. These banners provide some context around these tabs purpose and links to the relevant documentation.
* **Front Matter Field Config:** The form for editing a front matter field has been moved to a modal from the right panel.
* **Creating Pages:** We've started beta testing (50%) a new flow for creating pages which lets users edit the front matter and body of a page before submission. This new flow addresses several issues:
  * _Filenames:_ Until now we have assumed that the filename for a new page should be based on its title field. While this is often the case, not all pages have a "title" field. The new flow prompts users to manually enter a filename for a page if a "title" field is not present.
  * _Form Errors:_ In the old flow it was possible for pages to be created that failed their front matter template's validation. This issue could result in a site failing to build because of invalid data in a new page's front matter. With the new flow it is no longer possible to create an invalid page.

## Bug Fixes

* **Custom Logo in Remote Admin:** Fixed an issue which prevented SVGs custom logs from showing up in the remote admin.