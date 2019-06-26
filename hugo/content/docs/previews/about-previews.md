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

There are currently two preview systems in Forestry:

* Standard Previews
* Instant Previews (Beta)

{{% tip "Which previews should I use?" %}}
**Instant Previews** were created to make previewing even faster. While the Instant Previews feature
still in **BETA**, it has alredy proven to be a _much faster and enjoyable user experience then
the **Standard Previews**.

{{% /tip %}}


## How do Standard Previews Work

Previews are generated when an editor clicks the preview button in the top right corner of the [editor](/docs/editing/markdown-editor/). Any unsaved changes on the page being previewed will be included in the preview.

While the preview is generating, editors will be presented with a loading screen, and will be redirected to the page being previewed when the preview has finished generating.

{{% tip %}} Previews will usually take a few seconds to generate. However, depending on the size and complexity of the site, the preview may take anywhere from 15-30+ seconds to generate. {{% /tip %}}

Previews run the same commands that publishing does, which is the default command for your static site generator of choice:

* For Hugo, this is `$ hugo`
* For Jekyll this is `$ jekyll build`.

{{% warning %}}
If your local development environment uses external build tools like Gulp to generate assets such as CSS, JS, or images, ensure the compiled assets are committed to version control and available to Hugo or Jekyll's built-in build commands.
{{% /warning %}}

## How Instant Previews Work

TODO

## How long do previews last?

Previews are guaranteed to persist for up to 24 hours, but may persist longer.

All changes that have not been saved or published will be discarded each time a new preview is generated, or when a preview expires.

Previews immediately expire when your site is published.