---
title: Overview
weight: 1
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: settings
layout: single
---
## Logo
TK: image

The logo setting allows you to customize the branding of Forestry CMS by allowing you to replace the Forestry logo in various touchpoints in the CMS.



## Site Name
TK: image

Site name allows you to customize the display name of your site in the Forestry UI. This will update the display in the dashboard, in notifications, and various touchpoints.

## URL
TK: image

The URL setting allows you to provide the URL to your production website, which allows editors to open the production website from the sidebar.

## Timezone
TK: image

The timezone setting allows you to configure what timezone should be used when saving dates, previewing, and publishing. This setting effects the output of the [date field](/docs/fields/date)

## Deployment
TK: image

The deployment settings allow you to configure the behaviour of the CMS related to your [hosting](/docs/hosting/) settings.

### Options

- *Deploy on Git Push*: when enabled, Forestry will automatically publish your site when changes are pushed to your Git repository.

## Media Library
TK: image

The Media Library settings allow you to configure how the Media Library operates. See the [Media Library documentation](/docs/editing/media-library#configuring-the-media-library) for more information.

## Hugo Version
TK: image

Hugo Version allows you to configure which Hugo version Forestry uses to build your Hugo site.

{{% tip %}}
[Look here](/docs/faqs/jekyll-version/) for information on how to configure which version of *Jekyll* Forestry uses to build your site.
{{% /tip %}}

## New File Format
TK: image

The new file format setting allows you to configure what file format Forestry should create new content in.

### Options

- *Markdown:* will create all new content as `.md` files. The default and recommended setting.
- *HTML*: will create all new content as `.html` files. This is a beta feature.

{{% tip %}}
This setting effects whether the [Markdown Editor](/docs/editing/markdown-editor/) or [HTML editor](/docs/editing/html-editor/) will be used when creating new content through Forestry.
{{% /tip %}}

## Webhook URL
TK: image

The Webhook URL setting allows you to configure an outgoing webhook to trigger third-party applications when events occur in Forestry. Learn more in the [Webhooks documentation](/docs/hosting/webhooks/).