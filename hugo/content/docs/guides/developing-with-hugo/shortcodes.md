---
aliases:
- - "/docs/developing-with-hugo/shortcodes/"
- "/docs/developing-with-hugo/short-codes/"
date: 2017-07-24 00:00:00 +0000
description: How to work with Hugo shortcodes in Forestry
tags: ''
title: Hugo Shortcodes
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 8
menu:
  guides:
    parent: Developing with Hugo
    weight: 24

---

You can extend the functionality of Markdown in Hugo with shortcodes. Shortcodes are special templates that are called when a shortcode is used inside the content body.

They can be used to add custom markup, format text, generate HTML elements, or pull in data from external sources.

## Using Shortcodes in Forestry

You can use Forestry [Snippets](/docs/settings/snippets/) to configure shortcodes in the editor. You can also use Hugo shortcodes directly, in the format Hugo requires them in the content file.

For example, using Hugo’s built-in figure shortcode, a user may enter the following into the content body:

```go-html-template
{{< figure src="/example.jpg" title="Example Image" >}}
```

This could be configured as a Forestry snippet for ease of use.

## Built-in Shortcodes

Hugo ships with a collection of [built-in shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes) for modifying the output of your content body.

## Custom Shortcodes

Hugo also allows you to build your own shortcodes.

## Further Reading

- [Hugo Shortcode Reference](https://gohugo.io/content-management/shortcodes/)
