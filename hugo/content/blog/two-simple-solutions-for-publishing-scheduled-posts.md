---
title: Two Simple Solutions for Publishing Scheduled Posts
description: ''
date: 2018-05-03 07:10:15 -1100
authors:
- DJ Walker
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
categories:
- Frontend-Friday
headline: ''
textline: ''
images: []
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
## Going Beyond Static

Part of our mission at Forestry is to dissolve the perceived limitations of static sites. The reality is that static sites are relatively simple to interoperate with, and suggesting that a statically-generated site isn't capable of _feature X_ is largely a failure of imagination. With a little cleverness and determination, virtually anything is possible on a static platform.

This perspective is core to the philosophy at Forestry. Our content editor takes advantage of this simplicity and interoperability, acting as an additional layer on top of the existing static site machinery. When a site is hooked up to Forestry, it can still be edited in a local development environment as usual. We don't have to rewire anything about how the site works.

Today, we will tackle a basic feature: publishing scheduled content. This would be useful, for example, if you were going on vacation 

## The Old Way

Scheduling posts is easy when using a database-driven, backend-heavy CMS like WordPress: just enter the date and time you want to schedule the post, and click the "Schedule" button. Your post should automatically appear on the site once the date and time of the post have passed. You're done!

**Actually, hang on.** If you're using a page cache plugin (which is essential to keep the site running fast,) you will probably need to clear the cache once the post is published. Once you figure out how to clear the page cache at regular intervals, perhaps you've solved this problem and now you're done.

**Ah, but maybe not.** Sometimes WordPress will give you a *Missed Schedule* error and won't publish the post! Go ahead and spend the rest of your day sorting that one out.

## Statelessness is Next to Godliness

Surely, you could use another dynamic CMS that doesn't have the same scheduling issues as WordPress. However, they all share the same problem: they need to react to *changes in state*. 

Our static site knows how to handle future posts by following a very simple algorithm during the build process:

> If the post's publish date is right now or some time in the past, build it into the site. If not, leave it alone.

We can conceive of a very simple procedure for publishing posts in the future by ensuring that we automatically run this build process, and handle the subsequent deployment, at a regular interval.


## Building the Solution

### Scheduled Deployments with CircleCI

If you're already using CircleCI to build and deploy your site, you can achieve this by adding a few extra lines to your CircleCI configuration at `.circleci/config.yml`.

If you don't have an automated build and deploy process for your static site, take a look at our tutorial on [setting up an automatic static site deployment with CircleCI](https://forestry.io/blog/automate-deploy-w-circle-ci/).

We can use CircleCI's [workflows](https://circleci.com/docs/2.0/workflows/) feature to schedule recurring automatic deployment of our site. To do this, we just have to add a new section to our `.circleci/config.yml` file with the following info:

```
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
```

This creates two workflows: one called `build_test_deploy`, and one called `autopublish`. We need to create the `build_test_deploy` workflow to preserve the automatic deployment behavior, since CircleCI won't do that by default if you have `workflows` defined.

The `autopublish` workflow runs the same `build` job, but we have configured it to run on a schedule using `triggers`, and to only run this on the master branch.

The `cron` parameter accents crontab syntax to determine the interval between deployments. Our example uses `0 */6 * * *` which means to run it once every 6 hours. Feel free to tweak this to suit your publishing schedule.

### Use a Lambda Task to Trigger Your Build

If you are using a different deployment solution, such as deploying from Forestry, I have developed a more generic solution.

[serverless-autopublish](https://github.com/dwalkr/serverless-autopublish) is an AWS Lambda task built with the [serverless framework](https://serverless.com/). Its purpose is very simple: it pushes a new commit to your GitHub repository at regular intervals. This will trigger any automated deployment you have configured as if you were updating the site manually.

{{% tip %}}
If your site is deployed by Forestry, be sure to select the *Deploy on Git Push* option in your site settings in order for your site to deploy when code is pushed to the repo.
{{% /tip %}}
