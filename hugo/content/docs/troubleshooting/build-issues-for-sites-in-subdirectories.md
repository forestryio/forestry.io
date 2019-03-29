---
title: Build Issues For Sites in Subdirectories
description: ''
date: 2019-01-29 14:36:06 +0000
authors: []
publishdate: 2019-01-29 14:36:06 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  troubleshooting:
    parent: Troubleshooting
    weight: 3

---
Your Forestry site is considered to be **in a subdirectory** if the repo you imported to Forestry contains all of the information pertinent to your static site generator inside of a subdirectory. Depending on the static site generator being used, Forestry may have asked you to enter this subdirectory on import so that it can locate the configuration file for the SSG.

If you're experiencing problems previewing or deploying in Forestry, and your site is in a subdirectory, you may need to make some updates to your build configuration. This is particularly true if, in order to build the site locally, you navigate to this subdirectory before running your build commands.

## Diagnosing Build Errors

If your build log complains of a missing configuration file, or if your preview build succeeds but Forestry can't open your preview, adjusting your build config will likely solve the problem. Additionally, if the build log declares that you are missing a Gemfile, and you've ensured that [your project contains a Gemfile](/docs/troubleshooting/could-not-locate-gemfile-or-bundle-directory/), adding the subdirectory info to your build config should resolve the issue.



## Including Subdirectory in Build Config

There are two different times when Forestry will try to build your site: when **creating a preview**, and when **building your site for deployment**. If Forestry doesn't deploy your site, you don't need to worry about updating the deployment build commands.

These commands can be edited by updating your `.forestry/settings.yml` file, or by viewing your site's **Settings** in Forestry.

To provide subdirectory info to your build config, you will need to do the following:

1. Add a `BUILD_DIR` environment variable with the subdirectory where your site is located
2. *Prepend* your subdirectory to the **output directory**. This will give Forestry a complete path from the root of your repo files to the location of the generated website. Note that there should be no need to modify the build command itself.

{{% tip %}}
View the [build commands documentation](/docs/settings/build-commands/) for more information on how to update your build configuration.
{{% /tip %}}

For example, if you have a Hugo site located in the subdirectory `hugo/`, you will want to add a `BUILD_DIR` environment variable equal to `hugo`, and (assuming you're building the site to `public` as is the Hugo default,) your **output directory** should be set to `hugo/public`. Your build commands settings for previews should then look something like this:

```yaml
build:
  preview_command: hugo -E -F -D -b $DEPLOY_URL -d public
  preview_env:
  - HUGO_ENV=staging
  - HUGO_VERSION=0.53
  - BUILD_DIR=hugo
  preview_output_directory: hugo/public
```