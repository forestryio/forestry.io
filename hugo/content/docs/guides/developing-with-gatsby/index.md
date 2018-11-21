---
title: Developing with Gatsby
date: 2018-11-20 00:00:00 +0000
menu:
  guides:
    parent: Developing with Gatsby
    name: Introduction
    identifier: gatsby-intro
    weight: 1
  docs:
    parent: Developer Guides
    name: Gatsby
    identifier: developing-with-gatsby
    weight: 999
---

{{% feature_flag "gatsby-support" "on" %}}
{{% warning "Beta Feature" %}}

Gatsby support is currently in beta. Please direct any issues you encounter to the **gatsby-beta** channel in our community Slack.

{{% /warning %}}
{{% /feature_flag %}}

Gatsby is a highly flexible static site generator that uses ReactJS under the hood. Pages are implemented as React components and the whole site is bundled as a single page app (SPA), but also uses a static site build process to render a static HTML version of the site. The result is a static site that is SEO friendly, but whose UI is hydrated into a React SPA once a page is loaded.

## Gatsby is a Departure From Convention-based SSGs

Unlike Hugo and Jekyll, which build a static HTML website based on a specific structure of markdown files, Gatsby can be configured to work any way you want.

Out of the box, a vanilla Gatsby install will generate an HTML page for each `.js` file located in its `src/pages` directory. These `.js` files should export a React component containing the markup for the page. However, Gatsby allows a developer to customize the behavior of the SSG at the build stage, using its `createPage` API to create pages from a variety of data sources, such as different types of files or even data from a remote API.

## Gatsby is Focused on Performance

One of Gatsby's primary goals is to make it easy to create a performant website via a pre-configured, highly optimized asset pipeline. In this way, Gatsby can be seen as a successor to [create-react-app](https://facebook.github.io/create-react-app/) with some additional features to enable static site generation.

### ...But Not at the Build Stage

It should be noted that Gatsby users typically experience slower build times compared to a site build with Hugo or Jekyll. Due to Gatsby's flexibility, build times will vary widely, depending on your setup.

### Choose Gatsby if you:
- Plan to use an advanced asset pipeline
- Want to build your templates with React
- Want full control over _what_ pages are built by your SSG, and _where_.
- Are building a Progressive Web App as opposed to a content-driven website

### Don't choose Gatsby if you:
- Have a site with a large number of pages and want fast build times
- Don't want to work with React or GraphQL
- Want a website that runs little to no JavaScript on the client side

{{% feature_flag "gatsby-support" "off" %}}

## Currently in Beta

Support for Gatsby in Forestry is currently in closed beta, but you can [follow us on Twitter](https://twitter.com/forestryio/) or [join our community Slack](/blog/join-our-slack-community/) to be the first to know when Gatsby support becomes available for everyone!

{{% /feature_flag %}}

{{% feature_flag "gatsby-support" "on" %}}

## Getting Started

To get started with Gatsby, you will want to have a rudimentary understanding of [React](https://reactjs.org/) and [GraphQL](https://graphql.org/), and have [NPM](https://www.npmjs.com/) installed on your system.

We also recommend that you set up a Git repository to manage development of your site. Doing so offers you free backups, enables [content sync](/docs/git-sync/) with the CMS, and enables you to use [continuous deployment](/docs/settings/#deployment).

You can create a new Gatsby site by running the following commands in your terminal:

```
npm install -g gatsby
gatsby new my-gatsby-site
```

### Using a Starter Instead

Because Gatsby's behavior is highly configurable, many different **starter projects** have been created. These projects wire up Gatsby to work for various use cases. You can take a look at the [full list of starters](https://www.gatsbyjs.org/starters/?v=2) or, if you're planning to use your Gatsby site with Forestry, [try one of the markdown starters](https://www.gatsbyjs.org/starters/?c=Markdown&v=2) as your starting point.

{{% tip "Forestry's Gatsby Starter" %}}

We are working on a blog starter that will make it easy to get started with Forestry. For the time being, [we've forked a blog starter from Gatsby](https://github.com/forestryio/gatsby-starter-blog) that has some Forestry settings pre-configured.

{{% create_site_button
repo="https://github.com/forestryio/gatsby-starter-blog"
engineName="gatsby"
linkText="Import Gatsby Starter to Forestry"
 %}}

{{% /tip %}}


{{% /feature_flag %}}