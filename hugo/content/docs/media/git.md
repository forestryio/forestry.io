---
title: Storing Media in Git
weight: 2
date: 2018-05-25 20:00:00 +0000
menu:
  docs:
    name: Git
    parent: Media
    weight: 2

---
Git-based media storage is the default media storage option in Forestry. With this option, media is committed to your git repo, just like the rest of your content.

## Media Files Present in Git History

One advantage of using this storage option is that media files are stored in your repo. If something is accidentally deleted, it can easily be recovered from the project's commit history.

## Causes Large Repos

If you upload a lot of media to your site, storing it all in your repo can cause a degradation in performance. Since the total size of your repository will increase, it will take longer for developers to clone the repo. This will also slow down your deployments, as your media will be redeployed every time a change is published.