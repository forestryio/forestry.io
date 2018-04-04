---
title: Automate Your Static Site Deployment with CircleCI
description: Tools like Hugo, Jekyll, and Gatsby have made building static sites a
  popular and practical choice for developers. One major disadvantage these tools
  have, however, is the need to regenerate and redeploy their files every time there
  is new content to publish. Automating this process will go a long way toward making
  your static site feel like a dynamic CMS.
date: 2018-03-23 12:38:35 +0000
authors:
- dj-walker
publishdate: 2018-03-23 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/03/automated-deployment-with-circle-ci.png"
categories:
- Frontend-Friday
- CICD
- Hugo
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
{{% tip %}}

This tutorial was updated on **April 3, 2018** to use [bep/s3deploy](https://github.com/bep/s3deploy) in place of [aws/aws-cli](https://github.com/aws/aws-cli).

{{% /tip %}}

*This article is part of our on-going [_Frontend Friday_](/categories/frontend-friday/ "frontend friday tag") modern web development series*

Tools like Hugo, Jekyll, and Gatsby have made building static sites a popular and practical choice for developers. One major disadvantage these tools have, however, is the need to regenerate and redeploy their files every time there is new content to publish. 

Automating this process will go a long way toward making your static site feel like a dynamic CMS. It will also save you time and improve the reliability of your deployments, as the exact same steps will run every time you deploy. For this reason, automated deployment is a cornerstone of modern web development.

Our favorite deployment tool is CircleCI, we're using it at Forestry.io every day to deploy our Hugo site. For our tutorial today we'll be using CircleCI to deploy a Hugo site but you can use CircleCI for any static site that needs automated deployment.

# Continuous Integration Vs Continuous Deployment 

**Continuous Integration (CI) and Continuous Deployment (CD)** describe practices for automating the release of software. The two terms are semantically different, but go hand in hand. You will often see them referenced together or used interchangeably.

**Continuous Integration** minimizes integration problems by constantly integrating and testing changes to the code. This is achieved by running automated tests whenever code is contributed to a project.

**Continuous Deployment** is the practice of automatically releasing updates to production. CD is an extension of CI — you will want to run your integration tests before deploying your code, relying on automated testing to ensure the integrity of the production software.

If you’ve never attempted to set up an automatic deployment before, the task may seem daunting. Fortunately, there are many CI/CD services available that make this easy. In this post, I will show you how to use [CircleCI](https://circleci.com/) to automatically deploy a Hugo site to an Amazon S3 bucket.

## Build, Test, Deploy

Most automated deployments can be broken down into three basic steps. First, one or more **build** steps will be run. These steps will perform tasks like installing external dependencies, compiling or preprocessing source code, and minifying or optimizing assets. Once the build is complete, the code should be ready to ship. At this point, tests may be run to check for errors. If the **test** results are acceptable, the code is safe to **deploy**. Deploying the code sends your project files from the CI environment to the destination server.

## Using CircleCI

To start using CircleCI, [sign up](https://circleci.com/signup/) and link your GitHub account. This will enable you to hook up any of your GitHub projects to CircleCI. Click on **Projects** in the left-hand navigation and then click on the **Add Project**  button. You will see a list of your GitHub projects. From there, select the Hugo project you want to create a deployment for. Choose Linux for your operating system, and 2.0 for the platform. Then, scroll down and click the **Start Building** button. Your first build will fail because we haven’t added a configuration for it, but your project build history will now be available under **Builds** in the left-hand navigation. Now that CircleCI knows about your project, it’s time to configure the deployment.

### Configuring Your Deployment

Create a new file in your repository at `.circleci/config.yml` . CircleCI will use this file for its deployment instructions. Copy the following YAML into this file to use as a starting point:

    version: 2
    jobs:
      build:
        docker:
        working_directory:
        environment:
        steps:

In the `version` section we tell CircleCI that we are using version 2 of their configuration API. CircleCI 2.0 enables us to define a Docker image to build our project in, giving us a lot more control over our build environment.

Under `jobs` we specify the jobs that we want to run when code is pushed. You can configure multiple jobs in your config and orchestrate them using the [workflows](https://circleci.com/docs/2.0/workflows/) feature, but we won’t be doing that in this tutorial. Since the deployment process for our static site is relatively basic and we must run all of our jobs sequentially (build, then test, then deploy,) we can keep things simple by using a single job. Because we are only using a single job, CircleCI requires that we name it `build`.

Our `working_directory` is the location within the container that our build commands will be run. We will set this to `~/hugo`.

We can use the `environment` section to define environment variables that will be available to our build commands. In this section we will define a variable `HUGO_BUILD_DIR` and use that to reference the destination directory where Hugo should place our generated HTML. Let’s set this to `~/hugo/public`.

    version: 2
    jobs:
      build:
        docker:
        working_directory: ~/hugo
        environment:
          HUGO_BUILD_DIR: ~/hugo/public
        steps:

### The Docker Image

        docker:
          - image: cibuilds/hugo:latest

CircleCI uses Docker to provide disposable environments to build and test your code in. We can define one or more Docker images to use for our build in the `docker` section. Since we don’t require any additional services to run our deployment, we will only specify one Docker image. Check out the [CircleCI documentation](https://circleci.com/docs/2.0/executor-types/#using-multiple-docker-images) if you’re curious about how and when to use multiple Docker container images. If Docker is completely new to you, you might want to take a look at Docker’s [explanation of containers](https://www.docker.com/what-container) to understand what’s going on here.

We are going to use the `cibuilds/hugo` image as the base for our Docker container. It has Hugo pre-installed, which we will need in order to build our Hugo app. We will need a few other dependencies, but we can install them during our build process.


    version: 2
    jobs:
      build:
        docker:
          - image: cibuilds/hugo:latest
        working_directory: ~/hugo
        environment:
          HUGO_BUILD_DIR: ~/hugo/public
        steps:

### Configuring Your Build Steps

The `steps` section is where we add a list of commands needed to build, test, and deploy our project.

#### 1. Install Git and checkout the repository

          - run: apk update && apk add git
          - checkout

`run` and `checkout` are CircleCI commands — they are the interface through which we can send instructions to the build environment. We will be using `run` heavily: it allows us to specify commands to be run in the build environment. `checkout` is a special step that CircleCI provides to simplify checking out the project into your build environment’s `working_directory`.

Our `cibuilds/hugo` image is built on Alpine Linux, so we use the `apk` command to interact with the OS’s package manager. We run `apk update` to update the package index with the latest available packages, and then `apk add git` to install Git. Once Git is installed, we can run the `checkout` step.

#### 2. Install Submodules

          - run: git submodule sync && git submodule update --init

If you’re using Git submodules to manage any third party dependencies, you will need to run this step to install them.

#### 3. Install `s3deploy`
[aws-cli](https://github.com/aws/aws-cli) is Amazon's first-party utility for interacting with AWS services, including S3. However, it is not well-suited to our use case. `aws-cli`'s s3 deployment strategy uses timestamps to determine which files need to be overwritten. This is not optimal for us: we're using a static site generator, and **all of the files** that we want to deploy from our CI environment will have a newer timestamp than the files that are already in s3.

Instead, we're going to use [bep/s3deploy](https://github.com/bep/s3deploy) to send our files to S3. This library was optimized for deploying static sites and uses a hash of the file contents to determine if a file was changed.

`s3deploy` has a prebuilt binary for Linux, which will work inside of our CI environment. All we have to do is download and unpack the archive.

          - run: curl -L https://github.com/bep/s3deploy/releases/download/v2.0.1/s3deploy_2.0.1_Linux-64bit.tar.gz | tar xvz

After this command runs, the `s3deploy` binary will be available in the working directory.

#### 4. Build With Hugo

          - run: HUGO_ENV=production hugo -v -d $HUGO_BUILD_DIR

At this point, we have all of our source code in our build environment. It’s time to build! We tell Hugo to generate the files in `$HUGO_BUILD_DIR`, which is the environment variable we declared earlier in our config.

#### 5. Test With Htmlproofer

          - run: htmlproofer $HUGO_BUILD_DIR --allow-hash-href --check-html --empty-alt-ignore --disable-external

This docker image comes with [html-proofer](https://github.com/gjtorikian/html-proofer) already installed, so we just have to run the `htmlproofer` command in our `$HUGO_BUILD_DIR` to test our generated HTML files.

#### 6. Prepare For Deployment

After passing our tests, the code is now ready to deploy. Before we run the deploy command, however, we need to make sure CircleCI can communicate with our deployment target.

## Connect to S3

In order to deploy to S3, we will need to create an IAM user that can write to our bucket. The following security policy will allow CircleCI to send files to the bucket:


    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                    "arn:aws:s3:::your-bucket-name",
                    "arn:aws:s3:::your-bucket-name/*"
                ]
            }
        ]
    }

Make note of the **Access Key ID** and **Secret Access Key** of this user. To provide this information to CircleCI, access your project’s build settings by clicking the cog next to the project name on the **Builds** screen. On the settings screen, locate the **AWS Permissions** link under the Permissions section. Here we can add the credentials for our IAM user.

#### 7. Deploy to Production Environment

We will use CircleCI’s `deploy` command to ship the code. `deploy` works just like the `run` command, but should be used instead of `run` for deploying code. CircleCI can be configured to run some steps in parallel, but any `deploy` steps will wait for parallel execution to finish and ensure that all tasks have completed successfully before running. Because of this, `deploy` should always be used when it’s time to move code out of the build environment.


          - deploy:
              name: deploy
              command: |
                if [ "${CIRCLE_BRANCH}" = "master" ]; then
                  ./s3deploy -source=$HUGO_BUILD_DIR -region=us-east-1 -bucket=your-bucket-name -path=your-subfolder
                else
                  echo "Not master branch, dry run only"
                fi


Things are pretty straightforward from here. This is a multi-line command so we have to use the `|` character to indicate this. We’re using a conditional to check the `CIRCLE_BRANCH` environment variable and only deploy if we’re building the master branch. Using this strategy, our configuration will continue to build and test code pushed to other branches, but will not deploy them to our production environment.

## Deploy Continuously

At this point, we’re all done! Your project should now build, test, and deploy successfully whenever code is pushed to the GitHub repo. 

## The Final Config File

    version: 2
    jobs:
      build:
        docker:
          - image: cibuilds/hugo:latest
        working_directory: ~/hugo
        environment:
          HUGO_BUILD_DIR: ~/hugo/public
        steps:
          - run: apk update && apk add git
          - checkout
          - run: git submodule sync && git submodule update --init
          - run: curl -L https://github.com/bep/s3deploy/releases/download/v2.0.1/s3deploy_2.0.1_Linux-64bit.tar.gz | tar xvz
          - run: HUGO_ENV=production hugo -v -d $HUGO_BUILD_DIR
          - run: htmlproofer $HUGO_BUILD_DIR --allow-hash-href --check-html --empty-alt-ignore --disable-external
          - deploy:
              name: deploy
              command: |
                if [ "${CIRCLE_BRANCH}" = "master" ]; then
                  ./s3deploy -source=$HUGO_BUILD_DIR -region=us-east-1 -bucket=dwalkr-hugo-demo -path=your-subfolder
                else
                  echo "Not master branch, dry run only"
                fi

If things aren’t working quite right for you, don’t panic! Automating something is always more difficult than doing it manually. It’s worth taking the time up front to figure it out, as it will save you lots of work and frustration in the long run. Take a look at CircleCI’s [documentation](https://circleci.com/docs/) and [community forum](https://discuss.circleci.com/c/community) if you need help.

For static sites, automated deployment is essential to providing a seamless publishing experience. Services like CircleCI have made automation accessible to developers at any level. It’s time to introduce automation into your static site workflow — once you do, you’ll wonder how you ever got along without it.

### Up next

Next week DJ is going to look into other best practices of modern web development with static websites.

<div style="padding: 20px 40px;background: #f7f7f7;">  
<h2>Join us every Friday 📅</h2>  
<p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>  
<p><strong>Next week:</strong> <a href="https://forestry.io/blog/write-better-javascript-with-webpack/">We will look at Webpack and how it can make you write better JavaScript.</a></p>  
<p><strong>Last week:</strong> <a href="https://forestry.io/blog/up-and-running-with-hugo-part-2/">Up & Running With Hugo, Part 2: Setting up GitHub & Forestry (CI & CD)</a>.</p>  
</div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16658610">Discuss on Hacker News</a> 

[Subscribe to our newsletter](#footer-cta) to get updated when the next article is released!
