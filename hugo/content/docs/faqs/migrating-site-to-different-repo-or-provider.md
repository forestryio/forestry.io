---
title: How to Migrate a Site to a Different Repo or Git Provider
weight: 10
layout: single
publishdate: 2019-01-15 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2019-01-15 04:00:00 +0000
menu:
  faqs:
    parent: FAQs
    weight: 10

---
If you consider switching to a different provider or there is an issue with your current import of your repository in Forestry, you might consider deleting your current import of your repository and importing it as a new site.

Every time you make a change to your settings Forestry immediately commits those changes to your `.forestry` folder in the repository. This ensures that your settings persists through different imports of the same site.

{{% tip %}}

It also means that you can create a theme, boilerplate or other starter with preconfigured `.forestry` settings.

{{% /tip %}}

Most settings can be migrated without additional effort.

This includes:

* Front Matter Templates
* General (excl. `logo`, `site name`, `url` and `timezone`)
* Sidebar Configuration
* Media path settings
* Previews Settings

There are only a couple exceptions to this rule:

* External Media Providers credentials
* Invited collaborators
* Collaborators will need to be re-invited to the new site.

The above rule also applies when you fork a branch to reimport a new branch in Forestry.

{{% warning %}}

Importing your existing repo as a new site will automatically connect your remote admin to the new site and remove the connection from the old site.

{{% /warning %}}
