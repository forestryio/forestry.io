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

At Forestry we strive to make your content editing experience as seamless as possible and closing in on the speed of making edits in your local environment is high up on our list. We spoke to countless companies, agencies, teams and creators and we heard loud and clear: speed of previewing content should be our priority. 

Why is this an issue?

Fast previews are essential to a seamless editing experience. Especially at later stages of writing an article, editors need to have an idea of what that text, that headline and that image is going to look like in its final state. This usually means a lot of clicking back and forth between editor and site, any delay here can frustrate and significantly impact time-to-publish.  
  
Delays in previewing content can even affect the quality of the final product. Delays often cause a disconnect to the text at hand and makes your mind wander. Losing that important spark or overlooking breaks in the narrative due to lost focus or a thought can have painful consequences for the success of any piece of content.  
  
In short: Delays... Are... A... Big... Issue...

How did it work so far?

Until now, Forestry build your previews just like your deployments. Different from your local environment we would require a `build command` and every time you clicked on the Preview Button Forestry would build your site from scratch.  
  
Most static site generators have a `preview command` that allows for incremental updates. This makes your previews much faster and Instant Previews allows you to take advantage of these commands.  
  
With the regular Preview system you can come into the position of waiting for your preview to be backed up behind a few other edits or outdated preview triggers. Because Previews are generally handled like other jobs in our queue, can't be cancelled and have to be done in order.  
  
With Instant Previews this bottleneck is removed, whether or not your edits are committed back to your repository or not, your preview will be updated without delay and delivered as soon as it's ready. This faster feedback is possible because you're now running a development server in our preview environment that is only waiting for your updates.

This feature is free for everyone to use but it will have a 100 GB limit per month. This is enough for most sites to use this feature with no additional costs. However, the data limit is going to impact users with very media-heavy sites or otherwise very large sites.