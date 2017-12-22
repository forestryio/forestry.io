---
aliases:
- /blog/post/forestry-gitlab
authors:
- jordan-patterson
images:
- /uploads/2017/12/31/gitlab-and-forestryio.png
- /uploads/2017/12/31/twitter-card-gitlab-forestry.png
date: 2016-09-06T23:45:00Z
description: "We're happy to announce our support for GitLab hosted sites"
excerpt: "GitLab support is here! Fire up a CMS for your GitLab-hosted Jekyll and Hugo sites! "
title: "Forestry + GitLab"
categories:
- CMS
---
Now you can add a [Forestry.io CMS](https://forestry.io) to your [GitLab.com](https://gitlab.com) static site (Jekyll or Hugo).

I've been a [GitLab](https://gitlab.com) user since their very first release in Oct of 2011. I worked at a design agency and converted everything over from SVN to Git and used an internal GitLab installation. I remember submitting a few bugs and [Dmitriy](https://twitter.com/dzaporozhets) was quick to fix them. We loved GitLab then, and still do today.

We've watched GitLab grow since their humble beginnings to become one of the best solutions in the version control space. Here at Forestry, GitLab syncing has been one of the most requested features.

## Setting up a GitLab site
Select GitLab from the list of Git services.  Then Choose your repo and branch.
![](/uploads/2017/12/31/Gitlab-forestry.png)

Forestry will import your site and automatically build a CMS
![](/uploads/2017/12/31/importing-gitlab-site.gif)

Forestry will automatically commit changes back to your repo but you can also have it build and deploy your site (Amazon S3, FTP, etc).

If you're letting GitLab build your site, choose **Commit to source repo only**.
![](/uploads/2017/12/31/Gitlab-hosting.png)

💥  Boom! Now you're ready to rock.

The Forestry CMS will commit changes back to your GitLab repo and pull in changes if you push to it.  All of your content and code under version control!
