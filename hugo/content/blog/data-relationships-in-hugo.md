---
title: 'Keeping Content DRY: Data Relationships In Hugo'
description: ''
date: 2018-08-17 16:05:07 +0000
authors:
- DJ Walker
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/08/fahrul-azmi-578029-unsplash.jpg"
categories:
- Hugo
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
**Don’t Repeat Yourself** is the perennial mantra of the software developer. It doesn't mean you should never do the same thing twice, but instead refers to having a **single, authoritative source of truth** for every piece of information used in your software.

*Don't Repeat Yourself* is frequently applied to code, where knowledge is susceptible to duplication through the copying and pasting of code blocks where an abstraction should be used instead. This wisdom can similarly be applied to your website's content, as updating content that is duplicated across a site can be tedious and error-prone. In this article, I will show you how you can use Hugo to organize and link content items together for a resilient and highly maintainable content strategy.

## Grouping Pages With Taxonomies

Let’s say we have a website that displays information for specific events. We want to include venue information for each event, including the venue’s address.

One way we can do this is with [taxonomies](https://gohugo.io/content-management/taxonomies/). Taxonomies are the primary way to associate pages in Hugo. To add a taxonomy, we just have to add this line to our `config.toml` file:

```toml
[taxonomies]
    venue = "venues"
```

That’s all we need to let Hugo know about a new taxonomy. To use this taxonomy, we use the singular name of the taxonomy as a front matter key for our page:

```md
---
title: Party at TJ's
venue: monticello
---
We hold these truths to be self-evident, that this party is going to rock.
```

This is an easy way to link items together. Since I added `monticello`  as the venue for this event, a taxonomy term page will be created at `/venues/monticello`. This page will display all the events happening at `monticello`.

To add additional information to our venue, like an address, we can [create an index page for it](https://gohugo.io/content-management/taxonomies#add-custom-metadata-to-a-taxonomy-term) at `content/venues/monticello/_index.md` and adding front matter to that file. This will let us add an address to our venue, but unfortunately, this information is only available on the taxonomy term page. If we want to display this venue information on the event page, there is no way to retrieve it. We need a different solution!

## Connecting Pages Together

Instead of using a taxonomy to keep track of our venues, it might make more sense to add them as pages to their own **content section**. A [content section](https://gohugo.io/content-management/sections/) in Hugo is nothing more than a folder inside the `content` directory containing markdown files.

One reason why you may not want to keep your data in the `content` section is because, by default, all markdown files in `content` are turned into HTML pages when the site is generated. However, since version `0.35`, you can create **headless bundles** in Hugo. A [headless bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle) is a collection of pages that will not get published when the site is generated.

{{% warning %}}
You can’t query headless bundles with `.Site.Pages` or `.Site.RegularPages`, but you can retrieve a page bundle with `.Site.GetPage`.
{{% /warning %}}

Let's switch our `venues` from a taxonomy to a headless bundle. After removing it from the `[taxonomy]` block in our `config.toml` file and deleting the file at `/content/venues/monticello/_index.md`, create  a new file at `/content/venues/index.md`. To identify the `venues` section as a headless bundle, insert the following front matter into that file:

```yaml
---
headless: true
---
```

This will prevent the generator from creating HTML pages from any markdown files in this folder. Now, to add our venue, we create a file at `content/venues/monticello.md` with the following content:

```yaml
---
title: Monticello
address: 931 Thomas Jefferson Pkwy, Charlottesville, VA 22902
---
```

Our `monticello.md` file is now the **single source of truth** within our site for information about this venue.

### Connecting a Venue to an Event

Since we’re now using a page and not a taxonomy term for venues, we need to make a small tweak to our event front matter. Instead of inserting the taxonomy term as the front matter value for `venue`, we will want to insert the filename of the venue file:

```yaml
---
title: Party at TJ's
venue: monticello.md
---
```

We can retrieve the venue data from this filename in our single event template with the following code:

```go-html-template
{{ with .Site.GetPage "venues" }}
    {{ with (index (.Resources.Match $.Params.venue) 0) }}
        <p>Venue: {{ .Title }}</p>
        <p>Address: {{ .Params.address }}</p>
    {{ end }}
{{ end }}
```

We use `.Site.GetPage` to load up all the items in our `venues` bundle. It’s a little counterintuitive; `GetPage` sounds like you’re getting a single page, but when using page bundles you need to use `GetPage` to access the entire bundle. Once the `venues` bundle is retrieved, we use `.Resources.Match` to search all the pages in the bundle to find one whose filename matches the `venue` in our event front matter. When we find a match, we then output the venue information on the event page.

Keeping our venue information in a single location adds resilience to our content strategy. If an error is made when typing in the venue address, it only needs to be corrected in one place and it will be updated everywhere the venue is referenced. Additionally, users creating new content don’t have to manually enter the venue’s address every time a new event is created with that venue.

## Page Relationships With Forestry

One reason I like using page bundles for miscellaneous data is because of how well they play with Forestry’s content manager. Forestry’s **configurable sidebar**, **front matter templates**, and **dropdown data sources** all work together to provide a great way to manage these data relationships.

### Create a Front Matter Template For Your Data

After importing your site to Forestry, navigate to the **Front Matter** section in the sidebar. Click the **Add Template** button to create a new template, and name it **Event**. Add a text field named `title`, and a select field named `venue`.

![](/uploads/2018/08/dropdown-data-source.png)

Select fields in Forestry’s Front Matter Templates have multiple data source options. Under **Source Type**, select **Pages** to populate the venue dropdown with options from one of your page sections. After selecting **Pages**, you will see another dropdown to select which **Section** to show pages from. Select **Venues** as the section to enable users to select from the pages in your `venues` page bundle when assigning a venue to an event.

{{% tip %}}
When using pages as a data source, Forestry saves the full path to the file from the root of your content directory. In our example, the venue is saved as `venues/monticello.md`. We need to make a small change to our layout code to accomodate this by stripping out the section from the path:

```go-text-template
{{ with (index (.Resources.Match (index (last 1 (split $.Params.venue "/")) 0)) 0) }}
```

This code gets the basename of your path by splitting the string on the directory separator and using the last item in the resulting slice.
{{% /tip %}}

### Set Up Your Headless Bundle as a Distinct Sidebar Section

Forestry’s **configurable sidebar** allows you to configure which content sections can be accessed and edited in Forestry.

![](/uploads/2018/08/section-template-restriction.png)

Access the sidebar configuration by navigating to **Settings** and going to the **Sidebar** tab. You will see your content sections listed there. Click on the **Events** section to edit it. Scrolling down to the bottom of the modal that pops up, you will see a dropdown to select the **Available Templates** for this content section. Only allowing a single template here will force all new content to be created with that template, so selecting our recently made **Event** front matter template and nothing else will make sure all new events created will utilize our venue dropdown. Click **Done** and then hit the **Save** button to update your repo with these changes.

Thanks to Forestry's front matter UI, it's easy to apply this content strategy to your site while keeping things easy for content editors. This tutorial only scratches the surface: by following the wisdom of **Don't Repeat Yourself** and building data relationships with page bundles, Hugo offers a static platform with lots of possibilities!

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;">
    <h2>Join us every Friday :date:</h2>
    <p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>
    <p><strong>Next week:</strong> We look at the differences between some <a href="https://forestry.io/blog/5-options-for-automating-your-software-deployments/">popular Continuous Integration Tools</a>. </p>
    <p><strong>Last week:</strong> We looked at <a href="https://forestry.io/blog/vuepress-brings-your-documentation-to-life/">VuePress, a static site generator that's great for documentation</a>.</p>
</div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17784971">Discuss on Hacker News</a>