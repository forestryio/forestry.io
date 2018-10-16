---
title: "Custom Configuration for Data Files \U0001F4CA"
description: |-
  A little over two months ago we made it possible to customize the sidebar for your content files (i.e. .md and .html). With today's update we expand that capability to data files. You can now use the sidebar settings to import other file formats (e.g. .json, .toml, .yml) and choose how they are displayed.

  Here's a quick walkthrough on how you can set up data file sections on your site.
date: 2018-09-13 13:36:32 +0000
authors: []
publishdate: 2018-09-13 09:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
images: []
menu: []

---
We're excited to announce custom configuration for data files.

A little over two months ago we made it possible to customize the sidebar for your content files (i.e. .md and .html). With today's update we expand that capability to data files. You can now use the sidebar settings to import other file formats (e.g. .json, .toml, .yml) and choose how they are displayed.

All new sites will have this feature enabled by default. Existing Jekyll and Hugo sites are not automatically migrating until October 16th, 2018, giving you time to make adjustments, if necessary. Read more in our [docs](/docs/editing/data-files#existing-jekyll-hugo-projects).

Here's a quick walkthrough on how you can set up data file sections on your site.

You can allow Forestry to migrate Data files for you or choose to make this configuration yourself.  
  
**Automatic Migration of Data Files** ⭐

_This option is only available for a limited time_

If you had Data Files and you haven't made the migration until now, you'll see a link in your Sidebar.

![](/uploads/2018/10/where-did-my-datafiles-go.png)

Click on the link and **Start Migration**. Once Forestry finishes loading you'll see your new Data Files section in the Sidebar.

***

**Opt-In To Data File Sections** 🔘

Before we start you might have to manually opt-in to use the new data file sections. Please go to your site's settings and select the _General_ tab. At the bottom of the page you'll find the _Enable Data File Sections_ toggle. Make sure it is enabled.

![](/uploads/2018/09/data-file-sections-fixed.png)

***

**Create a Heading Section** 💡

Next you can select the _Sidebar_ tab to add new sections. We first want to add a new heading to keep our data and content files separate. To do so click on _Add Section_, select _Heading_ and give the section a _Label_. We chose "Data Files" for this example.

![](/uploads/2018/09/add_section-1.png)

***

**Add Your First Data Files Section** 📊

Adding a data files section is very similar to adding a _Heading_ Section. After clicking on _Add Section_ you choose Type _Directory_. In the following you'll have to fill out _Label_, _Path_ and _New File Extension_. Use the match field if you only want to use a subset of files in the directory. To learn more about the individual fields visit our [docs](/docs/settings/content-sections/).

![](/uploads/2018/09/datafiles-setup-1.gif)

***

**Organize Your Sections** 🗂️

Forestry adds new sections to the top of the list. If that's not the correct order for your site you can simply reorganize Headings and Sections via Drag-and-Drop.

![](/uploads/2018/09/organize-sections.gif)

***

{{% tip "SELECT FIELDS" %}}

If you're using Data Files as a source for your Select Fields you might have to make a few additional changes. See our [migration guide](/docs/troubleshooting/migrate-select-fields-to-new-data-file-sections/)

{{% /tip %}}

That's it! You can now add as many sections as you like and you can even put content and data files under the same heading (if that makes sense for your site).

We're excited to hear from you. Let us know if you come across any bugs or have any improvement suggestions.

To review all changes please visit our [changelog](/docs/changelog/) or visit our [sunset notices](/docs/sunset/) to see if any features are going to be replaced or removed.