---
title: Config Files
weight: 4
publishdate: 2020-06-11 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-07-25 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Settings & Configuration
    weight: 5

---
Forestry stores the settings and configuration of the CMS for each site in a `.forestry/` folder in your site’s source code. This allows developers to create default configurations that can be shared between multiple sites, and to deliver source code with Forestry CMS pre-configured.

When importing a new site, a `.forestry/` folder will be added to your site’s source. Any changes made to your CMS’ configuration will be committed to your site’s source in this folder.

## Site Settings

Your site settings are configured from `.forestry/settings.yml`.

The following is an example of `settings.yml` for a Hugo site.

    ---
    upload_path: "/static/uploads/:year:/:month:/:day:"
    frontmatter_file_url_template: "/uploads/:year:/:month:/:day:"
    body_file_url_template: "/uploads/:year:/:month:/:day:"
    new_page_extension: md
    auto_deploy: false
    admin_path: "/admin"
    webhook_url: http://example.com/webhook
    sections:

    - path: content
      label: Pages
      create: all
      # Imported pages without a FMT assigned
      # will automatically use "pages"

    - path: content/posts
      label: Posts
      create: all
      # use the "templates" parameter to control
      # which templates can be used for new content
      # in this section. First listed template
      # is the default option.
      templates:
      - posts

    # items in content/secrets is hidden from menu
    - path: content/secrets
      hidden: true

    # items in content/products can be edited but not created
    - path: content/products
      label: Products
      create: none
    version: 0.38.1
    ---

### Options

<h4 id="site-settings-admin-path">Admin Path <code>admin_path: string</code></h4>

Allows you to configure the path where the Remote Admin will be deployed.

---

<h4 id="site-settings-upload-path">Upload Path <code>upload_path: string</code></h4>

Allows you to configure the path where media assets are uploaded

---

<h4 id="site-settings-front-matter-file-url">Front Matter File URL Template <code>frontmatter_file_url_template: string</code></h4>

Allows you to configure the path that is set when adding images to Front Matter Fields. _Note: this value is set at upload time._

---

<h4 id="site-settings-body-file-url">Body File URL Template <code>body_file_url_template: string</code></h4>

Allows you to configure the path that is used when adding images to the body of a page. _Note: this value is set at upload time._

---

<h4 id="site-settings-new-page-extension">New Page Extension <code>new_page_extension: md|html</code></h4>

Allows you to configure whether new pages are created as `.md` or `.html` files.

---

<h4 id="site-settings-auto-deploy">Auto Deploy <code>auto_deploy: boolean</code></h4>

Allows you to configure if publishing should be triggered when a commit is made to the source repository.

---

<h4 id="site-settings-webhook-url">Webhook URL <code>webhook_url: string</code></h4>

Allows you to provide a [webhook](/docs/hosting/webhooks/) to be triggered when events occur in Forestry.

---

<h4 id="site-settings-version">Version <em style="font-weight: normal;">(Hugo-only)</em> <code>version: string</code></h4>

This allows you to configure the version of Hugo your site uses. This is limited to the latest versions of Hugo [supported by Forestry](https://forestry.io/docs/faq/what-versions-of-hugo-do-you-support/).

---

<h4 id="site-settings-content-sections">Content Sections <code>sections: Array</code></h4>

This setting allows you to tell Forestry which parts of your site contain editable content files.

[View the full Content Section documentation](/docs/settings/content-sections)

{{% markdownpartial "docs/section-config-attribute-table.md" %}}

## Front Matter Templates

The configuration files for Front Matter Templates is found in `.forestry/front_matter/templates/`. Each Front Matter Template is stored as a separate file.

The following is an example of a front matter template configuration file.

    homepage.yml
    ---
    pages:
    - index.md
    hide_body: false
    fields:
    - name: title
      default: ''
      label: Title
      hidden: false
      type: text
    - name: publishDate
      default: ''
      label: Date
      hidden: false
      type: datetime
    - name: Categories
      default: []
      label: Categories
      hidden: false
      type: list
    ---

### Options

<h4 id="fmt-settings-pages">Pages <code>pages: array</code></h4>

Provide an array of relative page paths that you want the front matter template to apply to.

For Jekyll, provide the relative path from the project root, e.g, `_posts/2017-01-01-example.md`.

For Hugo, provide the relative path from your content directory, e.g, `posts/2017-01-01-example.md`.

_Note: if a page is defined in multiple Front Matter Templates, the last Front Matter Template in alphanumerically order will be applied._

---

<h4 id="fmt-settings-hide-body">Hide Body <code>hide_body: boolean</code></h4>

Toggle the display of the body editor on or off for this Front Matter Template.

---

<h4 id="fmt-settings-fields">Fields <code>fields: array</code></h4>

The array of fields in this front matter template. They follow a standard format:

* `type` `string` The field type.
* `name` `string` The name or key of the field
* `label` `string` The label displayed in the CMS interface
* `description` `string` Help text that appears above the field
* `hidden` `boolean` Toggle display of the field in the interface on or off
* `config` `object` Field-specific configuration options
* `fields` `array` An array of fields. For field groups and repeatable field groups only.

For a comprehensive overview of field configuration, see the [field type documentation](/docs/settings/fields).

### Removing Files

To prevent the accidental deletion of Front Matter Templates, Front Matter Templates **must** be removed using the interface in the CMS.

Any configuration files removed from the repo will remain in the CMS and be re-added to your site’s source on the next save or publish unless removed in Forestry.

### Renaming Files

Changing the name of a Front Matter Template in Forestry will rename the config file in the repository.

Changing the file name of a config file in your repository will not rename the Front Matter Template in Forestry. Instead, a new Front Matter Template will be created with the new name, and the original template will remain in Forestry.

### Adding New Files

New Front Matter Templates can be added to your repository, and will be added to the CMS upon import.

Front Matter Template config files have a strict naming convention:

* File names must be all lowercase
* File names must use dashes in place of spaces
* File names can not contain underscores or other special characters

E.g, `Example Template` becomes `example-template.yml`