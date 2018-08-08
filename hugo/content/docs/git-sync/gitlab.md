---
title: GitLab
weight: 2
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-04-06 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Git Sync
    weight: 2

---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [GitLab account](https://gitlab.com/users/sign_in) and repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quick start guide](/docs/quickstart/tour/), which contains guides and resources for building your first static site.
{{% /tip %}}

Forestry's allows you to import your static site through public and private GitLab repositories. This allows Forestry to sync any changes made by editors in Forestry to be comitted back to GitLab. This also allows developers to work on your website on their local machine, and have all changes by synced back to Forestry.

## Importing from GitLab

To import a site with GitLab, [login](https://app.forestry.io/login) to Forestry and follow these instructions:

![](/uploads/2018/04/add-site-flow-choose-generator-2.png)

From the [dashboard](https://app.forestry.io/dashboard), click "Add Site". In the modal that opens, choose Choose the static site generator your site is built with from the dropdown menu, and then press "Next".

![](/uploads/2018/04/add-site-flow-select-provider.png)

Now, choose "GitLab" from the list of options.

![](/uploads/2018/01/4.png)

This will redirect you to GitLab, and prompt you to enter your login credentials if you are not already logged in.

![](/uploads/2018/01/5.png)

Give Forestry access to your GitLab repositories by clicking "Authorize". You can also request access to any [GitLab Groups](#importing-from-gitlab-groups) you are a member of.

{{% warning " " %}}
In order to import a site from GitLab, you will need [master permissions](https://gitlab.com/help/user/permissions) for the repository. This is because Forestry needs to add a webhook to your repository in order to watch for changes.
{{% /warning %}}

![](/uploads/2018/04/add-site-flow-choose-repo-not-github.png)

Once authorized, you will be redirected back to Forestry to choose the repository you wish to import. From the dropdowns, choose your repository and the branch you would like to import, and then press "Next".

![](/uploads/2018/04/add-site-flow-config-file.png)

If Forestry can't locate your site's config file inside of the root of your project, you'll be prompted to provide the directory it is located in.

![](/uploads/2018/04/add-site-flow-invite-guests.png)

In the final step, you can invite up to 3 Guest users to edit content on your project with you. Learn more about [user roles](/docs/settings/team-management/). When you're done just click on "Import Site" and let us get your site ready.

## Importing from GitLab Groups

If you are trying to import a repository from a GitLab Group you are a member of, you will need master permissions on the actual repository you are trying to import.

{{% warning %}}
Applying master permissions to a group does not effect its members when importing. Members **must** be given master access on a per-repository basis.
{{% /warning %}}