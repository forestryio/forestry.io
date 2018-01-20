---
title: Product Tour
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
menu:
  docs:
    parent: quickstart
weight: 4
---
## Overview
This tour will walk you through setting up your first site in Forestry. It demonstrates the primary features and editing functionality of the CMS.

Follow along by forking the [Belkirk Demo Site](https://github.com/forestryio/belkirk-jekyll-demo) on GitHub, or just read through the steps below.

---

## Getting Started
For the purposes of this product tour, we'll assume you have a [GitHub account](https://github.com/signup) and have forked the [Belkirk College demo site](https://github.com/forestryio/belkirk-demo-site).

[Sign up](https://app.forestry.io/signup) for a Forestry account, and then navigate to the [dashboard](https://app.forestry.io/dashboard).

TK: image of dashboard

1. Click "Add Site". In the modal the opens, choose "Import existing site".
2. You'll be prompted to choose a static site generator. From the dropdown list, choose *Jekyll*.
3. Select *GitHub* from the list of options.
4. You'll be prompted to choose "Public Repos" or "Private Repos". Your fork is a public fork, so click "Public Repos".
6. Give Forestry access to your GitHub repositories by clicking "Authorize application".
   *If you are not already logged in, GitHub will prompt you for login credentials first."*
7. Once authorized, you will be redirected back to Forestry. In the first dropdown, select `username/belkirk-college-demo`, and in the second dropdown select the `master` branch.
8. Enter *Belkirk Product Tour* into the name field and then click *Next*.
9. In the final step, you'll be asked to configure Hosting. Choose *Commit to source repo only* and then click *Save Changes*

Congrats, your first site is being imported! This will take a few seconds, so sit back and relax while it imports.

When it has finished importing, the *Processing* label will disappear. Click your site from the list to open up the CMS.

---

## Managing Content
In Forestry, all of your content is sorted into [*Content Types*](/docs/editing#content-types). You can see these in the sidebar under *Content*. In the demo, these are:

TK: image of Belkirk in Forestry

- **Pages:** all content that is not part of a content type
- **People:** a Jekyll collection of "staff members"
- **Posts:** a Jekyll collection of blog posts
- **Projects:** a Jekyll collection of projects
- **Publications:** a non-output Jekyll collection of publications

When you first enter the CMS, you will be dropped into the *Pages Content Type*. Take a look at the different collections by selecting them from the sidebar.

{{% tip %}}
The Belkirk Demo Site is [hosted by GitHub pages](https://forestryio.github.io/belkirk-jekyll-demo). Feel free to open it up and navigate around to get an understanding of how the built site looks and feels.
{{% /tip %}}

---

## Content Editor

Select the *Posts* collection in the sidebar, then open up the editor by selecting the post *First Draft Post*.

TK: image of editor

On the right is the post's front matter (custom metadata for the post, like its title and thumbnail), and on the left is the markdown content body of the post. The editor provides a visual, rich-text editor that is friendly for non-technical users and saves to markdown.

TK: loading preview

Make you first edit by updating the post's title, and then click the preview button in the top right. TK: preview button This will open new tab and begin generating a preview with your content changes.

{{% tip %}}
You can leave this tab open and return to the editor in the CMS and make changes. Any time you click the *preview button* the preview will updated with any new content changes you've made.
{{% /tip %}}

Next, set the post as published so that it will be included when the site is deployed. Click the "..." icon, and click *Set as Published*. You'll see the *Save Draft* button now says *Published*.

Click the *Publish* button to save your changes to back to your repository.

---

## Data Files

*Data files* allow you to set up metadata that isn't associated with a specific page, like your company's contact information.

TK: info file image

Under *Data* in the sidebar, select *Information* to pull up the demo site's company information.

Update the *Twitter* option from "twitter" to "forestryio", and then click the preview button (TK: preview button image) in the top right.

TK: image of twitter feed

Once the preview has loaded, you'll see that the Twitter feed on the homepage has updated.

{{% tip %}}
Previewing data files and menus will always redirect you to the homepage of your site, because they don't have a permalink!
{{% /tip %}}

Return to the data file and click the *Unsaved changes* indicator at the top of the page. Click "Discard changes" to remove the changes you just made from the page.

{% tip %}
Forestry stores *unsaved changes* in the cloud. This enables collaboration between multiple editors, and prevents editors from losing their changes.
{% /tip %}

---

## Media Library

The Media Library allows content editors to easily upload and manage media files throughout your site. It supports images, videos, PDFs, and much more.

TK: media library

Under *Site* in the sidebar, select *Media Library*. You'll see all of the already uploaded images in the demo site.

{% tip %}
By default, the Media Library uploads media to `uploads/:year:/:month:/:day:/`. This can be changed in your site's *Settings*.
{% /tip %}

You can upload media by clicking the placeholder in top right, or by dragging images into the Media Library from your desktop.

Next, select the *Projects* collection, and open up *Modern Engineering Textbook*. In this project's front matter, try updating the *Banner Image* by clicking *Replace*, and choosing another image from the Media Library.

Feel free to hit *Publish* to save your changes.

---

## Next Steps
This tour only covers the basics of what Forestry offers. Now that you've set up your first site in Forestry, you can begin exploring all of Forestry's features at your own pace through this documentation:

### Editing
Forestry has many more features for content editors:

- Create great content with the powerful [Markdown Editor](/docs/editing/markdown-editor) and with [Data Files](/docs/editing/data-files)
- Manage your site's media with the [Media Library](/docs/editing/media-library)
- Create and manage [menus](/docs/editing/menus) for navigation and site links
- Add structured metadata with [Front Matter](/docs/editing/front-matter)
- Access the CMS from your own domain with the [Remote Admin](/docs/editing/remote-admin)

### Hosting
Forestry can handle building and deploying your static site for you, or can integrate with third-party services that handle deployment.

You have many [options](/docs/hosting/)!

### Team Management
[Invite your clients or team members](/docs/settings/team-management) to update your site for you. [User roles](/docs/settings/team-management#user-roles) make inviting your whole team easy.
