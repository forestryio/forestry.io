---
title: Cloudinary Integration, Data File Templates and Other Features
description: ''
date: 2018-05-28 15:12:40 -1100
authors:
- Sebastian Engels
publishdate: 2018-05-28 16:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories:
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
## Image Transformation and Responsive Image Delivery

Today we're proud to announce an easy way to optimize your image delivery with a Cloudinary integration for Forestry.

As a developer you can now use the super fast Cloudinary CDN and store your assets outside your repository. While at the same time your editors can use Forestry's Media Library and Editor to upload and manage Cloudinary assets without even knowing it.

{{% tip %}}

It's as simple as adding your cloud name, API key and secret to your site's settings to get started. You can set up Cloudinary + Forestry in less than 3 Minutes: [Create a Cloudinary Account](https://cloudinary.com/) and follow along with our [docs](https://forestry.io/docs/media/cloudinary/).
{{% /tip %}}

This integration makes it possible to efficiently store, organize and deliver images while keeping the editing experience simple and clean.

Non-developers can continue to use our simple drag and drop feature in Forestry without having to juggle assets across different accounts and multiple providers.

![](/uploads/2018/05/drag_drop.png)

The Forestry Media Library and Cloudinary are always in sync. All assets on Cloudinary can be accessed through the Forestry Media Library and vice versa.

![](/uploads/2018/05/forestry_cloudinary.png)

Once you connect Cloudinary to your account, Forestry inserts the `image_name.extension` without any path components into your Front Matter. Instead of supporting a subset of Cloudinary’s features in our UI, this gives you the maximum amount of flexibility to use Cloudinary features in your templates.

Here are a few examples of image manipulation via Cloudinary URLs: <p data-height="400" data-theme-id="light" data-slug-hash="YvzVXX" data-default-tab="html,result" data-user="germoe" data-embed-version="2" data-pen-title="YvzVXX" class="codepen" html-proofer-ignore>See the Pen <a href="https://codepen.io/germoe/pen/YvzVXX/">Cloudinary Example</a> on <a href="https://codepen.io">CodePen</a>.</p><script async src="https://static.codepen.io/assets/embed/ei.js"></script><p>

{{% tip %}}
Check out our [docs](https://forestry.io/docs/media/cloudinary/#using-cloudinary-images) for tips and tricks on [how to handle Cloudinary URLs](https://forestry.io/docs/media/cloudinary/#using-cloudinary-images) in templates.
{{% /tip %}}

# Other New Features

We also rolled out a few other features that might be interesting to you.

## Front Matter Templates for Data Files

This update allows you to [use and change templates for data files](https://forestry.io/docs/editing/data-files/#customizing-fields).

![](/uploads/2018/05/template-for-data-files.png)

Until now you weren't able to use templates with data files and anytime the format of the data files changed a developer needed to go into the code base.

From now on you can delegate those updating tasks and build your data file structure the way it suits you best.

## Color Picker

This new field allows your users to easily change colors of a Front Matter Field from within Forestry.

![](/uploads/2018/05/color_picker.png)

You can add values through HEX, RGB or pick a color from the selector.

## OAuth Login for Remote Admin

The remote admin now also works for OAuth logins.

![](/uploads/2018/05/oauth-admin.png)

You can now login with your favorite Git-provider.

For a full list of changes please check out our [changelog](https://forestry.io/docs/changelog/2018-5-28-changelog/)