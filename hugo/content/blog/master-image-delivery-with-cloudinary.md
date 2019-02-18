---
title: Mastering Image Delivery With Cloudinary
description: ''
date: 2018-06-01 05:00:49 -1100
authors:
- DJ Walker
publishdate: 2018-06-01 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/05/cloud.png"
categories:
- Frontend-Friday
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
Applying a responsive strategy for displaying images means more than just adding `max-width: 100%;` to your image tags. You don't want to display an image that is much larger than the area it occupies, otherwise you’re just wasting bits. You need to deliver scaled-down versions of these images where appropriate.

A popular way to generate these scaled-down assets is to automatically resize our images during the build process, using something like a gulp task, but that solution isn't perfect. As we add more images to our site, our builds will take longer, and it’s unlikely that *every* image will need to be available in *every* size. Instead of creating all of the image sizes we need beforehand, why not just **wait and see** which ones we end up needing? With this "zen" approach, **we only create a resized image once it is requested.** 

This would be easy to do if we had an image server that can perform these transformations upon request, and cache the results for subsequent requests. Even better, this image server could actually be a CDN, to deliver resources with low latency. The clever people at [Cloudinary](https://cloudinary.com/) clearly feel the same way, because this is exactly what Cloudinary is!

In this article, I will show you how to use Cloudinary's image transformations with a Hugo site to create responsive image sets. We will also be using Forestry as our static content manager, taking advantage of Forestry's [media library integration for Cloudinary](https://forestry.io/blog/cloudinary-integration/) to easily upload and manage Cloudinary assets.

## Programmatic Image Transformations With Cloudinary

Cloudinary has a rich image transformation API, and offers SDKs for a variety of languages and frameworks. You can also create image transformations without an SDK just by adding special paths into the image URL.

To demonstrate how to do this, I’ve taken the [demo site](https://github.com/dwalkr/snipcart-hugo-demo) we created for our [Snipcart tutorial](https://forestry.io/blog/snipcart-brings-ecommerce-static-site/#/) and moved the product images to Cloudinary using Forestry’s Cloudinary integration.

{{% tip %}}
Check out [Forestry's Cloudinary docs](https://forestry.io/docs/media/cloudinary/) for information on getting started with Cloudinary in Forestry's content manager.
{{% /tip %}}

### Building Cloudinary URLs

When Forestry saves a Cloudinary image to front matter, it only saves a part of the file URL, relative to your base Cloudinary URL. This is a deliberate decision to make it easy to insert image transformations in the URL path, in between your base URL and the file path.

For our demo site, I’ve added our base cloudinary URL to the [site params](https://github.com/dwalkr/snipcart-hugo-demo/blob/b45da7ebbe28d4bf95d889a817de150be40be80c/site/config.toml#L44) as `cloudinary_base_url`. We can then reference this in our templates and glue it together with the front matter path to get the full URL to the image. A simple example would look like this:

```go-html-template
<img src="{{ $.Site.Params.cloudinary_base_url }}{{ .Params.image }}" />
```

To perform a transformation on this image, we just have to insert the transformation parameters in a new URL path between these two variables. Let's say we want to resize this image to a width of 500px. All we have to do is insert `w_500` in our URL path:

```go-html-template
<img src="{{ $.Site.Params.cloudinary_base_url }}/w_500{{ .Params.image }}" />
```

Using this strategy, it is easy to perform all kinds of image transformations in your templates. You can even stack transformations by adding multiple paths to a single URL. For example, let's say we wanted to resize the image and then flip it horizontally with the `hflip` option:

```go-html-template
<img src="{{ $.Site.Params.cloudinary_base_url }}/w_500/a_hflip{{ .Params.image }}" />
```

You can stack as many of these transformations as you want to achieve complex results.

### Resize Images to Create Thumbnails

One way we can improve this project is by automatically generating thumbnails for the shopping cart page. Snipcart requires an image no larger than 50x50 pixels for the cart thumbnail. In the first version of this demo site, we required users to create their own 50x50 thumbnail for the cart image and upload it to a second front matter field. Automatically generating this image will save our content editors a lot of time.

To change this, we just have to replace the image in the `data-item-image` parameter in `layouts/partials/buy-button.html`:

```go-html-template
{{ with .Params.image }}
    data-item-image="{{ $.Site.Params.cloudinary_base_url }}/w_50,h_50,c_fill{{ . }}"
{{ end }}
```

In our transformation, we use `w_50` and `h_50` to specify the desired width and height. `c_fill` tells Cloudinary to crop the image to prevent it from being distorted by the resize, and to crop it in a way that fills up the 50x50 square.

### Use _srcset_ to Deliver Responsive Images

The next thing we want to do is provide scaled-down images at smaller resolutions. We can do that using the `srcset` image attribute. `srcset` works by specifying a set of images and leaving it up to the browser to download the appropriately-sized one. This is an easy way to serve smaller images on smaller devices that wouldn't be able to display the full resolution, and also for ensuring that computers with High-DPI displays can access high-resolution images.

To keep our code organized, I've decided to move these responsive image tags into partials. For the image in the single template (`layouts/products/single.html`,) I've created a partial at `layouts/partials/images/single-product.html`. We will call this partial in our single template and pass it the image, and also grab our base URL from the site settings:

```go-html-template
<div class="product__image column is-half">
        {{ partial "images/single-product" (dict "image" . "baseURL" $.Site.Params.cloudinary_base_url) }}
</div>
```

In our partial, I've specified four image sizes for different screens:

```go-html-template
<img 
srcset="
{{ .baseURL }}/w_500{{ .image }} 500w,
{{ .baseURL }}/w_710{{ .image }} 710w,
{{ .baseURL }}/w_1000{{ .image }} 1000w,
{{ .baseURL }}/w_1420{{ .image }} 1420w"
src="{{ .baseURL }}/w_500{{ .image }}"
    />
```

Browsers that don't support `srcset` will fall back to the 500px version specified in the `src` tag.

That's all it takes to add responsive images with Cloudinary!

### Crop Images For Beautiful Grids

Cloudinary's image transformations give us the ability to do more than just scale images down, however. Similar to what we did with the cart image, we can crop images to fit them to a certain aspect ratio.

Our product list view uses a flexbox-based grid. Effort was made to keep our grid lines strong, but there is room for improvement here. The images used in our product grid have different **aspect ratios**, so when they are resized to the same width, they end up with different heights.

![](/uploads/2018/05/product-list-uncropped.png)

This is easy to solve with Cloudinary's [aspect ratio cropping](https://cloudinary.com/documentation/image_transformations#aspect_ratio_based_cropping). Instead of specifying a width and a height, we can just tell it to crop to a certain aspect ratio.

Let's start by updating our list template to use a partial for the image tag, just like we did in our single template. The product list template is already using the `list-product.html` partial to render each product in list view, so open up `layouts/partials/list-product.html` and update the product image tag to the following:

```go-html-template
<div class="product__image">
    {{ partial "images/list-product" (dict "image" . "baseURL" $.Site.Params.cloudinary_base_url) }}
</div>
```

Then, in `layouts/partials/images/list-product.html`, we can add the following:

```go-html-template
<img src="{{ .baseURL }}/ar_4:3,c_fill/{{ .image }}" />
```

The `ar_4:3` parameter tells Cloudinary to crop our image to a 4:3 aspect ratio, and we're using `c_fill` again to ensure we fill the full area of the image. This will give us nice neat lines in our grid.

![](/uploads/2018/05/product-list-cropped.png)

We can stack this transformation with a resizing rule for responsive delivery of these cropped images:

```go-html-template
<img 
srcset="
{{ .baseURL }}/ar_4:3,c_fill/w_500{{ .image }} 500w,
{{ .baseURL }}/ar_4:3,c_fill/w_710{{ .image }} 710w,
{{ .baseURL }}/ar_4:3,c_fill/w_1000{{ .image }} 1000w,
{{ .baseURL }}/ar_4:3,c_fill/w_1420{{ .image }} 1420w"
src="{{ .baseURL }}/ar_4:3,c_fill/w_500{{ .image }}"
    />
```

### Smart Cropping To Preserve Areas of Interest

We have one more trick up our sleeve for this product layout. Sometimes, cropping an image like this might remove parts of the image that you wanted to keep. Cloudinary uses the [gravity](https://cloudinary.com/documentation/image_transformations#control_gravity) parameter to control which part of the image will serve as the focus when it is cropped. One of the more interesting options for the gravity parameter is `auto`, which will enable [automatic cropping](https://cloudinary.com/documentation/image_transformations#automatic_cropping), where Cloudinary attempts to find the regions of interest in the image and crop around them.

We can add automatic cropping to our original aspect ratio crop by adding the parameter into the URL:

```go-html-template
<img 
srcset="
{{ .baseURL }}/ar_4:3,c_fill,g_auto/w_500{{ .image }} 500w,
{{ .baseURL }}/ar_4:3,c_fill,g_auto/w_710{{ .image }} 710w,
{{ .baseURL }}/ar_4:3,c_fill,g_auto/w_1000{{ .image }} 1000w,
{{ .baseURL }}/ar_4:3,c_fill,g_auto/w_1420{{ .image }} 1420w"
src="{{ .baseURL }}/ar_4:3,c_fill,g_auto/w_500{{ .image }}"
    />
```

Notice that the boots in the first image have now shifted toward the center:

![](/uploads/2018/05/product-list-smartcropped.png)

## Next Steps

Our example shows a practical application of some simple Cloudinary transformations, but Cloudinary has an incredible array of [transformation options](https://cloudinary.com/documentation/image_transformations) such as face detection, artistic filters, image overlays, and animation support. Their wide array of transformations and the ability to stack transformations on top of each other makes Cloudinary a powerful image manipulation engine!

You may also be interested in [automating your responsive image sizing](https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_javascript) using Cloudinary's JavaScript library to easily add responsive images to an existing site.

When you're ready to connect your Forestry media library to Cloudinary, check out our [Cloudinary documentation](https://forestry.io/docs/media/cloudinary/) to get started!

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll look at <a href="https://forestry.io/blog/for-static-sites-theres-no-excuse-not-to-use-a-cdn/"> the advantages of hosting your static site on a CDN.</a> </p><p><strong>Last week:</strong> We added some enhancements to our <a href="https://forestry.io/blog/hugo-json-api-part-2/">Hugo JSON API</a>.</p></div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17205725">Discuss on Hacker News</a>
