---
title: Color Picker
publishdate: 2018-05-29 00:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-05-29 00:00:00 -0400
---

{{% pretty_screenshot img="/uploads/2018/05/colorpicker-field-ui.png" %}}

The color picker provides an interface for selecting a color and storing the RGB or hex value.

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Format**
  - _Color Format_ &mdash; Whether to save the RGB or hex value of the selected color.
- **Validation**
  - _Required_ – prevent changes from being saved if this field is empty.
- **Default** &mdash; supply a default color value.


## Templating

### Hugo

Use `safeHTMLAttr` when inserting values into HTML attributes.

```go-html-template
<div style="{{ safeHTMLAttr (printf "background-color: %s" .Params.color) }}">
    <!-- ... -->
</div>
```

### Jekyll

```html
<div style="background-color: {{ page.color }}">
    <!-- ... -->
</div>
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: color
name: [String]
label: [String]
description: [String]
config:
  color_format: [Hex|RGB]
```

The color format is required, and defaults to Hex when you create a color field through the user interface.

### Example

```yaml
type: color
name: background_color
label: Background Color
description: The background color of the element.
config:
  color_format: Hex
default: "#9B9B9B"
```
