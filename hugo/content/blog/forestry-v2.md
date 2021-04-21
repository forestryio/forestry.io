---
date: 2021-04-21T21:34:28+00:00
publishdate: 2021-04-21T21:34:28+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
authors: []
title: Tina, the next iteration of Forestry coming later this year
headline: ''
description: ''
textline: ''
images: []
photo_credit: ''
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: 
aliases: []
menu: []
draft: true

---
Over the past 14 months, we’ve been hard at work building the next iteration of Forestry CMS, [Tina Cloud](https://tina.io/blog/tina-cloud-a-headless-cms-backed-by-git/). Next month, we’re launching a small public beta for Tina Cloud and are initially focused on a narrow use case to refine some UI/UX work before expanding the beta to a larger audience.  This narrow use-case will target React-based sites, preferably using Next.js.

Tina Cloud is a headless API backend that talks to your Git repo, much like Forestry but with an open GraphQL API.  We used concepts that we developed for Forestry like content modeling via Front Matter Templates and we will eventually make Tina Cloud compatible with Forestry sites (including non-React sites).

We will continue to support both Forestry CMS and Tina Cloud until Tina Cloud is at feature parity with Forestry (targeting Dec 2021). At that point, we’ll have a generous migration window to help our existing Forestry users migrate to Tina Cloud before we officially sunset Forestry CMS.   

This migration will also involve switching out the Forestry Admin UI with the [TinaCMS](http://tina.io/) UI. TinaCMS is our open-source front-end editor and is similar to the Forestry [Remote Admin](https://forestry.io/docs/editing/remote-admin/) but includes a live preview next to your editing fields.

![](https://res.cloudinary.com/forestry-demo/image/upload/v1619023278/tina-cms-visual-editing.gif)

Note: we have developed a TinaCMS proof-of-concept that uses a more traditional CMS UI, similar to Forestry, but with full-screen editing fields instead of a split-plan with live preview.  Our research is in early phases but TinaCMS is very flexible and we're optimistic about what it can support. 

A unique approach we're taking with the TinaCMS editing UI is that it's backend-agnostic and can connect to any content storage solution (including the GitHub API if you do not want to use Tina Cloud).

Most people in our company, myself included, run forestry sites so we’re very motivated to ensure that Tina will be a good home to all Jamstack sites. Ultimately, we’re excited about the value that TinaCMS and Tina Cloud will unlock for people: visual editing, open-source and pluggable architecture, multi-branch workflows, and more.