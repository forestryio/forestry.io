---
title: What's New in Jekyll 3.8
description: Jekyll 3.8.1 was released on the 1st of May 2018, just two weeks after
  3.8.0. The project has come along way since I last wrote a Jekyll update on Forestry.
  So what does Jekyll bring us this time?
date: 2018-05-11 08:14:47 -1100
authors:
- Colin Garvey
publishdate: 2018-05-11 03:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
images:
- "/uploads/2017/12/jekyll-3.4.0-2.png"
headline: ''
textline: ''
categories:
- Frontend-Friday
- Jekyll
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
# What’s new in Jekyll 3.8

Jekyll 3.8.1 was released on the 1st of May 2018, just two weeks after 3.8.0. The project has come a long way since I last wrote a [Jekyll update on Forestry](https://forestry.io/blog/what-s-new-in-jekyll-3-4-0/). [Olivia](https://liv.cat/) is now Jekyll’s new [Lead Developer](https://jekyllrb.com/news/2018/02/19/meet-jekyll-s-new-lead-developer/) since Parker Moore decided to step down after four years leading the project.

So what does Jekyll bring us this time?

## Performance optimizations

Large sites containing a huge amount of posts are going to see a massive reduction in their total build times especially if they are doing multiple calls to the `where` filter with the same `input` and `property` parameter.

On i18n websites, some users have reported an amazing significant decrease in their build time with 3.8: <blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">3.7.3 : 916 seconds <a href="https://t.co/dpbywRDVxM">https://t.co/dpbywRDVxM</a><br>3.8.0 : 263 seconds <a href="https://t.co/PyhNB9GeCd">https://t.co/PyhNB9GeCd</a><br><br>Gain: -71%</p>— Boris 🚀 (@borisschapira) <a href="https://twitter.com/borisschapira/status/987005069097914368?ref_src=twsrc%5Etfw">April 19, 2018</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script><p>
Jekyll also now calculates `site.related_posts` only when needed and way more efficiently. It’s only noticeable if you have thousands of posts.

Let’s test this with [a blog with more than 2200 posts](https://github.com/tomjoht/tomjoht.github.io) and some default plugins.

![](/uploads/2018/05/total-build-times.png)

[https://idratherbewriting.com/](https://idratherbewriting.com/) took on average around 140s to build with Jekyll 3.7.3.

Now it takes around 112s with 3.8.0. That’s a 20% decrease! :blush:

Your mileage may vary depending on your layouts, the plugins used, and the size of your website.

[My minimal and tiny blog](http://desiredpersona.com/) now builds  in 1.76 seconds which is merely 0.02 seconds faster on average. Don’t expect a major speed improvement for such a small website.

## Ordinal dates support

My favorite new feature has to be that Jekyll now allows date filters to output ordinal dates.

As you may know to display dates in Jekyll we need to use the `{{ page.date }}` liquid tag. This outputs the date like so;

    2018-04-22 22:52:12 +0100

To produce a date more reader friendly i’d normally add a date filter like `{{ page.date | date: "%-d %B, %Y" }}` which outputs;

    April 22, 2018

Most people would call it a day here but Jekyll 3.8 now makes it super easy to add ordinal date. You no longer need to bloat your post layout template with liquid or depending on a plugin to do the heavy lifting.

### US ordinal dates

    {{ page.date | date_to_long_string: "ordinal", "US" }} will output April 24th, 2018.
    {{ page.date | date_to_string: "ordinal", "US" }} will output Apr 24th, 2018.

### UK ordinal dates

    {{ page.date | date_to_long_string: "ordinal" }} will output 24th April 2018.
    {{ page.date | date_to_string: "ordinal" }} will output 24th Apr 2018.

## Detection of non-existent variables and filters

Jekyll can now detect non-existent variables and filters specified in a template.

To set this up add the following to your sites `config.yml` file.

    liquid:
    	error_mode:       warn
    	strict_filters:   true
    	strict_variables: true

Liquid’s response to errors has three settings which can be configured by setting `error_mode` to `lax` , `warn` or `strict`.

lax — Ignore all errors.

warn — Output a warning on the console for each error.

strict — Output an error message and stop the build.

After restarting my own site I ran into the following error.

    Liquid Exception: Liquid error (line 5): undefined variable subtitle in /_layouts/post.html
    jekyll 3.8.0 | Error:  Liquid error (line 5): undefined variable subtitle

It turns out I have a `{{ page.subtitle }}` variable in my `post.html` layout template which is not currently being used site-wide on build. I may consider removing this variable sometime in the future to optimize my site build times further. This new feature will be extremely useful to help remove code bloat when working with larger more complicated websites.

## Documentation Updates

Ruby installation is certainly the most frustrating part and biggest pain point for beginners.

It’s now much easier to get started [installing Jekyll on macOS](https://jekyllrb.com/docs/installation/#macOS) [Ubuntu](https://jekyllrb.com/docs/installation/#ubuntu) or [Windows](https://jekyllrb.com/docs/windows/#installation-via-rubyinstaller) using the official instructions.

You may also want to read over this [new tutorial to help you use bundler](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/) to handle your Ruby gems in your Jekyll’s projects. Alternatively you may be interested in Forestry’s [create static site](https://forestry.io/blog/instant-production-ready-scaffolding-with-create-static-site/), a tool that can set up a new Hugo or Jekyll site with a modern, production-ready build pipeline in seconds.

If you are looking to add search to your static site, give jekyll-algolia plugin a try. Algolia have provided great documentation which includes a live demo to get you up and running quickly with [Algolia search for Jekyll](https://community.algolia.com/jekyll-algolia/getting-started.html).

Search has been successfully implemented on [http://yeoman.io/generators/](http://yeoman.io/generators/ "http://yeoman.io/generators/") and [https://idratherbewriting.com/](https://idratherbewriting.com/ "https://idratherbewriting.com/")  if you want to give it a try.

Chris Macrae has also previously covered [Jekyll Search with Algolia and Webtasks](https://forestry.io/blog/search-with-algolia-in-jekyll/) on the Forestry blog. I highly recommend you check it out.

[Premonition](https://github.com/amedia/premonition) is a Jekyll plugin by Amedia that can transform Markdown blockquotes into styled blocks of code. This plugin makes adding notices to your Jekyll site a breeze. Check out [the demo site](https://amedia.github.io/premonition-demo/).

## What’s next?

Development of [Jekyll 4.0 has started](https://jekyllrb.com/news/2018/04/19/development-update/), so now is the right time to [share your ideas](https://github.com/jekyll/jekyll/issues/6948) for the next major version. We should see some improvements on the incremental regeneration, smarter URL filters and hopefully a more coherent way to manage posts, pages and collection’s documents.

An official directory to allow to search for plugins and open source gem-based themes is also in the work.

If you would like to get involved with the project check out Jekyll’s [contributor](https://jekyllrb.com/docs/contributing/) and [maintaining](https://jekyllrb.com/docs/maintaining/) docs for ways to contribute.

Please share if you found this post helpful and let us know if you’d like to see more of these updates.

Until next time. Jekyll FTW  
  
<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We look at <a href="https://forestry.io/blog/snipcart-brings-ecommerce-static-site/">using Snipcart and Forestry</a> to make your static site ready for e-Commerce.</p><p><strong>Last week:</strong> We looked at how to <a href="https://forestry.io/blog/automatically-publish-scheduled-posts-for-static-site/">automatically publish scheduled posts</a> for your static site.</p></div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17047294">Discuss on Hacker News</a>