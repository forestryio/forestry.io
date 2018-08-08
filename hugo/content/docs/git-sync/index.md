---
aliases:
- "/docs/faq/github-organization-access/"
title: GitHub
weight: 1
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-04-06 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Git Sync
    weight: 1

---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [GitHub account](https://github.com/signup) and repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quick start guide](/docs/quickstart/tour/), which contains guides and resources for building your first static site.
{{% /tip %}}

Forestry's allows you to import your static site through public and private GitHub repositories. This allows Forestry to sync any changes made by editors in Forestry to be committed back to GitHub. This also allows developers to work on your website on their local machine, and have all changes synced back to Forestry.

## Importing from GitHub

To import a site with GitHub, [login](https://app.forestry.io/login) to Forestry and follow these instructions:

![](/uploads/2018/04/add-site-flow-choose-generator-2.png)

From the [dashboard](https://app.forestry.io/dashboard), click "Add Site". In the modal that opens, choose Choose the static site generator your site is built with from the dropdown menu, and then press "Next".

![](/uploads/2018/04/add-site-flow-select-provider.png)

Now, choose "GitHub" from the list of options.

![](/uploads/2018/01/1.png)

This will redirect you to GitHub, and prompt you to enter your login credentials if you are not already logged in.

![](/uploads/2018/01/45.png)

Give Forestry access to your GitHub repositories by clicking "Authorize application". You can also request access to any [GitHub organizations](#importing-from-a-github-organization) you are a member of.

{{% warning " " %}}
In order to import a site from GitHub, you will need [admin permissions](https://help.github.com/articles/repository-permission-levels-for-an-organization/) for the repository. This is because Forestry needs to add a webhook to your repository in order to watch for changes.
{{% /warning %}}

![](/uploads/2018/04/add-site-flow-choose-repo.png)

By default, only your "[Public Repos](https://help.github.com/articles/making-a-private-repository-public/)" will be shown. To see your "[Private Repos](https://help.github.com/articles/making-a-public-repository-private/)" click on the link at the top of the modal with the <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="2"><rect width="14" height="13" x="5" y="10" rx="1"></rect><path d="M8 1h8v9H8z"></path></g></svg> in the front.

Once authorized, you will be redirected back to Forestry to choose the repository you wish to import. From the dropdowns, choose your repository and the branch you would like to import.

![](/uploads/2018/04/add-site-flow-config-file.png)

If Forestry can't locate your site's config file inside of the root of your project, you'll be prompted to provide the directory it is located in.

![](/uploads/2018/04/add-site-flow-invite-guests.png)

In the final step, you can invite up to 3 Guest users to edit content on your project with you. Learn more about [user roles](/docs/settings/team-management/). When you're done just click on "Import Site" and let us get your site ready.

## Importing from a GitHub organization

GitHub organizations may be set up to restrict access to third-party applications like Forestry without permission from an organizations administrator. In this scenario, if you are not an administrator of your organization, you will need to request access on behalf of Forestry.

![](/uploads/2018/01/51.png)

If you are an administrator of your application and have enabled third-party application restrictions, you will need to authorize Forestry to have access to your organizations repositories.

To do so, go to the _Settings page_ of your organization, and then navigate to the _Third-party access_ tab.

![](/uploads/2018/01/49-1.png)

To the right of "Forestry", click the "Edit" button.

![](/uploads/2018/01/49.png)

Then, click "Grant access" to allow your organizations members to import your sites in Forestry.