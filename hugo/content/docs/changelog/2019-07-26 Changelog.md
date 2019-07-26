---
authors:
- team forestry
date: 2019-07-26 5:28:56  -0300
title: 2019/07/26 Changelog
cta:
  headline: ''
  textline: ''
  calls_to_action: []
draft: true

---
### Bug fixes

* **Folders synchronization**: Renamed, moved and deleted folders outside of Forestry are now properly synched. Content sections will auto update after every import.
* **Instant Previews**:
  * Default command for JS-based static site generators should be run as an npm script (`npm run forestry:preview` by default now). As the different cli packages are not installed globally, this will avoid errors when Gatsby or VuePress binaries were not found.
  * Environment variables like `GIT_LFS_SKIP_SMUDGE` are now properly sent to instant previews.
* **Git LFS**: Fix media path and make sure massive bulk uploads are now properly chunked.

### Enhancements

* **Hugo**: Latest Hugo version (`0.56.0`) is available on site import and for Instant Previews.
* **Instant Previews**:
  * A new `Ruby 2.6 + Node 10` image for people using Jekyll and node packages or plugins like jekyll-assets is available.
  * **Hibernation** (beta): in order to save resources, preview environment will be put to sleep 2 hours after the last activity on a site, and will be automatically put out of sleep on new activity.
* **Site activity**: Preview restarts are now listed.

### Deprecation

* **FTP Deployments**: New imported sites can not build and publish through FTP anymore.