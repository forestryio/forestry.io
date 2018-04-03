---
title: CSS, JS, & Media not working
description: ''
date: 2018-01-02 11:53:51 +0000
authors: []
publishdate: 2017-12-31 04:00:00 +0000
aliases:
- "/docs/troubleshooting/assets-not-loading"
headline: ''
textline: ''
categories: []
tags: []
expirydate: 2030-01-01 04:00:00 +0000
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: ''
menu:
  troubleshooting:
    parent: Troubleshooting
    weight: 6

---
Sometimes you’ll find your assets aren’t loading when you preview or publish your site. This is almost always due to *path issues*.

The best way to solve this issue is to ensure you're always allowing your SSG (Static Site Generator) to generate URLs.

For example, we have a CSS file named `main.css` that isn’t loading when viewing subpages.

In the dev environment, we’re serving the site from `localhost:4000`, meaning that `main.css` is served from `localhost:4000/main.css`.

The stylesheet code looks as follows:
`<link src="main.css" rel="stylesheet" type="text/css">`

When viewing any page at the root of the site, e.g, `localhost:4000` or `localhost:4000/about` we see the CSS as expected, but when loading a subpage such as `localhost:4000/blog/post-name` no CSS is rendered.

If we add the absolute URL to the stylesheet path, we solve this problem. In this case, the stylesheet looks like this in the built site:

`<link src="http://localhost:4000/main.css" rel="stylesheet" type="text/css">`

**However,** you don’t want to hard-code this value in, because then it will break in your staging or preview environment.

## Environment-based URLs
In order to solve this problem, Forestry sets the base URL of your site based on the environment your site is built in.

* By default, this is the `baseURL` set in your config file.
* For Forestry previews, this is set to the preview environments URL.

## URLs with Jekyll
In Jekyll, baseURL is the base *path* your site should be served from. If your site is located at `http://example.com/blog/` than baseURL is `/blog`.

In order to properly set up a URL with Jekyll, a url should be built using Jekyll's built-in `absolute_url` or `relative_url` filters as follows:

`<link src="{{ "main.css | absolute_url }}" rel="stylesheet" type="text/css">`

## URLs with Hugo
In Hugo, baseURL is the full path to your site, including domain. In order words, it’s `http://example.com/blog`.

Hugo has built-in functions for building URLs called `absURL` and `relURL`, so setting this up is easy:

`<link src="{{ "main.css" | absURL }}" rel="stylesheet" type="text/css">`