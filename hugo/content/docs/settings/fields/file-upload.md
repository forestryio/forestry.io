---
aliases:
- "/docs/front-matter-fields/image-file-upload-field/"
title: Image Upload Field
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-04-27 00:00:00 -0400

---

![](/uploads/2018/01/file-preview.png)

## Options
![](/uploads/2020/04/image-settings.png)

- **General**
 - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Validation**
 - _Max File Size_ &mdash; prevent files larger than this value from being uploaded. *Value is in MB (Megabytes)*.
- **Default** &mdash; supply a default image.

## Templating

If you have a text field in your template, you can access it in your templates using the field’s `name`:

### Hugo

```go-html-template
<img src="{{ .Params.banner | relURL }}">
```

{{% tip %}}
Use the `relURL` filter to automatically append your site's `baseURL`
{{% /tip %}}

### Jekyll

```twig
<img src="{{ page.banner | relative_url }}">
```

{{% tip %}}
Use the `relative_url` filter to automatically append your site's `baseURL`
{{% /tip %}}

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: file
name: [String]
label: [String]
description: [String]
hidden: [true|false]
default: [String]
config:
  maxSize: [Number]
```

### Example

```yaml
type: file
name: banner
label: Banner
description: Provide a banner image for this post
hidden: false
default "/uploads/2017/12/31/placeholder.jpg"
config:
  maxSize: 2
```
