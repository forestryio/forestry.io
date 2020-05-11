---
title: Why Can't I Deploy to a Bitbucket Branch?
weight: 12
layout: single
publishdate: 2018-11-09 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-11-09 04:00:00 +0000
menu:
  faqs:
    parent: FAQs
    weight: 12

---
Bitbucket allows you to [host a website](https://confluence.atlassian.com/bitbucket/publishing-a-website-on-bitbucket-cloud-221449776.html) by pushing static HTML to a branch in your Bitbucket repo, much like GitHub Pages. Previously, users with a Bitbucket repo could configure their site to be deployed back to Bitbucket.

This behavior relied on using short-lived OAuth tokens to authenticate your account with Bitbucket, which caused problems when deployments were triggered while you were not logged in to Forestry. We have since [upgraded our platform to use long-lived SSH keys](/blog/migrating-to-key-based-authentication/) instead of OAuth tokens.

Unfortunately, due to limitations of Bitbucket's API, we are no longer able able to support deployments to Bitbucket at this time. Due do these limitations, we recommend using GitHub or GitLab to provide the optimum experience with Forestry.
