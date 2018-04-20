---
title: 'Sawmill: A Razor-sharp Layout Composer for Hugo and Forestry'
description: ''
date: 2018-04-19 17:05:10 -1100
authors:
- DJ Walker
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
When it comes to creating websites, good content strategy is all about turning ideas into HTML with a minimal amount of friction. Whether using a CMS with a web interface or editing content files for a static site generator, content creators need an easy way to create visually interesting and well-structured content.

Every approach is a compromise between flexibility and ease-of-use. Even if a developer could anticipate all of a content creator's needs, these needs will change over time. On top of that, developers have to work within UI limitations imposed by the CMS. Finding the right balance can be tricky and depends on the situation.

[Sawmill](https://dwalkr.github.io/sawmill/) is a Hugo theme that utilizes a modular layout strategy. Pages in sawmill are composed by stacking together page sections. These sections are self-contained components whose style and information can be configured with front matter, empowering your content creators to create exciting, dynamic layouts. To make it easy to manage these sections, Sawmill was created to work with Forestry's CMS straight out of the box via its included Forestry configuration files.

To better understand how Sawmill's page composition works, let's examine some common content strategy solutions:

### 1. The Content Sandwich

One of the most straight-forward approaches to dynamic content is to build a carefully-prescribed page layout, and then dump a content section in the middle. The content might be entered in a web interface using a WYSIWYG editor, to provide content creators with the power to create dynamic content without having to know how to write HTML.

WYSIWYG editors provide flexibility where needs can’t be fully anticipated, but when they are too flexible the results can clash with the site’s design or introduce problems in a layout. Additionally, complex layout elements are difficult to achieve within a WYSIWYG editor without falling back to writing plain HTML, at which point using a WYSIWYG starts to seem pointless.

Many systems provide something like [shortcodes](https://gohugo.io/content-management/shortcodes/) to allow a developer to define a complex component that can be configured with a few simple values. These are great for reducing code repetition and keeping content sections organized, but require introducing non-standard syntax to your content workflow. In addition, programming a WYSIWYG editor to correctly render shortcodes can be challenging and in some cases impossible, leaving it up to your content editors to understand and write this special syntax.

### 2. Building Page Sections With Front Matter

Static site generators like Hugo and Jekyll have a mechanism for including structured data with a page’s content, in the form of **front matter**. This front matter can be queried anywhere on the page, so developers can set up any part of the layout to be configurable via front matter values. Since front matter can contain complex data structures like lists and maps, a variable number of elements can be generated on a page according to an agreed-upon schema.

{{% tip %}}
Forestry.io’s CMS is all about manipulating front matter. Forestry allows you to create **front matter templates** that define a set of fields and their type that are used to configure the CMS interface.
{{% /tip %}}

Using front matter in this way can give your content creators a lot of power over their page layouts, but there are still limits to its flexibility. If you wanted one of these front matter-based sections in the _middle_ of your page content instead of at the _end_, for example, you would still have to resort to something like a shortcode.

### 3. Making Front Matter Modular

*What if we just build the whole page from front matter?*

Instead of thinking about a page as a single continuous block of prose with a header and footer at the ends, we can think of it as a series of distinct sections.

Using this paradigm, a block of content is just one of several possible sections that can be chained together to create the page. Each section has its own front matter schema, and any number of these sections can be defined in a page’s front matter in any combination. In your page layout, you just have to iterate over each of these front matter sections and include a corresponding partial that renders the section.

#### Hugo Example

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


In this example, the `blocks` parameter can contain a variable number of grouped fields &mdash; let's refer to each of these groups of fields as a **block**. Each block has a `template` field that indicates what type of block it is, and the rest of its fields can be used in constructing the block template. In the layout, we simply have to iterate over all of these blocks and include a different partial depending on the value of the `template` field. This partial will contain the HTML to build the block and can use any of the fields configured within that block.

This is exactly how Sawmill works.


## Using Sawmill

Sawmill includes a handful of components for building dynamic landing pages, and is packaged with Forestry configuration files so your front matter templates are already configured. Select the **Page** front matter template when creating a page in Forestry in order to use this layout builder.

### Forestry Blocks

Forestry has a type of front matter field designed for the express purpose of creating modular content sections like this. We call it **Blocks.**

When defining a **Blocks** field, you can assign it one or more **front matter partial** templates that can be used as blocks in that section. Front matter partials are just regular front matter templates that have the **is partial** option selected.

[Check out the docs](/) for more information on how to use Blocks.

## Improving Sawmill

Sawmill is ready for use but, at the time of writing, its features are limited. Adding new components is easy, so [post an issue](https://github.com/dwalkr/sawmill/issues) or [submit a PR](https://github.com/dwalkr/sawmill/pulls) with your suggestions!

## Get Started With Sawmill

Sawmill is available as a [theme](https://github.com/dwalkr/sawmill) if you want to try it with an existing Hugo site, or as a [starter site](https://github.com/dwalkr/sawmill-starter) if you want to get up and running quickly.



{{% create_site_button
repo="https://github.com/dwalkr/sawmill-starter.git"
branch="master"
engineName="hugo"
engineVersion="0.37.1"
forkName="sawmill-starter" %}}