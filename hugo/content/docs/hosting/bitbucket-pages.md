---
title: BitBucket Pages
weight: 3
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: hosting
layout: single
---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [Forestry account](https://app.forestry.io/signup), [BitBucket account](https://bitbucket.org/account/signup/) and a repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quick start guide](/docs/welcome/quick-start), which contains guides and resources for building your first static site.
{{% /tip %}}

## Getting Started
To deploy a static site to BitBucket pages using Forestry, you must first set up a repository in BitBucket for your site. 

Login to BitBucket and create a new repository with the following format:

`{{username}}.bitbucket.io`

*Be sure to replace `{{accountname}}` with your BitBucket username.

## Configuring Forestry
Once your new repository is created, navigate to the *Settings* page of your site in Forestry, click the *Hosting* tab, and set the *Connection* option to *BitBucket*.

If you haven't authenticated with GitHub before, you'll be prompted to choose "[Public Repos](https://help.github.com/articles/making-a-private-repository-public/)" or "[Private Repos](https://help.github.com/articles/making-a-public-repository-private/)". Choose the option the applies to your repository. 

This will redirect you to BitBucket and prompt you to enter your login credentials if you are not already logged in.

{{% warning " " %}}
In order to import a site from BitBucket, you will need [admin permissions](https://confluence.atlassian.com/bitbucketserver/using-project-permissions-776639801.html) for the repository. This is because Forestry needs to add a web hook to your repository in order to watch for changes.
{{% /warning %}}

Once authorized, you will be redirected back to Forestry.

Next, choose your `{{username.bitbucket.io}}` repository, select the `master` branch, and then click *Save Settings*. 

From here on, every time you save or publish a page Forestry will build your site and deploy to this branch.

Your site should now be served at `http://{{username}}.bitbucket.io`.