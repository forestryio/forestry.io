---
title: Product Tour
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
menu:
  docs:
    parent: welcome
weight: 3
---
## Overview
This tour will walk you through setting up your first site in Forestry. It demonstrates the primary features and editing functionality of the CMS.

Feel free to fork our [Belkirk demo site](https://github.com/forestryio/belkirk-jekyll-demo) on GitHub, or just follow along with the steps below to get acquainted with Forestry.

*The Belkirk College demo site is an open-source example site built using Jekyll.*

---

## Getting Started
For the purposes of this product tour, we're assuming you have a [GitHub account](https://github.com/signup) and have forked the [Belkirk College demo site](https://github.com/forestryio/belkirk-demo-site).

[Sign up](https://app.forestry.io/signup) for a Forestry account, and then navigate to the [dashboard](https://app.forestry.io/dashboard).

TK: image of dashboard

Click "Add Site". In the modal the opens, choose "Import existing site".

TK: image of SSG choice

You'll be prompted to choose a static site generator. From the dropdown list, choose *Jekyll*.

TK: image

Now, choose "GitHub" from the list of options.

TK: image

You'll be prompted to choose "Public Repos" or "Private Repos". Your fork is a public fork, so click "Public Repos". 

TK: image

This will redirect you to GitHub, and prompt you to enter your login credentials if you are not already logged in.

TK: image

Give Forestry access to your GitHub repositories by clicking "Authorize application".

TK: image

Once authorized, you will be redirected back to Forestry to choose the repository you wish to import. In the first dropdown, select `accountname/belkirk-college-demo`, and in the second dropdown select `master`.

TK: image

Lastly, give your new site a name in Forestry, such as "Belkirk Product Tour", and then click *Next*.

TK: image

Congrats, your first site is being imported! When your first site has finished importing, the *Processing* label will disappear. Click your site from the list to open up the CMS.

---

## Managing Content
In Forestry, all of your content is sorted into [*Content Types*](/docs/editing#content-types). You can see these in the sidebar under *Content*. In the demo, these are:

TK: image of Belkirk in Forestry

- **Pages:** all content that is not part of a content type
- **People:** a Jekyll collection of "staff members"
- **Posts:** a Jekyll collection of blog posts
- **Projects:** a Jekyll collection of projects
- **Publications:** a non-output Jekyll collection of publications

When you first enter the CMS, you will be dropped into the *Pages Content Type*. Take a look at the *Posts* by clicking *Posts* in the sidebar.

{{% tip %}}
All of the *Posts* in the Belkirk site are composed of this product tour. Feel free to follow along in the CMS!
{{% /tip %}}

---

## Editing & Previewing Content

Open the Markdown Editor by navigating to *Pages*, and clicking *Home*.

TK: image of home in editor

You'll see the 

---

## Drafting & Publishing New Content

---

## Customize Front Matter

---

## Next Steps
This tour only covers the basics of what Forestry offers. Now that you've set up your first site in Forestry, you can begin exploring all of Forestry's features at your own pace through this documentation:

### Editing
Forestry has [many more features](/docs/editing/) for content editors. 

- Create great content with the powerful [Markdown Editor](/docs/editing/markdown-editor) and [Data Files](/docs/editing/data-files)
- Manage your site's media with the [Media Library](/docs/editing/media-library)
- Create and manage [menus](/docs/editing/menus) for navigation and site links
- Add structured metadata with [Front Matter](/docs/editing/front-matter)
- Access the CMS from your own domain with the [Remote Admin](/docs/editing/remote-admin)

### Hosting
Forestry can handle building and deploying your static site for you, or can integrate with third-party services that handle deployment. 

You have many [options](/docs/hosting/)!

### Team Management
[Invite your clients or team members](/docs/settings/team-management) to update your site for you. [User roles](/docs/settings/team-management#user-roles) make inviting your whole team easy.