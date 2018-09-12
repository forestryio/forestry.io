---
title: Custom Configuration for Data Files
description: ''
date: 2018-09-12 02:36:32 -1100
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
We're excited to announce custom configuration for data files.

A little over two months ago we made it possible to customize the sidebar for your content files (i.e. .md and .html). With today's update we expand that capability to data files. You can now use the sidebar settings to import other file formats (e.g. .json, .toml, .yml) and choose how they are displayed.

All new sites will have this feature enabled by default. Existing Jekyll and Hugo sites are not automatically migrating until October 16th, 2018, giving you time to make adjustments, if necessary. Read more in our [docs](https://forestry.io/docs/editing/data-files#existing-jekyll-hugo-projects).

Here's a quick walkthrough on how you can set up data file sections on your site.

***

**Opt-In To Data File Sections**

Before we start you might have to manually opt-in to use the new data file sections. Please go to your site's settings and select the _General_ tab. At the bottom of the page you'll find the _Enable Data File Sections_ toggle. Make sure it is enabled.

![](https://downloads.intercomcdn.com/i/o/75954636/14fe884f1d28736fdcd58a85/Screen+Shot+2018-09-12+at+10.37.15+AM.png)​​

***

**Create a Heading Section**

Next you can select the _Sidebar_ tab to add new sections. We first want to add a new heading to keep our data and content files separate. To do so click on _Add Section_, select _Heading_ and give the section a _Label_. We chose "Data Files" for this example.

![](https://downloads.intercomcdn.com/i/o/75955692/a6e53c67b51aa195001b2ef7/Screen+Shot+2018-09-12+at+10.44.00+AM.png)

***

**Add Your First Data Files Section**

Adding a data files section is very similar to adding a _Heading_ Section. After clicking on _Add Section_ you choose Type _Directory_. In the following you'll have to fill out _Label_, _Path_ and _New File Extension_. Use the match field if you only want to use a subset of files in the directory. To learn more about the individual fields visit our [docs](https://forestry.io/docs/settings/content-sections/).

![](https://downloads.intercomcdn.com/i/o/75960190/9e9299159d36907e645d7f3a/datafiles-setup.gif)

***

**Organize Your Sections**

Forestry adds new sections to the top of the list. If that's not the correct order for your site you can simply reorganize Headings and Sections via Drag-and-Drop.

![](https://downloads.intercomcdn.com/i/o/75962390/78028c392fe50a8c4df3e3b9/organize.gif)

***

That's it! You can now add as many sections as you like and you can even put content and data files under the same heading (if that makes sense for your site).

We're excited to hear from you. Let us know if you come across any bugs or have any improvement suggestions.

To review all changes please visit our [changelog](https://forestry.io/docs/changelog/) or visit our [sunset notices]() to see if any features are going to be replaced or removed.