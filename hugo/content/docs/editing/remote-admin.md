---
aliases:
- "/docs/site-configuration/project-paths/"
title: Remote Admin
weight: 8
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
layout: single
menu:
  docs:
    parent: editing
    weight: 8

---
The Remote Admin allows editors to access and manage your site without leaving your domain.

This is great for large businesses or white-label solutions where you don’t want your users accessing the CMS through the Forestry website.

![](/uploads/2018/01/28.png)

## Setting up the Remote Admin

To set up the Remote Admin, go to the Settings page for your site, found under “Site” in the sidebar of your CMS.

Select the General tab, and find the Project Paths option. From here you provide the path you want users to go to in order to access the CMS under "Admin Path".

TK: image of remote admin settings

The Remote Admin is deployed as a static HTML page, so be sure you deploy it to a path that will be treated as a [static file](http://localhost:3000/docs/faqs/glossary/static-files/) by your static site generator.

### Examples

* In Hugo, this is `/static/admin`
* In Jekyll, this is `/admin/`

## Deploying the Remote Admin

If [hosting](/docs/hosting) is configured, you can deploy the Remote Admin to your site by clicking the Deploy Admin​ button.

TK: image of remote admin settings

Then you can access the admin from your hosted site at the path your specified. E.g, `https://example.com/admin`

{{% tip %}}
If you signed up for Forestry using social auth, you will need to configure a password to log in to the Remote Admin. This can be done using the [forgot password utility](https://app.forestry.io/password)
{{% /tip %}}