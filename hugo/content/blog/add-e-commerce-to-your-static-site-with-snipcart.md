---
title: Add E-Commerce to Your Static Site With Snipcart
description: ''
date: 2018-05-14 03:36:07 -1100
authors:
- DJ Walker
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
categories:
- Beyond Static
- Frontend-Friday
headline: ''
textline: ''
images: []
tags: []
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
## Want to Build an Online Store in 2018? 

Why not **#gostatic**?

Obviously, an online store can't be 100% static. At the absolute minimum, we know that backend code will be required to process and store customer orders. If we want to have an online store while still reaping the benefits of using a static site, we will need to integrate our site with an external service.

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

We're using [Create Static Site](https://github.com/forestryio/create-static-site) to set up a new Hugo project with a [production-ready build pipleline](https://forestry.io/blog/instant-production-ready-scaffolding-with-create-static-site/). We can invoke `create-static-site` with `npx`:

```
npx create-static-site snipcart-hugo --template hugo
```

This will set up a new project in the `snipcart-hugo/` directory.

## Getting Started With Snipcart

In order to test out the demo project, you will need to provide a Snipcart API key. To obtain this, [sign up for a Snipcart account](https://app.snipcart.com/register) and log in to the dashboard. From there, Browse to the "API Keys" section of your account settings. You will be presented with your **public test API key**. We're going to store this key in our *site params* in the `site/config.toml` file, so that we can edit it later in Forestry if we want to:

```toml
[params]
snipcart_api_key = "YOUR-API-KEY"
```
*Replace `YOUR-API-KEY` with the public test API key from your Snipcart account.*

To embed the necessary snipcart scripts, we will add the following to `site/layouts/partials/head.html` before the closing `head` tag:

```
<!-- snipcart assets -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="{{ .Site.Params.snipcart_api_key }}"></script>
<link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
```

{{% tip %}}
If you've already imported the demo to Forestry, you will want to log in to the site's dashboard and navigate to the **Site Params** section to add your API key.
{{% /tip %}}

### API Key Security
The API key you received from snipcart is a **Public API Key.** This key is inserted directly into the HTML. Since this key is publicly visible, it is OK for this key to be added directly to your git repo.

## Setting Up Our Products

Let's add a new content section for products by adding a `products` directory under `site/content`. This is where the markdown files defining each product will be stored.

Keeping products in their own content section will make it easy to define product-specific layouts. Create a file called `single.html` in `site/layouts/products` to serve as the single product template.

{{% tip %}}
This guide focuses on the markup necessary to make our project work with Snipcart; [view the demo project](/) to get the full source code.
{{% /tip %}}

### Creating a Front Matter Template in Forestry



### Adding a Buy Button

We can use data attributes to enable "add to cart" behavior on any HTML element

For our single product template, we will attach this data to a button:

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

#### Item URL
The `data-item-url` attribute needs to point to a place where the Snipcart product data is rendered. Since we have each product on its own page, this is just the URL to the current product.

The reason the URL is so important is because we are just inserting the product price in the HTML. Anyone could edit the document to change the price, and thus pay whatever they want for a product. Snipcart thwarts this by making a separate request to the item URL to verify the product's price.

### Adding Custom Product Options
You may wish to for some of your products to be customizable, or to have different options. Snipcart provides a simple interface for configuring these via its [custom fields data attributes](https://docs.snipcart.com/configuration/custom-fields). 

We're going to use Forestry's blocks feature to define some custom field types. This will enable us to specify any number of custom fields for each individual product.

## Going Live

## Additional Features

profile/login/logout links