---
aliases:
- "/blog/post/choose-static"
authors:
- michael-soolee
images:
- "/uploads/2017/12/code-bg-image-1.jpg"
publishdate: 2016-08-02 01:06:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
excerpt: |
  "When it comes to the Internet, content is king. And it is king for a reason. A site that has well written content concisely tells the story behind a brand, helps to inform customers about a business's products or services and helps guide a user navigate to their desired destination on your site."
title: I can finally choose static
categories:
- jekyll
date: 2016-08-02 01:06:00 +0000

---
When it comes to the Internet, content is king. A site that has well written content concisely tells the story behind a brand, helps to inform customers about a business' products or services and helps guide a user navigate to the information that they seek.

I've worked with various organizations in helping them choose the technology that is used to publish content onto their sites. When it came down to making a choice, the publishing platform options were often slimmed down by the need for non-technical users to easily publish content.

I've written on [my personal site](https://michaelsoolee.com) for several years using a static-site generator called Jekyll. It’s my go-to choice for publishing content on my site. What a static-site generator does is simply takes text files — think plain .txt or even markdown files — wraps them in a template and converts them into static HTML pages.

If you've never used a static-site generator, you might be wondering at this point, what are the benefits of using a static-site generator over a more traditional content management system (CMS) like Wordpress or Drupal?

## The Good

Let me list a few of the benefits that has me hooked on static-site generators:

- **There is no database.** All your posts are simple text files, which means there is no need for a database. No database means, you don't have to worry about data corruption and moving your data is a lot easier. Heck you can even stick your text files up on Dropbox and you'll have them with you all the time.

- **Don't have to worry about viruses.** Your site is generated entirely on your machine. For this reason, there is no outdated code to worry about or the need to worry about downloading the latest version of a plugin. Just publish and rest easy at night.

- **Cost to host is cheap.** Since all you're hosting are static assets, the cost to host is super cheap. I'm currently hosting on Digital Ocean, a service that provides VPS hosting run on SSDs, so it is blazing fast. Cost to host per month, just $5 dollars. And that includes SSL since I use [letsencrypt](https://letsencrypt.org/) on the server.


  If $5 is still steep, you could even host your site on Amazon's AWS and your monthly bill will be cents. You read that right, cents! Pair that with their CDN service and you've got yourself a killer hosting solution.

  And if that’s still too much, save your spare change for pizza and host your site on [GitHub Pages](https://pages.github.com/) completely free!

## The Not So Good

Are you saying, hey that sounds awesome! Sign me up? Well before you jump the gun and hail static-site generators as your go-to content management solution, let me share some of the roadblocks for static-site generators and afterwards share how these roadblocks are quickly fading with a happy ending.


<img src="/uploads/2017/12/s_014709C68DCDF8BD80F107957FB4E50CA386A18CEB650506B2E665212EA1F89F_1471055146622_save-draft-publish.gif" class="right small">- **Friction to produce content.** As awesome as static-site generators are, there is friction to creating content. On a traditional publishing platform, you log in, click a few buttons and you're presented with a text box to write your content and publish.

  With static-site generators, you have to create a file that will be used for your page or blog post, after writing your content, you'll have to build the entire website, then push up your site to your host. If you're versioning your site — you are versioning your site right? — that adds a few more steps; you have to commit your post, push it to the repo and then have your host server build your site.


- **Technical by nature.** As pointed out above, you have to be a little tech savvy to run a site with a static-site generator. But you're saying often content creators aren't technically savvy at all...they're writers and marketers. The learning curve is too steep to get them onboard with using a static-site generator.


- **It isn't sexy.** To be honest, as someone using a static-site generator, I'll tell you compared to their CMS counterparts, they just aren't sexy. I'm often in my command-line or text editor of choice, both of which are great for coding and stuff. But isn't so conducive to writing.


## The Happy Ending

Sorry to burst your bubble a little with the not so good list of things about static-site generators, but like I said earlier, there really is a happy ending. As the title of this post states, I can finally choose static, and I'm going to tell you why I'm excited about this and why I can finally (still) choose static even with the list of not so good things.

Forestry. Forestry is a CMS for your statically generated sites. Your immediate thoughts might be, great another layer that I need to add to my tech stack. Well hold your horses, let me share with you what you gain from using Forestry.

First you gain the benefits I listed above (here's the link to the list if you need a reminder) for static-site generators, second it remedies the "not so good" things about static-site generators and if you've already got a statically generated site, the folks behind Forestry have made it über easy to integrate with Forestry.



- **No more friction to produce.** With Forestry much like a traditional CMS, users login and are presented with a way to create pages and posts. Once the content is written, they can either save a draft or publish with a click of a button.

  In the background, Forestry commits the necessary changes to your repo (if you’re using GitHub or Bitbucket) and will deploy your compiled site to your host.

- **Simple by nature.** If the content creators have ever used any modern content management system, they'll feel right at home. WYSIWYG editor? Check. Asset upload? Check.

- **Oh so sexy.** Let the screenshot below do the talking here. Just eye-candy. Want more? Take [Forestry](https://forestry.io) for a test drive.

![](/uploads/2017/12/screenshot-white-matt.jpg)


So the next time you're faced with setting up a website or a blog and you don't want to go with the traditional CMS options. You can finally choose the much better technology choice of going with a static-site generator for you, but choose a user-friendly **and** sexy CMS for your content producers with [Forestry.io](https://forestry.io).
