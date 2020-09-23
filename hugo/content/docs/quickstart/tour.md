---
aliases:
- "/docs/quickstart/"
title: Product Tour
authors: []
publishdate: 2017-12-07T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
weight: "4"
date: 2020-02-12T04:00:00.000+00:00
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Quick Start
    weight: 1

---
## Overview

Forestry connects to your Git repository and helps you edit Markdown, Front Matter and data files (YAML, JSON or TOML).
Our CMS also offers a free preview environment to check your modifications before you save your changes.

This tour will walk you through setting up your first site in Forestry. It demonstrates the primary features and editing functionality of the CMS.

***

## Getting Started

{{% pretty_screenshot img="/uploads/2019/08/select-generator.png" %}}

[Sign up](https://app.forestry.io/signup) for a Forestry account, and then navigate to the [dashboard](https://app.forestry.io/dashboard).

1. Click [Try one of our starters](/starters)
2. Select your Git Provider from the list of options. _BitBucket users need to select their SSG first and then copy the repository URL_.
3. A window will open asking you to give Forestry access to your repositories. _If you are not already logged in, your provider will prompt you for login credentials first._
4. Click "Authorize application" and wait a few seconds for the window to close.
5. Give the new repository a name, or keep the default.
6. Click "Create Site".
7. After this initial import, you will be redirected to the Forestry CMS user interface.

Congrats, your first site is being created!

This process may take a couple minutes. Forestry will create a new repository with your Git provider, push a copy of the starter site, and then start the import process. Once the import is complete, the CMS will load in all of your content and you can move on to the next section.

{{% tip %}}

To see where your site is stored you can navigate to your Git Provider ([GitHub](https://github.com), [Gitlab](https://gitlab.com) or [Bitbucket](https://bitbucket.org)) and select the relevant repository (e.g. "forestry-demo"). For example with GitHub your address would look like this https://<span></span>github.com/USERNAME/REPOSITORY.

{{% /tip %}}

***

## Managing Content

In Forestry, all of your content is sorted into _Sections_ under _Content_ in the sidebar. In the demo, these are _Pages, People, Posts_ and _Projects_.

![](/uploads/2018/12/connect-quickstart.png)

Take a look at the different sections by selecting them from the sidebar.

{{% tip %}}
You can customize your sidebar by going to _Settings_ and selecting the _Sidebar_ tab. Simply click on any of the section fields, change the _Label_ field to something else and reorder the section bars.

![](/uploads/2018/12/sidebar-quickstart.png)

Click on _Save_ and the Sidebar will update to the new section settings. You can also declare what files a Sidebar section should hold with [glob patterns](/docs/guides/misc/working-with-globs/). For further reference see our [docs](/docs/settings/content-sections/)
{{% /tip %}}

***

## Content Editor

Select the _Posts_ collection in the sidebar, then open up the editor by selecting the post _Example Draft_.

![](/uploads/2018/12/draft-post-editor.png)

On the left is the post's front matter (custom metadata for the post, like its title and thumbnail) and on the right is the content body of the post. The editor provides a visual, rich-text editor that is friendly for non-technical users and saves to markdown.

![](/uploads/2018/12/editor-quickstart.png)

Make your first edit by updating the post's title, and then click <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="1.2"><path d="M12 18c6 0 10-6 10-6s-4-6-10-6-10 6-10 6 4 6 10 6z"></path><circle cx="12" cy="12" r="2"></circle></g></svg> in the top-right corner to preview your changes.

Next, set the post as published so that it will be included when the site is deployed. In the top-right corner turn _Draft_ to _OFF_. You'll see the _Save Draft_ button now only says _Save_.

Click the _Save_ button to deploy your site. By default Forestry saves your changes back to your repository.

**Additional resources:**

* Create great content with the powerful [Markdown Editor](/docs/editing/markdown-editor)
* Configure [Front Matter Templates ](/docs/settings/front-matter-templates/)for new content
* Customize your Preview by adding [Custom Preview Commands](/docs/previews/build-commands/)
* Allow Editors to add custom code [Snippets](/docs/settings/snippets/)
* Create Modular Content with [Blocks](/docs/settings/fields/blocks/) (also known as Advanced Custom Fields or Matrix Fields)

***

## Data Files

_Data files_ allow you to set up metadata that isn't associated with a specific page, like your company's contact information.

![](/uploads/2018/12/datafiles-quickstart.png)

In Forestry, Data Files show up in the sidebar with your content files, select _Contact Information_ to pull up the demo site's company information.

Update the _Twitter_ option from "forestryio" to "twitter" or any other handle, and then click <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="1.2"><path d="M12 18c6 0 10-6 10-6s-4-6-10-6-10 6-10 6 4 6 10 6z"></path><circle cx="12" cy="12" r="2"></circle></g></svg> in the top-right corner to preview the website.

Once the preview has loaded, you'll see that the Twitter feed on the homepage has updated.

![](/uploads/2018/12/twitter.png)

{{% tip %}} Previewing data files and menus will always redirect you to the homepage of your site, because they aren't associated with a specific page. {{% /tip %}}

***

## Media Library

The Media Library allows content editors to easily upload and manage media files throughout your site. It currently supports images and PDFs.

![](/uploads/2018/12/media-library-quickstart.png)

Under _Site_ in the sidebar, select _Media Library_. You'll see all of the already uploaded images in the demo site.

{{% tip %}}
By default, the Media Library uploads media to `uploads/:year:/:month:/:day:/`. This can be changed in your site's _Settings_.
{{% /tip %}}

You can upload media by dragging images into the Media Library from your desktop or by clicking the _Upload_ button in the top-right corner.

Next, select the _Projects_ collection in the sidebar, and open up _Portable EEG Monitoring Device_. In this page's fields (front matter), try updating the _Banner Image_ by clicking _Replace_, and choosing another image from the Media Library.

![](/uploads/2018/12/replace-image-quickstart.png)

Feel free to hit _Save_ to deploy your changes.

**Additional Resources:**

* Connect the Forestry Media Library with [Cloudinary](/docs/media/cloudinary/) for optimized image delivery

***

## Deployment

We recommend using some time to research the different [hosting options](/docs/hosting/) for static sites to find the one that fits your needs best: [Vercel](https://vercel.com/home), [Netlify](https://netlify.com), [GitHub Actions](https://github.com/features/actions), etc.

**Additional Resources:**

* Automate deployment with [Circle CI](https://forestry.io/blog/automate-deploy-w-circle-ci/)
* Integrate Forestry with other providers via [Webhooks](/docs/hosting/webhooks/)

***

## Team and Collaborators Management

Invite your clients or team members to allow them to update the site with Forestry.

Editors that only have access to one specific site are called Collaborators in Forestry. These roles are ideal for non-technical users that maintain a site on a regular basis (e.g. writers, clients or marketers).

External collaborators roles are always free, per site you can add up-to 3 of these roles.

For teams that need more advanced collaborators & teams Forestry provides [Organizations](/docs/collaboration/organizations/). Organizing editors, developers and admins in [User roles](/docs/settings/collaborators#site-access-levels) makes managing your whole team across multiple sites simple (paid feature).

***

## Next Steps

This tour only covers the basics of what Forestry offers. Now that you've set up your first site in Forestry, you can begin exploring all of Forestry's features at your own pace through this documentation.

### Editing

Forestry has many more features for content editors:

* Add structured metadata with [Front Matter](/docs/editing/front-matter)
* Create great content with the powerful [Markdown Editor](/docs/editing/markdown-editor) and with [Data Files](/docs/editing/data-files)
* Learn more about the [Media Library](/docs/editing/media-library)

### Developing

Forestry offers many features that provide flexibility to developers:

* Create [Front Matter Templates](/docs/settings/front-matter-templates/) to allow editors to create new content
* Setup [Instant Previews](/docs/previews/instant-previews) to make previewing content changes lightning fast.
* Allow editors to access the Content Manager from their site via a [Remote Admin](/docs/editing/remote-admin/)
* Access outgoing [Webhooks](/docs/hosting/webhooks/) to notify third-party applications
* Make your Forestry theme available for others to use with the [Import Button](https://forestry.io/docs/import-button/).
