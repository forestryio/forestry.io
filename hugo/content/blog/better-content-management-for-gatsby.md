---
title: Content Management for Gatsby with Git
description: ''
date: 2018-11-22 10:22:29 +0000
authors:
- Sebastian Engels
publishdate: 2018-12-06 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories:
- CMS
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
Gatsby is one of the most flexible and most popular static site generators. You can use it to create Progressive Web Apps, hybrid applications and content-driven sites \[provide examples of cool apps built with Gatsby\].

Once your Gatsby site uses any content that requires frequent changes (e.g. articles, products, announcements) it's likely that you'll be working with writers, marketers or for clients. These users tend to be uncomfortable with working directly in the codebase or with any mark-up language. To solve this problem most people go on the hunt for a CMS.

{{% tip %}}

It's estimated that roughly half of the 1.8 billion websites online today are using some form of a CMS. _source:_ [_w3techs.com_](https://w3techs.com/technologies/overview/content_management/all)

{{% /tip %}}

But, most CMS need you to follow their workflow, meaning you'll end up making all sorts of compromises along the way. The best case scenario, your content files live with the third-party application in some database, far away from your codebase. The worst case scenario you have to move the entire code to the CMS and completely relearn how to build websites.

There's an easier way to give content writers a content management tool without having to turn your entire workflow upside down. Forestry provides a non-invasive content management tool for your editors that integrates into your own workflow and tools, with Git. You won't even notice it's there unless you need it.

#### _What exactly is the problem?_

Nowadays, websites (and most other projects) are almost always created in teams. These teams usually include non-tech people and clients. However, most marketers, writers and clients don’t feel at home with Markdown. Navigating the file system and using the code editor can feel intimidating, if you're not using it on a daily basis. As a developer/designer it is our task to enable these users to edit content on Gatsby sites as if they make changes directly to Markdown files.

To enable other users to make edits to sites we use content management systems (CMS). Using a CMS usually means we have to leave the handling of our content, data and structure to third-party vendors. It also forces us to (at least partially) use a pre-determined workflow.

However, as developers we appreciate direct access to our site's data and being able to adapt how it's structured speeds up our workflow and makes our lives easier. Moving content to a third-party vendor removes data one step, cuts-off that direct access and is detrimental to our workflow. It's a step backwards toward a traditional CMS like Wordpress.

\[Screenshot of a project before using a CMS and how data is split after using a CMS\]

#### _How does Forestry solve this problem?_

Forestry solves this issue by adding a visual (UI) layer on top of your data files that shows editors what they need. Forestry comes with a WYSIWYG (visual) editor, toolbar and Media library that feels familiar and that allows editors to make changes to content the way they are used to. Forestry's not moving your data files or requires odd code injections. Your codebase stays untouched.

By adding a layer on top of your existing code base, Forestry allows developers to stick to their favorite tools and workflow. We don’t believe content management systems (CMS) should dictate your workflow. Forestry simply ensures your non-tech team can make changes and maintain the Gatsby site's content without needing a developer’s support at every turn.

\[Forestry Screenshot\]

Button → Try Gatsby with Forestry

#### _Is there a catch?_

Not really. Gatsby allows you to create pages with the content directly inside the pages. But, Forestry needs you to store your content in Markdown files.

We've been closely watching the community around Gatsby and are happy to see that Markdown has indeed become the format of choice to edit, update and store your content-heavy Gatsby sites (see Gatsby’s [tutorial](https://www.gatsbyjs.org/tutorial/part-six/#transformer-plugins)). Separating content from the layout solves the problem of hunting for content hidden in-between obtrusive markup and enables easy and clean editing with any code editor. We believe this is the most frictionless way to work with content from a developer's perspective. And we're not alone as most other static site generators use Markdown and the Gatsby team themselves embraces Markdown for managing content on [gatsbyjs.org](https://gatsbyjs.org).

{{% tip %}} No worries, we also support other structured data formats. Available data formats are JSON, YAML and TOML and can be edited via Forestry easily. {{% /tip %}}

## What's Next?

This Gatsby tutorial shows you [step-by-step](http://Link to Gatsby Docs) on how to set up a Gatsby site with Forestry or simply [import this starter](https://test.com) we've prepared to get started right away.