---
aliases:
- "/docs/site-configuration/previewing"
- "/docs/editing/previews"
title: Previews
weight: 4
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
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

There are currently two options for previewing in Forestry:

* **Standard Previews**, which builds your site every time a user previews a document, and
* **Instant Previews**, which can run your SSG's dev server in the cloud, running a much shorter update loop when users preview a document.


## How Standard Previews Work

Previews are generated when an editor clicks the ![preview icon](/uploads/2018/01/preview-small.png) preview button in the top right corner of the [editor](/docs/editing/markdown-editor/). Any unsaved changes on the page being previewed will be included in the preview.

While the preview is generating, editors will be presented with a loading screen, and will be redirected to the page being previewed when the preview has finished generating.

{{% tip %}} Previews will usually take a few seconds to generate. However, depending on the size and complexity of the site, the preview may take significantly longer to generate. {{% /tip %}}

Previews run the same commands that publishing does, which is the default command for your static site generator of choice:

* For Hugo, this is `$ hugo`
* For Jekyll this is `$ jekyll build`.

## How Instant Previews Work

Instant Previews will use your static site generator's built-in dev server to build the preview. Because the SSG runs continuously in the background, it is typically able to rebuild your site _much_ faster than standard previews. Developers rely on this short feedback loop when building a website, and Instant Previews allows editors to take advantage of this same capability from within the Forestry CMS.

Once the server is started, clicking the ![preview icon](/uploads/2018/01/preview-small.png) preview button in the top right corner of the [editor](/docs/editing/markdown-editor/) will send the updated content (including any unsaved changes) to the preview server and rebuild your site. While the preview is generating, editors will be presented with a loading screen, and will be redirected to the page being previewed when the preview has finished generating.

## Which One Should I Choose?

Although the feature is still in beta, we highly encourage everyone to use **Instant Previews** where possible. We are continuously improving the Instant Previews experience!

### More Info
- [Configuring Your Instant Preview Server](/docs/previews/instant-previews/)
- [Using the Instant Preview Server](/docs/previews/instant-previews-server/)

## How long do previews last?

Previews are _ephemeral_ -- they are guaranteed to persist while a site is being worked on, but will eventually be removed. You can share your preview URLs with friends and collaborators for demonstration purposes, but do not attempt to host evergreen content from our preview environment.