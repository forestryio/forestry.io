---
authors:
- team forestry
date: 2020-05-07
title: 2020/05/07 Changelog
summary: Kubernetes, grouped branches and a lot of fixes!

---
Our team has been quite busy in the latest weeks with major architectural changes that will help our application better scale, and face our growing number of users. 💗

### Enhancements

* **Pro customers**:
  * Faster deployments of app updates
  * Set default custom Docker image and protected previews
* **Group branches in the dashboard**: Branches from the same repository are now grouped, you can switch, remove, and transfer branches from a cleaner dashboard. _Note: this does not change the fact that branches have to be added from your Git repository first, before being imported to Forestry._
* **Snippets per section (opt-in)**: Teams looking to use different snippets per section have now the possibility to group snippets by mirroring the folder structure of their sections. For example, if you only want a snippet to appear in your posts section you can create a `.forestry/snippets/_posts/figure.snippet` or `.forestry/snippets/content/posts/figure.snippet` in your repository.
* **Instant Previews:** Ruby + Bundler 1 environments to prevent errors on the installation phase for projects bundled with bundler v1.x. In the advanced settings use the following images:`forestryio/ruby:2.6-bundler1` or `forestryio/ruby:2.6-bundler1-node10`
  _Tip: Remove your `Gemfile.lock` from your Git repository and switch to our default Ruby image if you want to use our default bundler v2.x env (faster dependencies install)._

### Fixes

* **Media:** Refresh view after a media upload or deletion.
* **Hugo:** Invite you to add an empty `config.toml` file at the root for projects using directory-based folders to bypass config check on import.
* **Netlify Large Media:** Swap netlify.com with the new netlify.app domain
* Yahoo! users get their invitation mail.

Thanks to all users that reported issues.
Our team has planed a bug squash next week, stay tuned for more fixes and enhancements!

Stay safe!
