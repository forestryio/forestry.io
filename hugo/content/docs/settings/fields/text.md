---
aliases:
- "/docs/front-matter-fields/text-field/"
title: Text Field
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 04:00:00 +0000

---

![](/uploads/2018/01/text-preview.png)

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Validation**
  - _Required_ &mdash; prevent changes from being saved if this field is empty.
- **Default** &mdash; supply a default value.

## Templating

You can access this field in your templates using the field’s `name`:

### Hugo

```go-html-template
<h1>{{ .Title }}</h1>
```

### Jekyll

```html
<h1>{{ page.title }}</h1>
```

### VuePress

```html
<template>
  <h1>{{ $page.frontmatter.title }}</h1>
</template>
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: text
name: [String]
label: [String]
description: [String]
hidden: [true|false]
default: [String]
config:
  required: [true|false]
  min: [Int]
  max: [Int]
```

### Example

A required description field limited between 30 and 180 characters:

```yaml
- name: description
  label: Description
  type: text
  description: Human-friendly summary to be displayed in SERP
  config:
    required: true
    min: 30
    max: 180
```
