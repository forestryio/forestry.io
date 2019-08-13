---
authors:
- team forestry
date: 2019-06-28T15:00:00.000+00:00
title: 2019/06/28 Changelog
cta:
  headline: ''
  textline: ''
  calls_to_action: []
summary: "Faster instant previews, SAML/SSO for pro plans, bug fixes and more." 
---
## Features

* **Custom Preview Environments:** Preview times getting you down? You can now pick from 4 preconfigured preview environments, or even _bring your own._ Some users have already seen preview server startup times go form 10 minutes to 10 seconds.
* **SAML / SSO:** Pro plans can now use SSO to allow their users to log in. [https://forestry.io/docs/pro/features/single-sign-on/](https://forestry.io/docs/pro/features/single-sign-on/ "https://forestry.io/docs/pro/features/single-sign-on/")

## Enhancements

* **Preview Server Logs:** Having a hard time reading the preview logs? Look again! We split out the preview logs into separate steps to help make reading and understanding them easier than ever!
* **Preview Button Status:** Tired of clicking on the Preview button only to realize the server is still booting? So were we. Now the preview button clearly shows the current state of the preview server.
* **Preview Settings:** Horrifying confused by our settings form? You're not alone! We've reorganized our settings to make your life better. It's not perfect, but my dignity has been restored a little :)
* **Front Matter Fields:** Improved the design of the UI that is shown when a front matter field fails to render.
* **Welcome to your CMS:** Changed the text on the welcome page. It used to say "your _new_ content manager" and that was weird.

## Bug Fixes

* **Preview Button:** Fixed issue where the preview button would occasionally become permanently disabled after uploading media.
* **Front Matter Fields:** Fixed an issue where you couldn't use an include field's fields as a templates "display field".
* **Organization Creation:** Fixed an issue where you could click "Create Organization" multiple times which would create duplicate organizations.