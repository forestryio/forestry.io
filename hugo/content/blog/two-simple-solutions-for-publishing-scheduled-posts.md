---
title: Two Simple Solutions for Publishing Scheduled Posts
description: ''
date: 2018-05-03 07:10:15 -1100
authors:
- DJ Walker
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
categories:
- Frontend-Friday
headline: ''
textline: ''
images: []
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
## Going Beyond Static

Part of our mission at Forestry is to dissolve the perceived limitations of static sites. The reality is that static sites are relatively simple to interoperate with, and suggesting that a statically-generated site isn't capable of _feature X_ is largely a failure of imagination. With a little cleverness and determination, virtually anything is possible on a static platform.

This perspective is core to the philosophy at Forestry. Our content editor takes advantage of this simplicity and interoperability, acting as an additional layer on top of the existing static site machinery. When a site is hooked up to Forestry, it can still be edited in a local development environment as usual. We don't have to rewire anything about how the site works.

Today, we will tackle a basic feature {...}

## The Old Way

Scheduling posts is easy when using a database-driven, backend-heavy CMS like WordPress: just enter the date and time you want to schedule the post, and click the "Schedule" button. Your post should automatically appear on the site once the date and time of the post have passed. You're done!

**Actually, hang on.** If you're using a page cache plugin (which is essential to keep the site running fast,) you will probably need to clear the cache once the post is published. Once you figure out how to clear the page cache at regular intervals, perhaps you've solved this problem and now you're done.

**Ah, but maybe not.** Sometimes WordPress will give you a *Missed Schedule* error and won't publish the post! Go ahead and spend the rest of your day sorting that one out.

## Statelessness is Next to Godliness

At first, adding dynamic behaviors to a static site {...}

> Build the site that everyone will see. Only include posts with a publish date of right now, or some time in the past. 

If I want to publish a post tomorrow, I will just re-run this algorithm tomorrow.

## Building the Solution

### Scheduled Deployments with CircleCI

### Use a Lambda Task to Trigger Your Build