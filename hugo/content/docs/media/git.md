---
title: Storing Media in Git
weight: 2
date: '2018-05-25T20:00:00.000+00:00'
publishdate: 2017-12-31T23:00:00+00:00
menu:
  docs:
    name: Git
    parent: Media
    weight: 2

---
Git-based media storage is the default media storage option in Forestry. With this option, images are committed to your Git repository, just like the rest of your content.

## Media Files Present in Git History

One advantage of using this storage option is that media files are stored in your repository. If something is accidentally deleted, it can easily be recovered from the project's commit history.

## Git LFS

If you upload a lot of media to your site, storing it all in your repo can cause a degradation in performance. To help with this, consider [using Git LFS to track media files](https://forestry.io/blog/versioning-large-files-with-git-lfs/). Forestry fully supports Git LFS when storing media in your **GitHub** repositories.

***

{{% warning "Known limitations" %}}

Forestry Media Library don't support media folders, audio or video files uploads.

Images stored in GitLab and Bitbucket private repositories will not be shown in Forestry due to current limitations: [https://gitlab.com/gitlab-org/gitlab-ce/issues/45149](https://gitlab.com/gitlab-org/gitlab-ce/issues/45149 "Deploy Tokens API")

Although GitHub supports LFS, GitHub pages does not. Tracking images with LFS will cause GitHub pages to generate empty files.

{{% /warning %}}