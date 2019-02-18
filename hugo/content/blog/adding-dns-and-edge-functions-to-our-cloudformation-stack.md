---
title: Creating Lambda@Edge and Route 53 Resources with CloudFormation
description: ''
date: 2018-09-14 16:55:46 +0000
authors:
- DJ Walker
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/09/mihai-fischer-715069-unsplash.jpg"
categories:
- Beyond Static
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
Previously, I showed you how to [automatically provision AWS resources with CloudFormation](https://forestry.io/blog/automate-your-static-hosting-environment-with-aws-cloudformation/). CloudFormation provides a concise, declarative syntax for configuring a “stack” of AWS resources. Given the sizable catalog of services provided by AWS, and the need to connect services together for most use cases, being able to declare a stack of connected services all together in a single configuration file will help you keep track of your project’s infrastructure and reduce the likelihood of misconfiguration.

## Our CloudFormation Stack

The stack we worked on last time set up a hosting environment for a static website, with an S3 bucket to hold the files, and a CloudFront distribution to serve these files to the public via a CDN. Our end result left a few things to be desired. In this article, we’re going to cover **attaching a Lambda function** to our CloudFront distribution to improve our URL handling, using a custom domain with CloudFront by **creating a DNS record in Route 53**, and **creating a TLS certificate via** **Certificate Manager** to serve our site over HTTPS.

## Default Directory Index

There is one significant problem with our current CloudFormation stack that makes it incompatible with the standard behavior of most Static Site Generators.

One of the clever tricks employed by many static sites is the ability to use “pretty” URLs by relying on the default behavior of most webservers. For example, instead of a page being located at `https://example.com/about.html`, many developers prefer a URI that does not include the file extension:  `https://example.com/about/`. This behavior is easy to achieve by placing the HTML for the “about” page in a file at `/about/index.html`. Most webservers, by default, will load the `index.html` file when the requested URI references a directory instead of a single file.

CloudFront, unfortunately, does not do this by default. While you can configure a **Default Root Object** for your CloudFront distribution, this only tells CloudFront which file to load when a user requests the homepage. Subpages, like the `/about/` page in our example, cannot benefit from this behavior. This makes CloudFront an unappealing choice for anyone who uses a static site generator!

Fortunately, we can use **Lambda@Edge** to tweak the behavior of our CloudFront distribution. **Lambda@Edge** allows us to run a function on our CloudFront edge nodes in response to requests.

### Setting Up Permissions For Our Lambda Function

We need to create an IAM Role for our Lambda function. We can use the standard Lambda permissions by adding the policy to `ManagedPolicyArns`.

Recall that all resources should be declared inside of the `Resources:` section of our CloudFormation template. We define our role as follows:

    LambdaRole:
      Type: 'AWS::IAM::Role'
      Properties:
        AssumeRolePolicyDocument:
          Version: '2012-10-17'
          Statement:
          - Effect: Allow
            Principal:
              Service:
              - 'lambda.amazonaws.com'
              - 'edgelambda.amazonaws.com'
            Action: 'sts:AssumeRole'
        ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'

### Creating the Lambda Function

To create the function, we create a new resource of type `AWS::Lambda::Function`. We can then include the code of our Lambda function directly in the template:

    LambdaFunction:
      Type: 'AWS::Lambda::Function'
      Properties:
        Code:
          ZipFile: !Sub |
            'use strict';
            const regex = /\.[a-z0-9]+$/;
            const indexDocument = '${DefaultRootObject}';
            exports.handler = (event, context, cb) => {
                const cf = event.Records[0].cf;
                const config = cf.config;
                const request = cf.request;
                if (request.uri.endsWith('/')) {
                  cb(null, Object.assign({}, request, {uri: `${!request.uri}${!indexDocument}`}));
                } else if (request.uri.endsWith(`/${!indexDocument}`)) {
                  cb(null, {
                    status: '302',
                    statusDescription: 'Found',
                    headers: {
                      location: [{
                        key: 'Location',
                        value: request.uri.substr(0, request.uri.length - indexDocument.length),
                      }],
                    }
                  });
                } else if (!regex.test(request.uri)) {
                  cb(null, {
                    status: '302',
                    statusDescription: 'Found',
                    headers: {
                      location: [{
                        key: 'Location',
                        value: `${!request.uri}/`,
                      }],
                    }
                  });
                } else {
                  cb(null, request);
                }
            };
        Handler: 'index.handler'
        MemorySize: 128
        Role: !GetAtt 'LambdaRole.Arn'
        Runtime: 'nodejs6.10'
        Timeout: 5

This function does three things:

* When the URI ends with a `/`, the function appends `index.html` before forwarding the request to the S3 Bucket. URIs that end with a `/` are considered the canonical version of the URI.
* When the URI ends with `/index.html`, the function issues a 302 redirect to the canonical URI (`index.html` is truncated from the URI)
* When the URI is anything that does not end in a `/` or a file extension, a `/` is appended to the URI and a 302 redirect is issued.

Non-canonical URIs are redirected to prevent duplicate content penalties from search engine crawlers.

Note that we are using the `!Sub` template function to insert template Parameters into our function. In our case, we are grabbing the value of the `DefaultRootObject` parameter that we defined last time.

{{% tip "Escaping JavaScript Template Syntax" %}}
We are using JavaScript template syntax in our Lambda function to interpolate variable values in strings. This syntax normally looks the same as interpolating template parameters using `!Sub`. Because of this, we use `!` to escape JavaScript template variables when using them in a string passed to `!Sub`, like so:

    `${!request.uri}${!indexDocument}`

{{% /tip %}}

### Versioning the Lambda Function

We can’t attach a Lambda function directly to a CloudFront distribution. We need to create a _version_ of our function, and attach this version to the distribution. A Lambda version is a snapshot of the code at a particular point in time. If the function is changed, it will not affect the behavior of our CloudFront distribution until a new version is created and attached in place of the old one.

Let’s create the `AWS::Lambda::Version` resource:

    VersionedLambdaFunction:
        Type: 'AWS::Lambda::Version'
        Properties:
          FunctionName: !Ref LambdaFunction

### Modifying the CloudFront Distribution

To attach the Lambda function to our CloudFront distribution, all we have to do is add `LambdaFunctionAssociations` to our `DefaultCacheBehavior` object, tell it we want this function to respond to an `origin-request`, and give it an ARN. Remember, the ARN we provide must belong to the _version_ ******of our Lambda function that we just created, not the function itself, or CloudFormation will fail to create the stack.

    CloudFrontDistribution:
      Type: 'AWS::CloudFront::Distribution'
      Properties:
        DistributionConfig:
        # ...
          DefaultCacheBehavior:
            LambdaFunctionAssociations:
                - EventType: 'origin-request'
                  LambdaFunctionARN: !Ref VersionedLambdaFunction
        DefaultRootObject: ''

Additionally, we need to remove the `DefaultRootObject` value here. Leaving it in will now result in a redirect loop due to the behavior programmed into our Lambda function.

With this Lambda@Edge function in place, CloudFront will now correctly handle requests to our static site. We can use this CloudFormation template to create a fully functional static website hosting stack that is accessed from a **.cloudfront.net** subdomain. Configuring access to our website from a custom domain only takes a couple extra steps!

## Automatically Creating DNS Records

**Route 53** is Amazon’s DNS web service. Using Route 53 in our CloudFormation template, we can automatically create a record to point a custom domain to our CloudFront distribution.

### Specifying the Hosted Zone

Our template will assume the user has already set up a Hosted Zone for their domain. When domains are registered via Route 53, AWS will create this Hosted Zone for you automatically.

In order to know which records we should be creating, we will add two more parameters to our CloudFormation template, under the `Parameters` section:

    Domain:
      Description: 'The domain of your website.'
      Type: String
    HostedZoneID:
      Description: 'The ID of your hosted zone in Route 53'
      Type: 'AWS::Route53::HostedZone::Id'

Note the `Type` of the `HostedZoneID` parameter, `AWS::Route53::HostedZone::Id`. This is one of CloudFormation’s special parameter types, and will allow the user to pick from a dropdown of their Hosted Zones instead of having to manually input the Zone ID.

### Creating the Record Set

We want to create an A record in our Hosted Zone, and use Route 53’s special Alias feature to connect it to an AWS resource.

    Route53Record:
      Type: 'AWS::Route53::RecordSet'
      Properties:
        HostedZoneId: !Ref HostedZoneID
        Name: !Ref Domain
        Type: A
        AliasTarget:
          HostedZoneId: Z2FDTNDATAQYW2 # This Zone ID is used for any CloudFront Distribution
          DNSName: !GetAtt 'CloudFrontDistribution.DomainName'

The `HostedZoneId` of any CloudFront distribution will always be `Z2FDTNDATAQYW2`, so we can hard code that into our template.

### Adding the Domain to CloudFront

We also need to add our domain as an alias for our CloudFront distribution. To do this, we add it to the `Aliases` field in the `DistributionConfig`:

    CloudFrontDistribution:
      Type: 'AWS::CloudFront::Distribution'
      Properties:
        DistributionConfig:
          Aliases:
          - !Ref Domain
          # ...

## Requesting a Certificate Via Certificate Manager

Finally, let’s create a TLS certificate so we can serve our site over HTTPS. To do that, create a resource of type `AWS::CertificateManager::Certificate` with a `ValidationMethod` of DNS.

    Cert:
      Type: 'AWS::CertificateManager::Certificate'
      Properties:
        DomainName: !Ref Domain
        ValidationMethod: DNS

{{% warning %}}
When creating a certificate with Certificate Manager, the creation of your CloudFront stack will stall until certificate validation is complete. You need to manually add the DNS record to verify the certificate once it’s created, and be aware that validation can take up to 30 minutes.
{{% /warning %}}

{{% warning %}}
Using Certificate Manager with CloudFront requires that your CloudFormation stack be created in the **us-east-1 (N. Virginia)** region.
{{% /warning %}}

We need to make one final modification to our CloudFront distribution’s `DistributionConfig` to add this certificate:

    CloudFrontDistribution:
      Type: 'AWS::CloudFront::Distribution'
      Properties:
        DistributionConfig:
          Aliases:
          - !Ref Domain
          ViewerCertificate:
            AcmCertificateArn: !Ref Cert
            SslSupportMethod: 'sni-only'
          # ...

## A Fully-Capable Static Hosting Stack

With these additions, our CloudFormation template can now be used to create a complete static hosting environment. To do this, we created resources from six different services:

* An S3 Bucket to store the HTML of our website,
* A CloudFront distribution to optimize the delivery of our content,
* A Lambda@Edge function to give us control over our URI structure,
* A Route 53 Record Set to make our site accessible from our custom domain,
* A TLS Certificate from Certificate Manager to make our site available over HTTPS, and
* Some IAM Roles and Policies to tie it all together.

Considering that AWS has [over 90 different services](https://aws.amazon.com/products/), it’s clear that our use case has only scratched the surface of what a tool like CloudFormation is capable of. [Serverless Framework](https://serverless.com/), for example, uses CloudFormation under the hood to make it easy to build sophisticated serverless applications. As the popularity and complexity of cloud services grows, the ability to express infrastructure as code is more important than ever. If you choose to host on AWS, you should definitely have CloudFormation in your arsenal.

{{% tip "Try it out" %}}
Click the button below to launch our static site hosting stack. <br />
<a target="_blank" title="Launch S3+Cloudfront Stack" href="https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=my-static-website&templateURL=https:%2F%2Fs3.amazonaws.com%2Fdwalkr-cf-templates%2Fadvanced-route53-acm.yml">
<img class="no-lightbox" src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png" alt="Launch stack button" />
</a>
{{% /tip %}}

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;">
    <h2>Join us every Friday :date:</h2>
    <p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>
    <p><strong>Next week:</strong> TBD </p>
    <p><strong>Last week:</strong> We took our first steps with CloudFormation to <a href="https://forestry.io/blog/automate-your-static-hosting-environment-with-aws-cloudformation/">create a static hosting environment</a>.</p>
</div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=18057153">Discuss on Hacker News</a>