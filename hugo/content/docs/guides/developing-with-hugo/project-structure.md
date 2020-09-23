---
aliases:
- "/docs/developing-with-hugo/project-structure/"
date: 2017-07-24 00:00:00 +0000
description: ''
tags: ''
title: Project Structure
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
weight: 2
menu:
  guides:
    parent: Developing with Hugo
    weight: 10

---
In Hugo, project structure and naming is fairly rigid other than content structure. You must follow the Hugo guidelines for where content, layouts, data, and static assets must be stored.

Inside your content folder, you create the structure and organization that works for you.

For example, a Hugo site may look like this:

```
.
├── archetypes/ 
├── config.yml
├── data/
|   └── members.yml
├── layouts/
|   ├── footer.html
|   └── header.html
├── content/
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── _index.md
├── public/
├── static/
|   ├── screen.css
|   └── main.js
├── themes/
|   └── example-theme

```

For a full breakdown on how this directory structure works, [see the Hugo docs](https://gohugo.io/getting-started/directory-structure/).

## How Forestry Parses Hugo

Based on the example structure above, let’s explain how Forestry parses your site.

## Content

Forestry parses the `content/` folder for any applicable content.

Any content in the root of the content folder with be added to the "Pages" content type.

Any content in a subfolder will be added to a content type with the same name as that folder. *For example, `content/posts/`* would become the "Posts" content type.

## Data Files

Any files found inside the `data/` folder are parsed as data files and are displayed individually in the CMS under the "Data" section.

## Front Matter Templates

Upon initial import, we will parse your site to generate [Front Matter Templates][1]. More details found in the [Front Matter Templates][1] doc.

## Further Reading
- [Hugo Structure Reference](https://gohugo.io/getting-started/directory-structure/)
- [Hugo Sections Reference](https://gohugo.io/content-management/organization/)
- [Hugo Content Types Reference](https://gohugo.io/content-management/types/)

[1]: /docs/settings/front-matter-templates/
