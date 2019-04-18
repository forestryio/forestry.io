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
date: 2019-04-18 04:00:00 +0000
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

{{% pretty_screenshot img="/uploads/2019/04/create-fmt-from-page.png" %}}

To create an FMT from an an existing page, navigate to the page you wish to use as the basis for your FMT. Next, click the "..." button in the toolbar, then click _Create Template_.

{{% pretty_screenshot img="/uploads/2019/04/create-fmt-from-page-modal.png" %}}

In the modal that opens, enter a name for the template and click _Create Template_. This will create the new template and redirect you to the Front Matter Template editor.

{{% pretty_screenshot img="/uploads/2019/04/create-fmt-from-document.png" %}}

Alternatively, you can create a Front Matter Template from an existing page by navigating to the _Front Matter_ page and clicking _Add Template_. Then, select *Create based on existing document* from the modal that appears.

### Creating an FMT from Scratch

To create a Front Matter Template from scratch, navigate to the _Front Matter_ page, and click _Add Template_. From here, select *Create new blank template*.

{{% pretty_screenshot img="/uploads/2019/04/add-blank-fmt.png" %}}

Enter a name for your new FMT, and then select the layout you want to use.

- Select **Fields and big content area** if your pages will contain Front Matter combined with markdown content. This is what you'll want to use most of the time.
- Select **Fields** if your pages will be composed exclusively of Front Matter (such as if you are building a page using [Blocks](/docs/settings/fields/blocks/)) and you don't want a markdown editor for your pages.

Click **Create Template** to begin adding fields.

## Editing FMTs

To edit an FMT, navigate to the _Front Matter_ page in the CMS, and click the FMT you wish to edit from the list. This will take you to the editing screen, where you will see a list of all of the fields in the FMT.

### The Field Listing

{{% pretty_screenshot img="/uploads/2019/04/fmt-field-listing.png" caption="Field listing example" %}}

The field listing shows you all of the fields configured for the selected FMT. Click **Add Field** to add a new field to the FMT. New fields are placed at the end of the listing.

You can insert a new field at a different position in the field listing by placing the cursor in between two fields and clicking the **Add Field** button that appears. To reorder fields, click on the **drag handle** (see below) and drag the field to the desired position.

### Field Listing Legend
{{% pretty_screenshot img="/uploads/2019/04/fmt-field-card-annotated.png" caption="Breakdown of a field in the field listing" %}}

1. **Drag handle**. Click and drag this to reorder the field in the listing.
2. **Field Label**
3. **Visibility Indicator**. This icon appears if the field is configured to be hidden from the page editor.
4. **Field Type**
5. **Field Settings**. Click this to edit the settings for the field.
6. **Delete Field**

field card: drag handle, field label, hidden, type, settings, delete

### Adding and Editing Fields

{{% pretty_screenshot img="/uploads/2019/04/fmt-fields.png" caption="FMT Field Grid" %}}

After clicking the **Add Field** button, you will be presented with a grid of field options. For details on the different available fields, refer to the [field documentation](/docs/settings/fields/).

Once you've selected the field you want, click the **Add Field** button at the bottom of the modal to proceed to the field settings.

Once a field has been added to the field listing, click the gear icon to access the field settings if you want to change them.

### Field Settings

The **field settings** modal is how you will configure your front matter field. Field settings are broken out into multiple tabs. All fields have at least three tabs:

- **General** &mdash; Essential field information common to all field types.
  - _Label:_ the human-friendly label shown above the input field in the editor.
  - _Name:_ the key stored in your content's front matter. It is used to access this field in your templates.
  - _Description:_ (Optional) a human friendly description of what the field does and/or instructions for your editors.
  - _Hidden:_ When activated, this field will not be displayed when editing a document that uses this FMT.
- **Validation** &mdash; settings to enforce specific rules for data input with this field.
  - _Required:_ Whether or not the user **must** supply a value for this field.
- **Default** &mdash; supply a default value for this field.

{{% tip %}}
Field defaults are only applied when _creating new pages_ and aren't intended to be used as a fallback value for when no value is provided. For this, see [How do I set fallback/hidden values for Front Matter?](/docs/faqs/front-matter-fallbacks)
{{% /tip %}}

{{% tip %}}
Hidden fields can be used to set default values when creating new pages for fields that shouldn't be modified by an editor. Check out our post on [3 tips for mastering blocks](https://forestry.io/blog/3-tips-for-mastering-blocks/#add-default-values-to-hidden-text-fields-for-template-level-config) for some examples.
{{% /tip %}}

Some field types will have additional **validation** options, and additional tabs to configure different aspects of the field. Refer to the documentation for specific fields for more information.


## Template Settings

To access template-wide settings,  click the gear icon in the top right corner of the FMT editing screen.

From here, you can change the name of the FMT, switch the layout, delete the FMT, and set the **Display Field**.

### Display Field

After you've added some fields to your FMT, you can assign one field to act as the **Display Field**. This field is used when displaying the list of blocks created with a [Blocks](/docs/settings/fields/blocks) field type.

{{% pretty_screenshot img="/uploads/2018/08/block_labels.png" caption="Example of a block listing" %}}

{{% tip %}}
Accidentally removed a field from your FMT? Fear not! All changes to FMTs are committed to your Git repository, and can easily be reversed by a developer!
{{% /tip %}}

---

## Applying FMTs to Content

FMTs can be applied to individual [pages](/docs/editing#pages) or to [content types](/docs/editing#collections).

{{% tip %}}
FMTs follow a "no-modification" rule. When applying an FMT to content, Forestry will not modify any existing values, and it will not remove values that are not part of the FMT.
{{% /tip %}}

### Applying to Pages

{{% pretty_screenshot img="/uploads/2019/04/change-fmt.png" %}}


To apply an FMT to an individual page, navigate to the page you want to apply the FMT to and click the _Settings_ button, and then select _Change Template._

{{% pretty_screenshot img="/uploads/2019/04/change-fmt-modal.png" %}}

In the modal that opens, select the FMT you wish to apply to the page from the dropdown, and then click _Change_.

### Applying to Content Types

FMTs can be applied to all pages in a content type using the `settings.yml` config file. See the [Config Files](/docs/settings/config-files#site-settings) documentation for more information.

{{% tip %}}
Applying an FMT to a content type will apply the FMT to any page _without an FMT already applied to it_. It will also make that FMT the default option when creating new pages.
{{% /tip %}}