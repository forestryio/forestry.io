---
aliases:
- "/docs/front-matter-fields/gallery-multi-file-upload-field/"
title: Multi-File Upload Field
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-11 00:00:00 -0400

---

![](/uploads/2018/01/multi-file-preview.png)

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.

## Templating

If you have a text field in your template, you can access it in your templates using the field’s `name`:

### Hugo

```go-html-template
<ul>
  {{ range .Params.gallery }}
    <li><img src="{{ . | relURL }}"></li>
  {{ end }}
</ul>
```

{{% tip %}}
Use the `relURL` filter to automatically append your site's `baseURL`.
{{% /tip %}}

### Jekyll

```twig
<ul>
  {% for image in page.gallery %}
    <li><img src="{{ image | relative_url }}"></li>
  {% endfor %}
</ul>
```

{{% tip %}}
Use the `relative_url` filter to automatically append your site's `baseURL`.
{{% /tip %}}

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: image_gallery
name: [String]
label: [String]
description: [String]
default:
- [String]
```

### Example

```yaml
type: image_gallery
name: gallery
label: Gallery
description: Provide a gallery of photos
default:
- "/uploads/2017/08/20/placeholder.jpg"
```
