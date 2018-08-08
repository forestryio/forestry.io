---
title: Overview
weight: 1
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    name: All Settings
    parent: Settings & Configuration
    weight: 1

---
## Logo

![](/uploads/2018/01/settings-logo.png)The logo setting allows you to customize the branding of Forestry CMS by allowing you to replace the Forestry logo in various touchpoints in the CMS.

## Site Name

![](/uploads/2018/01/settings-sitename.png)Site name allows you to customize the display name of your site in the Forestry UI. This will update the display in the dashboard, in notifications, and various touchpoints.

## URL

![](/uploads/2018/01/settings-url.png)The URL setting allows you to provide the URL to your production website, which allows editors to open the production website from the sidebar.

## Timezone

![](/uploads/2018/01/settings-timezone.png)The timezone setting allows you to configure what timezone should be used when saving dates, previewing, and publishing. This setting effects the output of the [date field](/docs/settings/fields/datetime)

## Deployment

![](/uploads/2018/01/settings-deployment.png)The deployment settings allow you to configure the behaviour of the CMS related to your [hosting](/docs/hosting/) settings.

### Options

* _Deploy on Git Push_: when enabled, Forestry will automatically publish your site when changes are pushed to your Git repository.

## Project Paths

![](/uploads/2018/01/settings-projectpaths.png)Project paths allow you to configure features of Forestry related to your repository.

### Options

* _Admin Path_: the path from the root of your repository to where the [Remote Admin](/docs/editing/remote-admin/) should be deployed.

## File Paths

![](/uploads/2018/01/settings-filepaths.png)

The File Paths settings allow you to configure how the Media Library operates. See the [Media Library documentation](/docs/editing/media-library#configuring-the-media-library) for more information.

## Hugo Version

Hugo Version allows you to configure which Hugo version Forestry uses to build your Hugo site.

{{% tip %}}
[Look here](/docs/faqs/jekyll-version/) for information on how to configure which version of _Jekyll_ Forestry uses to build your site.
{{% /tip %}}

## New File Format

![](/uploads/2018/01/settings-newfileformat.png)The new file format setting allows you to configure what file format Forestry should create new content in.

### Options

* _Markdown:_ will create all new content as `.md` files. The default and recommended setting.
* _HTML_: will create all new content as `.html` files. This is a beta feature.

{{% tip %}} This setting affects whether the [Markdown Editor](/docs/editing/markdown-editor/) or a plaintext editor (for HTML) will be used when creating new content through Forestry.
{{% /tip %}}

## Webhook URL

![](/uploads/2018/01/settings-webhook.png)The Webhook URL setting allows you to configure an outgoing webhook to trigger third-party applications when events occur in Forestry. Learn more in the [Webhooks documentation](/docs/hosting/webhooks/).