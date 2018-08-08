---
aliases:
- "/docs/quickstart/"
title: Product Tour
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
weight: 4
date: 2017-03-23 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Quick Start
    weight: 1

---
## Overview

This tour will walk you through setting up your first site in Forestry. It demonstrates the primary features and editing functionality of the CMS.

---

## Getting Started

![](/uploads/2018/04/add-site-flow-choose-generator.png)

[Sign up](https://app.forestry.io/signup) for a Forestry account, and then navigate to the [dashboard](https://app.forestry.io/dashboard).

1. Click "Try our Jekyll starter template!"
2. Select your Git Provider from the list of options.
3. A window will open asking you to give Forestry access to your repositories. _If you are not already logged in, your provider will prompt you for login credentials first._
4. Click "Authorize application" and wait a few seconds for the window to close.
5. Give the new repository a name, or keep the default: `forestry-demo`
6. Click "Create Site"
7. After a moment you will be redirected to the Forestry CMS

Congrats, your first site is being created!

This process may take a couple minutes. Forestry will create a new repository with your git provider, push a copy of our [Belkirk Jekyll Demo](https://github.com/forestryio-templates/belkirk-jekyll-demo "Belkirk Jekyll Demo Repo") site, and then start the import process. Once the import is complete, the CMS will load in all of your content and you can move on to the next section.

---

## Managing Content

In Forestry, all of your content is sorted into _Collections_ under _Content_ in the sidebar. In the demo, these are:

![](/uploads/2018/01/10.png)

* **Pages:** any content this is not part of a collection
* **People:** a Jekyll collection of "staff members"
* **Posts:** a Jekyll collection of blog posts
* **Projects:** a Jekyll collection of projects

When you first enter the CMS, you will be dropped into the _Pages_ collection. Take a look at the different collections by selecting them from the sidebar.

{{% tip %}}
The Belkirk Demo Site is [hosted by GitHub pages](https://forestryio-templates.github.io/belkirk-jekyll-demo). Feel free to open it up and navigate around to get an understanding of how the built site looks and feels.
{{% /tip %}}

---

## Content Editor

Select the _Posts_ collection in the sidebar, then open up the editor by selecting the post _First Draft Post_.

![](/uploads/2018/01/59.png)

On the left is the post's front matter (custom metadata for the post, like its title and thumbnail), and on the right is the markdown content body of the post. The editor provides a visual, rich-text editor that is friendly for non-technical users and saves to markdown.

![](/uploads/2018/01/59-preview.png)
Make you first edit by updating the post's title, and then click the preview button in the top right. This will open new tab and begin generating a preview with your content changes.

{{% tip %}}
You can leave this tab open and return to the editor in the CMS and make changes. Any time you click the _preview button_ the preview will updated with any new content changes you've made.
{{% /tip %}}

Next, set the post as published so that it will be included when the site is deployed. Click the "..." icon, and click _Set as Published_. You'll see the _Save Draft_ button now says _Publish_.

Click the _Publish_ button to save your changes back to your repository.

---

## Data Files

_Data files_ allow you to set up metadata that isn't associated with a specific page, like your company's contact information.![](/uploads/2018/01/11.png)Under _Data_ in the sidebar, select _Information_ to pull up the demo site's company information.

![](/uploads/2018/01/11-preview.png)

Update the _Twitter_ option from "forestryio" to "twitter", and then click the preview button in the top right.

Once the preview has loaded, you'll see that the Twitter feed on the homepage has updated.

{{% tip %}}
Previewing data files and menus will always redirect you to the homepage of your site, because they don't have a permalink!
{{% /tip %}}

Return to the data file and click the _Unsaved changes_ indicator at the top of the page. Click "Discard changes" to remove the changes you just made from the page.

{{% tip %}}
Forestry stores _unsaved changes_ in the cloud. This enables collaboration between multiple editors, and prevents editors from losing their changes.
{{% /tip %}}

---

## Media Library

The Media Library allows content editors to easily upload and manage media files throughout your site. It supports images, videos, PDFs, and much more.

![](/uploads/2018/01/19.png)

Under _Site_ in the sidebar, select _Media Library_. You'll see all of the already uploaded images in the demo site.

{{% tip %}}
By default, the Media Library uploads media to `uploads/:year:/:month:/:day:/`. This can be changed in your site's _Settings_.
{{% /tip %}}

You can upload media by clicking the placeholder in top right, or by dragging images into the Media Library from your desktop.![](/uploads/2018/01/58-replace.png)Next, select the _Projects_ collection, and open up _Portable EEG Monitoring Device_. In this project's front matter, try updating the _Banner Image_ by clicking _Replace_, and choosing another image from the Media Library.

Feel free to hit _Publish_ to save your changes.

---

## Menus

Menus allow your content editors to manage your site's navigation and other types of menus easily.

![](/uploads/2018/01/22.png)

Under _Site_ in the sidebar, select _Menus_. Try re-arranging the menu with drag-and-drop, and then preview your changes by clicking the preview button in the top right.

---

## Next Steps

This tour only covers the basics of what Forestry offers. Now that you've set up your first site in Forestry, you can begin exploring all of Forestry's features at your own pace through this documentation:

### Editing

Forestry has many more features for content editors:

* Create great content with the powerful [Markdown Editor](/docs/editing/markdown-editor) and with [Data Files](/docs/editing/data-files)
* Learn more about the [Media Library](/docs/editing/media-library)
* Learn how to create [Menus](/docs/editing/menus) for navigation and site links
* Add structured metadata with [Front Matter](/docs/editing/front-matter)
* Access the CMS from your own domain with the [Remote Admin](/docs/editing/remote-admin)

### Hosting

Forestry can handle building and deploying your static site for you, or can integrate with third-party services that handle deployment.

You have many [hosting options](/docs/hosting/)!

### Team and Guest Management

[Invite your clients or team members](/docs/settings/team-management) to update your site for you. [User roles](/docs/settings/team-management#user-roles) make managing your whole team simple.