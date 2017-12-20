---
Categories: []
author:
- bio: CEO and Co-founder of <a href='https://forestry.io' title='Forestry.io CMS'>Forestry.io</a>.
    Web developer, recovering freelancer.
  img: "/images/Scott_Gallant.jpg"
  name: Scott Gallant
  twitter: https://twitter.com/scottgallant
banner: ''
date: 2017-07-31 09:11:14 +0000
description: ''
excerpt: ''
hidden: default value
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
title: Using IMGIX to Optimize Images in Hugo & Jekyll
twitter_card: ''
link: ''
draft: true

---
## Using IMGIX to Optimize Images in Hugo & Jekyll

Optimizing images is no one’s favorite job, whether you’re a designer, developer, or content manager. 

IMGIX is a web service that allows you to resize, crop, and manipulate images on the fly, at very little cost. There are other services that work much like IMGIX, like [Cloudinary](http://cloudinary.com/), or [Amazon Imagizer](https://aws.amazon.com/marketplace/pp/B019YEIK7M/ref=_ptnr_adwords?gclid=EAIaIQobChMI4JG5gYK01QIV0EoNCh0MHQnKEAAYASAAEgKjwPD_BwE).

Without a service like IMGIX, you would have to add additional build processes to resize, crop, and optimize your images, or manually crop and optimize each image yourself.

Having to generate 3 or more different versions of every image on your site, or ensuring they’re all minified probably isn’t at the top of your priority list.

## Why Image Optimization Matters
Optimized images are a necessity for a modern website, both in providing a fast experience, and providing good user experience.

No one likes getting to a page where the image is blurry because of low pixel-density, or takes forever to load because it’s 1920px wide on a device that’s only 320px wide.

Based on data from the [HTTP Archive](http://httparchive.org/interesting.php), nearly 60% of the average page’s size is from images. This means optimizing your images is the easiest performance win you can make.

Image optimization can be done in three ways:

1. Serving the image at the exact size needed *(instead of serving a larger image than is needed)*
2.  Minifying the image to the smallest possible file size.
3. Serving the smallest possible image for a device’s resolution.

## Image Optimization with IMGIX
With IMGIX, you provide a web folder, Amazon S3 bucket, or setup a secure proxy for any URL-accessible image. Then using a single image and URL parameters you can easily get the image at any size, pixel density, with cropping, and much more.

For example:

<img src="https://forestry-example.imgix.net/images/imgix-sample.jpg" alt="Sample 1">

`https://forestry-example.imgix.net/images/imgix-sample.jpg`

<img src="https://forestry-example.imgix.net/images/imgix-sample.jpg?w=200" alt="Sample 2">

`https://forestry-example.imgix.net/images/imgix-sample.jpg?w=200`

You can see here that the same image was served at its default resolution, and at 200px.

## Getting Started with IMGIX
To get started with IMGIX, you have to [sign up for a free account](https://webapp.imgix.com/sign-up). You’ll get $10 of free credit, so you’ll be all set to start testing.

Once you’ve set up your account, you’ll be prompted to set up your first image source. For the purposes of this article, I’m assuming you already have a live Hugo or Jekyll website with a public directory of image assets.

TK: image

Set up your source type as a `Web Folder` and set it to the base path of your image assets. 

For example, if your images are located at `https://yourcompany.com/images/`, set your path to `https://yourcompany.com/`.

Then give your source a subdomain, e.g, `forestry-example.imgix.net`

This source will now allow you to serve the images. The next step is integrating IMGIX with your site.

## How IMGIX Works
Once you have your source set up, you can then start serving your images from it.

Let’s say you stored an image at the following URL:

`https://yourcompany.com/images/imgix-sample.jpg`

If you set base URL of the source to `https://yourcompany.com/`, you can now access that image in the IMGIX source from: 

`https://forestry-example.imgix.com/images/imgix-sample.png`

Now you can use the [IMGIX URL API](https://docs.imgix.com/apis/url) to resize, crop, manipulate and optimize your images on the fly.

For example, if you had a hero image on your site that had a maximum size of 1200px, you could ensure the image served is never wider by adding the `max-w` attribute.

`https://forestry-example.imgix.com/images/imgix-sample.png?max-w=1200`

### Protips

For image optimization, I recommend using `auto=compress,format` URL parameter with IMGIX for instant performance gains.

This will automatically compress your images, strip out unnecessary metadata, and serve it in smaller, modern web formats if the browser supports it.

You can also use the quality parameter (`q=50`) to optimize image quality, which can give you significant performance increases with very little loss in quality.

[See here for a full list of URL parameters](https://docs.imgix.com/apis/url).

## Handling Template Images with IMGIX
The easiest win is optimizing images rendered by your templates with IMGIX.

These images can either be hard coded, pulled in from a page’s front matter, a data file, or your site’s config.

Going back to the hero image example, you could set an image as a front matter field on a page:

```
---
title: “Example Page”
date: 2017-07-01
hero_image: “/images/imgix-sample.jpg”
---
```

To set it up with IMGIX, you’ll need to update the relative path to the image with the IMGIX source path and add your desired URL parameters.

I’ll cover how to do that in both Jekyll and Hugo.

### Setting up Jekyll
IMGIX provides a third-party plugin for Jekyll, which makes handling IMGIX URLs a breeze. 

It only runs during production builds, so your development resources don’t eat up your IMGIX request limit.

Install the plugin by adding liquid and jekyll-imgix to the `:jekyll_plugins` group in your `Gemfile`:

```
group :jekyll_plugins do
   gem 'liquid'
   gem 'jekyll-imgix'
 end
```

Then set up Jekyll to use it by adding `jekyll-imgix` to the `plugins:` section of your `_config.yml` file:

`plugins: [jekyll/imgix]`

*Note: in earlier versions of Jekyll, the `plugins` option is called `gems`*

As well as the following configuration options:

```
imgix:
   source: https://forestry-example.imgix.net # Your imgix source address
```

Make sure you update the `source` to be the URL for your IMGIX source.

Once complete, you can now use the `jekyll-imgix` plugin in your templates. To do so, you apply the new `imgix_url` filter provided by the `jekyll-imgix` plugin to the relative path of your image.

For example:

`<img src="{{ page.hero_image | imgix_url }}" alt="Hero Image">`

Would output:

`<img src="https://example.imgix.net/images/imgix-sample.jpg" alt="Hero Image">`

Then you can apply your parameters as options to the filter, like so:

`<img src="{{ page.hero_image | imgix_url: max-w: 1200, auto:  compress,format }}" alt="Hero Image">`

Which would output:

`<img src="https://example.imgix.net/images/imgix-sample.jpg?max-w=1200&auto=compress,format" alt="Hero Image">`

In order to see the results of the plugin, you must run your site with the `JEKYLL_ENV` variable set to `production`. You can do this by running:

`$ JEKYLL_ENV=production bundle exec jekyll build`

If you want to test your configuration using Jekyll’s built-in server, simply run:

`$ JEKYLL_ENV=production bundle exec jekyll serve`

That’s the basics of setting up your Jekyll templates with IMGIX.

### Setting up Hugo
Hugo doesn’t have a third-party plugin library, so we’ll have to roll our own solution.

To get started setup the configuration in your `config` file for your Hugo installation:

```
params:
   imgix:
      source: https://example.imgix.net # Your imgix source address
```

Now that you have a single source of truth for your IMGIX source, you can jump straight into your templates. Let’s continue along using the hero image example from earlier.

Given the following in a template:

`<img src="{{ .Params.hero_image }} />`

You’d get:

`<img src="/images/imgix-sample.jpg" alt="Hero Image">`

To get started with IMGIX, first you need to append the IMGIX source. You can do this using the `printf` function:

`<img src="{{ printf "%s%s%s" .Site.Params.imgix.source .Params.hero_image }}"  alt="Hero Image">`

Then you can add your URL params as a URL-encoded string (e.g, `?max-w=1200&auto=compress,format`):

`<img src="{{ printf "%s%s%s" Site.Params.imgix.source .Params.hero_image "?max-w=1200&auto=compress,format"  }}"  alt="Hero Image">`

This will result in the following output:

`<img src="https://example.imgix.com/images/imgix-sample.jpg?max-w=1200&auto=compress,format"  alt="Hero Image">`

Now you can see the results of your IMGIX set up by running Hugo’s server:

`$ hugo serve`

If you want to prevent IMGIX from being run for non-production builds (in order to save money), you can do this by updating the code as follows:

`<img src="{{if eq (getenv "HUGO_ENV") "production" }}{{ printf "%s%s%s" Site.Params.imgix.source .Params.hero_image "?max-w=1200&auto=compress,format" }}{{ end}}"  alt="Hero Image">`

This will require you to set the `HUGO_ENV` variable to `production` in order to the IMGIX URL to be parsed:

`$ HUGO_ENV="production" hugo serve`

That’s the basics of setting up your Hugo templates with IMGIX.

## Wrapping Up
Using a service like IMGIX can save you hours of development and design time at for very little cost by enabling you to do image manipulation on the fly.

Next week we’ll cover how to optimize image size for different devices using IMGIX in conjunction with `srcset` and `sizes`.