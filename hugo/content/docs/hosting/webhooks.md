---
aliases:
- /docs/site-configuration/web-hooks/
title: Webhooks
weight: 5
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 00:00:00 -0400
menu:
  docs:
    parent: hosting
layout: single
---
Forestry supports *outgoing webhooks* to notify third-party applications about events that occur in Forestry. This allows developers to trigger custom deployments, send out notifications, and much more.

## Events that support webhooks

*   When your site is published
*   When your site is imported

## What can you do with a webhook?

*   Trigger cache invalidation every time someone publishes your site  
*   Trigger a custom build script when someone publishes your site

## Setting up webhooks

Navigate to the *Settings* page in the CMS, and under *Webhook URL* specify the URL endpoint that you want outgoing webhooks to post to.

TK: image

## Webhook format

Forestry will make a post to your URL with a JSON payload. For example:

```
{
    "event": "post_publish",
    "success": true,
    "error": null
}​
```

If there is an error, the `success` parameter will be set to `false`, and the `error` parameter will provide the error message. For example:

```
{
    "event": "post_publish",
    "success": false,
    "error": "FTP credentials incorrect"
}​
```