---
title: GitHub Pages
publishdate: 2017-12-31T04:00:00.000+00:00
expirydate: 2020-01-31T04:00:00.000+00:00
date: '2018-12-12T05:00:00.000+00:00'
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"

---
{{% warning  %}}

Forestry no longer does deployments, see [how to deploy and host your site](/docs/hosting/).

 {{% /warning %}}

This guide assumes you already have an existing [Forestry Account](https://app.forestry.io/signup), [GitHub account](https://github.com/signup), and a repository with a project. If you don't have an existing project, check out our [Quick start guide](/docs/quickstart/), which contains guides and resources for building your first static site.

## Getting Started

To deploy a static site to GitHub pages using Forestry, you must first set up a new branch named `gh-pages` on your repo, which you can do by going to your repository in GitHub and using the branch management dropdown.

![](/uploads/2018/01/github-gh-pages-settings.png)

## Configuring Forestry

Once your new branch is created, navigate to the _Settings_ page of your site in Forestry, click the _Deployment_ tab, and set the _Connection_ option to _GitHub Pages_.

![](/uploads/2019/06/github-pages-settings.png)

Click on "Click here to edit repo & branch" to connect your new _gh-pages_ branch with Forestry.

![](/uploads/2018/01/1.png)

This will redirect you to GitHub, and prompt you to enter your login credentials if you are not already logged in.

![](/uploads/2018/01/45.png)

Give Forestry access to your GitHub repositories by clicking "Authorize application". You can also request access to any [GitHub organizations](/docs/git-sync/github#importing-from-a-github-organization) you are a member of.

{{% warning %}}
In order to host a site with GitHub Pages, you will need [admin permissions](https://help.github.com/articles/repository-permission-levels-for-an-organization/) for the repository. This is because Forestry needs to add a web hook to your repository in order to watch for changes.
{{% /warning %}}

Once authorized, you will be redirected back to Forestry.

![](/uploads/2019/06/github-pages-connected-settings.png)

Next, choose your repository, select the new `gh-pages` branch, and then click _Save Settings_.

From here on, every time you save or publish a page Forestry will build your site and deploy to this branch.

## Enable GitHub Pages

To have GitHub pages begin serving from your new branch, go to the `Settings` page of your GitHub repository and scroll down to the `GitHub Pages` section.

Then select the branch that contains your built static site and click on the Save button.

![](/uploads/2018/01/41.png)

Your site should now be served at `https://username.github.io/repository`.

## Using a Custom Domain

If you want to use a custom domain with GitHub Pages, you will need to include a `CNAME` file containing your custom domain. The `CNAME` file should instead be added to your source files, in a location where it will be copied to the generated site. In the case of a Hugo site, this should be in your `static/` directory, while it can live in the root of your project if you're using Jekyll.

{{% warning %}}
If you manually add this file to your `gh-pages` branch, it will be deleted the next time Forestry deploys your site.
{{% /warning%}}

[GitHub Help: Using a Custom Domain With GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)

[Forestry: Troubleshooting CNAME files](https://forestry.io/docs/troubleshooting/cname/)