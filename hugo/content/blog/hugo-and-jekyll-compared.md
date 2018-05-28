---
authors:
- chris-macrae
images:
- "/uploads/2018/02/hugo-jekyll-compared-1.png"
publishdate: 2018-04-06 12:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
excerpt: When it comes to building static sites, the two leading solutions right now
  are Hugo and Jekyll. So the question is, which is right for you?
title: Hugo or Jekyll? 6 Factors You Should Know
categories:
- hugo
- jekyll
date: 2018-04-06 12:00:00 +0000
headline: ''
description: ''
textline: ''
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
Choosing the right tools to build a website isn’t easy these days. There’s just too many options! Building a static site is one of these options, which comes with many advantages like top-notch security, blazingly-fast performance, and reduced costs.

When it comes to building static sites, the two leading solutions right now are Hugo and Jekyll. So the question is, which is right for you?

To answer that question, we’ll take a look at the features, speed, and extensibility of each, looking for the pros and the cons of both generators. By the end of this article, it should be clear to you which of the two is the right choice to get started with.

_<strong>TL;DR:</strong> Jekyll is a flexible and beginner-friendly static site generator. Hugo has a slightly higher learning curve, but is fast and packed with features. Read on to learn more about the differences between these two tools._

## Jekyll

Started by GitHub’s founder Tom Preston-Werner, Jekyll is the root cause of the static site movement that’s currently happening.

Started in 2008, Jekyll is touted as “a simple, blog-aware, static site generator.”

It’s the most popular SSG (static site generator) in the space right now with over 33k stars on GitHub, largely due to its tight integration with GitHub pages.

The value Jekyll offers is that it allows you to take the static HTML from any existing website and quickly turn it into a working static site with its simple templating library.

{{% tip %}}

**Want to get started right away?**

Explore Jekyll and the Forestry CMS with our Jekyll Starter Template.

<a href="/docs/quickstart/tour/" class="button small secondary">Getting Started Guide</a>
<a href="https://app.forestry.io/signup" class="button small primary">Create Your Forestry.io Account</a>
{{% /tip %}}

### Set up

Jekyll isn’t as straightforward to set up as we’d like it to be, especially on Windows.

Jekyll is built on the **Ruby** programming language and requires you to have a Ruby environment set up on your machine.

This isn’t the most painful experience, but it isn’t as simple as downloading an app. Luckily Jekyll has a [great documentation](https://jekyllrb.com/docs/installation/) on installing Jekyll.

### Content

In Jekyll, all of your content is stored in text files instead of a database. This means that directly manipulating your content model is as simple as opening files in your text editor of choice.

The simplest form of content in Jekyll is stored in the root of your project as either **Markdown or HTML**. These content files are processed at build time, and a corresponding HTML file is generated from the layouts in your theme.

_Front matter fields_ can be added to these files, allowing you to define data that can then be used inside your templates.

    ---
    title: Homepage
    date: 2017-01-30
    tags: [hello, world]
    ---
    ## Hello world
    This is my page's content!

Jekyll supports chronological content (like blogs) stored in the `_posts` folder, with a naming convention of `yyyy-mm-dd-title-of-the-post.md`.

Jekyll also supports loading custom data from YAML, JSON, and CSV files located in the `_data` directory. These can be accessed in your templates using `{{ site.data }}`

### Themes & Templates

Jekyll has a large community of free and paid themes available to use.

Themes can easily be installed either by downloading and adding them to your Jekyll project or by installing them as a plugin using RubyGems.

Jekyll’s themes are built using Shopify’s **Liquid templating engine**. Liquid is a _safe templating engine_ which is made to run untrusted code on their servers. This means that it’s built to do mostly everything you need without running custom code.

    <div class=“container”>
    {% for post in site.posts %}
        <div class="article">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        {% for tag in post.tags %}
            <span>{{ tag }}</span>
        {% endfor %}
        </div>
    {% endfor %}
    </div>

This is great for beginners and developers looking to create clean, simple, and functional templates.

However, it does mean you have to extend liquid with custom helpers using Jekyll plugins if you need extra functionality.

For developers coming from traditional Content Management System’s like Wordpress, Liquid should feel fairly familiar.

### Development Workflow

Developing with Jekyll feels great in comparison to developing with traditional database-backed CMS’.

Jekyll comes with a **development server** built-in, which you can run by calling `bundle exec Jekyll serve`.

This allows you to access your built static site at a local IP address and see the changes to your content and templates by refreshing the page.

#### Asset Pipeline

Jekyll also comes with a very simple asset pipeline built-in, made for handling Sass and CoffeeScript.

Any `.scss`, `.sass` or `.coffee` file with YAML front matter will be processed by Jekyll and turned into corresponding `.css` and `.js` files.

    ---
    ---
    alert "Hello world!

Due to the need of adding YAML front matter to each file, a lot of larger production Jekyll sites opt to forgo the built-in asset pipeline for a modern build tool like Gulp or [Webpack](/blog/write-better-javascript-with-webpack/).

These tools allow you to have direct control over your CSS, JS, images, and HTML, allowing for minification and optimization. These tools also provide you with access to BrowerSync or LiveReload, which speeds up development.

### Useful Features

Jekyll by itself is fairly barebones and doesn’t do a lot of the things you expect a modern website to do, such as:

* Menus
* XML Sitemap Generation
* RSS/Atom Feed Generation
* Analytics
* Comments
* Multilingual/i18n
* And much more…

However, this can all be supplemented by using third-party Jekyll plugins, which come in five flavors:

* **Generators**, allow you to add to or change the Jekyll build process
* **Converters**, allow you to add support for new file formats
* **Commands**, allow you to extend the command line functionality of Jekyll
* **Tags**, allow you to add custom Liquid tags
* **Filters**, allow you to modify the output of Liquid tags and variables

For example, we’ve built a [menu plugin](https://github.com/forestryio/jekyll-menus) for Jekyll that allows you to manage menus inside the Forestry CMS.

Another great feature of Jekyll is that it has a well-supported [Wordpress importer](http://import.jekyllrb.com/docs/wordpress/). With 30% of the internet using Wordpress, it’s great to know migrating to the modern stack is easy.

### Performance

Previously, we published a [breakdown of how Hugo and Jekyll perform](/blog/hugo-vs-jekyll-benchmark/).

In our results, we discovered that Jekyll is _much slower_ in comparison to Hugo, about 35x slower. For smaller sites, the difference isn’t a deal breaker, but cumulatively it can make a big difference.

Jekyll built in a bracket of 1.4-6 seconds for the majority of the tests. So imagine you had a content team that made on average 100 edits to your site, blog, or docs per week…

That’s a potential for up to 10 hours lost to build times in a year!

### Jekyll Summary

Now that we’ve covered the core functionality of Jekyll, let’s take a step back and take a bird’s eye view of this static site generator by looking at the pros and cons.

**Pros:**

* **Simple templating engine.** Jekyll’s templates will feel very familiar to the syntax found in Wordpress or Craft.
* **Rich theme library.** Jekyll has many ready-to-use themes to get started.
* **Rich plugin library.** Jekyll has dozens of plugins to add the features your site will need.
* **GitHub Pages Integration.** Setting up a site with Jekyll and GitHub pages is a breeze.

**Cons:**

* **Slow builds.** If you’re building a small site, it’s no big deal. But larger sites may suffer from longer build times.
* **Lack of built-in features.** First-party features have better support and integration. Jekyll lacks this.

{{% tip %}}

Check out our [Developing with Jekyll guide](/docs/guides/developing-with-jekyll/) to learn more about building a Jekyll site with Forestry.io.

{{% /tip %}}

## Hugo

Hugo is a static site generator written in Go. Hugo is created by Steve Francia and Bjørn Erik Pedersen. The development is currently lead by the Norwegian.

Started in 2013, Hugo has quickly grown to become the second most popular SSG with over 24k stars on GitHub

Hugo has a clear advantage over other SSGs: it's **fast.**

It also has one of the most (if not _the_ most) thriving communities for an SSG.

### Set up

Setting up Hugo is more straightforward than Jekyll, regardless if you’re using Windows or a UNIX-based system.

Since Hugo is built using Go — a compiled language — installing or updating Hugo is as simple as downloading a binary and setting up your system to use it.

Hugo has [in-depth documentation](https://gohugo.io/getting-started/installing/) on how to do this.

### Content

Similar to Jekyll, all of your content is stored in text files in your project.

In Hugo’s case, all content intended to be generated is stored inside the `content` folder in your project. You can use a variety of formats with Hugo: **Markdown (Blackfriday or Mmark), Org Mode,** and **HTML** can be used natively, while **Asciidoc** and **reStructuredText** can be supported with third-party extensions.

Hugo also supports **TOML, YAML, and JSON** for front matter where Jekyll only supports YAML.

    +++
    title = "Homepage"
    date = "2017-01-30"
    tags = ["hello", "world"]
    +++
    ## Hello world
    This is an example of TOML front matter

Hugo also supports external data, which can be stored in the `/data` folder of your project, or pulled from third-party sources like REST APIs. It supports both JSON and CSV sources.

### Themes & Templates

While Hugo is only a few years old, a variety of themes are already available for the quickly growing SSG.

If you’re using the CLI (Command Line Interface), [installing themes from the Hugo Themes Repo](https://gohugo.io/themes/installing-and-using-themes/) is fairly straightforward.

Hugo uses Go’s [template package](https://golang.org/pkg/html/template/) out of the box. This is similar to Liquid in that it allows limited logic in your templates.

    <div class=“container”>
    {{ range .Site.Pages}
        <div class="article">
        <h2>{{ .Title }}</h2>
        <p>{{ .Content }}</p>
        {{ range .Tags }}
            <span>{{ . }}</span>
        {{ end }}
        </div>
    {{ end }}
    </div>

Again, this is great for beginners but will require you to extend the template engine with shortcodes to get additional functionality.

Unfortunately, the template package’s syntax is not as straightforward for beginners as Liquid, and will not feel as familiar.

However, support for both the [Amber](https://github.com/eknkc/amber) and [Ace](https://github.com/yosssi/ace) templating engines is available. These may feel more familiar to developers coming from traditional Content Management Systems like Wordpress.

### Development Workflow

Developing with Hugo feels better than Jekyll due to its fast builds and built-in live reload server.

From your project, you can call `hugo serve` to spin up the development server.

This will allow you to access your site from a local IP address. As you make changes to files in your project, it will rebuild your project and reload the browser for you.

#### Asset Pipeline

Hugo takes a bare-bones approach to its asset pipeline: it simply copies any files stored in the `/static` directory to your build directory as-is.

If you’re used to using Sass, CoffeeScript or any other kind of preprocessing or asset management, you’ll have to look to external asset management pipeline tools like Gulp or [Webpack](/blog/write-better-javascript-with-webpack/). This also means you’ll likely want to include Hugo in your external build process, which can be troublesome for beginners.

A more sophisticated asset pipeline is [in the works](https://github.com/gohugoio/hugo/issues/4446), but at the time of writing has not yet been integrated into the core.

### Useful Features

The plethora of built-in, powerful features is where Hugo really shines compared to Jekyll and a lot of other SSGs.

With built-in support for all of the basics like menus, sitemaps, and feeds it makes setting up a web-ready website a breeze.

However, Hugo shines even more brightly when you’re building a content-heavy site, like a publication, government website, or documentation site.

For example, with Hugo’s custom output formats feature, you can generate your static website, an alternate Google AMP website, and consumable JSON files for a mobile application all at once.

Here’s a summary of some of Hugo’s best features:

* Menus
* XML Sitemap Generation
* RSS/Atom Feed Generation
* Analytics (via Google Analytics)
* Comments (via Disqus)
* Multilingual/il8n
* Custom Output Formats

{{% tip %}}

Sold on Hugo, but stuck on Jekyll? [Hugo can import your Jekyll site with a single command!](https://gohugo.io/commands/hugo_import_jekyll/)

{{% /tip %}}

### Performance

Hugo is blazingly fast. We previously released a post on the [performance of Hugo and Jekyll](/blog/hugo-vs-jekyll-benchmark/) and compared the two. Hugo was the clear winner.

To put this into context, in our tests Hugo generated sites an average 35x faster than Jekyll, generating most sites in under a second.

In fact, Hugo user @darinpope managed to get Hugo to [generate 600k pages in under 5 minutes](https://discourse.gohugo.io/t/page-generation-performance-expectations/1335/12)!

### Hugo Summary

Now that we’ve gone through all of the core areas of Hugo, let’s take a step back and take a bird’s eye view of this static site generator by looking at the pros and cons.

**Pros:**

* **Extremely fast.** Build times under 1s.
* **Extremely versatile.** Plenty of out the box functionality for enterprise-scale web sites.
* **Enterprise ready.** With support for multiple output types and multilingual sites, you’re set!
* **Thriving community.** Getting help with Hugo is easy. Ask a question on their forum and you _will_ get an answer.

**Cons:**

* **No extensions.** Hugo doesn’t have plugin support, so adding highly custom functionality isn’t possible.
* **Confusing template syntax.** While the template engine for Hugo is versatile, it’s fairly non-standard and confusing for beginners.
* **No asset pipeline.** Hugo doesn’t have any asset processing at all, so you need to use third-party tools.

{{% tip %}}

Check out our [Developing with Hugo guide](/docs/guides/developing-with-hugo/) to learn more about building a Hugo site with Forestry.io.

{{% /tip %}}

## Wrapping Up

We’ve covered the basics of Hugo and Jekyll, outlining ease of set up, content management, templating, development workflow, features, and performance.

Both generators are leaders in the space, and there are great examples of both being used in the wild for big projects, like [healthcare.gov](https://github.com/springmeyer/healthcare.gov), using Jekyll, and the new [Smashing Magazine](https://next.smashingmagazine.com/) built using Hugo.

Now it’s time to make a choice! Here’s a quick summary for you:

* **Jekyll** is a great choice if you’re familiar with the Ruby environment, or a beginner to the space due to its straightforward templating engine and extensive plugins.
* **Hugo** is great for content-driven websites. What it lacks in extensibility, it makes up for in a plethora of built-in features, and speed unmatched by any other static site generator.

{{% tip %}}

Whether you prefer Jekyll or Hugo, Forestry.io provides a rich CMS backend for your project. [Check out our getting started guide](/docs/quickstart/setup-site/) to set up your site with Forestry.io in minutes!

{{% /tip %}}

<div style="padding: 20px 40px;background: #f7f7f7;">  
<h2>Join us every Friday 📅</h2>  
<p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>  
<p><strong>Next week:</strong> <a href="https://forestry.io/blog/build-a-json-api-with-hugo/">We are going to build a RESTful API with Hugo's Custom Output Formats.</a></p>  
<p><strong>Last week:</strong> <a href="https://forestry.io/blog/write-better-javascript-with-webpack/">We looked at Webpack and how it can make you write better JavaScript.</a></p>  
</div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16774437">Discuss on Hacker News</a>