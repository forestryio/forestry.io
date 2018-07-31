---
title: Snippets, Custom Content Sections and More
description: ''
date: 2018-07-31 01:28:03 -1100
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
We're happy to announce these new features today! ☀️

Long awaited, our Snippets feature is finally here. Especially, our Hugo users felt strongly about using Hugo's powerful Shortcodes feature in Forestry. We made it available to our Jekyll users as well. You can now add HTML snippets to your Markdown Editor whether you're using Hugo or Jekyll.

Moreover, the team has continued to improve the sidebar, adding a new advanced configuration for the content section allowing you to choose the structure of how your content will be made available in Forestry.

Lastly, an indicator to show you what site and branch you're on makes it clear what you're currently working on.

Read more and get the links below.

***

## Snippets

You can now add custom HTML snippets by adding a `.snippet` file to `.forestry/snippets/` in your repository. Have a look at our [tip snippet](https://github.com/forestryio/forestry.io/blob/master/hugo/.forestry/snippets/tip.snippet) and the [docs](https://forestry.io/docs/settings/snippets/) to implement your own. We've still got upgrades to come for this feature so stay tuned.

![](/uploads/2018/07/snippets.png)

***

## Custom Content Sections

Over the past few weeks `settings.yml` has become a very powerful feature in Forestry. Make sure to give [Content Sections](https://forestry.io/docs/settings/content-sections/) a good read, if you would like to make the Forestry content manager really your own. Curious how we use it? We pulled out our Changelog files that are actually using a different Front Matter Template (FMT). Now, we were able to set an FMT only for Changelog files to avoid any confusion.

![](/uploads/2018/07/Create-sections.jpg)

***

## Site and Branch at-a-glance

Working on different sites with multiple branches that all live in Forestry just got a lot easier to navigate. Each site now features the site name and branch in the top of your side bar. No more clicking around, it's now all out in the open.

![](/uploads/2018/07/branch-and-repo.png)

***

As always, message us if you notice any bugs, have any questions or any feedback.