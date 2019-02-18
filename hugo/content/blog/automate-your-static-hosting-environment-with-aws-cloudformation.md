---
title: Automate Your Static Hosting Environment With AWS CloudFormation
description: ''
date: 2018-09-07 15:04:56 +0000
authors:
- DJ Walker
publishdate: 2018-09-07 15:04:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/09/james-donaldson-404533-unsplash.jpg"
categories:
- Frontend-Friday
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
I love automation. If you’ve been following this blog, you’ll know I’ve written [a few times](https://forestry.io/blog/5-options-for-automating-your-software-deployments/) about using [continuous integration](https://forestry.io/blog/automate-deploy-w-circle-ci/) to automate the deployment of your software. Why stop at deployment? Can we use automation to improve our infrastructure?

The answer, unsurprisingly, is yes (this would be a pretty short article otherwise.) There are many different tools out there that can be used to automate the provisioning of hosting infrastructure. In this article, I will show you how to automatically provision a static site hosting environment on AWS with CloudFormation.

## Infrastructure as Code

Automating deployment is an easy sell: it’s not uncommon for software to be deployed many times a day, so the time spent setting up the automation is easily earned back over the life of the project. Spinning up a webserver, on the other hand, may only be done once for the life of a project, and figuring out how to automate this process may take longer than just manually setting up the server.

However, automating these processes provides much more than saving time. **Any process that is performed by a human being is prone to error.** Performing this process via script will ensure things are done the same way every time.

Additionally, defining your infrastructure via a configuration file or any sort of script is a way of documenting what your infrastructure needs are. Particularly when using a cloud provider like AWS with its myriad services, it can become easy to lose track of which resources your project is dependent on. Encapsulating your infrastructure in code makes it easy to see see at-a-glance what resources are used by your project.

Finally, should you need to de-provision your infrastructure, a tool like CloudFormation can do that automatically. You won’t have to worry about paying for orphaned resources that are no longer being used.

## How CloudFormation Works

AWS’ CloudFormation service manages **stacks** of services. To create a new stack, you can use one of their sample templates or upload your own. AWS also has a [CloudFormation Designer Interface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/working-with-templates-cfn-designer-overview.html) that helps you to create your template visually, as well as a tool called [CloudFormer](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-using-cloudformer.html) that lets you create a template from your existing AWS resources.

For our purposes, we’re going to write a configuration file from scratch. CloudFormation accepts both JSON and YAML files. We’ll be using YAML in our example, as I find it slightly easier to write, and we can embed comments into our configuration to improve the self-documenting nature of our template.

### Anatomy of a CloudFormation Template

A CloudFormation template consists of three main sections: Parameters, Resources, and Outputs. The following code will provide us with a base for building our template:

    AWSTemplateFormatVersion: '2010-09-09'
    Description: 'Explain what this template does'
    Parameters:
      # User-defined values that will be used when creating AWS resources
    Resources:
      # Specify AWS Resources to be created
    Outputs:
      # Important information that should be provided to the user after the resources have been created

The **Parameters** section is where you define the user-defined values in your template. Using parameters will make your template more reusable. When a user creates a new CloudFormation stack from your template, the CloudFormation UI will provide fields for them to fill out these parameters.

**Resources** is the meat of your template: that’s where you define which AWS resources should be created when this Template is run through CloudFormation.

Finally, **Outputs** is where you define the information that should be provided to the user after the resources are created, for example when third-party services need to be configured to operate with your AWS infrastructure.

## Hosting a Static Site on AWS With CloudFormation

To create our static site hosting environment on AWS, we’re going to need the following resources:

* An **S3 Bucket** that contains the HTML of our website
* A **CloudFront Distribution** to handle requests to our website and retrieve the pages from our S3 Bucket.

CloudFront is AWS’ CDN service. It _is_ possible to serve a website directly from S3 without CloudFront, but this is not recommended by AWS. Accessing and caching the requests through CloudFront will generally be cheaper than serving them directly from S3. In fact, we will be configuring a **Bucket Policy** and a **CloudFront Origin Access Identity** to ensure that _only_ CloudFront can read from our Bucket, and that it isn’t exposed to the general public.

{{% tip "Follow Along" %}}

[View the complete template on GitHub](https://github.com/forestryio/cloudformation-templates/blob/35179ceaa0d0b12a5e4560fe69f774adcca6f875/static-site-hosting/basic-s3-cloudfront.yml), or

Create this stack on AWS <br />
<a title="Launch S3+Cloudfront Stack" href="https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=my-static-website&templateURL=https:%2F%2Fs3.amazonaws.com%2Fdwalkr-cf-templates%2Fbasic-s3-cloudfront.yml">
<img class="no-lightbox" src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png" alt="Launch stack button" />
</a>
{{% /tip %}}

### Defining Parameters

Let’s start by defining the **Parameters** we want to include with our template. This template will take two parameters that will be used in configuring our CloudFront Distribution: the path to the default root document, and the path to the error page. The default root document will be displayed when somebody visits the homepage, and the error page will be displayed when a user requests a page that could not be found.

    AWSTemplateFormatVersion: '2010-09-09'
    Description: 'Static website hosting with S3 and CloudFront'
    Parameters:
      DefaultRootObject:
        Description: 'The default path for the index document.'
        Type: String
        Default: '/index.html'
      ErrorPagePath:
        Description: 'The path of the error page for the website.'
        Type: String
        Default: '/404.html'

When we create a new CloudFormation stack with this template, our parameters will appear as fields in the CloudFormation UI:

![](/uploads/2018/09/cloudformation-stack-parameters.png)

We can reference these values in our template using [CloudFormation’s template functions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html). `!Ref` can be used to reference the value, and `!Sub` will substitute the value in a string. Here’s a trivial example:

    Value: !Ref DefaultRootObject # /index.html
    InterpolatedValue: !Sub 'mywebsite.com${DefaultRootObject}' # mywebsite.com/index.html

### Setting up the S3 Bucket

Now it’s time to start adding resources. Our first resource is easy, the S3 bucket to store the contents of our website:

    Resources:
      S3Bucket:
        Type: 'AWS::S3::Bucket'

The **Type** attribute of our resource tells AWS what kind of resource we are provisioning. The property name (in this case, `S3Bucket`,) can be anything you want — this name is used to reference the resource and may also be used when automatically generating resource identifiers.

Specifying a new resource with a **Type** of `AWS::S3::Bucket` is all we need to have AWS create a new bucket with a unique identifier. We can reference this bucket elsewhere in our template using the `!Ref` and `!Sub` functions, just like with our parameters.

### Controlling Access to The Bucket

As mentioned before, we won’t be exposing our bucket contents directly to the general public: we want all requests to be handled by our CloudFront distribution. To make this work, we are going to create a **CloudFront Origin Access Identity**. This identity is how we will grant the CloudFront Distribution access to our S3 Bucket.

      CloudFrontOriginAccessIdentity:
        Type: 'AWS::CloudFront::CloudFrontOriginAccessIdentity'
        Properties:
          CloudFrontOriginAccessIdentityConfig:
            Comment: !Ref S3Bucket

In addition to **Type**, a resource will also contain **Properties.** This is how you configure the resource, and each resource will have different properties. The best way to determine how to configure a resource is in the [Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the AWS CloudFormation documentation.

Our Origin Access Identity is a sort of token, and it doesn’t need much configuration. We are required to add this `Comment` field to it, but the comment doesn’t need to be anything in particular. I’ve included the name of the S3 Bucket (using the `!Ref` function) so we know what this identity is being used for.

To grant this identity access to our bucket, we will create a **BucketPolicy** resource:

    ReadPolicy:
        Type: 'AWS::S3::BucketPolicy'
        Properties:
          Bucket: !Ref S3Bucket
          PolicyDocument:
            Statement:
            - Action: 's3:GetObject'
              Effect: Allow
              Resource: !Sub 'arn:aws:s3:::${S3Bucket}/*'
              Principal:
                CanonicalUser: !GetAtt CloudFrontOriginAccessIdentity.S3CanonicalUserId

This policy is applied to our bucket and grants read access to the Origin Access Identity we just created. Note we’re using another function, `!GetAtt`, to retrieve nested attributes from our `CloudFrontOriginAccessIdentity` resource. The CloudFormation resource documentation tells us which values can be retrieved from a resource in its [Return Values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html#aws-resource-cloudfront-cloudfrontoriginaccessidentity-returnvalues) section.

### Creating the CloudFront Distribution

Now that we have our bucket defined, and an access identity that can read from it, we just need to set up our CloudFront Distribution with our bucket as its origin:

      CloudFrontDistribution:
        Type: 'AWS::CloudFront::Distribution'
        Properties:
          DistributionConfig:
            CustomErrorResponses:
            - ErrorCode: 403 # not found
              ResponseCode: 404
              ResponsePagePath: !Ref ErrorPagePath
            DefaultRootObject: !Ref DefaultRootObject
            Enabled: true
            HttpVersion: http2
            Origins:
            - DomainName: !GetAtt 'S3Bucket.DomainName'
              Id: s3origin
              S3OriginConfig:
                OriginAccessIdentity: !Sub 'origin-access-identity/cloudfront/${CloudFrontOriginAccessIdentity}'
            PriceClass: 'PriceClass_All'
            DefaultCacheBehavior:
              # REMOVED FOR BREVITY

This is where we use those `ErrorPagePath` and `DefaultRootObject` parameters. Under `Origins`, our S3 Bucket and Origin Access Identity come together to make our distribution work.

Be sure to check out the [full template on GitHub](https://github.com/forestryio/cloudformation-templates/blob/35179ceaa0d0b12a5e4560fe69f774adcca6f875/static-site-hosting/basic-s3-cloudfront.yml#L58) to see the `DefaultCacheBehavior` configuration - it has been excluded here for brevity.

{{% tip %}}
CloudFront’s `DefaultRootObject` only applies to requests to the homepage, not subpages. If your website uses “pretty URLs” (leaving off the `/index.html`  by default,) the `DefaultRootObject` configuration is not enough. We will explore ways to solve this using CloudFormation in a future post.
{{% /tip %}}

### Adding Publish Credentials

The four resources we’ve created so far — the `Bucket`, `BucketPolicy`, `CloudFrontOriginAccessIdentity`, and `CloudFrontDistribution` — are all we need for a basic static site hosting environment on AWS. We can then upload files to the bucket, and they can be access from our CloudFront URL.

If we want to programmatically push code to our S3 Bucket, however, we’ll need some credentials that can be used to write to it. This can be done easily by creating an **IAM User** with an attached policy, and an **IAM Access Key** for that user:

      PublishUser:
        Type: 'AWS::IAM::User'
        Properties:
          Policies:
            - PolicyName: !Sub 'publish-to-${S3Bucket}'
              PolicyDocument:
                Statement:
                - Action: 's3:*'
                  Effect: Allow
                  Resource: 
                  - !Sub 'arn:aws:s3:::${S3Bucket}'
                  - !Sub 'arn:aws:s3:::${S3Bucket}/*'
      PublishCredentials:
        Type: 'AWS::IAM::AccessKey'
        Properties:
          UserName: !Ref PublishUser

The directly-attached policy will allow all operations on the bucket. The AccessKey will give us programmatic access to the bucket. However, after an access key is created, we can’t fetch the secret from the AWS IAM interface. This is where CloudFormation’s **Outputs** come in handy.

### Adding Outputs

The third major component of a CloudFormation template is the **Outputs** section. This is where we can retrieve information from the resources we created and display them for the user.

Outputs have a **Description** and a **Value**, and just like in the rest of our template we can use functions like `!Ref`, `!Sub`, and `!GetAtt` to pull values out of our resources. Once again, the [Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) should be used to determine how to extract the desired values from your resources.

    Outputs:
      BucketName:
        Description: 'S3 Bucket Name'
        Value: !Ref S3Bucket
      AccessKeyId:
        Description: 'S3 Access Key'
        Value: !Ref PublishCredentials
      AccessKeySecret:
        Description: 'S3 Secret Key'
        Value: !GetAtt PublishCredentials.SecretAccessKey
      DistributionId:
        Description: 'CloudFront Distribution ID'
        Value: !Ref CloudFrontDistribution
      Domain:
        Description: 'Cloudfront Domain'
        Value: !GetAtt CloudFrontDistribution.DomainName

Now, when we create a new stack with our template, the user will see these values in the **Outputs** section after the template finishes running.

![](/uploads/2018/09/cloudformation-stack-outputs.png)


## Going Further

Our tutorial today covered the basics of creating a static site hosting environment with CloudFormation, but it leaves a few things to be desired. Next time, we’ll improve our template using **Route53** to hook up a domain name to our CloudFront Distribution, **Certificate Manager** to make our site available over HTTPS, and a **Lambda@Edge** function to make “pretty” URLs work.

Hopefully, this post has helped you to see the potential of a tool like CloudFormation. The next time you need to set up a hosting environment for your static site, consider expressing your **infrastructure as code** with CloudFormation!

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;">
    <h2>Join us every Friday :date:</h2>
    <p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>
    <p><strong>Next week:</strong> We'll <a href="/blog/adding-dns-and-edge-functions-to-our-cloudformation-stack/">improve our CloudFormation template</a> to easily create a static site hosting setup.</p>
    <p><strong>Last week:</strong> We gave you some tips on creating <a href="https://forestry.io/blog/create-in-app-documentation-for-content-editors/">in-app documentation in Forestry.</a></p>
</div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17959697">Discuss on Hacker News</a>