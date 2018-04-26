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

Hugo and Jekyll each have their own command-line utility for quickly creating a new project.

As discussed previously, [organizing your code into modules and using a bundler like Webpack](https://forestry.io/blog/write-better-javascript-with-webpack/) is the best option for writing modern JavaScript. Neither Jekyll nor Hugo's out-of-the-box configuration provides for this, but they both make room for external tools.

Jekyll and Hugo also have their own built-in webserver and file watching behavior. Integrating this with a custom build process is not straightforward; *Create Static Site* takes care of this for you.

## Getting Started

The easiest way to get started with *Create Static Site* is with [npx](https://www.npmjs.com/package/npx). In order to use `npx`, you need to have npm version 5.2 or higher installed, and you need node `6` or higher to run the `create-static-site` scripts.

{{% tip %}}
I recommend using [nvm](https://github.com/creationix/nvm) to switch between multiple versions of node and npm.
{{% /tip %}}

### Directory Structure

{{% tip %}}
When importing a site created with *Create Static Site* to Forestry, ...
{{% /tip %}}

## Features

### `.gitignore` Included


### Styles

### Scripts

### Images

### SVG

`{{ partial "svg" (dict "id" "svg--bitbucket") }}`

## Ejecting

## The Future of *Create Static Site*