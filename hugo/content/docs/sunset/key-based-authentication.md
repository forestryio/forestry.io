---
title: Key-Based Authentication
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
authors:
- team forestry
publishdate: 2017-12-07T04:00:00.000+00:00
expirydate: 2020-12-07T04:00:00+00:00
date: 2018-10-05T10:37:36.000+00:00
menu:
  sunset:
    weight: 3
    parent: Sunset Notices

---
We've rolled out an update that uses persistent SSH keys to interact with your repo. Previously, we were relying on OAuth tokens to gain access as needed, but some users were encountering problems with this method as tokens would intermittently expire before they could be refreshed. Using long-lived SSH credentials is intended to solve this problem.

**We will be sunsetting token-based authentication on February 1, 2019.**

More on [How To Migrate Your Projects](/blog/migrating-to-key-based-authentication/)