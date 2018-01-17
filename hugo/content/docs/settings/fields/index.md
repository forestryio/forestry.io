---
title: Fields
weight: 3
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: settings
---
## Text
TK: image

Single line text input. Displayed for *Front Matter value*s that are short strings. For example, a page title.

```yaml
---
title: "My New Page Title!"
---
```

[See detailed documentation](/docs/settings/fields/text)

---

## Textarea
TK: image

Multi-line text input. Displayed for *Front Matter value*s that are long strings. For example, a page description.

```
---
description: "Write an awesome description for your new site here. It will appear in your document head meta (for Google search results) and in your RSS feed's site description."
---
```

[See detailed documentation](/docs/settings/fields/textarea)

---

## Number
TK: image

A stepped number input. Displayed for *Front Matter value*s that are integers. For example, page weight.

```yaml
---
weight: 1
---
```

[See detailed documentation](/docs/settings/fields/number)

---

## Toggle
TK: image

True or false toggle. Displayed for *Front Matter value*s that are booleans. For example, a feature toggle.

```yaml
---
show_feature: true
---
```

[See detailed documentation](/docs/settings/fields/toggle)

---

## Select
TK: image

Multiple options displayed in a dropdown. Can be used for *Front Matter value*s that are strings, but should be restricted to a set of options. Options can be sourced from existing content, data files, or manually provided. For example, a page's author.

```yaml
---
author: "scott-gallant"
---
```

[See detailed documentation](/docs/settings/fields/select)

---

## Datetime
TK: image

Date and time picker. Used for *Front Matter value*s that are valid date strings. Can be restricted to only date or time values. For example, page created date or page publish date.

```yaml
---
date: 2017-12-31T12:00:00+00:00
publish_date: 2018-01-07T12:00:00+00:00
---
```

[See detailed documentation](/docs/settings/fields/datetime)

---

## Tags Field
TK: image

A list of options displayed as tags. Used for *Front Matter value*s that are an array of strings. For example, page tags.

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
TK: image

A list of options displayed in a list. Used for *Front Matter value*s that are an array of strings. Can be configured to restrict options in a dropdown. For example, page authors or related pages.

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
TK: image

File upload input that adds uploads to the *[Media Library](/docs/editing/media-library/)*. Used for *Front Matter value*s that are a string ending with a file extension. For example, a featured image.

```yaml
---
banner: "/uploads/2017/12/31/banner_image.jpg"
extra_style: "/css/extra_styles.css"
extra_script: "/js/extra_script.js"
---
```

[See detailed documentation](/docs/settings/fields/file)

---

## Multi-File Upload
TK: image

Gallery of media files. Used for *Front Matter value*s that are an array of strings ending with a file extension. For example, an image carousel.

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

[See detailed documentation](/docs/settings/fields/multi-file)

---

## Field Group
TK: image

Group of *Front Matter Fields*. Used for *Front Matter value*s that are an object. For example, your site's footer information.

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
TK: image

List of Field Groups. Used for *Front Matter value*s that are an array of like-objects. For example, a list of authors.

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