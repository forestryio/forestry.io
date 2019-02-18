---
aliases:
- "/docs/quickstart/"
title: Product Tour
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
weight: 4
date: 2018-12-12 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Quick Start
    weight: 1

---
## Overview

This tour will walk you through setting up your first site in Forestry. It demonstrates the primary features and editing functionality of the CMS.

***

## Getting Started

![](/uploads/2018/12/select-your-ssg.png)

[Sign up](https://app.forestry.io/signup) for a Forestry account, and then navigate to the [dashboard](https://app.forestry.io/dashboard).

1. Click "Try our Jekyll starter template!"
2. Select your Git Provider from the list of options. _Bitbucket users need to copy the_ [_demo repository_](https://github.com/forestryio-templates/belkirk-jekyll-demo) _to their account and select "Jekyll" in the first step._
3. A window will open asking you to give Forestry access to your repositories. _If you are not already logged in, your provider will prompt you for login credentials first._
4. Click "Authorize application" and wait a few seconds for the window to close.
5. Give the new repository a name, or keep the default: `forestry-demo`
6. Click "Create Site"
7. After a moment you will be redirected to the Forestry Content Manager (CMS)

Congrats, your first site is being created!

This process may take a couple minutes. Forestry will create a new repository with your git provider, push a copy of our [Belkirk Jekyll Demo](https://github.com/forestryio-templates/belkirk-jekyll-demo "Belkirk Jekyll Demo Repo") site, and then start the import process. Once the import is complete, the CMS will load in all of your content and you can move on to the next section.

{{% tip %}}

To see where your site is stored you can navigate to your Git Provider ([GitHub](https://github.com), [Gitlab](https://gitlab.com) or [Bitbucket](https://bitbucket.org)) and select the relevant repository (e.g. "forestry-demo"). For example with GitHub your address would look like this https://<span></span>github.com/USERNAME/REPOSITORY.

![](/uploads/2018/12/github-forestry-demo.png)

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

Click the _Save_ button to deploy your site. By default Forestry saves your changes back to your repository. You can [set up deployment](#deployment) to build and send your site to GitHub Pages, (S)FTP Servers, AWS S3 and [other hosting options](/docs/hosting/).

**Additional resources:**

* Create great content with the powerful [Markdown Editor](/docs/editing/markdown-editor)
* Configure [Front Matter Templates ](/docs/settings/front-matter-templates/)for new content
* Customize your Preview by adding [Custom Preview Commands](https://forestry.io/docs/settings/build-commands/)
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

When you hit the Save button, Forestry will create a commit and push it back to your source repo. If you already have an automated build and deploy process connected to your repository, your site will deploy when content is updated.

Alternatively, Forestry can handle this process for you. In your deployment settings, you can configure a deployment target that uses SFTP, Amazon S3, or GitHub Pages. Forestry will then build and deploy your site when you hit the Save button.

Under _Site_ click on _Settings_ and choose _Deployment_. You'll see a dropdown with all of your [deployment options](/docs/hosting/) that can currently be handled by Forestry. See _Additional Resources_ below to find specific guides for selected deployment methods.

![](/uploads/2018/12/deployment-quickstart.png)

We recommend using some time to research the different hosting options for static sites to find the one that fits your needs best (e.g. [GitHub Pages](/docs/hosting/github-pages/), [AWS S3](/docs/hosting/s3-cloudfront-stack/), Zeit or Netlify).

**Additional Resources:**

* Our [guide](/docs/hosting/github-pages/) to set up free hosting with Github Pages
* Set up a static site hosting stack on [AWS with CloudFormation](/docs/hosting/s3-cloudfront-stack/)
* Integrate Forestry with other providers via [Webhooks](/docs/hosting/webhooks/)
* Customize your [Build Commands](https://forestry.io/docs/settings/build-commands/) for custom build processes

***

## Team and Guest Management

Invite your clients or team members to allow them to update the site with Forestry.

Editors that only have access to one specific site are called Guests in Forestry. These roles are ideal for non-technical users that maintain a site on a regular basis (e.g. writers, clients or marketers). You can add a Guest to your site in the sidebar by clicking on the _+_ and adding their e-mail address.

![](/uploads/2018/12/add-guest-quickstart.png)

Guest roles are always free, per site you can add up-to 3 of these roles.

For teams that need more advanced team management Forestry provides [Organizations](/docs/settings/team-management#organizations). Organizing editors, developers and admins in [User roles](/docs/settings/team-management#user-roles) makes managing your whole team across multiple sites simple (paid feature).

***

## Next Steps

This tour only covers the basics of what Forestry offers. Now that you've set up your first site in Forestry, you can begin exploring all of Forestry's features at your own pace through this documentation:

### Editing

Forestry has many more features for content editors:

* Create great content with the powerful [Markdown Editor](/docs/editing/markdown-editor) and with [Data Files](/docs/editing/data-files)
* Learn more about the [Media Library](/docs/editing/media-library)
* Learn how to create [Menus](/docs/editing/menus) for navigation and site links
* Add structured metadata with [Front Matter](/docs/editing/front-matter)

### Developing

Forestry offers many features that provide flexibility to developers:

* Create [Front Matter Templates](/docs/settings/front-matter-templates/) to allow editors to create new content
* Add [Custom Build Commands](/docs/settings/build-commands/) to add Frontend Asset Pipelines (e.g. Gulp, Webpack etc.)
* Allow editors to access the Content Manager from their site via a [Remote Admin](/docs/editing/remote-admin/)
* Access outgoing [Webhooks](/docs/hosting/webhooks/) to notify third-party applications
* Make your Forestry theme available for others to use with the [Import Button](https://forestry.io/docs/import-button/).