---
title: 'FTP: An Outdated Deployment Method for Static Sites'
description: ''
date: 2019-01-15 22:57:29 -1100
authors:
- Sebastian Engels
publishdate: 2019-01-16 07:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
categories:
- CMS
headline: ''
textline: ''
images: []
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
{{% warning %}}

Current users of the FTP deployment method are able to continue to use FTP for the foreseeable future. However, we won't add any additional features or output and we truly believe that you should switch to a more secure deployment method such as SFTP (SSH-based deployment).  
New users won't be able to select plain-old FTP as a deployment method anymore. See below to learn about state-of-the-art alternatives.

{{% /warning %}}

A lot has been said on the security vulnerabilities of plain FTP already. [This](https://www.ssh.com/ssh/ftp/server), [this](http://blog.jdpfu.com/2011/07/10/why-you-need-to-stop-using-ftp) or [this](https://www.motherjones.com/politics/2017/10/trump-election-commissioners-voter-database-is-a-ripe-target-for-hackers/) and [the list goes on](https://www.google.com/search?q=ftp+security+issues&oq=ftp+security+issues&aqs=chrome.0.69i59j0l4.3491j0j4&sourceid=chrome&ie=UTF-8). FTP hasn't been secure since the mid-1990s but Forestry has supported it until now as it is often an easy way to kick the tires and get started with a demo or test site.

The simplicity of FTP is certainly its biggest selling point but even easier ways to host and deploy your sites has emerged and they are gaining rapid adoption in the developer community. That's why we believe it is time to lay FTP-support to rest and stop letting people board this train into no-man's-land. 

<iframe src="[https://giphy.com/embed/Az1CJ2MEjmsp2](https://giphy.com/embed/Az1CJ2MEjmsp2 "https://giphy.com/embed/Az1CJ2MEjmsp2")" width="480" height="221" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="[https://giphy.com/gifs/bare-barren-Az1CJ2MEjmsp2](https://giphy.com/gifs/bare-barren-Az1CJ2MEjmsp2 "https://giphy.com/gifs/bare-barren-Az1CJ2MEjmsp2")">via GIPHY</a></p>

## Future-Proof Markdown

WYSIWYG Editors were created for a valid reason - HTML is hard to read and content editors shouldn't need to learn HTML to structure and write content. However, they are notoriously known for creating clunky, unreadable, hard to maintain code, affecting not only your ability to rank high on search engines but also the well-being of your developers.

Markdown maintains a simple readable text (e.g. **word** -> **word**) that can be converted into consistent HTML. The styling will be applied separately and can be easily migrated to a new design without having to alter the content itself. Even if your editors don't want to learn the simple Markdown syntax right away, they will be able to add content, the Markdown just spices things up.

With HTML WYSIWYG Editors you often don't know whether content was formatted consistently without going into the code (e.g. H1 can often look similar to a larger sized font that was set to bold). Markdown takes care of this issue by forcing a consistent mark up through limiting options.

![](/uploads/2018/04/woof-woof-test.png)

However, the big caveat is that editors won't be able to immediately see the styling of a heading, bold, italic or linked word it can make adoption slightly more difficult for non-tech users. To help with that content editors in Forestry.io use a **Markdown WYSIWYG Editor** that provides a simplified formatting giving content editors control over the styling of their article.

## Tools and Tips to Migrate Existing Site

We put together a few tips to make your migration easier.

### Automate Migration with Pandoc

If you need to convert files from one markup format into another, pandoc is your swiss-army knife. The learning curve is a little steep but if you have a lot of pages and you want to convert them automatically, this is a tool worth looking at.

[https://pandoc.org/](https://pandoc.org/ "https://pandoc.org/")

### Simple Paste and Translate

For those of you that just have a few pages to migrate, doing it manually might be more efficient and more accurate. A good tool to get a jump-start on converting pages manually is Dom Christie's _Turndown_ project.

[https://domchristie.github.io/turndown/](https://domchristie.github.io/turndown/ "https://domchristie.github.io/turndown/")

### Import to Hugo and Migrate later

Maybe your old content doesn't necessarily need to be updated immediately. In that case just follow the tutorial below and get started with your new Hugo page and set up Markdown for any future updates.

[http://whipperstacker.com/2016/09/22/convert-an-existing-site-into-hugo/](http://whipperstacker.com/2016/09/22/convert-an-existing-site-into-hugo/ "http://whipperstacker.com/2016/09/22/convert-an-existing-site-into-hugo/")

{{% tip %}}  
A similar setup works for Jekyll as well. Consult the docs [https://jekyllrb.com/tutorials/convert-site-to-jekyll/](https://jekyllrb.com/tutorials/convert-site-to-jekyll/ "https://jekyllrb.com/tutorials/convert-site-to-jekyll/")  
{{% /tip %}}

At Forestry.io we want to provide you with the best content editing experience and we believe Markdown gives us the simplicity to start creating content for static sites right away and the flexibility to further improve your editor over time.