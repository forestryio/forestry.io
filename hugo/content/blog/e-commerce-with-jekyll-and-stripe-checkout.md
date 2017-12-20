+++
Categories = []
banner = ""
date = "2016-09-28T14:34:00Z"
description = "Sell products simply with Stripe Checkout"
draft = true
excerpt = "Sell products simply with Stripe Checkout"
show_author = true
show_comments = true
show_signup = true
tags = []
title = "E-commerce with Jekyll and Stripe Checkout"
twitter_card = ""
[[author]]
bio = "Marc Boisvert is a frontend web developer and UX architect at <a href=\"https://yokai.io/\">yokai</a>. When he's not brewing some delicious CSS goodness he likes to talk about cats, politics and tech. You can find him on Twitter at <a href=\"https://twitter.com/yokaicorp\">@yokaicorp</a> or on the web at yokai.io"
img = "/blog/assets/images/marc-3.jpg"
name = "Marc Boisvert-Dupras"
twitter = "https://twitter.com/yokaicorp"
[[suggested]]
link = "https://forestry.io/blog/post/e-commerce-with-jekyll-and-snipcart/"
title = "E-commerce with Jekyll and Snipcart - Marc Boisvert-Dupras"
[[suggested]]
link = "https://forestry.io/blog/post/e-commerce-with-jekyll-and-stripe-checkout/"
title = "Why Shopify is Overkill For Your Next E-commerce Site - Marc Boisvert-Dupras"
[[suggested]]
link = "https://forestry.io/blog/post/forestry-gitlab/"
title = "Forestry + GitLab - Jordan Patterson"

+++
<img src="/blog/assets/images/stripe-checkout.png" class="medium right">

In this tutorial, we'll look at how we can integrate [Stripe Checkout](https://stripe.com/checkout) into your favorite static-site workflow. We'll use [Jekyll](#!) but you can also use other generators like [Hugo](https://gohugo.io).

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

## Integrating Stripe Checkout

In this section, we'll see how we can integrate Stripe and process payments using all the things we've set up in the previous parts of this tutorial.

Since Stripe requires a back-end server to process payments, let's start by setting that up. We'll be using a small Node server to do all of the back-end work as it's tiny and can be hosted on PaaS platforms like [Heroku](https://www.heroku.com/) but if you already have a VPS you can also use that. For the sake of this tutorial, we'll use Heroku. We've create a handy simple Node server which you can find on GitHub:
<br> <a class="button secondary large" style="margin: 3em auto 1em; display: block; width: 300px; font-size: .9rem;" href="https://github.com/aft3rlife/heroku-stripe-checkout"><span class="icon icon-github" style="font-size: 16px;"></span> Stripe Server </a>

Simply start by clicking the _Deploy to Heroku_ button and enter your account details which can be found on your Stripe account [dashboard](https://dashboard.stripe.com). Next, let's open up our Jekyll `_config.yml` file and add a few things for easy access.

```YAML
# Stripe Integration
post_url: <your heroku app url>
public_key: <your stripe public key>
```

Sweet, we're now ready to use Stripe's Checkout platform. To do so, open up your `item.html` and let's make a few edits. We can remove the `<a href="#">Purchase</a>` and replace it with Stripe's button template like so.

```html
<form id="stripe" action="{{ site.post_url }}" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="{{ site.public_key }}"
    data-amount="{{ product.price | remove: '.' }}"
    data-name="{{ product.name }}"
    data-description="{{ product.description }}"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-currency="cad">
  </script>
  <input name="amount" value="{{ product.price | remove: '.' }}" type="hidden">
  <input name="description" value="{{ product.description }}" type="hidden">
</form>
```

And that's it! You should now be able to use Stripe's Checkout and process orders. You can try this out by clicking on the _Pay with Card_ button and making a sample order with any [test payment details](https://stripe.com/docs/testing#cards).
