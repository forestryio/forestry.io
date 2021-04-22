---
date: 2021-04-21T21:34:28+00:00
publishdate: 2021-04-21T21:34:28+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
authors:
- Scott Gallant
title: Tina Cloud, the next iteration of Forestry
headline: ''
description: 'Tina Cloud is our new headless API backed by Git, built on top on our
  open source visual editor TinaCMS. For now it only supports Next.js sites, support
  for non-react websites will come later. '
textline: ''
images:
- "/uploads/2021/04/next-iteration-of-forestry.png"
photo_credit: ''
categories:
- CMS
- Company
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: 
aliases: []
menu: []

---
Over the past 14 months, we’ve been hard at work building the next iteration of Forestry CMS, [Tina Cloud](https://tina.io/blog/tina-cloud-a-headless-cms-backed-by-git/). Next month, we’re launching a small public beta for Tina Cloud and are initially focused on a narrow use case to refine some UI/UX work before expanding the beta to a larger audience.  This narrow use-case will target React-based sites, preferably using [Next.js](https://nextjs.org).

## Tina Cloud

Tina Cloud is a headless API backend that talks to your Git repository, much like Forestry but with an open-source GraphQL API. Unlike Forestry, Tina Cloud does not include the content editing UI. This is because we’ve taken a decoupled approach and the editing happens in TinaCMS, our open-source editor. Also, we used many concepts that we developed for Forestry such as content modeling via Front Matter Templates when building Tina Cloud so there are a lot of similarities in workflows.

## Forestry Compatibility

We will eventually make Tina Cloud compatible with Forestry sites (including non-React sites). We will continue to support both Forestry CMS and Tina Cloud until Tina Cloud is at feature parity with Forestry (targeting Dec 2021). At that point, we’ll have a generous migration window to help our existing Forestry users migrate to Tina Cloud before we officially sunset Forestry CMS.

This migration will also involve switching out the Forestry Admin UI with [TinaCMS](http://tina.io/) UI. TinaCMS is our open-source front-end editor and is similar to the Forestry [Remote Admin](https://forestry.io/docs/editing/remote-admin/) but includes a live preview next to your editing fields.

![](https://res.cloudinary.com/forestry-demo/image/upload/v1619023278/tina-cms-visual-editing.gif)

We have developed a number of TinaCMS proof-of-concepts that could work for Forestry sites. One uses a more traditional CMS UI with full-screen editing fields instead of a split-plane layout (seen above). Another PoC uses an iframe to load your static site in the right preview pane. Our research is in a very early phase but with the open-source architecture and flexibility of TinaCMS, we're optimistic about what it can do.

Finally, a unique approach we've taken with the TinaCMS editing UI is that it's backend-agnostic and can connect to any content storage solution. That way, you're not locked into Tina Cloud and could connect directly to the GitHub API or another headless CMS for instance.

## Conclusion

Most people in our company, myself included run forestry sites. So rest assured that Tina will be a good home for these sites in the future.

We believe that content management can be so much better and we intend to show the world what’s possible. To get there, we’re leaning into visual editing and Git-backed content.  We’re excited about the value that TinaCMS and Tina Cloud will unlock for people: visual editing, open-source and pluggable architecture, multi-branch workflows, and more.

We'll continue to share our progress with you in the coming months.