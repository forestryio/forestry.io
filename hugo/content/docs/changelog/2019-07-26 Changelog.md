---
authors:
- team forestry
date: 2019-07-26 5:28:56  -0300
title: 2019/07/26 Changelog
cta:
  headline: ''
  textline: ''
  calls_to_action: []

---
### Bug fixes

* **Folders synchronization**: Renamed, moved and deleted folders outside of Forestry are now properly synched. Content sections will auto update after every import.
* **Instant Previews**:
  * [Default command for JS-based static site generators should be run as an npm script](/docs/previews/build-commands/#using-npm-scripts-as-build-commands) (`npm run forestry:preview` by default now). As the different cli packages are not installed globally in the preview environment, this will avoid errors when Gatsby or VuePress binaries were not found.
  * Environment variables like `GIT_LFS_SKIP_SMUDGE` are now properly sent to instant previews.
* **Git LFS**: Fix media path and batch massive media downloads into chunks.

### Enhancements

* **Hugo**: Latest Hugo version (`0.56.0`) is available on site import and for Instant Previews.
* **Instant Previews**:
  * A new `Ruby 2.6 + Node 10` image for people using Jekyll and node packages or plugins like jekyll-assets is available through custom image, set `forestryio/ruby:2.6-node10` as Docker image in advanced fields settings.\`
  * **Hibernation** (beta): in order to save resources, preview environment will be put to sleep 2 hours after the last activity on a site, and will be automatically put out of sleep on new activity.

### Deprecation

* **FTP Deployments**: New imported sites can not build and publish through FTP anymore, option will be remove in September.  
  [**Read the sunset notice**](/docs/sunset/deployments/)