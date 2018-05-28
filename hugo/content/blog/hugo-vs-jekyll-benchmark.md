---
authors:
- chris-macrae
images:
- "/uploads/2018/01/social-image-2.png"
publishdate: 2018-01-26 10:22:55 +0000
expirydate: 2030-01-01 04:00:00 +0000
excerpt: We put Hugo and Jekyll to the test, find out which won.
title: 'Hugo vs Jekyll: Benchmarked'
categories:
- Frontend-Friday
- hugo
- jekyll
date: 2018-01-26 09:22:55 +0000
headline: ''
description: ''
textline: ''
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
{{% tip %}}  
We've also compared Jekyll & Hugo features across 6 dimensions. [Learn More](/blog/hugo-and-jekyll-compared/)  
{{% /tip %}}

Hugo and Jekyll are the leading static site generators according to [StaticGen.com](https://staticgen.com), and both supported by our [CMS](https://forestry.io).  We're often asked which tool performs better so we decided to do an analysis.

## TL;DR

We ran two tests to measure build times with [Hugo](https://gohugo.io) and [Jekyll](https://jekyllrb.com). The [basic test](#the-basic-benchmark) used the default installation of Jekyll and Hugo to build sites with 10 posts,100 posts, 1,000 posts and 10,000 posts.  The [advanced test](#the-advanced-benchmark) built those same sites but included common plugins and template code in order to create a similar set of features between the two [Static Site Generators](/docs/faqs/glossary/static-site-generators/). For each build, Hugo proved to be between 23 and 63 times faster than Jekyll!

There are many factors one must consider when choosing a static site generator, but if you're just looking at build times, Hugo wins hands down!

**See the data below**, and let us know what your build times are in the conversation on [Hacker News](https://news.ycombinator.com/item?id=16265259).

## Preparing The Test

In order to fairly compare Hugo and Jekyll, we needed to ensure they were on an equal playing field.

To do this, we came up with a list of requirements for the test:

#### Equal Content

For each test, we created a basic YAML content model and then generated sites with `10`, `100`, `1,000`, and `10,000` posts using this model for both Jekyll and Hugo.

#### Equal template structure

We didn't want theme template structure to affect build times so we put together _archive, single, and taxonomy_ templates for each test with the minimum amount of HTML markup needed, no CSS or JS to process or compile, and used the same data for both Hugo and Jekyll.

#### 1:1 feature comparison

Each [static site generator](/docs/faqs/glossary/static-site-generators/) has a different set of features. For instance, Hugo builds your sitemap, whereas Jekyll requires a plugin to do so.  For this reason, we created two tests.

* **Basic Test -** Without any plugins
* **Advanced Test -** Using common plugins and code to achieve a similar set of features (i.e. sitemaps and feed generation).

#### Running the Benchmark

We ran the benchmarks using a simple bash script. Each benchmark runs the build process 13 times recording the `real` time output from the Unix `time` command. We took the average of these 13 builds to get our final result.

## The Basic Benchmark

For the first benchmark, we generated content with a title, a body, and a date in the templates. The content looked like this:

**Hugo**

    ---
    title: Test 1
    date: 2017-07-17T13:48:56-03:00
    ---
    # Page Headline
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget urna nisl. Donec rhoncus libero eget tristique dapibus. Nullam ultricies ullamcorper ipsum sed lacinia.

**Jekyll**

    ---
    title: Test 1
    layout: post
    ---
    # Page Headline
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget urna nisl. Donec rhoncus libero eget tristique dapibus. Nullam ultricies ullamcorper ipsum sed lacinia.

---

This was the most basic benchmark possible, testing only how fast Hugo and Jekyll build the same number of posts.

As you can see below, Hugo is a clear winner building each site in under 1 second.

![](/uploads/2018/01/hugo-vs-jekyll-basic-test-1.png)

<p style="text-align:center;margin-top:-1rem;font-size:.85rem;font-style:italic;">Basic Test with 10, 100, and 1,000 posts.</p>

Plotting a 10,000-page site next to these shows how significant the difference in build-times can become (notice the change in scale of the Y-axis).

![](/uploads/2018/01/Hugo-vs-jekyll-basic-test-10k-pages-1.png)

<p style="text-align:center;margin-top:-1rem;font-size:.85rem;font-style:italic;">Basic Test with 10, 100, 1,000 and 10,000 posts.</p>

The results from this test are as follows:

<table>
<thead>
<tr>
<th>Generator</th>
<th>10</th>
<th>100</th>
<th>1,000</th>
<th>10,000</th>
</tr>
</thead>
<tbody>
<tr>
<td>Hugo</td>
<td>0.05s</td>
<td>0.08s</td>
<td>0.34s</td>
<td>2.95s</td>
</tr>
<tr>
<td>Jekyll</td>
<td>1.47s</td>
<td>3.3</td>
<td>14.38</td>
<td>187.15</td>
</tr>
</tbody>
</table>

## The Advanced Benchmark

For the next benchmark, we generated content with a title, body, date, categories, and tags. We enabled the generation of category and tag archives, and also generated an XML sitemap and RSS/Atom Feed.

These are some of the core features a basic blog or documentation site would need, so we felt this was a fair and representative benchmark.

In this case, our content looked like this:

**Hugo**

    ---
    title: Test 1
    categories:
      - red
      - orange
      - yellow
      - green
      - blue
      - indigo
      - violet
    tags:
      - red
      - orange
      - yellow
      - green
      - blue
      - indigo
      - violet
    date: 2017-07-17T14:07:58-03:00
    ---
    # Page Headline
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget urna nisl. Donec rhoncus libero eget tristique dapibus. Nullam ultricies ullamcorper ipsum sed lacinia.

**Jekyll**

    ---
    title: test_1
    tags: red orange yellow green blue indigo violet
    categories: red orange yellow green blue indigo violet
    layout: post
    ---
    # Page Headline
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget urna nisl. Donec rhoncus libero eget tristique dapibus. Nullam ultricies ullamcorper ipsum sed lacinia.

---

Looking at the results below, you can see that Hugo is again the winner. It’s clear that as you add complexity to Jekyll the decrease in performance is _much_ more noticeable.

![](/uploads/2018/01/hugo-vs-jekyll-advanced-test-1.png)

<p style="text-align:center;margin-top:-1rem;font-size:.85rem;font-style:italic;">Advanced Test with 10, 100, and 1,000 posts.</p>

Adding a 10,000 page test dwarfs the data from the previous graph.

![](/uploads/2018/01/hugo-vs-jekyll-advanced2.png)

<p style="text-align:center;margin-top:-1rem;font-size:.85rem;font-style:italic;">Advanced Test with 10, 100, 1,000 and 10,000 posts.</p>

The results from the second test are as follows:

<table>
<thead>
<tr>
<th>Generator</th>
<th>10</th>
<th>100</th>
<th>1,000</th>
<th>10,000</th>
</tr>
</thead>
<tbody>
<tr>
<td>Hugo</td>
<td>0.06s</td>
<td>0.12s</td>
<td>0.65s</td>
<td>7.46s</td>
</tr>
<tr>
<td>Jekyll</td>
<td>1.38s</td>
<td>3.8</td>
<td>18.42</td>
<td>218.61</td>
</tr>
</tbody>
</table>

## Other Thoughts

It’s important to note that these tests were run in an environment where all of the necessary components were downloaded and installed beforehand.

Given that Jekyll has plugins where Hugo doesn’t, in cloud or server environments where Gems need to be downloaded, they will add additional time to builds (e.g, Forestry’s preview feature).

#### Incremental Builds

Both Hugo and Jekyll have a built-in server that provides _incremental building_. This means that from the moment you spin up the server, they will watch for changes and only rebuild the pages that have changed.

This greatly speeds up build time in a development environment for both generators.

## A Clear Winner

Given that most sites aren’t going to be anywhere close to 10,000 posts, we’ll make the final verdict based on average build time over 10, 100, and 1,000 posts…

![](/uploads/2018/01/hugo-vs-jekyll-totals.jpg)

So as we can see, when it comes to speed and build performance, Hugo is a _clear_ winner.

Don't just take our word for it. [Smashing Magazine](https://www.smashingmagazine.com/), [reportedly](https://discourse.gohugo.io/t/smashing-magazine-s-redesign-powered-by-hugo-jamstack/5826/9) builds their 7,500-page Hugo site in 13 seconds and Hugo user [@darinpope](https://twitter.com/darinpope) managed to [generate 600,000 pages in under 5 minutes](https://discourse.gohugo.io/t/page-generation-performance-expectations/1335/6).

{{% tip %}}  
Check out our [**Developing with Hugo guide**](https://forestry.io/docs/guides/developing-with-hugo/) to learn more about building a Hugo site with Forestry.io.  
{{% /tip %}}

## What's your experience?

Do you run a Jekyll or Hugo site? Share your build times in the conversation on Hacker  News.

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16265259">Comment on Hacker News</a>

---

**Next week,** we’ll [compare the usability and features of Hugo and Jekyll](/blog/hugo-and-jekyll-compared/) to help you decide which static site generator is right for you.