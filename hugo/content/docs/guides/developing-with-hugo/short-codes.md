---
aliases:
- "/docs/developing-with-hugo/short-codes/"
date: 2017-07-24 00:00:00 +0000
description: What Hugo short codes are and how they work
tags: ''
title: Hugo Shortcodes
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
weight: 8
menu:
  guides:
    parent: Developing with Hugo
    weight: 24

---
You can extend the functionality of markdown in Hugo with short codes. Short codes are special templates that are called when a short code is used inside the content body.

They can be used to add custom markup, format text, generate HTML elements, or pull in data from external sources.

## Using Short Codes in Forestry
Forestry provides no interface for using short codes in the editor, but does support using Hugo short codes.

Users must enter the short codes in the format Hugo requires them in the content file.

For example, using Hugo’s built-in figure short code, a user must enter the following into the content body:

```
{{</* figure src="/example.jpg" title="Example Image" */>}}
```

## Built-in Short Codes
Hugo ships with a collection of built-in short codes for modifying the output of your content body.

For a full list of these short codes and how to use them, see the references below.

## Custom Short Codes
Hugo also allows you to build your own short codes. See the Hugo short code documentation in the references below.

## Further Reading
- [Hugo Short Code Reference](https://gohugo.io/extras/shortcodes/)