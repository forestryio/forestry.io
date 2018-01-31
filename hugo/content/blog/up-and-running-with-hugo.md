---
title: 'Up & Running With Hugo: A Step-by-step Guide'
description: Get
date: 2018-01-31 13:26:21 +0000
authors:
- Chris Macrae
publishdate: 2017-12-07 00:00:00 -0400
expirydate: 2030-01-01 04:00:00 +0000
categories:
- Hugo
tags:
- Frontend Friday
textline: ''
headline: ''
images: []
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
{{% tip %}}

This guide was most recently updated on **February 9, 2018.**

{{% /tip %}}

---

For this week on [_Frontend Friday_](/tags/frontend-friday/ "frontend friday tag")_,_ we'll be covering how to get set up with [Hugo](https://gohugo.io "Hugo Website") on Forestry, including setting up automated continuous deployment from a Git repository.

Hugo is the popular static site generator written in GoLang, and is incredibly fast. In fact, the [Forestry.io](https://forestry.io "forestry.io") website is built with Hugo.

## Table of Contents

1. [Setting up Hugo on your local machine](#setting-up-hugo)
2. [Adding Content & Installing a Theme](#setting-up-your-site)
3. [Customizing Your Theme](customizing-your-theme)
4. [Setting Up A Git Repository for Continuous Delivery](#Setting-Up-A-Git-Repository-for-Continuous-Delivery)

## Setting Up Hugo

We'll be using [_Hugo Boilerplate_](https://github.com/forestryio/hugo-boilerplate "See Hugo Boilerplate on GitHub")_,_ a continuously maintained boilerplate project for Hugo sites.

To get started, [download the Hugo Boilerplate](https://github.com/forestryio/hugo-boilerplate/archive/master.zip "Download from GitHub"), and unzip the archive somewhere on your computer. You'll also have to have [Node.js]() and [NPM](https://www.npmjs.com/) installed, just follow the instructions on [Node's download page](https://nodejs.org/en/download/).

{{% tip %}}

Already have a Hugo site? In that case, feel free to skip ahead to the [_Continuous Deployment with Forestry_](#continuous-deployment-with-forestry) section.

{{% /tip %}}

Hugo generates a project structure for you automatically. In the boilerplate project, this is the `hugo/` directory. Inside of this directory are various folders containing your site's content, layouts, and assets (e.g, CSS, JS, and images). Take a look at the breakdown of the boilerplates structure outlined below:

    .
    ├── hugo/                  // The Hugo project; content, data and static files
    |   ├── .forestry/         // Contains Forestry.io configuration files
    |   ├── content/           // Where all site content is stored 
    |   ├── data/              // TOML, YAML or JSON files containing site data 
    |   ├── layouts/           // Your site's layouts
    |   |   ├── partials/      // Your site's partials
    |   |   └── shortcodes/    // Your site's shortcodes
    |   ├── static/            // Where all static files live
    |   |   ├── css/           // Where compiled CSS files live
    |   |   ├── js/            // Where compiled JS files live
    |   |   └── uploads/       // Where user uploads are stored
    |   └── config.toml        // The Hugo configuration file
    └─── src/
         ├── css               // CSS/SCSS source files to be compiled to /css/
         └── js                // JS source files to be compiled to /js/

To get the project up and running, open up a terminal window and navigate to the boilerplate folder:

    cd path/to/hugo-boilerplate/

Then install all of the project dependencies by running:

    npm install

_If you use_ [_Yarn_](https://yarnpkg.com/en/) _instead of_ [_NPM_](https://www.npmjs.com/)_, run_ `yarn install` _instead._

To start the development server and open it up in your browser, simply run:

    npm start

_For Yarn, run_ `yarn install`_._

## Setting Up Your Site

To get started, we're going to add new content to the site. To do so, we'll need to add the content to the `hugo/content/` folder.

In your terminal, navigate to the `hugo/` directory by running:

    cd hugo/

## Create An About Page

Let's create a new _About _page. We'll use Hugo's built in commands to generate our new page by running:

    $(npm bin)/hugo new about.md

This will create your new about page at `hugo/content/about.md` as a markdown file. Open this file in your favourite text editor.

    ---
    title: "About"
    date: "2018-01-31T14:24:17-04:00"
    draft: true
    ---

In this file, we have _Front Matter,_ structured metadata for the page that can be used in your templates. Below the front matter, we can add markdown content as well. Try adding the following to the file and then save your changes.

    ## About
    Hi, I'm the *Hugo Boilerplate*. I hope you're enjoying this guide!

TK: image

You can view the updated post in your browser at [http://localhost:3000/about/](https://localhost:3000/about).

## Update A Post

Next, lets update the example post shipped with the _Hugo Boilerplate_. Open up `hugo/content/posts/example.md` in your text editor. You'll see `title` front matter field, and some example markdown content.

    ---
    title:  "Welcome to Hugo!"
    ---
    You’ll find this post in your `content/posts` directory.
    
    To add new posts, simply add a file in the `content/posts` directory that follows the convention `name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.
    
    Hugo also offers powerful support for code snippets:
    
    {{< highlight go >}}
    package main
    import "fmt"
    func print_hi(name string) {
      fmt.Println("Hi, ", name)
    }
    
    func main() {
      print_hi("Tom")
    }
    //=> prints 'Hi, Tom' to STDOUT.
    {{< /highlight >}}
    
    Check out the [Hugo docs][hugo-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Hugo’s GitHub repo][hugo-gh]. If you have questions, you can ask them on [Hugo Community][hugo-community].
    
    [hugo-docs]: https://gohugo.io/documentation/
    [hugo-gh]:   https://github.com/gohugoio/hugo
    [hugo-community]: https://discourse.gohugo.io/

This post is missing a date! Try adding it by adding the following to the post's _Front Matter_:

    date: "YYYY-MM-DDTHH:MM:SS-00:00"

{{% tip %}}

_Replace_ `YYYY-MM-DDTHH:MM:SS-00:00` _with a valid date, e.g,_ `2018-01-01T12:42:00-00:00`

{{% /tip %}}

TK: image

Save your changes and then view the updated post in your browser at [https://localhost:3000/posts/example/](https://localhost:3000/posts/example/).

## Adding A Theme

Right now your new site isn't looking very pretty. Let's fix that by adding a pre-built Hugo theme from the [Hugo Theme Gallery](https://themes.gohugo.io/), built by one of Hugo's great community contributors.

![](/uploads/2018/01/gohugo-theme-ananke.screenshot.png)

We're going to use the [Ananke](https://github.com/budparr/gohugo-theme-ananke.git) theme by _Bud Parr._ We'll do this by adding the theme to the `hugo/themes/` directory, specifically `hugo/themes/gohugo-theme-ananke/`

In your terminal, run:

    git init && git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/

Next, you'll need to update your site's configuration with any of the theme-specific configuration options. The theme has an example site, so we'll use it.

Copy the example site's example site content into your site by running:

    cp -r themes/gohugo-theme-ananke/exampleSite/* .

The example config comes with a few placeholder values that won't work. Open `hugo/config.toml` in your favorite text editor, and update the following:

* Remove `themesDir = "../.."`
* Update `title = "Notre-Dame de Paris"` to `title = "My cool boilerplate site"`

Finally, the boilerplate comes with some example layouts for developers that are building from scratch. Lets remove these for now by running:

    rm -r layouts/

Now head back over to the browser and check out your updated site!

## Customizing Your Theme

## Setting Up A Git Repository For Continuous Delivery