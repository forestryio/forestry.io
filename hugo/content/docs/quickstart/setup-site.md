---
title: Setup Your Site
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
weight: 2
date: 2017-03-23 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Quick Start
    weight: 2

---
This doc will walk you through:

1. Setting up your site repository with Forestry
2. Making your first commit by publishing some changes

***

## Import Site from Repo

[Sign up](https://app.forestry.io/signup/) for a free account with Forestry.io then add a new site from your [dashboard](https://app.forestry.io/dashboard).

If you **don't** have a Jekyll, Hugo, VuePress, or Gatsby site already, click the link in the bottom of the _setup window_ to launch the demo site.

### Select your Static Site Generator

Before choosing your repository, Forestry needs to know which static site generator is used to build your site. Forestry supports [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), [VuePress](https://vuepress.vuejs.org/), and [Gatsby](https://www.gatsbyjs.org/). In the case of Hugo, you must also specify which _version_ you use.

{{% pretty_screenshot img="/uploads/2019/07/select-generator.png" %}}

### Select your Git Provider

Forestry works by synchronizing content changes with a git repository. In order to import your site, access to your git provider is required. There are currently four Git providers supported by Forestry: [GitHub](https://github.com/ "GitHub"), [GitLab](https://gitlab.com/ "GitLab"), [Bitbucket](https://bitbucket.org/ "Bitbucket"), and [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/ "Azure DevOps").

{{% pretty_screenshot img="/uploads/2019/07/select-provider.png" %}}

### Choose a Repository and Branch

Once the authorization is complete, you will be taken to the next screen where you can choose the repository you wish to import.

{{% warning %}}

### GitHub Repository Permissions

In order to watch for changes from Github, Forestry needs to be able to create a webhook for your repository. Because of this, you must have admin level permissions for any repository you wish to import. Repositories which you do not have admin access to will be visible in the dropdown, but cannot be selected.
{{% /warning %}}

If you use Github, you will see a button at the top of the modal with a lock. By default, Forestry only requests access to your public repositories. Click this button if you want to grant access to Forestry to import your private repositories. You will only have to do this once.

![](/uploads/2018/02/add-site-flow-choose-repo.png)

{{% tip %}}

### Config Path

If you are using Hugo or Jekyll, Forestry will look in the root of your repository for a configuration file. This will be a file named `config.toml` in Hugo, and `_config.yml` in Jekyll. If this file cannot be located, Forestry will prompt you to enter the path to this file. Enter the path from the root of your project to the directory containing this file.
<br /><br />
For example, if you have a repository containing a Hugo site in a subfolder named `hugo/`, your `config.toml` file will be located at `hugo/config.toml`. When you import your site into Forestry, it will prompt you to enter the config path, and you should enter `hugo` in this field.

{{% /tip %}}

Once you have chosen your repository and the config file for your site has been found, click the **Import Site** button. After a few moments you will be redirected into the Forestry CMS while the site finishes importing. Depending on the size of your site, the import process can take a few minutes. Stretch your legs, grab a glass of water, and it will be done before you know it.

## Document State

Go into a post or page, **edit some text** and you will see "Unsaved Changes" at the top of your document.

![](/uploads/2018/01/unsaved changes.png)

## Preview Changes

Click preview <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="1.2"><path d="M12 18c6 0 10-6 10-6s-4-6-10-6-10 6-10 6 4 6 10 6z"></path><circle cx="12" cy="12" r="2"></circle></g></svg> to view your changes in a new tab.

![](/uploads/2018/01/preview.png)

{{% tip "Having Trouble Previewing your Site?" %}}
Not all site work with previews out of the box. To learn more about how to
configure previews for your site, visit the [preview documentation](/docs/previews/about-previews/)
{{% /tip %}}

## Make your first commit

Click the publish button to save changes and make a Git commit.

![](/uploads/2018/01/publish-button.png)

The page should become **up-to-date** with your repository again.

![](/uploads/2018/01/up-to-date.png)

Go to your Git repo and look at your commit history. You should see your updates from Forestry there. Committing has never been easier!

![](/uploads/2018/01/commits-1.png)