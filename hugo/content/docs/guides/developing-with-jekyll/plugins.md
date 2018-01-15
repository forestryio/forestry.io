---
date: 2013-07-24 00:00:00 +0000
description: ''
related:
- title: Jekyll Plugins Reference
  url: https://jekyllrb.com/docs/plugins/
- title: Bundler Gemfile Reference
  url: http://bundler.io/v1.13/gemfile.html
tags: ''
title: Jekyll Plugins
menu:
  guides:
    parent: jekyll
weight: 8

---
Jekyll allows you to add Gem-based plugins using your `.Gemfile`. This allows you to add things like [CoffeeScript][1] preprocessing.

## Installing Plugins
Forestry supports all third-party Jekyll plugins, and installs them in the same manner they are installed in your [local environment][2].

Installation generally has three steps:

1. Add the plugin to your `.Gemfile`. If you do not have a `.Gemfile`, you must create one in your project root.  

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
