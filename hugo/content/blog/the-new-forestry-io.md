---
aliases:
- "/blog/post/the-new-forestry-io"
authors:
- scott-gallant
images:
- "/uploads/2017/12/new-forestry-io-cms.png"
- "/uploads/2017/12/og.jpg"
publishdate: 2016-11-01 23:36:26 +0000
expirydate: 2030-01-01 04:00:00 +0000
description: V2 of Forestry.io is live. We redesigned the UI, built a new editor and
  now you can deploy Forestry to your domain with your custom branding.
excerpt: V2 of Forestry.io is live. We redesigned the UI, built a new editor and now
  you can deploy Forestry to your domain with your custom branding.
title: The New Forestry.io
categories:
- CMS
date: 2016-11-01 19:36:26 -0400
headline: ''
textline: ''
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
menu: []

---
We're happy to announce some huge improvements to [Forestry.io](http://Forestry.io), our CMS for Jekyll and Hugo sites.

Before I outline what's new, I want to thank everyone who has been testing this while it was in beta (you know who you are). Your help was crucial and we're going to continue to build an awesome CMS that you love. 👊

## What's new:

### New Editor

We totally rebuilt our WYSIWYG editor (inspired by Medium.com).

* Flip between Markdown (or HTML) and WYSIWYG.
* Drag and drop images
* Highlight text to change formatting
* Clean and simple interface

![](/uploads/2017/12/Forestry-io-editor.gif)

Thanks to [@envygeeks](https://envygeeks.io/) for all of his hard work on this.

---

### Redesigned UI

Our UI has been completely redesigned and is now mobile friendly.  We're not going to stop until this is the slickest CMS on the planet. Thanks to [Nichlas](https://twitter.com/nichlaswa) for his amazing design chops here. I designed V1 of Forestry and I'm happy to say that Nichlas has warped us to level 3.

![](/uploads/2017/12/new-forestry-io-cms-3.png)

---

### Remote Admin

Remote Admin is a single html file that you drop into your static site and it allows you to access your CMS from mysite.com/admin/. We think this is pretty cool. It's like WordPress, but instead of 100's of PHP files, it's just a single HTML file that doesn't require any updates.  Thanks to [Nolan](https://twitter.com/ncphi) who flawlessly guided this project.

![](/uploads/2017/12/forestry-remote.gif)

---

### Custom Branding

With Remote, you can also customize the branding and replace the Forestry logo with your own.

![](/uploads/2017/12/forestry-white-label.gif)

---

### Automatic Building and Deploying

You can tell Forestry to watch Jekyll or Hugo repo and build your site when you commit to that repo. Forestry can also deploy your built site to your host (S3, FTP, Git branch, etc). Like continuous integration for static sites.

![](/uploads/2017/12/xQ36lylOK6.gif)

---

### Pricing and Billing

We changed our pricing to build a better, more sustainable service. Forestry will be free to use for personal projects (1 user), but we'll be charging medium and larger teams. Also, soon you'll be able to set up client billing if you want your client to handle the payment. [Peter](https://github.com/volgorean) has been heading this up while juggling countless support requests.

---

### What's next?

* Hosting - we're building a hosting platform on top of a blazing-fast, global CDN. If you're a paying Forestry customer, you can host with us for no additional cost.
* Better control over the UI
  * Support for new front matter fields like photo galleries
  * Customize the CMS interface (hide stuff, move stuff, etc)
  * Jekyll nav menus (Hugo already supports this)
* Media manager
* Image editing (cropping, resizing, etc)
* Support for more static site generators

We're super excited to get this into your hands. We're absolutely convinced this is the future of the web and we're dead-set on making the best tools for it. As always, let us know what you'd like to see improved.