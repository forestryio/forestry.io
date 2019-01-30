---
title: Announcing Instant Previews
description: ''
date: 2019-02-05 17:00:00 +0000
authors:
- Sebastian Engels
publishdate: 2019-02-05 17:00:00 +0000
expirydate: 2030-02-05 04:00:00 +0000
headline: ''
textline: ''
images: []
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
Today we're happy to announce a faster way to preview your content in Forestry. Our new feature **Instant Previews** allows you to incrementally update your site, dramatically reducing the time to create your preview.

## Why Instant Previews?

We strive to make your content editing experience as seamless as possible and from big companies and agencies to the individual dev you made it clear:

_Speedy Previews is what Forestry needs!_

Here are just two reasons why faster previews were necessary.

### Better Editing

Writing an article, content creators need to know what that text, that headline or that image is going to look like in its final state. This usually means a lot of back and forth between editing and regenerating a site preview, any delay here can frustrate and significantly impact time-to-publish.

Moreover, delays are disruptive to staying focused and keeping your thoughts in order. Writing is an inherently creative task, getting into the "zone" is essential to achieve great results. A delayed preview can rip you out of that deep state of mind and risks the loss of that important spark or train of thought.

### Large Sites

Depending on your static site generator, large sites can take a long time to build, for some sites it might even take a couple hours. If you're using Jekyll, waiting ten minutes for a site to build is not rare. This might be acceptable for deployment but it's not workable for reviewing and previewing a post, page or article.

**In short: Delays... Are... A... Big... Issue...**

## What do Instant Previews do?

Using regular Previews, Forestry builds your previews just like your deployments. Every time you click on the Preview Button, Forestry builds your entire site from scratch. There's a more efficient way to handling previewing and you're most likely using it in your local environment already.

### Spin up a Development Server

Most static site generators have a `preview command` that allows for incremental updates. This makes your previews much faster.

Now Instant Previews allows you to take advantage of these commands by running your own development server in our preview environment.

### Skip the Queue

It gets even better, Instant Previews allow you to update regardless of what's in the queue. With the regular Preview system you can come into the position of waiting for your preview to be backed up in the queue behind other tasks.

With Instant Previews this bottleneck is removed, whether or not your previous jobs have been completed, your preview will be updated without delay and delivered as soon as it's ready.

### Regular Previews vs Instant Previews

The best way to show off the speed of Instant Previews is by seeing them in action. For this example we used our demo Jekyll site. You can import it [here](https://app.forestry.io/quick-start?repo=forestryio-templates/belkirk-jekyll-demo&provider=github&engine=jekyll).

_Regular Previews (\~14 seconds)_ 👇

{{% screencast "regular-preview" %}}

_Instant Previews_ (\~3 seconds)👇

{{% screencast "instant-preview" %}}

## Setting up Instant Previews

Navigate to your `Previews` settings and switch `Instant Previews` to on.

Now add your preview command and the necessary additional parameters. [Learn More](/docs/instant-previews/)

{{% code_tabs %}} {{% tab "Hugo" %}}

    hugo server --renderToDisk --port 8080 --bind 0.0.0.0

{{% /tab %}} {{% tab "Jekyll" %}}

    bundle exec jekyll serve --port 8080 --host 0.0.0.0

{{% /tab %}} {{% tab "VuePress" %}}

    vuepress dev --port 8080 --host 0.0.0.0

{{% /tab %}}

{{% tab "Gatsby \[beta\]" %}}

    gatsby develop -p 8080 -H 0.0.0.0

{{% /tab %}} {{% /code_tabs %}}

That's it! You're all set.

To debug your previews we've provided you the log in your `Previews` settings.

{{% tip %}}

Currently, this feature has a 100 GB limit per month/per site. This should be more than enough for most sites to use this feature with no additional costs.

The data limit might impact users with very media-heavy sites or otherwise large sites. Forestry will make sure that you're contacted once you hit the data limit.

{{% /tip %}}

For our demo site, Instant Previews **saves us \~80% of waiting time**. Set up Instant Previews and let us know how much time you're saving.

***

If you have any questions feel free to reach out to our support team.

Any recommendations? Good or bad? We want to hear them all - email, twitter or support