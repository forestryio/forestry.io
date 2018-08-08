---
title: BitBucket Pages
weight: 3
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Hosting
    weight: 4

---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [Forestry account](https://app.forestry.io/signup), [BitBucket account](https://bitbucket.org/account/signup/) and a repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quick start guide](/docs/quickstart/), which contains guides and resources for building your first static site.
{{% /tip %}}

## Getting Started

To deploy a static site to BitBucket pages using Forestry, you must first set up a repository in BitBucket for your site.

Login to BitBucket and create a new repository with the following format:

`{{username}}.bitbucket.io`

_Be sure to replace_ `_{{accountname}}_` _with your BitBucket username._

## Configuring Forestry

Once your new repository is created, navigate to the _Settings_ page of your site in Forestry, click the _Hosting_ tab, and set the _Connection_ option to _BitBucket_.![](/uploads/2018/01/52.png)If you haven't authenticated with BitBucket before, you'll be prompted to choose "[Public Repos](https://help.github.com/articles/making-a-private-repository-public/)" or "[Private Repos](https://help.github.com/articles/making-a-public-repository-private/)". Choose the option the applies to your repository.

![](/uploads/2018/01/7.png)This will redirect you to BitBucket and prompt you to enter your login credentials if you are not already logged in.

{{% warning " " %}}
In order to import a site from BitBucket, you will need [admin permissions](https://confluence.atlassian.com/bitbucketserver/using-project-permissions-776639801.html) for the repository. This is because Forestry needs to add a web hook to your repository in order to watch for changes.
{{% /warning %}}

Once authorized, you will be redirected back to Forestry.

![](/uploads/2018/01/53.png)Next, choose your `{{username.bitbucket.io}}` repository, select the `master` branch, and then click _Save Settings_.

From here on, every time you save or publish a page Forestry will build your site and deploy to this branch.

Your site should now be served at `http://{{username}}.bitbucket.io`.