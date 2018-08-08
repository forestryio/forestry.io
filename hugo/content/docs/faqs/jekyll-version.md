---
aliases:
- "/docs/faq/what-versions-of-jekyll-do-you-support/"
- "/docs/faq/what-versions-of-jekyll-and-plugins-does-forestry-support/"
title: What versions of Jekyll do you support?
weight: 1
layout: single
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  faqs:
    parent: FAQs
    weight: 5

---
Forestry will use whatever version of Jekyll is specified in your `Gemfile`.

If you don’t specify a version in your Gemfile, Forestry will use the [default version used by GitHub Pages](https://pages.github.com/versions/).

## Defaults

These are the ruby gems that Forestry will bundle with your build by default, without the need for a Gemfile. Forestry also lets you specify different versions of gems by including a Gemfile with your site.

*   activesupport (4.2.6)
*   addressable (2.4.0)
*   bigdecimal (default: 1.2.4)
*   bundler (1.12.5)
*   coffee-script (2.4.1)
*   coffee-script-source (1.10.0)
*   colorator (0.1)
*   ethon (0.9.0)
*   execjs (2.7.0)
*   faraday (0.9.2)
*   ffi (1.9.10)
*   gemoji (2.1.0)
*   github-pages (82)
*   github-pages-health-check (1.1.2, 1.1.0)
*   html-pipeline (2.4.1)
*   i18n (0.7.0)
*   io-console (default: 0.4.3)
*   jekyll (3.1.6)
*   jekyll-coffeescript (1.0.1)
*   jekyll-feed (0.5.1)
*   jekyll-gist (1.4.0)
*   jekyll-github-metadata (2.0.0)
*   jekyll-mentions (1.1.2)
*   jekyll-paginate (1.1.0)
*   jekyll-redirect-from (0.10.0)
*   jekyll-sass-converter (1.4.0, 1.3.0)
*   jekyll-seo-tag (2.0.0)
*   jekyll-sitemap (0.10.0)
*   jekyll-textile-converter (0.1.0)
*   jekyll-watch (1.4.0)
*   jemoji (0.6.2)
*   json (default: 1.8.1)
*   kramdown (1.11.1, 1.10.0)
*   liquid (3.0.6)
*   listen (3.0.8, 3.0.6)
*   mercenary (0.3.6)
*   mini_portile2 (2.1.0)
*   minitest (5.9.0, default: 4.7.5)
*   multipart-post (2.0.0)
*   net-dns (0.8.0)
*   nokogiri (1.6.8)
*   octokit (4.3.0)
*   pkg-config (1.1.7)
*   posix-spawn (0.3.11)
*   psych (default: 2.0.5)
*   public_suffix (1.5.3)
*   pygments.rb (0.6.3)
*   rake (default: 10.1.0)
*   rb-fsevent (0.9.7)
*   rb-inotify (0.9.7)
*   rdiscount (2.2.0.1)
*   rdoc (default: 4.1.0)
*   redcarpet (3.3.4)
*   RedCloth (4.3.2)
*   rouge (1.11.0, 1.10.1)
*   rubygems-update (2.6.4)
*   safe_yaml (1.0.4)
*   sass (3.4.22)
*   sawyer (0.7.0)
*   terminal-table (1.6.0)
*   test-unit (default: 2.1.9.0)
*   thread_safe (0.3.5)
*   typhoeus (0.8.0)
*   tzinfo (1.2.2)
*   yajl-ruby (1.2.1)

We also support the following software that are not gems, but Forestry will use when building Jekyll sites.

*   pandoc (1.17.1)