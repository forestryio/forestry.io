---
title: BitBucket
weight: 3
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: git-sync
layout: single
---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [BitBucket account](https://bitbucket.org/account/signup/) and repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quck start guide](/docs/getting-started/quick-start), which contains guides and resouces for building your first static site.
{{% /tip %}}

Forestry's allows you to import your static site through BitBucket repositories. This allows Forestry to sync any changes made by editors in Forestry to be comitted back to BitBucket. This also allows developers to work on your website on their local machine, and have all changes by synced back to Forestry.

To import a site with BitBucket, [login](https://app.forestry.io/login) to Forestry and follow these instructions:

From the [dashboard](https://app.forestry.io/dashboard), click "Add Site". In the modal the opens, choose "Import existing site".

TK: image

Choose the static site generator your site is built with from the dropdown, and then press "Next".

TK: image

Now, choose "BitBucket" from the list of options.

TK: image

This will redirect you to BitBucket and prompt you to enter your login credentials if you are not already logged in.

{{% warning " " %}}
In order to import a site from BitBucket, you will need [admin permissions](https://confluence.atlassian.com/bitbucketserver/using-project-permissions-776639801.html) for the repository. This is because Forestry needs to add a webhook to your repository in order to watch for changes.
{{% /warning %}}

Once authorized, you will be redirected back to Forestry to choose the repository you wish to import. From the dropdowns, choose your repository and the branch you would like to import, and then press "Next".

TK: image

If Forestry can't locate your site's config file inside of the root of your project, you'll be prompted to provide the directory it is located in.

Lastly, tell us what your site should be named inside of Forestry, as well as an optionally provide a URL to the *public location* of your website, and then press "

TK: image