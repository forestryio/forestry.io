---
title: Instant Production-Ready Scaffolding With Create-Static-Site
description: ''
date: 2018-04-25 09:38:55 -1100
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
[Create React App](https://github.com/facebook/create-react-app) is a utility provided by the Facebook team in support of the React JavaScript framework. The goal of Create React App is to allow developers to quickly bootstrap a React project without having to spend time sorting out the build pipeline. With over 47,000 stars on Github (over half as many as the actual React library,) Create React App's popularity speaks for itself.

The success and utility of Create React App has inspired some of the brains at Forestry to create a similar project for scaffolding static sites. [Create Static Site](https://github.com/forestryio/create-static-site) is a tool that can set up a new Hugo or Jekyll site with a **modern, production-ready build pipeline** in seconds.

## Why *Create Static Site*

Building a website to keep up with modern demands requires a modern asset pipeline. You need to provide optimum cross-browser and legacy browser support to ensure your code works on as many devices as possible. You will want to [use a bundler like Webpack so you can write modular, well-organized JavaScript](https://forestry.io/blog/write-better-javascript-with-webpack/). You also want to serve optimized assets to your users so that your page loads as quickly as possible. All of this, of course, should be as fast and automatic as possible, so you're not wasting time manually recompiling and re-optimizing your scripts.

Neither Jekyll nor Hugo's `new` command will provide this out of the box. Jekyll provides CSS preprocessing with Sass (and can handle CoffeeScript with an additional plugin,) and Hugo is even simpler: it just copies any assets added to your site's `static` folder, allowing the developer to install whatever asset processing they want.

This is where *Create Static Site* comes in. *Create Static Site* builds off the scaffolding provided by the `new` command to include a **modern, production-ready asset pipeline** with your new site, while keeping the interface simple by using a single command and no configuration.

## Getting Started

The easiest way to get started with *Create Static Site* is with [npx](https://www.npmjs.com/package/npx). In order to use `npx`, you need to have npm version 5.2 or higher installed, and you need node `6` or higher to run the `create-static-site` scripts.

{{% tip %}}
I recommend using [nvm](https://github.com/creationix/nvm) to switch between multiple versions of node and npm.
{{% /tip %}}

If using this tool to create a Jekyll site, you will also need to have `ruby` and `bundler` available on your system.

Using `npx` we can invoke the `create-static-site` command without having to install it anywhere:

```
npx create-static-site my-new-site --template hugo
```

After running the above command, a new Hugo site will be created in the `my-new-site` directory. You can create a new Jekyll site instead by passing `--template jekyll` instead:

```
npx create-static-site my-new-site --template jekyll
```

After the install finishes, navigate to the directory of your new site:

```
cd my-new-site
```

If you're using Jekyll, you will need to install the gems before continuing:

```
bundle install
```

To start your development server, run the following command:

```
npm start
```

To build your production site, run the following command:

```
npm run build
```

This is the command you will want to [run in your CI environment](https://forestry.io/blog/automate-deploy-w-circle-ci/) to build your static site before deploying. It will build production assets and also run the static site generator.

{{% tip %}}
If you have `yarn` installed, *Create Static Site* will recommend running these commands through Yarn instead via `yarn start` and `yarn build`.
{{% /tip %}}



## Directory Structure

If you're used to bootstrapping a new site with `hugo new` or `jekyll new`, things will look a bit different here. You will find the standard Hugo or Jekyll files in the `site/` subdirectory. Your assets (CSS, JS, and images) are located in the `src/` subdirectory, and the generated site (after running `npm run build`) will be generated in the `dist/` subdirectory.

{{% tip %}}
When importing a site created with *Create Static Site* to Forestry, ...
{{% /tip %}}

## Features

### `.gitignore` Included

### BrowserSync (even w/ jekyll)

### Styles

### Scripts

### Images

### SVG

`{{ partial "svg" (dict "id" "svg--bitbucket") }}`

## Ejecting

## The Future of *Create Static Site*