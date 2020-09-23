---
title: Static Site Hosting on AWS
publishdate: 2017-09-18T04:00:00.000+00:00
expirydate: 2020-01-31T04:00:00.000+00:00
date: '2017-09-18T04:00:00.000+00:00'
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
layout: single

---
{{% warning %}}

**Forestry stopped building and deploying sites on January 1st, 2020**.    
See [how to deploy to host your site](/docs/hosting/)

{{% /warning %}}

This guide assumes you already have an existing [Forestry Account](https://app.forestry.io/signup), [Amazon AWS Account](https://aws.amazon.com/free/), and a static site connected to Forestry. If you don't have an existing project, check out our [Quick start guide](/docs/quickstart/), which contains guides and resources for building your first static site.

## Overview

This guide will walk you through setting up a static site hosting stack on AWS with CloudFormation. Using CloudFormation, we can set up our "stack" of services quickly and easily by just providing a little bit of information.

For more info on how CloudFormation works, as well as how we built our stack, check out our blog post: [Automate Your Static Hosting Environment With AWS CloudFormation](https://forestry.io/blog/automate-your-static-hosting-environment-with-aws-cloudformation/)

In this guide, you have the option of using one of two CloudFormation templates.

***

### Basic Template

This template will create:

* An **S3 bucket** to store your files
* A **CloudFront distribution** to cache and serve your files to the public
* A **Lambda@Edge** function to provide some expected behavior that is not available from CloudFront by default
* An **IAM User** with write access to the bucket. This user is how Forestry will deploy your website.

The basic template will create a website on a **.cloudfront.net** domain. You might choose this option if you're just testing things out, don't want to bother with a custom domain, or want to handle all the DNS stuff on your own.

To get started with the **basic template**, click the button below:

{{% aws_launch_stack
title="Launch the basic static site stack"
stackName="basic-static-site"
templateURL="https://s3.amazonaws.com/forestryio-cf-templates/static-site-hosting/basic-s3-cloudfront.yml" %}}

***

### Complete Template

This template will do everything the basic template does, but will also:

* Create a **DNS Record** in **Route 53** to route a custom domain to your CloudFront distribution
* Configure the CloudFront distribution to work with this custom domain
* Create a **TLS Certificate** to serve your site over HTTPS

The complete template is recommended if you already have a custom domain that you want routed to your site.

{{% tip %}}
Before you get started with the complete template, you will need to create a Hosted Zone for your domain in Route 53. If you purchased your domain through Route 53, this will be created for you. If not, refer to the [AWS Route 53 Documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html)
{{% /tip %}}

To get started with the **complete template**, click the button below:

{{% aws_launch_stack
title="Launch the complete static site stack"
stackName="my-static-site"
templateURL="https://s3.amazonaws.com/forestryio-cf-templates/static-site-hosting/advanced-route53-acm.yml" %}}

***

## Running the CloudFormation Template

![](/uploads/2018/09/cf-step-1.png)

After deciding whether you want to use the **basic** or **complete** template, click the corresponding button above. This will take you to the CloudFormation Stack Creation page (you will be required to log in to your AWS account if you are not already logged in.) This screen will have pre-selected our CloudFormation template for you. Click **Next.**

![](/uploads/2018/09/cf-step-2.png)

You will then proceed to the **Stack Details** screen. Here, you will configure your stack. Choose a **Stack name** that uniquely identifies this project, as it will be used in the names of your resources, and will be the way you reference this stack from the CloudFormation console. From here, specify the path to your error page, the default index document, and log retention period.

If you're using the **complete** template, you will also need to enter in your domain name and select your hosted zone. If the appropriate hosted zone is not available in the dropdown, ensure that you have created it first. You also have the option to avoid creating the TLS certificate if you wish.

![](/uploads/2018/09/cf-step-3.png)

After clicking **Next**, you are taken to the Options screen. Here you may add tags for the generated resources, delegate the resource creation to a separate IAM role, and add monitoring options. None of this is required and much of it is not necessary for such a simple stack, so go ahead and click **Next** here.

![](/uploads/2018/09/cf-step-4.png)

You will be presented with a screen to review your stack configuration. Because our stack creates an IAM role, you must check the box labeled **I acknowledge that AWS CloudFormation might create IAM resources** before clicking **Next**.

![](/uploads/2018/09/cf-stack-dashboard.png)

You will then be taken to your CloudFormation dashboard. This is where you will see all of your CloudFormation stacks and their progress. If you don't see the stack you just created, give it a moment and refresh, and it should appear. Click on the name of your stack to view its progress.

View your stack details and open the **Resources** pane to see all of the resources in your stack. This pane will gradually fill up with information as your CloudFormation template executes.

### Validating the Certificate

If you are running the **complete** template and chose to have it create a TLS Certificate for you, you must perform a manual step to enable certificate validation. **_Until this step is completed, your template will not finish running._**

Navigate to the **Certificate Manager** Console by searching for it in the services navigation or navigating to [https://console.aws.amazon.com/acm](https://console.aws.amazon.com/acm). You should see a certificate request for your domain with a status of **Pending validation**.

![](/uploads/2018/09/cf-domain-validation.png)

Expand this row, and expand the details for your domain. Here you will see a button labeled **Create record in Route 53**. Click this button, and then confirm your action in the modal that pops up.

Once this step is complete, your certificate will be issued after the domain validation finishes. This may take a while, so be patient!

## Adding Publish Credentials to Forestry

Forestry needs three pieces of information to publish to your S3 Bucket: the **Bucket Name**, **Access Key ID**, and **Secret Key**.

### Bucket Name

To find the name of your bucket, open the **Resources** pane in your stack details. The resource with the Logical ID of `S3Bucket` is your S3 Bucket. If you don't see this resource, wait a few moments and refresh the page. The Physical ID of this resource is the name of your S3 bucket, and should look something like `{stackname}-s3bucket-{randomstring}`.

### Access Keys

Your CloudFormation stack contains an **IAM User** with access to write files to your S3 Bucket. However, the stack does not create access keys for this user automatically.

To create an access key, again refer to the **Resources** pane in your stack details. Locate the resource with the Logical ID of `PublishUser` and click on the Physical ID to be taken to the IAM management page for this user.

![](/uploads/2018/09/cf-step-5.png)

Click on the **Security credentials** tab and, under the **Access keys** section, click on **Create access key**. A modal window will pop up containing the **Access key ID** and the **Secret access key**.

{{% warning "Store your secret access key somewhere safe!" %}}
The secret access key can only be viewed in this modal. Once you dismiss it, you cannot view the secret access key again. If you lose it, you will have to generate a new pair of keys.
{{% /warning %}}

### Adding to Forestry

![](/uploads/2018/09/cf-step-6.png)

Once you have these credentials, open your website in Forestry and navigate to the **Settings**. Click on the **Deployment** tab, and select **Amazon S3** as your connection. You will be presented with fields to fill in your **Bucket**, **Access Key**, and **Secret**.

{{% tip %}}
Under **Advanced options**, do _not_ enable Gzip compression (CloudFront will handle this for you,) and leave the path as `/`.
{{% /tip %}}