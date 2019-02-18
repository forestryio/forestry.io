---
title: Harness the Power of Static Site Generators to Create Presentations
description: ''
date: 2018-07-06 04:00:46 +0000
authors:
- Josh Dzielak
publishdate: 2018-07-06 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/07/projector.jpg"
categories:
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
As a developer evangelist, I make a lot of presentations. Over the years, I’ve used a variety of different drag-and-drop tools to make slides including Powerpoint, Keynote and Google Docs. I’ve also used more developer-friendly frameworks like Reveal.js.

For me, [Reveal.js](https://revealjs.com/) takes the cake. Reveal.js presentations are written in HTML, CSS and JavaScript. I can store the files in git and edit, version, and deploy them with a familiar, git-based workflow. Because these presentations are HTML I can also use a static site generator (SSG) to build them and take advantage of nice SSG features like Markdown support, reusable layouts, and intuitive content organization. Just as SSGs can help you organize a web site, they can also help you organize a presentation.

Let’s take an example. One thing that I find clumsy about using Powerpoint is reordering groups of slides. I always seem to drag-and-drop to the wrong place, and hitting undo only works if I haven’t any changes after reordering. It’s not conducive to developing a new presentation where I want to try a lot of different orders and combinations to see what looks best.

With an SSG however, I can do this easily, because SSGs all have a way to order content. As I’ll show you, ordering groups of slides in a presentation is as easy as ordering blog posts by date, which in SSG-land is a trivial task—often just setting a parameter in what’s called the “front matter” of a content file. Don’t worry if you’re not sure what “front matter” is, you’ll see an example later.

There are many other advantages that the combination of Reveal.js and an SSG offer over the traditional Powerpoint method, and my goal today is to show you how to take advantage of them. I’ll walk you through how to use a theme I’ve created for Hugo called [reveal-hugo](https://dzello.com/reveal-hugo/) which contains all of the Reveal.js boilerplate so you can start creating slides instantly.

[![](/uploads/2018/07/slideshow-example.png)](https://dzello.com/reveal-hugo)

By the end of the tutorial you’ll have created your first presentation and learned a new workflow that’ll make you the fastest slide maker in the office.

<div style="text-align: center;">

<img src="/uploads/2018/07/powerpoint.gif" />

</div>

## Step 1: Create a New Hugo Site

{{% tip %}}
No prior knowledge of Hugo or Reveal.js is required but a basic understanding of how static site
generators work will be helpful. I recommend trying [this tutorial](https://code.tutsplus.com/tutorials/make-creating-websites-fun-again-with-hugo-the-static-website-generator-written-in-go--cms-27319) if you haven’t created a static site before.
{{% /tip %}}

If you don’t have Hugo installed yet, [install it using the instructions on gohugo.io](https://gohugo.io/getting-started/installing/).

For fun, we will make a demo presentation that contains some famous programming quotes.

First, let’s create a new Hugo site called “quotes”. Open a terminal and type this in.

```bash
hugo new site quotes
```

You should see a message that says ‘Congratulations!’. Next, let’s change into the directory of the new site that was created.

```bash
cd quotes
```

Let’s confirm that you can build and run this new, empty site.

```bash
hugo server
```

![](/uploads/2018/07/start-hugo-serve.gif)

If you open localhost:1313 in your browser, you should see a blank page. That’s ok. It’s because we haven’t added any content or layout files yet.

## Step 2: Add the _reveal-hugo_ Theme

With Hugo, layout files typically live in the `layouts` folder, but they can also come from themes. To create our demo presentation, we’ll use a theme I wrote called reveal-hugo. This theme comes with layout HTML files, JavaScript, and CSS built-in, so all you have to add is Markdown-based content.

We’re going to add the theme as a git submodule, because we want to use git to deploy code later. To do that, we first need to initialize git inside of our project directory.

```bash
git init
```

Now, let’s add the submodule.

```bash
git submodule add git@github.com:dzello/reveal-hugo.git themes/reveal-hugo
```

![](/uploads/2018/07/git-submodule.gif)

Next, we need to tell Hugo that we want to use this theme, as well as register `Reveal` as an [output format](https://gohugo.io/templates/output-formats/). Open the `config.toml` file in your editor and add the following lines.

```toml
theme = "reveal-hugo"

[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true
```

Output formats are a very useful Hugo feature that allow you to build multiple representations of your content. Output formats are how, for example, you can easily [build a JSON API for your static site](https://forestry.io/blog/build-a-json-api-with-hugo/). The “Reveal” output format builds source content into a Reveal.js presentation instead of a traditional web page.

## Step 3: Create Your First Presentation

Before we will see any output, we still need to create a content file. In your terminal or your editor, create a file in the `content` directory called `_index.md`. Note the presence of the underscore. This is a special Hugo convention that allows you to [add front matter to list templates](https://gohugo.io/content-management/organization/#index-pages-index-md). List templates are used to serve content at the top level of a section directory, including the root of the site.

In the file `content/_index.md`, add the following front matter and content.

```markdown
+++
title = "Famous Programming Quotes"
outputs = ["Reveal"]
+++

# Famous Programming Quotes
```

If you aren’t already running it, run `hugo server` and open a web browser to `http://localhost:1313`. You should be greeted with a one-slide presentation displayed with the black Reveal.js default theme:

![](/uploads/2018/07/slideshow-example-1.png)

The content is coming from the Markdown in the `_index.md` file. We have just one slide, but it’s very easy to add another. Let’s do that next.

Add the following lines to the `_index.md` file, so that the total markdown section looks as follows.

```markdown
# Famous Programming Quotes

---

> "There are only two hard things in Computer Science: cache invalidation and naming things." -- Phil Karlton
```

Save and your HTML page should reload immediately. This is one of the benefits of Hugo, lightning-fast builds and built-in browser refreshing with Hugo server.

Look for a blue arrow in the bottom-right hand corner of the first slide. Click it, or use your right arrow key to navigate to the next slide.

![](/uploads/2018/07/slideshow-example-2.png)

This is one of the most well-known computer science quotes of all time, attributed to [Phil Karlton](http://www.meerkat.com/karlton/) by [Tim Bray](https://twitter.com/timbray/status/506146595650699264).

### Two Ways to Add Slides

#### The `---` Separator

The reason the quote above is on a different slide is the use of the `---` separator in the Markdown file. Use `---` surrounded by blank lines to indicate that the following content should be on a different slide. This allows you to keep presentation content from spreading over too many files, which tends to slow down the editing process.

#### Additional Markdown Files

Storing every slide in one file, however, would be too unwieldy for large presentations. reveal-hugo gives you another way to add slides by creating new content files in the same Hugo section, or a special section called `home` for the root presentation.

How would the previous example have looked if we wanted to store every quote in its own markdown file?

First, we would have created a directory called `home` in the `content` folder. Then, we would have created a file with a name that reflects the quote, maybe `two-hard-things.md`. In that file, we would have a TOML front-matter section delimited by the `+++` lines and followed by a Markdown section.

```markdown
+++
weight = 10
+++

> "There are only two hard things in Computer Science: cache invalidation and naming things." -- Phil Karlton
```

Just like with the content in `_index.md` we can add as many slides as we want in this file delimited by `---`.

Note the presence of the `weight` parameter in the front matter. `weight` is a [Hugo concept](https://gohugo.io/templates/lists/#by-weight) that is used to order content in the same section, specified as an integer and sorted ascendingly. Assume that we had added several more quotes or groups of quotes in their own files - how we would determine their order in the presentation? This is what weight is for. We would give each content file its own `weight` parameter - 10, 20, 30, and so on.

### Customizing the Reveal.js Presentation

Additional parameters like the Reveal.js theme, code highlighting theme, transition effect and speed, and plugins like speaker notes can all be configured in the front matter of your Markdown files. See [Configuration](https://github.com/dzello/reveal-hugo#configuration) in the README for the full list of what’s available.

## Step 4: Add Slides With Forestry

We’ve seen how to add slides from the command line, now let’s see how we can add them visually in a browser using Forestry. This is especially useful if you have non-developer colleagues who you’d like to share this technique with.

{{% tip %}}
If you don’t want to use Forestry, you can skip directly to Step 5.
{{% /tip %}}

Before we import our site to Forestry, we need to commit it push it up to Github, Gitlab or Bitbucket. For the purpose of this example, we’ll use Github.

### Importing to Forestry

Create a new [Github repository](https://github.com/new) called `programming-quotes`.

Head back to your terminal and commit the changes we’ve made so far.

```bash
git add .
git commit -m ‘Initial commit’
```

Next, register the new remote (substitute “dzello” for your Github username in the example below) and push up to Github.

```bash
git remote add origin git@github.com:dzello/programming-quotes.git
git push -u origin master
```

Now, Forestry will be able to find and import your site. If you don’t already have a Forestry account, [sign up for a free one](https://app.forestry.io/signup).

Go to your Forestry Dashboard located at [https://app.forestry.io/dashboard/](https://app.forestry.io/dashboard/). Click the “Add Site” button and a modal dialog will appear.

![](/uploads/2018/07/add-site-modal.png)

Choose Hugo and then click Next. Select your git provider on the next screen and click Next. Now it’s time to choose the git repository. Type “programming-quotes” into the dropdown box and you should see the repository you just created.

![](/uploads/2018/07/forestry-select-repo.png)

Click it and another dropdown will appear for you to choose the branch. Choose master and then click Next. Invite any guests you like using the next dialog, and then click Import Site. After a few seconds, you’ll be taken to the Forestry editor for your new site.

![](/uploads/2018/07/forestry-admin.png)

### Using the Forestry Editor

Let’s add another quote to our presentation. Click Famous Programming Quotes, which represents a page of our Hugo static site that we can edit with Forestry.

You should now see the dual-pane Forestry editor. On the left side is the data from our file’s front matter. On the right side is a stylish Markdown editor that does live formatting as you type. Click into the bottom of the right side pane, and hit Enter twice to create a newline. Then add `---` and hit Enter.

You will see that Forestry has added a horizontal line automatically, which is a handy visual separator for your slides. Below the line, add the following markdown.

```markdown
> “To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge.” -- Grace Hopper 
```

In the top-right hand corner of the screen to the left of the green Save button is an eye icon. This icon lets you preview your changes by building a full copy of your site at a unique URL. It’s very handy to double-check that things look right before you cause any commits back to your git repo.

Click the eye icon to open a preview of your presentation in a new browser window. Use the blue arrow or arrow keys to navigate to and inspect your new slide. If you’ve done everything right, it should look like this.

![](/uploads/2018/07/slideshow-example-3.png)

The last thing we need to do with Forestry is commit our new slide back to our git repository. That’s easy, we can just click the Save button back in our editor. You can verify that Forestry has made the commit by looking at your git history.

![](/uploads/2018/07/git-history.png)

### Live Preview With Forestry

Here’s what the last few steps look like in one animated GIF. You can see that editing, live previewing and saving to takes just a few seconds - this GIF is not sped up :p

![](/uploads/2018/07/using-forestry-editor.gif)

## Step 5: Deploy Your Presentation

You can host your Hugo + Reveal.js presentation anywhere that serves up static sites. In this tutorial, we’ll use [Netlify](https://www.netlify.com/), chosen for its seamless git integration and generous free tier.

If you don’t have a Netlify account, head over and [create one](https://app.netlify.com/signup). From your [Netlify dashboard](https://app.netlify.com/), click the ‘New Site from git’ button. You should see this 3-step modal window appear:

![](/uploads/2018/07/netlify-ui.png)

Choose the git provider you used in previous steps and then choose the `programming-quotes` repository from the dropdown that follows. Set the build command to `hugo` and the publish directory to `public` (these are the defaults). Then click Deploy Site.

In yellow at the top of your Netlify dashboard for this new application, you’ll see a message that says ‘Site deploy in progress’. That’s a good sign. In just a few seconds that message should turn green and show you a URL you can use to access your deployed site. Click it and verify you can see your presentation.

Really, that’s all there is to it. From there you can give your Netlify a friendlier name or [CNAME it from a custom domain you own](https://www.netlify.com/docs/custom-domains/). Because everything is connected via git, the next time that you publish changes to your presentation—via the command line or via Forestry—Netlify will pull your changes, rebuild your Hugo site, and deploy your new content.

{{% tip %}}
Here’s a link to a working [programming-quotes repository](https://github.com/dzello/programming-quotes) on Github, which you can look at in case you get stuck anywhere.
{{% /tip %}}

## Step 6: Extra Credit

If you’ve followed the full tutorial, you now have a home on the Internet for your presentations, plus a technique for authoring them quickly with hassle-free maintenance.

Here are a few more things you can do in the future:

* Create more presentations in the same repository. To do that, just create new sections of your Hugo site and set their output format to `[“Reveal”]`. You can customize each one with [different Reveal.js parameters](https://github.com/dzello/reveal-hugo#configuration).
* Add Reveal.js presentations to an existing Hugo site. Because “Reveal” simply is an output format with reveal-hugo, it can be used to output specific sections of a Hugo site without trying to turn the rest of the site into a presentation. You might use this, for example, to host slides next to the blog post for a talk you recently gave.
* Use reveal-hugo shortcodes like `fragment` and `section` to enrich your presentations. Read the [full reveal-hugo documentation](https://github.com/dzello/reveal-hugo) to learn now.
* Create a custom Reveal.js theme that matches your company branding. To learn how and see a beautiful example, check out [this tutorial](https://medium.com/myplanet-musings/building-a-responsive-reveal-js-theme-399179632cc6) and [this live presentation](https://gapple.github.io/myplanet-revealjs/#/intro).

Thanks for reading!

If you have any questions about or suggestions for how to improve reveal-hugo, don’t hesitate to reach out, I’m [@dzello](https://twitter.com/dzello) on Twitter.

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll look at one way to use <a href="https://forestry.io/blog/add-functionality-to-your-hugo-site-with-theme-components/">Hugo's new Theme Components feature.</a> </p><p><strong>Last week:</strong> We showed you the Hugo version of uBuild and <a href="https://forestry.io/blog/3-tips-for-mastering-blocks/#/">discussed some strategies for using Blocks.</a></p></div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17471333">Discuss on Hacker News</a>