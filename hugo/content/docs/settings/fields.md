---
title: Fields
weight: 3
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-04-23 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Settings & Configuration
    weight: 3

---
## Text
![](/uploads/2018/01/text-preview.png)

Single line text input. Displayed for *Front Matter values* that are short strings. For example, a page title.

```yaml
---
title: "My New Page Title!"
---
```

[See detailed documentation](/docs/settings/fields/text)

---

## Textarea
![](/uploads/2018/01/textarea-preview.png)

Multi-line text input. Displayed for *Front Matter values* that are long strings. For example, a page description.

```
---
description: "Write an awesome description for your new site here. It will appear in your document head meta (for Google search results) and in your RSS feed's site description."
---
```

[See detailed documentation](/docs/settings/fields/textarea)

---

## Number
![](/uploads/2018/01/number-preview.png)

A stepped number input. Displayed for *Front Matter values* that are integers. For example, page weight.

```yaml
---
weight: 1
number: 3.14
---
```

[See detailed documentation](/docs/settings/fields/number)

---

## Toggle
![](/uploads/2018/01/toggle-preview.png)

True or false toggle. Displayed for *Front Matter values* that are booleans. For example, a feature toggle.

```yaml
---
show_feature: true
---
```

[See detailed documentation](/docs/settings/fields/toggle)

---

## Select
![](/uploads/2018/01/select-preview.png)

Multiple options displayed in a dropdown. Can be used for *Front Matter values* that are strings, but should be restricted to a set of options. Options can be sourced from existing content, data files, or manually provided. For example, a page's author.

```yaml
---
author: "scott-gallant"
---
```

[See detailed documentation](/docs/settings/fields/select)

---

## Datetime
![](/uploads/2018/01/datetime-preview.png)

Date and time picker. Used for *Front Matter values* that are valid date strings. Can be restricted to only date or time values. For example, page created date or page publish date.

```yaml
---
date: 2017-12-31T12:00:00+00:00
publish_date: 2018-01-07T12:00:00+00:00
---
```

[See detailed documentation](/docs/settings/fields/datetime)

---

## Color Picker

![Color Picker field UI](/uploads/2018/05/colorpicker-field-ui.png)

A color picker. Useful for *Front Matter values* that are used to render color. Can be saved as RGB or hex value.

[See detailed documentation](/docs/settings/fields/color-picker)

---

## Tags Field
![](/uploads/2018/01/tags-preview.png)

A list of options displayed as tags. Used for *Front Matter values* that are an array of strings. For example, page tags.

```yaml
---
tags:
    - hugo
    - jekyll
    - static-site-generators
---
```

[See detailed documentation](/docs/settings/fields/tags)

---

## Sortable List Field
![](/uploads/2018/01/sortable-list-preview.png)

A list of options displayed in a list. Used for *Front Matter values* that are an array of strings. Can be configured to restrict options in a dropdown. For example, page authors or related pages.

```yaml
---
authors:
    - "scott-gallant:
    - "jordan-patterson"
---
```

[See detailed documentation](/docs/settings/fields/sortable-list)

---

## File Upload
![](/uploads/2018/01/file-preview.png)

File upload input that adds uploads to the *[Media Library](/docs/editing/media-library/)*. Used for *Front Matter values* that are a string ending with a file extension. For example, a featured image.

```yaml
---
banner: "/uploads/2017/12/31/banner_image.jpg"
extra_style: "/css/extra_styles.css"
extra_script: "/js/extra_script.js"
---
```

[See detailed documentation](/docs/settings/fields/file-upload/)

---

## Multi-File Upload
![](/uploads/2018/01/multi-file-preview.png)

Gallery of media files. Used for *Front Matter values* that are an array of strings ending with a file extension. For example, an image carousel.

```yaml
---
carousel: 
    - "/uploads/2017/12/31/mountains.jpg"
    - "/uploads/2017/12/31/field.jpg"
    - "/uploads/2017/12/31/cabin.jpg"

extra_styles: 
    - "/css/extra_styles.css"

extra_scripts: 
    - "/js/extra_script.js"
---
```

[See detailed documentation](/docs/settings/fields/multi-file-upload/)

---

## Field Group
![](/uploads/2018/01/field-group-preview.png)

Group of *Front Matter Fields*. Used for *Front Matter values* that are an object. For example, your site's footer information.

```yaml
---
footer:
    copyright: "© 2017 Acme Inc."
    privacy_policy: "/privacy.md"
    terms_of_service: "/terms.md"
---
```

[See detailed documentation](/docs/settings/fields/field-group)

---

## Repeatable Field Group
![](/uploads/2018/01/repeatable-field-group-preview.png)

List of Field Groups. Used for *Front Matter values* that are an array of like-objects. For example, a list of authors.

```yaml
---
authors:
    - name: Scott Gallant
      bio: CEO & Co-founder
      identifier: scott-gallant
    - name: Jordan Patterson
      bio: CTO & Co-founder
      identifier: jordan-patterson
---
```

[See detailed documentation](/docs/settings/fields/repeatable-field-group)

## Include Template

Include the fields of another *Front Matter Template* into the current one. Good for commonly-reused front matter fields like SEO information.

[See detailed documentation](/docs/settings/fields/include-template)


## Blocks

A *Blocks* field is similar to a Repeatable Field Group, except that it supports *unlike* objects. Blocks fields are great for things like dynamic page layouts: a series of sections where each section may consist of different fields.

![](/uploads/2018/04/blocks-content-ui.png)

Blocks fields work by including *other* front matter templates. You specify which templates can be used in your blocks field when creating the Front Matter Template. When adding content to a Blocks field, you can select which of these templates to add from a dropdown.

```toml
+++
[[blocks]]
background_style = "Brand Color"
heading = "Features"
size = "Small"
template = "hero-section"
[[blocks]]
background_style = "Light"
content = "[Bulma](https://bulma.io/) is a modern, responsive CSS framework with a flexbox-based grid system. "
heading = "Built With Bulma"
image = "/uploads/2018/04/19/bulma-logo.png"
image_position = "Left"
template = "media-feature"
+++
```
[See detailed documentation](/docs/settings/fields/blocks)