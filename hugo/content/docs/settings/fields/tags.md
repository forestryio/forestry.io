---
aliases:
- "/docs/front-matter-fields/tags-field/"
title: Tags Field
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000

---
## Options

![](/uploads/2018/01/tags-options.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.

## Field UI

![](/uploads/2018/01/tags-preview.png)

## Templating

You can access this field in your templates using the field’s `name`:

#### Hugo

    <p>{{ delimit .Params.tags ", " }}</p>

{{% tip %}}
Easily display a comma delimited string using the `delimit` filter
{{% /tip %}}

    <h2>Tags:</h2>
    <ul>
    {{ range .Params.tags }}
      <li>{{ . }}</li>
    {{ end }}
    </ul> 

#### Jekyll

    <p>{{ page.tags | array_to_sentence_string }}</p>

{{% tip %}}
Easily display a comma delimited string using the `array_to_sentence_string` filter
{{% /tip %}}

    <h2>Tags:</h2>
    <ul>
      {% for tag in page.tags %}
        <li>{{ tag }}</li>
      {% endfor %}
    </ul>

#### VuePress

    <template>
      <p>{{ $page.frontmatter.categories.join(', ') }}</p>
    </template>

{{% tip %}}  
Easily display a comma delimited string using the `v-for` and `v-text` attributes.  
{{% /tip %}} 

    <template>
      <h2>Tags:</h2>
      <ul>
    	<li v-for="category in $page.frontmatter.categories" 
        	v-text="category" />
      </ul>
    </template

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

    type: tag_list
    name: [String]
    label: [String]
    description: [String]
    hidden: [true|false]
    default: 
        - [String]

### Example

    type: tag_list
    name: tags
    label: Tags
    description: Provide tags for this post
    hidden: [false]
    default:
        - hugo
        - jeykll