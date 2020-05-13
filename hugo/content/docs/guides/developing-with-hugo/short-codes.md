---
aliases:
- "/docs/developing-with-hugo/short-codes/"
date: 2017-07-24 00:00:00 +0000
description: What Hugo shortcodes are and how they work
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
You can extend the functionality of markdown in Hugo with shortcodes. Shortcodes are special templates that are called when a short code is used inside the content body.

They can be used to add custom markup, format text, generate HTML elements, or pull in data from external sources.

## Using Shortcodes in Forestry
Forestry provides no interface for using shortcodes in the editor, but does support using Hugo shortcodes.

Users must enter the shortcodes in the format Hugo requires them in the content file.

For example, using Hugo’s built-in figure shortcode, a user must enter the following into the content body:

```
{{</* figure src="/example.jpg" title="Example Image" */>}}
```

## Built-in Shortcodes
Hugo ships with a collection of built-in shortcodes for modifying the output of your content body.

For a full list of these shortcodes and how to use them, see the references below.

## Custom Shortcodes
Hugo also allows you to build your own shortcodes. See the Hugo shortcode documentation in the references below.

## Further Reading
- [Hugo Shortcode Reference](https://gohugo.io/content-management/shortcodes/)
