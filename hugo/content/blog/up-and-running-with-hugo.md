---
title: 'Up & Running With Hugo: A step-by-step guide'
description: Get
date: 2018-01-31 13:26:21 +0000
authors: []
publishdate: 2017-12-07 00:00:00 -0400
expirydate: 2030-01-01 04:00:00 +0000
categories:
- Hugo
tags:
- Frontend Friday
headline: ''
textline: ''
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
{{% tip %}

This guide was most recently updated on **February 9, 2018.**

{{% /tip %}

For this week on [_Frontend Friday_](/tags/frontend-friday/ "frontend friday tag")_,_ we'll be covering how to get set up with [Hugo](https://gohugo.io "Hugo Website") on Forestry, including setting up automated continuous deployment from a Git repository.

Hugo is the popular static site generator written in GoLang, and is incredibly fast. In fact, the [Forestry.io](https://forestry.io "forestry.io") website is built with Hugo.

## Table of Contents

In this guide we'll cover:

* Setting up Hugo on your local machine
* A quick overview of how Hugo works
* Installing a theme & setting up your first page
* Customizing your theme with Hugo layouts
* Setting up a Git repository and continuous deployment with Forestry

## Setting Up Hugo

We'll be using [_Hugo Boilerplate_](https://github.com/forestryio/hugo-boilerplate "See Hugo Boilerplate on GitHub")_,_ a continuously maintained boilerplate project for Hugo sites.

To get started, [download the Hugo Boilerplate](https://github.com/forestryio/hugo-boilerplate/archive/master.zip "Download from GitHub"), and unzip the archive somewhere on your computer. You'll also have to have [Node.js]() and [NPM](https://www.npmjs.com/) installed, just follow the instructions on [Node's download page](https://nodejs.org/en/download/).

{{% tip %}

Already have a Hugo site? In that case, feel free to skip ahead to the [_Continuous Deployment with Forestry_](#continuous-deployment-with-forestry) section.

{{% /tip %}

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

_If you use_ [_Yarn_](https://yarnpkg.com/en/) _instead of_ [_NPM_](https://www.npmjs.com/)_, run_ `_yarn install_` _instead._

To start the development server, simply run:

    npm start

_For Yarn, run_ `_yarn install_`_._