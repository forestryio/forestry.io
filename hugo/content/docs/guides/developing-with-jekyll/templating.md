---
aliases:
- "/docs/developing-with-jekyll/templating/"
date: 2013-07-24 00:00:00 +0000
description: ''
tags: ''
title: Templating
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: 3
menu:
  guides:
    parent: Developing with Jekyll
    identifier: _jekyll-templating
    weight: 7

---
Jekyll allows users to build their HTML templates using the template language *Liquid* built and used by the popular eCommerce application [Shopify][1].

## Liquid
Liquid is best described as a safe, customer-facing template language for flexible web apps.

An example of Liquid:
```
	<html>
	<head>
	    <title>{{ title }}</title>
	</head>
	<body>
	    <div id="content">
	        <p>
	            This is a long page content
	            These lines are all part of the parent p
	
	            <a href="/">Go To Main Page</a>
	        </p>
	    </div>
	</body>
	</html>
```

See the [Front Matter Fields documentation][2] for examples of how to use Forestry in your templates.

[1]: https://shopify.com
[2]: /docs/settings/fields/