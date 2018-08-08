---
title: Could not locate Gemfile or .bundle/ directory
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
authors:
- Forestry Team
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-02-22 11:56:06 +0000
description: Describes a common error for Jekyll users of Forestry.io and includes
  step-by-step instructions for solving the underlying error and testing that the
  issue is resolved locally.
headline: ''
textline: ''
categories:
- Jekyll
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu:
  troubleshooting:
    name: Could not locate Gemfile or .bundle/ directroy
    parent: Troubleshooting
    weight: 2

---
#### When I view an error log from Forestry I see: `Could not locate Gemfile or .bundle/ directory`

## What this error means

Gemfiles include a list of project dependencies and where to find them.  Bundler is a dependency manager for the Ruby programming language that can read Gemfiles, resolve the dependency graph and install those gems.  Jekyll is a ruby application and can use Bundler to manage your project dependencies.  Forestry requires that your Jekyll projects contain a Gemfile at the root of the repository.

This error message typically means that your Jekyll project doesn't have an Gemfile.  This document will help you to create a Gemfile for your project so that you can use Forestry to build your project and unlock our powerful Preview and Publish functionality.

Jekyll also allows several methods to specify plugins, including using your project Gemfile.  Forestry will continue to support all of these options specifically for jekyll plugin dependencies.

{{% tip %}}

Read more about:

##### [Jekyll and Gemfiles](https://jekyllrb.com/docs/quickstart/#about-bundler)

##### [Bundler](http://bundler.io/)

##### [Gemfiles](http://bundler.io/v1.16/man/gemfile.5.html)

##### [Jekyll-plugins](https://jekyllrb.com/docs/plugins/)

{{% /tip %}}

### But my project works fine when I build it on my machine

This can happen when you can have gems installed globally on your machine.  Since Forestry's architecture builds your sites in the cloud we need a way to specify to the cloud computer what code it needs to successfully build your site.  The Gemfile serves this purpose.

## Fixing the issue

### Testing that the Gemfile works locally

To test this you can open a command line, navigate to your  project repo and execute the command:

    bundle exec jekyll build

If  your site builds and you don't see any errors, your project should also build in Forestry.  If it still doesn't please contact support and we can help.

### Adding a Gemfile to an existing project

In our opinion the easiest way to add a gemfile to a project is to have Jekyll generate a Gemfile for you, then commit that file to your project repo and push it to your source provider.  To achieve you'll need to:

* open a command line
* navigate to the project directory
* make sure you have a clean working tree
* execute the `jekyll new` command with the appropriate options
* install the dependencies with bundler
* test that the project works the way that you expect it to with bundler
* commit and push those changes with git

In bash this would correspond to the following set of commands:

{{% tip %}}

Note that the "#" and everything after are comments to describe what the command should do.

{{% /tip %}}

```  
cd my-jekyll-project  
 
git status 

# you can use "git stash" to set aside any work 
# in progress you might have

# this command will generate a template Gemfile,
# calculate the dependency graph and install the 
# dependencies with bundler  
jekyll new . --force 

# Now you can make  any changes you need to the 
# Gemfile, the template is well commented  with 
# regions to comment and uncomment based on common 
# uses like  gem-based themes and setup for publishing 
# to github pages.

# this command will test that the gemfile works and 
# serve your project to localhost:4000  
bundle exec jekyll serve 

# Open a web browser and go to the url localhost:4000 
# to make sure your website looks as expected

git add Gemfile Gemfile.lock
git commit -m "Dependency management handling via bundler"
git push

# If you did stash any work above, reapply it 
# now with "git stash pop"
```

Going forward, Forestry recommends that you prepend all your jekyll  commands with `bundle exec` like we have in the example above. That way Forestry previews and publishes should match the experience you have on your computer when you serve and build with Jekyll.

If there are any questions or if you run into any issues please don't hesitate to contact our support team.