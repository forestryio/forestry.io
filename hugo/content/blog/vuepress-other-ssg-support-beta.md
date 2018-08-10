---
title: Support for Vuepress [Beta]
description: ''
date: 2018-08-08 21:36:10 -1100
authors:
- Sebastian Engels
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/08/vuepress.png"
categories:
- CMS
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
Vuepress support is here!

Support for Vuepress and other static site generators was on our roadmap for a while now. In fact, we were thinking about adding other Static Site Generators (SSGs) to Forestry back when we [launched on Producthunt](https://www.producthunt.com/posts/forestry#comment-320289 "launched on Producthunt") almost two years ago.

_Why did it take so long?_ We love to create a great content management experience and make an app that is as easy-to-use for developers as it is for editors. That's why until now other features (e.g. [blocks](), [cloudinary integration](https://forestry.io/blog/cloudinary-integration/) or [editing in teams](https://forestry.io/blog/renaming-files-and-improving-team-editing/)) were given priority over expanding our support to other SSGs.

_Why Vuepress and not Gatsby?_ Vuepress' default support for .html and .md is similar to Hugo and Jekyll behavior which makes it a great candidate for our content editor. We already made a lot of changes (to the sidebar, imports etc.), so jumping to an SSG like Gatsby that doesn't default to .md or .html files felt like we're skipping a step.

This is a big announcement for us and we're looking forward to hearing what you have to say about it. Feel free to reach out to us via the `Support` section in your sidebar, on [Twitter](https://twitter.com/forestryio) or our [Slack Community](https://forestry.io/blog/join-our-slack-community/) Let me walk you through importing your first Vuepress project in two steps.

<div id="ELEMENT_ID" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/itsnwa/portfolio-vuepress"
branch="master"
engineName="vuepress"
engineVersion="0.12.0"
forkName="portfolio-vuepress"
heading="You don't have a Vuepress Project?"
linkText="Add Forestry's Vuepress Portfolio Theme" %}}
</div>

![](/uploads/2018/08/Screen Shot 2018-08-10 at 10.40.28 AM.png)

{{% warning %}}

Please note that the Vuepress support is currently still in beta. Certain features such as previews are not available at this point.

{{% /warning %}}

***

## 1. Import your Vuepress Project

You can now select your Vuepress project in our options when you [add a new site](https://app.forestry.io/dashboard/#add-site).

![](/uploads/2018/08/import-vuepress-2.png)

***

## 2. Configure Your Sidebar

After your import we'll ask you to configure your sidebar. Simply click the link after your import or go to `Settings` and select the `Sidebar` tab. Check out the [docs](https://forestry.io/docs/settings/content-sections/) for more information. For the Portfolio Theme above we've already pre-configured a few sections for you.

![](/uploads/2018/08/docs-configuration.png)

***

## Add Headings and Single Documents to Your Sidebar

With our latest update we've also included the ability to add section headings such as (`data` or `site`) and single files to your sidebar.

![](/uploads/2018/08/sidebar-headings-1.png)

More than other times, it is important that we get feedback on what is working for you, what isn't and what features you will need.