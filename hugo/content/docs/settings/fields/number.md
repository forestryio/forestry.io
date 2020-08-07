---
title: Number Field
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 00:00:00 -0400

---

![](/uploads/2018/01/number-preview.png)

Text input that only accepts numeric values.

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Validation**
  - _Required_ &mdash; prevent changes from being saved if this field is empty.
  - _Minimum_ &mdash; the lowest number that may be entered in the field.
  - _Maximum_ &mdash; the highest number that may be entered in the field.
  - _Step_ &mdash; limits the field to only allow certain increments to be entered into the field.
- **Default** &mdash; supply a default number.

## Templating

You can access this field in your templates using the field’s `name`:

### Hugo

```go-html-template
<p>The page's weight is: {{ .Params.weight }}</p>
```

### Jekyll

```html
<p>The page's weight is: {{ page.weight }}</p>
```

Use number fields to sort pages in a loop:

### Hugo

```go-html-template
{{ range sort .Data.Pages ".Params.weight" "desc" }}
  <h2>{{ .Title }}</h2>
  <p>{{ .Description }}</p>
{{ end }}
```

### Jekyll

```twig
{% for post in site.posts | sort:"weight" %}
  <h2>{{ page.title }}</h2>
  <p>{{ page.description }}</p>
{% endif %}
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: number
name: [String]
label: [String]
description: [String]
hidden: [true|false]
default: [Number]
config:
  required: [true|false]
  min: [Number]
  max: [Number]
  step: [Number]
```

### Example

```yaml
- name: weight
  type: number
  label: Weight
  description: Set the page's sort order
  default: -99
  config:
    required: true
    min: 0
    max: 99
    step: 1
```
