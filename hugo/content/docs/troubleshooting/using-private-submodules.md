---
title: Using Private Git Submodules with Forestry
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
publishdate: 2019-02-04T12:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
layout: single
date: '2019-05-02T00:00:00.000+00:00'
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
If your website uses submodules from private repos, you will need to configure your site to allow Forestry to access these submodules. For sites stored on **GitHub** or **GitLab**, our _quick setup_ flow will not grant the correct permissions. This flow adds a **deploy key** to your GitHub or GitLab repo, which only grants access to a _single repository and will not allow Forestry to install private submodules_.

To use a site containing private submodules with Forestry, you will need to change the way Forestry authenticates with Github/GitLab.

1. Remove Forestry.io **deploy key** from the repository settings, e.g. (`https://github.com/$username/$repository/settings/keys`)
2. In your Forestry site, head to **Settings** > **Repository**, show and copy the public key
3. Add your site's public key as a **user-level** key ([GitHub](https://github.com/settings/keys)/[GitLab](https://gitlab.com/profile/keys)). _This user must have access to these private submodules_.

{{% warning %}}
**This will give Forestry access to all of your user's repos.** If you would prefer not to do that, just create a new GitHub/GitLab user with access to all of the necessary repositories and add the key to their account.
{{% /warning %}}

{{% tip %}}
This is typically not an issue for projects stored on Bitbucket or Azure DevOps because you must add Forestry's public key to your user account (Azure Devops doesn't have deploy keys, and deploy keys are always read-only for Bitbucket repos). If you're having trouble installing private submodules in Bitbucket or Azure DevOps, ensure your user has access to all of the necessary repositories.
{{% /tip %}}
