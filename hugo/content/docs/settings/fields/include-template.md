---
title: Include Template
publishdate: 2018-04-23 00:00:00 +0000
expirydate: 2030-01-01 00:00:00 +0000
date: 2018-04-23 00:00:00 +0000
---

The **Include Template** field type allows you include fields that you have already specified in another front matter template.

This can be useful for organizing your front matter and consolidating frequently-used fields: for example, including an `seo` front matter template that contains description, keyword, and thumbnail data.

## Options

- **General**
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

## Example

1. Create a new front matter template, let's name it "seo" and add the needed fileds, for instance: title, description, image, permalink, etc.

![Define an SEO front matter template](/uploads/2020/02/front-matter-template.png "Define an SEO front matter template")

2. In another front matter template, insert an include field and choose the "seo" template.

![Select the include template in the field settings](/uploads/2020/02/included-template.png "Select the include template in the field settings")

3. Now your main front matter template contains the included template.

![A front matter template with an include template](/uploads/2020/02/front-matter-template-with-include.png "A front matter template with an include template")

 - You can pickup a field from an include template as the display field in the main front matter template settings.

 - The user interface and file output are flat, your front matter looks exactly the same as if you don't use an include template.
