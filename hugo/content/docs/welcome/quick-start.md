---
title: Quick Start
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
weight: 2
menu:
  docs:
    parent: welcome
    weight: 2
---
This guide will walk you through importing your Hugo or Jekyll project into Forestry and getting setup in 15 minutes!

If you don't have an existing Hugo or Jekyll project, check out our [product tour](/docs/welcome/tour/) to see a demo project or start a new project with our [Static From Scratch guide](/docs/guides/static-from-scratch).

## Getting Started

[Sign up](https://app.forestry.io/signup/) to Forestry.io then add a new site from your [dashboard](https://app.forestry.io/dashboard).

![](/uploads/2018/01/import-site.png)

Choose your static site generator ([Jekyll](http://jekyllrb.com/) or [Hugo](http://gohugo.io/)), your Git Provider (GitHub,  GitLab or Bitbucket) and whether or not you want to access public or private repositories.

{{% warning "GitHub Permissions" %}}  
In order to import a site from GitHub, you will need [admin permissions](https://help.github.com/articles/repository-permission-levels-for-an-organization/) for the repository. This is because Forestry needs to add a webhook to your repository in order to watch for changes.
{{% /warning %}}

Choose your repository and branch. Forestry will automatically build a CMS from this source and commit back to it when your editors update content.
![](/uploads/2018/01/forestry-io-choose-repository.png)

{{% warning "Config file in sub Folder" %}}  
If your Jekyll or Hugo config file cannot be found in your project root, Forestry will ask you to provide the path to it.  
{{% /warning %}}

![](/uploads/2018/01/forestry-io-deployment-setup.png)