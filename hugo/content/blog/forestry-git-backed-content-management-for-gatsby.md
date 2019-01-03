---
title: 'Forestry: Git-backed Content Management for Gatsby'
description: ''
date: 2018-12-14 01:51:05 -1100
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
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
Gatsby is one of the most flexible and most popular static site generators. You can use it to create Progressive Web Apps, hybrid applications, content-driven sites and so much more. [AirBnB](https://airbnb.io/)'s docs, [Hopper](https://www.hopper.com/)'s landing page and the [report on the state of european tech](https://2017.stateofeuropeantech.com/) are just a few examples of what you can do with Gatsby.

Once your Gatsby site uses any content that requires frequent changes (e.g. articles, products, announcements) it's likely that you'll be working with writers, marketers or for clients. These users tend to be uncomfortable with working directly in the codebase or with any mark-up language. To solve this problem most people go on the hunt for a CMS.

Forestry provides a non-invasive content management tool for your editors that integrates into your own workflow and tools, with Git. You won’t even notice it’s there unless you need it.

[![Import this project into Forestry](https://assets.forestry.io/import-to-forestry.svg)](https://app.forestry.io/quick-start?repo=forestryio/gatsby-starter-forestry&engine=gatsby)

## Forestry’s Content Management

We've set a few ground-rules of how we want to handle content management in 2018. These are the principles we adhere to and that you can rely on when using Forestry with Gatsby.

### Git-Priority

Git has proven to be the most popular tool for developers to store their code today and we believe your code, content and data is yours and should be stored with access to modern technologies. Hence, Forestry takes a Git-backed approach to content management pushing all changes back to your Git repository and pulling updated code directly into the content manager as it is updated. This way your Gatsby site is always in-sync, you can take advantage of all the tools in the Git environment and editors can edit and preview the latest version of the site.

<video playsinline autoplay muted loop poster="" class="">
    <source src="https://forestry.io/video/gatsby-diff.webm" type="video/webm">
    <source src="https://forestry.io/video/gatsby-diff.mp4" type="video/mp4">
</video>

\[Cheering / raised hand emojis for Git providers \]

### Easy integration

Forestry directly connects to your Git repository to manage your content files. All you need to get started with Forestry is to import the repository that contains your Gatsby site, point Forestry to directories that hold content that you want to access and add your build commands.

If you want users to be able to create brand new content you can create content models (we call them Front Matter Templates or FMTs). These come with an abundance of different fields from simple text fields and color pickers to fields that enable the creation of modular layouts with [Blocks](https://forestry.io/docs/settings/fields/blocks/).

{{% tip %}} Check out a guide on how to get started with Forestry and Gatsby or simply import the starter above to begin exploring. {{% /tip %}}

![](/uploads/2018/12/gatsby-sidebar.png)

### Code Cleanliness

There’s no need for lengthy authorization setups, plugins or deep integrations into your codebase. Forestry’s entire site configuration lives in a well-contained .forestry directory and will not pollute your codebase. Having all settings inside the .forestry directory gives you the flexibility of configuring Front Matter Templates within Forestry as well as directly in the code editor.

Lastly, Forestry does not lock you into its system and the cost of transitioning from an existing system is minimal. If you decide to switch the content manager, simply remove your site from Forestry and delete the .forestry folder in your repository. No unpleasant surprises of finding Forestry snippets in your code later on.

![](/uploads/2018/12/gatsby-forestry-config.png)

### Out-of-the-Box Features (including Previews)

Content creators need an immediate feedback loop to create great content. Seeing what the text or copy looks like _before_ it is published is a crucial step to successful content editing. While setting up a preview with other systems can be cumbersome, Forestry has integrated previews and ships them out-of-the-box, all you need to do is declare the command that should be run for your Gatsby site when clicking on <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg "http://www.w3.org/2000/svg")" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="1.2"><path d="M12 18c6 0 10-6 10-6s-4-6-10-6-10 6-10 6 4 6 10 6z"></path><circle cx="12" cy="12" r="2"></circle></g></svg>.

This holds true for all of our Editor-centric features.

### Updates and Deployments in the Cloud

Forestry lives in the cloud and is accessible everywhere. No need to start-up your computer or pull the repository to deploy an update to your Gatsby site. This can be handled easily from your mobile phone or any other computer. Simply login, make a change and hit save, Forestry uses your [Build Commands](http://Build Commands) to deploy the compiled site to a variety of possible [Hosts](http://Hosts) or simply back to a repository, if you like to handle deployment yourself.

## _Next Steps_

This Gatsby tutorial shows you [step-by-step](http://Link to Gatsby Docs) on how to set up a Gatsby site with Forestry. To hit the ground running or just try it out, we've pre-configured a [Forestry+Gatsby starter](https:// Gatsby Starter) for you that can be imported within seconds.

[![Import this project into Forestry](https://assets.forestry.io/import-to-forestry.svg)](https://app.forestry.io/quick-start?repo=forestryio/gatsby-starter-forestry&engine=gatsby)