---
title: Is it Time to Move on From WordPress?
description: ''
date: 2018-11-26 16:30:05 +0000
authors:
- DJ Walker
publishdate: 2018-11-26 16:30:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/11/tim-gouw-68319-unsplash.jpg"
categories:
- Static Sites
tags:
- WordPress
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
WordPress 5.0 has been released, and with it comes their much-hyped new editing experience, [Gutenberg](https://wordpress.org/gutenberg/). The inclusion of Gutenberg in this release has caused no shortage of acrimony in the WordPress community. The new editor is opt-out as opposed to opt-in (and opting out requires installing [yet another plugin](https://wordpress.org/plugins/classic-editor/)), and is such a significant departure from their original content editor that it is guaranteed to cause major issues with third-party plugins and themes (Gutenberg, for example, does not support WordPress’ meta box API, an essential component of customizing the current editing interface used by countless plugins.)

{{% media img="/uploads/2018/11/gutenberg_reviews.png" alt="Plugin reviews for Gutenberg" caption="Many critics of Gutenberg have elected to express their disapproval in the plugin reviews. I can say that I’ve never heard a piece of software referred to as “Stalinesque” before!" %}}

WordPress 5.0 will no doubt cause a major disruption for many users who update. In light of this, I think now is a good time for WordPress users to stop and reflect:

**Is it time to move on from WordPress?**

_(Spoiler: yes, it is, and it has been for a long time.)_

## Breaking Compatibility is Uncharacteristic of WordPress

Some of you with experience in the broader software world might be confused as to why this is such a big deal. If you don’t like the WordPress 5 editor, why not just stick with WordPress 4?

This is a bad idea, as **WordPress does not provide security patches for earlier versions**. The only way to fix security vulnerabilities in your WordPress install is to update to the latest version. This itself is not a huge problem, for the most part, as **WordPress has a long track record of maintaining backward compatibility**. Users have been able to update with confidence that everything will continue to work. On top of that, **WordPress doesn’t explicitly follow semantic versioning.** There is no reason for users to expect that incrementing the major release number (from 4 to 5) should cause significant compatibility issues for their websites.

The dogged adherence to backward compatibility might seem great for end users, but it can be a nightmare for developers building on the platform.

## WordPress is Developer-Hostile

I’ve spent years developing with WordPress, and had my share of _head-meets-desk_ moments.

{{% media img="/uploads/2018/11/wp_getting_started.png" alt="WordPress' recommended steps to get started" caption="To those learning WordPress: I recommend performing these steps in the exact opposite order." %}}

One of the last WordPress projects I worked on involved using the `wp_insert_post` function. This function enables you to automatically create a new post in the database using the options you provide to the function. One of the options, `tax_input`, allows you to assign a taxonomy to the post when it’s created. However, **this doesn’t always work.** If this code is run during a request where _the currently logged in user doesn’t have the right permissions_, the post will be created without assigning it to the taxonomy. **This is the only capability check made by the function** — it’s not like it checks if the currently logged in user is allowed to create posts in the first place, so this behavior is wildly inconsistent _purely within the context of this single function_.

[A ticket to correct this behavior has been open for seven years](https://core.trac.wordpress.org/ticket/19373), with the primary counter-argument being an attitude that seems somewhat endemic to the PHP community as a whole: _what if somebody, somewhere, is relying on this broken behavior?_ Indeed, this position is not without merit. The 4.7.1 release of WordPress infamously exposed [a vulnerability in the REST API](https://blog.sucuri.net/2017/02/content-injection-vulnerability-wordpress-rest-api.html) that allowed users to create and update posts _without performing any authentication or capability checks._ Maybe if they had buried some capability checks annoyingly deep in the API, this exploit would not have existed (completely by accident, of course.)

My heart aches for my fellow developers who are still hostage to WordPress’ whims. They live in a chaotic world where nothing makes sense and things happen for no reason. While hyperbolic developers might say that this chaos is endemic to all software, fledgling devs would be much better off working in an ecosystem that doesn’t suffer from the technical debt of a 15-year-old codebase whose maintainers are reluctant to break backward compatibility (except, of course, when they invent a shiny new toy like Gutenberg that they insist on making everyone use.)

So, WordPress: you’ve had a good run. But we think it’s time to move on.

## Life After WordPress

If I’ve managed to wear you down by now, you might be wondering: _if not WordPress, then what?_ You’ve walked right into my trap!

The future — and, increasingly, the present — of the web is in static HTML. As opposed to a _dynamic_ platform such as WordPress, where HTML is composed on-the-fly by a PHP backend, the HTML for a static site is composed ahead of time such that no processing needs to occur on the webserver beyond serving files when they are requested.

### Static HTML? What YEAR is it?

If the notion of a static HTML website conjures up thoughts of quaint web pages with little construction signs and <span style="background-color: antiquewhite;">antiquewhite</span> backgrounds, allow me to bring you up to speed.

Static Site Generators — tools such as Jekyll, Hugo, Gatsby, and others — have allowed developers and content creators to create rich and complex static HTML websites. These tools use template and content strategies that still vaguely resemble backend web platforms like WordPress. Content isn’t hard-coded into templates — it’s abstracted away via a templating language (such as Liquid in the case of Jekyll). When the site is built, every piece of content is processed through these templates and converted into a corresponding HTML file.

The process is similar to the way a CMS platform would compose an HTML file, with the critical difference being that it occurs a single time, during a build phase, instead of on-demand on the hosting server. Users of static site generators will automate this build phase, having their site build and deploy automatically in response to changes made to the content.

{{% tip %}}
It’s sort of like a WordPress site if you were to use an aggressive, full-page caching strategy — and then automatically flushed and re-populated the cache every time you published a change to your content.
{{% /tip %}}

### Why Should I Go Static?

Static sites are **inherently more secure** than their server-composed counterparts. This isn’t because they’re built by some mythical perfect programming wizard: making an application secure is a constantly moving target. The reason static sites are more secure is that they have a significantly smaller _attack surface._ There is no code running on the server besides what is necessary to listen to HTTP requests and serve files (and this part can be abstracted away by the platform, such as with AWS or Netlify.)

On top of that, static sites are incredibly easy to scale. [Deploy your static site to Amazon CloudFront](https://forestry.io/blog/automate-your-static-hosting-environment-with-aws-cloudformation/) and never again worry about your site being [“hugged to death”](https://en.wikipedia.org/wiki/Slashdot_effect) the next time you make it to the front page of Reddit.

### What About WordPress’ User-Friendly Editor?

One of WordPress’ biggest selling points is its editing interface (no doubt why they want to iterate on it with Gutenberg.) Static Site Generators are command-line tools that run against a file system, and don’t offer a GUI for managing content out of the box. This is likely a significant hurdle for many users who would otherwise be interested in adopting the static site paradigm.

Fortunately, there are several CMS solutions out there that can solve this problem. Because these CMSes aren’t tightly coupled with your chosen Static Site Generator, you have the option of trying different ones without having to re-code your entire website each time.

{{% tip %}}
Forestry’s approach to static site content management updates your content by committing changes to your git repo. This strategy enables you to use Forestry alongside other workflows, and your content is never locked in to our service. Try out [our demo site](https://app.forestry.io/quick-start?repo=forestryio-templates/belkirk-jekyll-demo&provider=github&engine=jekyll) to get a feel for how it works.
{{% /tip %}}

Being able to adopt a user interface that makes both developers and editors happy has been a tremendous boon to static sites in recent years. With the aforementioned scalability and simpler security landscape, modern static sites are an appealing option for many use cases.

## Gutenberg May be the Future, but WordPress Isn’t

To be honest, I find the name _Gutenberg_ a little cloying. Not to say it’s undeserved: it’s named after the inventor of the printing press, and WordPress’ software certainly deserves some credit for enabling the proliferation of ideas across the internet — an estimated [30% of all websites](https://venturebeat.com/2018/03/05/wordpress-now-powers-30-of-websites/) are powered by WordPress!

{{% media img="/uploads/2018/11/wp_footer.png" alt="Screenshot of the footer on wordpress.org" caption="And no name could be more pretentious than the wordpress.org footer, proclaiming in low contrast that “code is poetry”." %}}

But my issues here really aren’t with Gutenberg itself, but with the way WordPress has broken from its conventions and created a painful (and mandatory) upgrade path for a huge swath of its users. Gutenberg actually seems like a great idea, and it’s nice to see that WordPress is thinking outside the box in the pursuit of a more intuitive editing experience. Unfortunately for Gutenberg, WordPress has too many problems.

With WordPress 5.0 forcing the adoption of a new editing paradigm, leaving countless plugins and themes in the lurch, now seems like a good time to switch to a platform that’s easier to secure, easier to scale, and easier to develop on.

It’s time to move on from WordPress.


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=18534896">Discuss on Hacker News</a>