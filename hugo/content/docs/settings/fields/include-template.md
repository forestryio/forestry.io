---
title: Include Template
publishdate: 2018-04-23 00:00:00 +0000
expirydate: 2030-01-01 00:00:00 +0000
date: 2018-04-23 00:00:00 +0000
---

The **Include Template** field type allows you include fields that you have already specified in another front matter template.

This can be useful for organizing your front matter and consolidating frequently-used fields: for example, including an `seo` front matter template that contains description, keyword, and thumbnail data.

## Options
![Include template interface](/uploads/2018/04/include-field-ui.png)

- *Label* &mdash; the human-friendly label shown above the input field in the editor
- *Name* &mdash; *this field is not used for this field type*
- *Description* &mdash; a human-friendly description of what the field does and/or instructions for your editors
- *Hidden* &mdash; hides the filed in the editor; but allows developers to set default values or maintain the field for legacy purposes.
- *Template* &mdash; the front matter template whose fields you wish to include. 

{{% warning %}}
**Be careful not to include a template that would eventually include the current template.**
{{% /warning %}}

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```yaml
type: include
template: seo   # The slug of the included front matter template
label: SEO
name: seo
```
