---
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
publishdate: 2019-01-08 17:00:00 -1100
authors:
- Sebastian Engels
expirydate: 2030-01-01 04:00:00 +0000
layout: single
title: Cloud Media Storage with AWS S3
categories:
- CMS
headline: ''
description: ''
textline: ''
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
date: 2019-01-08 02:34:02 -1100
draft: true

---
Forestry supports storing your media in your own [AWS S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html).

## Linking Your S3 Bucket

![](/uploads/2019/01/s3-settings.png)

## AWS S3 Configuration

{{% tip %}} The S3 configuration can be rather overwhelming if you're unfamiliar with the service. For our use case it's safe to keep the defaults unless mentioned otherwise in the guide below. {{% /tip %}}

 1. [Sign up for an AWS account](https://portal.aws.amazon.com/billing/signup#/start)
 2. Log in to your dashboard and open the _Services_ dropdown in the top bar, then click on the **S3** service.
 3. Create a Bucket and make note of the **Bucket name** for later.
 4. In the _Set Permissions_ step ensure to uncheck the following options:
    * **Block new public ACLs and uploading public objects**
    * **Remove public access granted through public ACLs**
 5. Create User Credentials for the new Bucket. Open _Services_ and select the **IAM** service.
 6. Navigate to _Users_ and click on **Add User**.
 7. Grant **Programmatic access** to create an _access key ID_ and _secret access key._
 8. Choose **Attach existing policies directly.** You'l need to click on **Create Policy** in the _Set Permissions_ step.
 9. Name and set your permissions for your policy. Below is an example of the minimum permissions necessary for Forestry's Media Library.

    ![](/uploads/2019/01/policy-settings.png)
10. Select your newly created policy as your user's permissions and finish the creation of your new user.

    ![](/uploads/2019/01/permissions-new-user.png)
11. Take note of the **Access key ID** and the **Secret access key** and navigate to the _Media_ tab on your site's _Settings_ in Forestry
12. Select **Amazon** **S3** as a _Media Storage Provider_ and fill in the **Bucket**, **Access Key** and **Secret**. Click on _Save Media Settings_. You are now connected to your S3 bucket. You can now upload an image in the _Media_ section to test your connection.

![Cloudinary sample image in media library](/uploads/2018/05/media-library-cloudinary.png)

## Recommended Path Settings

You will want to adjust your paths in the **Media** section to work with S3.

* **Public Path**: You should enter the full URL to your S3 bucket. This will look something like `https://``{{ REGION }}``.amazonaws.com/``{{ BUCKET_NAME }}/`. 
  * AWS REGION format looks like `s3-us-west-2` except for the US EAST (North Virgina) region which is simply `s3`. ([full region list](https://docs.aws.amazon.com/general/latest/gr/rande.html))
* **Front Matter Path:** Activate the toggle in this section to use a different **public path** when inserting an image into front matter.

## Migrating Existing Media

Currently, we are not able to automatically migrate existing media from a git repo to a user's AWS S3 Bucket. We recommend logging in to your AWS console, select your Bucket and bulk upload your images there. After the images are in your Bucket, they will also appear in your Media Library in Forestry.

Unfortunately, for the time being, you will need to manually update your front matter to reassign the new images.