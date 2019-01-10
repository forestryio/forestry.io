---
title: "Image Handling with S3 \U0001F5BC️ and Billing Contact Information \U0001F4B5"
description: ''
date: 2019-01-09 12:00:00 -1100
authors:
- Sebastian Engels
publishdate: 2019-01-09 17:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories:
- CMS
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
Happy New Year! We're starting into 2019 with an exciting new feature. Today we can announce S3 support as an image storage provider for Forestry.

The S3 integration makes it possible to efficiently store, organize and deliver images while keeping the editing experience in Forestry simple and clean.

![](/uploads/2019/01/Forestry S3.jpg)Editors, marketers and writers can continue to use the Forestry Media Library without even knowing that they are using S3 in the backend. Making it possible to use drag & drop upload and previewing their media assets.

![](/uploads/2019/01/dragndrop.png)

With S3 support you can now store your images outside of your repo and take control of your image handling. S3 Buckets are widely supported and therefore open up opportunities to add an image manipulation service of your choice. Popular solutions include [imgix](https://docs.imgix.com/setup/quick-start) and [Serverless-Image-Handler](https://aws.amazon.com/answers/web-applications/serverless-image-handler/).

![](/uploads/2019/01/manipulations-2.png)

**Ready to get started with S3?** Follow our [How-to guide](/docs/media/cloud-media-storage-with-aws-s3/) in the docs.

***

### New Billing Contact Information 💵

You can now update all your billing information for Organizations right in the app. Go to your Organization's settings and navigate to the `Billing` tab.

![](/uploads/2019/01/billing-information.png)

{{% tip %}}

To see your Billing Information you need to be the owner of your Organization.

{{% /tip %}}

***

### Fixed a Few Bugs 🐛

* **Document Editing Status:** fixed an issue where the “currently being edited by…” status for a document would take 5-15 seconds to clear.