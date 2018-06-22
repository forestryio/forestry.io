---
title: uBuild [Beta] - A New Jekyll Theme Using Blocks
description: |-
  In April we announced a feature that we believed was a game-changer for static site content managers. Blocks was here to introduce a way for you to put together sites using pre-composed site snippets inside Forestry.

  While we did our best to show you how to set them up and give you an idea of how powerful they could be, we noticed that getting to know Blocks and figuring out how to set them up from scratch wasn't as self-explanatory as we had hoped. We needed something that would guide people to success.
date: 2018-06-22 18:20:06 +0000
authors:
- Sebastian Engels
publishdate: 2018-06-22 03:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/06/theme-2"
categories:
- Jekyll
- Hugo
- Static Sites
- CMS
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
In April we announced a feature that we believed was a game-changer for static site content managers. Blocks was here to introduce a way for you to put together sites using pre-composed site snippets inside Forestry.

While we did our best to show you how to set them up and give you an idea of how powerful they could be, we noticed that getting to know Blocks and figuring out how to set them up from scratch wasn't as self-explanatory as we had hoped. We needed something that would guide people to success.

Enter our brand-new theme for Jekyll - uBuild \[beta\] (see the live demo [here](https://forestryio.github.io/ubuild-jekyll))! This fully-responsive theme comes with 16 design blocks to put together your favorite site. Our Norwegian designer made sure it looked stunning but see for yourself.

![](/uploads/2018/06/all-blocks.png)

## Quick Start

1. Fork the repo and import the site into Forestry (or click on the Import Button below).
2. Click on 'Add New' in Forestry and select the Page-Builder template.
3. Add and customize the available Blocks and preview them as you go along.
4. Read the rest of this article and create your own Blocks.

<div id="import-ubuild-theme-button" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/forestryio/ubuild-jekyll.git"
configPath="site"
branch="master"
engineName="jekyll"
engineVersion="3.6.0"
forkName="ubuild-jekyll"
heading="Make it Your Own"
linkText="Import Jekyll uBuild Now" %}}
</div>

## The Theme

We built this theme to work out-of-the-box with or without Forestry. All content is controlled through Front Matter. Using exclusively Front Matter and not the `{{ content }}` tag made it possible to create a theme that is completely modular, which was a prerequisite to add Blocks.

The theme consists of seven sections:

* Navigation Bar
* Hero Section
* Content Feature
* 1-2-3 columns
* Details Section
* Call-To-Action
* Footer

Each section has 1-3 alternatives you can choose from and can easily be added and rearranged. Once you understand how Blocks work you can create new Blocks using simple HTML and CSS.

## How does it work?

This theme is created to give you a starting point for adding builder functionalities to your own site. We hope it'll help you whether you use it out-of-the-box or as a starting point to learn how to implement your own Blocks. 

A regular Block is simply an HTML template inside the `_includes` directory. For clarity, we prepend all our Block filenames with `block-`. Hence the filename for our `text-1` Block is `block-text-1.html`. Let's have a look at the `text-1` Block!

    <section class="block block-text-1">
      <div class="container">
        <div class="columns">
          <div class="column headline">
            <h3>{{ section.headline }}</h3>
          </div>
          <div class="column text">
            {{ section.content }}
          </div>
        </div>
      </div>
    </section>

There's nothing irregular about the HTML snippet. A Block is just an `include` template.

{{% tip %}} Note that inside a block any variable is available that is also available outside a block but we're using the `sections` variable for all our parameters to make sure that we're using the right context in our Front Matter specific to this Block. {{% /tip %}}

Let's include the above Block in our Front Matter!

    ---
    title: Title
    layout: blocks
    date: 2018-06-21 00:00:00 +0000
    page_sections:
    - template: text-1
      block: text-1
      headline: Headline
      content: "<p>This is some content!</p>"
    ---

Blocks work through the power of Front Matter. It is the Front Matter where we set all the necessary values to set up out Blocks. We can see in the Front Matter above that we point to a `layout` called `blocks`. We will have to create that layout in the next step, it is where we tell Jekyll how to generally include our Blocks. The Front Matter for this page also has an array called `page_sections`. This is where we add our specific Block details. 

There are two required fields for Blocks `template` and `block`, which is the name of the block used in Forestry and the explicit filename of the Block. In this case we also included two variables (`headline` and `content`) in the Block template, so we need to add those to the Front Matter as well.

{{% tip %}}
Most of the time the values for `template` and `block` will be identical but sometimes we'd like to use a more user-friendly name for our Block in the content manager, in that case we need to make sure that we can still find the correct file, hence we need the `block` value to stay consistent. {{% /tip %}}

In the next step we create a file called `blocks` inside our `_layouts` directory, which is going to loop over our Front Matter array, `page_sections`.

    {% include head.html %}
    {% for section in page.page_sections %}
    {% include block-{{ section.block }}.html %}
    {% endfor %}
    {% include footer.html %}

In the code above two things happen. First, we are looping through the Front Matter array called `page_sections`, this was defined on the `page` level, which is why we need to add this to our loop definition. For each item in our array we fetch the `block` value and prepend it with our standard identifier for Blocks `block-` and end with the `.html` ending. This effectively only adds a Block if it was added to the `page_sections` array. 

That's it for our code! Now any Block can be added simply by using Front Matter.

## Blocks + Forestry

As we figured out in the previous section, defining and adding Front Matter is all that is necessary to add and customize Blocks. Since Forestry offers a UI to manage Front Matter we can use the uBuild theme and any Blocks implementation without having to look at the code. Forestry used [Front Matter Templates](https://forestry.io/docs/settings/front-matter-templates/), a powerful tool that basically is a blueprint for Front Matter of all the different types of content you have across your site.

{{% tip %}}
Since uBuild is already set up for Forestry all you need to do to get started is to click on [the button](#import-ubuild-theme-button) at the top of this page and import the theme into your Forestry dashboard.
{{% /tip %}}

Once the layout and styling for a Block is created it can be added and customized in Forestry. You simply need to create a Front Matter Template for each Block and set the `is Partial` toggle to true.

Let's have another look at our `text-1` Block example!

![](/uploads/2018/06/text-1-block-settings.png)

For this Block we only need to add two Text fields (one for `block` and one for `title`) and one Textarea field (for `content`). And don't forget to toggle `is Partial`, so that you can add it to another Front Matter Template.

{{% tip %}}
Front Matter Templates can also be set in `.yml` files inside the `.forestry.io` directory.
{{% /tip %}}

In our last step we need to make sure that there is one Front Matter Template that knows about all the different Partials. For this purpose Forestry offers the Field called Blocks.

![](/uploads/2018/06/page-builder.png)

Create a new Front Matter Template, let's call it Page-Builder and make sure all Partial Front Matter Templates are added under `Templates`. This Front Matter Template is NOT a partial, make sure that it's turned off.

In this last step we are going to create a new page with Blocks. Simply navigate to `Pages` in the content section and click on `add new` in the upper-left corner. In the new modal you choose a title for the page and select the Page-Builder template we just made. Click on Create to proceed.

![](/uploads/2018/06/page-section.png)

Now all that's left to do is to choose the Blocks you'd like to add and select them using the Page Section drop down. Click on <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="1.2"><path d="M12 18c6 0 10-6 10-6s-4-6-10-6-10 6-10 6 4 6 10 6z"></path><circle cx="12" cy="12" r="2"></circle></g></svg> and preview your site. 

## Future

We think an open-source theme is a great start but we'd like to know your thoughts to make it even better. As we add Blocks to this theme and look for ways to improve the Blocks feature we'd love to have your [feedback, ideas and contributions](https://github.com/forestryio/ubuild-jekyll/issues).

We believe awesome stuff can be build with Blocks (as we will explore in future posts on this blog as well). We'd love to share with the community what you built using Forestry Blocks. Just write us in the comments on Hackernews, [slack](https://forestry.io/blog/join-our-slack-community/) or tag [@forestryio on twitter](https://twitter.com/forestryio/).