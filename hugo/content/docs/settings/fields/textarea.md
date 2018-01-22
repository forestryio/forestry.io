---
title: Textarea Field
weight: 2
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
---

## Types
- [Default](#default)
- [WYSIWYG](#wysiwyg)

## Default
Multi-line text input.

### Options
![](/uploads/2018/01/textarea-options.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_(Optional) – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* _Required_ – prevent changes from being saved if this field is empty.
* _WYSIWYG_ – toggle on rich-text editing. [See WYSIWYG mode](/#WYSIWYG)


### Field UI
![](/uploads/2018/01/textarea-preview.png)

### Templating
If you have a text field in your template, you can access it in your templates using the field’s `name`:

#### Hugo
```
<h1>{{ .Title }}</h1> 
```

#### Jekyll
```
<h1>{{ page.title }}</h1> 
```

### Types

### Config Files
You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```
type: text
name: [String]
label: [String]
description: [String]
hidden: [true|false]
config:
  required: [true|false]
```

## WYSIWYG
Enable HTML rich-text input with inline formatting only.

### Field UI
![](/uploads/2018/01/textarea-wysiwyg-preview.png)

### Templating
If you have a text field in your template, you can access it in your templates using the field’s `name`:

#### Hugo
```
<h1>{{ .Params.description | markdownify }}</h1> 
```

#### Jekyll
```
<h1>{{ page.description | markdownify }}</h1> 
```

{% tip %}
Use the `markdownify` filters to automatically format your HTML
{% /tip %}