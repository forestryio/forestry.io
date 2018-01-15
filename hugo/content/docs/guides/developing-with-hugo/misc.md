---
date: 2013-07-24 00:00:00 +0000
description: Other things you can do with Hugo
related:
- title: "“Hugo Sitemap Reference”"
  url: https://gohugo.io/templates/sitemap/
- title: "“Hugo RSS Reference”"
  url: https://gohugo.io/templates/rss/
- title: "“Hugo Output Format Reference”"
  url: https://gohugo.io/extras/output-formats/
tags: ''
title: Misc
menu:
  guides:
    parent: hugo
weight: 9

---
## Sitemap
Hugo comes with support for XML Sitemaps built-in.

Hugo will export a sitemap.xml file with all of your content using a standard XML template to the root of your built site. You can configure this in your `config.yml`.

	[sitemap]
	  changefreq: "monthly"
	  priority: 0.5
	  filename: "sitemap.xml"

## RSS Feeds

Hugo will also generate an RSS feed in the following locations:

- At the root of your built site
- In the root of every section directory
- At the root of every taxonomy directory

You can configure parts of the output of the RSS feeds in your `config.yml`.

	languageCode: "en-us"
	copyright: "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License."
	
	[author]
	    name: "My Name Here"
	    email: "sample@domain.tld"

In order to include RSS feeds, you must include it in the `<head>` of your pages.

	{{ if .RSSLink }}
	  <link href="{{ .RSSLink }}" rel="alternate" type="application/rss+xml" title="{{ .Site.Title }}" />
	  <link href="{{ .RSSLink }}" rel="feed" type="application/rss+xml" title="{{ .Site.Title }}" />
	{{ end }}

If you wish to create Atom Feeds or other types of documents, please see the Hugo documentation on [Output Formats][1].

[1]:	https://gohugo.io/extras/output-formats/
