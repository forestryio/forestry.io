---
title: 'Snipcart Brings E‑Commerce to Your Static Site '
description: ''
date: 2018-05-18 14:36:07 +0000
authors:
- DJ Walker
publishdate: 2018-05-18 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
categories:
- Beyond Static
- Frontend-Friday
headline: ''
textline: ''
images:
- "/uploads/2018/05/coins.jpg"
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

---
Picture this: it's 2018, and your client needs an online store. You know that static sites are great: they're easy to scale, have a minimal attack surface, and are very fast. However, since a static site can't run backend code, it won't be able to do some things necessary for e-commerce, such as process customer orders. Can you really use a static site to operate an e-commerce storefront?

**Of course you can!** By using external services for the heavy lifting, and connecting them to our static site with JavaScript, we can do anything with our static site!

For static sites, our best options for adding e-commerce are [Snipcart](https://snipcart.com/) and [Shopify's Buy Buttons](https://www.shopify.com/buy-button). Both options have different advantages, but for our purposes, Snipcart's killer feature is its adaptability to any content strategy.

See, Shopify's Buy Buttons work by providing you with code snippets you can copy and paste into your site that will display the product and allow the user to add it to their shopping cart. In order to use this effectively, you will need to adapt your content strategy around this limitation. Snipcart, on the other hand, learns about your products from data attributes in your site's HTML. As long as you provide [a few essential pieces of data](https://docs.snipcart.com/configuration/product-definition), anything on your site can become a Snipcart product!

In other words, we would have to _adapt our workflow to accomodate Shopify_, but _Snipcart will adapt to us._

{{% tip %}}
Snipcart published an [in-depth comparison](https://snipcart.com/blog/snipcart-vs-shopify-buy-button-review) of these two offerings if you'd like more information.
{{% /tip %}}

This blog post will show you how easy it is to integrate Snipcart with a Hugo website. We will also use Forestry to complete the experience with a product management UI.

## The Demo Project

Accompanying this blog post is a sample Hugo website that integrates Snipcart to provide an e-commerce frontend. [Try out the live demo](https://dwalkr.github.io/snipcart-hugo-demo/) to get a feel for how Snipcart works, or [take a look at the source code](https://github.com/dwalkr/snipcart-hugo-demo) to see how it was done. If you want to get started right away, you can import this demo site into Forestry with the button below. Be sure to [set up your API key](#getting-started-with-snipcart) after importing the site to enable the Snipcart features.

<div id="import-snipcart-demo-button" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/dwalkr/snipcart-hugo-demo.git"
configPath="site"
engineName="hugo"
engineVersion="0.38.1"
heading="Make it Your Own"
linkText="Import Our Snipcart Demo" %}}
</div>

## Bootstrapping the Project

We're using [Create Static Site](https://github.com/forestryio/create-static-site) to set up a new Hugo project with a production-ready build pipeline. We can invoke `create-static-site` with `npx`:

    npx create-static-site snipcart-hugo --template hugo

This will set up a new project in the `snipcart-hugo/` directory.

{{% tip %}}
Check out our blog post on [getting started with Create Static Site](https://forestry.io/blog/instant-production-ready-scaffolding-with-create-static-site/) for more information on using this utility.
{{% /tip %}}

If you don't want to use Create Static Site for your project, you can just use [Hugo's new site command](https://gohugo.io/commands/hugo_new_site/) to initialize a new Hugo site. Note that all of the file paths we reference are prefixed with `site/` due to Create Static Site's conventions. Your filepaths will be slightly different if you use a vanilla Hugo install.

## Getting Started With Snipcart

![Snipcart API key dashboard](/uploads/2018/05/snipcart-apikey-ss.png)

In order to test out the demo project, you will need to provide a Snipcart API key. To obtain this, [sign up for a Snipcart account](https://app.snipcart.com/register) and log in to the dashboard. From there, Browse to the **API Keys** section of your account settings. You will be presented with your **Public Test API key**. We're going to store this key in our **Site Params** in the `site/config.toml` file, so that we can edit it later in Forestry if we want to:

```toml
[params]
snipcart_test_api_key = "YOUR-API-KEY"
snipcart_live_api_key = ""
```

_Replace_ `_YOUR-API-KEY_` _with the public test API key from your Snipcart account._

Notice that we have declared two values here: `snipcart_test_api_key` and `snipcart_live_api_key`. When you're ready to go live, you will add your live API key here as well.

{{% tip %}}
Your **Test API Key** should work in most local development environments. If it doesn't seem to be working, however, try adding the domain of your development environment in the **Domains & URLs** section of your account settings.
{{% /tip %}}

To embed the necessary Snipcart scripts, we will add the following to `site/layouts/partials/head.html` before the closing `head` tag:

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

We're using the `HUGO_ENV` variable to load the testing API key in our development environment, and the live API key in our production environment. This will allow us to continue to test our implementation in a development environment, using the test API key, even after we make our store live.

{{% tip %}}
If you've already imported the demo to Forestry, you will want to log in to the site's dashboard and navigate to the **Site Params** section to add your API key.
<br /><br />
<a href="https://app.forestry.io/quick-start?repo=dwalkr/snipcart-hugo-demo&engine=hugo&config=site" class="create-site-button" data-proofer-ignore>Import Our Snipcart Demo</a>
{{% /tip %}}

### API Key Security

Although I blurred the key in the screenshot, the API key you receive from Snipcart is a **Public API Key.** This key is inserted directly into the HTML. Since this key is already publicly visible, it is OK for this key to be added directly to your git repo.

## Setting Up Our Products

Let's add a new content section for products by adding a `products` directory under `site/content`. This is where the markdown files defining each product will be stored.

Keeping products in their own content section will make it easy to define product-specific layouts. Create a file called `single.html` in `site/layouts/products` to serve as the single product template.

### Defining Product Front Matter

![Screenshot of product page](/uploads/2018/05/snipcart-product-ss.png)

Our products will need some specific front matter in order to work with Snipcart, such as the product price. As an example, here is `site/content/products/axe.md` from the demo project:

    +++
    cartImage = "/uploads/2018/05/15/axe-thumb.jpg"
    date = "2018-05-15T18:53:23Z"
    image = "/uploads/2018/05/15/axe.jpg"
    price = 50
    shortDescription = "Swing with purpose."
    title = "Axe"
    +++

The `price` parameter is necessary, and the `shortDescription` and `cartImage` parameters will improve the shopping experience if they are filled out.

{{% tip %}}
**Defining your store's currency**
<br /><br />
Snipcart does not require a currency to be defined with the price. You can set the currency for your store under the **Regional Settings** section in your Snipcart dashboard.
<br /><br />
Our demo project also includes a currency setting under **Site Params**. This is only used to determine how to display the price in our templates. To customize the way prices display in your chosen currency, you can modify the [price partial](https://github.com/dwalkr/snipcart-hugo-demo/blob/master/site/layouts/partials/price.html).
{{% /tip %}}

In order to assist our users with product creation, we could create an [archetype](https://gohugo.io/content-management/archetypes/) for products that will initialize these special front matter fields when we create a product with the `hugo new` command. Since we're using Forestry, however, we will instead create a Front Matter Template in Forestry that will configure the UI with the appropriate fields whenever someone creates a new product.

### Adding a Buy Button

{{% tip %}}
This guide focuses on the markup necessary to make our project work with Snipcart. [View the demo project](https://github.com/dwalkr/snipcart-hugo-demo) to get the full source code.
{{% /tip %}}

We can use data attributes to enable "add to cart" behavior on any HTML element. For our single product template at `site/layouts/products/single.html`, we will attach this data to a button:

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

The `snipcart-add-item` class tells Snipcart to listen for a click on this element. The `data-item-id`, `data-item-name`, `data-item-price`, and `data-item-url` attributes are required to tell Snipcart which product should be added to the cart. The rest of the attributes are optional.

#### Item URL

The `data-item-url` attribute needs to point to a place where the Snipcart product data is rendered. Since we have each product on its own page, this is just the URL to the current product.

{{% warning %}}
The item URL is very important: since we are just inserting the product price in the HTML, anyone could edit the document to change the price, and thus pay whatever they want for a product. Snipcart thwarts this by making their own request to the item URL to verify the product's price.
{{% /warning %}}

#### Item ID

The item ID should uniquely identify your product to Snipcart. However, aside from being unique to this product, the ID doesn't need to be anything in particular. Since the product's URL also has to be unique to the product, it makes sense to use it for the product ID as well.

{{% tip %}}
There are several more attributes you can choose to define for your products. Check out [Snipcart's product definition docs](https://docs.snipcart.com/configuration/product-definition) to see all the options.
{{% /tip %}}

After you add this markup to the `single.html` template, you should now have a functioning buy button on your product pages. **You don't need to add these products to your Snipcart dashboard** — Snipcart will pick up on them automatically when a user adds them to their cart.

![Snipcart's Fetch Products interface](/uploads/2018/05/snipcart-fetch-ss.png)

If you want to see all your products in Snipcart right away, you can use the **Fetch Products** interface and Snipcart will crawl your site to pick up any products that are defined on the page. This unconventional approach to product management is what makes Snipcart so easy to adapt to any content strategy.

## Enhancement: Adding Custom Product Options

![Example of product in cart with custom option](/uploads/2018/05/snipcart-cart-example.png)

At this point, we already have a functioning store on our static site! However, one feature you might wish to add is **custom options** for your products. This would be useful if you have customizable products, or products that have different variations like size or color. Snipcart provides a way to add custom fields to your product via its [custom fields data attributes](https://docs.snipcart.com/configuration/custom-fields).

We're going to use Forestry's [Blocks](https://forestry.io/blog/blocks-give-your-editors-the-power-to-build-pages/) feature to define some custom field types. This will enable us to specify any number of custom fields for each individual product.

In the demo project, I've created some Front Matter Template Partials: `text-option`, `paragraph-text-option`, `checkbox-option`, `simple-dropdown-option`, and `advanced-dropdown-option` (which allows you to modify the product price based on the option selected). All of these share a `base-product-option` template which has the essential fields for a custom option: the name, and whether it is required. After we set up our partial templates, we need to add the _blocks_ field to our `products` Front Matter Template.

All that's left is to implement these options in our template. We're going to iterate over each option and include a different partial depending on what Front Matter Template the option is using. If you've read [our blog post about Blocks and the Sawmill demo theme](https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry), this ["block loop" pattern](https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry/#hugo-example) will look familiar to you. The new HTML for our Snipcart button is as follows:

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

In this case, we are loading a partial from `site/layouts/partials/custom-options/` with a filename matching the name of the Front Matter Partial Template. So, a custom option using the `advanced-dropdown-option` template will use the partial located in `site/layouts/partials/custom-options/advanced-dropdown-option.html`. We're wrapping this in a call to `safeHTMLAttr` because our partials will be outputting HTML attributes to the Snipcart button.

For the sake of brevity, we won't go into implementing each of these partials, but all they need to do is add some additional data attributes in order for Snipcart to understand the custom options. For example, the `text-option` partial:

    data-item-custom{{ .Index }}-name="{{ .Option.name }}"
    {{- if .Option.required -}}
    data-item-custom{{ .Index }}-required="true"
    {{- end -}}

Our custom field data attributes follow the format `data-item-custom<number>-<attribute>`, with `<number>` identifying the option and `<attribute>` being one of the attributes that configures the field.

Take a look at [the custom-options partials ](https://github.com/dwalkr/snipcart-hugo-demo/tree/master/site/layouts/partials/custom-options) to see how we did the rest.

{{% tip %}}
More info on how to configure custom options with data attributes is available in the [Snipcart documentation](https://docs.snipcart.com/configuration/custom-fields).
{{% /tip %}}

## Going Live

![](/uploads/2018/05/snipcart-env-toggle.png)

Flip the environment toggle in your Snipcart dashboard over to "Live" to access your production settings and API key. When you're ready to go live, you just have to generate a live API key and enter it in the `snipcart_live_api_key` field in the `site/config.toml` file, or in your **Site Params** in Forestry.

You will also want to add the domain of your production site in the **Domains & URLs** section of your Snipcart account settings (this is how Snipcart prevents other sites from using your public API key!)

{{% tip %}}
In order to generate a live API key, you will need to enter billing information and connect a payment gateway.
<br /><br />
For more information, view [Snipcart's "going live" docs](https://docs.snipcart.com/testing/going-live)
{{% /tip %}}

## Taking it Further

In this post, we focused on building a static product catalog with Hugo to integrate with Snipcart. Snipcart has some other nice features like user account dashboards and a customizable shopping cart, and makes integrating these into your site just as easy. Check out [Snipcart's documentation](https://docs.snipcart.com/) or their [guides and tutorials](https://docs.snipcart.com/getting-started/guides-and-tutorials) for inspiration.

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll dig deeper into <a href="https://forestry.io/blog/hugo-json-api-part-2/">creating a JSON API with Hugo.</a> </p><p><strong>Last week:</strong> We told you about <a href="https://forestry.io/blog/what-s-new-in-jekyll-3.8/">the latest updates to Jekyll</a>.</p></div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17101744">Discuss on Hacker News</a>