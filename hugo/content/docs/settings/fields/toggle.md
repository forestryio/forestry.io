---
aliases:
- "/docs/front-matter-fields/toggle-field/"
title: Toggle Field
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000

---
A boolean toggle.

## Options

![](/uploads/2018/01/toggle-options.png)

* _Label_ – the human-friendly label shown above the input field in the editor.
* _Name_ – the key stored in your content’s front matter, used to access it in your templates.
* _Description_ – a human friendly description of what the field does and/or instructions for your editors.
* _Hidden_ – hides the field in the editor, but allows developers to set default values or maintain the field for legacy purposes.

## Field UI

![](/uploads/2018/01/toggle-preview.png)

## Templating

You can access this field in your templates using the field’s `name`:

#### Hugo

    {{ if .Params.is_featured }}
        // Do something special!
    {{ end }}

#### Jekyll

    {{ if page.is_featured }}
        // Do something special!
    {{ end }}

#### VuePress

    <div v-if="$page.frontmatter.is_featured">
        // Do something special!
    </div>

Use a toggle to filter pages in a loop:

### Hugo

    {{ range where .Data.Pages ".Params.is_featured" true }}
        <h2>{{ .Title }}</h2>
        <p>{{ .Description }}</p>
    {{ end }}

### Jekyll

    {% for post in site.posts | where:"is_featured", "true" %}
        <h2>{{ page.title }}</h2>
        <p>{{ page.description }}</p>
    {% endif %}

### VuePress

    <template>
      <div class="featured-posts">
        <div v-for="post in featuredPosts" class="featured-post">
          <h2>{{ post.frontmatter.title }}</h2>
          <p>{{ post.frontmatter.description }}</p>
        </div>
      </div>
    </template>
    <script>
       export default {
        computed: {
          featuredPosts() {
            return this.$site.pages
              .filter(page => page.path.startsWith("/posts/")
              .filter(page => page.frontmatter.is_featured)
          }
        }
      }
    </script>

## Config Files

You can configure this field in _Front Matter Template_ [Config Files](/docs/settings/config-files/) as follows:

    type: boolean
    name: [String]
    label: [String]
    description: [String]
    default: [true|false]
    hidden: [true|false]

### Example

    type: boolean
    name: is_featured
    label: Is Featured?
    description: Mark this page as featured
    default: true
    hidden: false