---
aliases:
- "/blog/post/discontinuing-zip-sites"
author:
- forestryio
publishdate: 2017-10-12 14:54:52 +0000
expirydate: 2030-01-01 04:00:00 +0000
excerpt: Zip-imported sites are being discontinued on November 13
title: Discontinuing Zip-imported Sites
categories:
- cms
date: 2017-10-12 14:54:52 +0000

---
Letting developers import a site from a zip archive is a feature that a lot of our users have made use of. However, with our strong focus on Git-backed workflows, we feel that that sites imported with zips have been providing a unsatisfactory experience.

At Forestry, we believe Git-backed content management systems are the future of content management, and that using a Git repository is the best way to manage sites.

That’s why we’ve made the decision to _discontinue zip-imported sites starting November 13, 2017_. 

## What Does This Mean For My Sites?

Zip importing is being discontinued in two-phases.

During these phases, we implore all users to begin making the move to Git-backed sites. Instructions for moving your zip imported site to a Git repository are available below!

**Phase 1 - October 13 to November 13**

Starting today, new sites will not be able to be imported using a zip archive. All existing zip sites will continue to work, however. You’ll still be able to:

* Manage your content using the CMS and Remote Admin
* Uploading updates from the dashboard (theme files, content updates, et cetera)
* Request a backup of your sites
* Deleting existing sites

**Phase 2 - November 14 and onward**

On November 14, we will be discontinuing support for sites imported with a zip archive. We will be disabling support for:

* Managing your content using the CMS and Remote Admin
* Uploading updates from the dashboard (theme files, content updates, et cetera)

We will **not be removing** existing zip sites. All existing zip sites will still be accessible from the dashboard, and you will still be able to:

* Request a backup of your sites
* Deleting existing sites

## How Do I Get a Backup of My Site?

Backups of sites imported with a zip archive are available by request, and will be for all-time!

You can request a backup of your site from the Forestry Dashboard.

1. Head over to the [Forestry Dashboard](https://app.forestry.io/dashboard)  
   ![](/uploads/2017/12/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507829464198_Screen+Shot+2017-10-12+at+1.12.42+PM.png)
2. Click the … icon to the right of the site
3. From the menu, choose “Download”
4. The backup of your site will then begin downloading.  
   This archive can be used to make the switch to Git.

## How Do I Make The Switch to Git?

Switching over to a Git-backed site is quite easy!

Once you have a backup of your site, you just need to setup a repo, add the backup, and import it into Forestry and you’re all set!

We’ll walk you through a short tutorial of how to do this!

**Step One: Choose a Provider**

Before you can get started, you need to choose a Git provider for your site. There are three options available:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507829685832_image.png)

The leading provider in cloud Git hosting. Github provides unlimited public repositories for free. Unlimited private repositories are available for $7 per month.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507829646642_image.png)

The cloud hosting option for Git provided by Atlassian, the company behind Trello and Jira. BitBucket provides unlimited public and private repos for up to 5 users.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507829707471_image.png)

The open-source cloud hosting option for Git. GitLab’s cloud hosting offers unlimited public and private repos for as many users as you’d like. GitLab also offers a powerful CI for handling complex deployments and build processes!

**Step Two: Create Your Account & Repository**

Now that you’ve chosen a provider that meets your needs, you’ll need to set up an account. **For the purposes of the tutorial, we will be using Github.**

1. Head over to [Github](https://github.com/) and fill out the sign up form to create your account.  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507829758160_Screen+Shot+2017-10-12+at+2.35.33+PM.png)
2. On the next screen, just hit “Next” to create a free account.  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507823395567_Screen+Shot+2017-10-12+at+12.22.46+PM.png)
3. **Check your email!**  
   _You’ll need to verify your account before you can go any further._
4. Click “Start a project” to create your first repository.  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507823335501_Screen+Shot+2017-10-12+at+12.22.58+PM.png)
5. Fill out the details of your repository, and then hit “Create repository”.  
   _Feel free to add a .gitignore file for the language of your static site generator. (Ruby for Jekyll, Go for Hugo)  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507823591631_Screen+Shot+2017-10-12+at+12.52.49+PM.png)_
6. Now we need to upload the files from your backup. Click “Upload files”.  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507823696297_Screen+Shot+2017-10-12+at+12.54.17+PM.png)
7. From this screen, upload the contents of your site, and then click “Commit Changes”.  
   _Ensure you upload the contents of the zip, not the zip archive!_  
     
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507824539332_Screen+Shot+2017-10-12+at+1.05.11+PM+2.png)
8. You’re all done of step one! Give yourself a pat on the back!

**Step Two: Add A New Site in Forestry**

Now that you’ve created a Git repository with your site’s source code in it, you can now import it into Forestry!

1. Head to the [Forestry Dashboard](https://app.forestry.io/dashboard) and click “Add site”

   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507914515735_image.png)
2. In the modal that appears, click “Import existing site”, and then choose your static site generator (Hugo or Jekyll)  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507830631737_image.png)
3. Choose your Git provider (Github, Bitbucket, or Gitlab).  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507830664231_image.png)
4. Now, choose your repository, and the branch your source code is in — usually master — and then click “Next”.  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507830726972_image.png)
   1. _When using Github, you can choose to give Forestry access to only public repositories, or all private repositories as well. If you’re using a free account, choose public._  
      ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507830703451_image.png)
5. Give your site a name, and then click “Next”.  
   ![](https://d2mxuefqeaa7sj.cloudfront.net/s_8C4CED3D75504D28509A2D9F1536E2FD4FD296FEF40B8A1D45994577317FAA20_1507830742769_image.png)
6. **You’re all done!**  
   _You can start managing your site once Forestry has finished processing it and generates your custom-made CMS!_

## Working With Git

If you’re looking for more resources for learning how Git works, and how to become a Git pro, check our our resources:

* [Beginners Guide to Git — An introduction to version control & Git](https://www.atlassian.com/git/tutorials/what-is-version-control)
* [“Hello World” Github Guide — An introduction to Github for Beginners](https://guides.github.com/activities/hello-world/)
* [Learn Git with Bitbucket Cloud — An introduction to Bitbucket for Beginners](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
* [GitLab user guide — An introduction to GitLab for Beginners](https://docs.gitlab.com/ee/user/index.html)

## Why Discontinue Zips?

Git-backed development and editorial workflows provide a seamless experience between content editors and developers. Gone are the days of managing content and code backups, handling different environments, and keeping everything in sync.

With a Git-backed site, your content and code have a single source of truth — in Git. This makes managing, versioning, and backing up content as easy for developers as it is for code.

Also, with a Git-backed site you get the benefit of continuous integration with your CMS, hosting environments, and repository. Every change made by developer is available to content editors and vice versa, with zero extra effort!

Sites imported with zips lose all of these benefits, and that’s not okay!

**So are you ready to make the jump to the Git-backed revolution?** If so, share your experience in the comments below!