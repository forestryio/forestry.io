---
aliases:
- "/docs/front-matter-fields/select-field/"
- "/docs/front-matter-fields/select-field/pages/"
- "/docs/front-matter-fields/select-field/data/"
title: Select Field
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400

---
## Options
![](/uploads/2018/01/select-custom-options.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.
* _Required_ – prevent changes from being saved if this field is empty.
* _Source Type_  – where to source options from. Can be [Custom](/docs/settings/fields/select#custom-source), [Pages](/docs/settings/fields/select#pages-source), or [Document Fields](/docs/settings/fields/select#data-source).

## Field UI
![](/uploads/2018/01/select-preview.png)

## Custom Source
Allows developers to provide options in the Front Matter Template.

## Templating
You can access this field in your templates using the field’s `name`:

#### Hugo
```
<p>The page author is {{ .Params.author }}</p>
```

#### Jekyll
```
<p>The page author is {{ page.author }}</p>
```

## Config Files
You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```
type: select
name: [String]
label: [String]
description: [String] 
hidden: [true|false]
default: [String]
config:
    source:
      type: custom
    options: [Array]
```

### Example
```
type: select
name: category
label: Category
description: Select a category for this page
hidden: false
config:
    source:
      type: custom
    options:
        - "Scott Gallant"
        - "Jordan Patterson"
```

## Pages Source
Allows developers to source options from all pages, or a specific collection.

The field will store the relative path to the source file in your front matter.

## Templating
You can query for the page in your templates using the field’s `name`:

#### Hugo
```
{{ with .Site.GetPages "page" .Params.related_page }}
  <h2>{{ .Title }}</h2>
  <p>{{ .Summary }}</p>
{{ end }}
```

#### Jekyll
```
{% for related_page in site.pages | where:"path", page.related_page %}
  <h2>{{ related_page.title }}</h2>
  <p>{{ related_page.excerpt }}</p>
{% endfor %}
```

## Config Files
You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```
type: select
name: [String]
label: [String]
description: [String] 
hidden: [true|false]
default: [String]
config:
    source:
      type: custom
      section: [String]
```

### Example
```
type: select
name: related_page
label: Related Page
description: Select a related page
hidden: false
config:
    source:
      type: pages
      section: pages
```

{{% tip %}}
Omit the `config.section` option to allow selection from all content in the site.
{{% /tip %}}

<h2 id="data-source">Document Fields</h2>

Allows developers to source options from a data file or page front matter. The data structure must be either an array of strings, or a single object where both keys and values are strings. More complex data types, such as an array of objects, are not supported.

When an object is used, the field will store the key from the data file in your front matter.

### Data Files as Source

The **Data Files** source type is deprecated and only available for Jekyll and Hugo projects that have not opted in to the section-based data file handling. All other projects should use the **Document Fields** option for this behavior, and existing projects should plan to upgrade.


## Templating
You can query for the value in the data file in your templates using the field's `name`:

#### Hugo
In `data/authors.yml`
```
---
authors:
  John:
    name = "John Doe"
    image = "/uploads/2017/01/01/john.jpg"
---
```

```
{{ $author := index .Site.Data.authors .Params.author }}
{{ if $author }}
  <img src="{{ $author.image }}">
  <p>{{ $author.name }}</p>
{{ end }}
```

#### Jekyll
In `_data/authors.yml`:
```
---
authors:
  John:
    name = "John Doe"
    image = "/uploads/2017/01/01/john.jpg"
---
```

```
{% assign author = site.data.authors[page.author] %}
{% if author %}
  <img src="{{ author.image }}">
  <p>{{ author.name }}</p>
{% endif %}
```

## Config Files
You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

```
type: select
name: [String]
label: [String]
description: [String] 
hidden: [true|false]
default: [String]
config:
    source:
      type: documents
      file: [String]
      path: [String]
```

### Example
```
type: select
name: author
label: Author
description: Select the page's author
hidden: false
config:
    source:
      type: datafiles
      file: characters-toml
      path: 
```