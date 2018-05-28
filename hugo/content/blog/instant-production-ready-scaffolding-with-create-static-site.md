---
title: Instant Production-Ready Scaffolding With Create-Static-Site
description: ''
date: 2018-04-27 09:38:55 -1100
authors:
- DJ Walker
publishdate: 2018-04-26 03:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/04/s2-art-616310-unsplash.jpg"
categories: []
tags:
- Frontend Friday
- Hugo
- Jekyll
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
[Create React App](https://github.com/facebook/create-react-app) is a utility provided by the Facebook team in support of the [React](https://reactjs.org/) JavaScript framework. The goal of Create React App is to allow developers to quickly bootstrap a React project without having to spend time sorting out the build pipeline. With over 47,000 stars on Github (over half as many as the actual React library,) Create React App's popularity speaks for itself.

The success and utility of Create React App has inspired the Forestry.io community to create a similar project for scaffolding static sites. [Create Static Site](https://github.com/forestryio/create-static-site) is a tool that can set up a new Hugo or Jekyll site with a **modern, production-ready build pipeline** in seconds.

## Why You'll Like _Create Static Site_

Building a website to keep up with modern demands requires a modern asset pipeline. You need to provide optimum cross-browser and legacy browser support to ensure your code works on as many devices as possible. You will want to [use a bundler like Webpack so you can write modular, well-organized JavaScript](https://forestry.io/blog/write-better-javascript-with-webpack/). You also want to serve optimized assets to your users so that your page loads as quickly as possible. All of this, of course, should be as fast as possible and completely automatic, so you're not wasting time manually recompiling and re-optimizing your scripts.

Neither Jekyll nor Hugo's `new` command will provide this out of the box. Jekyll provides CSS preprocessing with Sass (and can handle CoffeeScript with an additional plugin,) but that's all. Hugo is even more barebones: it just copies any assets added to your site's `static` folder, intending for the developer to install whatever asset processing they want.

This is where _Create Static Site_ comes in. _Create Static Site_ builds off the scaffolding provided by the `new` command to include a production-ready asset pipeline with your new site, while keeping the interface simple by using a single command and no configuration.

## Getting Started

The easiest way to get started with _Create Static Site_ is with [npx](https://www.npmjs.com/package/npx). In order to use npx, you need to have npm version 5.2 or higher installed, and you need node 6 or higher to run the `create-static-site` scripts.

{{% tip %}}
I recommend using [nvm](https://github.com/creationix/nvm) to switch between multiple versions of node and npm.
{{% /tip %}}

If using this tool to create a Jekyll site, you will also need to have `ruby` and `bundler` available on your system.

Using npx we can invoke the `create-static-site` command without having to install it anywhere:

    npx create-static-site my-new-site --template hugo

After running the above command, a new Hugo site will be created in the `my-new-site` directory. You can create a new Jekyll site by passing `--template jekyll` instead:

    npx create-static-site my-new-site --template jekyll

After the install finishes, navigate to the directory of your new site:

    cd my-new-site

If you're using Jekyll, you will need to install the gems before continuing:

    bundle install

To start your development server, run the following command:

    npm start

This will start up the dev server, watch your files for changes, and set up BrowserSync for automatic reloading.

To build your production site, run the following command:

    npm run build

This is the command you will want to [run in your CI environment](https://forestry.io/blog/automate-deploy-w-circle-ci/) to build your static site before deploying. It will build production assets and also run the static site generator.

{{% tip %}}
If you have [Yarn](https://yarnpkg.com) installed, _Create Static Site_ will recommend running these commands through Yarn instead via `yarn start` and `yarn build`.
{{% /tip %}}

## Directory Structure

If you're accustomed to bootstrapping a new site with `hugo new` or `jekyll new`, things will look a bit different here. You will find the standard Hugo or Jekyll files in the `site/` subdirectory. Your assets (CSS, JS, and images) are located in the `src/` subdirectory, and the generated site (after running `npm run build`) will be generated in the `dist/` subdirectory.

{{% tip %}}

### Importing to Forestry

![](/uploads/2018/04/create-static-site-forestry-import.png)

When importing a site created with _Create Static Site_ to Forestry, you will need to tell it that your SSG files are in the `site/` subdirectory. After you select the repo and branch, Forestry will prompt you for the _config path_. Enter `site` in this field, and Forestry should then be able to locate your site.
{{% /tip %}}

## Features

### _.gitignore_ Included

This may sound like a minor quibble, but having a `.gitignore` preconfigured to exclude the generated HTML as well as your `node_modules` directory saves you an extra step during setup.

### Live Reloading via BrowserSync

It should be noted here that Hugo offers a nice development workflow out of the box with its `hugo serve` command, which uses BrowserSync to automatically reload the browser window when changes are detected. _Create Static Site_ offers the same functionality in its asset pipeline. If you're a Jekyll user, you will love having live reloading without needing any additional config.

### Styles

![](/uploads/2018/04/postcss-logo.png)

_Create Static Site_ uses [PostCSS](http://postcss.org/) to handle CSS transformations. You get [precss](https://github.com/jonathantneal/precss) to provide Sass-like features such as variables and selector nesting. You can use cutting-edge CSS features while maintaining cross-browser and legacy browser support with [cssnext](http://cssnext.io/) and [laggard](https://github.com/seaneking/laggard). [postcss-reporter](https://github.com/postcss/postcss-reporter) and [postcss-browser-reporter](https://github.com/postcss/postcss-browser-reporter) are included to make it easy to spot CSS errors in development, and [cssnano](http://cssnano.co/) shrinks your CSS down to the smallest file size possible.

### Scripts

![](/uploads/2018/04/webpack-logo.png)

[Webpack](https://forestry.io/blog/write-better-javascript-with-webpack/) handles your JavaScript, so you can organize your code into modules. [Babel](https://babeljs.io/) is included, with the popular [env preset](https://babeljs.io/docs/plugins/preset-env/) configuration so you can use modern syntax while supporting older browsers. In addition to the env preset, _Create Static Site_ includes plugins to support [the rest/spread operator for objects](https://babeljs.io/docs/plugins/transform-object-rest-spread). Finally, _Create Static Site_ uses [Uglify JS](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) to minify your JavaScript.

### Images

[Imagemin](https://github.com/imagemin/imagemin) is used to optimize images stored in `src/img/`.

{{% tip %}}

### Configuring Forestry's Uploads Directory

![](/uploads/2018/04/create-static-site-forestry-upload-paths.png)

After importing your site to Forestry, go to _Settings_ and configure your upload paths in the _File Paths_ section. To take advantage of _Create Static Site_'s image optimization for your uploads, ensure your upload folder begins with `/src/img/` and your file URLs start with `/img/`.

{{% /tip %}}

_Create Static Site_ will also take SVG files added to `img/svg` and compile them into a single spritesheet. _Create Static Site_ includes a template to easily insert these images into your site. The SVGs can be referenced by their ID in the spritesheet, which is `svg--` followed by the filename. The following examples demonstrate including the default SVG image found at `img/svg/bitbucket.svg`:

#### Hugo

    {{ partial "svg" (dict "id" "svg--bitbucket") }}

#### Jekyll

    {% include svg.html id="svg--bitbucket" %}

You can also pass the `class`, `width`, and `height` parameters to this partial to add the corresponding html attributes.

## Ejecting

Just like Create React App, _Create Static Site_ gives you the option to **eject** your configuration if you need to customize it. Note that after ejecting, you will have to maintain the build configuration yourself!

{{% tip %}}
Is there something missing from _Create Static Site_ that is essential to your workflow? Consider [forking the repository](https://github.com/forestryio/create-static-site) to create a new flavor, or [posting an issue](https://github.com/forestryio/create-static-site/issues) if you think it would be a sensible default.
{{% /tip %}}

## The Future of _Create Static Site_

We are actively looking for help and input on how to make _Create Static Site_ better. One thing we want to do is support more static site generators beyond Jekyll and Hugo.

If you'd like to contribute, [check out the contribution guidelines](https://github.com/forestryio/create-static-site/blob/master/CONTRIBUTING.md) and take a look at the [issues that are actively seeking contributions](https://github.com/forestryio/create-static-site/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll explore how to automatically publish scheduled posts for your static site</p><p><strong>Last week:</strong> We introduced Blocks and Sawmill, a Hugo Theme that empowers your Editors to <a href="https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry/#/">build their own pages</a> while keeping a clean code.</p></div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16941327">Discuss on Hacker News</a>