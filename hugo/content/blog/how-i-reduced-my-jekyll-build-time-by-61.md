---
title: How I reduced my Jekyll build time by 61%
description: ''
date: 2019-01-09 00:00:00 +0000
authors:
- Colin Garvey
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories:
- Jekyll
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
As of writing this Jekyll’s performance is still actively being worked on by the Core Team for an upcoming version 4 release. One of the main complaints about Jekyll for users is often the [build times of larger websites](https://forestry.io/blog/hugo-vs-jekyll-benchmark/). I want to take this opportunity to see just how much I can expect to improve my current site's build times by using the latest master branch.

Sound good? Let’s get started.

## Benchmarking your Jekyll website

First we need to evaluate the current build status. We can achieve this by using Jekyll’s built in liquid profiler flag to spot any performance improvement opportunities.

    bundle exec jekyll build --profile

Output:

    Filename                         | Count |    Bytes |  Time
    ---------------------------------+-------+----------+------
    
    _layouts/post.html               |   277 | 3978.62K | 3.137
    _layouts/default.html            |   308 | 5580.10K | 2.943
    _layouts/archive.html            |    88 | 1629.61K | 1.732
    _includes/head.html              |   396 |  918.30K | 1.627
    _includes/read_time.html         |   328 |   16.95K | 1.010
    _includes/header.html            |   305 |  261.02K | 0.910
    _includes/post_meta.html         |   277 |  214.22K | 0.726
    _includes/share_icons.html       |   277 | 1021.17K | 0.671
    _includes/figure                 |    72 |  112.82K | 0.659
    _includes/category_tag_list.html |   277 |  150.49K | 0.537
    _includes/footer.html            |   396 |  328.32K | 0.518
    _includes/navigation.html        |   305 |  255.23K | 0.442
    _pages/archive.md                |     1 |  219.33K | 0.377
    _includes/author_bio.html        |   277 |  207.05K | 0.363
    _includes/disqus_comments.html   |   277 |  155.65K | 0.349
    sitemap.xml                      |     1 |   42.99K | 0.218
    feed.xml                         |     1 |   58.57K | 0.038
    
    ...
    
    done in 16.114 seconds.

As you can see above, Jekyll 3.8.5 manages to build my website which has **277** posts and **30** pages in **16.114** seconds.

Not bad but we can definitely improve this.

### :hourglass: 16.114 seconds

## 1. Switch to the latest Jekyll master branch

Before we continue it’s important to note that this is an unreleased development version of Jekyll and should be used with caution on a production site.

To use the latest Jekyll master branch update your `Gemfile` with the following line.

```diff
- gem "jekyll", "3.8.5"
+ gem "jekyll", github: "jekyll/jekyll"

group :jekyll_plugins do
  gem "jekyll-archives"
  gem "jekyll-feed"
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end
```

Commit URL: [b572c61](https://github.com/desiredpersona/jekyll-test-site/commit/b572c61bf6c8f6adea79185831c82d8e71aa70b4)

We also need to add `.jekyll-cache` to our `.gitignore` file because Jekyll has a new [cache API](https://github.com/jekyll/jekyll/blob/master/docs/_tutorials/cache_api.md).

Next update Jekyll with `bundle update` and then once again run a new build command with the liquid `--profile` flag.

Jekyll builds my site in **8.55** seconds which is already a decrease of **46.9%**.

We are off to a good start.

### :hourglass: 8.55 Seconds

## 2. Use Shopify’s Liquid-C gem

We will take advantage of the Shopify [liquid-c gem](https://github.com/Shopify/liquid-c) written in C to speed up Liquid parsing. For this to work we simply need to update our `Gemfile`.

```diff
gem "jekyll", github: "jekyll/jekyll" 
+ gem "liquid-c"

group :jekyll_plugins do
  gem "jekyll-archives" 
  gem "jekyll-feed"
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end
```

Commit URL: [977fd24](https://github.com/desiredpersona/jekyll-test-site/commit/977fd247c2f3cbf9ac3c5fb876c228881c464400)

Jekyll now builds my site in **7.74** seconds which is a further decrease of **9.47%**.

### :hourglass: 7.74 Seconds

## 3. Use Jekyll CommonMark gem

We will use [jekyll-commonmark](https://github.com/jekyll/jekyll-commonmark) because it is faster than kramdown. After switching, I noticed that CommonMark doesn’t support block attributes such as `{:.btn .btn–primary}` because it broke parts of my website. You will need to make use of html tags instead.

First update your Gemfile.

```diff
gem "jekyll", github: "jekyll/jekyll"
gem "liquid-c"

group :jekyll_plugins do
  gem "jekyll-archives" 
+  gem "jekyll-commonmark"
  gem "jekyll-feed"
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end
```

Then add the gem to your `_config.yml` file under plugins.

```diff
plugins:
  - jekyll-archives
+  - jekyll-commonmark
  - jekyll-feed
  - jekyll-remote-theme
  - jekyll-seo-tag
  - jekyll-sitemap
```

Also tell Jekyll to use the gem.

```diff
- markdown: kramdown
- kramdown:
-     input: GFM
-     hard_wrap: false
-     syntax_highlighter: rouge

+ markdown: CommonMark
+ commonmark:
+   options: ["SMART", "FOOTNOTES"]
+   extensions: ["strikethrough", "autolink", "table"]
```

Commit URL: [bbb1e15](https://github.com/desiredpersona/jekyll-test-site/commit/bbb1e15dc16dd73aeaa00c7f67b40272ca125ef5)

Jekyll builds my site in **7.209** seconds which is a further decrease of **6.86%**.

### :hourglass: 7.209 Seconds

## 4. Use Jekyll Include Cache plugin

To see how Jekyll `_includes` affect site build times, we need to take another look at the build profile above. Right away you can see some include files are being called hundreds of times creating a performance bottleneck.

`head.html` called **397** times.

`analytics.html` called **397** times.

`read_time.html` called **2163** times.

`navigation.html` called **305** times.

Yikes! So much for being neat and tidy.

Your first move should always be to remove any `_includes` files which are needlessly being called upon and integrate them directly in that specific layout file where possible. We can make use of liquid comments instead to keep things readable. Jekyll turns anything you put between `{% comment %}` and `{% endcomment %}` Liquid tags into a comment. This basically means any text within the opening and closing comment blocks will not be output, and any Liquid code within will not be executed by Jekyll.

To give you a few examples,

I removed my `analytics.html` include file in favour of Google Tag Manager which I placed directly in the `head.html` file. This will keep my build times down when I specify a production environment `JEKYLL_ENV=production` with my build command. [fa737c2](https://github.com/desiredpersona/minimal-jekyll-theme/commit/36e8f6f2b58f072e922e86ddbe37ce59aa5be84b)

After some thought I decided to remove the `head.html` include file and directly placed all the `<head>` elements within the `default.html` layout saving me an execution time of **1.627** seconds. [c8acbb3](https://github.com/desiredpersona/minimal-jekyll-theme/commit/c8acbb3a3e9c7d7ea1ceae9d770a3b452ab15381)

To make it easier for users to try out a theme Jekyll 4 will load the `_config.yml` file from [within the current theme-gem](https://github.com/jekyll/jekyll/pull/7304). Knowing this, I started by moving the Disqus shortname setting to my themes `_config` file. [36e8f6f](https://github.com/desiredpersona/minimal-jekyll-theme/commit/f20da364544de90fd4812872dc92def3ff7b019d).

I then proceeded to move the rest of the default theme settings from my `theme.yml` data file to my themes `_config.yml` file so that Jekyll can load a fully working theme demo on install. [e601721](https://github.com/desiredpersona/minimal-jekyll-theme/commit/e6017211ed60cc721ac3e38107664b30faa81c1a)

The `blog.html` layout created a bottlenecks during build time because it lists all 277 posts. By limiting this to the latest 10 posts and archiving older posts with just a date and title I reduced the amount of includes being generated at build time. [67840bb](https://github.com/desiredpersona/minimal-jekyll-theme/commit/67840bbfb80c58d746e4f58ee1eb99f69819c404)

Done tidying up your Jekyll Includes?

We can now make use of [jekyll-include-cache](https://github.com/benbalter/jekyll-include-cache) a Jekyll plugin created by [Ben Balter](https://ben.balter.com) that will cache the rendering of our Liquid includes.

> If you have a computationally expensive include (such as a sidebar or navigation), Jekyll Include Cache renders the include once, and then reuses the output any time that includes is called with the same arguments, potentially speeding up your site's build significantly.

Update your `Gemfile`.

```diff
gem "jekyll", github: "jekyll/jekyll" 
gem "liquid-c"

group :jekyll_plugins do
  gem "jekyll-archives"
  gem "jekyll-commonmark"
  gem "jekyll-feed"
+  gem "jekyll-include-cache"
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end
```

Update the plugins in your sites `_config.yml` file.

```diff  
plugins:
  - jekyll-archives
  - jekyll-commonmark
  - jekyll-feed
+  - jekyll-include-cache
  - jekyll-remote-theme
  - jekyll-seo-tag
  - jekyll-sitemap
```

Commit URL: [264db43](https://github.com/desiredpersona/jekyll-test-site/commit/264db43d64760637b9e752104a44d0e9b81e81eb)

It's important to note that when using the `jekyll-include-cache` plugin you cannot rely on the [page context to pass variables to your include](https://github.com/benbalter/jekyll-include-cache#one-potential-gotcha). This limitation made it impossible to cache some of my include files without breaking the themes functionality.

I started by caching the navigation in the header and footer of my site. These includes are being called on every page and don’t change that frequently.

To cache the header navigation I had to remove the page context from the `navigation.html` file and make a few changes to the themes header. [e097f2b](https://github.com/desiredpersona/minimal-jekyll-theme/commit/e097f2b69be0d4afa03f8cc19100fa3ab85f960a)

To cache the footer I simply replaced `{% include footer.html %}` within my `default.html` template with `{% include_cached footer.html %}`. [4b86f63](https://github.com/desiredpersona/minimal-jekyll-theme/commit/4b86f63b4d96c5e3ddae2e4d93d436c34b9979ab)

If you need to clear the Jekyll cache at anytime use the following command.

    bundle exec jekyll clean

After all these changes Jekyll now builds my site in **6.262** seconds a further decrease of **13.136%**.

### :hourglass: 6.262 Seconds

## Conclusion

In closing I have managed to shave a grand total of **9.852** seconds off my original build time of **16.114** seconds, which is a whopping **61.139%** speed improvement.

It's worth mentioning we can also enable [incremental regeneration](https://jekyllrb.com/docs/configuration/incremental-regeneration/) which helps shorten Jekyll build times by only generating the documents and pages that were updated since the previous build.

    bundle exec jekyll serve --incremental

Alternatively you can set `incremental: true` in Jekyll’s `_config.yml` file. Im seeing build times as low as **5.11** seconds with this feature enabled.

Please consider posting your benchmarking results on [the Jekyll Forum](http://talk.jekyllrb.com/t/help-us-benchmark-jekyll/1629/17). Jekyll’s core team of volunteers are actively working on improving Jekyll’s performance and would appreciate your feedback.

Happy Jekylling!