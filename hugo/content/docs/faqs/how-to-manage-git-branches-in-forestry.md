---
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
publishdate: 2020-05-09T22:00:00+00:00
authors:
- Forestry Team
expirydate: 2030-01-01T04:00:00.000+00:00
layout: single
title: How to manage Git branches in Forestry?
categories:
- CMS
headline: ''
description: Forestry CMS allows unlimited Git branch import.
textline: ''
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: 2
aliases: []

---
You can import as many branches as you want in Forestry, and you can set your teams permissions on each branch if you need to on our **starter plan**.

{{% pretty_screenshot img="/uploads/2020/05/git-branches-dashoard.png" alt="A site in Forestry dashboard with multiple branch imported" caption="A site with multiple branches imported in Forestry" %}}

### How do I import a new branch?

Click on the "Add Site" button to connect to your Git provider and pick up the branch you want to import. If this branch is a fork of another branch already configured for Forestry, given we store your settings in the repository, you won't have to reconfigure your sections, your templates, or your preview. The only thing is that you have to reconnect to your external media provider if you use one.

### How do I remove a branch?

Forestry groups all branches from the same repository. In order to remove a branch you have to select it, then click on the dots options menu, and then click on `remove branch`. Forestry will ask you for confirmation before we remove your branch.

**This won't delete your branch from the origin, you can still reimport it later.**

### Can I create a new branch?

You can't create new branches from within Forestry, those have to be created from your Git provider before being able to import them.

### Can I submit a pull-request?

Forestry only writes commits on the branch currently selected.  
Pull Requests have to be created from your Git provider.