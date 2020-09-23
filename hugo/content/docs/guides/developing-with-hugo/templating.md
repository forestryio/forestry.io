---
aliases:
  - "/docs/developing-with-hugo/templating/"
date: 2017-07-24 00:00:00 +0000
description: ""
tags: ""
title: Templating
images:
  - "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 3
menu:
  guides:
    parent: Developing with Hugo
    weight: 12
---

Hugo allows users to build layouts and themes using Golang’s Go Templates.

## Go Templates

Go Templates expose [Golang html/template](https://golang.org/pkg/html/template/) as a template language for you to build your layouts and themes with.

An example of Go Templates:

```go-html-template
<html>
<head>
    <title>{{ .Title }}</title>
</head>
<body>
<div id="content">
    <p>
         This is a long page content
         These lines are all part of the parent p
         <a href="/">Go To Main Page</a>
    </p>
```

See the [Front Matter Template documentation][1] for examples of how to use Forestry in your templates.

## Further Reading

- [Hugo Go Templates Reference](https://gohugo.io/templates/introduction/)

[1]: /docs/settings/front-matter-templates/
