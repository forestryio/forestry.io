---
title: Azure DevOps
weight: 4
publishdate: 2019-04-29 00:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2019-04-29 00:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Git Sync
    weight: 5

---

Forestry supports syncing with static sites stored in Azure DevOps repos.

Currently, in order to use Azure DevOps as a source provider, you must use [Manual Setup](/docs/git-sync/manual-setup) to set up the repository connection.

## Getting Started

To set up a site whose code is hosted on Azure DevOps, click the **Add Site** button on your dashboard, and select **Azure DevOps** as a source provider. You will notice that the **Quick Setup via OAuth** toggle automatically switches off, because Quick Setup is not available for Azure DevOps repos.

{{% markdownpartial "docs/manual-setup/addsite-and-settings.md" %}}

## Setting the Public Key

{{% markdownpartial "docs/manual-setup/azure-devops-publickey.md" %}}

After setting up the key, navigate back to the site settings in Forestry and click **Re-import from azuredevops**. If the key has been set up correctly, this will initiate an import of your site to Forestry.

## Setting up the Webhook

{{% markdownpartial "docs/manual-setup/azure-devops-webhook.md" %}}


