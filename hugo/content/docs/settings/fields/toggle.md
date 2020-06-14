---
aliases:
- "/docs/front-matter-fields/toggle-field/"
title: Toggle Field
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 04:00:00 +0000

---

![](/uploads/2018/01/toggle-preview.png)

A boolean toggle.

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Default** &mdash; set the default toggle state.

## Templating

You can access this field in your templates using the field’s `name`:

#### Hugo

```go-html-template
{{ if .Params.is_featured }}
    // Do something special!
{{ end }}
```

### Jekyll

```twig
{% if page.is_featured %}
    // Do something special!
{% endif %}
```

#### VuePress

```html
<div v-if="$page.frontmatter.is_featured">
  // Do something special!
</div>
```

Use a toggle to filter pages in a loop:

### Hugo

```go-html-template
{{ range where .Data.Pages ".Params.is_featured" "eq" true }}
    <h2>{{ .Title }}</h2>
    <p>{{ .Description }}</p>
{{ end }}
```

### Jekyll

```twig
{% for post in site.posts | where:"is_featured", "true" %}
    <h2>{{ page.title }}</h2>
    <p>{{ page.description }}</p>
{% endif %}
```

### VuePress

```html
<template>
  <div class="featured-posts">
    <div v-for="post in featuredPosts" class="featured-post">
      <h2>{{ post.frontmatter.title }}</h2>
      <p>{{ post.frontmatter.description }}</p>
    </div>
  </div>
</template>
<script>
   export default {
    computed: {
      featuredPosts() {
        return this.$site.pages
          .filter(page => page.path.startsWith("/posts/")
          .filter(page => page.frontmatter.is_featured)
      }
    }
  }
</script>
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: boolean
name: [String]
label: [String]
description: [String]
default: [true|false]
hidden: [true|false]
```

### Example

```yaml
type: boolean
name: is_featured
label: Is Featured?
description: Mark this page as featured
default: true
hidden: false
```
