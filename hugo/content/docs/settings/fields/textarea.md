---
aliases:
- "/docs/front-matter-fields/textarea-field/"
title: Textarea Field
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 04:00:00 +0000

---
![](/uploads/2018/01/textarea-preview.png)

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Widget**
  - _Textarea/WYSIWYG_ &mdash; toggle rich-text editing. [See WYSIWYG mode](/docs/settings/fields/textarea/#wysiwyg)
  - _Format_ &mdash; the format that should be used when writing the content to the file.
- **Validation**
  - _Required_ &mdash; prevent changes from being saved if this field is empty.
- **Default** &mdash; supply default text.


<!--
_File Format_ – determines exported format. `Markdown` for Markdown, `HTML` for HTML, and `Inline HTML` for only inline HTML elements.
-->

## Templating

You can access this field in your templates using the field’s `name`:

### Hugo

```go-html-template
<!-- Plain Text or HTML -->
<p>{{ .Params.description }}</p>

<!-- Markdown -->
{{ .Params.description | markdownify }}
```

### Jekyll

```twig
<!-- Plain Text or HTML -->
<p>{{ page.description }}</p>

<!-- Markdown -->
{{ page.description | markdownify }}
```

### VuePress

```html
<template>
  <!--- Description is Plain Text -->
  <div>
    <p v-text="$page.frontmatter.description" />
  </div>

  <!--- Description Contains HTML -->
  <div v-html="$page.frontmatter.description" />
</template>
```

{{% tip "Storing Markdown VuePress Front Matter " %}} VuePress does not have a built-in `markdownify` like function in Hugo or Jekyll, but you could always write your own [filter](https://vuejs.org/v2/guide/filters.html "Vue Filters")! {{% /tip %}}

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: textarea
name: [String]
label: [String]
description: [String]
hidden: [true|false]
default: [String]
config:
  wysiwyg: [true|false]
  schema:
    format: [markdown|html-blocks|html]
```

## Example

```yaml
type: textarea
name: description
label: Description
description: Short description of the page
hidden: false
default: ""
config:
  wysiwyg: false
```

## WYSIWYG

Enables a rich text editor.

### File Format

This field appears when _WYSIWYG_ is enabled. Select which format should be output to your front matter:

* **Markdown** _(markdown)_
* **HTML** _(html-blocks)_
* **Inline HTML** (only inline elements allowed) _(html)_

### Example

```yaml
type: textarea
name: description
label: Description
description: Short description of the page
hidden: false
default: ""
config:
  wysiwyg: true
  schema:
    format: markdown
```

## Field UI

![](/uploads/2018/01/textarea-wysiwyg-preview.png)

## Templating

If you have a text field in your template, you can access it in your templates using the field’s `name`:

### Hugo

```go-html-template
<p>{{ .Params.description }}</p>
```

### Jekyll

```html
<p>{{ page.description }}</p>
```

{{% tip %}}
Use the `markdownify` filters in Hugo or Jekyll to automatically format your HTML with paragraph tags and other formatting.
{{% /tip %}}

### Hugo

```go-html-template
{{ .Params.description | markdownify }}
```

### Jekyll

```twig
{{ page.description | markdownify }}
```

## Config Files

### Example

```yaml
type: textarea
name: description
label: Description
description: Short description of the page
hidden: false
default: ""
config:
  wysiwyg: true
```
