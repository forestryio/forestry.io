---
title: Versioning Large Files with Git LFS
description: ''
date: 2019-04-08 04:00:00 +0000
authors:
- dj-walker
publishdate: 2019-04-08 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/vineet-nangia-1287371-unsplash.jpg"
photo_credit: Vineet Nangia / Unsplash
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
I've written before about [the advantages of keeping content in version control](https://forestry.io/blog/why-we-created-a-git-backed-content-manager/). A quick recap of the benefits:

- Content is portable - just `git clone`
- Full content history is available; can rollback changes and recover earlier revisions
- Content updates can take advantage of the same workflows popular with code: *pull&nbsp;request→review→merge*

While the benefits are signficant, one of the major pain points of this solution arises when large non-text files are introduced to your content. Given that interesting content is often media-heavy, this can be a real problem. Enter [Git LFS](https://git-lfs.github.com/).

## Problems With Versioning Binary Files

Git is very good at handling text files efficiently, but not so great with files like images, videos, and other formats that can't be expressed in plaintext. Images don't compress as easily as text, and a large image will be orders of magnitude larger than a very long text file due to the simple fact that [images are more information dense than text](https://en.wikipedia.org/wiki/A_picture_is_worth_a_thousand_words).

Git is clever, but *it may not be as magic as you think*. Everything you commit to a repository *is in there somewhere*, so if you commit lots of big files, you will end up with a large repo that takes longer to clone and is slower at performing Git operations.


## Git Large File Storage

Git is a distributed version control system, meaning that there is no canonical "master" repository. Every cloned copy of the repo has equal importance in the eyes of Git.

Of course, it's convenient for teams to use Git in a more centralized manner; a copy of the repo hosted on a cloud provider such as GitHub serves as the canonical copy, the source of truth.

Git LFS takes advantage of this centralized pattern. Large files are stored in the cloud, and these files are referenced via pointers in local copies of the repo. When a `clone` or `pull` occurs, the appropriate version of the file is downloaded from the remote. Updates to a large file will still create multiple copies of the file, but these copies will be stored on the cloud and won't have to be downloaded by everyone who clones the repo.


## Setting up LFS in your git repo

Git LFS is easy to set up and works transparently on your repository. Once you configure Git LFS in your repo, you can continue to commit and push large files as you would normally.

1. Download and install the Git LFS extension [from the Git LFS website](https://git-lfs.github.com/).
2. Navigate to your repository and run `git lfs install`.
3. Run `git lfs track` followed by the file pattern you want. To track all PNG files for example, run `git lfs track "*.png"`
4. Commit the `.gitattributes` file as well as any existing files that are now tracked in LFS, and push the changes to your remote

That's it! You're now using Git LFS to handle your large binary files.

## Forestry Now Supports Git LFS

Forestry is now able to handle files stored in Git LFS correctly, so this is an excellent and simple solution if you want to use the image transformation functionality available in [Hugo](https://gohugo.io/content-management/image-processing/) or [Gatsby](https://www.gatsbyjs.org/packages/gatsby-image/). Since Git LFS works transparently on your repository, if you're already using the default media library setting of **Commit Media to Repository**, you don't need to do anything else to take advantage of Git LFS in Forestry.