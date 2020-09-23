---
title: Unexpected Status Code / Connection Expected but not Available
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
authors: []
publishdate: 2018-06-28 08:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-06-28 14:08:09 +0000
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
    weight: 2
    parent: Troubleshooting

---
This error typically occurs when there is a problem with your **authentication token**. This token tells your **source provider** (GitHub, GitLab, or Bitbucket) that Forestry is allowed to push/pull changes to/from your repository.

When this token is not working correctly, Forestry is unable to persist any of your changes back to your repo. As well, any changes to your repo outside of Forestry cannot imported.

## Refreshing Your Auth Token

To re-authenticate with your source provider, navigate to the **Settings** section in Forestry and click on the **Repository** tab. From here you will be able to re-import the site from your source provider. Most of the time, if there is an issue with your authentication token, it will be resolved here.

## Refreshing App Permissions

If re-importing the site does not work, the next step is to try revoking the app permissions that your source provider has granted to Forestry. This will force your source provider to issue a new token the next time you try to connect. Depending on your source provider, click one of the following links to revoke your app permissions for Forestry:

* GitHub: [https://github.com/settings/connections/applications/90bd642392676c051364](https://github.com/settings/connections/applications/90bd642392676c051364 "https://github.com/settings/connections/applications/90bd642392676c051364")
* GitLab: [https://gitlab.com/profile/applications](https://gitlab.com/profile/applications "https://gitlab.com/profile/applications")
* Bitbucket: Go to **Bitbucket Settings** and locate the **Manage Apps** link under **Integrations and Features**

After revoking the app permissions, try reconnecting your repository again from Forestry.