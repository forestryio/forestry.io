---
title: Better Content Management (CMS) for Gatsby
description: ''
date: 2018-11-21 23:22:29 -1100
authors:
- Sebastian Engels
publishdate: 2018-12-05 17:00:00 -1100
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
Gatsby is one of the most flexible and most popular static site generators. You can use it to create Progressive Web Apps, hybrid applications and content-driven sites \[provide examples of cool apps built with Gatsby\]. With that flexibility we face tougher design challenges, especially when it comes to including non-tech team members, writers, editors and clients.

In the past this often meant that we needed to align all our developer workflow to that goal of providing editors with an editing tool. With Headless CMS we've made a step into the right direction. Nevertheless, even today, using a CMS usually means drastic compromises in our workflow and how we store our code, content and data.

_TL;DR_

_Forestry now supports Gatsby and challenges the way we approach content management for Gatsby projects and other static site generators. Forestry provides a non-invasive content management tool that allows you to keep your own workflow and tools._

#### _How to store content with Gatsby?_

We've been closely watching the community around Gatsby and are happy to see that Markdown has become the format of choice to edit, update and store your content-heavy Gatsby site (see Gatsby’s [tutorial](https://www.gatsbyjs.org/tutorial/part-six/#transformer-plugins)). Separating content from the layout solves the problem of hunting for content hidden in-between obtrusive markup and enables editing with any code editor. We believe this is the most frictionless way to work with content from a developer's perspective. And we're not alone as most other static site generators use Markdown and the Gatsby team themselves embraces Markdown for managing content on [gatsbyjs.org](https://gatsbyjs.org).

#### _What exactly is the problem?_

Nowadays, websites (and most other projects) are almost always created in teams. These teams usually include non-tech people and clients. However, most marketers, writers and clients don’t feel at home with Markdown. Navigating the file system and using the code editor can easily feel intimidating, if you're not using it on a daily basis. Our task is to enable these users to edit content on Gatsby sites as if they make changes directly in Markdown files.

To enable other users to make edits to sites we use content management systems (CMS). Using a CMS usually means we have to leave the handling of our content, data and structure to third-party vendors. It also forces us (at least partially) to use a specific workflow. 

However, as developers we appreciate direct access to our site's data and being able to adapt how it's structured speeds up our workflow and makes our lives easier. Moving content to a third-party vendor removes data one step, cuts-off that direct access and is detrimental to our workflow. It's a step backwards toward a traditional CMS like Wordpress.

\[Screenshot of a project before using a CMS and how data is split after using a CMS\]

#### _How to keep your data in one place and provide editors with a great content manager?_

Forestry solves this issue by adding a visual (UI) layer on top of your data files that shows editors what they need. Forestry comes with a WYSIWYG (visual) editor, toolbar and Media library that feels familiar and that allows to editors to make changes to content the way they are used to. Forestry's not moving your data files or requires odd code injections. Your codebase stays untouched.

{{% tip %}} Structured data formats beyond Markdown such as JSON, YAML or TOML can also be edited via Forestry just as easily. {{% /tip %}}

By adding a layer on top of your existing code base, Forestry allows developers to stick to their favorite tools and workflow. We don’t believe content management systems (CMS) should dictate your workflow. Forestry simply ensures your non-tech team can make changes and maintain the Gatsby site's content without needing a developer’s support at every turn.

\[Forestry Screenshot\]

Button → Try Gatsby with Forestry

## Forestry’s Content Management

We've set a few ground-rules of how we want to handle content management in 2018. These are the principles we adhere to.

### Git-Priority

Git has proven to be the most popular tool for developers to store their code today and we believe your code, content and data is yours and should be stored with access to modern technologies. Hence, Forestry takes a Git-backed approach to content management pushing all changes back to your Git repository and pulling updated code directly into the content manager as it is updated. This way your Gatsby site is always in-sync, you can take advantage of all the tools in the Git environment and editors can edit and preview the latest version of the site.

\[Screenshot of Editor Change and Markdown diff\]

\[Cheering / raised hand emojis for Git providers \]

### Easy integration

Forestry directly connects to your Git repository to manage your content files. All you need to get started with Forestry is to import the repository that contains your Gatsby site and point Forestry to directories that hold content that you want to access.

If you want users to be able to create brand new content you can create content models (we call them Front Matter Templates or FMTs). These come with an abundance of different fields from simple text fields and color pickers to fields that enable the creation of modular layouts with [Blocks](https://forestry.io/docs/settings/fields/blocks/).

{{% tip %}}
Check out a guide on how to get started with Forestry and Gatsby or simply import the starter above to begin exploring.
{{% /tip %}}

\[Sidebar Screenshot\]

### Code Cleanliness

There’s no need for lengthy authorization setups, plugins or deep integrations into your codebase. Forestry’s entire site configuration lives in a well-contained .forestry directory and will not pollute your codebase. Having all settings inside the .forestry directory gives you the flexibility of configuring Front Matter Templates within Forestry as well as directly in the code editor.

Lastly, Forestry does not lock you into its system and the cost of transitioning from an existing system is minimal. If you decide to switch the content manager, simply remove your site from Forestry and delete the .forestry folder in your repository. No unpleasant surprises of finding Forestry snippets in your code later on.

\[.forestry settings are separate from rest of the code base\]

### Out-of-the-Box Features (including Previews)

Content creators need an immediate feedback loop to create great content. Seeing what the text or copy looks like _before_ it is published is a crucial step to successful content editing. While setting up a preview with other systems can be cumbersome, Forestry has integrated previews and ships them out-of-the-box, all you need to do is declare the command that should be run for your Gatsby site when clicking on <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="1.2"><path d="M12 18c6 0 10-6 10-6s-4-6-10-6-10 6-10 6 4 6 10 6z"></path><circle cx="12" cy="12" r="2"></circle></g></svg>.

This holds true for all of our Editor-centric features.

### Updates and Deployments in the Cloud

Forestry lives in the cloud and is accessible everywhere. No need to start-up your computer or pull the repository to deploy an update to your Gatsby site. This can be handled easily from your mobile phone or any other computer. Simply login, make a change and hit save, Forestry uses your [Build Commands](http://Build Commands) to deploy the compiled site to a variety of possible [Hosts](http://Hosts) or simply back to a repository, if you like to handle deployment yourself.

This Gatsby tutorial shows you [step-by-step](http://Link to Gatsby Docs) on how to set up a Gatsby site with Forestry.