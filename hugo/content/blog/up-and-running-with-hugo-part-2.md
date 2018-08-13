---
title: 'Up & Running With Hugo, Part 2: Setting up GitHub & Forestry (CI & CD)'
description: Using Continuous Integration and Continuous Deployment
date: 2018-03-16 15:47:26 +0000
authors:
- Chris Macrae
publishdate: 2018-03-16 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
categories: []
tags: []
headline: ''
textline: ''
images:
- "/uploads/2018/03/up_running_w_hugo_II_1.png"
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
<!--{{% tip %}}

This guide was most recently updated on **March 16, 2018.**

{{% /tip %}}

--- -->
For this week on [_Frontend Friday_](/categories/frontend-friday/ "frontend friday tag")_,_ we have a follow up to [_Up & Running With Hugo, Part 1: Building Your First Site_](/blog/up-and-running-with-hugo/). This week, we cover integrating your repository with GitHub, and setting up continuous integration and continuous deployment with Forestry.io and some other handy tools.

## Table of Contents

1. [Introduction](#1-introduction)
2. [Setting up Git](#2-setting-up-git)
3. [Setting up Continuous Integration](#3-setting-up-continuous-integration)
4. [Setting up Continuous Deployment with Forestry](#4-setting-up-continuous-deployment-with-forestry)
5. [Next Steps](#next-steps)

## 1) Introduction

Before we continue, you might be asking _What is CI & CD..?_ Let me explain:

### Continuous Integration (CI)

Continuous Integration (CI) is a development practice where developers check-in code to a version control tool multiple times per day. Each time code is checked-in, an automated build can be performed, allowing developers to identify problems with code quickly.

### Continuous Delivery (CD)

Continuous Deployment (CD) is a development practice where any change to software is automatically deployed to a production or staging environment. This allows for real-world testing and enables more rapid delivery.

{{% tip %}}

More on CI & CD in our [Frequently Asked Questions](https://forestry.io/docs/faqs/glossary/ci-cd/).

{{% /tip %}}

### Why are these important?

CI & CD allows you to automate the tedious parts of building websites -- making sure they are built right, and deploying those changes to production or staging environments for your team to review.

Version control also maintains a complete history of all changes that are checked into version control.

This enables developers to quickly roll back changes that don't have the outcome that was desired. _(I.e, when a hasty change breaks your whole site! :P)_

## 2) Setting up Git

Git is our version control system, which will enable CI & CD through tools like [Forestry](https://forestry.io).

{{% tip %}}

If you're new to Git and don't have Git installed, head over to [Git download page](https://git-scm.com/downloads) to download an installer for your OS.

{{% /tip %}}

Next, open your terminal once more and ensure your working path is the _Boilerplate_ project (or any project you would like to connect with git). If not, run:

    cd /PATH/TO/hugo-boilerplate

Then we'll create a local repository:

    git init

Next, we'll add all of the files in the project to the local repository:

    git add .

To see the status of the repository, run:

    git status

Finally, we'll _commit_ these changes to the local repository's version history:

    git commit -am "Init"

### Pushing to the Remote

Up to this point you've just been working on your _local repository._ If anything were to happen to your computer, all would be lost!

That's why we set up a _remote repository_ on services like GitHub, BitBucket, or GitLab. That way, our changes are stored in the Cloud and can be shared with your entire team.

Head over to your favorite Git provider and create a new repository.

_If prompted, ensure you **don't** initialize the repository with a README, license, or a .gitignore file. That will just make things more complicated._

{{% tip %}}

If you're new to Git, we recommend you create a [GitHub account](https://github.com/signup) and then create a [GitHub repository](https://help.github.com/articles/create-a-repo/).

{{% /tip %}}

Next, grab the _Remote URL_ for your repository, and we'll add it to your local repository. _(Instructions for finding this can be found for_ [_GitHub_](https://help.github.com/articles/which-remote-url-should-i-use/) _&_ [_BitBucket_](https://confluence.atlassian.com/bitbucket/change-the-remote-url-to-your-repository-794212774.html)_.)_

    git remote add origin YOUR_REMOTE_URL
    git branch --set-upstream-to origin master

Verify the URL is correct:

    git remote -v

Finally, push your local repositories history to the remote repository's `master` branch:

    git push origin master

Congrats! You now have your Hugo site set up with version control so that you can easily set up continuous integration and continuous deployment.

Head over to your repository in GitHub, GitLab, or BitBucket to see the updated code.

## 3) Setting Up Continuous Integration

Now, we'll set up continuous integration for your site. This will allow your developers to ensure that the quality of the code is up to par before pushing it to the remote.

We'll do this using the Node package [_Husky_](https://www.npmjs.com/package/husky)_,_ which allows you to run tests and other commands based on [Git hooks](http://githooks.com/).

In this case, we're going to use the `pre-push` hook, to run tests on our CSS and JS, and confirm that our production build checks out before pushing our changes to the remote repository.

To get started, run:

    npm install husky --save-dev

Next, we're going to setup our `pre-push` test commands. Open up `package.json` in your favorite text editor, and find the `scripts` section.

In the _Hugo Boilerplate_, it will look something like this:

    "scripts": {
        "start": "gulp server",
        "preview": "cross-env NODE_ENV=production HUGO_ARGS=preview gulp server",
    	...
      }

At the bottom of the scripts, add the following:

    "prepush": "npm run eslint && npm run stylelint && npm run build"

The final `package.json` should look like:

      "scripts": {
        "start": "gulp server",
        "preview": "cross-env NODE_ENV=production HUGO_ARGS=preview gulp server",
        "build": "cross-env NODE_ENV=production gulp build",
        "clean": "gulp clean",
        "hugo": "node_modules/.bin/hugo --source hugo/",
        "eslint": "./node_modules/eslint/bin/eslint.js src/js/ --ext .js",
        "eslint:fix": "./node_modules/eslint/bin/eslint.js src/js/ --ext .js --fix",
        "stylelint": "npm run stylelint:css && npm run stylelint:scss",
        "stylelint:fix": "npm run stylelint:css --fix && npm run stylelint:scss --fix",
        "stylelint:css": "./node_modules/stylelint/bin/stylelint.js src/css/**/*.css",
        "stylelint:scss": "./node_modules/stylelint/bin/stylelint.js src/scss/**/*.scss",
        "prepush": "npm run eslint && npm run stylelint"
      },

Now, lets commit our changes and try pushing them to the remote repository:

    git commit -am "Added Husky for Continuous Integration"
    git push

You'll see console output from Husky, running our Eslint and Stylelint tasks.

      6:1  warning  Unexpected console statement  no-console
      7:1  warning  Unexpected console statement  no-console

Our tests had warnings because our Javascript has `console.logs` in it, but didn't fail because it didn't break any of our rules. Pretty handy!

Both Eslint (Javascript) and Stylelint (CSS) can be configured from `.eslintrc.yml` and `.stylelintrc.yml` in the root of the boilerplate.

{{% tip %}}

Testing doesn't end here! The sky is the limit. Write your own tests, or try out other common static hosting test suites like [HTML Proofer](https://github.com/gjtorikian/html-proofer) or [Jest](https://blog.sentry.io/2017/10/23/keep-your-blog-consistent-with-jekyll-and-jest).

{{% /tip %}}

## 4) Setting up Continuous Deployment with Forestry

Your final step is to set up continuous deployment with Forestry, so that each time a commit is pushed to your remote repository,  your site is automatically rebuilt and deployed to your hosting provider!

{{% tip %}}

If you haven't already set up your site in Forestry, follow our comprehensive [_quick start guide_](https://forestry.io/docs/quickstart/setup-site/) for importing and setting up a site with Forestry CMS.

{{% /tip %}}

Head over to the [Dashboard](https://app.forestry.io), and select your site.

Once inside the CMS, select _Settings_ from the sidebar, and then scroll down to _Deployment_.

![](/uploads/2018/01/settings-deployment.png)

In the _Deployment_ section, we're going to enable to _Deploy on Git Push_ feature, which watches for changes to your repository and automatically publishes your site when one occurs.

**Note:** the _Deploy on Git Push_ feature only works when Forestry is handling deploying of your site. To learn how to set up deployment with Forestry, see our [hosting docs](https://forestry.io/docs/hosting/).

## Next Steps

Now that you've completed the _Up & Running With Hugo_ guide, you're all set to make your dive into the world of the JAMStack.

We recommend you head over to the [Forestry docs](https://forestry.io/docs) to learn how Forestry can help make managing your static site easier.

### Up next

This concludes our Hugo + Git + Forestry.io Introduction. Next week DJ is diving deeper into Continuous Integration and Continuous Delivery using CircleCI - a technology we at Forestry.io are using every day.


<div style="padding: 20px 40px;background: #f7f7f7;">  
<h2>Join us every Friday 📅</h2>  
<p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>  
<p><strong>Next week:</strong> We'll look into Continuous Integration and Continuous Delivery: <a href="https://forestry.io/blog/automate-deploy-w-circle-ci/">Automate Your Static Site Deployment with CircleCI</a></p>  
<p><strong>Last week:</strong> <a href="https://forestry.io/blog/up-and-running-with-hugo/">Up & Running With Hugo Part I: Building Your First Site</a>.</p>  
</div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16600724">Discuss on Hacker News</a>

[Subscribe to our newsletter](#footer-cta) to get updated when the next article is released!