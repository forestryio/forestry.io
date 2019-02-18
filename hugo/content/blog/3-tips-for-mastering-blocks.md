---
title: 3 Tips for Mastering Blocks
description: ''
date: 2018-06-29 10:00:15 +0000
authors:
- DJ Walker
publishdate: 2018-06-29 10:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/06/blocks.jpg"
categories:
- Frontend-Friday
tags:
- Blocks
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
Last week, we brought you [a theme for Jekyll](https://forestry.io/blog/ubuild-a-new-theme-for-static-sites-using-blocks/) that takes advantage of [Forestry’s Blocks feature](https://forestry.io/docs/settings/fields/blocks/) to build whole page layouts using modular components, called uBuild. This week, I ported uBuild to Hugo to make it available to our Hugo users. When we first announced the Blocks feature, I created a Hugo theme called [Sawmill](https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry) to demonstrate the Blocks' page-building capabilities. Since creating that theme, I’ve been using Blocks extensively and have learned a lot about how to use this feature effectively.

In this post, I want to take you through a few of the design decisions I made for [ubuild-hugo](https://github.com/forestryio/ubuild-hugo):

 1. [Add Default Values to Hidden Text Fields For Template-Level Config](#add-default-values-to-hidden-text-fields-for-template-level-config)
 2. [Use a Field Group to Namespace Template-Included Fields](#use-a-field-group-to-namespace-template-included-fields)
 3. [Pass Page Context To Your Hugo Block Layouts](#pass-page-context-to-your-hugo-block-layouts)


My hope is that this will give you some insight into how uBuild is put together, as well as help you use Blocks (and [Front Matter Templates](https://forestry.io/docs/settings/front-matter-templates/) in general) effectively in your own projects.

<div id="import-snipcart-demo-button" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/forestryio/ubuild-hugo-starter.git"
engineName="hugo"
engineVersion="0.42.2"
heading="Get Started With uBuild"
linkText="Import The Starter Site" %}}
</div>


## Add Default Values to Hidden Text Fields For Template-Level Config

<video playsinline autoplay muted loop width="100%" controls>
  <source src="/uploads/2018/06/using_hidden_text_field.mp4" type="video/mp4">
  <source src="/uploads/2018/06/using_hidden_text_field.webm" type="video/webm">
Your browser does not support the video tag.
</video>

I often find myself wanting to attach additional information to a Front Matter Template, and I don't want it to be changed.

If you take a look at the Front Matter Templates that compose uBuild’s blocks, you will find that the very first field in each one is a hidden text field with the name of `block`. Each FMT specifies its own default value for this field, effectively setting a value that changes depending on which block is being included. The value of the `block` field is used to determine which partial to include for each block when we iterate over the blocks contained in the `page_sections` variable.

When using Blocks with Forestry, the `template` parameter is also generated in the front matter for each block. This could be used instead of creating the new `block` field; however, using an additional field whose value can be changed as necessary creates a looser coupling between the name of the Front Matter Template and the layout file used to generate it. This will remove the need to modify your layout files if you decide to rename your Front Matter Templates in the future.

Another place I’ve applied this strategy is in the **Page Builder** Front Matter Template. Since the code that reads the blocks from the `page_sections` front matter is in its own (non-default) layout, we can create a hidden field to enforce a specific layout when our Page Builder FMT is used with a new page. All you need to do for this is to add a text field with the name of `layout` to your Front Matter Template, make it a hidden field, and set the value to the name of the layout that you want to use any time a page is created with this Front Matter Template. In our case, the layout that handles blocks is called `blocks.html`, so we set this value to `blocks` to tell Hugo to use that layout.

Generally speaking, this hidden field strategy can be useful for associating additional information at the template level, whether providing additional information to a Blocks field, setting page-level configuration like the page layout, or something else entirely.

## Use a Field Group to Namespace Template-Included Fields

<video playsinline autoplay muted loop width="100%" controls>
  <source src="/uploads/2018/06/using_include_in_rfg.mp4" type="video/mp4">
  <source src="/uploads/2018/06/using_include_in_rfg.webm" type="video/webm">
Your browser does not support the video tag.
</video>

The **Include Template** field type is a very useful one in Forestry: it allows you to reuse a group of fields in multiple Front Matter Templates without having to redefine them every time.

One gotcha of using the Include Template field is that it doesn’t use its `name` or `label` parameters when it comes time to actually edit and create front matter. This is by design: included partial templates are more versatile if they don’t have to be nested inside of another field.

There are times, however, where you might want nest the fields of an include template inside of another front matter value. For example, you might want to avoid naming collisions with other fields in your FMT, or you might want to use multiple copies of the included template. In this case, all you have to do is create a **Field Group** and include the FMT Partial as the only field inside of the group. All of the included fields will then be nested inside this group in your front matter.

This strategy came in handy for uBuild. I refactored the front matter templates so that three common field patterns were abstracted away into Front Matter Partial templates:

- Links (URL + link text + link target)
- Media Elements (image + caption)
- Text Columns (header + content)

The option to either namespace these fields or not comes in very handy. For example, the **Text Column** pattern is used in the 1-, 2-, and 3-column text blocks. It is included at the top level of the 1-column text block for the sake of simplicity, but is scoped inside of Field Groups for the 2- and 3-column text blocks so that we can re-use the same fields.

Following the same logic, you can also use a **Repeatable Field Group** to scope your Include Template fields. This will allow content editors to create an indefinite number of content items based on the included template. In uBuild, the **Link** partial is used in both standard Field Groups as well as Repeatable Field Groups. For example, the *Call-to-action* field in the *Hero Banner w/ Image* block allows you to add a single link inside of the `cta` field group. The two header variants, on the other hand, include a navigation menu that is constructed by creating a Repeatable Field Group that includes the same link partial.


## Pass Page Context To Your Hugo Block Layouts

One thing that can easily trip up theme builders moving from Jekyll to Hugo is the way Hugo handles variable scope. Unlike Jekyll, partials in Hugo have their own scope, and any variables used in the partial must be explicitly passed to it. This means that, if we want to use any page-level or site-level information, we need to make sure to include it. In the Hugo version of uBuild, our “Block Loop” looks like this:


    {{- define "main" -}}
        {{- range .Params.page_sections -}}
        {{ partial (printf "blocks/block-%s.html" .block) (dict "Section" . "Page" $) }}
        {{- end -}}
    {{- end -}}

If we had written our loop to only pass the current context instead:


    {{- define "main" -}}
        {{- range .Params.page_sections -}}
        {{ partial (printf "blocks/block-%s.html" .block) . }}
        {{- end -}}
    {{- end -}}

We would only be able to access the values specific to that element of `page_sections` (in other words, the current block) in our partial. Jekyll doesn’t have these same scope restrictions, so you would be able to access other values at the page-level and site-level without having to do anything else here.

Since we have a few partials that use the current page URL as well as the site’s base URL, we can cover our bases by passing the root page-level config to our partial. We’re inside of a `range` statement, so the current scope (represented by  `.` ) refers to the current item being iterated over. When we’re in a “nested scope” like this, we can use `$` to refer back to the top-level scope for the page. By using this information and combining it with the `dict` function which lets us create a dict/hash/map/object (whatever you prefer to call it), we can construct an object on-the-fly that gets passed into our partials:


    (dict "Section" . "Page" $)

Using this approach, the section-level variables can be accessed from `.Section`, and the page-level variables can be access from `.Page` inside of our partial. Here’s a slightly simplified version of `block-header-1.html` that demonstrates using page-level data:


    <div class="block-header-1--logo">
      <a href="{{ .Page.Site.BaseURL | relURL }}">
        <img src="{{ .Section.logo | relURL }}" alt="{{ .Site.title }}">
      </a>
    </div>
    <nav class="block-header-1--nav">
      <ul>
        {{ range .Section.navigation }}
        <li class="nav-item {{ if (eq $.Page.Permalink .link_url) }}active{{ end }}">
          <a href="{{ .link_url }}">{{ .link_text }}</a>
        </li>
        {{ end }}
      </ul>
    </nav>

Notice how we access the section-level data with `.Section.logo` and `.Section.navigation`, and the page-level data with `.Page.Site.BaseURL` and `$.Page.Permalink` (using `$` in the second example because it is inside of a nested scope!)

Hugo’s restrictive variable scope may be frustrating to deal with at first, but it saves you from a lot of invisible bugs. Once you learn to wield [dict](https://gohugo.io/functions/dict/) like a pro, it won’t be a problem for you anymore.


## We’re in This Together

As the capabilities of Forestry grow, so do the options available to our users. The three strategies presented here are the result of my own observation and experimentation; if you’ve found a way to use Forestry that you think is really powerful, we’d love to hear about it! Let us know on Twitter([@forestryio](https://twitter.com/forestryio)) or {{% slack_invite_link "in our community Slack" %}}.

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll show you a <a href="https://forestry.io/blog/harness-the-power-of-static-to-create-presentations/">Hugo theme for creating presentation decks.</a> </p><p><strong>Last week:</strong> We introduced uBuild, a <a href="https://forestry.io/blog/ubuild-a-new-theme-for-static-sites-using-blocks/#/">Jekyll Theme</a> with a Blocks-based page builder.</p></div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17424969">Discuss on Hacker News</a>
