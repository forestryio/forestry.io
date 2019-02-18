---
title: In Search of the Best Continuous Deployment Service
description: ''
date: 2018-08-24 05:01:35 -1100
authors:
- DJ Walker
publishdate: 2018-08-24 01:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/08/pocketknife_texture.jpg"
categories:
- Frontend-Friday
tags:
- CI/CD
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
We’ve written before about the [advantages of automated deployment,](https://forestry.io/blog/automate-deploy-w-circle-ci/) particularly for static sites. Continuous Integration and Continuous Deployment are a ubiquitous strategy for managing the release of software. There are several options out there for running your CI/CD pipelines, with their own strengths and weaknesses. Which one should you use? In this article, we will look at 5 different services that you can use to build, test, and deploy your code.

## Configuration is Key

When evaluating the utility of a CI/CD tool, there are two questions I want to know first:

**How Much Control Do I Have Over the Build Environment?** Being able to configure the environment that your build steps run in is essential. My preferred strategy is to run the build steps in a Docker container with a user-defined image. Containers have become the ideal way to provide an isolated, reproducible environment for running code.

**How Do I Configure My Build Pipeline?** If you wanted, you could just run your pipeline with a big shell script or a battle-tested tool like `make`. These scripts can quickly become complex and difficult to troubleshoot. Ideally, your pipeline will be configured using a configuration language that contains some useful abstractions, to avoid writing lots of boilerplate scripts. While an intuitive and easy-to-understand configuration syntax is helpful, just about any tool will require you to learn its rules, so you should expect to dive into the docs to fully understand how to use it.

However the configuration works, you should opt for tools that allow you to store your build configuration in your repository. Storing your build instructions in version control provides several advantages. Building commits from a previous point in time will use a build configuration that matches the code from that point in time. Build configuration can be worked on in a separate branch along with changes to the codebase, and can take advantage of the portability that comes with having a project in version control.

## CircleCI

![](/uploads/2018/08/circleci_splash.png)

CircleCI is a hosted CI/CD service that connects to your repository and runs your build pipeline whenever commits are pushed. CircleCI can run your build jobs in a Docker image, a Linux VM, or a MacOS VM for your iOS projects.

Jobs in CircleCI are configured via a `.circleci/config.yml` file in your repository. This file specifies the docker image that should be used for your build environment, as well as the commands to run in order to build, test, and deploy your application.

CircleCI is what we use at Forestry to run our tests and deploy our code. It integrates seamlessly with Github and Bitbucket projects.

### We Like:

CircleCI strikes a nice balance for us in that it’s highly configurable, but easy to integrate with our Github projects.

### We’re Not Crazy About:

It is not currently possible to connect GitLab projects to CircleCI.

{{% tip %}}
Check out our article on [deploying a static site to CircleCI](https://forestry.io/blog/automate-deploy-w-circle-ci/).
{{% /tip %}}

## TravisCI

![](/uploads/2018/08/travis_pipeline.png)

TravisCI is a hosted CI/CD solution that integrates with your Github projects. TravisCI builds are configured with a `.travis.yml`  file that lives in your repository.

Builds run in an Ubuntu environment that can be configured using shell commands during a dedicated installation phase in your build. TravisCI also provides abstractions for installing [a variety of programming languages](https://docs.travis-ci.com/user/languages/) into your build environment.

### We Like:

TravisCI promises to be free for open source projects, forever. TravisCI also integrates tightly with Github and can automatically run integration tests [when a pull request is opened](https://docs.travis-ci.com/user/pull-requests/).

### We’re Not Crazy About:

With TravisCI, your builds are forced to run in an Ubuntu environment. You can [install Docker](https://docs.travis-ci.com/user/docker/) into this environment to pull images, but doing so is more verbose than other solutions. Additionally, you can only use TravisCI with projects hosted on Github.

{{% tip %}} [TravisCI: Getting Started Guide](https://docs.travis-ci.com/user/getting-started/) {{% /tip %}} 

## Drone

Drone is a CI/CD server written in Go. Drone is self-hosted, but a hosted option is currently in the works. Drone contains a plugin system that provides a way to add new features.

To configure a build for Drone, you use a `.drone.yml` file. Drone’s configuration syntax is notable for being a superset of `docker-compose` configuration. If you've used `docker-compose` before, Drone’s configuration language will look familiar to you.

### We Like:

Drone's [matrix builds](http://docs.drone.io/matrix-builds/) feature provides an easy way to test your code against multiple configurations, such as different versions of your dependencies.

### We’re Not Crazy About:

Drone is a relative newcomer to the space, and its documentation could use some help.

{{% tip %}} [Getting Started With Drone CI](http://docs.drone.io/getting-started/) {{% /tip %}} 

## GitLab CI

![](https://about.gitlab.com/images/ci/ci-cd-test-deploy-illustration_2x.png)

If you use GitLab to host your code, you already have access to Gitlab’s Continuous Integration tools!

All you have to do to add a CI pipeline to your GitLab project is add a `.gitlab-ci.yml` file to your project. I appreciate the fact that you don’t need to navigate a UI to set up CI on a project - if you have a lot of projects and want to automatically manage their CI in batches, this option is great for automating.

### We Like:

GitLab CI works with all versions of GitLab: you can use it on gitlab.com or on your own self-hosted instance of GitLab. Since GitLab’s CI component is written in Go, it is easy to run on any major operating system including Windows and OSX. You can even [run your integration tests on your local machine!](https://gitlab.com/gitlab-org/gitlab-runner/issues/312)

### We’re Not Crazy About:

For free tier users, GitLab CI requires you to use GitLab to host your source code (certain paid tiers provide support for [using Gitlab CI with external repositories](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/)). However, the option to self-host the whole software suite may mitigate lock-in concerns.

{{% tip %}} [GitLab CI Quick Start Guide](https://docs.gitlab.com/ee/ci/quick_start/) {{% /tip %}} 

## Jenkins

![](/uploads/2018/08/jenkins_logo.png)

Jenkins is a CI/CD server that you install and run on your own hardware. The Jenkins project [began in 2004](https://www.cloudbees.com/jenkins/about), and today is a popular choice for organizations that want to own their CI infrastructure.

Jenkins has a huge plugin library for adding features to your CI server. Jenkins builds are configured with a `Jenkinsfile`, provided you have the recommended  [Pipeline Plugin installed](https://jenkins.io/doc/book/pipeline/getting-started/). Like CircleCI, a Jenkins build environment can be configured via a Docker image, though there are [several other options](https://jenkins.io/doc/book/pipeline/syntax/#agent) as well.

Jenkins is written in Java and is compatible with all major operating systems. Builds can run on Linux, BSD, MacOS, or Windows environments.

### We Like:

Jenkins is completely free to use and open source. Jenkins has support for plugins, and thanks to its relative longevity in the CI space, has amassed a [rich plugin library](https://plugins.jenkins.io/).

Since Jenkins is written in Java, it is cross-platform friendly and runs on any major OS, including MacOS and Windows.

### We’re Not Crazy About:

There’s not much to complain about here: Jenkins can do just about anything you need it to! Individuals or small teams may not like the maintenance burden of self-hosting their CI server, however.

{{% tip %}}
[Jenkins: Getting Started](https://jenkins.io/doc/pipeline/tour/getting-started/)
{{% /tip %}}

## Picking the Tool That Works For You

The variety of CI/CD options has made automation more accessible to developers than ever before. Open source apps with straight-forward build requirements can take advantage of **TravisCI’s** free offering. Users with code already in GitLab should look into using **Gitlab CI**. **Drone** is a good choice for users who want a simple, self-hosted solution, especially if they’re familiar with `docker-compose` syntax. **CircleCI** is a great choice for those who want flexibility but don’t want the burden of self-hosting. **Jenkins** will require some man-hours to support it, but is an incredibly capable piece of software.

What do you use for automation? Is there a killer feature that I missed? {{% slack_invite_link "Let us know in our Slack Community!" %}}

---

***Updated August 27, 2018:*** *a previous version of this article incorrectly stated that GitLab CI could only be used with GitLab-hosted projects. GitLab's Premium plan and higher plans enable using Gitlab CI with external repositories.*


<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;">
<h2>Join us every Friday :date:</h2>
<p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>
<p><strong>Next week:</strong> We'll show you how to create <a href="/blog/create-in-app-documentation-for-content-editors/">In-App Documentation for your Forestry site</a>. </p>
<p><strong>Last week:</strong> We looked at <a href="https://forestry.io/blog/data-relationships-in-hugo/">creating data relationships with Hugo's headless bundles</a>.</p>
</div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17836668">Discuss on Hacker News</a>