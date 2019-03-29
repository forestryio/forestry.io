---
title: 2018/08/28 Changelog
authors:
- team forestry
date: 2018-08-28 14:30:53 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
menu:
  changelog:
    name: 2018/08/28
    weight: 23
    parent: Changelog

---
## Bug Fixes

* **Git Connection:** We switched from oAuth to SSH keys for connecting to your repositories. This will stabilize the connection to your repo. Visit our blog to learn how to [Migrate to Key-based Authentication](https://forestry.io/blog/migrating-to-key-based-authentication/ "Migrating to Key-based Authentication").
* **Reset Password:** With the introduction of ReCaptcha to our reset password page, it is no longer possible to reset your password from the [Remote Admin](https://forestry.io/docs/editing/remote-admin/ "Remote Admin"). Instead, we now link to the Forestry.io domain.
* **Select Field:** Fixed issue where empty select fields output `null` to front matter.