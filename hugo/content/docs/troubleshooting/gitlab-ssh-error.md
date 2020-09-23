---
title: GitLab SSH error
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-04-24 08:26:34 -1100
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

---
If you are getting an error when authenticating with GitLab that looks like this:

    Failed to authenticate SSH session: Waiting for USERAUTH response

1\. Go to https://app.forestry.io/sites/SITE-ID/disconnect/gitlab   
\(where SITE-ID is the unique string in the URL when you visit your Forestry CMS). This will disconnect your account from GitLab.

2\. Go to [https://gitlab.com/profile/keys](https://gitlab.com/profile/keys "https://gitlab.com/profile/keys") and delete the Forestry.io key.

3\. Go to [https://gitlab.com/profile/applications](https://gitlab.com/profile/applications "https://gitlab.com/profile/applications") and revoke the Forestry.io app access.

4\. Go to [https://app.forestry.io/dashboard](https://app.forestry.io/dashboard "https://app.forestry.io/dashboard")

5\. Click _Add Site_

6\. Authenticate with Gitlab – This will replace the things you deleted from Gitlab

7\. Import a site that you have successfully imported before