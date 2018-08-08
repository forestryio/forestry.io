---
aliases:
- "/docs/developing-with-hugo/templating/"
date: 2013-07-24 00:00:00 +0000
description: ''
tags: ''
title: Templating
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: 3
menu:
  guides:
    parent: Developing with Hugo
    weight: 6

---
Hugo allows users to build layouts and themes using one of multiple templating languages. By default, Hugo uses GoLang’s GoTemplates.

All of the template options are interchangeable, and can be used at the same time.

## GoTemplates
Go Templates exposes GoLang as a template language for you to build your layouts and themes with.

An example of GoTemplates:
```
	<html>
	<head>
	    <title>{{ .Params.Title }}</title>
	<body>
	<div id="content">
	    <p>
	         This is a long page content
	         These lines are all part of the parent p
	         <a href="/">Go To Main Page</a>
	    </p>
```

## Ace
Ace templates are inspired by Slim and Jade and will feel very familiar and easier to use if you’re comfortable with either.

All templates built with Ace must be prefixed with `.ace` instead of `.html`.

**Note:** Ace templates can be included as a partial inside GoTemplates and vice versa. This cannot be done with Amber.

An example of Ace:
```
	: doctype html
	html
	  head
	    title {{.Params.Title}} 
	  body
	      #content
	          p..
	                This is a long page content
	                These lines are all part of the parent p
	
	                a[href="/"] Go To Main Page
```

## Amber
Amber templates are inspired by HAML and Jade, and will feel very familiar and easier to use if you’re comfortable with either.

All templates built with Amber must be prefixed with `.amber` instead of `.html`

An example of Amber:
```
	html
	    head
	        title {$.Params.Title}
	    body
	        div#content
	            p
	                | This is a long page content
	                | These lines are all part of the parent p
	
	                a[href="/"] Go To Main Page
```

See the [Front Matter Template documentation][1] for examples of how to use Forestry in your templates.

## Further Reading
- [Hugo GoTemplates Reference](https://gohugo.io/templates/go-templates/)
- [Hugo Ace Templates Reference](https://gohugo.io/templates/ace/)
- [Hugo Amber Templates Reference](https://gohugo.io/templates/amber/)

[1]: /docs/settings/front-matter-templates/