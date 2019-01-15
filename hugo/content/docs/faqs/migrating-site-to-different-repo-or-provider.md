---
title: How to Migrate a Site to a Different Repo or Git Provider
weight: 1
layout: single
publishdate: 2019-01-15 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2019-01-15 04:00:00 +0000
menu:
  faqs:
    parent: FAQs
    weight: 1
draft: true

---
If you consider switching to a different provider or there is an issue with your current import of your repository into Forestry, you might consider deleting your current import of your repository and importing it as a new site (from the same or a different repository).

Every time you make a change to your settings Forestry immediately commits those changes to your `.forestry` folder in the repository. This ensures that your settings persists through different imports of the same site.

{{% tip %}}

It also means that you can create a theme, boilerplate or other starter that and your `.forestry` configuration will persist.

{{% /tip %}}

Most settings can be migrated without additional effort.

This includes:

* Front Matter Templates
* General (excluding `logo`, `site name`, `url` and `timezone`)
* Sidebar Configuration
* Media (excluding possible credentials)
* Previews Settings
* Build Settings

There are only a couple exceptions to this rule:

* Deploy Settings
  * Your deployment settings include sensitive information. Forestry will never store sensitive information in your Git repository.
* Invited Guests
  * Guests will need to be re-invited to the new site.