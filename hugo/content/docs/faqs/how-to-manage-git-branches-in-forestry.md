---
images:
  - "/uploads/2018/01/OGimage-01-docs-3x.png"
publishdate: 2021-02-16T04:00:00+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
layout: single
title: How to manage Git branches in Forestry?
categories:
  - CMS
headline: ""
description: Forestry CMS allows unlimited Git branch import.
menu:
  faqs:
    parent: FAQs
    weight: 2
---

A site is a branch with settings and permissions. 
You can import as many branches as you want in Forestry. 
You can set teams permissions for each branch on our **starter plan**.

### How do I import a new branch?

Click on the "Add Site" button to connect to your Git provider and pick up the branch you want to import. If this branch is a fork of another branch already configured for Forestry, given we store your settings in the repository, you won't have to reconfigure your sections, your templates, or your preview. The only thing is that you might need to do is to reconnect to your external media provider if you use one.

### How do I select a branch to work on?

Branches from a repository are grouped in the dashboard. Select the site named after the branch you imported in the select menu.

{{% pretty_screenshot img="/uploads/2020/05/select-branch.png" alt="Forestry dashboard displaying multiple imported branches" caption="A repository with multiple branches imported in Forestry" %}}

### How do I transfer a site?

[See how to transfer a site](/docs/faqs/transferring-site/)

### How do I remove a site?

In order to remove a site, first pich the branch name, then click on the dots options menu, and click on `remove site`. Forestry asks you for confirmation before removing your site.

{{% pretty_screenshot img="/uploads/2020/05/remove-site.png" alt="Forestry dashboard displaying multiple imported branches" caption="Click on the dots to display site actions" %}}

This won't delete your branch from the origin, you can reimport it whenever needed.

### Can I create a new branch?

No, branches have to be created by a developer or from your Git provider.

### Can I submit a pull-request?

No, Pull Requests can only be created from your Git provider.
