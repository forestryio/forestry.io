---
title: Support for VuePress [Beta]
description: "Support for Static Site Generators (SSGs), beyond Jekyll and Hugo, was
  on our roadmap for a while. Now, VuePress support is here! \U0001F389\U0001F389\U0001F389 "
date: 2018-08-10 08:36:10 +0000
authors:
- Sebastian Engels
publishdate: 2018-08-10 03:00:00 +0000
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

---
[VuePress](https://vuepress.vuejs.org/) support is here! 🎉🎉🎉

Support for Static Site Generators (SSGs), beyond Jekyll and Hugo, was on our roadmap for a while now. In fact, Jordan mentioned adding other SSGs to Forestry back when our first beta was [leaked on Producthunt](https://www.producthunt.com/posts/forestry#comment-320289) two years ago.

_Why did you make us wait?_ We love to create a great content management experience and make an app that is as easy-to-use for developers as it is for editors. That's why until now other features (e.g. [blocks](https://forestry.io/blog/blocks-give-your-editors-the-power-to-build-pages/), [cloudinary integration](https://forestry.io/blog/cloudinary-integration/) or [editing in teams](https://forestry.io/blog/renaming-files-and-improving-team-editing/)) were given priority.

_Why VuePress?_ VuePress is a simple and easy-to-learn SSG that gets you up-and-running in no time. This simplicity made adding support for VuePress a lot more manageable. Additionally, since it generates content from markdown files with YAML front matter, it's a great fit for our existing editor.

This is a big announcement for us and we're looking forward to hearing what you have to say about it. Feel free to reach out to us via the `Support` section in your sidebar, on [Twitter](https://twitter.com/forestryio) or our [Slack Community](https://join.slack.com/t/forestry-community/shared_invite/enQtNDAxMTU5NzcwMzA3LWUyYTk3NDY2ZDNiMjFhNmVlMjExM2FjYzFhNjJhNjU2NTc2ODVjZTdlYjJiODhhZDgwYTVhYjY0ZGU3ZWFmYzM). Now, let me walk you through importing your first VuePress project in two steps.

<div id="ELEMENT_ID" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/forestryio/portfolio-vuepress.git"
engineName="vuepress"
engineVersion="0.12.0"
heading="You don't have a VuePress Project?"
linkText="Add Forestry's VuePress Portfolio Theme" %}}
</div>

See the repo [here](https://github.com/forestryio/portfolio-vuepress)

![](/uploads/2018/08/portfolio-screenshot.png)

{{% warning %}}

Please note that the VuePress support is currently still in beta. Certain features such as previews are not available at this point.

{{% /warning %}}

***

## 1. Import your VuePress Project

You can now select your VuePress project in our options when you [add a new site](https://app.forestry.io/dashboard/#add-site).

![](/uploads/2018/08/import-vuepress-flow.png)

***

## 2. Configure Your Sidebar

After your import, we'll ask you to configure your sidebar. Simply go to `Settings` and select the `Sidebar` tab. Check out the [docs](https://forestry.io/docs/settings/content-sections/) for more information.

![](/uploads/2018/08/docs-configuration.png)

{{% tip %}}

You can reset previous configurations by removing `.forestry/settings.yml` and reimporting your site under `Settings` selecting the `Repository` tab.

{{% /tip %}}

***

## Add Headings and Single Documents to Your Sidebar

We also made a few other changes. Now, you can create custom headings in your content sections and add single files to your sidebar. Read more in the [docs](https://forestry.io/docs/settings/content-sections#type)

![](/uploads/2018/08/sidebar-headings-1.png)

You can check out a full list of changes, bug fixes and upgrades in our [changelogs](https://forestry.io/docs/changelog/).

We're looking forward to hearing your feedback and suggestions on how we can make your experience better.

If you like this, please consider telling your friends about it on Twitter 🐦, in chats 💬 or over coffee ☕.

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17734860">Discuss on Hacker News</a>