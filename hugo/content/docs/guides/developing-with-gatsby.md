---
title: Developing with Gatsby
date: 2019-09-26 00:00:00 +0000
toc: false
description: Gatsby is a highly flexible static site generator that uses ReactJS under
  the hood. This guide will explain how Gatsby works, and help you get the most out
  of your Gatsby site in the Forestry CMS.
menu:
  docs:
    name: Gatsby
    parent: Developer Guides
    identifier: developing-with-gatsby
    weight: 3
  guides:
    name: Introduction
    parent: Developing with Gatsby
    identifier: gatsby-intro
    weight: 1

---
Gatsby is a highly flexible static site generator that uses ReactJS under the hood. Pages are implemented as React components and the whole site is bundled as a single page app (SPA), but also uses a static site build process to render a static HTML version of the site. The result is a static site that is SEO friendly, but whose UI is hydrated into a React SPA once a page is loaded.

## Gatsby is a Departure From Convention-based SSGs

Unlike Hugo and Jekyll, which build a static HTML website based on a specific structure of markdown files, Gatsby can be configured to work any way you want.

Out of the box, a vanilla Gatsby install will generate an HTML page for each `.js` file located in its `src/pages` directory. These `.js` files should export a React component containing the markup for the page. However, Gatsby allows a developer to customize the behavior of the SSG at the build stage, using its `createPage` API to create pages from a variety of data sources, such as different types of files or even data from a remote API.

## Gatsby is Focused on Performance

One of Gatsby's primary goals is to make it easy to create a performant website via a pre-configured, highly optimized asset pipeline. In this way, Gatsby can be seen as a successor to [create-react-app](https://facebook.github.io/create-react-app/) with some additional features to enable static site generation.

### ...But Not at the Build Stage

It should be noted that Gatsby users typically experience slower build times compared to a site built with Hugo or Jekyll. Due to Gatsby's flexibility, build times will vary widely, depending on your setup.

### Choose Gatsby if you:
- Plan to use an advanced asset pipeline
- Want to build your templates with React
- Want full control over _what_ pages are built by your SSG, and _where_.
- Are building a Progressive Web App as opposed to a content-driven website

### Don't choose Gatsby if you:
- Have a site with a large number of pages and want fast build times
- Don't want to work with React or GraphQL
- Want a website that runs little to no JavaScript on the client side

## Getting Started

To get started with Gatsby, you will want to have a rudimentary understanding of [React](https://reactjs.org/) and [GraphQL](https://graphql.org/), and have [NPM](https://www.npmjs.com/) installed on your system.

We also recommend that you set up a Git repository to manage development of your site. Doing so offers you free backups, enables [content sync](/docs/git-sync/) with the CMS, and enables you to use continuous deployment.

You can create a new Gatsby site by running the following commands in your terminal:

```
npm install -g gatsby
gatsby new my-gatsby-site
```

This will create a new Gatsby site in the `my-new-site` directory. To run your site locally, you can run the following commands:

```
cd my-gatsby-site
gatsby develop
```

This will start a live-reloading development server and your site will appear at `localhost:8000`.

### Using a Starter Instead

Because Gatsby's behavior is highly configurable, many different **starter projects** have been created. These projects wire up Gatsby to work for various use cases. You can take a look at the [full list of starters](https://www.gatsbyjs.org/starters/?v=2) or, if you're planning to use your Gatsby site with Forestry, [try one of the markdown starters](https://www.gatsbyjs.org/starters/?c=Markdown&v=2) as your starting point.


#### Forestry's Gatsby Starter

<div>
{{% create_site_button
repo="https://github.com/kendallstrautman/brevifolia-gatsby-forestry"
engineName="gatsby"
branch="master"
linkText="Import Gatsby Starter to Forestry"
%}}
</div>


{{% tip %}}
If you're not using the Forestry starter, be sure to review the following documentation to configure your Gatsby site with Forestry:

- [Media Files](/docs/media/)
- [Sidebar Configuration](/docs/settings/content-sections/)
- [Build Commands](/docs/settings/build-commands/)
{{% /tip %}}

## Known Limitations

The following are some acknowledged bugs or practical limitations of using Gatsby with Forestry:

### Forestry doesn't like relative image URLs; Gatsby Prefers Them
Depending on how you're querying images from your Gatsby site, you may have issues with Forestry. If you want to do any transformations on your images, Gatsby will want you to use the **file path** to your image instead of a URL. This is typically accomplished by inserting a **relative path** to the image in markdown files. Unfortunately, keeping track of your relative position in the file system and inserting an accurate relative path is tricky for any CMS, and Forestry won't do it. Additionally, Gatsby interprets absolute files paths **relative to the system root** and not the project root, so a solution based on absolute paths will not work across different environments.

Here are some options for getting around this:

- Store and reference images from the `static/` directory (this is the solution currently used by our [blog starter](https://github.com/kendallstrautman/brevifolia-gatsby-forestry/blob/master/.forestry/settings.yml#L28)). This will not allow you to transform images via GraphQL queries.
- Use [gatsby-remark-relative-images](https://github.com/danielmahon/gatsby-remark-relative-images#readme)
- Use [gatsby-remark-normalize-paths](https://www.gatsbyjs.org/packages/gatsby-remark-normalize-paths/) to convert project-relative absolute paths to relative paths.
