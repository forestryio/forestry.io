---
aliases:
- "/docs/site-configuration/previewing"
- "/docs/editing/previews"
title: Previews
weight: 4
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2019-06-28 12:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    name: About Previews
    parent: Previews
    weight: 1

---

Previews allow content editors to see changes in Forestry before saving or publishing those changes, as well as share the drafted changes before publishing them. You can think of Forestry's previews as your site's staging environment.

**[Instant Previews](/docs/previews/instant-previews/)** provide a short update loop when users preview a document.

## How Previews Work

Instant Previews will use your static site generator's built-in dev server to build the preview. Because the SSG runs continuously in the background watching for modified files, it is typically able to rebuild your site very fast. Developers rely on this short feedback loop when building a website, and Instant Previews allows editors to take advantage of this same capability from within the Forestry CMS.

Once the server is started, clicking the ![preview icon](/uploads/2018/01/preview-small.png) preview button in the top right corner of the [editor](/docs/editing/markdown-editor/) will send the updated content (including any unsaved changes) to the preview server and rebuild your site. While the preview is generating, editors will be presented with a loading screen, and will be get redirected to the page being previewed when the preview has finished generating.

Previews will usually take a few seconds to generate. However, depending on the size and complexity of the site, the preview may take significantly longer to generate.

### How to use previews?

- [Configuring Your Instant Previews](/docs/previews/instant-previews/)
- [Using the Instant Previews](/docs/previews/instant-previews-server/)

## How long do previews last?

Previews are _ephemeral_ — they are guaranteed to persist while a site is being worked on, but will go into hibernation after a few hours of inactivity.
You can share your preview URLs with friends and collaborators for demonstration purposes, but do not attempt to host evergreen content from our preview environment.
