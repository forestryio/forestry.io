---
title: Content Sections
weight: 1
publishdate: 2018-07-24 00:00:00 -0400
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-07-25 00:00:00 -0400
layout: single
menu:
  docs:
    parent: Settings & Configuration
    weight: 3

---

You can define which areas (folders) of your site contain editable content files via the `sections` parameter in your `.forestry/settings.yml` configuration file.

A content section in Forestry is primarily defined by the path to the folder containing content files, and a glob to match against the contents of that folder.

## Section Configuration

{{% markdownpartial "docs/section-config-attribute-table.md" %}}

### _Sidebar Order_

Sections will appear in the sidebar in the same order they are defined.


### Type

The `type` parameter is used by Forestry to determine how to handle the files defined in the content section. The default type is `directory`, which will search for content files according to the `path` and `match` configuration. The other two options are `jekyll-pages` and `jekyll-posts`, which will follow special rules for Jekyll's [page](https://jekyllrb.com/docs/pages/) and [post](https://jekyllrb.com/docs/posts/) content types.

{{% warning %}}
The `jekyll-pages` and `jekyll-posts` section types should only be used with Jekyll sites. Additionally, you can only have one `jekyll-pages` section and one `jekyll-posts` section per site.
{{% /warning %}}

### Path

The `path` parameter should be a path to the directory that holds this section's content files, relative to the root of your repository. This setting only applies to sections of type `directory`.

{{% tip %}}
Because the path is relative to your project root, users configuring content sections for their Hugo site will want to prefix all of their paths with `content/`.
{{% /tip %}}

### Match

The `match` parameter should be a [glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)) that matches the files you want to be able to edit for this content section. Files that don't match this pattern will be ignored. This setting only applies to sections of type `directory`.

The default `match` value is `**/*` which will match all files, including any files in subdirectories.

{{% tip "Example glob patterns" %}}
- `**/*.md`: Match all markdown files
- `*.md`: Match all markdown files, excluding files in subdirectories
- `**/*.fr.md`: Match all files with a filename ending in `.fr.md` (useful if you're using Hugo's [filename-based translations](https://gohugo.io/content-management/multilingual/#translation-by-filename))
{{% /tip %}}

### Create

The `create` parameter allows you to specify whether new files can be created for the section. Setting this parameter to `all` allows for new files to be created, while setting it to `none` will only allow existing files to be edited.

### Templates

Pass in an array of Front Matter Template filenames (without their extension) to limit the available Front Matter Templates when creating a new content item in this section. The templates will be shown in the dropdown in the same order they are listed here, with the first template being the default selection. If only one template is defined, the template selection dropdown will not appear when adding new content.

### New Document File Extension

The `new_doc_ext` parameter lets you specify the extension to be used for new files created in this content section. You can specify a file extension with or without the extension delimiter (the `.`). The default file extension is whatever you have set as the **New Page Extension** in your site settings.

## Examples

Jekyll site with pages, posts, and a custom collection:

```
sections:
- type: jekyll-pages
  label: Pages

- type: jekyll-posts
  label: Posts

- type: directory
  path: _events
  label: Events
  templates:
  - event
```


Multilingual Hugo Blog:

```
sections:
- type: directory
  path: "content/posts"
  match: "**/*.en.md"
  label: English
  new_file_ext: ".en.md"

- type: directory
  path: "content/posts"
  match: "**/*.fr.md"
  label: French
  new_file_ext: ".en.md"
```
