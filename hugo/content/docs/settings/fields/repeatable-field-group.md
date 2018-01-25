---
aliases:
- "/docs/front-matter-fields/repeatable-field-group-field/"
title: Repeatable Field Group
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400

---
A repeatable array of fields.

## Options
![](/uploads/2018/01/repeatable-field-group-options.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* _Repeatable Group Field Label_ – label each group with the value from of one of its fields.

## Field UI
![](/uploads/2018/01/repeatable-field-group-preview.png)

## Templating
You can access this field in your templates using the field’s `name`:

#### Hugo
```
{{ range .Params.authors }}
<div class="author">
  <h2>{{ .name }}</h2>
  <small>{{ .bio }}</small>
  <img src="{{ .image }}" alt="Photo of {{ .name }}">
</div>
{{ end }}
```

#### Jekyll
```
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

```
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
```
type: field_group_list
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
config:
  labelField: name
```