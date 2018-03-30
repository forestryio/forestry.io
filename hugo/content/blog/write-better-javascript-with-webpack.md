---
title: Write Better JavaScript With Webpack
description: 'This post will explore why Webpack is the right choice for bundling your JavaScript application. If you’ve never used a build tool for your frontend assets, Webpack is a great place to start. '
date: 2018-03-30 12:00:00 +0000
authors: ['dj-walker']
publishdate: 2018-03-30 12:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: ['/img/write-better-javascript-with-webpack.png']
categories: 
- Frontend-Friday
- Development-Tools
tags:
- Webpack
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
I get it. The JavaScript ecosystem is exhausting. There exists an [abundance of tools and frameworks](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f), and each one wants to rescue you from the shortcomings of its peers. Attempting to learn and keep up with these tools takes time and energy that you would rather devote to your project. Reducing cognitive overhead is a core component of Forestry.io's philosophy — we designed a static site CMS that is easy to set up and use. A good tool shouldn't get in your way!

## The Problem

Writing complex client-side code is **painful** without some help. You already know that a well-organized codebase is easier to understand and maintain, but that can be difficult to accomplish when you’re just throwing a bunch of files in `<script>`  tags. On top of that, **best practices dictate that all of your code should be served up in a single file.**

Many solutions in this space, such as Gulp, can be used to smash a bunch of JavaScript files together into a single bundle. This is a great improvement — but is it really enough? We’re left with a linear dependency chain and relying on global variables to share information between our separate files.

### A Better Way
This post will explore why Webpack is the right choice for bundling your JavaScript application. If you’ve never used a build tool for your frontend assets, Webpack is a great place to start. If you’re already comfortable using a task runner like Gulp, delegating the asset bundling to Webpack will provide you with a more sophisticated organization and dependency management strategy.

Webpack **helps you write better code** and **gets out of your way** so you can focus on making great software.

## Webpack vs. Gulp

Maybe you’ve heard this before: **Gulp is a task runner, Webpack is a module bundler.** What does that actually mean?

**Gulp is a great automation tool.** It allows developers to set up complex file processing pipelines using JavaScript, and run them as simple commands. However, when it comes to packaging your JavaScript application, the previously-mentioned file smashing is about as far as it can go. If code in file A depends on code in file B, you need to tell Gulp to include file A first. This can be done directly in the Gulp configuration, or by maintaining a separate manifest file for use with a plugin like [asset-builder](http://use-asset-builder.austinpray.com/). As you add more files and your dependency tree grows, this can become a chore to maintain.

![He's a master of resolving the modules for everyone](/img/webpack_fighter_of_the_gulpstack_champion_of_the_bundle.png "He's a master of resolving the modules for everyone")

**Complex dependency resolution is Webpack’s specialty.** You specify a file that serves as your application’s **entry point**, and Webpack will recursively process module imports in your code to build a dependency graph.  When it’s all done, Webpack emits your JavaScript in a single bundle file. There's no need to tell Webpack the order in which it should put your files together; it figures it out by reading your code.

Gulp’s dependency resolution capability is limited and **requires you to explicitly define your dependency chain.** Webpack uses the **dependency logic built into your code.**

## Writing Modular Code

In order for Webpack to work its magic, your code needs to be written as **JavaScript Modules.** A JavaScript Module is a single JavaScript file that **exports** pieces of functionality for use in other parts of the code. Code in other files can then **import** this module in order to use it.

Webpack supports two standards for Module configuration: **EcmaScript** and **CommonJS**. The following examples demonstrate how you would configure a module defined in `hello.js` to be loaded by a file named `app.js` in each of these standards:

### EcmaScript Module Syntax
**hello.js**
```
export function hello() {
    console.log('Hello World!');
};
```
**app.js**
```
import {hello} from './hello';
hello();
```
The EcmaScript standard uses the `export` and `import` keywords.

### CommonJS Module Syntax
**hello.js**
```
module.exports = function() {
    console.log('Hello World!');
};
```
**app.js**
```
const hello = require('./hello');
hello();
```
The CommonJS standard works by assigning the exported code to `module.exports` and importing it by calling the `require()` function.


{{% tip %}}

If you aren’t sure which syntax to use, stick to writing EcmaScript Modules. It is still helpful to know both of these options, as you will likely encounter third-party libraries that use the CommonJS syntax and you will thus need to use `require()` to import them into your code.

{{% /tip %}}

## Intuitive Dependency Resolution

Webpack’s dependency resolution is **intuitive** because you don’t need to look at the Webpack configuration to understand what’s going on. You only need to know where the **entry point** is, and this will usually be obvious. This is helpful for new contributors to your project: they can understand the relationships in your code without having to understand the details of your build configuration.

## Configuring Webpack

Let’s set up the simplest possible configuration to understand the core components of Webpack. Start by setting up the following file structure:
```text
src/
    app.js
webpack.config.js
```
By default, Webpack looks for configuration in a file called `webpack.config.js`. Next, let’s install the Webpack modules by running the following terminal commands:
```text
npm init -y
npm install --save-dev webpack webpack-cli
```
Now that Webpack is installed in the project, open up `webpack.config.js` in a text editor and add the following code:
```
var path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
};
```
That’s all you need for a bare-bones Webpack config: define the **entry point** and the **output file**. Webpack requires an absolute path for the output, so we need to use the `path` module to resolve this at runtime.

We can then run Webpack by invoking the CLI command:
```text
./node_modules/webpack-cli/bin/webpack.js
```
This will read `src/app.js` and compile it into `dist/bundle.js`. Once the command completes, our project should look like this:
```text
dist/
    bundle.js
src/
    app.js
package.json
webpack.config.js
```
## Using NPM Scripts

A common strategy for streamlining your build CLI is to add custom scripts to the `scripts` property in your `package.json` file. You can then invoke these scripts with `npm run SCRIPT_NAME`.

Open your `package.json` file in a text editor and locate the `scripts` section:
```json
{
    "name": "my-webpack-demo",
    ...
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    },
    ...
}
```
The default `package.json` comes with one script called `test` that just returns an error message. Let’s add two more:

```json
{
    "name": "my-webpack-demo",
    ...
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "./node_modules/webpack-cli/bin/webpack.js",
    "watch": "./node_modules/webpack-cli/bin/webpack.js --watch"
    },
    ...
}
```
Now we can run our Webpack build by simply calling `npm run build`. We have also added a `watch` script that passes the `--watch` flag to `webpack-cli`. When invoked with this flag, Webpack will watch our files and automatically run the build when changes are detected.

Congratulations! You are now writing modular JavaScript, and you have a build process that puts it all together for you. 


## Next Steps

We have only scratched the surface here: Webpack is capable of much more than this, but bundling JavaScript modules is its core feature. Next time, we will explore Webpack’s **loaders** and **plugins** in order to optimize your JavaScript bundle, and using the **development server** for live reloading of your browser. If you want to get started right away, go ahead and dive into the [Webpack documentation](https://webpack.js.org/concepts/).

