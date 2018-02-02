---
title: 'Up & Running With Hugo: A 5 Step Guide'
description: Build a working static site using Hugo in less than 30 minutes
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

Hugo is the popular static site generator written in GoLang and is incredibly fast. In fact, the [Forestry.io](https://forestry.io "forestry.io") website is built with Hugo.

## Table of Contents

1. [Setting up Hugo on your local machine](#1-setting-up-hugo)
2. [Adding Content & Installing a Theme](#2-setting-up-your-site)
3. [Customizing Your Site](#3-customizing-your-site)
4. [Customizing Your Theme](#4-customizing-your-theme)
5. [Setting Up A Git Repository for CI & CD](#5-setting-up-a-git-repository-for-CI-CD)

## 1) Setting Up Hugo

We'll be using [_Hugo Boilerplate_](https://github.com/forestryio/hugo-boilerplate "See Hugo Boilerplate on GitHub")_,_ a continuously maintained boilerplate project for Hugo sites.

To get started, [download the Hugo Boilerplate](https://github.com/forestryio/hugo-boilerplate/archive/master.zip "Download from GitHub"), and unzip the archive somewhere on your computer. You'll also have to have [Node.js](https://nodejs.org) and [NPM](https://www.npmjs.com/) installed, just follow the instructions on [Node's download page](https://nodejs.org/en/download/).

{{% tip %}}

Already have a Hugo site? In that case, feel free to skip ahead to the [Setting Up A Git Repository for CI & CD](#5-setting-up-a-git-repository-for-CI-CD) section.

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

## 2) Setting Up Your Site

To get started, we're going to add new content to the site. To do so, we'll need to add the content to the `hugo/content/` folder.

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

_Replace_ `YYYY-MM-DDTHH:MM:SS-00:00` _with a valid date, e.g,_ `2018-01-01T12:42:00-00:00`

{{% /tip %}}

TK: image

Save your changes and then view the updated post in your browser at [https://localhost:3000/posts/example/](https://localhost:3000/posts/example/).

## Create A New Post

Now let's create a new post. We'll use Hugo's built-in commands to generate our new post by running:

    npm run hugo -- new posts/my-first-post.md

This will create your new post at `hugo/content/posts/my-first-post.md` as a markdown file. Open this file in your favorite text editor.

    ---
    title: "My First Post"
    date: "2018-01-31T14:24:17-04:00"
    draft: true
    ---

In this file, we have _Front Matter,_ structured metadata for the page that can be used in your templates. Below the front matter, we can add markdown content as well. Try adding the following to the file and then save your changes.

    ## Hello world
    Hi, I'm the *Hugo Boilerplate*. I hope you're enjoying this guide!

TK: image

You can view the updated post in your browser at [http://localhost:3000/posts/my-first-post/](https://localhost:3000/posts/my-first-post/).

## Adding A Theme

Right now your new site isn't looking very pretty. Let's fix that by adding a pre-built Hugo theme from the [Hugo Theme Gallery](https://themes.gohugo.io/), built by one of Hugo's great community contributors.

![](/uploads/2018/01/gohugo-theme-ananke.screenshot.png)

We're going to use the [Ananke](https://github.com/budparr/gohugo-theme-ananke.git) theme by _Bud Parr._ We'll do this by adding the theme to the `hugo/themes/` directory, specifically `hugo/themes/gohugo-theme-ananke/`

[Download the theme](https://github.com/budparr/gohugo-theme-ananke/archive/master.zip), unzip the archive and then copy the contents to `hugo/themes/gohugo-ananke/theme/`.

Next, you'll need to update your site's configuration with any of the theme-specific configurations. The theme has an example site, so we'll just use it.

Copy the example site content into your site by running:

    cp -r hugo/themes/gohugo-theme-ananke/exampleSite/* hugo/

The example config comes with a few placeholder values that won't work. Open `hugo/config.toml` in your favorite text editor, and update the following:

* Remove `themesDir = "../.."`
* Update `title = "Notre-Dame de Paris"` to `title = "Hugo Boilerplate Site"`

Finally, the boilerplate comes with some example layouts for developers that are building from scratch. Let's remove these for now by running:

    rm -r hugo/layouts/

Now head back over to the browser and check out your updated site!

## 3) Customizing Your Site

Now that we've set up a basic working site with a theme, you'll probably want to personalize it.

First, we'll customize the homepage. Open up `hugo/content/_index.md` and update `title` and `description` to be more personal. E.g,

* `title: "Ananke: a Hugo Theme"` => `title: "My Cool Boilerplate Site"`
* `description: "The last theme you'll ever need. Maybe."` => `description: "The first theme I've ever used. Maybe."`

![](/uploads/2018/02/janko-seboek-17854.jpg)

Next, we'll update the default hero image to something else. Open up `hugo/config.toml` and find `\\\\\\\[params\\\\\\\]`. Below, find the parameter `featured_image` and update it to `"/img/janko-seboek-17854.jpg"`, and save your changes.

Also open up `hugo/content/index.md` and `hugo/content/about/_index.md` and remove the `featured_image` param.

![](/uploads/2018/02/Screen Shot 2018-02-02 at 1.54.52 PM.png)

Now head back to your browser to see your updated site.

## 4) Customizing Your Theme

Now that you've customized your site to be a little more personalized, we'll focus on the most powerful aspect of Hugo and this boilerplate. **powerful yet simple templating.**

Earlier we added the _Ananke_ theme to the site, which allows Hugo to use all of the HTML layouts stored at `hugo/themes/gohugo-theme-ananke/layouts/` to generate your site.

Now, we'll _extend_ the theme by using Hugo's **template inheritance.** Any layouts stored in `hugo/layouts/` will _override_ the theme's layout, allowing us to customize our site without messing with the theme!

### Asset Processing

Along with _Hugo_, this boilerplate comes with a _Gulp pipeline_ that runs automatically when you start the development server. Any CSS, JS, or images found in the `src/` folder will be processed and automatically moved to `hugo/static/`.

To get started, let's copy the base layout of the theme and add the boilerplate's custom CSS and JS files to the layout.

In your terminal, run:

    mkdir hugo/layouts && mkdir hugo/layouts/_default/ && cp hugo/themes/gohugo-theme-ananke/layouts/_default/baseof.html hugo/layouts/_default/baseof.html
    mkdir hugo/layouts/partials/ && cp hugo/themes/gohugo-theme-ananke/layouts/partials/site-scripts.html hugo/layouts/partials/

Open `hugo/layouts/_default/baseof.html` in your favorite text editor and find the following:

    <link href='{{ "dist/main.css" | absURL }}' rel='stylesheet' type="text/css" />

Below, add the following:

    <link href='{{ "css/styles.min.css" | absURL }}' rel='stylesheet' type="text/css" />

Next, open `hugo/layouts/partials/site-scripts.html` and the following to the bottom of the file:

    <script src="{{ "js/scrips.min.js" | absURL }}" async></script>

Now all of your custom CSS and JS will be used on the site!

### Updating the Post Header

You'll notice that the homepage, about page, article listing and post listings all use the new `featured_image` we updated in, but not in our individual articles or posts.

Run the following command from your terminal to make a copy of the page header layout:

    cp hugo/themes/gohugo-theme-ananke/layouts/partials/page-header.html hugo/layouts/partials/

Then open up `hugo/layouts/partials/page-header.html` in your favorite text editor. This partial renders the page header _only_ if a `featured_image` param is provided in the post's front matter.

Let's update the page header to use our fallback image if it isn't defined in the post's front matter. On the first line, we'll update:

    {{ $featured_image := .Params.featured_image }}

To use the `.Param` function, which looks in the post's front matter, and if the param doesn't exist, looks for it in the `.Site.Params` in `config.toml`.

    {{ $featured_image := .Param "featured_image" }}

Save the change, and go to a post to see your updated partial in action!

## 5) Setting Up A Git Repository For CI & CD

Before we continue, you might be asking _What is CI & CD..?_ Let me explain:

### Continuous Integration (CI)

Continuous Integration (CI) is a development practice where developers check-in code to a version control tool multiple times per day. Each time code is checked-in, an automated can be build performed, allowing developers to identify problems with code quickly.

### Continuous Delivery (CD)

Continuous Deployment (CD) is a development practice where any change to software is automatically deployed to a production or staging environment. This allows for real-world testing and enables more rapid delivery.

{{% tip %}}

More on CI & CD in our [Frequently Asked Questions](https://forestry.io/docs/faqs/glossary/ci-cd/).

{{% /tip %}}

### Why are these important?

CI & CD allows you to automate the tedious parts of building websites -- making sure they are built right, and deploying those changes to production or staging environments for your team to review.

Version control also maintains a complete history of all changes that are checked into version control. This enables developers to quickly roll back changes that don't have the outcome that was desired. _(I.e, when a hasty change breaks your whole site! :P)_

### Setting up Git

Git is our version control system, which will enable CI & CD through tools like [Forestry](https://forestry.io).

{{% tip %}}

If you're new to Git and don't have Git installed, head over to [Git download page](https://git-scm.com/downloads) to download an installer for your OS.

{{% /tip %}}

Next, open your terminal once more and ensure your working path is the _Boilerplate_ project. If not, run:

    cd /PATH/TO/hugo

Then we'll create a local repository:

    git init

Next, we'll add all of the files in the project to the local repository:

    git add .

To see the status of the repository, run:

    git status

Finally, we'll _commit_ these changes to the local repository's version history:

    git commit -am "Init"

### Pushing to the Remote

Up to this point you've just been working on your _local repository._ If anything were to happen to your computer, all would be lost!

That's why we set up a _remote repository_ on services like GitHub, BitBucket, or GitLab. That way, our changes are stored in the Cloud and can be shared with your entire team.

Head over to your favorite Git provider and create a new repository. _If prompted, ensure you **don't** initialize the repository with a README, license, or a .gitignore file. That will just make things more complicated._

{{% tip %}}

If you're new to Git, we recommend you create a [GitHub account](github.com/signup) and then create a [GitHub repository](https://help.github.com/articles/create-a-repo/).

{{% /tip %}}

Next, grab the _Remote URL_ for your repository, and we'll add it to your local repository. _(Instructions for finding this can be found for_ [_GitHub_](https://help.github.com/articles/which-remote-url-should-i-use/)_,_ [_BitBucket_](https://confluence.atlassian.com/bitbucket/change-the-remote-url-to-your-repository-794212774.html)_.)_

    git remote add origin YOUR_REMOTE_URL && git branch -u origin/master

Verify the URL is correct:

    git remote -v

Finally, push your local repositories history to the remote repository's `master` branch:

    git push origin master

Congrats! You now have a working Hugo site, set up with version control so that you can easily set up continuous integration and continuous deployment.

## Next week

Next week we'll be releasing a post on setting up continuous deployment to various hosting providers using [_Forestry_](https://forestry.io)_,_ the CMS for static sites built with Hugo and Jekyll.

### Last Week

Last week we [released an article](/blog/hugo-and-jekyll-compared/) comparing two of the most popular static site generators, [_Hugo_](https://gohugo.io) and [_Jekyll_](https://jekyllrb.com). Check it out to learn which of these tools are the right tool for you or your business.