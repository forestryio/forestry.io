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

We strive to make your content editing experience as seamless as possible and we like to look for improvements by talking with our users. We've been talking to big companies as well as individual content creators and most of you made it very clear:

### _Speedy Previews is what Forestry needs!_

![](/uploads/2019/01/judge-judy.gif)

Here are a couple of reasons why faster previews are necessary, just in case you needed any convincing.

### Better Editing

Writing an article, content creators need to know what that paragraph, that headline or that image is going to look like in its final state. This usually means a lot of back and forth between editing and regenerating a site preview, any delay here can frustrate and significantly impact time-to-publish.

Moreover, delays are disruptive to staying focused and keeping your thoughts in order. Writing is an inherently creative task, getting into the "zone" is essential to achieve great results. A delayed preview can rip you out of that deep state of mind and risks the loss of that important train of thought.

### Large Sites

Depending on your static site generator, large sites can take a long time to build. For some sites we've seen build times of more than an hour. If you're using Jekyll, waiting ten minutes for a site to build is not rare. This might (in some cases) be acceptable for deployment but it's not usable for reviewing and editing a post, page or article.

**In short: Delays... Are... A... Big... Issue...**

{{% tip %}}

Ready to set up Instant Previews? Check out our [Instant Previews Guide](/docs/instant-previews/).

{{% /tip %}}

## What do Instant Previews do?

Using regular Previews, Forestry builds your previews just like your deployments. Every time you click on the <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="1.2"><path d="M12 18c6 0 10-6 10-6s-4-6-10-6-10 6-10 6 4 6 10 6z"></path><circle cx="12" cy="12" r="2"></circle></g></svg> button, Forestry builds your entire site from scratch. This works but there's a much more efficient way to handling previews and you're most likely using it in your local environment already.

### Spin up a Development Server

Most static site generators have a `preview command` that allows for incremental updates. This makes your previews much faster.

Now, Instant Preview allows you to take advantage of these commands by running your own development server in the Forestry preview environment.

### Skip the Queue

It gets even better, Instant Preview allows you to update regardless of what's in the queue. Regular previews are often backed up behind other tasks in the queue causing additional delays.

With Instant Preview this bottleneck is removed, whether or not your previous jobs have been completed, your preview will be updated without delay and delivered as soon as it's ready.

### Regular Previews vs Instant Previews

We believe the best way to show off the speed of Instant Preview is by seeing it in action.

### _Regular Previews (\~14 seconds)_ 👇

{{% screencast "regular-preview" %}}

### _Instant Previews_ (\~3 seconds)👇

{{% screencast "instant-preview" %}}

For this example we used our [Belkirk-Jekyll-Demo](https://github.com/forestryio-templates/belkirk-jekyll-demo/) site. You can test and import it [here](https://app.forestry.io/quick-start?repo=forestryio-templates/belkirk-jekyll-demo&provider=github&engine=jekyll).

For our demo site, Instant Previews **saved us \~80% of waiting time**. [Set up Instant Previews](/docs/instant-previews/) and let us know how much time you're saving on [twitter](https://twitter.com/intent/tweet?text=What%3F!%20My%20static%20site%20now%20previews%205%20times%20faster%20in%20%40forestryio%20with%20Instant%20Previews!%20%23gostatic%20%23staticsites%20https%3A%2F%2Fforestry.io%2Fblog%2Fannouncing-instant-previews%2F).

## Setting up Instant Previews

Navigate to your `Previews` settings and switch `Instant Previews` to _on_

Next, add your preview command and the necessary additional parameters. [Learn More](/docs/instant-previews/)

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

Currently, this feature has a 100 GB per site/per month limit. This should be more than enough for most sites to use this feature with no additional costs.

However, the data limit might impact users with media-heavy sites or otherwise large sites. Forestry will make sure that you're contacted once you hit the data limit.

{{% /tip %}}

Help us share the news on [Twitter](https://twitter.com/intent/tweet?text=Who%20doesn%27t%20want%20Instant%20Previews%20for%20their%20static%20site%20CMS%3F!%20%40forestryio%20just%20made%20that%20happen.%20%23gostatic%20%23staticsites%20https%3A%2F%2Fforestry.io%2Fblog%2Fannouncing-instant-previews%2F)!

***

If you have any questions feel free to reach out to our support team.

Any recommendations or comments? Good or bad? We want to hear them all - [email](https://forestry.io/support/), [twitter](https://twitter.com/forestryio) or in-app support.