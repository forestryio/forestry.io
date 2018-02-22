---
title: Could not locate Gemfile or .bundle/ directory
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-02-22 11:56:06 +0000
description: jekyll bundler error forestry.io
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
aliases: []
draft: true

---
Hi ​

​,  
We've  been busy working on improvements to site previews and they're almost  ready.  The current plan is that these will be available next week.  
  
Good  news: with these changes you should start to see some significant  performance increases.  We've restructured the way previews work from  the ground up.  We did this not only for performance increases but to  make some cool new features we have planned much more easy and faster  for us to implement.  
  
Bad news: some jekyll-based projects may  break.  Specifically jekyll projects without valid Gemfiles.  These  might include jekyll projects started on v <3.2 or started from  scratch, i.e. not via the "jekyll new project-name" command.  
  
Why  did we do that?  Previously we were taking some liberties to try to fix  common issues with jekyll repos.  The problem was that these liberties  meant that some projects that wouldn't build locally would build in the  preview environment and those issues would be hidden from you, the  project users.  In hindsight we feel this was the wrong choice for us to  make and are backing away from it starting with this feature release.

How  can I tell if this change will break my project?  If you are already  using bundler for your project, you should be good to go!  Using bundler  is the way the jekyll quickstart guide has lead people to set up their  projects and the way the "jekyll new" command works since jekyll version  3.2.  To test this you can open a command line, navigate to your  project repo and execute the command "bundle exec jekyll build".  If  your site builds and you don't see any errors, your project should be  able to reap the benefits of this update without any of the downsides.   Enjoy!  
  
So, what happens if we break your project?  You'll need  to add a valid Gemfile to the project.  There are several ways to do  that but I think the easiest, especially for someone who is not a ruby  developer, is to have jekyll generate a Gemfile for you, then commit  that file to your project repo and push it to your source provider.

I'm a developer, so the way I would do this is to   
  - open a command line,   
  - navigate to the project directory,   
  - make sure I have a clean working tree,  
  - execute the "jekyll new" command with the appropriate options,   
  - install the dependencies with bundler,   
  - test that the project works the way I expect it to with bundler, and finally;   
  - commit and push those changes with git.    
In  bash this would correspond to the following set of commands, feel free  to ignore the "#" and everything after, those are comments to describe  what that specific command should do:  
  cd my-jekyll-project  
  git status  
  ...  
if I have any work in progress I can set that aside temporarily with "git stash"  
  ...  
   jekyll new . --force # this command will generate a template Gemfile,  calculate the dependency graph and install the dependencies with bundler  
  ...   
make  any changes you need to the Gemfile, the template is well commented  with regions to comment and uncomment based on common uses like  gem-based themes and setup for publishing to github pages  
  ...  
  bundle exec jekyll serve # this command will test that the gemfile works and serve your project to localhost on port 4000  
  ...  
open a web browser and got the the url localhost:4000 to make sure your website looks the way you expect it to  
  ...  
  git add Gemfile Gemfile.lock  
  git commit -m "Dependency management with bundler"  
  git push  
  ...  
if I had to stash any work in progress above I would reapply it now with "git stash pop"  
  ...  
  
Note  that from now on I would recommend that you prepend all your jekyll  commands with "bundle exec" like we did in the example above. That way  the behaviour you see locally when you test commands and the way  forestry previews and publishes on your behalf should match.  
  
[Here is a link to Jekyll's documentation on using bundler with jekyll that elaborates on some of the things I touched on here.]()  
  
If  you have any questions about this feature, or getting set up with  bundler or anything else please don't hesitate to reach out to me or any  of the team.  Thank you for using Forestry and for your patience as we  make the product better,  
Matt