---
title: 'Gulp and Webpack: Getting the Best of Both Worlds'
description: ''
date: 2019-03-25 12:00:00 +0000
authors:
- DJ Walker
publishdate: 2019-03-25 12:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
categories:
headline: ''
textline: ''
images: 
- "/uploads/2019/03/box-stacks.jpg"
photo_credit: Samuel Zeller / Unsplash
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
[Once upon a time,](https://forestry.io/blog/write-better-javascript-with-webpack/) I told you that Webpack was an excellent tool for managing JavaScript in your web projects. This is because Webpack allows you to write modular JavaScript for the browser, and handles the dependency resolution and file bundling. I contrasted Webpack with Gulp, a stream processor and taskrunner utility that, while it has its place, doesn’t do the sophisticated module bundling that Webpack does. This makes Gulp a less attractive option for packaging your JavaScript files.

One issue with any asset pipeline, though, comes up when using it alongside a static site generator. You have one tool building your JavaScript and CSS, and another tool building your site’s HTML. For the most part this is a pretty minor inconvenience: your deployment script could just run the commands separately, and maybe in your development environment you could run Webpack’s watch command and your SSG’s dev server in separate terminal windows. A slightly inelegant solution, but perfectly serviceable.

Many developers have found creative solutions to this problem, which I learned while we were beta testing our brand new Instant Previews feature. With Instant Previews, Forestry is able to run your static site generator’s development server in our cloud preview environment, drastically reducing the time it takes to rebuild your preview. Unfortunately, some of those *imperfect-but-usable* solutions that have worked in developers’ preview environments don’t work so great with instant previews —  running multiple commands isn’t straightforward, and multiple parallel commands might lead to race conditions.

To help assist in the adoption of instant previews for users who incorporate Webpack or another asset processing tool, I searched for a simple solution that could be applied to a variety of use cases. This shouldn’t be that hard: what’s a good tool that will allow me to orchestrate a series of commands, watch files for changes, and run a development server?

{{% figure 
    src="/uploads/2019/03/gulp-logo.png" 
    alt="Gulp logo" 
    caption="We meet again, old friend." 
%}}

Sure enough, Gulp fits the bill perfectly here.

**Before we go any further,** take a deep breath. I kicked off that Webpack article discussing tool fatigue, so I can imagine how you feel right now: *I need* ***another*** *****build tool*** *to run my build tool?* 

This will be **really easy**, I promise.


## Getting Started With Gulp

For the purposes of this tutorial, let’s assume you have a Hugo site that uses Webpack to build assets. If you are using a different static site generator such as Jekyll, keep reading: this will be easy to adapt to several different SSGs.

Since you already have a Webpack build configured, it’s safe to assume you already have Node and NPM in your environment, and your project already has a `package.json` file with your Webpack dependencies. To add Gulp to your project, simply install it through NPM like so:

```bash
npm install --save gulp
```

This tutorial uses the current latest version of Gulp, which is `4.0.0` at the time of writing. If you are reading this in the future and are running into problems, you may want to make sure you’re using a compatible version of Gulp:

```bash
npm install --save gulp@4.x
```

### Creating Tasks

We’re going to define a series of tasks that will run all the essential components of our build, one after another. Ultimately we’ll create two Gulp commands: a **build** command, that will build our site for deployment, and a **develop** command, that will spin of a development server that rebuilds and reloads the site in response to changes.

The **build** command will require two tasks:

- Build the Webpack assets
- Run the static site generator

The **develop** command will be similar to the build command, but with a couple of extra steps:

- Build the Webpack assets
- Run the static site generator
- Start the development server
- Watch files for changes, re-run the builds, and reload the dev server

After Gulp is installed, create a new file named `gulpfile.js` in the root of your repository. At the top of this file, add the following line to load the `gulp` package to load gulp into this context:

```js
const gulp = require("gulp")
```
 
 The simplest way to create a Gulp task is by defining a function in `gulpfile.js`. Gulp passes a callback function to your task, which should be used to signal that your task is finished. 
 
```js
function someTask(cb) {
    // do some stuff
    cb()
}
```

Alternatively, you can just wrap your code in a `Promise`:

```js
function someTask(cb) {
    return new Promise((resolve, reject) => {
        // do some stuff
        resolve()
    })
}
```

In order to run this task on the command line, you need to export it:

```js
exports.someTask = someTask
```

At which point you can execute the task with the following command:

```bash
gulp someTask
```

{{% tip %}}
If you don’t have Gulp installed globally, running the `gulp` command may not work. Eventually we’re going to run our `gulp` command as an NPM script, which will correctly resolve the path to our installed modules, so this isn’t an issue.
{{% /tip %}}


## Setting Up The Build Pipeline

For starters, we will set up the basic build pipeline. This will just run the Webpack build, and wait until the assets are generated before running the SSG build. We can use `gulp.series` to create a new task to run these two sub-tasks sequentially, and then export it so we can run it on the command line. The structure of `gulpfile.js` will look something like this:

```js
const gulp = require('gulp')

function assets(cb) {
    // run webpack
}
function ssg(cb) {
    // run the SSG command
}

// export a build task that runs the above two tasks in series
exports.build = gulp.series(assets, ssg)
```

### Creating the Webpack task

Fortunately for us, Webpack has a Node API to allow us to invoke it from a Node environment, so incorporating this in to a Gulp task will be super easy.

First, require the webpack module in `gulpfile.js` (if you’re adding this to an existing Webpack project, you will already have Webpack installed.)

```js
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
```

You’ll notice that we are also loading in the Webpack config. If your Webpack config is somewhere other than `webpack.config.js` in your project root, you will want to adjust the path in the code above.

To run Webpack, we just have to invoke the `webpack` function from the module and pass it our `webpackConfig`. However, to make this work well with Gulp, we should wrap it in a Promise that can handle the success and error states:

```js
function assets(cb) {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err)
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')))
            }
            resolve()
        })
    })
}
```

That’s it! The beauty of this solution is that it will work with *any* Webpack config, and if you make updates to your asset pipeline, you don’t have to make any changes to this file.

### Creating the SSG task

Hugo of course doesn’t have a Node API, but we can reasonably assume we’re going to run our build in an environment that has access to the `hugo` command, we’ll use Node’s build-in `child_process` module to run the `hugo` process as if we were invoking it from the command line.

We’re going to use the `child_process` module’s `execFile` function. For best results, it would be great if we could have `execFile` return a `Promise.` Fortunately, we can use `utils.promisify` to provide a version of the function that does just that. Add the following lines to the top of `gulpfile.js`, with the rest of your imports:

```js
const util = require('util')
const execFile = util.promisify(require('child_process').execFile)
```

Then, all you have to do to implement the `ssg` function is this:

```js
function ssg(cb) {
    return execFile('hugo')
}
```

Of course, you might want this function to be more flexible: perhaps you want to run the command with different options depending on whether you’re developing the site or deploying it to the production environment. You could control this with environment variables if you wanted. For our example, I’ve chosen to modify the `ssg` function to return a new function depending on which environment is passed in as a parameter.

```js
function ssg(env) {
    if (env === 'production') {
        return hugo = cb => execFile('hugo')
    }
    return hugo = cb => execFile('hugo', ['-D','-F'])
}
```

If the code above looks a little weird, there’s a good reason for that. You could just `return cb => execFile('hugo')` without the unnecessary assignment, but Gulp’s output in the terminal identifies tasks by their function name. Thus, by assigning the arrow function before returning it, the task name will appear in the terminal as `hugo` (as opposed to `<anonymous>`).

With this modification, we need to change our `build` task. Since the `ssg` function now *returns* a Gulp task, instead of being a Gulp task itself, we’ll change the line from

```js
exports.build = gulp.series(assets, ssg)
```

to

```js
exports.build = gulp.series(assets, ssg('production'))
```

### Adding an NPM Script

As mentioned earlier, the recommended way to run these tasks is as an NPM script, because in this case it can automatically resolve any locally-installed modules. We’ll do this by adding a `scripts` section to `package.json`. If you already have a `scripts` section in that file, feel free to add or modify the commands in there.

```json
{
    ...
    "scripts": {
    "build": "gulp build"
    }
}
```

Once the script is added, you can invoke it from the command line via `npm run`:

```bash
npm run build
```

## Setting up the Development Pipeline

Now that we’ve gotten the basic build pipeline nailed down, there are only a couple more steps to add a live-reloading development server. Instead of using `hugo serve`, we are going to continue to build the site using the `hugo` command, and run the development server through Gulp.

### Browsersync

To run our development server, we’ll use BrowserSync. First, install it:

```bash
npm install --save browser-sync
```

Then, load it at the top of `gulpfile.js` with the rest of your imports:

```js
const browserSync = require('browser-sync').create()
```

Finally, we’ll create a new Gulp task called `serve` that starts the BrowserSync server by calling its `init` function. The second parameter passed to `init` is a callback function that will fire when the server is ready, so we’ll pass Gulp’s signal function as the callback here.

```js
function serve(cb) {
    browserSync.init({
        server: "./public",
        port: 8080,
        host: "0.0.0.0"
    }, cb)
}
```

Because the `hugo` command will build our site to `./public`, we set that as the document root of our server. If you’re using a different SSG, or building your site to a different directory, you will want to change this.

{{% tip %}}
We’ve chosen to bind to `0.0.0.0:8080` here for compatibility with Forestry’s \[instant previews\](null).
{{% /tip %}}

Additionally, let’s create a task to reload the server:

```js
function reload(cb) {
    browserSync.reload()
    cb()
}
```

### Live Reloading

We can use Gulp’s `watch` function to watch files for changes and run a task in response:

```js
function watch (cb) {
    return gulp.watch(
        '**/*', // watch everything...
        {
            ignored: [
                // ...except for things generated by the build process.
                'public/**/*',
                'static/assets/**/*'
            ]
        },
        // when something changes, rebuild + reload
        gulp.series(assets, ssg('development'), reload)
    )
}
```

There are a couple things that are important to pay attention to here:


1. To watch all files in the project, we can just use this **globstar** pattern: `**/*`
2. We want to be sure to ignore any files generated by the build process, otherwise we might end up in an infinite reload loop. For our project, this means ignoring everything in `public` (where the site is built to) as well as everything in `static/assets` (where the assets are generated.) Depending on how your site is set up, you may need to tweak these rules.

Now that this is done, we just need to create and export the `develop` task by running the following series:

```js
exports.develop = gulp.series(assets, ssg('development'), serve, watch)
```

This will run an initial build, start up the BrowserSync server, and then watch files for changes, running the rebuild & reload sequence defined in our `watch` task.

All that’s left is to add a corresponding NPM script:

```json
{
    ...
    "scripts": {
        "build": "gulp build",
        "develop": "gulp develop"
    }
}
```

Now, when we run `npm run develop`, it will start the development server, building both the Webpack assets and the Hugo site in a single sequence. When using the site with Forestry’s instant previews, you can just set the instant preview command to `npm run develop`.

## Gulp, Huh? All Right!

Wisdom lies in using the right tool for the job. Classifying both Gulp and Webpack as “build tools” will make it sound redundant to use both, but in this case the two work great together. I’ve explained before why I like using Webpack, but here’s what I like about this particular Gulp solution:


- Works with any static site generator that can run in your terminal
- Works with a variety of Webpack configs without modification
- Adds BrowserSync and live reloading behavior to any SSG
- Makes it easy to work with Forestry’s Instant Previews

You can download the entire `gulpfile.js` from [this gist](https://gist.github.com/dwalkr/60a19d6a309455b2552f7bd7989d26e0). If you’re not using Hugo, it should still be pretty straightforward to adapt it to whatever SSG you’re using.

And with that, all that’s left to say is: *welp, seeya later!*

{{% youtube "N_j5tDuakKU" %}}

