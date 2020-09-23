---
aliases:
- "/docs/faq/github-organization-access/"
title: Connecting to a Source Provider
weight: 1
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-08-27 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Git Sync
    weight: 1

---
Forestry saves changes to your content by committing back to your Git repository. Adding a site to Forestry first requires that the source code for your site is available through one of our supported source providers. When setting up a new site in Forestry, you will be prompted to connect to your preferred source provider to link your repository.

Currently, Forestry supports the use of **Github**, **GitLab**, **Bitbucket**, and **Azure DevOps Repos** as source providers.

## Quick Setup via OAuth

This is the recommeded way to connect your repository. Forestry will connect to your Git provider and automatically configure your repository to work with Forestry.

{{% pretty_screenshot img="/uploads/2019/04/add-site-provider.png" %}}

After selecting your Git provider, ensure the **Quick Setup via OAuth** toggle is activated and click **Next**. You will be prompted to authenticate with the selected provider if not already logged in.

{{% warning %}}
At this time, Quick Setup is only available for Github and GitLab providers.
{{% /warning %}}

### Detailed Quick Setup Guides

* [Github](/docs/git-sync/github/)
* [GitLab](/docs/git-sync/gitlab/)

## Manual Setup

You may opt to manually setup your source provider by deactivating the **Quick Setup via OAuth** toggle. This toggle will automatically deactivate when selecting a source provider that does not currently support Quick Setup.

With manual setup, you will need to specify the repository URL to Forestry, and add Forestry's SSH key and webhook to your source provider.

[Read the full manual setup documentation](/docs/git-sync/manual-setup/)