---
title: Using JSON Configuration With VuePress
description: ''
date: 2018-09-21 05:43:34 -1100
authors:
- DJ Walker
publishdate: 2018-09-21 05:43:00 -1100
expirydate: 2029-12-31 17:00:00 -1100
headline: ''
textline: ''
images:
- "/uploads/2018/09/mixing-board.jpg"
categories:
- VuePress
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
Here at Forestry, [we think VuePress is pretty cool](https://forestry.io/blog/vuepress-brings-your-documentation-to-life/). When it came time to set our sights on supporting SSGs beyond Hugo and Jekyll, [we selected VuePress as our guinea pig](https://forestry.io/blog/vuepress-support-beta/). Our adoption of VuePress has helped to highlight the differences among the variety of Static Site Generators, and move us in a direction that will enable users of SSGs beyond Hugo and Jekyll to take advantage of Forestry’s content manager.

## VuePress’ Config File

One way that VuePress differs from Hugo and Jekyll is its configuration file. VuePress sites are configured by exporting a configuration object from a `config.js` file. This is an _extremely_ common pattern with JavaScript tools: other JavaScript SSGs such as Gatsby and Next.js, and build tools like Webpack all share this same approach to configuration.

Hugo and Jekyll, on the other hand, store their configuration in a YAML, TOML, or JSON file. This is an important distinction, as those file formats are for representing data. A `.js` file, on the other hand, is a script that can be executed. This matters to us, because configuration values for Hugo and Jekyll can be edited in the Forestry UI. Trying to extract configuration values from VuePress’ `config.js` file to make them editable in Forestry would be a much harder task.

## Creating a JSON Config File for VuePress

Using a JavaScript file for your configuration adds a lot of flexibility. You can insert dynamic values, load external modules, and pass in complex data types like functions and objects with methods. We can use this flexibility to our advantage in order to solve our configuration problem. All we have to do is extract the values that we want to edit in Forestry into a separate JSON file, and load that JSON file in `config.js`.

To demonstrate this, I will show you how I updated our [VuePress demo site](https://github.com/forestryio/portfolio-vuepress) to make some of its configuration editable in Forestry.

### Decide What is Configurable

It may not make sense to expose all of the data in your `config.js` file to your Forestry collaborators. Extracting configuration into a separate file lets us decide which configuration elements we want.

Let’s start from our initial configuration file at `portfolio/.vuepress/config.js`:

    module.exports = {
      title: "Acme",
      description: "creative agency",
      base: "/",
      themeConfig: {
        logo: "/upload/logo.svg",
        footer: "Ⓒ Acme",
        nav: [
          { text: "Works", link: "/", position: "left", external: false },
          { text: "Instagram", link: "https://www.instagram.com/its.nwa/", position: "left", external: true },
          { text: "Say hi!", link: "mailto:sayhi@mydomain.com", position: "right", external: true },
          { text: 'Journal', link: '/journal/', position: 'right', external: false },
        ]
      },
      head: [
        ['link', { rel: "icon", href: "favicon-32x32.png" }]
      ],
      markdown: {
        anchor: {
          permalink: false
        }
      }
    };

Looking at this, I’ve decided that our Forestry-editable configuration file should be able to control the **title**, **description**, **logo**, **footer**, **favicon**, and **navigation**. Let’s take that data and put it in JSON in `portfolio/config.json`:

    {
        "title": "Acme",
        "description": "Creative Agency",
        "logo": "/upload/logo.svg",
        "footer": "Ⓒ Acme",
        "favicon": "favicon-32x32.png",
        "navigation": [
          {
            "text": "Works",
            "link": "/",
            "position": "left",
            "external": false
          },
          {
            "text": "Instagram",
            "link": "https://www.instagram.com/its.nwa",
            "position": "left",
            "external": true
          },
          {
            "text": "Say hi!",
            "link": "mailto:sayhi@mydomain.com",
            "position": "right",
            "external": true
          },
          {
            "text": "Journal",
            "link": "/journal/",
            "position": "right",
            "external": false
          }
        ]
      }

### Loading JSON in the Config File

Passing this JSON data through to our `config.js` is very easy! We start by adding the following line to the top of `portfolio/.vuepress/config.js`:

    const config = require('../config.json');

Importing our JSON file with `require` will automatically parse the JSON and turn it into a usable JavaScript object. Note that we import it from one directory above the current one, because our `config.json` file is outside of the `.vuepress` directory that contains our `config.js` file.

Now that our config object has been imported and stored in a variable named `config`, we access the data like we would any other object in JavaScript. Here’s the complete `config.js` file after our updates:

    const config = require('../config.json');
    module.exports = {
      title: config.title,
      description: config.description,
      base: "/",
      themeConfig: {
        logo: config.logo,
        footer: config.footer,
        nav: config.navigation,
      },
      head: [
        ['link', { rel: "icon", href: config.favicon }]
      ],
      markdown: {
        anchor: {
          permalink: false
        }
      }
    };

## Editing Your Config File in Forestry

Now that we have our site configuration extracted into a `config.json` file, we need to tell Forestry that there’s a data file here to be configured.

![](/uploads/2018/09/adding_config_section.png)

We can do this by creating a **document section** in our sidebar settings with a path of `portfolio/config.json`. Forestry will know, based on the file extension, that this is a data file and not a markdown file and will present us with the data management interface. After saving our sidebar updates and re-importing the site, we should see the Configuration section show up in the sidebar.

{{% tip %}}
You can [apply Front Matter Templates to data files](https://forestry.io/docs/editing/data-files/#customizing-fields) and create Front Matter Templates from existing data files!
{{% /tip %}}

## Bonus: Adding Build Commands

Since we [just announced support for custom build commands](https://forestry.io/blog/introducing-custom-build-commands/), I also decided to add them to our portfolio site.

When adding build commands for a VuePress site, there are two things we need to make sure of:

1. `vuepress` is added as a dependency in our `package.json` file, and
2. We use an NPM script to invoke `vuepress`.

Our demo project already had this handled with a `site:build` command in its `package.json` file, so all we have to do is add the following to our configuration in `.forestry/settings.yml`:

    build:
      preview_command: "npm run site:build"
      publish_command: "npm run site:build"
      output_directory: "portfolio/.vuepress/dist"

![](/uploads/2018/09/preview_button.png)

Once our build commands are in place, our VuePress site will display the preview icon when editing pages, and we also have access to deployment settings!

## Strength in Numbers

Pursuing support for other SSGs in Forestry has led us to many improvements and increased the flexibility of our content management interface. Thanks to recent updates like the [configurable sidebar](https://forestry.io/docs/settings/content-sections/) and [custom build commands](https://forestry.io/docs/settings/build-commands/), you can now use Forestry with many workflows that weren’t possible just a few months ago. Looking to the future, we hope to make Forestry even more configurable and support more SSGs, so that Forestry can be a tool for all JAMStack devs to take advantage of.

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;">
    <h2>Join us every Friday :date:</h2>
    <p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>
    <p><strong>Next week:</strong> TBD </p>
    <p><strong>Last week:</strong> We used AWS CloudFormation to <a href="https://forestry.io/blog/adding-dns-and-edge-functions-to-our-cloudformation-stack/">set up a hosting stack for a static site</a>.</p>
</div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=18041692">Discuss on Hacker News</a>
