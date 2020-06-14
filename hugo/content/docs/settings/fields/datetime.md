---
aliases:
- "/docs/front-matter-fields/date-field/"
title: Date Field
publishdate: 2020-06-11T00:00:00-04:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: 2019-05-06T00:00:00-03:00

---
![](/uploads/2018/01/datetime-preview.png)

A date and time picker.

## Options

* **General**
  * _Label_ — the human-friendly label shown above the input field in the editor.
  * _Name_ — the key stored in your content’s front matter, used to access it in your templates.
  * _Description_ — a human friendly description of what the field does and/or instructions for your editors.
  * _Hidden_ — hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* **Format**
  * _Date Format_ — how the date should be displayed in the editor. To only show the time picker, leave this field blank.
  * _Time Format_ — how the time should be displayed in the editor.  To only show the date picker, leave this field blank.
    {{% warning %}} 24-hour format in the time_format display currently causes unexpected behaviour in the date picker. Hours can only be set from 00 to 12.{{% /warning %}}
  * _Display UTC_ — activating this option will display the date in UTC regardless of user's locale settings.
  * _Export Format_ — how the date/time should be exported to the repo.
* **Validation**
  * _Required_ — prevent changes from being saved if this field is empty.
* **Default** — supply a default datetime.
  * _Use 'Now' As Default_ — Apply the current date and time as the value for new documents.

## Templating

If you have a text field in your template, you can access it in your templates using the field’s `name`:

### Hugo

```go-html-template
<time datetime="{{ .Date }}">{{ .Date.Format "January 2, 2006" }}</time>
```

### Jekyll

```twig
<time datetime="{{ page.date }}">{{ page.date | date: "%B, %-d, %Y" }}</time>
```

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
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
  export_format: [String]
```

{{% tip %}}
The `date_format`, `export_format`, and `time_format` fields can be configured using [Moment.js display format](https://momentjs.com/docs/#/displaying/format/).
{{% /tip %}}

### Example

```yaml
type: datetime
name: date
label: Date
description: The creation date for this page
hidden: false
config:
  date_format: MM/DD/YYYY
  time_format: h:mm A Z
  display_utc: false
  export_format: YYYY-MM-DDThh:mm:ssZ
```
