---
title: Announcing Instant Previews
description: ''
date: 2019-01-27 06:00:00 -1100
authors: []
publishdate: 2019-01-27 06:00:00 -1100
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
Today we're happy to announce a major improvement to the way you can preview your content in Forestry. Instant Previews allow you to incrementally update your site, dramatically reducing the time to create your preview.

Why is this an issue?

At Forestry we strive to make your content editing experience as seamless as possible and closing in on the speed of making edits in your local environment was high up on our list for some time. Anybody we spoke made it crystal clear: speedy previews are what you need!

Fast previews are essential to for a great editing experience. Especially at later stages of writing an article, editors need to have an idea of what that text, that headline and that image is going to look like in its final state. This usually means a lot of clicking back and forth between editor and site, any delay here can frustrate and significantly impact time-to-publish.

Delays in previewing content can even affect the quality of the final product. Delays often cause a disconnect to the text at hand and makes your mind wander. Losing that important spark or overlooking breaks in the narrative due to lost focus or a thought can have painful consequences for the success of any piece of content.

In short: Delays... Are... A... Big... Issue...

How did it work so far?

Using regular Previews, Forestry builds your previews just like your deployments. Every time you click on the Preview Button Forestry builds your entire site from scratch. That's not super efficient.

Most static site generators have a `preview command` that allows for incremental updates. This makes your previews much faster.   
  
Now Instant Previews allows you to take advantage of these commands by running your own development server in our preview environment.

It gets even better, with the regular Preview system you can come into the position of waiting for your preview to be backed up in the queue. Because Previews are generally handled like other jobs in our queue, they can't be cancelled and have to be completed in order.

With Instant Previews this bottleneck is removed, whether or not your previous jobs have been completed, your preview will be updated without delay and delivered as soon as it's ready.

This feature is free for everyone to use. But, it will have a 100 GB limit per month. This is enough for most sites to use this feature with no additional costs. However, the data limit is going to impact users with very media-heavy sites or otherwise very large sites.