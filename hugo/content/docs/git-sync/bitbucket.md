---
title: Bitbucket
weight: 3
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-08-27 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Git Sync
    weight: 4

---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [Bitbucket account](https://bitbucket.org/account/signup/) and repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quick start guide](/docs/quickstart/tour/), which contains guides and resources for building your first static site.
{{% /tip %}}

Forestry allows you to import your static site through Bitbucket repositories. This allows Forestry to sync any changes made by editors in Forestry to be comitted back to Bitbucket. This also allows developers to work on your website on their local machine, and have all changes by synced back to Forestry.

Currently, in order to use Bitbucket as a source provider, you must use [Manual Setup](/docs/git-sync/manual-setup) to set up the repository connection.

## Getting Started

To set up a site whose code is hosted on Bitbucket, click the **Add Site** button on your dashboard, and select **Bitbucket** as a source provider. You will notice that the **Quick Setup via OAuth** toggle automatically switches off, because Quick Setup is not available for Bitbucket repos.

{{% markdownpartial "docs/manual-setup/addsite-and-settings.md" %}}

## Setting the Public Key

{{% markdownpartial "docs/manual-setup/bitbucket-publickey.md" %}}

After setting up the key, navigate back to the site settings in Forestry and click **Re-import from Bitbucket**. If the key has been set up correctly, this will initiate an import of your site to Forestry.

## Setting up the Webhook

{{% markdownpartial "docs/manual-setup/bitbucket-webhook.md" %}}


