---
aliases:
- "/docs/front-matter-templates/"
- "/docs/site-configuration/front-matter-templates/"
- "/docs/managing-content/default-fields/"
- "/docs/setting-up-a-site/front-matter-templates/"
title: Front Matter Templates
weight: 2
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Settings & Configuration
    weight: 2

---
{{% tip "Disclaimer" %}}
This guide assumes you already have an understanding of Front Matter and how it works with Forestry. If this isn't the case, you can read up on it in the [Front Matter doc](/docs/editing/front-matter).
{{% /tip %}}

## What are Front Matter Templates?

_Front Matter Templates_ (FMTs) enable developers to fully customize the interface of the [Markdown](/docs/editing/markdown-editor) and HTML editors. You can think of them as the content model for your [front matter](/docs/editing/front-matter).

FMTs work by allowing developers to define which _Front Matter Fields_ are available to editors when editing [pages](/docs/editing#pages) or [content types](/docs/editing#collections).

## Managing FMTs

FMTs can be creating using the CMS, or by creating [Config Files](/docs/settings/config-files).

{{% warning %}}
FMTs can only be accessed in the CMS by team members with the _Developer_ or _Site Owner_ role.
{{% /warning %}}

## Creating an FMT

FMTs can be created from scratch, or can be created using the fields from an existing page that doesn't have an FMT applied to it.

### Creating an FMT from Existing Pages

To create an FMT from an an existing page, navigate to the page you wish to use as the basis for your FMT.

![](/uploads/2018/01/14-settings-button.png)Next, click the "..." button in the toolbar, then click _Create Template_.

![](/uploads/2018/01/54.png)

In the modal that opens, click _Create Template_. This will create the new template and redirect you to the Front Matter Template editor.

{{% tip %}}
When creating an FMT from an existing page, the FMT will be named after the page. Make sure you rename it if that's not the name you desire!
{{% /tip %}}

### Creating an FMT from Scratch

To create a Front Matter Template from scratch, navigate to the _Front Matter_ page, and click _Add Template_.

![](/uploads/2018/01/55-add-template.png)

You will now be redirected to the FMT editor. Enter a name for your new FMT, and then click _Save Changes_.

## Editing FMTs

To edit an FMT, navigate to the _Front Matter_ page in the CMS, and click the FMT you wish to edit from the list.

![](/uploads/2018/01/35.png)On the left, you'll see a preview of how your FMT will look in the editors, and on the right you'll see the list of available field types.

### Partial Templates
Turn on the **Is Partial** toggle to designate this FMT as a *Partial Front Matter Template*. Partial FMTs are used with the [Blocks](/docs/settings/fields/blocks) field type.

### Adding a Field

To add a field, click the _Add_ button under the field type you'd like to add. This will add the field to the bottom of your FMT.

The field editor will open for the new field, and prompt you to configure the field. All fields share some common options:

* _Label:_ the human-friendly label shown above the input field in the editor.
* _Name:_ the key stored in your content's front matter. It is used to access this field in your templates.
* _Description:_ (Optional) a human friendly description of what the field does and/or instructions for your editors.

See the [field documentation](/docs/settings/fields/) for a list of all options available for each field.

### Editing a Field

To edit a field already added to your FMT, click the cog icon to the right of the field in the left pane.

### Reordering Fields

Fields can be reordered by clicking the up and down arrows to the left of a field.

### Removing a Field

To remove a field from your FMT, click the trash icon to the right of the field in the left pane.

{{% tip %}}
Accidentally removed a field from your FMT? Fear not! All changes to FMTs are committed to your Git repository, and can easily be reversed by a developer!
{{% /tip %}}

### Field Defaults

Default values for FMTs can be added. These defaults are applied when creating a new page in Forestry.

{{% tip %}}
Field defaults are only applied when _creating new pages_ and aren't intended to be used as a fallback value for when no value is provided. For this, see [How do I set fallback/hidden values for Front Matter?](/docs/faqs/front-matter-fallbacks)
{{% /tip %}}

### Hidden Fields

Any field in an FMT can be hidden. This hides the field in the editors, but allows developers to set default values or maintain the field for legacy purposes.

{{% tip %}}
This can be used to set default values when creating new pages for fields that shouldn't be modified by an editor. Check out our post on [3 tips for mastering blocks](https://forestry.io/blog/3-tips-for-mastering-blocks/#add-default-values-to-hidden-text-fields-for-template-level-config) for some examples.
{{% /tip %}}

## Applying FMTs to Content

FMTs can be applied to individual [pages](/docs/editing#pages), or to [content types](/docs/editing#collections).

{{% tip %}}
FMTs follow a "no-modification" rule. When applying an FMT to content, Forestry will not modify any existing values, and it will not remove values that are not part of the FMT.
{{% /tip %}}

### Applying to Pages

![](/uploads/2018/01/14-settings-button.png)To apply an FMT to an individual page, navigate to the page you want to apply the FMT to and click the _Settings_ button, and then select _Change Template._

![](/uploads/2018/01/38.png)In the modal that opens, select the FMT you wish to apply to the page from the dropdown, and then click _close_.

### Applying to Content Types

FMTs can be applied to all pages in a content type using the `settings.yml` config file. See the [Config Files](/docs/settings/config-files#site-settings) documentation for more information.

{{% tip %}}
Applying an FMT to a content type will apply the FMT to any page _without an FMT already applied to it_. It will also make that FMT the default option when creating new pages.
{{% /tip %}}