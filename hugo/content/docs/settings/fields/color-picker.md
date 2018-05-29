---
title: Color Picker
publishdate: 2018-05-29 00:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-05-29 00:00:00 -0400
---

The color picker provides an interface for selecting a color and storing the RGB or hex value.

## Options

![Color picker field options](/uploads/2018/05/colorpicker-field-options.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* _Required_ – prevent changes from being saved if this field is empty.
* _Color Format_ – Whether to save the RGB or hex value of the selected color.

## Field UI

![Color picker field UI](/uploads/2018/05/colorpicker-field-ui.png)

## Templating

### Hugo

Use `safeHTMLAttr` when inserting values into HTML attributes.

```
<div style="{{ safeHTMLAttr (printf "background-color: %s" .Params.color) }}">
    <!-- ... -->
</div>
```

### Jekyll

```
<div style="background-color: {{ page.color }}">
    <!-- ... -->
</div>
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```
type: color
name: [String]
label: [String]
description: [String]
config:
    color_format: [Hex|RGB]
```

### Example

```
type: color
name: background_color
label: Background Color
description: The background color of the element.
config:
    color_format: Hex
```