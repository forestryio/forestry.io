---
aliases:
- "/blog/post/why-we-built-forestry"
authors:
- scott-gallant
publishdate: 2016-01-06 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
excerpt: 'The winding road that led us to building a decentralized UI for the web. '
title: Why we built Forestry
categories:
- company
headline: ''
description: ''
textline: ''
images: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
date: 2016-01-06 04:00:00 +0000

---
My friend, Emily, needed a simple website for her restaurant.  She's a chef and didn't want to deal with the hassle of DNS, hosting, design, etc.  As a recovering freelancer, I offered to help.

Normally, I would use WordPress for a site like this, but I was fed up with the headaches that comes with maintaining a WordPress site.  So, I took an evening and cranked out a simple 1-page static site.

## A Response to Amazon Web Services

My friend (and business partner), Jordan, asked me where I was going to host it but I didn't know.  I wanted to throw it on S3, but didn't want to be tied to her S3 bucket for the rest of my life. And I knew Emily would never be able to navigate the nightmare-interface that is AWS.

![AWS interface](/uploads/2017/12/aws-console-puke.png)

Amazon's cluttered UI (it reminds me of C-Panel).

We decided to build a more user-friendly interface that allowed us to easily host sites on S3. So we could hand it off to Emily.

![](/uploads/2017/12/admin1-1.png)

Our system for  of hosting static sites S3

<hr>

## Feedback from HN

<img src="/uploads/2017/12/cms2.png" class="small right">We shared this project on [Hackernews](https://news.ycombinator.com/item?id=10062939) and to our surprise, it got a lot of interest and went to the homepage.  What people were most excited for was this little CMS feature we had on the side.  It wasn't really built, but we described our plan with some screenshots and said it was "coming soon".

## Hosting Platform Vs CMS

We decided to run a simple test comparing the two directions we could take focus on Hosting or focus on a CMS.  Our guts told us there was a bigger need for a CMS and data backed that up (slightly).

![](/uploads/2017/12/fb_cms2.png)

StatikCMS - The ad for our fake CMS platform

![](/uploads/2017/12/fb_host.png)

StatikHost - The ad for our fake hosting platform

## Months of hard work

We focused on our favorite tools ([Jekyll](http://jekyllrb.com/) and [Hugo](http://gohugo.io/)), we worked like dogs for months and finally got a working MVP online.  So far we're getting a lot of great feedback from the dev community.
![](/uploads/2017/12/screenshot-white-matt.jpg)