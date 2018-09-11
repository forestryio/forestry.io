---
title: Migrating to Key-based Authentication
description: ''
date: 2018-08-28 05:00:18 -1100
authors:
- DJ Walker
publishdate: 2018-08-28 02:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
categories:
- CMS
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
Head's up! We're making some changes to how Forestry authenticates with your Git repos.

Today, we rolled out an update that uses persistent SSH keys to interact with your repo. Previously, we were relying on OAuth tokens to gain access as needed, but some users were encountering problems with this method as tokens would intermittently expire before they could be refreshed. Using long-lived SSH credentials is intended to solve this problem.

## What this Means For Your Projects

Your existing projects should continue to work as usual, but we recommend you switch them over to key-based authentication at your convenience. **We will be sunsetting token-based authentication on February 1, 2019.**

### How to Migrate Your Project

<video playsinline autoplay muted loop width="100%" controls>
  <source src="/video/reconnectrepo.mp4" type="video/mp4">
  <source src="/video/reconnectrepo.webm" type="video/webm">
Your browser does not support the video tag.
</video>

To migrate your **Github or GitLab** project to key-based authentication, all you need to do is open your site in Forestry, navigate to the **Repository** tab in your **Settings**, and click the **Test Connection** button. You should see a message indicating the connection failed, and an option to reconnect. Click the **Reconnect** button, and if you see that you have reconnected successfully, you are finished migrating to key-based authentication.

**Bitbucket users:** Unfortunately, the Bitbucket API does not currently allow us to automatically set up SSH keys. To migrate your Bitbucket project, you will want to follow the **"completing the connection"** steps from our [manual project setup](/docs/git-sync/manual-setup#completing-the-connection) guide.

### Creating New Projects

When you create a new project in Forestry, you will now notice a **Quick Setup via OAuth** option. This is the recommended option and will follow the same setup flow you're used to, but will create the persistent SSH key behind the scenes.

Because we are currently unable to automatically apply SSH keys to Bitbucket accounts, the **Quick Setup via OAuth** option is not available for Bitbucket projects. Please consult our [manual project setup](/docs/git-sync/manual-setup/) guide for instructions on setting up a new Bitbucket project.

## More Info on Source Provider Connections

[View our full documentation on connecting to a source provider](/docs/git-sync/).