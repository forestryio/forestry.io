+++
Categories = []
banner = ""
date = "2016-09-28T15:30:00Z"
description = "Sell products simply with Snipcart"
draft = true
excerpt = "Sell products simply with Snipcart"
show_author = true
show_comments = true
show_signup = true
tags = []
title = "E-commerce with Jekyll and Snipcart"
twitter_card = ""
[[author]]
bio = "Marc Boisvert is a frontend web developer and UX architect at <a href=\"https://yokai.io/\">yokai</a>. When he's not brewing some delicious CSS goodness he likes to talk about cats, politics and tech. You can find him on Twitter at <a href=\"https://twitter.com/yokaicorp\">@yokaicorp</a> or on the web at yokai.io"
img = "/blog/assets/images/marc-3.jpg"
name = "Marc Boisvert-Dupras"
twitter = "https://twitter.com/yokaicorp"
[[suggested]]
link = "https://forestry.io/blog/post/snipcart-vs-stripe-checkout/"
title = "E-commerce with Jekyll and Stripe Checkout - Marc Boisvert-Dupras"
[[suggested]]
link = "https://forestry.io/blog/post/e-commerce-with-jekyll-and-stripe-checkout/"
title = "E-commerce with Jekyll and Stripe Checkout - Marc Boisvert-Dupras"
[[suggested]]
link = "https://forestry.io/blog/post/forestry-gitlab/"
title = "Forestry + GitLab - Jordan Patterson"

+++
<img src="/blog/assets/images/snipcart-1.gif" class="medium right">

In this tutorial, we'll look at how we can integrate [Snipcart](https://snipcart.com/) into your favorite static-site workflow. We'll use [Jekyll](#!) but you can also use other generators like [Hugo](https://gohugo.io).

**What you'll need:**<br>
[Ruby](https://www.ruby-lang.org/en/downloads/) `v2.x or higher`  <br>
[RubyGems](https://rubygems.org/pages/download) `latest`

Once you have those installed, we can move on to the next step where we will install Jekyll and create a new project.

## Creating our project
Let's start by making sure Jekyll is properly installed on your system. Open a command prompt and type this command.

```sh
$ gem install jekyll
```

Once you have Jekyll installed, we can our website project with the following command.

```sh
$ jekyll new my-online-shop && cd my-online-shop
```

Jekyll will automatically pull in all the required files and dependencies. Once that is done, run the `serve` command to view your website.

```sh
$ jekyll serve
```
## Storing our products data

Now we can start to build our shop! We'll use [Jekyll collections](https://jekyllrb.com/docs/collections/) to store our products data. To do that, open up the `_config.yml` file and add the `collections` field with the name of your collection; here we'll use `products`. We'll also set the `output` key to `true` to allow us to create individual pages for each products later on.

While we're tampering with the configuration, let's also include our api key(s) for easy access. Create a new `api_key` field with your public key. This will allow us to reference your key later on using the `site.api_key` variable.

The final output should look like so:

```
api_key: your-key-here

collections:
  products:
    output: true
```

At this point, I recommend restarting the Jekyll server to ensure the changes to the `_config.yml` are properly loaded. Once that is done, we can start creating some products.

Start by making a new directory with the name of your collection and prepend it with an underscore. In our case, it would look like `_products`.

Create a new file inside the directory we've just made and name with the name of your product for easy identification. We'll use `example-product.md` for this article. We can specify all of our product's details in the YAML Front Matter like so:

```YAML
---
name: Example product
price: 2.99
slug: example-product
sku: 1
image: https://placekitten.com/500/500
layout: product
description: Aliqua dolor proident ullamco in duis ex qui occaecat qui occaecat elit nulla.
---

Dolore fugiat qui ad cupidatat adipisicing nulla adipisicing est ut minim dolore cupidatat excepteur tempor aliquip amet culpa. Exercitation excepteur magna ad tempor enim eu pariatur commodo dolor consectetur reprehenderit. Lorem esse laborum laborum nisi sint ipsum nisi anim incididunt cillum sit. Veniam nulla aliqua et aliquip incididunt velit commodo pariatur do deserunt anim deserunt ex ullamco esse.
```

That's it! We're now ready to display all of our products on our website. Feel free to create a few additional test products for better visualization of how the website will look.

**Shameless plug:** If you want a great admin interface to manage your Jekyll e-commerce site, [Forestry.io](https://forestry.io) will generate this CMS from the above example:

<img src="/blog/assets/images/forestry-ecommerce-screenshot.png" class="large center">

## Displaying the products

In this section, we'll cover two different methods for displaying our products, namely listing them all on one page and displaying them one at a time inside their own individual pages. Let's start with the former.

**Creating our store's index**<br>
Listing all of our products on one page is simply a matter of looping through each product inside of our `_products` directory. Thankfully, Jekyll's templating engine, [Liquid](#!) provides an easy way to do just that.

Start by creating a new `item.html` file inside of your `_includes` folder. This will serve as a reusable layout to display all of our products details.

```html
<div class="col col-33">
  <div class="card">
    <div class="card-image">
      <img class="img-responsive" src="{{ product.image }}" alt="{{ product.name }}">
    </div><!-- card image -->

    <div class="card-content">
      <span class="card-title">{{ product.name }}</span>
      <span class="card-subtitle">${{ product.price }}</span>
      {{ product.description }}
    </div><!-- card content -->
    <div class="card-action">
      <a href="{{ site.baseurl }}{{ product.url }}">View</a>
      <a href="#">Purchase</a>
    </div><!-- card actions -->
  </div>
</div>
```
This does not look great right now but we can fix that with some simple CSS. Add the following to your `_layout.scss` file:

```CSS
/***
* Simple grid
*/
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.col {
  flex-basis: 100%;
}

@media screen and (min-width: 800px) {
  .col {
    flex: 1;
  }
  .col-33 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }

}

/***
* Cards
*/
.card .card-image{
    overflow: hidden;
}

.card{
    margin: 10px 5px;
    position: relative;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 4 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.card .card-content {
    padding: 10px;
}

.card .card-content .card-title {
    display: block;
    font-size: 24px;
}

.card .card-content .card-subtitle {
    display: block;
    font-size: 14px;
}

.card .card-action {
    padding: 20px;
    border-top: 1px solid rgba(160, 160, 160, 0.2);
}

.card .card-action a {
    font-size: 15px;
    text-transform:uppercase;
    margin-right: 20px;
}

.card .card-action a:hover {
    text-decoration:none;
}
```

With that done, we're ready to display our products on the store. Let's add the following block to our `index.html` file. This will loop through any products in the `_products` directory and render them inside the `item.html` template we just created.

```html
<div class="row">
  {% for product in site.products %}
    {% include item.html %}
  {% endfor %}
</div>
```

Great, with our products now displayed on our store we can move on to the last section of this tutorial.

If you'd like to review your code, we've created a repository with everything covered in this tutorial thus far. You can check it out on
<br> <a class="button secondary large" style="margin: 3em auto 1em; display: block; width: 300px; font-size: .9rem;" href="https://github.com/aft3rlife/my-online-shop"><span class="icon icon-github" style="font-size: 16px;"></span> GitHub Demo </a>


## Integrating Snipcart

Snipcart includes a customizable shopping cart directly on your website. We'll look at how we can add our products to it, display it and finally process payments.

To get started, let's open up our `_config.yml` and add our personal api key which can be found on your Snipcart dashboard under Account > API Keys.

```YAML
api_key: <your api key>
```

Next, let's include `snipcart.js` in our default layout. For this tutorial we'll be using Snipcart's default theme — `snipcart.min.css` — so let's include that as well. Open up the `default.html` file in the `_layouts` directory and add the following lines before the closing `</head>` tag.

```html
<script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
    data-api-key="{{ site.api_key }}"
    id="snipcart" async defer>
</script>
<link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
```

With `snipcart.js` loaded and the default theme included, we can start adding items to the cart. Let's edit our `item.html` and replace `<a href="#">Purchase</a>` with a button that will trigger an action to add an item to the shopping cart.

```html
<a
  href="#!"
  class="snipcart-add-item"
  data-item-id="{{ product.sku }}"
  data-item-name="{{ product.name }}"
  data-item-price="{{ product.price }}"
  data-item-url="{{ site.url }}{{ product.name }}"
  data-item-description="{{ product.description }}">
  Add to cart
</a>
```

By default, the chosen item will be added to the cart and the shopping cart will open up. If you don't want the cart to open up automatically when adding a product, simply add `data-autopop="false"` after `data-api-key="{{ site.api_key }}"` in the `snipcart.js` script. You can then open up the checkout window by adding this line to your `item.html`.

```html
<a href="#" class="snipcart-checkout">Checkout</a>
```
