---
title: Working Title The new UI
description: ''
date: 2018-06-07 09:39:03 -1100
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
It’s a nice day here on Prince Edward Island and we’re happy to announce some new features.

Over the past couple weeks we were hard at work to improve the editor experience for our Git-backed content manager. Working with Git repos we come across some unique advantages and challenges. This update is focused on addressing some of these challenges.

---

## Renaming Files   
![](/uploads/2018/06/2018-06-07 15.27.21.gif)

Freshly out - You can now change the filename for your content files with Forestry. Since Jekyll takes the filename to create the default URL paths, editors for Jekyll sites can now easily change the URL path with this new feature. Previously filename changes could only be done directly in the repo.

---

## Currently Edited by - Indicator ![](/uploads/2018/06/status-indicator.png)

As a Git-backed content manager we need to prevent merge conflicts. That’s why Forestry only allows one editor to change a document at a time. Now you can see immediately who is currently editing a document.

---

## Connection Lost 

![](/uploads/2018/06/connection-lost-arrow.png)

Until now users were ejected from the post they were editing, if the connection was lost at some point. Even though we saved those changes it made for a less than optimal user experience. From now on users will only see a bar at the top letting them know that the connection was lost and that we will try to reconnect as soon as possible.

{{% tip %}}

As outlined above we need to make sure that documents are locked if a user is currently editing them, however, we also strive to keep documents locked as little as possible. Hence, when your connection is lost we unlock the document as we can’t know when you’ll be back.

{{% /tip %}}

---

## Notification about Git-based or unsaved changes 

![](/uploads/2018/06/Screen Shot 2018-06-07 at 4.32.29 PM.png)

Especially when setting up a new site users are frequently pushing changes directly to the repo while they are being edited in Forestry. Users in Forestry will now be notified that a change has occurred in those cases.

![](/uploads/2018/06/Screen Shot 2018-06-07 at 4.37.14 PM.png)

We get it, sometimes you make changes without saving them. The problem is that we won’t know if you want these changes to persist until you save your changes. To prevent us from keeping multiple versions of the same document we will now prompt users if we kept unsaved changes for a file.