---
title: Using Private Submodules with Forestry
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
publishdate: 2019-02-04 12:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2019-02-04 12:00:00 +0000
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
If your website uses submodules from private repos, you will need to configure your site to allow Forestry to access these submodules. For sites stored on **GitHub** or **GitLab**, our _quick setup_ flow will not grant the correct permissions. This flow adds a **deploy key** to your GitHub or GitLab repo, which only grants access to a single repository and will not allow Forestry to install private submodules.

To use a site containing private submodules with Forestry, you must [manually import](/docs/git-sync/manual-setup/) the site. If you've already imported the site using the _quick setup_ flow, remove the site and re-import it manually using our [manual setup instructions](/docs/git-sync/manual-setup/). Then, grab the public key from **Settings > Repository** and add it to your GitHub or GitLab user account instead of creating a deploy key in the repository.

{{% warning %}}
**This will give Forestry access to all of your user's repos.** If you would prefer not to do that, just create a new GitHub/GitLab user with access to all of the necessary repositories and add the key to their account.
{{% /warning %}}

{{% tip %}}
Note that this is typically not an issue for projects stored on Bitbucket because you must add Forestry's public key to your user account (deploy keys are read-only.) If you're having trouble installing private Bitbucket submodules, ensure your Bitbucket user has access to all of the necessary repositories.
{{% /tip %}}