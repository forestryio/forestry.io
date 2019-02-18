---
title: Automatically Publish Scheduled Posts For Your Static Site
description: ''
date: 2018-05-04 07:10:15 -1100
authors:
- DJ Walker
publishdate: 2018-05-04 03:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
categories:
- Beyond Static
- Frontend-Friday
headline: ''
textline: ''
images:
- "/uploads/2018/05/burning_newspaper.jpg"
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
Part of our mission at Forestry is to dissolve the perceived limitations of static sites. In reality, static sites are easy to understand and integrate with, and the belief that static sites are not capable of _feature X_ is largely a failure of imagination. With a little cleverness and determination, virtually anything is possible on a static platform.

Previously, we showed you [how to set up Algolia with Jekyll](https://forestry.io/blog/search-with-algolia-in-jekyll/) as well as [with Hugo](https://forestry.io/blog/search-with-algolia-in-hugo/) to make your content searchable. Today, we will tackle a basic feature of dynamic sites: publishing scheduled content. This article will present two options for achieving this:

1. [Extending your CircleCI configuration](#option-1-scheduling-deployments-with-circleci), for projects deployed via CircleCI
2. [Using a serverless function](#option-2-using-a-lambda-task-to-trigger-your-build)

## The Old Way

Scheduling posts is easy when using a database-driven, backend-heavy CMS like WordPress: just enter the date and time you want to schedule the post, and click the "Schedule" button. Your post should automatically appear on the site once the date and time of the post have passed. You're done!

**Actually, hang on.** If you're using a page cache plugin (which is essential to keep the site running fast,) you will probably need to clear the cache once the post is published. Once you figure out how to clear the page cache at regular intervals, you can sit back and let your scheduled posts publish themselves automatically.

![](/uploads/2018/05/wp-missed-schedule-ss.png)

**Ah, but maybe not.** Sometimes WordPress will give you a _Missed Schedule_ error and won't publish the post! Go ahead and spend the rest of your day sorting that one out.

Maybe it's not that easy.

## Statelessness is Next to Godliness

Static sites are inherently _stateless_. They can't respond to or even keep track of changes in state. The HTML payload delivered to a user can't make decisions based on what time it is, or where the user is located. Everybody gets the same page, all the time.

This stateless nature makes our site very easy to understand and reason about. Our static site generator knows how to handle future posts by following a very simple algorithm during the build process:

> If the post's publish date is right now or some time in the past, build it into the site. <br />If not, leave it alone.

We can conceive of a very simple procedure for publishing posts in the future by ensuring that we automatically run this build process, and handle the subsequent deployment, at a regular interval.

## Option 1: Scheduling Deployments with CircleCI

If you're already using CircleCI to build and deploy your site, you can achieve this by adding a few extra lines to your CircleCI configuration at `.circleci/config.yml`.

If you don't have an automated build and deploy process for your static site, take a look at our tutorial on [setting up an automatic static site deployment with CircleCI](https://forestry.io/blog/automate-deploy-w-circle-ci/).

We can use CircleCI's [workflows](https://circleci.com/docs/2.0/workflows/) feature to schedule recurring automatic deployment of our site. To do this, we just have to add a new section to our `.circleci/config.yml` file with the following info:

    workflows:
      version: 2
      build_test_deploy:
        jobs:
          - build
      autopublish:
        triggers:
          - schedule:
              cron: "0 */6 * * *"
              filters:
                branches:
                  only:
                    - master
        jobs:
          - build

This creates two workflows: one called `build_test_deploy`, and one called `autopublish`. We need to create the `build_test_deploy` workflow to preserve the automatic deployment behavior, since CircleCI won't do that by default if you have any `workflows` defined.

The `autopublish` workflow runs the same `build` job, but we have configured it to run on a schedule using `triggers`, and to only run this on the master branch.

The `cron` parameter accepts crontab syntax to determine the interval between deployments. Our example deploys every 6 hours. Feel free to tweak this to suit your publishing schedule.

## Option 2: Using a Lambda Task to Trigger Your Build

If you are using a different deployment solution, such as deploying from Forestry, I have developed a more generic solution.

[serverless-autopublish](https://github.com/dwalkr/serverless-autopublish) is an AWS Lambda task built with the [serverless framework](https://serverless.com/). Its purpose is very simple: it pushes a new commit to your GitHub repository at regular intervals. This will trigger any automated deployment you have configured as if you were updating the site manually.

{{% tip %}}
If your site is deployed by Forestry, be sure to select the _Deploy on Git Push_ option in your site settings in order for your site to deploy when code is pushed to the repo.
{{% /tip %}}

### Installation

Follow the [serverless framework AWS quick start](https://serverless.com/framework/docs/providers/aws/guide/quick-start/) to install the framework and connect it to your AWS account.

{{% tip %}}
**Lambda Pricing**
<br /><br />
AWS Lambda has a generous free tier that allows up to 400,000 CPU seconds of usage every month before you start incurring charges. If you run this task 4 times a day, you will stay within the free tier as long as the task completes in under an hour. (That's a really long time.)
<br /><br />
Depending on the size of your repos, publishing can take several seconds. However, you can cap the execution time of your function: I have set it to 15 seconds, which is plenty of time for most use cases.
{{% /tip %}}

### Usage

This serverless function is written in Go, and uses the fantastic [go-git](https://github.com/src-d/go-git) library. The project includes the compiled binaries for the AWS Lambda environment, so you don't need to have Go installed on your machine to deploy it.

To get started, you can either fork the repo or initialize a new serverless project with this template:

    serverless create --template-url https://github.com/dwalkr/serverless-autopublish --path serverless-autopublish

Once the project is created, open the `serverless-autopublish` directory. The `serverless.yml` file is where you will configure your function. When you open it, you will see something like this:

    functions:
      publish:
        handler: bin/publish
        timeout: 15
        events:
          - schedule: rate(6 hours)
        environment:
          github_token: ${ssm:github_token}
          author_name: your-author-name
          author_email: your-author-email
          repos: https://github.com/FIRST-REPO;https://github.com/SECOND-REPO

This configuration defines a function called `publish` that will run every hour. You can adjust this by modifying the `schedule` parameter.

The variables in the `environment` section are passed to the function as environment variables. This is how we will configure the publisher. Change `author_name` and `author_email` to your desired Git signature, and add the repositories you want to publish to the `repos` variable. Separate multiple repos with a semicolon.

#### Adding Your Github Access Token

In order to authenticate with your Github account, you need to provide the function with an access token ([Github: creating a personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)). Serverless provides functionality to retrieve values from the [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html), and our configuration will look for the token in here.

![](/uploads/2018/05/parameter_store_ss.png)

Log in to AWS and locate the Systems Manager service. Select **Parameter Store** and create a new parameter. The parameter name will be `github_token` and the value will be the token you requested from Github. Once your token is in Parameter Store, Serverless will automatically add it to your `serverless.yml` configuration when you deploy it.

#### Deploy and Run

After you're satisfied with your configuration, run the following command to send your function to AWS:

    serverless deploy

After the command finishes, your function is live! You can expect your repos to start receiving commits according to the schedule you configured in the `serverless.yml` file. You can run the function immediately with the following command:

    serverless invoke -f publish

If you want to remove your function from AWS, use the `remove` command:

    serverless remove

## Go Beyond

Our scheduled post solution is pretty basic, but effective. Using strategies like serverless functions and build automation, we can start to reimagine what static sites are capable of.

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll look at <a href="https://forestry.io/blog/what-s-new-in-jekyll-3.8/">what's new in the latest Jekyll update.</a></p><p><strong>Last week:</strong> We showed you how to use <a href="https://forestry.io/blog/instant-production-ready-scaffolding-with-create-static-site/">Create Static Site</a> to bootstrap a production-ready static site project.</p></div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16995570">Discuss on Hacker News</a>
