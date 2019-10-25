---
title: Using Private Submodules with Forestry
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
publishdate: 2019-02-04 12:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2019-05-02 00:00:00 +0000
headline: ''
description: ''
textline: ''
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu:
  troubleshooting:
    weight: 5
    parent: Troubleshooting

---
If your website uses submodules from private repos, you will need to configure your site to allow Forestry to access these submodules. For sites stored on **Github** or **GitLab**, our _quick setup_ flow will not grant the correct permissions. This flow adds a **deploy key** to your GitHub or GitLab repo, which only grants access to a single repository and will not allow Forestry to install private submodules.

To use a site containing private submodules with Forestry, you will need to change the way Forestry authenticates with Github/GitLab by removing this deploy key and instead adding your site's public key as a **user-level** key (assuming your user has access to these private submodules.) In your Forestry site, head to **Settings** > **Repository** and copy the public key to add it to your Github or GitLab user account.

{{% pretty_screenshot img="/uploads/2019/05/oauth-public-key.png" %}}

{{% warning %}}
**This will give Forestry access to all of your user's repos.** If you would prefer not to do that, just create a new Github/GitLab user with access to all of the necessary repositories and add the key to their account.
{{% /warning %}}

{{% tip %}}
Note that this is typically not an issue for projects stored on Bitbucket or Azure DevOps because you must add Forestry's public key to your user account (Azure Devops doesn't have deploy keys, and deploy keys are always read-only for Bitbucket repos.) If you're having trouble installing private submodules in Bitbucket or Azure DevOps, ensure your user has access to all of the necessary repositories.
{{% /tip %}}