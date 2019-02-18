---
title: Creating a Multilingual Blog With Jekyll
description: ''
date: 2018-08-03 03:25:21 -1100
authors:
- DJ Walker
publishdate: 2018-08-02 17:00:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/08/globe.jpg"
categories:
- Jekyll
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
Reaching an international audience means having international content. Having your content available in multiple languages is great for maximizing your potential audience. On top of that, ensuring your multilingual site’s content is easy to edit is especially important, to enable translators without development experience to work effectively and reduce the incidence of translation errors.

In this post, I will explore how to set up a Jekyll site to support multiple languages, and use Forestry to provide an interface for creating translations.

## Simple i18n in Jekyll

Jekyll doesn’t have support for multi-language sites baked in, but there are many solutions out there that can make it happen. For this post, I wanted to find a solution that was simple to understand and didn’t require any plugins. My favorite solution came from [this blog post](http://chocanto.me/2016/04/16/jekyll-multilingual.html) by Anthony Granger. His strategy involves having a separate path for each language’s content, and using a couple front matter values to tie things together.

The example site I created for this post uses the popular Hyde theme, and demonstrates a site with a couple of posts and pages in both English and Spanish. In order to make the Hyde theme fit my multilingual strategy, I only had to make a few modifications. Check out the demo [here](https://condescending-bose-e6c590.netlify.com/en/) and view the source code on [Github](https://github.com/dwalkr/jekyll-multilingual)

{{% tip %}}
I used Google Translate for the Spanish content. <em title="Don’t hate me.">No me odies.</em>
{{% /tip %}}

### Separate Languages By Path

Content for each language exists in its own folder based on the **language code**. Here is a simplified version of my file structure, with separate `en` and `es` directories:

    _includes/
    _layouts/
    en/
      _posts/
        2018-08-03-welcome-to-my-blog.md
      index.md
    es/
      _posts/
        2018-08-03-bienvenido-a-mi-blog.md
      index.md
    public/
    _config.yml

Anthony’s example kept the English content at the top level of the project, but I decided to place it in its own `en` directory. I find this makes it easier to keep content organized, but the downside is that we will have to build a new homepage, since the user now needs to navigate to `/en/` to see the English content (more on that in a moment.)

### Use Front Matter To Identify Languages and Link Posts

The key to this strategy lies in the use of front matter. We are using the `lang` key to identify the language that this post is in, and another key called `lang-ref`. `lang-ref` will store a string that uniquely identifies this post. When we create a translation of a post, we should use the same value for `lang-ref` so that we can link both translations together. The `lang-ref` value will identify the two translations as having the same content.

_en/_posts/2018-08-03-welcome-to-my-blog.md_

    ---
    layout: post
    title: Welcome to my blog!
    lang: en
    lang-ref: welcome-to-my-blog
    ---
    
    Welcome to my blog!

_es/_posts/2018-08-03-bienvenido-a-mi-blog.md_

    ---
    title: ¡Bienvenido a mi blog!
    layout: post
    lang: es
    lang-ref: welcome-to-my-blog
    ---
    
    ¡Bienvenido a mi blog!

Another way to link posts together would be by keeping their filenames the same, but using `lang-ref` allows us to use different filenames, and thus translate our URLs as well as the content.

To display alternate translation options for each post, I created a file at `_includes/footer.html` and included it in the default layout.

    {% if page.layout != 'index' %}
        {% assign posts=site.posts | where:"lang-ref", page.lang-ref | sort: 'lang' %}
        {% if posts.size == 0 %}
            {% assign posts=site.pages | where:"lang-ref", page.lang-ref | sort: 'lang' %}
        {% endif %}
        {% if posts.size > 1 %}
        <footer class="lang-options">
            <em>Read this page in a different language:</em>
            <ul>
            {% for post in posts %}
            <li><a href="{{ site.base-url }}{{ post.url }}" class="{{ post.lang }} title="View in {{page.lang}}">{{ page.lang }}</a></li>
            {% endfor %}
            </ul>
        </div>
        {% endif %}
    {% endif %}

This code runs on single posts and pages, and searches for all content with a matching `lang-ref` attribute. If it finds more than one match (one match would be the current translation,) it will display all of the language options:

![](/uploads/2018/08/translation-options.png)

We can use this same loop in `_includes/head.html` to include `link` tags denoting the alternate versions of the current page. This will help search engines accurately index your site.

    {% if page.layout != 'index' %}
      {% assign posts=site.posts | where:"lang-ref", page.lang-ref | sort: 'lang' %}
      {% if posts.size == 0 %}
        {% assign posts=site.pages | where:"lang-ref", page.lang-ref | sort: 'lang' %}
      {% endif %}
      {% if posts.size > 1 %}
        {% for post in posts %}
      <link rel="alternate" hreflang="{{post.lang}}" href="{{ site.base-url }}{{ post.url }}" />
        {% endfor %}
      {% endif %}
    {% endif %}

### Create Data Files for Translations and Language Metadata

There are a couple more things I want to add to improve the experience of using this site. First, I want to display the full name of the language instead of just the language code in our navigation. Second, there are elements of our layout that I have hard-coded in English. We should be translating that stuff too!

For the first part, I’ve added a `languages.yml` file in the `_data/` directory to add metadata to our supported languages. For each language code, I’ve added the full name of the language and an emoji of a corresponding flag.

__data/languages.yml:_

    en:
      label: English
      icon: 🇺🇸
    es:
      label: Español
      icon: 🇪🇸

This also serves as a list of all of our supported languages, which will come in handy later. We can use this data by referencing the `site.data.languages` variable in our layout code. To improve the language selector, we can replace the language text:

    {{ post.lang }}

With the following:

    {{ site.data.languages[post.lang].icon }} {{ site.data.languages[post.lang].label }}

![](/uploads/2018/08/translation-options-improved.png)

Our language selector looks much nicer now!

To translate text used in layout files, I’m using a `translations.yml` file to store translations of arbitrary text that we might want to use in our layouts. Our translations file organizes translations by a specified identifier, as opposed to looking them up based on an English phrase. This allows us to change the English text as well as the translations without breaking anything.

__data/translations.yml_

    relatedPosts:
      en: "Related Posts"
      es: "Artículos Relacionados"
    differentLanguage:
      en: "Read this page in a different language"
      es: "Lea esta página en un idioma diferente"

So for example, in our `_includes/footer.html` file, we can replace the following line:

    <em>Read this page in a different language:</em>

With this:

    <em>{{ site.data.translations['differentLanguage'][page.lang] }}:</em>

We can now see the translated text in our layout:

![](/uploads/2018/08/translated-layout-text.png)

### Add Language Filters To Post/Page Loops

One issue we run into with adapting the Hyde theme is that any time a list of posts or pages is created, it includes content across all of our available languages. Ideally, we will only show content whose `lang` attribute matches the current language.

To fix this, we just need to edit Hyde’s related posts loop in `_layouts/post.html`  to apply a `where` filter:

    {% assign related = site.related_posts | where:"lang", page.lang %}
    {% if related.size > 0 %}
      {% for post in related limit: 3 %}
      ...
      {% endfor %}
    {% endif %}

We’ve swapped out the original `for post in site.related_posts` for a different structure that uses the `where` filter to only include posts that have the same language as the current page.

I also tweaked the menu code in `_includes/sidebar.html`. This code originally looped through all of the pages on the site and displayed the ones with a layout of `page` in a navigation menu. We can use the same restructuring to only include pages inside the same language scope:

    {% assign pages_list = site.pages | where:"lang", page.lang %}
    {% for node in pages_list %}
    ...
    {% endfor %}

It’s worth noting that I’ve also adapted Hyde’s original `index.html` homepage file into a layout at `_layouts/index.html`. I’ve tweaked the original posts loop to also apply this `where` filter to the collection:

    {% assign posts = site.posts | where:"lang", page.lang %}
    {% for post in posts %}
    ...
    {% endfor %}

### Replace Homepage

Since we put all of our english content inside of `/en/`, when a user visits the homepage, the site doesn’t know which language to display. We can address this by adding a splash page to the homepage where a user can select their language.

The splash page loops over the languages defined in `_data/languages.yml` and displays a link to the section.

    <ul class="languages">
    {% for lang in site.data.languages %}
    {% assign language = lang[1] %}
    <li><a href="{{site.baseurl}}{{lang[0]}}">{{language.icon}} {{ language.label }} ({{ language.code }})</a></li>
    {% endfor %}
    </ul>

[This is what it looks like!](https://condescending-bose-e6c590.netlify.com/)

## Setting Up The Editing Interface in Forestry

Forestry’s UI for static sites can significantly streamline the editing experience for your translators, and help them make the right decisions. We’re going to take advantage of Forestry’s configurable sidebar to help our translators add their content correctly.

To access the sidebar configuration, click on **Settings** in the sidebar and navigate to the **Sidebar** tab. You can add, edit, and remove sidebar sections here.

After first importing our site, we are faced with a default configuration for our posts and pages. We will be removing these and replacing them with our language-scoped sections.

Once the existing sections are removed, we can click **Add Section** to open the section creation modal. All of our sections will be of type **directory**. For our English posts, we can use a label of **English - Posts**. Under **path**, we will enter the path to our content. In this case, we will enter `en/_posts` to only display content located in that directory.

The **match** option takes a glob which can be used to filter which files and subdirectories are identified as content. For our purposes the default of `**/*` will work fine to match everything in this directory.

We can use the default values for **create**, **new file extension**, and **available templates**. Check out the [documentation on sidebar configuration](https://forestry.io/docs/settings/content-sections/) to learn more about what these do.

Once our English section is created, we can do the same for Spanish. Create a new section and set the **path** to `es/_posts` and the label to **Español - Posts**.

Once your sections are configured, hit the **Save** button and then re-import your site from the **Repository** tab. You should now see the two content sections you just configured in your sidebar:

![](/uploads/2018/08/sections-ui.png)

We now have a customized editing experience for editors and translators!

## Static Makes it Easy

Creating an effective multilingual site can be challenging, but using static sites and Forestry's UI can go a long way to making the translation process as streamlined as possible. I highly recommend you experiment with what's possible using custom paths and Forestry's configurable content sections!

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll take a look at <a href="https://forestry.io/blog/vuepress-brings-your-documentation-to-life/">VuePress, a static site generator built with Vue.</a></p><p><strong>Last week:</strong> We discussed <a href="https://forestry.io/blog/why-we-created-a-git-backed-content-manager/">why we like storing content in Git.</a></p></div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17680903">Discuss on Hacker News</a>
