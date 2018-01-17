---
aliases:
- /docs/faq/github-organization-access/
title: GitHub
weight: 1
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: git-sync
    weight: 1
layout: single
---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [GitHub account](https://github.com/signup) and repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quick start guide](/docs/welcome/quick-start), which contains guides and resouces for building your first static site.
{{% /tip %}}

Forestry's allows you to import your static site through public and private GitHub repositories. This allows Forestry to sync any changes made by editors in Forestry to be comitted back to GitHub. This also allows developers to work on your website on their local machine, and have all changes by synced back to Forestry.

## Importing from GitHub

To import a site with GitHub, [login](https://app.forestry.io/login) to Forestry and follow these instructions:

From the [dashboard](https://app.forestry.io/dashboard), click "Add Site". In the modal the opens, choose "Import existing site".

TK: image

Choose the static site generator your site is built with from the dropdown, and then press "Next".

TK: image

Now, choose "GitHub" from the list of options.

TK: image

You'll be prompted to choose "[Public Repos](https://help.github.com/articles/making-a-private-repository-public/)" or "[Private Repos](https://help.github.com/articles/making-a-public-repository-private/)". Choose the option the applies to your repository. 

This will redirect you to GitHub, and prompt you to enter your login credentials if you are not already logged in.

TK: image

Give Forestry access to your GitHub repositories by clicking "Authorize application". You can also request access to any [GitHub organisations](#importing-from-a-github-organisation) you are a member of.

{{% warning " " %}}
In order to import a site from GitHub, you will need [admin permissions](https://help.github.com/articles/repository-permission-levels-for-an-organization/) for the repository. This is because Forestry needs to add a webhook to your repository in order to watch for changes.
{{% /warning %}}

Once authorized, you will be redirected back to Forestry to choose the repository you wish to import. From the dropdowns, choose your repository and the branch you would like to import, and then press "Next".

TK: image

If Forestry can't locate your site's config file inside of the root of your project, you'll be prompted to provide the directory it is located in.

Lastly, tell us what your site should be named inside of Forestry, as well as an optionally provide a URL to the *public location* of your website.

TK: image

## Importing from a GitHub organization
GitHub organisations may be set up to restrict access to third-party applications like Forestry without permission from an organisations administrator. In this scenario, if you are not an administrator of your organisation, you will need to request access on behalf of Forestry.

TK: image

If you are an administrator of your application and have enabled third-party application restrictions, you will need to authorize Forestry to have access to your organisations repositories.

To do so, go to the *Settings page* of your organisation, and then navigate to the *Third-party access* tab. 

TK: image

To the right of "Forestry", click the "Edit" button.

TK: image

Then, click "Grant access" to allow your organisations members to import your sites in Forestry.