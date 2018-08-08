---
aliases:
- "/docs/deployment-and-management/"
- "/docs/deployment-and-management/setting-up-deployment/"
- "/docs/deployment-and-management/deploying-with-github-pages/"
title: Options
weight: 1
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    name: Hosting Options
    parent: Hosting
    weight: 1

---
The Hosting settings allow you to use Forestry to handle deployment of your static site. Forestry can build your site and then deploy the [static files](/docs/faqs/glossary/static-files) to a hosting provider of your choice.

## Guides

Forestry has a selection of built-in hosting options that make hosting your static site easy.

### Commit to source repo only

Enabling "commit to source repo only" will enable Forestry to only commit changes made in the CMS back to the branch and repository your site was imported from.

{{% tip "Continuous Integration" %}}
Looking to deploy your site using a [CI/CD](/docs/faqs/glossary/ci-cd) tool like GitLab CI or BitBucket Pipelines? Use _Commit to source repo only_. This will trigger any CI/CD tool when a change is saved or published in Forestry.
{{% /tip %}}

---

### GitHub Pages

Forestry can build your site and deploy the generated static files to a branch of a GitHub repository for use with [GitHub Pages](https://pages.github.com/).

[Read the guide](/docs/hosting/github-pages)

---

### BitBucket Pages

Forestry can build your site and deploy the generated static files to a repository on BitBucket configured to use BitBucket pages.

[Read the guide](/docs/hosting/bitbucket-pages)

---

### Amazon S3

Forestry can build your site and deploy the generated static files to an S3 bucket of your choosing.

[Read the guide](/docs/hosting/amazon-s3)

---

### FTP/SFTP

Forestry can build your site and deploy the generated static files to any FTP/SFTP enabled web-server of your choosing.

[Read the guide](/docs/hosting/ftp)

## Other Options

In addition to the built-in hosting provider options provided by Forestry, we provide tutorials for using third-party services with Forestry.

### GitHub Pages Jekyll Integration

If you are using Jekyll as your static site generator, GitHub pages can handle building your static site without the support of Forestry or a CI tool.

[Read the guide](/docs/guides/hosting/github-pages-jekyll)

#### Resources

* [GitLab Pages](https://about.gitlab.com/features/pages/)
* [Hugo Example Project](https://gitlab.com/pages/hugo)
* [Jekyll Example Project](https://gitlab.com/groups/pages)

---

### GitLab Pages & GitLab CI

GitLab provides a free CI tool for triggering build and deployment scripts when commits are made to your repository, and has example projects for both Hugo and Jekyll.

#### Resources

* [GitLab Pages](https://about.gitlab.com/features/pages/)
* [GoHugo.io: Host on GitLab](https://gohugo.io/hosting-and-deployment/hosting-on-gitlab/)
* [GitLab.com: Hugo Example Project](https://gitlab.com/pages/hugo)
* [GitLab.com: Jekyll Example Project](https://gitlab.com/groups/pages)

---

### BitBucket Pipelines

BitBucket provides a CI tool for triggering build and deployment scripts when commits are made to your repository.

#### Resources

* [BitBucket Pipelines Documentation](https://bitbucket.org/product/features/pipelines)
* [Bitquobit.com: Automating Hugo Deployments with BitBucket Pipelines](https://bitquabit.com/post/automating-hugo-deployments/)

---

### Webhooks

Forestry has [outgoing webhooks](/docs/hosting/webhooks/) that can be used to trigger custom build scripts.

[GitHub](https://developer.github.com/webhooks/), [BitBucket](https://confluence.atlassian.com/bitbucket/manage-webhooks-735643732.html), and [GitLab](https://docs.gitlab.com/ce/user/project/integrations/webhooks.html) also provide support for outgoing webhooks to trigger a custom build script.