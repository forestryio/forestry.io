---
title: Number Field
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400

---
Text input that only accepts numeric values.

## Options
![](/uploads/2018/01/number-options.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* _Minimum_ – the lowest number that may be entered in the field.
* _Maximum_ – the highest number that may be entered in the field.
* _Step_ – limits the field to only allow certain increments to be entered into the field.
* _Required_ – prevent changes from being saved if this field is empty.

## Field UI
![](/uploads/2018/01/number-preview.png)

## Templating
You can access this field in your templates using the field’s `name`:

#### Hugo
```
<p>The page's weight is: {{ .Params.weight }}</p> 
```

#### Jekyll
```
<p>The page's weight is: {{ page.weight }}</p> 
```


Use number fields to sort pages in a loop:

### Hugo
```
{{ range sort .Data.Pages ".Params.weight" "desc" }}
    <h2>{{ .Title }}</h2>
    <p>{{ .Description }}</p>
{{ end }}
```

### Jekyll
```
{% for post in site.posts | sort:"weight" %}
    <h2>{{ page.title }}</h2>
    <p>{{ page.description }}</p>
{% endif %}
```

## Config Files
You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```
type: number
name: [String]
label: [String]
description: [String] 
hidden: [true|false]
default: [Number]
config:
  min: [Number]
  max: [Number]
  step: [Number]
```

### Example
```
type: number
name: weight
label: Weight
description: Set the page's sort order
default: -99
hidden: false
config:
  min: 0
  max: 99
  step: 1
```