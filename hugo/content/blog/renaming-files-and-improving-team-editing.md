---
title: Renaming Files and Improving Editing in a Team
description: Over the past couple weeks we were hard at work to improve the editor
  experience for our Git-backed content manager. Working with Git repos we come across
  some unique advantages and challenges.
date: 2018-06-08 04:39:03 -1100
authors:
- Sebastian Engels
publishdate: 2018-06-08 03:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
categories:
- CMS
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
It’s a cloudy day ☁️ here on Prince Edward Island, the perfect opportunity to announce some new features.

Over the past couple weeks, we were hard at work to improve the editor experience for our Git-backed content manager. Renaming files is just one of those updates. We also needed to improve notifications and indicators to make working in a team on Forestry easier.

---

### Renaming Files ✍️

Freshly out — you can now change the name for your content files with Forestry. Jekyll and Hugo take the filename to create the default URL paths, so editors can now easily change the URL path with this new feature. Previously, filename changes could only be made directly in the repo.

![](/uploads/2018/06/loop-rename-page.gif)

{{% tip %}}

This option can be found in the Editor under "..." in the top-right corner.

{{% /tip %}}

---

### Currently Being Edited by - Indicator 💁

As a Git-backed content manager, we need to prevent merge conflicts. That’s why Forestry only allows one editor to change a document at a time. Now you can see immediately who is currently editing a document and if it has unsaved changes.

![](/uploads/2018/06/status-indicator.png)

---

### Connection Lost 💔

Until now users were booted from the post they were editing if the connection was lost. Even though we saved those changes, it made for a less than optimal user experience. From now on, users will only see a bar at the top letting them know that the connection was lost and that we will try to reconnect as soon as possible.

![](/uploads/2018/06/connection-lost-arrow.png)

---

### Notification about Git-based or unsaved changes 🔔

Especially when setting up a new site, users are frequently pushing changes directly to the repo while they are being edited in Forestry. Users in Forestry will now be notified that a change has occurred in those cases.

![](/uploads/2018/06/another-user.png)

**Unsaved Changes** - To make sure we use the right version, we will now also prompt users when we found unsaved changes for a file.