---
title: HTML File Contents are Moving to Plaintext Editor
description: 'Considering the issues the HTML WYSIWYG Editor causes and the merits
  Markdown provides we made the decision to discontinue our HTML file support for
  the WYSIWYG Editor on 5/11/2018. '
date: 2018-04-15 21:57:29 -1100
authors:
- Sebastian Engels
publishdate: 2018-04-16 03:00:00 +0000
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

---
{{% warning %}}
We are not changing or removing the Markdown WYSIWYG editor. Our Markdown editor will continue to offer both plaintext and WYSIWYG input modes. In fact, removing the HTML WYSIWYG editor will allow us to focus on making the Markdown editor even better.{{% /warning %}}

The  HTML WYSIWYG Editor has proven to be less and less the state-of-the-art content editing experience it once set out to be. Considering the issues the HTML WYSIWYG Editor causes and the merits Markdown provides we made the decision to discontinue our WYSIWYG HTML Editor on 5/11/2018.

For those limited users that are impacted by this change we will continue to provide the plaintext editor to edit HTML files.

![](/uploads/2018/04/source-html-editor-1.png)

Since Markdown proves to be increasingly ubiquitous, we want to lay out clearly why we believe Markdown is the future and how you can make the move as well.

## Future-Proof Markdown

WYSIWYG Editors were created for a valid reason - HTML is hard to read and content editors shouldn't need to learn HTML to structure and write content. However, they are notoriously known for creating clunky, unreadable, hard to maintain code, affecting not only your ability to rank high on search engines but also the well-being of your developers.

Markdown maintains a simple readable text (e.g. \*\*word\*\* -> **word**) that can be converted into consistent HTML. The styling will be applied separately and can be easily migrated to a new design without having to alter the content itself. Even if your editors don't want to learn the simple Markdown syntax right away, they will be able to add content, the Markdown just spices things up.

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