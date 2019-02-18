---
title: 'uBuild: A New Jekyll Theme Using Blocks'
description: |-
  In April we announced a feature that we believed was a game-changer for static site content managers. Blocks was here to introduce a way for you to put together sites using pre-composed site snippets inside Forestry.

  While we did our best to show you how to set them up and give you an idea of how powerful they could be, we noticed that getting to know Blocks and figuring out how to set them up from scratch wasn't as self-explanatory as we had hoped. We needed something that would guide people to success.
date: 2018-06-22 14:00:06 +0000
authors:
- Sebastian Engels
publishdate: 2018-06-21 04:00:00 +0000
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

---
Back in April [we announced a feature](https://forestry.io/blog/blocks-give-your-editors-the-power-to-build-pages/) that we believed was a game-changer for static site content managers. [Blocks](https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry/#/) was here to introduce a way for you to put together sites using pre-composed site snippets inside Forestry.

While we did our best to show you how to set them up and give you an idea of how powerful they could be, we noticed that getting to know Blocks and figuring out how to set them up from scratch wasn't as self-explanatory as we had hoped. We needed something that would guide people to success.

Enter our brand-new theme for Jekyll: **uBuild**. This fully-responsive theme comes with 16 design blocks to put together your favorite site. Our Norwegian designer [@nichlaswa](https://twitter.com/nichlaswa) made sure it looked stunning but see for yourself

![](/uploads/2018/06/all-blocks.png)

[Take a look at our live demo](https://forestryio.github.io/ubuild-jekyll/) to get a feel for what your pages will look like!

## Quick Start

1. [Fork the repo](https://github.com/forestryio/ubuild-jekyll) and import the site into Forestry (or click on the Import Button below).
2. Click on 'Add New' in Forestry and select the Page-Builder template.
3. Add and customize the available Blocks and preview them as you go along.
4. Read the rest of this article and create your own Blocks!


## Even Quicker Start

You can use the button below to automatically copy the `ubuild-jekyll` repo to your Git provider of choice, and immediately import the site to your Forestry dashboard.

<div id="import-ubuild-theme-button" data-proofer-ignore>
{{% create_site_button
repo="https://github.com/forestryio/ubuild-jekyll.git"
engineName="jekyll"
engineVersion="3.6.0"
heading="Make it Your Own"
linkText="Import Jekyll uBuild Now" %}}
</div>

## The Theme

We built this theme to work out-of-the-box with or without Forestry. All content is controlled through Front Matter: as we mentioned in our previous article about Blocks, [building the entire page from front matter](https://forestry.io/blog/sawmill-layout-composer-for-hugo-and-forestry/#3-making-front-matter-modular) allows us to take a modular approach to our theme. Each component is completely self-contained and configured via Blocks.

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

This theme is created to give you a starting point for adding page builder functionality to your own site. We hope it'll help you whether you use it out-of-the-box or as a starting point to learn how to implement your own Blocks.

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

{{% tip %}}
We iterate over all the defined blocks in [`_layouts/blocks.html`](https://github.com/forestryio/ubuild-jekyll/blob/f5f19ca6faf3a492c4b12e3a30de435f32299f65/_layouts/blocks.html) and scope all of the block values inside of a variable called `section`. Within our block include, we will call any block-specific values from the `section` variable.
{{% /tip %}}

Let's include the above Block in our Front Matter!

    ---
    title: Title
    layout: blocks
    date: 2018-06-21 00:00:00 +0000
    page_sections:
    - template: detail-content
      block: text-1
      headline: Headline
      content: "<p>This is some content!</p>"
    ---

Blocks work through the power of Front Matter. It is the Front Matter where we set all the necessary values to set up our Blocks. We can see in the Front Matter above that we point to a `layout` called `blocks`. We will have to create that layout in the next step; it is where we tell Jekyll how to generally include our Blocks. The Front Matter for this page also has an array called `page_sections`. This is where we add our specific Block details. 

The `template` variable is automatically added by Forestry when you're using Blocks. This variable contains the name of the Front Matter Template used to construct the block. We are also introducing a variable called `block`, which we add to our Front Matter Templates as a hidden field. We will use this value to identify which template to include.

{{% tip %}}
Using the additional `block` variable helps to give us a **loose coupling** between our Front Matter Templates and the actual layout code. If we make changes to the names of our Front Matter Templates, we don't have to go in and edit the filenames of all of our includes.
{{% /tip %}}

In the next step we create a file called `blocks` inside our `_layouts` directory, which is going to loop over our Front Matter array, `page_sections`.

    {% include head.html %}
    {% for section in page.page_sections %}
    {% include block-{{ section.block }}.html %}
    {% endfor %}
    {% include footer.html %}

In the code above two things happen. First, we are looping through the Front Matter array called `page_sections`, this was defined on the `page` level, which is why we need to add this to our loop definition. For each item in our array we fetch the `block` value and prepend it with our standard identifier for Blocks `block-` and end with the `.html` ending.

That's it for our code! Now any Block can be added simply by using Front Matter.

## Blocks + Forestry

As we figured out in the previous section, defining and adding Front Matter is all that is necessary to add and customize Blocks. Since Forestry offers a UI to manage Front Matter, we can use the uBuild theme and any Blocks implementation without having to look at the code. Forestry uses [Front Matter Templates](https://forestry.io/docs/settings/front-matter-templates/), a powerful tool that works like a blueprint for Front Matter of all the different types of content you have across your site.

{{% tip %}}
Since uBuild is already set up for Forestry, all you need to do to get started is to <a href="https://app.forestry.io/quick-start?repo=forestryio/ubuild-jekyll&engine=jekyll" data-proofer-ignore>import the theme into your Forestry dashboard.</a>
{{% /tip %}}

Once the layout and styling for a Block is created, it can be added and customized in Forestry. You simply need to create a Front Matter Template for each Block and set the `is Partial` toggle to true.

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

## Moving Forward With Blocks

We think an open-source theme is a great start but we'd like to know your thoughts to make it even better. As we add Blocks to this theme and look for ways to improve the Blocks feature we'd love to have your [feedback, ideas and contributions](https://github.com/forestryio/ubuild-jekyll/issues).

We believe awesome stuff can be built with Blocks, and plan to explore this more in the future. In the meantime, we'd love for you to share with the community what you've built using Forestry Blocks. [Join our community Slack](https://join.slack.com/t/forestry-community/shared_invite/enQtMzgzMjQ1OTk0MDUwLThlYzZmMTQwMWFmMWRhOTU4NjY4MjM4ODdmMmQ0YzI0Y2M5YzViNGE0Y2VhZDY3MDEzYjcxZTMzODE2NDk1ZmI) or tag us on Twitter ([@forestryio](https://twitter.com/forestryio)) to let us know!

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll show you <a href="https://forestry.io/blog/3-tips-for-mastering-blocks/">some tips for using blocks.</a></p><p><strong>Last week:</strong> We looked at ways to <a href="https://forestry.io/blog/5-ways-to-handle-forms-on-your-static-site/">handle forms on your static site.</a></p></div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17374309">Discuss on Hacker News</a>