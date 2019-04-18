---
aliases:
- "/docs/front-matter-fields/date-field/"
title: Date Field
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400

---

![](/uploads/2018/01/datetime-preview.png)

A date and time picker.

## Options

- **General**
  - _Label_ &mdash; the human-friendly label shown above the input field in the editor.
  - _Name_ &mdash; the key stored in your content’s front matter, used to access it in your templates.
  - _Description_ &mdash; a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden_ &mdash; hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
- **Format**
  - _Date Format_ &mdash; how the date should be displayed in the editor.
  - _Time Format_ &mdash; how the time should be displayed in the editor.
  - _Display UTC_ &mdash; activating this option will display the date in UTC regardless of user's locale settings.
- **Validation**
  - _Required_ &mdash; prevent changes from being saved if this field is empty.
- **Default** &mdash; supply a default datetime.
  - _Use 'Now' As Default_ &mdash; Apply the current date and time as the value for new documents.

## Templating

If you have a text field in your template, you can access it in your templates using the field’s `name`:

### Hugo
```
<time datetime="{{ .Date }}">{{ .Date.Format "January 2, 2006" }}</time>
```

### Jekyll
```
<time datetime="{{ page.date }}">{{ page.date | date: "%B, %-d, %Y" }}</time>
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

    type: datetime
    name: [String]
    label: [String]
    description: [String] 
    default: [String]
    hidden: [true|false]
    config:
      date_format: [String]
      time_format: [String]
      display_utc: [true|false]

### Example
    type: datetime
    name: date
    label: Date
    description: The creation date for this page 
    hidden: false
    config:
      date_format: "YYYY/MM/DD"
      time_format: "HH:MM:SS"
      display_utc: false

{{% tip %}}
The `date_format` and `time_format` fields can be configured using [Moment.js tokens](https://momentjs.com/docs/#year-month-and-day-tokens).
{{% /tip %}}
