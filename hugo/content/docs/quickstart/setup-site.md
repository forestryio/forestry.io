---
title: Setup Your Site
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
weight: 2
date: 2017-12-07 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Quick Start
    weight: 2

---
This doc will walk you through:

1. Setting up your site repository with Forestry
2. Making your first commit by publishing some changes

---

## Import Site from Repo

[Sign up](https://app.forestry.io/signup/) for a free account with Forestry.io then add a new site from your [dashboard](https://app.forestry.io/dashboard).

If you **Don't** have a Jekyll or Hugo site, fork the [Jekyll demo site](https://github.com/forestryio/belkirk-jekyll-demo) and check out the [product tour](/docs/quickstart/tour/).

![](/uploads/2018/01/import-site.png)

Choose your static site generator ([Jekyll](http://jekyllrb.com/) or [Hugo](http://gohugo.io/)), your Git Provider (GitHub,  GitLab or Bitbucket) and your repository type (public or private).

{{% warning "GitHub Permissions" %}}  
In order to import a site from GitHub, you will need [admin permissions](https://help.github.com/articles/repository-permission-levels-for-an-organization/) for the repository. This is because Forestry needs to add a webhook to your repository in order to watch for changes.
{{% /warning %}}

Choose your repository and branch. Forestry will automatically build a CMS from this source and commit back to it when your editors update content.
![](/uploads/2018/01/forestry-io-choose-repository.png)

{{% warning "Config file in sub Folder" %}}  
If your Jekyll or Hugo config file cannot be found in your project root, Forestry will ask you to provide the path to it.  
{{% /warning %}}

### Setup Deployment (optional)

When editors publish changes to content, Forestry can (optionally) build and deploy your site.

By default, Forestry will commit changes back to your source repo but also supports deployment to AWS, FTP, GitHub pages, etc.

For now, just configure Forestry to **commit back to our repo**.  You can always go back and update these settings in the future.

![](/uploads/2018/01/forestry-io-deployment-setup.png)

Congratulations! Now your CMS is sync'd with your source code and your editing team can start making commits.  Depending on the size of your site, Forestry might take a few minutes to import and parse your project.

## Document State

Go into a post or page, **edit some text** and you will see "Unsaved Changes" at the top of your document.

![](/uploads/2018/01/unsaved changes.png)

## Preview Changes

Click preview to view your changes in a new tab.

![](/uploads/2018/01/preview.png)

## Make your first commit

Click the publish button to save changes and make a Git commit.

![](/uploads/2018/01/publish-button.png)

The page should become **up-to-date** with your repository again.

![](/uploads/2018/01/up-to-date.png)

Go to your Git repo and look at your commit history.  You should see your updates from Forestry there. Committing has never been easier!

![](/uploads/2018/01/commits-1.png)
