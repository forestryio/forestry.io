---
title: Cloudinary Integration, Data File Templates and more
description: ''
date: 2018-05-28 15:12:40 -1100
authors: []
publishdate: 2018-05-28 16:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
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
## Image Transformation and Responsive Image Delivery

Today we're proud to announce an easy way to optimize your image delivery with Cloudinary and Forestry.

Until now you would be able to use Cloudinary on sites that were managed by Forestry (e.g. this site) but the implementation was anything but straightforward and a lot of the simplicity of using Cloudinary would get lost.

As a developer you can now use the super fast Cloudinary CDN the way you would with any other static site. At the same time your editors can use Forestry's Media Library and Editor to use and upload Cloudinary assets.

{{% tip %}}

You can set up Cloudinary + Forestry in less than 3 Minutes: Create a Cloudinary Account and follow along with our [docs](https://forestry.io/docs/media/cloudinary/).

{{% /tip %}}

Once you connect Cloudinary to your account, Forestry is giving you full access to Cloudinary features in your templates, only inserting the `image_name.extension` without any path components into your Front Matter.

Instead of supporting a subset of Cloudinary’s features in our UI, we made it easy for developers to make use of the vast array in their site templates. Here are a few examples of image manipulation through Cloudinary URLs:
<div style="width:100%;min-height:150px;"><div id="img-1" onclick="showURL('http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,h_220/v1527559425/uploads/2018/05/29/girl.jpg', 'cloudinary-url')" style="display:inline-block;"><img src="http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,h_220/v1527559425/uploads/2018/05/29/girl.jpg"/></div> <div id="img-2" onclick="showURL('http://res.cloudinary.com/dljtb0dbc/image/upload/c_crop,g_face/h_220/v1527559425/uploads/2018/05/29/girl.jpg', 'cloudinary-url')" style="display:inline-block;"> <img src="http://res.cloudinary.com/dljtb0dbc/image/upload/c_crop,g_face/h_220/v1527559425/uploads/2018/05/29/girl.jpg"/></div> <div id="img-3" onclick="showURL('http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,e_art:hokusai,h_220/v1527559425/uploads/2018/05/29/girl.jpg', 'cloudinary-url')" style="display:inline-block;"> <img src="http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,e_art:hokusai,h_220/v1527559425/uploads/2018/05/29/girl.jpg"/></div> <div id="img-4" onclick="showURL('http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,h_220,r_30/v1527559425/uploads/2018/05/29/girl.jpg', 'cloudinary-url')" style="display:inline-block;"><img src="http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,h_220,r_30/v1527559425/uploads/2018/05/29/girl.jpg"/></div></div>

<p id="cloudinary-url" style="word-break:break-all;"></p> <script type="text/javascript">function showURL(url, target) {document.getElementById(target).innerHTML = url}</script> _Click on the images to check their_ `srcset` _-attribute._

This integration makes it possible to efficiently store, organize and deliver images while keeping the editing experience simple and clean. Non-developers can continue to use our simple drag and drop feature without having to juggle assets across different accounts and multiple providers.

<img src="http://res.cloudinary.com/dljtb0dbc/image/upload/v1527561785/drag_drop.gif" />

The Forestry Media Library and Cloudinary are always in sync. Every resource that you can find on Cloudinary can be accessed through the Forestry Media Library.

{{% tip %}}
Check out our docs for tips and tricks on how to best handle Cloudinary URLs in templates.
{{% /tip %}}

# Other New Features

We also rolled out a few other feature that might be interesting to you.

## Front Matter Templates for Data Files

Until now you weren't able to make use of Data files in the same way you could use with other content on Forestry. That didn't seem right.

![](/uploads/2018/05/template-for-data-files.png)

This update allows you to use templates for data files.

## Color Picker

This new field allows your users to easily change colors of a Front Matter Field from within Forestry.

![](/uploads/2018/05/color-picker-field.png)

You can add values through HEX, RGB or pick a color from the selector.

![](/uploads/2018/05/Screen Shot 2018-05-29 at 8.36.03 AM.png)

## OAuth Login for Admin

If you're using the remote admin capability you'll be glad to hear that

![](/uploads/2018/05/oauth-admin.png)

For a full list of changes please check out our [changelog]()