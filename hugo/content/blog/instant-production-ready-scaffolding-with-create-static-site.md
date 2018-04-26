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

Building a website to keep up with modern demands requires a modern asset pipeline. You need to provide optimum cross-browser and legacy browser support to ensure your code works on as many devices as possible. You will want to [use a bundler like Webpack so you can write modular, well-organized JavaScript](https://forestry.io/blog/write-better-javascript-with-webpack/). You also want to serve optimized assets to your users so that your page loads as quickly as possible. All of this, of course, should be as fast as possible and completely automatic, so you're not wasting time manually recompiling and re-optimizing your scripts.

Neither Jekyll nor Hugo's `new` command will provide this out of the box. Jekyll provides CSS preprocessing with Sass (and can handle CoffeeScript with an additional plugin,) and Hugo is even more barebones: it just copies any assets added to your site's `static` folder, intending for the developer to install whatever asset processing they want.

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
### Importing to Forestry
![screenshot of "config path" field]()
When importing a site created with *Create Static Site* to Forestry, you will need to tell it that your SSG files are in the `site/` subdirectory. After you select the repo and branch, Forestry will prompt you for the *config path*. Enter `site` in this field, and Forestry should then be able to locate your site.
{{% /tip %}}

{{% tip %}}

### Configuring Forestry's Uploads Directory

{{% /tip %}}



## Features

### `.gitignore` Included
This may sound like a minor quibble, but having a `.gitignore` preconfigured to exclude the generated HTML as well as your `node_modules` directory saves you an extra step during setup.

### Live Reloading via BrowserSync

It should be noted here that Hugo offers a nice development workflow out of the box with its `hugo serve` command, which uses BrowserSync to automatically reload the browser window when changes are detected. Create Static Site offers the same functionality in its asset pipeline. If you're a Jekyll user, you will love having live reloading without needing any additional config.

### Styles

Create Static Site uses PostCSS to handle CSS transformations. You get precss to provide Sass-like features such as variables and selector nesting. You can use cutting-edge CSS features while maintaining cross-browser and legacy browser support with cssNext and laggard. postcss-reporter and postcss-browser-reporter are included to make it easy to spot CSS errors in development, and cssnano shrinks your CSS down to the smallest file size possible.

### Scripts

Webpack handles your JavaScript, so you can organize your code into modules. Babel is included, with the popular [env preset](https://babeljs.io/docs/plugins/preset-env/) configuration so you can use modern syntax while supporting older browsers. In addition to the env preset, Create Static Site includes plugins to support [the rest/spread operator for objects](https://babeljs.io/docs/plugins/transform-object-rest-spread). Finally, Create Static Site uses the Uglify JS plugin to minify your JavaScript.

### Images

Imagemin is used to optimize raster images.

Create Static Site will also take SVG files added to `img/svg` and compile them into a single spritesheet. Create Static Site includes a template to easily insert these images into your site.

#### Hugo
```
{{ partial "svg" (dict "id" "svg--bitbucket") }}
```

## Ejecting

Just like Create React App, Create Static Site gives you the option to **eject** your configuration if you need to customize it. Note that after ejecting, you will have to maintain the build configuration yourself!

{{% tip %}}
Is there something missing from Create Static Site that is essential to your workflow? Consider [forking the repository]() to create a new flavor, or [posting an issue]() if you think it would be a sensible default feature.
{{% /tip %}}

## The Future of *Create Static Site*

We are actively looking for help and input on how to make Create Static Site better. One thing we want to do is support more static site generators beyond Jekyll and Hugo.

If you'd like to contribute, [check out the contribution guidelines](https://github.com/forestryio/create-static-site/blob/master/CONTRIBUTING.md) and take a look at the [issues that are actively seeking contributions](https://github.com/forestryio/create-static-site/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).