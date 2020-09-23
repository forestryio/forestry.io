---
aliases:
- "/docs/developing-with-hugo/environments/"
date: 2017-07-24 20:03:09 +0000
description: ''
title: Environments
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 6
menu:
  guides:
    parent: Developing with Hugo
    weight: 19

---
There are three unique developer environments when working with a Hugo site in Forestry:

* **Local environment** this is your local development environment on your own machine. See [Local Development](/docs/guides/developing-with-hugo/local-development) for more info.

* **Staging environment** this is the environment Forestry creates when we generate a preview for you. See [Previews](/docs/editing/previews) for more info.

* **Production environment** this is the environment your site is published to. See [Hosting Options](/docs/hosting) for more info.

In order to make development easier, Forestry sets the environment variable `HUGO_ENV` based on the environment you’re in.

This allows you to set up conditional code in your layouts in order to handle paths, content, or functionality dependent on a specific environment.

This variable is accessible in your templates with the `getenv` function:

```go-html-template
{{ getenv "HUGO_ENV" }}
```

The values are:

- Local environment: development
- Staging environment: "staging"
- Production environment: "production"

**Note:** in Hugo the local environment variable is undefined because Hugo does not set this environment variable by default. You can also use [`hugo.Environment` and `hugo.IsProduction`](https://gohugo.io/functions/hugo/) in your templates.
