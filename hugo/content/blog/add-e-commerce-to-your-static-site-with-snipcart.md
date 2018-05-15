---
title: Snipcart Brings E‑Commerce to Your Static Site
description: ''
date: 2018-05-18 03:36:07 -1100
authors:
- DJ Walker
publishdate: 2017-12-06 17:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
categories:
- Beyond Static
- Frontend-Friday
headline: ''
textline: ''
images: []
tags:
- Hugo
- Blocks
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
Picture this: it's 2018, and your client needs an online store. You know that static sites are great: they're easy to scale, have a minimal attack surface, and are very performant. They couldn't run a store, though, could they? At the absolute minimum, we know that some backend code will be required to process customer orders.

Well, with an external service and a sprinkle of JavaScript we can make a static site do anything we want.

Two of the best options for integrating e-commerce into our static site are Snipcart and the Buy Button from Shopify. Snipcart published an [in-depth comparison](https://snipcart.com/blog/snipcart-vs-shopify-buy-button-review) of the two options, but the most important feature to us is how easily Snipcart adapts to a variety of content strategies. To integrate a Shopify Buy Button into your website, Shopify provides a code snippet you can copy and paste into your HTML. This certainly makes things easy, but requires you to adapt your content strategy to work around this special markup. Snipcart, on the other hand, allows you to attach data attributes to any HTML element on your page to identify your products. This gives us the power to define our own content strategy and integrate Snipcart at the template level.

This blog post will show you how easy it is to integrate Snipcart with a Hugo website, using Forestry to complete the experience with a product management UI.

{{% create_site_button
repo="https://github.com/dwalkr/xyz.git"
branch="master"
engineName="hugo"
engineVersion="0.37.1"
forkName="snipcart-hugo"
heading="Follow Along or Make it Your Own"
linkText="Import our demo into Forestry" %}}

## Bootstrapping the Project

We're using [Create Static Site](https://github.com/forestryio/create-static-site) to set up a new Hugo project with a production-ready build pipeline. We can invoke `create-static-site` with `npx`:

```
npx create-static-site snipcart-hugo --template hugo
```

This will set up a new project in the `snipcart-hugo/` directory.

{{% tip %}}
Check out our blog post on [getting started with Create Static Site](https://forestry.io/blog/instant-production-ready-scaffolding-with-create-static-site/) for more information on using this utility.
{{% /tip %}}

## Getting Started With Snipcart

In order to test out the demo project, you will need to provide a Snipcart API key. To obtain this, [sign up for a Snipcart account](https://app.snipcart.com/register) and log in to the dashboard. From there, Browse to the "API Keys" section of your account settings. You will be presented with your **public test API key**. We're going to store this key in our *site params* in the `site/config.toml` file, so that we can edit it later in Forestry if we want to:

```toml
[params]
snipcart_test_api_key = "YOUR-API-KEY"
snipcart_live_api_key = ""
```
*Replace `YOUR-API-KEY` with the public test API key from your Snipcart account.*

Notice that we have declared two values here: `snipcart_test_api_key` and `snipcart_live_api_key`. When you're ready to go live, you will add your live API key here as well.

To embed the necessary Snipcart scripts, we will add the following to `site/layouts/partials/head.html` before the closing `head` tag:

```
<!-- snipcart assets -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="
  {{- if eq (getenv "HUGO_ENV") "development" -}}
  {{ .Site.Params.snipcart_test_api_key }}
  {{- else -}}
  {{ .Site.Params.snipcart_live_api_key }}
  {{- end -}}
"></script>
<link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
```

We're using the `HUGO_ENV` variable to load the testing API key in our development environment, and the live API key in our production environment. This will allow us to continue to test our implementation in a development environment even after we make our store live.

{{% tip %}}
If you've already imported the demo to Forestry, you will want to log in to the site's dashboard and navigate to the **Site Params** section to add your API key.
{{% /tip %}}

### API Key Security
The API key you received from Snipcart is a **Public API Key.** This key is inserted directly into the HTML. Since this key is already publicly visible, it is OK for this key to be added directly to your git repo.

## Setting Up Our Products

Let's add a new content section for products by adding a `products` directory under `site/content`. This is where the markdown files defining each product will be stored.

Keeping products in their own content section will make it easy to define product-specific layouts. Create a file called `single.html` in `site/layouts/products` to serve as the single product template.

{{% tip %}}
This guide focuses on the markup necessary to make our project work with Snipcart. [View the demo project](/) to get the full source code.
{{% /tip %}}

### Creating a Front Matter Template in Forestry

We can use Forestry to make it easy to create and edit new products. Let's add a new Front Matter template for products. In this template we will add the necessary fields to configure our Snipcart product: the price, a short description, and a 50x50px image to display in the user's cart. This is easy to do in the Forestry UI, but if you want to do it a little quicker you can just create a new file in `site/.forestry/front_matter/templates/products.yml` with the following content:

```
---
hide_body: false
is_partial: false
fields:
- type: number
  config:
    step: ".01"
    required: true
  label: Price
  name: price
- type: textarea
  name: shortDescription
  label: Short Description
  description: Shows on product and cart pages
- type: file
  name: image
  label: Image
  description: Displays on product page
- type: file
  name: cartImage
  label: Cart Image
  description: Upload a 50x50 image to display in shopping cart
```

### Adding a Buy Button

We can use data attributes to enable "add to cart" behavior on any HTML element. For our single product template, we will attach this data to a button:

```
<button
    class="snipcart-add-item"
    data-item-id="{{ .URL }}"
    data-item-name="{{ .Title }}"
    data-item-price="{{ .Params.price }}"
    data-item-url="{{ .Permalink }}"
    {{ with .Params.shortDescription }}
    data-item-description="{{ . }}"
    {{ end }}
    {{ with .Params.cartImage }}
    data-item-image="{{ . | absURL }}"
    {{ end }}
>
Buy {{ .Title }}
</button>
```

The `snipcart-add-item` class tells Snipcart to listen for a click on this element. The `data-item-id`, `data-item-name`, `data-item-price`, and `data-item-url` attributes are required to tell Snipcart which product should be added to the cart. The rest of the attributes are optional, and there are [even more attributes available](https://docs.snipcart.com/configuration/product-definition).

#### Item ID
The item ID is important, as this should uniquely identify your product to Snipcart. However, aside from being unique to this product, the ID doesn't need to be anything in particular. Our item URL is a good fit for this.

#### Item URL
The `data-item-url` attribute needs to point to a place where the Snipcart product data is rendered. Since we have each product on its own page, this is just the URL to the current product.

The item URL is very important: since we are just inserting the product price in the HTML, anyone could edit the document to change the price, and thus pay whatever they want for a product. Snipcart thwarts this by making their own request to the item URL to verify the product's price.

### Adding Custom Product Options
You may wish to for some of your products to be customizable, or to have different options. Snipcart provides a simple interface for configuring these via its [custom fields data attributes](https://docs.snipcart.com/configuration/custom-fields). 

We're going to use Forestry's [Blocks](https://forestry.io/blog/blocks-give-your-editors-the-power-to-build-pages/) feature to define some custom field types. This will enable us to specify any number of custom fields for each individual product.

In the demo project, I've created some Front Matter Template Partials: `text-option`, `paragraph-text-option`, `checkbox-option`, `simple-dropdown-option`, and `advanced-dropdown-option` (which allows you to modify the product price based on the option selected). 

All of these share a `base-product-option` template which has the essential fields for a custom option: the name, and whether it is required.

After we set up our partial templates, we need to add the *blocks* field to our `products` Front Matter Template. Let's call the field `customOptions` and configure it like so:

```
- type: blocks
  name: customOptions
  label: Custom Options
  template_types:
  - text-option
  - text-block-option
  - checkbox-option
  - simple-dropdown-option
  - advanced-dropdown-option
```

*Once again, don't worry about knowing this configuration syntax: configuring Front Matter Templates is easy to do in the Forestry UI.*

All that's left is to implement these options in our template. We're going to iterate over each option and include a different partial depending on what Front Matter Template the option is using. If you've read [our blog post about Blocks and the Sawmill demo theme](https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry), this ["block loop" pattern](https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry/#hugo-example) will look familiar to you. The new HTML for our Snipcart button is as follows:

```
<button
    class="button is-primary snipcart-add-item"
    data-item-id="{{ .URL }}"
    data-item-name="{{ .Title }}"
    data-item-price="{{ .Params.price }}"
    data-item-url="{{ .Permalink }}"
    {{ with .Params.shortDescription }}
    data-item-description="{{ . }}"
    {{ end }}
    {{ with .Params.cartImage }}
    data-item-image="{{ . | absURL }}"
    {{ end }}
    {{ with .Params.customOptions }}
        {{- range $index, $option := . -}}
        {{ safeHTMLAttr (partial (printf "custom-options/%s" .template) (dict "Index" (add 1 $index) "Option" $option)) }}
        {{- end -}}
    {{ end }}
>
Buy {{ .Title }}
</button>
```

In this case, we are loading a partial from `site/layouts/partials/custom-options/` with a filename matching the name of the Front Matter Partial Template. So, a custom option using the `advanced-dropdown-option` template will use the partial located in `site/layouts/partials/custom-options/advanced-dropdown-option.html`. We're wrapping this in a call to `safeHTMLAttr` because our partials will be outputting HTML attributes to the Snipcart button.

For the sake of brevity, we won't go into implementing each of these partials, but all they need to do is add some additional data attributes in order for Snipcart to understand the custom options. For example, the `text-option` partial:

```
data-item-custom{{ .Index }}-name="{{ .Option.name }}"
{{- if .Option.required -}}
data-item-custom{{ .Index }}-required="true"
{{- end -}}
```

The first option is configured with `data-item-custom1-name`, the second with `data-item-custom2-name`, and so on. We pass the variable `Index` to this partial to keep track of that, and the rest of the option configuration in an `Option` variable. 

Take a look at [the `custom-options` partials in our demo repo](/) to see how we did the rest.

{{% tip %}}
More info on how to configure custom options with data attributes is available in the [Snipcart documentation](https://docs.snipcart.com/configuration/custom-fields).
{{% /tip %}}


## Going Live

When you're ready to go live, you just have to enter your live API key in the `snipcart_live_api_key` field in the `site/config.toml` file, or in your **Site Params** in Forestry.

{{% tip %}}
In order to generate a live API key, you will need to enter billing information and connect a payment gateway.
<br /><br />
For more information, view [Snipcart's "going live" docs](https://docs.snipcart.com/testing/going-live)
{{% /tip %}}

## Taking it Further

This post focused on integrating products, but Snipcart has some other nice features like user account dashboards and a customizable shopping cart. All of this is very easy to integrate into your site &mdash; check out [Snipcart's documentation](https://docs.snipcart.com/) or their [guides and tutorials](https://docs.snipcart.com/getting-started/guides-and-tutorials) for inspiration.