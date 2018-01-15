---
aliases:
- /docs/developing-with-hugo/environments/
date: 2017-06-20 20:03:09 +0000
description: ''
title: Environments
menu:
  guides:
    parent: hugo
weight: 6

---
They are three unique developer environments when working with a Hugo site in Forestry:

* **Local environment** this is your local development environment on your own machine. See [Local Development](https://app.forestry.io/docs/developing-with-hugo/local-development) for more info.

* **Staging environment** this is the environment Forestry creates when we generate a preview for you. See [Previewing](/docs/deployment-and-management/previewing) for more info.

* **Production environment** this is the environment Forestry publishes your site to. See [Setting Up Deployment](/docs/deployment-and-management/setting-up-deployment) for more info.

In order to make development easier, Forestry sets the environment variable `HUGO_ENV` based on the environment you’re in.

This allows you to set up conditional code in your layouts in order to handle paths, content, or functionality dependant on a specific environment.

This variable is accessible in your templates with the `getenv` function:

`{{ getenv "HUGO_ENV" }}`

The values are:

```
Local environment: undefined
Staging environment: "staging"
Production environment: "production"
``` 

**Note:** in Hugo the local environment variable is undefined because Hugo does not set this environment variable by default.