---
authors:
- team forestry
date: 2020-05-06
title: 2020/05/07 Changelog
summary: ''
draft: true

---
### Enhancements

* **Faster deployments for Pro customers**: Our Cloud and on-premise application runs now on Kubernetes 🚀
* **Group branches in the dashboard**: Branches from the same repository are now grouped in the dashboard, you can switch, remove, and transfer branches. This does not change the fact that branches have to be added from your Git repository first, before being imported to Forestry.
* **Snippets per section (opt-in)**: Teams looking to use different snippets per section have now the possibility to group snippets by mirroring the folder structure of their sections. For example, if you only want a snippet to appear in your posts section you can create a `.forestry/snippets/_posts/figure.snippet` or `.forestry/snippets/content/posts/figure.snippets` in your repository.

### Fixes

* **Media:** Refresh view after a media upload or deletion.
* **Hugo:** Invite you to add an empty `config.toml` file at the root for projects using directory-based folders to bypass config check on import. 
* **Netlify Large Media:** Swap netlify.com with new netlify.app domain 
* Yahoo! users are now able to use to get invitations mail.