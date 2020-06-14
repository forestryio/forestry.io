---
aliases:
- "/docs/front-matter-fields/tags-field/"
title: Tags Field
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 04:00:00 +0000

---

![](/uploads/2018/01/tags-preview.png)

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Default** &mdash; supply a default list of tags

## Templating

You can access this field in your templates using the field’s `name`:

### Hugo

```go-html-template
<p>{{ delimit .Params.tags ", " }}</p>
```

{{% tip %}}
Display a comma delimited string using the `delimit` filter.
{{% /tip %}}

```go-html-template
<h2>Tags:</h2>
<ul>
{{ range .Params.tags }}
  <li>{{ . }}</li>
{{ end }}
</ul>
```

### Jekyll

```twig
<p>{{ page.tags | array_to_sentence_string }}</p>
```

{{% tip %}}
Display a comma delimited string using the `array_to_sentence_string` filter
{{% /tip %}}

```twig
<h2>Tags:</h2>
<ul>
  {% for tag in page.tags %}
    <li>{{ tag }}</li>
  {% endfor %}
</ul>
```

### VuePress

```html
<template>
  <p>{{ $page.frontmatter.categories.join(', ') }}</p>
</template>
```

{{% tip %}}
Display a comma delimited string using the `v-for` and `v-text` attributes.
{{% /tip %}}

```html
<template>
  <h2>Tags:</h2>
  <ul>
	<li v-for="category in $page.frontmatter.categories"
    	v-text="category" />
  </ul>
</template>
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: tag_list
name: [String]
label: [String]
description: [String]
hidden: [true|false]
default:
  - [String]
```

### Example

```yaml
type: tag_list
name: ssg
label: Static Site Generator
description: Pickup your tool
default:
- Eleventy
- Gatsby
- Gridsome
- Hexo
- Hugo
- Jekyll
- NextJS
- NuxtJS
- Sapper
```
