---
title: Why We Created a Git-Backed Content Manager
description: ''
date: 2018-07-27 14:31:20 +0000
authors:
- DJ Walker
publishdate: 2018-07-27 03:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/07/hdd.jpg"
categories:
- Company
- Frontend-Friday
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
Software developers have long used Version Control Systems for tracking changes to code. Any code project will benefit greatly from using version control, and any developer worth her salt should be wary of a codebase that does not use version control. Version control makes it easy to monitor changes to code, track down bugs, and manage releases.

Forestry’s content manager is supported by Git, one of the most popular version control systems available today. Forestry saves changes to your content by **committing these changes into your Git repository**. This is what we mean when we say Forestry is a **Git-backed content manager**. In this article, I will explore why using version control to manage your content can offer many of the same benefits as using it for your code.
 

## An Evolutionary History of Static Sites

To better understand how we arrived at the idea of creating a Git-backed content manager, let’s look briefly at how modern static sites evolved.

### Everything is HTML

It doesn’t take much to build a website. You just need a document written in **HTML**, and a webserver to send this document out to any internet users who ask for it.


    <!doctype html>
    <html>
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>

Every website since the early days of the web has relied on HTML. Browsers decode the HTML that is sent to them to construct the web pages that you see.

### Generating HTML On-the-fly

It didn’t take long before clever people realized that you could write a program that runs on the webserver which can generate HTML markup on-the-fly:


    <?php
    echo "<!doctype html><html><body>";
    echo "<h1>";
    echo "Hello, " . get_username() . "!";
    echo "</h1>";
    echo "</body></html>";

Using this approach, you can create dynamic web pages that do things like display a user’s name on the page if they’re logged in. This is a powerful idea, and it was the hallmark of the [“Web 2.0”](https://en.wikipedia.org/wiki/Web_2.0) era.

From a content management perspective, dynamically generating HTML greatly simplifies the maintenance of a large website. Many Content Management Systems couple this server-side HTML generation with a database that stores all of the website’s content. Web pages are built by inserting that content into **layout files** that provide instructions for building the page HTML. One of the biggest advantages of this is that when you want to update the layout of your website, you only have to edit a few files, as opposed to making redundant changes across hundreds of HTML pages.

### Cache HTML for Speed

While dynamically-generated web pages offer a lot of benefits, they are generally slower than a static HTML equivalent. This is because each request to the website needs to retrieve content from a database and run some server-side code to build the page.

A common strategy for optimizing a dynamic, content-driven website is to implement some kind of **server-side cache**. The dynamically-generated HTML for these pages can be saved on the server and retrieved the next time the page is requested, instead of running the code to re-generate the HTML.


### Generate all the HTML Beforehand

A static site generator borrows the lessons learned by these dynamic CMS platforms — separating the content from the layout-building instructions — with one major tweak. Instead of generating HTML on-the-fly and maintaining a temporary cache, the site’s HTML is generated all at once. This generated HTML, and not the layout-building instructions, is what gets deployed to the webserver. By setting up an [automatic deployment](https://forestry.io/blog/automate-deploy-w-circle-ci/) that rebuilds this HTML every time content is updated, updating content with a static site generator can feel just as snappy as updating content in a traditional CMS. What you’re left with is a site that has all the simplicity and speed of old-school static HTML, with the power and flexibility that comes with a full-fledged CMS.

### Everything Lives in Git

Automatic deployment is a crucial part of efficiently maintaining a static site, and the easiest way to take advantage of the readily available deployment tools is to **put your site in a Git repository**. This makes it simple for deployment tools to retrieve your code in order to build your static site and deploy it to your webserver.

## Storing Content in Version Control

Because a static site doesn’t run any code on the webserver, only static files, content can only be updated by rebuilding and redeploying the website. It therefore makes sense to keep your content in a Git repository, just like your code. While this may seem limiting at first, it can offer some distinct advantages.

### Content is Portable

A traditional CMS will store content in a database, or in files on the webserver where the code is running. Migrating one of these websites to a new server, or adopting a modern development process where developers work on a local copy of the website, requires copying this content to the new environment.

Storing a site's content in Git makes it easy to copy and share with everyone who needs access to it. It's also easy to merge changes from multiple users &mdash; something that can not easily be done with multiple copies of a database or un-versioned files.


### Access Full Content History and Recover Changes

With Git, every change is tracked and can be examined by viewing the **commit history**. This is great for seeing the changes to your content over time, and will even let you see which user made a given change.

Since all changes are recorded in the commit history, it’s also possible to revert changes and recover anything that was deleted by grabbing the old content from a previous commit.

{{% tip "Time Traveling With Git" %}}
When the entire site is stored in the same Git repo, it is easy to see what the site looked like at any point in time. The following commands will clone this website's repository and roll it back to the way it looked 6 months ago:

```
git clone https://github.com/forestryio/forestry.io.git forestry-timewarp
cd forestry-timewarp
git checkout fd0a4a87afa9954b3ce31ccecdde9328d8bf37bd
```

You can use this to go as far back into your commit history as you want, all the way to the first commit!
{{% /tip %}}

### Unified Workflow

With a static site, both developers and content editors follow the same workflow to make updates to the site. Because code and content live together, and updates are deployed via an automatic process, both code and content are updated by committing changes to the Git repo. Contrast this with a traditional CMS, where code may be updated by committing to the site’s repository, but content changes are made by logging in to the CMS backend and saving changes to a database.

Forestry offers a content management interface that will feel familiar to users of a traditional CMS, but it functions quite differently when it’s time to save your changes. **Forestry commits the modified content files to your Git repository**. All of your site’s content can still be edited outside of Forestry by following the same workflow of committing the changes to the repo. Even if one user edits files in Forestry and the other edits files in their text editor, both users are doing fundamentally the same thing.

## Content Management That Lets You Work the Way You Want

Forestry doesn't require you to make compromises about how your content is managed, or which tools you use. Our aim is to assist users with creating and editing content by providing rich and intuitive UI options. By integrating Git into the content management workflow, we gain all the benefits of version control applied to a site's content while also making it easy to include other options for updating content. Whether you have users who prefer to update markdown files with a standard text editor, or you have an automated system that contributes machine-generated content to your repository, Forestry can work alongside any of these options.



## Developer Tip: Filter Out Forestry Commits From Git Log

One thing that developers may not like about having content in version control is that content updates can clutter up the commit history. A solution I've found to filter out commits from Forestry is to use `git log`'s `--invert-grep` flag to filter out commits that have Forestry's commit message:

```
git log --invert-grep --grep="Update from Forestry.io"
```

I recommend aliasing this command to something shorter, like `devlog`, if you plan to use it frequently.

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll take a look at <a href="https://forestry.io/blog/creating-a-multilingual-blog-with-jekyll/">setting up multilingual sites with Forestry.</a> </p><p><strong>Last week:</strong> We showed you how to use Forestry's Blocks feature to <a href="https://forestry.io/blog/form-builder-with-formspree-forestry-blocks/">create a form builder.</a></p></div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17627221">Discuss on Hacker News</a>
