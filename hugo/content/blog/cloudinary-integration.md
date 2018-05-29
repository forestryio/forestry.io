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

Static sites are fast and the delivery of resources shouldn’t slow it down. Now it is possible to use the Cloudinary CDN and have non-developers use Forestry to upload new images and add them to their content.

{{% tip %}}

You can set up Cloudinary + Forestry in less than 3 Minutes: Create a Cloudinary Account and follow along with our [docs](https://forestry.io/docs/media/cloudinary/).

{{% /tip %}}

Instead of supporting a subset of Cloudinary’s features in our UI, we made it easy for developers to make use of the vast array in the site templates. Here are a few examples using Cloudinary URLs: <img src="http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,h_300/v1527559425/uploads/2018/05/29/girl.jpg" onclick="() => showURL()"/>
<img src="http://res.cloudinary.com/dljtb0dbc/image/upload/c_crop,g_face/h_300/v1527559425/uploads/2018/05/29/girl.jpg" onclick="() => showURL()"/>
<img src="http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,e_art:hokusai,h_300/v1527559425/uploads/2018/05/29/girl.jpg" onclick="showURL()"/>
<img src="http://res.cloudinary.com/dljtb0dbc/image/upload/c_scale,h_300,r_30/v1527559425/uploads/2018/05/29/girl.jpg" onclick="function showURL()"/>

<div><p id="cloudinary-url"></p></div>
<script type="text/javascript">function showURL() {var paragraph = document.getElementById('cloudinary-url').innerHTML = "This just got added";}</script>
_Use Inspect and check the_ `_src_`_-attribute to see the Cloudinary URLs._

This integration makes it possible to efficiently store, organize and deliver images while keeping the editing experience simple and clean. Non-developers can continue to upload and use images through Forestry’s Media Library and Editor.

<img src="http://res.cloudinary.com/dljtb0dbc/image/upload/v1527561785/drag_drop.gif" />

The Forestry Media Library and Cloudinary are always in sync. Every resource that you can find on Cloudinary can be accessed through the Forestry Media Library.

Once you connect Cloudinary to your account, Forestry is giving you full access to Cloudinary features in your Templates by inserting the `image_name.extension` only.

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