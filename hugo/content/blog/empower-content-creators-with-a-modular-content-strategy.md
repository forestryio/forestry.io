---
title: Empower Content Creators With a Modular Content Strategy
description: ''
date: 2018-04-19 17:05:10 -1100
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
Good content strategy is all about turning ideas into HTML with a minimal amount of friction. Whether using a CMS with a web interface or editing content files for a static site generator, content creators need an easy way to create visually interesting and well-structured content.

This post will explore a couple common approaches to content strategy and their drawbacks, and introduce a modular approach for building pages from chunks of content. Ultimately, incorporating a modular content strategy will empower your content creators to create exciting, dynamic layouts without sacrificing the cohesiveness and sophistication of your design.

## The Content Sandwich

One of the most straight-forward approaches to dynamic content is to build a carefully-prescribed page layout, and then dump a content section in the middle. The content might be entered in a web interface using a WYSIWYG editor, to provide content creators with the power to create dynamic content without having to know how to write HTML.

WYSIWYG editors are all about compromise. They provide flexibility where needs can’t be fully anticipated, but when they are too flexible the results can clash with the site’s design or introduce problems in a layout. Complex layout elements are difficult to achieve within a WYSIWYG editor without falling back to writing plain HTML, making the whole endeavor pointless.

Many systems provide something like **shortcodes** to allow a developer to define a complex component that can be configured with a few simple values. These are great for reducing code repetition and keeping content sections organized, but require introducing non-standard syntax to your content workflow. In addition, programming a WYSIWYG editor to correctly render shortcodes can be challenging and in some cases impossible, leaving it up to your content editors to understand and write this special syntax.
 

## Building Page Sections With Front Matter

Static site generators like Hugo and Jekyll have a mechanism for including structured data with a page’s content, in the form of **front matter**. This front matter can be queried anywhere on the page: developers can set up any part of the layout to be configurable via front matter values. Since front matter can contain complex data structures like lists and maps, a variable number of elements can be generated on a page according to an agreed-upon schema in the page’s front matter.

Forestry.io’s CMS is all about manipulating front matter. Forestry allows you to create **front matter templates** that define a set of fields and their type that are used to configure the CMS interface. Front matter templates are great for defining and enforcing specific front matter schema: the page creator doesn’t need to remember what front matter values to add in order to trigger certain behaviors in the page layout. They will be prompted by the CMS.

Using front matter in this way can give your content creators a lot of power over their page layouts, but there are still limits to its flexibility. If you wanted one of these front matter-based sections in the *middle* of your page content instead of at the *end*, you would still have to resort to something like a shortcode.

## Making Front Matter Modular

**What if we decided to just build the whole page from front matter?**

Instead of thinking about a page as a single continuous block of prose with a header and footer at the ends, we can think of it as a series of sections. 

In this paradigm, a block of content is just one of several possible sections that can be chained together to create the page. Each section has its own front matter schema, and any number of these sections can be defined in a page’s front matter in any combination. In your page template, you just have to iterate over each of these front matter sections and include a corresponding partial that renders the section.

### Hugo Example

A page’s TOML front matter might look something like this:


    +++
    title = "My example page"
    [[blocks]]
    template = "media-feature"
    background_style = "Dark"
    heading = "Lorem ipsum dolor"
    content = "Proin at finibus ex. Duis sed nisi lectus. Mauris interdum ac nunc quis pharetra. Vivamus rhoncus porttitor ante."
    image = "/uploads/image.png"
    image_position = "Left"
    image_shadow = true
    [[blocks]]
    template = "call-to-action"
    heading = "Let's Get Started"
    button_text = "Check out my Github profile"
    button_url = "https://github.com/dwalkr"
    +++

And the page layout might look something like this:


    {{ define "main" }}
        {{- range .Params.blocks -}}
            {{- if eq .template "media-feature" -}}{{ partial "blocks/media-feature" (dict "Params" .) }}{{- end -}}
            {{- if eq .template "call-to-action" -}}{{ partial "blocks/cta" (dict "Params" .) }}{{- end -}}
        {{- end -}}
    {{ end }}


## Forestry’s Blocks

Forestry has a type of front matter field designed for the express purpose of creating modular content sections like this.

### Sawmill


