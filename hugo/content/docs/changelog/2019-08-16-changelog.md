---
authors:
- team forestry
date: 2019-08-16T14:11:11.000+00:00
title: 2019/08/16 Changelog
cta:
  headline: ''
  textline: ''
  calls_to_action: []
summary: Ruby 2.6 + Node, Conditional front matter fields, webp support, and more.

---
### Features

* **Conditional fields:**  
  Developers can now choose to hide front matter fields on document edition given a condition set through another toggle or select field.
* [**webp** files](https://caniuse.com/#feat=webp) thumbnails are now shown in the media library. Please note that Safari does not support webp for now.
* **Ruby 2.6 + Node 10:** a new preview environment for instant previews for projects using Jekyll and Node, needed. if you use the `jekyll-assets` plugin for instance.  
  Feel free to adapt the build command according to your setup.
* Latest **Hugo `0.57.1`** with cascading front matter support is already available on import.

### Bug Fixes

* Rubygems was updated in our Ruby preview environment to [prevent bundler version conflicts](https://bundler.io/blog/2019/05/14/solutions-for-cant-find-gem-bundler-with-executable-bundle.html) leading Instant Previews build to fail.

{{% warning "Database maintenance scheduled this week-end" %}}

[Read our status notice](https://status.forestry.io/incidents/v3b82vxh6yb5).

{{% /warning %}}

### Known issues

* Gridsome 0.6.x users have to add `GRAPHQL_ENDPOINT` to `/___graphql`, set host to "0.0.0.0" in their Gridsome config file and make sure to run `gridsome develop` in a npm script for Instant Previews to work.
* Hugo introduced modules in v0.56.0, we're not supporting them yet.

