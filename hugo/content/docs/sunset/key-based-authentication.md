---
title: Key-Based Authentication
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-10-05 10:37:36 +0000
headline: ''
description: ''
textline: ''
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: 3
aliases: []
menu:
  sunset:
    weight: 2
    parent: Sunset Notices

---
We've rolled out an update that uses persistent SSH keys to interact with your repo. Previously, we were relying on OAuth tokens to gain access as needed, but some users were encountering problems with this method as tokens would intermittently expire before they could be refreshed. Using long-lived SSH credentials is intended to solve this problem.

**We will be sunsetting token-based authentication on February 1, 2019.**

More on [How To Migrate Your Projects](/blog/migrating-to-key-based-authentication/)