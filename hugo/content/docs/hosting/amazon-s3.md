---
title: Amazon S3
weight: 4
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
layout: single
menu:
  docs:
    parent: Hosting
    weight: 2

---
{{% tip "Disclaimer" %}}
This guide assumes you already have an existing [Forestry Account](https://app.forestry.io/signup), [Amazon AWS Account](https://aws.amazon.com/free/), and a repository with a Jekyll or Hugo project. If you don't have an existing project, check out our [Quick start guide](/docs/quickstart/), which contains guides and resources for building your first static site.
{{% /tip %}}

## Overview

In order for Forestry to deploy your site to Amazon S3, this guide will walk you through:

* Configuring an Amazon S3 bucket to serve your static site.
* Creating an Amazon IAM User to give Forestry access to your S3 Bucket.
* Configuring your Forestry site to deploy to your new S3 bucket.
* Pointing your domain to your S3 bucket using Amazon Route 53.

## Create a Bucket
To get started, you must create an S3 bucket for Forestry to deploy to.

![Create a bucket](/uploads/2018/01/s3-create-bucket.png)

* Log in to your Amazon AWS account and go to the [S3 Dashboard](https://console.aws.amazon.com/s3/home).
* From the [S3 Dashboard](https://console.aws.amazon.com/s3/home), click `Create Bucket` to open the set up.
* Set the name of your bucket to your website domain *(e.g, forestry.io)* , select a region *(e.g, US north)*,  and click `Create`.

**Note:** in order for a website to work correctly with S3, the bucket must be named after the domain.

## Setting Up The Bucket
In order for your new S3 bucket to work as a website, you must set it up with the correct properties and permissions.

### Setting Up Properties
Now that your bucket is created, click it in the S3 dashboard and then navigate to the `Properties` tab.

![Enable static hosting](/uploads/2018/01/s3-static-hosting.png)

* From this screen click `Static website hosting` and enable `Use this bucket to host a website`.
* You need to configure your index document. This is usually `index.html`.
* You need to configure your error document. This is usually `404.html`.
* Click `Save`


### Setting Up Permissions
Now we need to properly configure the bucket with a *permission policy* that will allow visitors to access your static site.

![Bucket Policy](/uploads/2018/01/s3-bucket-policy.png)

* Navigate to the `Permissions` tab, and then to `Bucket Policy`.
* Copy and paste the policy below into the bucket policy editor.
* Replace `example.com` in the `Resource` field with the name of your bucket *(e.g, forestry.io)*.
* Click `Save`

```
{
  "Version": "2012-10-17",
    "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::example.com/*"
    }
    ]
}
```


## Setting Up An IAM User
Amazon AWS uses IAM users to control access to different services. You should setup an IAM user for usage in Forestry that only has access to your website bucket.

![Add User](/uploads/2018/01/s3-add-user.png)

* Go to the [IAM Dashboard](https://console.aws.amazon.com/iam/home), click `Users`, and then click `Add user`.
* Set the user name to `forestry` and ensure that `programmatic access` is checked.
* Click `Next`.

### Setting Up User Permissions
Now you must set up a *permission policy* for the new user. This dictates how the user is allowed to interact with the S3 Bucket.

![Add User Policy](/uploads/2018/01/s3-add-user-policy.png)

* Click `Create policy`
* On the new tab that opens, select `Policy Generator`
* From the policy generator, you can create *permission statements*. We’re going to create two.

**Statement 1:**

* Set the `Effect` to `Allow`
* Set the `AWS Service` to `Amazon S3`
* From `Actions` enable: 
   * `s3:PutObject`
   * `s3:GetObject`
   * `s3:DeleteObject`
* Set the `Amazon Resource Name (ARN)` to `arn:aws:s3:::your-bucket-name/*`. *Ensure you change `your-bucket-name` to the name of your bucket*

**Statement 2**

* Set the `Effect` to `Allow`
* Set the `AWS Service` to `Amazon S3`
* From `Actions` enable: 
   * `s3:ListBucket`
   * `s3:GetBucketLocation`
* Set the `Amazon Resource Name (ARN)` to `arn:aws:s3:::your-bucket-name`. *Ensure you change `your-bucket-name` to the name of your bucket*

* Now click `Next`, give your policy a name *(e.g, forestry-policy) *, and then click `Create Policy`

### Assign The User Policy
Now that you’ve created a policy for your new user, return to the previous tab where you clicked `Create Policy`.

![Search User Policy](/uploads/2018/01/s3-search-user-policy.png)

* Click the `Refresh` button, and then search for your new policy by the name you provided.
* Ensure the policy is checked, and then hit `Next`.
* On the review page, ensure your policy is listed under Permissions, and then hit `Create User`
* Before finishing, click the `Download .csv` button. This will download the user information, including the `Access Key ID` and `Secret Access Key` you’ll need to set up deployment in Forestry.

## Setup S3 in Forestry
Now that you have an S3 Bucket created with an IAM user that Forestry can use to access it, we can now set up deployment for your site!

![Search User Policy](/uploads/2018/01/s3-forestry-setup.png)

* Navigate to the `Settings` page in your site on Forestry, and then click the `Hosting` tab.
* From here, set the `Connect` as `Amazon S3`
* Now you must fill out the connection settings with everything we just set up.
* Enter your new bucket’s name in `Bucket` *(e.g, forestry.io)*
* From the .csv file you downloaded when creating the user, enter the `Access Key ID` in `Access Key`
* From the .csv file you downloaded when creating the user, enter the `Secret Access Key` in `Secret`
* You can optionally enable gzip compression, which decreases the size of your site and works fine for most cases
* You can optionally add a subpath to your deployment, in case you want to deploy to a sub-directory* (e.g, forestry.io/blog)*
* Click `Save Settings`.

Now, when you publish any page, we will deploy your site to the S3 bucket. If any errors occur, we will output them in your Site Activity.

## Pointing Your Domain to Your New Bucket
The final step in setting up your site to deploy to Amazon S3 is setting up your domain to serve the contents of your new S3 Bucket. We’ll do this with [Amazon’s Route 53 DNS Service](https://console.aws.amazon.com/route53/).

![Setup Domain](/uploads/2017/12/create-hosted-zone-1.png)

* Go to [Route 53](https://console.aws.amazon.com/route53/)
* Click on `Hosted Zones` and then `Create Hosted Zone`.
* Set your domain name to be the same as your bucket (*e.g, forestry.io*), and then click `Create`.

### Create A Records
You must create an A-record that tells the DNS which S3 bucket to serve. We need to do this for your root domain *(e.g, forestry.io)* and your www. subdomain *(e.g, www.forestry.io)*.

**Root Domain**

![Setup Root A Records](/uploads/2017/12/a-record.png)

* Click `Create Record Set`
* In the new window that opens, set the `Type` to A - `IPv4 Address`
* Ensure that `Alias` is set to `Yes`.
* Select your new S3 bucket in the `Alias Target` dropdown.
* Click `Create`

**WWW Sub-domain**

![Setup WWW A Records](/uploads/2017/12/www-subdomain.png)

* Click `Create Record Set`
* In the new window that opens, set the name to `www`.
* Ensure that `Alias` is set to `Yes`.
* Select your new S3 bucket in the `Alias Target` dropdown.
* Click `Create`

### Setting Up Your Domain Records

![Name servers](/uploads/2017/12/name-servers.png)

Now you must set up your domain with the new nameservers provided by Route 53.

Save the the 4 or more URLs provided under the record with the type `NS`, as we will add them as the name servers for your domain.

Depending on your domain registrar (e.g, GoDaddy, Hover, Name.com, NameCheap, etc), this will work differently.

For this example, we’re using name.com. Under the `Nameservers` option of our name.com account, we’ve added the four name servers.

![Name.com](/uploads/2017/12/name-servers-registrar.png)

It may take up to 24 hours for these changes to take effect and your domain to start showing your S3 Bucket.

**Note:** When you copy the name servers over, be sure to not include the last dot character.

## Wrapping Up
Provided everything is set up correctly, your domain should be serving your S3 bucket. From here on, every time you save or publish a page Forestry will build your site and deploy to S3.