---
title: uBuild - A New Jekyll Theme Using Blocks
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

While we did our best to show you how to set them up and give you an idea of how powerful they could be, we noticed that getting to know Blocks and figuring out how to set them up from scratch wasn't as easy as we had hoped. We needed something that would guide people to success.

Enter our brand-new theme for Jekyll and Hugo - uBuild \[beta\] (see the live demo here)! This fully-responsive theme comes with 16 design blocks to put together your favorite site. Our norwegian designer made sure it looked stunning but see for yourself.

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

The theme consists of seven sections:

- Navigation Bar
- Hero Section
- Content Feature
- 1-2-3 columns
- Details Section
- Call-To-Action
- Footer

Each section has 1-3 alternatives you can choose from.




## How did we build it

This theme is created to give you a starting point for adding builder functionalities to your own site or just take it and add your own components to it.

A regular Block is simply an `includes` template. We decided to prepend all our block filenames with `block-`. The name for our `text-1` Block is therefore `block-text-1.html` and the code for our `text-1` Block looks like this.

```
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
```

{{% tip %}}
Note that you can use any variable but we're using `sections` for all our parameters to make sure that we're only using the specific part of our Front Matter set for this specific Block.
{{% /tip %}}

The way Blocks work are through the power of Front Matter. Basically we will loop over an array in our Front Matter and tell our template to include a Block if it is mentioned.

Let's include the above Block in our Front Matter!

```
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
```

Apart from a title and some other metadata we point to a `layout` called `blocks`, which we are going to create in the next step, and it has an array called `page_sections`. This is where we added our Block. The only required fields for Blocks are `template`, which is the name of the block used inside your content manager, for our purposes this is Forestry, and `block`, which is the filename of the Block. Since we also included two variables we need to add those to the Front Matter as well. 

{{% tip %}}
Most of the time the values for `template` and `block` will identical but if a user changes the name of the Block in the content manager we need to make sure that this won't break our set up that's why we need the `block` value as well.
{{% /tip %}}

In the next step we create a file called `blocks` inside our `_layouts` directory, which is going to loop over our Front Matter array, `page_sections`.

```
{% include head.html %}
{% for section in page.page_sections %}
{% include block-{{ section.block }}.html %}
{% endfor %}
{% include footer.html %}
```

That's it! Now any Block can be added simply using Front Matter.

## Blocks + Forestry

Blocks can be inserted and customized using Front Matter. Forestry manages Front Matter through [Front Matter Templates](https://forestry.io/docs/settings/front-matter-templates/), a powerful tool that ultimately makes it possible to manage Blocks through Forestry.

{{% tip %}}
Since uBuild is already set up for Forestry all you need to do is to click on [the button](#import-ubuild-theme-button) at the top of this page and import the theme into your Forestry dashboard to get started.
{{% /tip %}}

Once the layout and styling for a Block is created it can be added and customized in Forestry. You simply need to create a Front Matter Template for each Block and set the `is Partial` toggle to true.

For our `text-1` Block this would look something like this.
 
![](/uploads/2018/06/text-1-block-settings.png)

{{% tip %}}
Front Matter Templates can also be set in `.yml` files inside the `.forestry.io` directory.
{{% /tip %}}




## Future

We have big plans for Blocks!

An open-source theme is a great start but we understand that won't fulfill all your needs. We'd like to build an entire Blocks suite from which you can pick and choose as you desire. So as we proceed with our exploration of this tool we're going to add to it and to do that we'd love to have your [feedback and contributions]().

Anything that could be assembled with pre-defined code blocks can be build with Blocks. We'd love to share with the community what you built using Forestry Blocks. Just write us in the comments, slack or tag us on twitter.