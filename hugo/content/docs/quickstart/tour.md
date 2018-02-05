---
aliases:
- "/docs/quickstart/"
title: Product Tour
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
weight: 4
date: 2017-12-07 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Quick Start
    weight: 1

---
## Overview

This tour will walk you through setting up your first site in Forestry. It demonstrates the primary features and editing functionality of the CMS.

Follow along by forking the [Belkirk Demo Site](https://github.com/forestryio-templates/belkirk-jekyll-demo) on GitHub, or just read through the steps below.

---

## Getting Started

For the purposes of this product tour, we'll assume you have a [GitHub account](https://github.com/signup) and have forked the [Belkirk College demo site](https://github.com/forestryio-templates/belkirk-jekyll-demo).

![](/uploads/2018/01/12.png)

[Sign up](https://app.forestry.io/signup) for a Forestry account, and then navigate to the [dashboard](https://app.forestry.io/dashboard).

1. Click "Add Site". In the modal, choose "Import existing site".
2. You'll be prompted to choose a static site generator. From the dropdown list, choose _Jekyll_.
3. Select _GitHub_ from the list of options.
4. You'll be prompted to choose "Public Repos" or "Private Repos". Your fork is a public fork, so click "Public Repos".
5. Give Forestry access to your GitHub repositories by clicking "Authorize application". _If you are not already logged in, GitHub will prompt you for login credentials first._
6. Once authorized, you will be redirected back to Forestry. In the first dropdown, select `username/belkirk-college-demo`, and in the second dropdown select the `master` branch.
7. Enter _Belkirk Product Tour_ into the name field and then click _Next_.
8. In the final step, you'll be asked to configure Hosting. Choose _Commit to source repo only_ and then click _Save Changes_

Congrats, your first site is being imported! This will take a few seconds, so sit back and relax while it imports.

When it has finished importing, the _Processing_ label will disappear. Click your site from the list to open up the CMS.

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

Click the _Publish_ button to save your changes to back to your repository.

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

### Team Management

[Invite your clients or team members](/docs/settings/team-management) to update your site for you. [User roles](/docs/settings/team-management#user-roles) make managing your whole team simple.