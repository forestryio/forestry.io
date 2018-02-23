---
title: 'Up & Running With Hugo, Part 1: Building Your First Site'
description: Build a working static site using Hugo in less than 30 minutes
date: 2018-01-31 13:26:21 +0000
authors:
- Chris Macrae
publishdate: 2017-12-07 04:00:00 +0000
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
draft: true

---
{{% tip %}}

This guide was most recently updated on **February 9, 2018.**

{{% /tip %}}

---

For this week on [_Frontend Friday_](/tags/frontend-friday/ "frontend friday tag")_,_ we'll be covering how to get set up with [Hugo](https://gohugo.io "Hugo Website") on your local machine, including setting up a theme and customizing it, as well as writing your own CSS & JS.

Hugo is the popular static site generator written in GoLang and is incredibly fast. In fact, the [Forestry.io](https://forestry.io "forestry.io") website is built with Hugo.

## Table of Contents

1. [Setting up Hugo on your local machine](#1-setting-up-hugo)
2. [Adding Content & Installing a Theme](#2-setting-up-your-site)
3. [Customizing Your Site](#3-customizing-your-site)
4. [Customizing Your Theme](#4-customizing-your-theme)
5. [Next Steps](#next-steps)

## 1) Setting Up Hugo

We'll be using [_Hugo Boilerplate_](https://github.com/forestryio/hugo-boilerplate "See Hugo Boilerplate on GitHub")_,_ a continuously maintained boilerplate project for Hugo sites that offers a modern developer workflow on top of Hugo.

To get started, [download the Hugo Boilerplate](https://github.com/forestryio/hugo-boilerplate/archive/master.zip "Download from GitHub"), and unzip the archive somewhere on your computer. You'll also have to have [Node.js](https://nodejs.org) and [NPM](https://www.npmjs.com/) installed, just follow the instructions on [Node's download page](https://nodejs.org/en/download/).

{{% tip %}}

Already have a Hugo site? In that case, feel free to skip ahead to part two of this guide: _Up & Running With Hugo, Part 2: Continuous Integration & Continuous Deployments_

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

To start the development server and open it up in your browser, simply run:

    npm start

## 2) Setting Up Your Site

To get started, we're going to add new content to the site. To do so, we'll need to update the content to the `hugo/content/` folder.

## Update A Post

To start, let's update the example post shipped with the _Hugo Boilerplate_. Open up `hugo/content/posts/example.md` in your text editor. You'll see `title` front matter field and some example markdown content.

    ---
    title:  "Welcome to Hugo!"
    ---
    You’ll find this post in your `content/posts` directory.
    
    To add new posts, simply add a file in the `content/posts` directory that follows the convention `name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea of how it works.
    
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

_Replace_ `YYYY-MM-DDTHH:MM:SS-00:00` _with a valid date, e.g,_ `2018-01-01T12:42:00-00:00`. If your date is in the future, Hugo wont build this post when doing production builds.

{{% /tip %}}

Save your changes and then view the updated post in your browser at [https://localhost:3000/posts/example/](https://localhost:3000/posts/example/).

## Create A New Post

Now let's try creating a new post. We'll use Hugo's built-in commands to generate our new post. In the boilerplate, Hugo is added as an NPM dependency, so we can access it by running:

    npm run hugo -- <command> --<param>

Create your first post by running:

    npm run hugo -- new posts/my-first-post.md

This will create your new post at `hugo/content/posts/my-first-post.md` as a markdown file. Open this file in your favorite text editor.

    ---
    title: "My First Post"
    date: "2018-01-31T14:24:17-04:00"
    draft: true
    ---

In this file, we have _Front Matter (_structured metadata for the page) that can be used in your templates. Below the front matter, we can add markdown content as well.

Try adding the following to the file and then save your changes.

    ## Hello world
    Hi, I'm the *Hugo Boilerplate*. I hope you're enjoying this guide!

You can view the updated post in your browser at [http://localhost:3000/posts/my-first-post/](https://localhost:3000/posts/my-first-post/).

## Adding A Theme

Right now your new site isn't looking very pretty. Let's fix that by adding a pre-built Hugo theme from the [Hugo Theme Gallery](https://themes.gohugo.io/), built by one of Hugo's great community contributors.

![](/uploads/2018/02/Screen Shot 2018-02-05 at 5.09.25 PM.png)

We're going to use the [Casper](https://github.com/vjeantet/hugo-theme-casper) theme by [_@_vjeantet](https://github.com/vjeantet). We'll do this by adding the theme to the `hugo/themes/` directory, specifically `hugo/themes/hugo-theme-casper/`

[Download the theme](https://github.com/vjeantet/hugo-theme-casper/archive/master.zip), unzip the archive and then copy the contents to `hugo/themes/hugo-theme-casper/`.

Next, you'll need to update your site's configuration with any of the theme-specific configurations.

Open `hugo/config.toml` in your favorite text editor, and replace the contents with the following:

    baseURL= "/"
    languageCode= "en"
    title= "Hugo Boilerplate"
    paginate = 5
    copyright = "All rights reserved - 2018"
    theme = "hugo-theme-casper"
    disableKinds = ["taxonomy", "taxonomyTerm"]
    
    [params]
      description = "Welcome to my website"
      metadescription = "Used as 'description' meta tag for both home and index pages. If not set, 'description' will be used instead"
      cover = ""
      author = "YOUR_NAME"
      authorlocation = "Earth, Milky Way Galaxy"
      authorwebsite = ""
      authorbio= ""
      logo = ""
      hjsStyle = "default"
      paginatedsections = ["posts"]

_For a full list of available configuration docs, see the_ [_theme documentation_](https://github.com/vjeantet/hugo-theme-casper#configuration)_._

Finally, the boilerplate comes with some example layouts for developers that are building from scratch. Let's remove these for now by running:

    rm -r hugo/layouts/

Now head back over to the browser and check out your updated site!

## 3) Customizing Your Site

Now that we've set up a basic working site with a theme, you'll probably want to personalize it.

First, we'll customize the site params. Open up `hugo/config.toml` once more, and update the following as you see fit:

* `title = "Hugo Boilerplate"`
* `description = "Welcome to my website"`
* `metadescription = "Used as 'description' meta tag for both home and index pages. If not set, 'description' will be used instead"`
* `author = "YOUR_NAME"`

![](/uploads/2018/02/Screen Shot 2018-02-05 at 2.39.57 PM.png)

Next, we'll update the default hero image to something else. Open up `hugo/config.toml` and find `\\\\\\\\\\\\\\\[params\\\\\\\\\\\\\\\]`. Below, find the parameter `cover` and update it to `/img/darius-soodmand-116253.jpg`, and save your changes.

![](/uploads/2018/02/Screen Shot 2018-02-05 at 2.40.26 PM.png)Now head back to your browser to see your updated site.

## 4) Customizing Your Theme

Now that you've customized your site to be a little more personalized, we'll focus on the most powerful aspect of Hugo and this boilerplate: **powerful yet simple templating.**

Earlier we added the Casper theme to the site, which allows Hugo to use all of the HTML layouts stored at `hugo/themes/hugo-theme-casper/layouts/` to generate your site.

Now, we'll _extend_ the theme by using Hugo's **template inheritance.**

Any layouts stored in `hugo/layouts/` will _override_ any layout with the same name in theme's layouts directory, allowing us to customize our site without messing with the theme.

### Custom CSS & Javascript

Along with _Hugo_, this boilerplate comes with a development server that automatically post-processes CSS & JS for the browser. Any CSS, JS, or images found in the `src/` folder will be processed and automatically moved to `hugo/static/`.

Let's add these to your theme so that you can customize it as needed. We'll copy the base layout of the theme and add the boilerplate's custom CSS and JS files to the layout.

First, we'll copy the header partial of the theme to the `hugo/layouts/partials/` directory:

    mkdir -p hugo/layouts/partials/
    cp hugo/themes/hugo-theme-casper/layouts/partials/header.html hugo/layouts/partials/header.html

Open `hugo/layouts/partials/header.html` in your favorite text editor and find the following:

    <link rel="stylesheet" type="text/css" href="{{ "css/screen.css" | relURL}}" />
    <link rel="stylesheet" type="text/css" href="{{ "css/nav.css" | relURL}}" />

Below this add:

    <link rel="stylesheet" type="text/css" href="{{ "css/styles.min.css" | relURL}}" />

Next, we'll copy the partial `footer.html` to the `hugo/layouts/partials/` directory so we can add our custom JS:

    cp hugo/themes/hugo-theme-casper/layouts/partials/footer.html hugo/layouts/partials/footer.html

Open `hugo/layouts/partials/footer.html` and find the following:

    <script type="text/javascript" src="{{"js/jquery.js" | relURL}}"></script>
    <script type="text/javascript" src="{{"js/jquery.fitvids.js" | relURL}}"></script>
    <script type="text/javascript" src="{{"js/index.js" | relURL}}"></script>

Below this add:

    <script type="text/javascript" src="{{"js/scripts.min.js" | relURL}}"></script>

Now all of your custom CSS and JS will be used on the site.

Let's give it a try by adding a little border around all of the site's content. Open `src/css/styles.css` and adding the following to the bottom of the file:

    .main-header {
      height: 80vh;
    }

![](/uploads/2018/02/Screen Shot 2018-02-05 at 2.55.09 PM.png)

Head back over to your browser to see the final result!

## 5) Next Steps

Now you're all set to begin building your static site with Hugo!

Feel free to continue using the Casper theme, or start from scratch using the `hugo/layouts/` directory.

{{% tip %}}

Check out the example files in the [_Boilerplate repository _](https://github.com/forestryio-templates/hugo-boilerplate/tree/master/hugo/layouts)if you choose to start from scratch.

{{% /tip %}}

Check out the following further reading to learn more about Hugo:

* [Content Organization in Hugo](http://gohugo.io/content-management/organization/)
* [Introduction to Templating in Hugo](http://gohugo.io/templates/introduction/)
* [Hugo configuration options](http://gohugo.io/getting-started/configuration/)

### Up next

Next week we'll be releasing a post on setting up version control with Git to facilitate continuous integration and continuous deployment to various hosting providers using [_Forestry_](https://forestry.io)_,_ the CMS for static sites built with Hugo and Jekyll.

[Subscribe to our newsletter](#footer-cta) to get updated when the next article is released!

### Last Week

Last week we [released an article](/blog/hugo-and-jekyll-compared/) comparing two of the most popular static site generators, [_Hugo_](https://gohugo.io) and [_Jekyll_](https://jekyllrb.com). Check it out to learn which of these tools are the right tool for you or your business.