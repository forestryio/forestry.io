---
title: GitHub Pages
weight: 2
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Hosting
    weight: 3

---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [Forestry Account](https://app.forestry.io/signup), [GitHub account](https://github.com/signup), and a repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quick start guide](/docs/quickstart/), which contains guides and resources for building your first static site.
{{% /tip %}}

## Getting Started

To deploy a static site to GitHub pages using Forestry, you must first set up a new branch named `gh-pages` on your repo, which you can do by going to your repository in GitHub and using the branch management dropdown.

![](/uploads/2018/01/github-gh-pages-settings.png)

## Configuring Forestry

Once your new branch is created, navigate to the _Settings_ page of your site in Forestry, click the _Hosting_ tab, and set the _Connection_ option to _GitHub Pages_.

![](/uploads/2018/01/29.png)If you haven't authenticated with GitHub before, you'll be prompted to choose "[Public Repos](https://help.github.com/articles/making-a-private-repository-public/)" or "[Private Repos](https://help.github.com/articles/making-a-public-repository-private/)". Choose the option the applies to your repository.

![](/uploads/2018/01/1.png)

This will redirect you to GitHub, and prompt you to enter your login credentials if you are not already logged in.

![](/uploads/2018/01/45.png)

Give Forestry access to your GitHub repositories by clicking "Authorize application". You can also request access to any [GitHub organizations](/docs/git-sync/#importing-from-a-github-organization) you are a member of.

{{% warning %}}
In order to host a site with GitHub Pages, you will need [admin permissions](https://help.github.com/articles/repository-permission-levels-for-an-organization/) for the repository. This is because Forestry needs to add a web hook to your repository in order to watch for changes.
{{% /warning %}}

Once authorized, you will be redirected back to Forestry.

![](/uploads/2018/01/43.png)

Next, choose your repository, select the new `gh-pages` branch, and then click _Save Settings_.

From here on, every time you save or publish a page Forestry will build your site and deploy to this branch.

## Enable GitHub Pages

To have GitHub pages begin serving from your new branch, go to the `Settings` page of your GitHub repository and scroll down to the `GitHub Pages` section.

Then select the branch that contains your built static site and click on the Save button.

![](/uploads/2018/01/41.png)

Your site should now be served at `http://username.github.io/repository`.

{{% tip "Hugo CNAME file" %}}
With Hugo, ensure your CNAME file is in your `/static` directory. Otherwise, Hugo will delete your CNAME file when building your site. More details here: [Trouble shooting CNAME files](https://forestry.io/docs/troubleshooting/cname/)
{{% /tip %}}