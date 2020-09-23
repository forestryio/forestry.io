---
aliases:
- "/docs/developing-with-jekyll/plugins"
date: 2017-07-24 00:00:00 +0000
description: ''
tags: ''
title: Jekyll Plugins
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 8
menu:
  guides:
    parent: Developing with Jekyll
    identifier: _jekyll-plugins
    weight: 23

---
Jekyll allows you to add Gem-based plugins using your `Gemfile`. This allows you to add things like [CoffeeScript][1] preprocessing.

## Installing Plugins

Forestry supports all third-party Jekyll plugins, and installs them in the same manner they are installed in your [local environment][2].

Installation generally has three steps:

1. Add the plugin to your `Gemfile`. If you do not have a `Gemfile`, you must create one in your project root.

        source 'https://rubygems.org'
        gem 'jekyll'
        group :jekyll_plugins do
          gem 'jekyll-menus'
        end
2. You must also add the plugin to the `gems` array in your Jekyll `_config.yml`.

        plugins:
        - jekyll-menus
3. Install the plugin and run Jekyll by running the following commands:

        $ bundle install
        $ bundle exec jekyll serve

**Note:** depending on the plugin, additional configuration may be required. Please read each plugin’s documentation carefully.

## Further Reading

* [Jekyll Plugins Reference](https://jekyllrb.com/docs/plugins/)
* [Bundler Gemfile Reference](https://bundler.io/v1.13/gemfile.html)

[1]: https://coffeescript.org/
[2]: /docs/guides/developing-with-jekyll/local-development
