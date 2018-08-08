---
aliases:
- "/docs/developing-with-hugo/misc/"
date: 2013-07-24 00:00:00 +0000
description: Other things you can do with Hugo
tags: ''
title: Misc
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: 9
menu:
  guides:
    parent: Developing with Hugo
    weight: 18

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

## Further Reading
- [Hugo Sitemap Reference](https://gohugo.io/templates/sitemap/)
- [Hugo RSS Reference](https://gohugo.io/templates/rss/)
- [Hugo Output Format Reference](https://gohugo.io/extras/output-formats/)

[1]: https://gohugo.io/extras/output-formats/