---
title: Build Issues For Sites in Subdirectories
description: ''
date: 2019-06-28 14:36:06 +0000
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
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  troubleshooting:
    parent: Troubleshooting
    weight: 3

---
Your Forestry site is considered to be **in a subdirectory** if the repo you imported to Forestry contains all of the information pertinent to your static site generator inside of a subdirectory. Depending on the static site generator being used, Forestry may have asked you to enter this subdirectory on import so that it can locate the configuration file for the SSG.

If you're experiencing problems previewing or deploying in Forestry, and your site is in a subdirectory, you may need to make some updates to your build configuration. This is particularly true if, in order to build the site locally, you navigate to this subdirectory before running your build commands.

## Diagnosing Build Errors

If your build log complains of a missing configuration file, or if your preview build succeeds but Forestry can't open your preview, adjusting your build config will likely solve the problem. Additionally, if the build log declares that you are missing a Gemfile, and you've ensured that [your project contains a Gemfile](/docs/troubleshooting/could-not-locate-gemfile-or-bundle-directory/), adding the subdirectory info to your build config should resolve the issue.


## Including Subdirectory in Preview

To provide subdirectory info to your build config, you will need to do the following:

1. *Prepend* your subdirectory to the **output directory**. This will give Forestry a complete path from the root of your repo files to the location of the generated website. Note that there should be no need to modify the build command itself.
2. Open the [advanced configuration](/docs/previews/instant-previews/) for your preview environment and set the **Working Directory** to the value of your **Mount Path**, with your subdirectory appended to the end of it.

{{% tip %}}
View the [build commands documentation](/docs/settings/build-commands/) for more information on how to update your build configuration.
{{% /tip %}}

### Example
Let's say you have a Hugo site in the subdirectory `site/`, and you're using the default Hugo build image. 

1. Assuming your build command builds the site to `public/`, your **Output Directory** should be set to `site/public`. 
2. Assuming you're using the default **Mount Path** of `/srv`, your **Working Directory** should be set to `/srv/site`.

Your build settings would then look something like this:

```yaml
build:
  preview_docker_image: forestryio/hugo:latest
  preview_command: hugo -E -F -D -b $DEPLOY_URL -d public
  preview_output_directory: "site/public"
  mount_path: "/srv"
  working_dir: "/srv/site"
  
```
