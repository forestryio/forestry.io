---
aliases:
- "/docs/developing-with-jekyll/environments/"
date: 2017-07-24 00:00:00 +0000
description: ''
tags: ''
title: Environments
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 6
menu:
  guides:
    parent: Developing with Jekyll
    identifier: _jekyll-environments
    weight: 18

---
There are three unique developer environments when working with a Jekyll site in Forestry:

* **Local environment** this is your local development environment on your own machine. See [Local Development](/docs/guides/developing-with-jekyll/local-development) for more info.

* **Staging environment** this is the environment Forestry creates when we generate a preview for you. See [Previews](/docs/editing/previews) for more info.

* **Production environment** this is the environment Forestry publishes your site to. See [Hosting Options](/docs/hosting) for more info.

In order to make development easier, Forestry sets the environment variable `JEKYLL_ENV` based on the environment you’re in.

This allows you to set up conditional code in your layouts in order to handle paths, content, or functionality dependent on a specific environment.

This variable is accessible in your templates as `{{ jekyll.environment }}`.

The values are:

```
Local environment: "development"
Staging environment: "staging"
Production environment: "production"

```

## Further Reading
- [Jekyll Build Command Options](https://jekyllrb.com/docs/configuration/options/#build-command-options)
