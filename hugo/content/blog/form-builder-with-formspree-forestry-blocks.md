---
title: Creating a Form Builder With Formspree and Forestry Blocks
description: When I previously showed you how to integrate Snipcart with your Forestry
  site, I used Blocks to configure custom fields for Snipcart products. Today, I'm
  going to take that idea to a whole new level by using Blocks to create a full-fledged
  form builder that your website editors can use to create web forms.
date: 2018-07-20 01:00:14 -1100
authors:
- DJ Walker
publishdate: 2018-07-20 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/07/pencil-and-envelopes-neon.jpg"
categories:
- Frontend-Friday
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
When we announced the Blocks feature, we touted it as a great way to create a page builder for your site. While this use case drove the development of Blocks, we knew there would be other interesting things that could be done with it.

When I previously showed you [how to integrate Snipcart with your Forestry site](https://forestry.io/blog/snipcart-brings-ecommerce-static-site/), I used Blocks to [configure custom fields for Snipcart products](https://forestry.io/blog/snipcart-brings-ecommerce-static-site/#enhancement-adding-custom-product-options). Today, I'm going to take that idea to a whole new level by using Blocks to create a full-fledged form builder that your website editors can use to create web forms.

For this project, I decided to use Formspree because it is easy to integrate with custom forms, and there is no account setup required. We recently published a [rundown of different form options](https://forestry.io/blog/5-ways-to-handle-forms-on-your-static-site/) for static sites. If you prefer to use one of the other options from that article instead, this solution would be easy to port to FormKeep, Netlify, and FormPlug as well.

<div id="import-form-builder-button" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/dwalkr/forestry-form-builder.git"
engineName="hugo"
engineVersion="0.43"
heading="Start Building Forms Right Now"
linkText="Import the Form Builder to Forestry" %}}
</div>

## Applying a Modular Content Strategy to Forms

Using Forestry's Blocks is all about **modular content strategy**: we divide our content up into diverse, self-contained components (the **Blocks**) and allow them to be arranged in any order and quantity.

Applying this strategy to a page builder is pretty straight-forward. The kinds of pages we want to make with this feature have a solid vertical rhythm to them. Take [our homepage](https://forestry.io), for example: it's composed of independent sections that flow from one to the next.

We can create basic forms that also have this vertical rhythm. To make a form builder, each of our **blocks** will represent a single field in the form. Content editors can then assemble these fields in whatever combination they want to create a form.

## Setting Up the Forestry Admin

{{% tip %}}
If you want to skip this step, the Front Matter Templates are already configured in [the demo project](https://github.com/dwalkr/forestry-form-builder). You can fork the project, or just grab the front matter templates in `.forestry/front-matter/templates`.
{{% /tip %}}

We're going to make new **Front Matter Templates** to set up our form builder interface. Our project will support two types of forms:

1. A simple form that is just a list of fields
2. A form whose fields are nested inside of sections, to help keep large forms organized

When setting up complex Front Matter Templates, I recommend starting with the smallest pieces and working up to the largest. Let's start by configuring the front matter templates for each field.

### Form Field Essentials

All of our fields will contain the following:

* A hidden field with the name `type`. We will enter the field type here as the default value. Since this field is hidden, users will not be able to change this value in the Forestry admin. This will be used by our code to determine how to display the field.
* A text field with the name `name`. This will be used to populate the HTML `name` attribute of our form field and should be required.
* A text field with the name `label`. This will contain text to display in the `label` tag above the field in our form HTML.
* A text field with the name `description`. This will be an optional field to contain additional information that will be displayed below the field in the form HTML.

{{% tip "This is getting pretty meta, isn't it?" %}}
**Type, Name, Label,** and **Description** are all fields that Forestry uses to configure Front Matter Templates. It's no coincidence that we're re-creating these same fields to configure the front matter itself.
<br /><br />
If you're confused, consider this: you're creating Front Matter Templates to provide **an interface for your editors**. Your editors will use the interface you created to build a form, which provides **an interface for the end users** of the website.
{{% /tip %}}

### Creating The Fields

![](/uploads/2018/07/is_partial.png)

We will be creating **five** Front Matter Templates using these fields. For each one, be sure to turn on the **Is Partial** setting so we can use these as Blocks. Create the following templates, being sure to include the essential fields defined above (`type`, `name`, `label`, and `description`) and set the default value for the `type` field to the type of each:

* `text`
* `textarea`
* `select`
* `radio`
* `checkbox`

The `text` and `textarea` fields are done at this point. For the `select` and `radio` fields, add a **Sortable List** field named `options`.

For the `checkbox` field, add another text field named `checkbox_text`. In addition to a label, we want to give our editors the option of displaying text next to the checkbox.

### The _Form Fields_ Partial

At this point, we could create a Front Matter Template for our form page, add a **Blocks** field to it, and be done. However, since I want to create two different types of forms, we are going to place this field in its own partial template. We can then include this partial in both of these forms, so we don't have to duplicate our work.

Create a new Front Matter Template and turn on the **Is Partial** toggle. Call this template _Form Fields_ and add a single **Blocks** field to it. Name the field `fields`, and under **Templates**, select all of the form field templates we just created.

### Adding the Form Builder

Now that the Blocks field is set up, the rest is easy! We need to create two Front Matter Templates to be used with our content.

Create a new Front Matter Template called **Simple Form**. Do _not_ turn on the **Is Partial** toggle, because this will be a complete template that can be selected when creating a new content item.

Add a text field named `title` so we can continue to modify the page title after we apply this template.

Then, add a **Field Group** named `form`. We're adding a Field Group here because we want to namespace all of our form configuration inside of a key named `form`. Inside of this field group, we're going to add four fields:

* A text field named `type` that is hidden and has a default value of `simple`. We will use this in our layout code to differentiate this form from the other form type we will be creating.
* A text field named `recipient`. This field will allow the content editor to specify the email address that should receive submissions.
* A text field named `submit_text`, which will give editors the option of changing the text on the form's submit button.
* Finally, we will use the **Include Template** field to include the **Form Fields** Front Matter Partial. We can name this `fields`, though the name isn't important for included FMTs.

Once these fields are added, save this Front Matter Template. The basic form builder is done.

### The "Large" Form Builder

Creating the form builder for the "large form" option will be very similar. As mentioned, for this form, fields will be nested inside of labeled sections. This will come in handy if we have a form with a large number of fields, to help keep things organized for the user.

Create a new Front Matter Template and name it **Large Form**. As before, add a `title` field.

Once again, add a **Field Group** named `form` to namespace our form values. Inside this Field Group, add the `recipient`, `submit_text`, and `type` fields like before. This time, add the default value of `long` to the `type` field.

Instead of adding the **Form Fields** template here, we are instead going to nest it inside of a **Repeatable Field Group** and name it `sections`. Our "long" form template will iterate over sections, and then within each section iterate over its fields.

Within the **Section** field group, add a text field named `title`. This field will contain the heading that displays at the top of the section.

Finally, inside of the **Section** field group, we will include the **Form Fields** Front Matter Partial the same way we did for the Simple Form template.

Save this template, and your UI is done! You have successfully configured Forestry to support two different kinds of forms. Now, when your editors add a new content item, they will have the option of creating a **Simple form** or a **Large form** page. They can edit the content above the form using the markdown editor, and build the form via the front matter interface.

## The Code

Our sample project is a bare-bones Hugo site using [Bulma](https://bulma.io/) to quickly create nice-looking forms. We've tacked the form-generation code onto the end of the `single.html` template:

    {{- with .Params.Form -}}
        {{ if eq .type "long"}}
            {{ partial "form-long" (dict "Form" . "Site" $) }}
        {{ else }}
            {{ partial "form-simple" (dict "Form" . "Site" $) }}
        {{ end }}
    {{- end -}}

This code uses the `type` field in our `form` field group to determine which type of form to display: either the `long` form, or the basic one.

### Adding Formspree

If you open up `layouts/partials/form-simple.html`, you will see the following on the first line:

    <form action="https://formspree.io/{{ .Form.recipient }}" method="POST">

If you read last week's article about [form handling for static sites](https://forestry.io/blog/5-ways-to-handle-forms-on-your-static-site/), you'll recall that this is all we have to do to make our form work with Formspree. We use the `recipient` field that we configured on our form in the Formspree URL, which Formspree uses to determine the recipient of form submissions.

### The _Block Loop_

The next line of `form-simple.html` contains a pattern that will be familiar if you've used Blocks before. The general idea is this:

    for each block in the Blocks field
        load a partial based on the type of the current block

A simplified form of this "block loop" in `form-simple.html` would look like this:

    {{ range .Form.fields }}
        {{ partial (printf "fields/%s" .type) . }}
    {{ end }}

We are using the `type` field that we set up in our Front Matter Partials to determine which partial to load. For example, if the current block is a Text field, Hugo will load the partial at `fields/text.html`.

The full example of our block loop looks like this:

    {{ range .Form.fields }}
        <div class="field">
            <div class="control">
                <label class="label">{{ .label }}</label>
                {{ partial (printf "fields/%s" .type) . }}
                {{ with .description}}
                <p class="help">{{ . }}</p>
                {{ end }}
            </div>
        </div>
    {{ end }}

This just adds some wrapper HTML to make the field look nice, and makes use of the `label` and `description` fields that exist for all forms.

Implementing the fields themselves is pretty straight-forward. Check out the code in [the demo repository](https://github.com/dwalkr/forestry-form-builder/tree/master/layouts/partials/fields) to see how it was done.

### Finishing the Form

All that's left for our simple form is to add the submit button. We want to remember to use the optional `submit_text` that we added to our form UI:

    <div class="field">
        <div class="control">
            <button type="submit" class="button">{{ default "Submit" .Form.submit_text }}</button>
        </div>
    </div>

### Implementing the "Long" Form

The layout for our longer form, at `form-long.html`, is almost the same as our simple form. The only difference is that we need to add an outer loop to our original fields loop:

    {{ range .Form.sections }}
    <fieldset class="box">
        <legend class="subtitle is-3">{{ .title }}</legend>
        {{ range .fields }}
            <!-- field stuff -->
        {{ end }}
    </fieldset>
    {{ end }}

Once that's in place, our code to display both form types is complete!

## Unlock the Power of Blocks

I hope this post has given you an idea of what's possible with Blocks. I encourage you to reach for this feature the next time you want to give your content editors the power to **build**!

{{% tip "Found an Interesting Use for Blocks?" %}}
Share it with us in our [Community Slack](http://bit.ly/2Ntg0Yu)!
{{% /tip %}}


<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We discuss <a href="https://forestry.io/blog/why-we-created-a-git-backed-content-manager/">why we created a Git-backed content manager.</a></p><p><strong>Last week:</strong> We told you about Hugo's Theme Components feature and showed how to build a <a href="https://forestry.io/blog/add-functionality-to-your-hugo-site-with-theme-components/">JSON API Theme Component</a></p></div>

Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17574314">Discuss on Hacker News</a>