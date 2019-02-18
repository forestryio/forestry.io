---
aliases:
- "/docs/front-matter-fields/date-field/"
title: Date Field
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400

---
A date and time picker.

## Options

![](/uploads/2018/05/date-field-ui.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* _Date Format_ – how the date should be displayed in the editor.
* _Time Format_ – how the time should be displayed in the editor.
* _Display UTC_ – activating this option will display the date in UTC regardless of user's locale settings.
* _Required_ – prevent changes from being saved if this field is empty.

## Field UI

![](/uploads/2018/01/datetime-preview.png)

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
