---
aliases:
- "/docs/front-matter-fields/textarea-field/"
title: Textarea Field
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000

---
## Options

![](/uploads/2018/01/textarea-options.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* _Required_ – prevent changes from being saved if this field is empty.
* _WYSIWYG_ – toggle on rich-text editing. [See WYSIWYG mode](/docs/settings/fields/textarea/#WYSIWYG)
* _File Format_ – determines exported format. `Markdown` for Markdown, `HTML` for HTML, and `Inline HTML` for only inline HTML elements.

## Field UI

![](/uploads/2018/01/textarea-preview.png)

## Templating

You can access this field in your templates using the field’s `name`:

### Hugo

    <!-- Plain Text or HTML -->
    <p>{{ .Params.description }}</p> 
    
    <!-- Markdown -->
    {{ .Params.description | markdownify }}

### Jekyll

    <!-- Plain Text or HTML -->
    <p>{{ page.description }}</p> 
    
    <!-- Markdown -->
    {{ page.description | markdownify }}

### VuePress

    <template>
      <!--- Description is Plain Text -->
      <div>
        <p v-text="$page.frontmatter.description" />
      </div>
      
      <!--- Description Contains HTML -->
      <div v-html="$page.frontmatter.description" />
    </template>

{{% tip "Storing Markdown VuePress Front Matter " %}} VuePress does not have a built-in `markdownify` like function in Hugo or Jekyll, but you could always write your own [filter](https://vuejs.org/v2/guide/filters.html "Vue Filters")! {{% /tip %}}

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

    type: textarea
    name: [String]
    label: [String]
    description: [String]
    hidden: [true|false]
    default: [String]
    config:
      wysiwyg: [true|false]

## Example

    type: textarea
    name: description
    label: Description
    description: Short description of the page
    hidden: false
    default: ""
    config:
      wysiwyg: false

## WYSIWYG

Enables a rich text editor.

### File Format

This field appears when _WYSIWYG_ is enabled. Select which format should be output to your front matter:

* **Markdown**
* **HTML**
* **Inline HTML** (only inline elements allowed)

### Example

    type: textarea
    name: description
    label: Description
    description: Short description of the page
    hidden: false
    default: ""
    config:
      wysiwyg: true
      schema:
        format: markdown

## Field UI

![](/uploads/2018/01/textarea-wysiwyg-preview.png)

## Templating

If you have a text field in your template, you can access it in your templates using the field’s `name`:

### Hugo

    <p>{{ .Params.description }}</p> 

### Jekyll

    <p>{{ page.description }}</p> 

{{% tip %}}
Use the `markdownify` filters in Hugo or Jekyll to automatically format your HTML with paragraph tags and other formatting.
{{% /tip %}}

### Hugo

    {{ .Params.description | markdownify }}

### Jekyll

    {{ page.description | markdownify }}

## Config Files

### Example

    type: textarea
    name: description
    label: Description
    description: Short description of the page
    hidden: false
    default: ""
    config:
      wysiwyg: true
