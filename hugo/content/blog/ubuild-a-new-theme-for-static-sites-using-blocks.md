---
title: uBuild - A New Jekyll Theme Using Blocks [Beta]
description: ''
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

Enter our brand-new theme for Jekyll - uBuild \[beta\] (see the live demo \[here\](https://forestryio.github.io/ubuild-jekyll))! This fully-responsive theme comes with 16 design blocks to put together your favorite site. Our Norwegian designer made sure it looked stunning but see for yourself.

![](/uploads/2018/06/all-blocks.png)

<div id="import-ubuild-theme-button" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/forestryio/forestry-blocks.git"
configPath="site"
branch="master"
engineName="jekyll"
engineVersion="3.6.0"
forkName="jekyll-ubuild"
heading="Make it Your Own"
linkText="Import Jekyll uBuild Now" %}}
</div>

## The Theme

We built this theme to work out-of-the-box with or without Forestry. All content is controlled through Front Matter. Using exclusively Front Matter and not the `content` tag made it possible to create a theme that is completely modular, which was a prerequisite to add Blocks.

The theme consists of seven sections:

* Navigation Bar
* Hero Section
* Content Feature
* 1-2-3 columns
* Details Section
* Call-To-Action
* Footer

Each section has 1-3 alternatives you can choose from. Once you grasp the concept of how Blocks work you can create new Blocks using simple HTML and CSS.

## How does it work?

This theme is created to give you a starting point for adding builder functionalities to your own site, whether you use it out-of-the-box or as a starting point to learn how to implement your own Blocks theme.

A regular Block is simply an HTML template inside the `_includes` directory. For clarity, we decided to prepend all our block filenames with `block-`. Hence the filename for our `text-1` Block is `block-text-1.html`. Let's have a look at Block `text-1`!

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

{{% tip %}} Note that you can use any variable but we're using the `sections` variable for all our parameters to make sure that we're using the right context in our Front Matter specific to this Block. {{% /tip %}}

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

Blocks work through the power of Front Matter. We can see in the Front Matter above that apart from a `title` and some other metadata we point to a `layout` called `blocks`. We will have to create that layout in the next step. The Front Matter for this page also has an array called `page_sections`. This is where we add our Block details. There are two required fields for Blocks `template` and `block`, which is the name of the block used in Forestry and the explicit filename of the Block. In this case we also included two variables in the Block template so we need to add those to the Front Matter as well.

{{% tip %}}
Most of the time the values for `template` and `block` will be identical but sometimes we'd like to use a more user-friendly name for our Block in the content manager, in that case we need to make sure that we can still find the correct file, hence we need the `block` value to stay consistent. {{% /tip %}}

In the next step we create a file called `blocks` inside our `_layouts` directory, which is going to loop over our Front Matter array, `page_sections`.

    {% include head.html %}
    {% for section in page.page_sections %}
    {% include block-{{ section.block }}.html %}
    {% endfor %}
    {% include footer.html %}

In the code above two things happen. First, we are looping through the Front Matter array called `page_sections`, this was defined on the `page` level, which is why we need to add this to our loop definition. For each item in our array we fetch the `block` value and prepend it with our standard identifier for Blocks `block-` and end with the `.html` ending. This effectively only adds a Block if it was added to the `page_sections` array. 

That's it! Now any Block can be added simply by using Front Matter.

## Blocks + Forestry

As we figured out in the previous section, defining and adding Front Matter is all that is necessary to add and customize Blocks. Since Forestry offers a UI to manage Front Matter we can use the uBuild theme without having to use any code. Forestry used [Front Matter Templates](https://forestry.io/docs/settings/front-matter-templates/), a powerful tool that basically is a Front Matter blueprint for all the different types of content you have across your site.

{{% tip %}}
Since uBuild is already set up for Forestry all you need to do is to click on [the button](#import-ubuild-theme-button) at the top of this page and import the theme into your Forestry dashboard to get started.
{{% /tip %}}

Once the layout and styling for a Block is created it can be added and customized in Forestry. You simply need to create a Front Matter Template for each Block and set the `is Partial` toggle to true.

Let's have another look at our `text-1` Block example!

![](/uploads/2018/06/text-1-block-settings.png)

For this Block we only need to add two Text fields (one for `block` and one for `title`) and one Textarea field (for `content`). And don't forget to toggle `is Partial`

{{% tip %}}
Front Matter Templates can also be set in `.yml` files inside the `.forestry.io` directory.
{{% /tip %}}



## Future

We have big plans for Blocks!

An open-source theme is a great start but we understand that won't fulfill all your needs. We'd like to build an entire Blocks suite from which you can pick and choose as you desire. So as we proceed with our exploration of this tool we're going to add to it and to do that we'd love to have your [feedback and contributions]().

Anything that could be assembled with pre-defined code blocks can be build with Blocks. We'd love to share with the community what you built using Forestry Blocks. Just write us in the comments, slack or tag us on twitter.