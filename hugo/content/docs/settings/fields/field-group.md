---
aliases:
- "/docs/front-matter-fields/field-group-field/"
title: Field Group
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 00:00:00 -0400

---

![](/uploads/2018/01/field-group-preview.png)

## Options

- **General**
  - _Label_ – the human-friendly label shown above the input field in the editor.
  - _Name_ – the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ – a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.


## Templating

If you have a text field in your template, you can access it in your templates using the field’s `name`:

### Hugo

```go-html-template
{{ with .Params.author }}
<div class="author">
  <h2>{{ .name }}</h2>
  <small>{{ .bio }}</small>
  <img src="{{ .image }}" alt="Photo of {{ .name }}">
</div>
{{ end }}
```

### Jekyll

```twig
{% if page.author %}
<div class="author">
  <h2>{{ page.author.name }}</h2>
  <small>{{ page.author.bio }}</small>
  <img src="{{ page.author.image }}" alt="Photo of {{ page.author.name }}">
</div>
{% endif %}
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: field_group
name: [String]
label: [String]
description: [String]
hidden: [true|false]
fields:
  - [FieldConfig]
```

### Example

```yaml
type: field_group
name: authors
label: Authors
description: The authors of this post
hidden: false
fields:
- type: text
  name: name
  label: Author's Name
  config:
    required: true
- type: textarea
  name: bio
  label: Author's Bio
    config:
    required: true
```
