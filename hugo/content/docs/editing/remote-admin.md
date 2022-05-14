---
aliases:
- "/docs/site-configuration/project-paths/"
title: Remote Admin
weight: 8
publishdate: 2017-12-31T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: '2020-06-11T04:00:00.000+00:00'
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Editing
    weight: 7

---
The Remote Admin allows editors to access and manage your site without leaving your domain.

This is great for large businesses or white-label solutions where you don’t want your users accessing the CMS through the Forestry website.

![](/uploads/2018/05/oauth-admin.png)

## Setting up the Remote Admin

To set up the Remote Admin, go to the Settings page for your site, found under _Settings_ in the sidebar of your CMS.

Select the _General_ tab, and find the Project Paths option. From here you provide the path you want users to go to in order to access the CMS under "Admin Path".

![](/uploads/2018/01/settings-projectpaths.png)

Forestry will install a static HTML file that powers the Remote Admin at the Admin Path, so be sure to set it to a path that will be treated as a [static file](/docs/faqs/glossary/static-files/) by your static site generator.

### Examples

* In Hugo, Gatsby, NuxtJS or Gridsome, this is `/static/admin`
* In Jekyll, this is `/admin/` by default (depends on your source folder).
* Eleventy is more flexible, add the directory you wish to copy with [`addPassthroughCopy`](https://www.11ty.dev/docs/copy/)

## Deploying the Remote Admin

If [hosting](/docs/hosting) is configured, you can deploy the Remote Admin to your site in one-click with the the "Deploy Admin"​ button in your site's settings.

![](/uploads/2018/01/settings-projectpaths.png)

Then you can access the admin from your hosted site at your specified path. E.g, `https://example.com/admin`
