---
title: VuePress Brings Your Documentation to Life
description: ''
date: 2018-08-10 04:48:09 -1100
authors:
- DJ Walker
publishdate: 2018-08-10 04:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories:
- VuePress
- Frontend-Friday
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
VuePress is a static site generator based on Vue JavaScript framework. With the first release appearing back in April and the current version being `0.14.1`, VuePress is a young project that shows a lot of promise.

VuePress has the flexibility to build any static site, but it particularly excels at working with documentation. In this article, I’ll show you how to adapt your docs to VuePress for documentation that survives on Github, but thrives on its own.

## VuePress’ Default Theme

One thing that sets VuePress apart from some other SSGs is its beautiful default theme. It’s clear that a lot of effort was put into the default theme to give new projects a fully-featured starting point.

It’s common for other SSGs to have a minimal or blank default theme (the default theme for new Jekyll projects is called *minima* for a reason.) This approach makes sense — “build a website that looks like everyone else’s” is not really a selling point. There’s a case to be made, however, when you just want to get your content on the web without investing a lot of time in putting together a website for it.


> VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system, and a default theme optimized for writing technical documentation.

VuePress actually encourages you to use its default theme for your project. According to [their documentation](https://vuepress.vuejs.org/guide/#how-it-works), the default theme is a core component of the VuePress project, not just a demo of how the generator works.


### Built-in Search

[screencast of search bar being used in demo project]

A usable search is essential for documentation. VuePress’ default theme supports searching out of the box. The search bar in your site’s header will search across the headings and subheadings in all of your markdown files and link to the relevant section when selected. When your documentation gets too dense to rely on a headings-based search, you can easily [switch over to Algolia DocSearch](https://vuepress.vuejs.org/default-theme-config/#algolia-search) with a little configuration.

{{% tip "What is Algolia?" %}}
If you’re not familiar with Algolia’s search service, [check out our blog post on the subject](https://forestry.io/blog/search-with-algolia-in-jekyll/).
{{% /tip %}}




## Great For Github Projects

Something I spend a lot of time thinking about is how to best make my documentation available in multiple contexts. For me, one of the most appealing features of markdown is the way information emphasis and hierarchy are preserved in the plaintext version of the file as well as the rendered HTML version. I prefer markdown over HTML for the raw document because, in addition to being able to read it when it’s rendered on my Github repository page, I expect people will sometimes dive into the raw markdown files to get their answers. With VuePress, your users could choose to run their own local copy of your entire documentation wesbite!

Towards this end, VuePress plays very well with documentation that lives on Github. For one thing, relative links to other markdown files in your document are automatically transformed into the corresponding URL to the HTML file in the generated site. So when you’re viewing the Github version of the docs, the links keep you on Github, and the same link on the published VuePress site will still take you to the right place.

VuePress also does a good job of staying out of the way of your codebase. VuePress stores its files in a `.vuepress` folder, separate from the rest of your code. When VuePress builds your site, it looks exclusively for markdown files, so it’s not likely to build anything into your docs that shouldn’t be there.


## Adding VuePress to Your Project

To demonstrate how easy it is to beef up your docs with a VuePress site, I’ve created a documentation website for my [serverless-autopublish](https://github.com/dwalkr/serverless-autopublish) project. [View the finished product here](https://peaceful-newton-6cfb0f.netlify.com/).

### Project Setup

Before adding VuePress, I reorganized the documentation a little bit. It’s common for a project’s documentation to serve two different audiences: those who want to use the software, and those who want to contribute to it. So, I took the documentation that was previously consolidated in a single `README.md` file and broke it out into two smaller documents that I [placed in the `docs/` folder](https://github.com/dwalkr/serverless-autopublish/tree/master/docs). I then modified the `README.md` file to continue to provide an overview of the project and link to the respective documents.


### Installing and Running Vuepress
VuePress recommends using [Yarn](https://yarnpkg.com/) to install your project dependencies. If your project doesn’t already have a `package.json`, you can create one with the following command:


    yarn init -y

You can then add VuePress as a dev dependency:


    yarn add -D vuepress

Once VuePress is installed, open your `package.json` file and add the following scripts:


    "scripts": {
      "docs:build": "vuepress build",
      "docs:dev": "vuepress dev"
    }

To start up a development server with your documentation site, just run `yarn docs:dev`. When you’re ready to build the production site, run `yarn docs:build`. The site will be generated in the `.vuepress/dist` directory.

### Configuring the Default Theme

VuePress’ default theme exposes several configuration options. A couple you will definitely want to configure are the navigation and sidebar.

To configure VuePress, add a `config.js` file inside of the `.vuepress` directory (go ahead and create the `.vuepress` directory if it doesn’t exist yet.) Insert the following code into the file:


    module.exports = {
      themeConfig: {
        sidebar: 'auto',
        nav: []
      }
    }

The `auto` setting for the sidebar automatically generates anchor links based on the headings in your document. This is a handy default for building useful documentation!

The `nav` option enables you to configure the navigation bar at the top of the page. This option takes an array of objects with a `text` and `link` attribute. You can generate multi-tiered navigation by including an `items` attribute instead of a `link`, and pass in an array of navigation items. Here’s what I added for my documentation nav:


    module.exports = {
        themeConfig: {
            nav: [
                { text: 'Docs', 
                  items: [
                      { text: 'Home', link: '/' },
                      { text: 'Usage', link: '/docs/usage.html' },
                      { text: 'Development', link: '/docs/development.html' },
                  ]
                },
                { text: 'Github', link: 'https://github.com/dwalkr/serverless-autopublish' }
            ],
            sidebar: 'auto'
        }
    }

[screenshot of navigation]

### Deploying to Netlify

Deploying the documentation site with Netlify is easy as usual. After adding the site to Netlify, we just need to set the **build command** to `yarn docs:build` and the **publish directory** to `.vuepress/dist`.

{{% tip %}}
Checkout the [VuePress deployment docs](https://vuepress.vuejs.org/guide/deploy.html) if you want to deploy your site to Github Pages.
{{% /tip %}}


## Use it With Forestry

By the way, you can totally edit your VuePress site in Forestry now.

[screenshot of vuepress button]

To do so, import a new site and select **VuePress** as the engine. After the site imports, you will need to configure your content sections. Navigate to the **Settings** section and click the **Sidebar** tab. Follow the instructions in the [sidebar documentation]() to tell Forestry which content files you want to be able to edit.

For my project, I’ve elected to keep all the documentation in a `docs/` folder while still using the `README.md` file at the root of the project to provide a project overview. To configure this in Forestry, I’m going to create two sections:


- A `document` section for the `README.md` file. I label this section “Home” since it serves as the project homepage.
- A `directory` section for the `docs` folder to edit the documentation files.

VuePress support is a new feature in Forestry and currently comes with some constraints. You can’t preview your pages, and Forestry can’t build and deploy the site for you. This is why I’ve elected to use Netlify to handle the deployment and hosting.


## VuePress and Beyond

You may have noticed that there isn’t much special about the `serverless-autopublish` project that identifies it as a VuePress site. To use it with Forestry, I just had to tell it where my markdown files were. VuePress adapts well to existing markdown documentation, and Forestry can be used to edit a VuePress site, so it stands to reason that Forestry could be used effectively to edit markdown docs for anything. Our release of VuePress support is just the first steps on a path of supporting a wide variety of content publishing tools!

