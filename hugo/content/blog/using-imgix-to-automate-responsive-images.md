---
title: Using IMGIX to Automate Responsive Images
date: 2017-07-31 17:57:26 +0000
Categories: []
author:
- bio: CEO and Co-founder of <a href='https://forestry.io' title='Forestry.io CMS'>Forestry.io</a>.
    Web developer, recovering freelancer.
  img: "/images/Scott_Gallant.jpg"
  name: Scott Gallant
  twitter: https://twitter.com/scottgallant
banner: ''
description: ''
excerpt: ''
show_author: true
show_comments: true
show_signup: true
suggested:
- link: ''
  title: ''
- link: ''
  title: ''
- link: ''
  title: ''
tags: []
twitter_card: ''
hidden: default value
link: ''
draft: true

---
## Using IMGIX to Automate Responsive Images
Last week we published an introductory guide to using IMGIX with Hugo and Jekyll. If you haven’t read that article yet, please start there!

In the last article, we covered how to set up IMGIX to serve your images, and then how to integrate IMGIX with your Hugo or Jekyll website to serve automatically optimized images.

In this article, we’re going to dig into the other half of image optimization: responsive images.

## Why Responsive Images?
In a world with responsive websites that serve devices of all shapes and sizes, a single image doesn’t do the job.

<img src="https://forestry-example.imgix.net/images/imgix-sample.jpg?w=2000" srcset="https://forestry-example.imgix.net/images/imgix-sample.jpg?w=495 495w, https://forestry-example.imgix.net/images/imgix-sample.jpg?w=640 640w, https://forestry-example.imgix.net/images/imgix-sample.jpg?w=990 990w, https://forestry-example.imgix.net/images/imgix-sample.jpg?w=1280 1280w, https://forestry-example.imgix.net/images/imgix-sample.jpg?w=1485 1485w, https://forestry-example.imgix.net/images/imgix-sample.jpg?w=1920 1920w" sizes="(min-width: 35.5em) 640px, 100vw
     alt="Sample image">

Take for example the following photo. The largest version of this image, used for high-pixel-density displays like Apple’s Retina Displays, is 1920px wide.

For small devices, like the HTC Tattoo with a 240x320px screen, this image is simply overkill.

In fact, it’s estimated that [72% of image bytes served up by responsive pages are wasted](https://timkadlec.com/2013/06/why-we-need-responsive-images/)!

So how do you make sure you’re always sending the best possible image for the situation?

## Introducing the Srcset Attribute
The `srcset` attribute allows you to provide a set of images that the browser can choose from. You provide a comma separated list of values, that the user agent can use to determine which image to display depending on the device.

You provide two parameters for each image:

- The path to the image
- The [pixel density](https://en.wikipedia.org/wiki/Pixel_density) *or* width of the image.

To provide pixel density, you add a `x` to the density number. The image defined in the `src attribute` is considered the default image, as well as the `1x` image.

```
<img src="image1x.png"
     srcset="image2x.png 2x,
             image3x.png 3x">
```

The other option is the width parameter, which tells the browser the actual width of each image before they are served, allowing the browser to pick the smallest image possible. You provide the actual width of the image, and add a `w`.

```
<img src="image320w.png"
     srcset="image640w.png 640w, 
             image960w.png 960w">
```

The width parameter takes any values, 

The width parameter requires the usage of the `sizes` attribute.

## Introducing the Sizes Attribute
The `sizes` attribute was introduced to help solve the problem of responsive layouts. 

Optimizing responsive images by pixel density doesn’t optimize for different device widths. 

With responsive layouts, this presents a problem where you may be serving an image whose dimensions are 3x larger than it needs to be.

`Sizes` allow you to define a comma separated list of media conditions and lengths. These allow the user agent to select the best image based on widths defined in the `srcset`.

#### Media Conditions
The first value in each comma-seperated item is called a media condition. They're similar to media queries, but have a limited syntax. 

You can't do conditions like `@media screen`, but you can do conditions like `(max-width: 1024px)` or `(min-width: 1024px)`.

#### Lengths
The second value in each comma-seperated item are lengths. Lengths specify the maximum width that can be used from the `srcset`.

The viewwidth unit `1vw` is commonly used for length, but almost all units are supported except for percentages.

#### An Example

```
<img src="image320w.png"
     srcset="image640w.png 640w, 
             image960w.png 960w"
     sizes="(max-width: 480px) 100vw,
            (max-width: 900px) 33vw,
            320px>
```

Let’s break this example down into steps:

1. **(max-width: 480px) 100vw** — If the viewport is 480 pixels wide or smaller, the image should be 100% of the viewport width.
2. **(max-width: 900px) 33vw** — This rule takes effect *after* the first rule, so this effectively says if the viewport is 481 pixels wide to 900 pixels, the image should be no wider than 33% of the viewport.
3. **640px** — This is the default value, for when no media conditions match. So in this case when the viewport is 901 pixels or wider, images should be no wider than 640px.

This is the best way to handle responsive images, with a graceful fallback for browsers that don’t support `srcset` or `sizes` using the `src` attribute.

## Putting It All Together
Now that you have a basic understanding of `srcset` and `sizes`, I’ll take you through their proper setup using IMGIX.

Depending on the image you’re optimizing, your breakpoints and sizes will be different. Deciding on what breakpoints to use and what image sizes to serve is a [hot topic].

For the purposes of this tutorial, I’ll generate optimized images for a simple, one column image layout.

TK: codepen

- (min-width: 1200px) - Large screens
- (min-width: 1024px) - Small Screens
- (min-width: 768px) - Tablets
- Default — Mobile Phones

From the breakpoints, I can discover the image dimensions I’ll need. One discovers this by measuring the max-width of an image at the end of the breakpoint.

TK: gif

In this case: 
- (min-width: 64em) 640px
- (min-width: 48em) 640px
- (min-width: 35.5em) 640px
- Less than 35.5em, 100% width

So in this scenario, I only have two possible sizes for the images: 640px and 495px. So the `img` tag will look something like this:

'' <img src="/images/mountain.png?w=495",
'' 	 srcset="/images/mountain.png?w=495 495w,
'' 		       /images/mountain.png?w=640 640w"
'' 	 sizes="(min-width: 35.5em) 640px,
'' 		     100vw">

Now, the last hurdle is display density. As I mentioned above, you *can’t* mix density and width in the same `srcset`. That’s okay, however, because we can reproduce density with some simple math.

We just need to multiply our current image widths by 2 and by 3 to get our 2x and 3x sizes. Let’s see what that looks like:

'' <img src="mountain.png?w=495",
'' 	 srcset="mountain.png?w=495 495w,
'' 		       mountain.png?w=640 640w,
'' 		       mountain.png?w=990 990w,
'' 		       mountain.png?w=1280 1280w,
'' 		       mountain.png?w=1485 1485w,
'' 		       mountain.png?w=1920 1920w"
'' 	 sizes="(min-width: 35.5em) 640px,
'' 		     100vw">

So what we’re left with is an image tag that says:
- 

## Integrating with Jekyll & Hugo
So, going back to our example in the first part of this tutorial, we have a page with the front matter as follows:

'' ---
'' title: “Example Page”
'' date: 2017-07-01
'' hero_image: “/images/mountains.jpg”
'' ---


### Setting Up Jekyll



### Setting Up Hugo

### Sources
- [CloudFour: Responsive Images 101]
- 
