---
aliases:
- "/docs/developing-with-jekyll/local-development/"
date: 2017-07-24 00:00:00 +0000
description: ''
tags: ''
title: Local Development
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 7
menu:
  guides:
    parent: Developing with Jekyll
    identifier: _jekyll-local-development
    weight: 16

---
Jekyll allows you to work on your site in a local environment on your computer. It requires you to have `Ruby`, `RubyGems` and `Bundler` installed.

For detailed instructions on installing Ruby for your operating system, see the [Ruby Docs][1].

Once `Ruby` and `RubyGems` are installed, you can install `Bundler` by running:

```sh
gem install bundler
```

## Working with Git

If you set up and imported your site with Git, local development becomes much easier. We recommend you do this.

To get started, clone your repository to your desktop. For example:

```sh
git clone https://github.com/forestryio/jekyll-demo.git
```

Now you can begin working on your site. Any changes made to your site can be committed in Git, and will automatically be synced with your Forestry CMS.

## Serving your site locally

Jekyll comes with a local development server built into its binary. This will allow you to develop locally on your machine, and will automatically rebuild your site and refresh the browser as you make changes.

To run Jekyll with the server, run the command:

```sh
jekyll serve
```

This will spin up a local development server with live reload at the port `4000`, which is accessible from `http://localhost:4000`.

## Further Reading
- [Jekyll Usage Guide](https://jekyllrb.com/docs/usage/)

[1]: https://www.ruby-lang.org/en/documentation/installation/
[2]: https://app.forestry.io/dashboard
