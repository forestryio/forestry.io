---
aliases:
- "/docs/front-matter-fields/repeatable-field-group-field/"
title: Repeatable Field Group
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 00:00:00 -0400

---

![](/uploads/2018/01/repeatable-field-group-preview.png)

A repeatable array of fields.

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Display**
  - _Item Label_ &mdash; select a field from the group to serve as the label for each item.
- **Validation**
  - _Minimum_ &mdash; the lowest number of items that must be added to this field.
  - _Maximum_ &mdash; the highest number of items that can be added to this field.

## Templating

You can access this field in your templates using the field’s `name`:

### Hugo

```go-html-template
{{ range .Params.authors }}
<div class="author">
  <h2>{{ .name }}</h2>
  <small>{{ .bio }}</small>
  <img src="{{ .image }}" alt="Photo of {{ .name }}">
</div>
{{ end }}
```

### Jekyll

```twig
{% for author in page.authors %}
<div class="author">
  <h2>{{ author.name }}</h2>
  <small>{{ author.bio }}</small>
  <img src="{{ author.image }}" alt="Photo of {{ author.name }}">
</div>
{% endfor %}
```

## Config Files
You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: field_group_list
name: [String]
label: [String]
description: [String]
hidden: [true|false]
fields:
 - [FieldConfig]
config:
  labelField: [String]
```

### Example

```yaml
type: field_group_list
name: authors
label: Authors
description: The authors of this post
hidden: false
fields:
- type: text
  name: name
  label: "Author's Name"
  config:
    required: true
- type: textarea
  name: bio
  label: "Author's Bio"
    config:
    required: true
config:
  labelField: name
```
