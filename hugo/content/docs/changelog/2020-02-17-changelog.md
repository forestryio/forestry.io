---
authors:
- team forestry
date: 2020-02-17
title: 2020/02/17 Changelog
summary: "Revamped Media Pagination \U0001F680 "

---
### Enhancements

* **Media pagination** performance improvements : large media libraries stored in Git and Git LFS should load much faster now! 🚀  
  External media providers Cloudinary and s3 do not benefit from this yet, but we're working on it!
* **Onboarding:** Invited users get a single email, and are now redirected to the signup page when they try to login without an active account. Confirmation email will now redirect directly to their organization if any instead of the global dashboard.

* **New [starter](/starters)**: Kross Hugo by Themefisher, a webdesigner's portfolio.

### Enterprise

* Support **Oauth for GitLab**
* Support for **Gitlab private repositories**
* Remove link to starters from import

### Sunset

* **Deployments**, as formerly announced are now deprecated: you can no longer deploy through Forestry. 😥  
  Don't be sad, our [recommended hosting solutions](/docs/hosting/) do an even better job at it!
