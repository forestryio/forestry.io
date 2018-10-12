---
title: An Introduction to Theming in VuePress
description: ''
date: 2018-10-12 02:00:25 -1100
authors:
- DJ Walker
publishdate: 2018-10-12 02:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/10/markus-spiske-445251-unsplash.jpg"
categories:
- VuePress
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
When [I first looked at VuePress](https://forestry.io/blog/vuepress-brings-your-documentation-to-life/), I marveled at how quickly you could install it alongside your project's existing markdown docs to create a polished documentation website. This is without a doubt one of VuePress’ biggest strengths, but documentation is not the only thing it can do. VuePress is a highly flexible static site generator, and provides the ability to completely customize the way your pages are built via its Layout component. In this article, we’ll take a look at some fundamentals of building a blog theme in VuePress.

{{% warning "Before We Get Started" %}}
VuePress is built on the Vue.js framework, and a working knowledge of Vue.js will be tremendously helpful in understanding how to create VuePress themes. This guide will attempt to explain some concepts as we go along, but I highly recommend you take a look at the [Vue.js documentation](https://vuejs.org/v2/guide/) if you get lost. Don’t be intimidated: Vue is pretty easy to get the hang of!
{{% /warning %}}

## Creating a New VuePress Site

If you’re familiar with Jekyll or Hugo, you know that they have their own CLI command to bootstrap a new project, setting up a folder hierarchy that’s compatible with the SSG. VuePress is a little different in this regard, as one of its goals was to adapt to existing project documentation. This means that you are afforded a lot of flexibility in how you want to set up your site. VuePress will search for any Markdown files in the directory where it’s invoked, and any subdirectories, and convert those into pages.

Thus, to create a new VuePress site, we just have to create some markdown files and start writing!

    mkdir vuepress-demo
    cd vuepress-demo
    echo `# Welcome to My Blog!` > index.md

To turn this into a VuePress site, all we have to do is install VuePress and run it.

    yarn init -y
    yarn add vuepress

Once VuePress finishes installing, open up your `package.json` file and add a couple scripts:

    "scripts": {
        "dev": "vuepress dev",
        "prod": "vuepress build"
    }

Save this, and then run the following command in your terminal:

    yarn dev

Once this command finishes running, you should see something like this in your terminal:

    > VuePress dev server listening at http://localhost:8080/

Open up `http://localhost:8080` in your browser, and you’ll see your website!

![](/uploads/2018/10/vuepress-demo-screen1.png)

It’s a bit unremarkable at the moment. Let’s do something about that!

## Customizing Your VuePress Site

Without any further configuration, VuePress uses its default theme. This theme has some nice features out of the box, and as we’ve mentioned, makes creating a polished documentation website incredibly easy. However, at some point you will surely want to deviate from the stock-standard theme and customize the look & feel of your site.

### Configuring VuePress

VuePress looks in a `.vuepress` folder inside your project for all of its configuration and layout information. We can configure VuePress by creating a `config.js` file inside the `.vuepress` folder.

    mkdir .vuepress
    touch .vuepress/config.js

This file will export a configuration object that will be used by VuePress. Check out the [VuePress Config Reference](https://v0.vuepress.vuejs.org/config/) for all of the available options. For now, we’re just going to set the title of our site, and include the [Bulma](https://bulma.io/) stylesheet so we can quickly apply some basic styling to our site.

    module.exports = {
        title: "My VuePress Site",
        head: [
            ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'}]
        ]
    }

### Creating a Custom Layout

We can override the layout used by our VuePress site by creating a file named `Layout.vue` in `.vuepress/theme`. `Layout.vue` will be a [single file Vue component](https://vuejs.org/v2/guide/single-file-components.html) that will be created for every markdown file in our site.

{{% tip %}}

**Single file components** are a unique Vue convention where HTML, styles, and JavaScript related to a component are consolidated in a single file with a `.vue` extension. An empty Vue component looks something like this:

    <template>
      <!-- Component markup -->
    </template>
    <style>
      /* Include component-specific CSS here */
    </style>
    <script>
    export default {
      //... component definition like properties and behaviors goes here
    };
    </script>

Note that the `<style>` section is entirely optional. Since we’re already loading the Bulma CSS framework, we won’t be using `<style>` in our single-file components.

{{% /tip %}}

Let’s create a basic `Layout.vue` component. Remember that this file should be located at `.vuepress/theme/Layout.vue`:

    <template>
        <div>
            <header class="hero is-primary">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">{{ $site.title }}</h1>
                    </div>
                </div>
            </header>
            <section class="section">
                <div class="content container">
                    <h1>{{ $page.frontmatter.title }}</h1>
                    <Content />
                </div>
            </section>
        </div>
    </template>
    <script>
    export default {};
    </script>

There are three things to make note of here. First, the `$site` variable, which contains information pertaining to our site as a whole. We can access the `title` attribute exported in our site’s `config.js` from this `$site` variable. Second, the `$page` variable contains data about the current page. We can add YAML front matter to our markdown files, and access this data in `$page.frontmatter`.

Finally, there is the markup that renders the content of the page. `<Content />` references a built-in Vue component that will render the content of the markdown file as HTML inside of our Layout component.

{{% tip %}}
Be sure to note that we wrapped all of the template markup inside of a single `<div>`. Vue will throw an error if the markup inside your `<template>` section doesn’t contain a single top-level element.
{{% /tip %}}

Now that we’re using front matter, we should tweak our `index.md` file a little bit. Instead of including the title inside of the markdown, let’s move it to the front matter.

    ---
    title: Welcome to My Blog!
    ---
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ipsum maximus, volutpat justo in, ullamcorper purus. Etiam sapien nulla, finibus id nisi a, accumsan euismod elit. Nunc auctor ut lacus quis tempus. Pellentesque finibus ut nulla at finibus. Nam porttitor sodales finibus. Fusce efficitur risus eget sodales commodo. 
    Etiam velit sapien, posuere vitae enim eget, eleifend imperdiet nibh. Nunc rutrum neque in cursus euismod. Praesent velit felis, tristique in tincidunt in, euismod eu lorem. Pellentesque in ligula urna. Quisque cursus faucibus elit. Donec sem neque, sollicitudin auctor elementum a, tristique quis elit. Nullam mollis vitae elit id mollis.

By creating our own layout component in `.vuepress/theme/Layout.vue`, we are no longer using the default theme. When we restart our dev server with `yarn dev`, we’ll see our homepage rendered using our custom-built layout component:

![](/uploads/2018/10/vuepress-demo-screen2.png)

Not a bad start, but a blog needs posts, right? About that…

## Creating Different Layouts

In order to make an effective blog, we should have at minimum two different views: a **single** view, for reading a post, and an **index** view, where we can browse a list of posts to select the one we want to read.

To achieve this, I’ve decided to create two new components — `Single.vue` and `Index.vue` — and add some logic to `Layout.vue` to determine which one should be used for that page.

### Single View

Our `Single.vue` template is pretty simple:

    <template>
        <div>
            <div class="backlink">
                <a href="/">← Home</a>
            </div>
            <div class="content">
                <h1>{{ $page.frontmatter.title }}</h1>
                <Content />
            </div>
        </div>
    </template>
    <script>
    export default {};
    </script>

For simplicity’s sake, I’ve just added a link to navigate back to the homepage on every post. The rest of the template looks a lot like the body of our `Layout.vue` component.

### Index View

In our index view, we still want to display the index page’s content, and then display a collection of posts beneath that.

Our template uses `v-for` to iterate over all of the posts in our `posts` property. In order to populate the `posts` variable, we add it to our component as a [computed property](https://vuejs.org/v2/guide/computed.html#Computed-Properties).

    <template>
        <div>
            <div class="content">
                <h1>{{ $page.frontmatter.title }}</h1>
                <Content />
            </div>
            <div class="articles">
                <article class="post section" v-for="post in posts">
                    <h2 class="subtitle is-4">{{ post.title }}</h2>
                    <p>{{ post.frontmatter.excerpt }}</p>
                    <a :href="post.path">Read More →</a>
                </article>
            </div>
        </div>
    </template>
    <script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
                    .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));
            }
        }
    };
    </script>

`this.$site.pages` contains all of the pages in our site. By filtering based on the `path` property of these pages, we include only single pages (those that end in `.html`) and are descendants of the current page. Finally, we sort them by the date in their front matter.

### Switching the View

To determine whether to show the `Index.vue` or `Single.vue` component, we need to add some logic to our `Layout.vue` component. We’ll replace the template code that loads the Content component with the following:

    <section class="section">
        <div class="container">
            <Index v-if="isIndex" />
            <Single v-if="!isIndex" />
        </div>
    </section>

`v-if` will only render the component if the statement inside evaluates to true. We will define `isIndex` as another **computed property**, this time in `Layout.vue`. `isIndex` will return true if the page path ends in `/`, and false otherwise. Since our single pages end in `.html`, and the index pages end in `/`, this will ensure that any `index.md` file runs the `Index.vue` component, and everything else runs the `Single.vue` component.

The new `Layout.vue` looks like this:

    <template>
        <div>
            <header class="hero is-primary">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">{{ $site.title }}</h1>
                    </div>
                </div>
            </header>
            <section class="section">
                <div class="container">
                    <Index v-if="isIndex" />
                    <Single v-if="!isIndex" />
                </div>
            </section>
        </div>
    </template>
    <script>
    import Index from './Index';
    import Single from './Single';
    export default {
        components: {
            Index,
            Single
        },
        computed: {
            isIndex() {
                return this.$page.path.endsWith("/");
            }
        }
    };
    </script>

After we add a couple sample posts, our homepage now displays a list of our posts in addition to the page content:

![](/uploads/2018/10/vuepress-demo-screen3.png)

### Ejecting the Default Theme

Now that you’ve seen some of the basics of how to work with VuePress layouts, you should take a peek under the hood of VuePress’ default theme. Create a new VuePress project and run `vuepress eject`. This will copy the files for default theme into your `.vuepress/theme` directory, allowing you to inspect and customize this feature-rich theme.

VuePress is still a newcomer to the static site world: version 1.0 is currently in alpha, and this tutorial was done with version `0.14.4`. With its slick default theme and simple customization via Vue components, I look forward to seeing what this project  holds in the future.

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=18203322">Discuss on Hacker News</a>