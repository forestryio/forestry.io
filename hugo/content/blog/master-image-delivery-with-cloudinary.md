---
title: Mastering Image Delivery With Cloudinary
description: ''
date: 2018-06-01 05:00:49 -1100
authors:
- DJ Walker
publishdate: 2018-05-31 17:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
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
draft: true

---
At what point do you stop trying to make your website faster?

Sure, if you have a static site with well-optimized assets, your site is probably fast enough. I’m not going to tell you that your users will abandon you if your site takes half a second to load. But if you could make it faster, you’d still want to do it.

In this article, we will look at using Cloudinary to take control of image delivery on your static site. Cloudinary is an easy to use, all-in-one solution for storing, serving, and transforming your media files.


## Keep Your Data Close

Data moves fast, but nothing can move faster than the speed of light. The location of a server matters: the farther away a server is from you, the longer you have to wait before you get a response from that server. When the server is relatively close to you, this communication feels nearly instantaneous. However, if the server is halfway across the planet, this latency starts to matter. **This is a physical limitation:** No matter how much you increase your bandwidth, it will not reduce your latency.

A **Content Delivery Network**, or **CDN**, gets around this speed limit by replicating a resource to a network of edge nodes spread out across the world. The idea is, wherever your users are located, their traffic will be directed to the nearest edge node to download your content.

Cloudinary’s CDN solves our latency problem, but there’s more we can do to optimize our asset delivery.

## Serving Responsive Images

Applying a responsive strategy for displaying images means more than just adding `max-width: 100%;` to your image tags. You don't want to display an image that is much larger than the area it occupies, otherwise you’re just wasting bits.

One way to provide responsive images is to use the `srcset` attribute with your image tags. This allows you to define scaled down versions of the original resource to be delivered when the image is displaying inside of a smaller area, thus reducing the size of the file.

### Handling Image Transformation

Of course, in order to provide these scaled down images, we have to create them. The most basic way to do this would be to create the scaled-down version yourself. The advantage of this option is that you can find an optimal way to tweak and crop your images as you downsize them, but it is very time-consuming. We can do better!

Another option is to transform the images at build time, using something like a gulp task. With this approach, we define the image sizes we want ahead of time, and have our build process generate all the resized images we need. This solution is not perfect: as we add more images, our builds will take longer. We’re also being imprecise, as it’s unlikely all of our images will need to be resized to all of those sizes. It depends on where the image is used on the site.

What we _really_ need is something that can:

1. resize images programmatically,
2. only resize images that we know need to be resized, and
3. only resize _those_ images into the sizes that we know we’ll need

This problem appears intimidating at first, but it's really not that bad. Consider a zen approach: **only create a resized image once it is requested.** I believe that the best way to accomplish this is to have a CDN that can perform these transformations upon request, and cache the results for subsequent requests. The clever people at Cloudinary clearly feel the same way, because this is what Cloudinary does!

## Programmatic Image Transformations With Cloudinary

Cloudinary has a rich image transformation API, and offers SDKs for a variety of languages and frameworks. There is also a language-agnostic API that we will be using for our examples here: by adding special paths into our image URL, we can define how we want our images to be transformed.

To demonstrate how to do this, I’ve taken the demo site we created for our [Snipcart tutorial](https://forestry.io/blog/snipcart-brings-ecommerce-static-site/#/) and moved the product images to Cloudinary using Forestry’s new [media library integration for Cloudinary](https://forestry.io/blog/cloudinary-integration/).

### Building Cloudinary URLs

When Forestry saves a Cloudinary URL to front matter, it only saves the the file path relative to your cloud root. This is a deliberate decision to make it easy to insert image transformations in the URL path.

For our demo site, I’ve added the base cloudinary URL to our [site params](https://github.com/dwalkr/snipcart-hugo-demo/blob/b45da7ebbe28d4bf95d889a817de150be40be80c/site/config.toml#L44) as `cloudinary_base_url`. We can then reference this in our templates and glue it together with the front matter path to get the full URL to the image. A simple example would look like this:

    <img src="{{ $.Site.Params.cloudinary_base_url }}{{ .Params.image }}" />

To resize this image to a width of 500px, we just have to insert another path in between the two variables:

    <img src="{{ $.Site.Params.cloudinary_base_url }}/w_500{{ .Params.image }}" />

Using this strategy, it is easy to perform all kinds of image transformations in your templates. You can even stack transformations by adding multiple paths to a single URL. Check out [Cloudinary’s image transformation docs](https://cloudinary.com/documentation/image_transformations) to see all of the different things you can do.

### Resize Images to Create Thumbnails

One way we can improve this project is by automatically generating thumbnails for the shopping cart page. Snipcart requires an image no larger than 50x50 pixels for the cart thumbnail. In the first version of this demo site, we required users to create their own 50x50 thumbnail for the cart image and upload it to a second front matter field. Automatically generating this image will save our content editors a lot of time.

To change this, we just have to replace the image in the `data-item-image` parameter in `layouts/partials/buy-button.html`:

    {{ with .Params.image }}
        data-item-image="{{ $.Site.Params.cloudinary_base_url }}/w_50,h_50,c_fill{{ . }}"
    {{ end }}

In our transformation, we use `w_50` and `h_50` to specify the desired width and height. `c_fill` tells Cloudinary to crop the image to prevent it from being distorted by the resize, and to crop it in a way that fills up the 50x50 square.

### Use _srcset_ to Deliver Responsive Images

The next thing we want to do is provide scaled-down images at smaller resolutions. We can do that using the `srcset` image attribute. `srcset` works by specifying a set of images and leaving it up to the browser to download the appropriately-sized one. This is an easy way to serve smaller images on smaller devices that wouldn't be able to display the full resolution, and also for ensuring that computers with High-DPI displays can access high-resolution images.

To keep our code organized, I've decided to move these responsive image tags into partials. For the image in the single template (`layouts/products/single.html`,) I've created a partial at `layouts/partials/images/single-product.html`. We will call this partial in our single template and pass it the image, and also grab our base URL from the site settings:

    <div class="product__image column is-half">
            {{ partial "images/single-product" (dict "image" . "baseURL" $.Site.Params.cloudinary_base_url) }}
    </div>

In our partial, I've specified four image sizes for different screens:

    <img 
    srcset="
    {{ .baseURL }}/w_500{{ .image }} 500w,
    {{ .baseURL }}/w_710{{ .image }} 710w,
    {{ .baseURL }}/w_1000{{ .image }} 1000w,
    {{ .baseURL }}/w_1420{{ .image }} 1420w"
    src="{{ .baseURL }}/w_500{{ .image }}"
     />

Devices that don't support `srcset` will fall back to the 500px version specified in the `src` tag.

That's all it takes to add responsive images with Cloudinary!

### Crop Images For Beautiful Grids

Cloudinary's image transformations give us the ability to do more than just scale images down, however. Similar to what we did with the cart image, we can crop images to fit them to a certain aspect ratio.

Our product list view uses a flexbox-based grid. Effort was made to keep our grid lines strong, but there is room for improvement here. The images used in our product grid have different **aspect ratios**, so when they are resized to the same width, they end up with different heights.

![](/uploads/2018/05/product-list-uncropped.png)

This is easy to solve with Cloudinary's **Aspect Ratio Cropping**. Instead of specifying a width and a height, we can just tell it to crop to a certain aspect ratio.

Let's start by updating our list template to use a partial for the image tag, just like we did in our single template. The product list template is already using the `list-product.html` partial to render each product in list view, so open up `layouts/partials/list-product.html` and update the product image tag to the following:

    <div class="product__image">
        {{ partial "images/list-product" (dict "image" . "baseURL" $.Site.Params.cloudinary_base_url) }}
    </div>

Then, in `layouts/partials/images/list-product.html`, we can add the following:

    <img src="{{ .baseURL }}/ar_4:3,c_fill/{{ .image }}" />

The `ar_4:3` parameter tells Cloudinary to crop our image to a 4:3 aspect ratio, and we're using `c_fill` again to ensure we fill the full area of the image. This will give us nice neat lines in our grid.

![](/uploads/2018/05/product-list-cropped.png)

We can **stack this transformation** with a resizing rule for responsive delivery of these cropped images:

    <img 
    srcset="
    {{ .baseURL }}/ar_4:3,c_fill/w_500{{ .image }} 500w,
    {{ .baseURL }}/ar_4:3,c_fill/w_710{{ .image }} 710w,
    {{ .baseURL }}/ar_4:3,c_fill/w_1000{{ .image }} 1000w,
    {{ .baseURL }}/ar_4:3,c_fill/w_1420{{ .image }} 1420w"
    src="{{ .baseURL }}/ar_4:3,c_fill/w_500{{ .image }}"
     />

### Smart Cropping To Preserve Areas of Interest

We have one more trick up our sleeve for this product layout. Sometimes, cropping an image like this might remove parts of the image that you wanted to keep. Cloudinary uses the [gravity](https://cloudinary.com/documentation/image_transformations#control_gravity) parameter to control which part of the image will serve as the focus when it is cropped. One of the more interesting options for the gravity parameter is `auto`, which will enable [automatic cropping](https://cloudinary.com/documentation/image_transformations#automatic_cropping), where Cloudinary attempts to find the regions of interest in the image and crop around them.

We can add automatic cropping to our original aspect ratio crop by adding the parameter into the URL:

    <img 
    srcset="
    {{ .baseURL }}/ar_4:3,c_fill,g_auto/w_500{{ .image }} 500w,
    {{ .baseURL }}/ar_4:3,c_fill,g_auto/w_710{{ .image }} 710w,
    {{ .baseURL }}/ar_4:3,c_fill,g_auto/w_1000{{ .image }} 1000w,
    {{ .baseURL }}/ar_4:3,c_fill,g_auto/w_1420{{ .image }} 1420w"
    src="{{ .baseURL }}/ar_4:3,c_fill,g_auto/w_500{{ .image }}"
     />

Notice that the boots in the first image have now shifted toward the center:

![](/uploads/2018/05/product-list-smartcropped.png)

## Next Steps

Our example shows a practical application of some simple Cloudinary transformations, but Cloudinary has an incredible array of [transformation options](https://cloudinary.com/documentation/image_transformations) such as face detection, artistic filters, image overlays, and animation support. Their wide array of transformations and the ability to stack transformations on top of each other makes Cloudinary a powerful image manipulation engine!

You may also be interested in [automating your responsive image sizing](https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_javascript) using Cloudinary's JavaScript library to easily add responsive images to an existing site.

When you're ready to connect your Forestry media library to Cloudinary, check out our [Cloudinary documentation](https://forestry.io/docs/media/cloudinary/) to get started.