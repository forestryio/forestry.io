---
title: Create In-App Documentation For Content Editors
description: ''
date: 2018-08-31 16:31:37 +0000
authors:
- DJ Walker
publishdate: 2018-08-31 16:31:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/08/books_hanging.jpg"
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
Say you’re writing some code and you hit a road block: _what was the name of that method again? Which parameters do I need to send in this API request? What does this error message mean?_ At times like this, developers reach for the documentation. Ideally, this documentation is close at hand in order to minimize the interruption to your coding flow.

Forestry’s content editor plays an interesting role in the creation of static sites. Developers build a site, and then configure our content editor with Front Matter Templates to provide a polished editing experience. Our editor makes it easy to edit content, front matter, and data files, but the connection between this information and its representation on the finished website is not always obvious.

Whether you are handing off your Forestry-enhanced website to a customer, to colleagues in a different department, or to another developer taking over the project, including readily accessible documentation will save a lot of frustration and make you look like a superstar. In this article, I will show you how you can embed documentation files directly into Forestry’s UI using our brand new **read-only document section** feature.

{{% tip %}}
If you’re a webdev lone wolf and don’t think you need to write documentation for anyone, at least do it for your future self!
{{% /tip %}}

## Creating an Embedded Doc in Forestry

Embedding docs in Forestry is very easy and flexible thanks to our configurable sidebar. The new read-only feature for document sections lets you add links to markdown documents in the sidebar that will display the rendered markdown when clicked.

For this post, I will add some embedded documentation for [the Hugo version of our uBuild project](https://github.com/forestryio/ubuild-hugo-starter).

### Creating the document

To get started with our embedded documentation, let’s create a new markdown file in our project. Using `README.md` is a common convention for documentation included with a project, but this documentation is often intended to be broader in scope and oriented to people working with the code. We want to make a document for the benefit of people using Forestry with this project, so I’ve decided to name this document `README-FORESTRY.md`. Feel free to name it whatever you want, though.

We want to make sure our document doesn’t get built with the rest of our site. For a standard Hugo project, including this file in the root of our project (outside of the `content` directory) is enough to take care of this. In my `README-FORESTRY.md` file, I’ve included some basic content to help the user understand Forestry as well as the uBuild project:

    # Editing Your uBuild Site
    This website uses a Hugo theme called uBuild, which was designed to use Forestry's 
    Blocks feature to create modular page layouts.
    
    ### Using Forestry
    Forestry's [editing docs](https://forestry.io/docs/editing/) provide a good 
    overview of how to use the editor.
    
    ### Using uBuild
    To create a new landing page, navigate to the **pages** section and click 
    the **Add New** button. Enter the title for your page, and select **Page builder** 
    for the front matter template. Start building your page by adding **Page Sections** 
    from the dropdown.
    
    Without any page sections, your uBuild page is a blank slate! You will likely want 
    to start the page with a **Navigation header** or a **Simple header**.

### Configure the Sidebar Section

Forestry’s editor can be configured either through editing the `.forestry/settings.yml` file or through the **Settings** screen in the UI.

{{% screencast "setting_up_readonly_doc" %}}

To add your help doc through the UI, navigate to the **Sidebar** tab of the Settings screen. Click the **Add Section** button to add your section, and select **Document** from the **Type** dropdown. Enter `Help` as the label, and `README-FORESTRY.md` as the path. Activate the **Read Only** toggle to enable the read-only behavior. After that’s finished, click the **Done** button and proceed to **Save** the changes to your section. In order to see the updated sidebar, navigate to the **Repository** tab and re-import.

To add your help doc by editing the `.forestry/settings.yml` file, just add the following item to the `sections:` array.

    - type: document
      path: README-FORESTRY.md
      label: Help
      read_only: true  

![](/uploads/2018/08/embedded_help_doc.png)

Once your repo is done importing, you should see a new item in your sidebar labeled **Help**. Clicking on this will display a rendered version of your markdown document!

### Link to In-App Elements

Embedding documentation directly in the Forestry app means we can link to in-app pages to make them easier for the user to find. You don’t have to struggle like me, trying to tell the user where to go in so many words - just send them straight there!

The Forestry editor is a React App, and routes in the app are appended to a **hash** (the `#` symbol) in the URI. By putting the routing information after the hash, the browser won’t navigate away from the page, allowing the app to intercept the route and display the appropriate section. This behavior makes it easy for us to insert in-app links in our document as well, without having to worry about navigating up and down the URI tree.

Here are some useful links you could insert into your document:

| Page | URI |
| --- | --- |
| Media Manager | #/media/ |
| General Settings | #/settings |
| Repository Settings (Re-import) | #/settings/repository |
| Pages Listing | #/sections/pages/ |
| Homepage for most Hugo sites | #/pages/content-_index-md/ |

It’s easy to grab links for any screen in the app; just copy the end of the URI, starting with the hash.

With this knowledge, let’s update our help file to link directly to our pages section:

    ### Using uBuild
    To create a new landing page, navigate to the [pages section](#/sections/pages/) and 
    click the **Add New** button. Enter the title for your page, and select **Page builder** 
    for the front matter template. Start building your page by adding **Page Sections** 
    from the dropdown.

{{% screencast "in_app_links" %}}

Just like that, the link will take the user directly to the pages section. Instant gratification!

**Support for Arbitrary HTML**

{{% warning "Experimental stuff ahead" %}}
Readonly documents are a brand new feature. The markdown parser currently supports some HTML tags, but this may change in the future.
{{% /warning %}}

Markdown supports most HTML syntax, so we can try to get creative with what we offer in our embedded docs. Here’s one interesting idea I had:

Forestry offers support for our users, but a lot of troubleshooting is best left to site administrators. You may wish to give your non-admins a convenient way to contact you directly if they encounter a problem while working in the editor. I’ve [mentioned before](https://forestry.io/blog/5-ways-to-handle-forms-on-your-static-site/) how dead simple it is to [set up a contact form with Formspree,](https://forestry.io/blog/form-builder-with-formspree-forestry-blocks/) so let’s try it here!

    ## Need Help?
    Drop me a line if you're having trouble.
    
    <form style="max-width: 40em;" target="_blank" method="POST" action="https://formspree.io/your-email@example.com">
      <div class="form-field">
        <label>Name</label>
        <input name="name" type="text" />
      </div>
      <div class="form-field">
        <label>Email</label>
        <input name="_replyto" type="email" />
      </div>
      <div class="form-field">
        <label>Problem</label>
        <textarea name="problem"></textarea>
      </div>
      <div class="form-field">
        <button type="submit" class="button primary">Submit</button>
      </div>
    </form>

We’re using the `form-field` class to pick up some styles that already exist in the app, and inlining anything else we might need. After committing these changes, we have a working contact form embedded directly in our help doc!

![](/uploads/2018/08/embedded_contact_form.png)

{{% tip %}}
Don’t forget that when using Formspree, you need to submit the form once and confirm your email address before you start receiving submissions.
{{% /tip %}}

## Help Your Users Help Themselves

Documentation isn’t worth much when nobody can find it. By embedding your docs directly in the Forestry app, you make it easy for anyone editing your content to get to the information they need without disrupting their workflow. We are always looking for ways to coordinate the efforts of developers and content editors, and providing documentation can help bridge that gap!

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;">
    <h2>Join us every Friday :date:</h2>
    <p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>
    <p><strong>Next week:</strong> We'll discuss a strategy for <a href="/blog/automate-your-static-hosting-environment-with-aws-cloudformation/">hosting static sites on AWS</a>.</p>
    <p><strong>Last week:</strong> We compared <a href="https://forestry.io/blog/5-options-for-automating-your-software-deployments/">5 of our favorite CI services.</a></p>
</div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17887656">Discuss on Hacker News</a>