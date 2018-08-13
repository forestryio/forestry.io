---
title: Jekyll Search with Algolia and Webtasks
description: ''
date: 2018-02-06 14:08:22 +0000
authors:
- Chris Macrae
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/02/algolia-jekyll-webtasks.png"
categories:
- Frontend-Friday
- Jekyll
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
For this week on [_Frontend Friday_](/categories/frontend-friday/ "frontend friday tag")_,_ we'll be covering how to set up lightning ⚡️ fast search for your Jekyll site using [Algolia](https://algolia.com), the SaaS (Search as a Service 😉 ) provider.

![](/uploads/2018/02/forestryio-algolia-search.gif)

Algolia's self-proclaimed claim-to-fame is that they are _"the most reliable platform for building search into your business,"_ and honestly, it's hard to disagree. Forestry's search is powered by Algolia _(just try searching for Algolia in the search above!)._

## Table of Contents

1. [Why Algolia?](#1-why-algolia)
2. [Generating Your Search Index](#2-generating-your-search-index)
3. [Sending Your Search Index to Algolia](#3-sending-your-search-index-to-algolia)
4. [Updating Your Search Index with Serverless Functions](#4-updating-your-search-index-with-serverless-functions)
5. [Next steps](#5-next-steps)

## 1) Why Algolia?

There are many search solutions for static sites out there. You can roll your own search using frontend Javascript with tools like [Lunr.js](https://lunrjs.com/) or [Fuse.js](http://fusejs.io/), set up powerful open-source search technology using [ElasticSearch](https://www.elastic.co/products/elasticsearch) or [Amazon CloudSearch](https://aws.amazon.com/cloudsearch/), or SaaS solutions like [Algolia](https://algolia.com).

So the question is, _what makes Algolia so great?_

The answer comes down to two factors:

* The goal of the JAMStack is to _eliminate_ server dependencies. Why add one just for search?
* Algolia offers a very generous [_free plan_](https://www.algolia.com/pricing) and performs up to [200x faster than open-source solutions like ElasticSearch](https://www.algolia.com/doc/faq/why/what-makes-algolia-different-than-elasticsearch-or-solr/).

### How Algolia Works

Algolia provides a REST API to query and update your search indices. All input and output is provided in JSON, making it extremely easy to use in frontend Javascript.

In order to create, update, and maintain an Algolia search index, you'll need to generate a valid JSON array of all of the content in your Jekyll site.

We'll do that in the next step!

## 2) Generating Your Search Index

To get started with Algolia, the very first thing you'll need to do is [sign up](https://www.algolia.com/users/sign_up). Once that is out of the way, your next step is to generate your JSON search index.

With Jekyll, we'll do this by creating a JSON file to be processed by Jekyll at build time.

To get started, open up the config file (usually `_config.yml`) in your favorite text editor.

Here, we'll add the Jekyll configuration for your Algolia index.

    algolia:
    	vars: ["title", "excerpt", "date", "url", "categories", "tags"]

### Creating the JSON Template

To get started, create a file at the root of your Jekyll site called `algolia.json` with the following contents:

    ---
    layout: none
    ---
    [
    {%- comment -%}
      Generates a valid Algolia search index
    {%- endcomment -%}
    {%- assign validVars = site.algolia.vars -%}
    {%- assign validParams = site.algolia.params -%}
    {%- comment -%}
      Loop through all Jekyll collection documents
      including posts and add to index
    {%- endcomment -%}
    {%- assign pages = site.pages | where_exp:"item", "item.hidden != true" | where_exp:"item", "item.published != false"  | where_exp:"item", "item.draft != true" -%}
    {%- for collection in site.collections -%}
      {%- assign collectionItems = site[collection.label] | where_exp:"item", "item.hidden != true" | where_exp:"item", "item.published != false"  | where_exp:"item", "item.draft != true" -%}
      {%- for item in collectionItems -%}
        {%- include algolia-hit.json hit=item -%}{% if forloop.last != true %},{% endif %}
      {%- endfor -%}
      {%- if forloop.length > 0 and pages.length > 0 -%},{% endif %}
    {%- endfor -%}
    {%- comment -%}
      Loop through all Jekyll pages
    {%- endcomment -%}
    {%- for item in pages -%}
      {%- include algolia-hit.json hit=item -%}{% if forloop.last != true %},{% endif %}
    {%- endfor -%}
    ]

In this layout, we loop through all of the site's post and collections and call a Jekyll include to return the JSON for that document.

Next, we'll create the include that generates the JSON. Create `_includes/algolia-hit.json` and add the following:

    {% if include.hit %}
    {
    {%- for var in include.hit -%}
      {%- if site.algolia.vars contains var -%}
      "{{ var }}": "{{ include.hit[var] }}"{% if forloop.last != true %},{% endif %}
      {%- endif -%}
      {%- if forloop.last == true -%}
      "objectID": "{{ include.hit.path }}"
      {%- endif -%}
    {%- endfor -%}
    }
    {%- endif -%}

* Loop through the document's variables and add specific variables to the document.
* Set the objectID of the Algolia indexes document using the `.id` [page variable](https://jekyllrb.com/docs/variables/#page-variables).

{{% tip %}}

The above layout will only add pages that do not have `private = true`, `published = false` or `draft = true` in their front matter. This makes it easy to exclude results that shouldn't be index, and prevents drafted or unpublished content from being included.

{{% /tip %}}

## 3) Sending Your Search Index to Algolia

The next step is sending your search index to Algolia. For this article, we'll be using a great NPM package to do this: [atomic-algolia](https://www.npmjs.com/package/atomic-algolia).

To get started, make sure you have Node installed. If you don't, you can do so by [downloading an installer for your operating system](https://nodejs.org/en/download/).

{{% tip %}}

[atomic-algolia](https://www.npmjs.com/package/atomic-algolia) is an NPM package that does _atomic_ updates to an Algolia index. This means that it only updates changed records, adds new records, or deletes expired records, and does it all at once, so that your index is never out-of-sync with your website's content.

This is important, because Algolia's plans are based on _operations_ on your index, and _searches_ on the index, and this plugin ensures you use the _smallest amount of operations possible!_

{{% /tip %}}

### Create Your Index

Head over to your [Algolia app dashboard](https://www.algolia.com/manage/applications), and click _New Application._

![](/uploads/2018/02/algolia-screen-1.png)Set the application name to something memorable (i.e, your company name), and choose _Community_ as your plan.

![](/uploads/2018/02/algolia-screen-2-region.png)

Then, choose the region closest to you. _(In our case, that's Canada. 🇨🇦 )_

![](/uploads/2018/02/algolia-screen-3-indicies.png)You'll be redirected to the app's dashboard. Select the _Indices_ tab on the left, and then click _Add New Index._ Give it a unique name, (.ie, your site's domain), as this is what we'll use when updating the index.

![](/uploads/2018/02/algolia-screen-4-api-keys.png)

Finally, select the _API Keys_ tab on the left, and copy the _Application ID_ and _Admin API Key,_ as we'll need these to update the index.

### Update Your Index

Now that you have an index, open up your terminal, navigate to your Jekyll project, and run the following command:

    npm install atomic-algolia --save

This will install the atomic-algolia package to a local `node_modules` folder and make it available for use in your Jekyll project.

Next, open up the newly created `package.json`, where we'll add an NPM script to update your index. Find `"scripts"`, and add the following:

    "algolia": "atomic-algolia"

Now, you can update your index by running the following command:

    ALGOLIA_APP_ID={{ YOUR_APP_ID }} ALGOLIA_ADMIN_KEY={{ YOUR_ADMIN_KEY }} ALGOLIA_INDEX_NAME={{ YOUR_INDEX NAME }} ALGOLIA_INDEX_FILE={{ PATH/TO/algolia.json }} npm run algolia

{{% tip %}}

The path to the index file in a default Jekyll site is `_site/algolia.json`.

{{% /tip %}}

### Using a `.env` File

Passing in the environment variables to the NPM script each time you call it isn't ideal. That's why atomic-algolia supports a .env file.

Create a new file in the root of your Jekyll project called `.env`, and add the following contents:

    ALGOLIA_APP_ID={{ YOUR_APP_ID }}
    ALGOLIA_ADMIN_KEY={{ YOUR_ADMIN_KEY }}
    ALGOLIA_INDEX_NAME={{ YOUR_INDEX NAME }}
    ALGOLIA_INDEX_FILE={{ PATH/TO/algolia.json }}

Now you can update your index more simply by running:

    npm run algolia

## 4) Updating Your Search Index with Serverless Functions

Having to run the NPM script manually each time your site changes isn't ideal, especially when using services like Forestry.

That's why we've created an [open-source template](https://github.com/forestryio-templates/serverless-atomic-algolia) for creating a Serverless [Webtask Function](https://webtask.io/) that can automatically update your Algolia index each time your site is updated using web hooks.

{{% tip "What is serverless?" %}}
With Serverless, you can set up functions that run in the cloud and don't require a backend server with PHP, Node, etc. These functions can perform little jobs for you (like updating your Algolia index) and are perfect in conjunction with static sites. If you're new to Serverless, check out [this article](https://auth0.com/blog/what-is-serverless/) by Auth0.
{{% /tip %}}

### Setting Up

To get started, clone the [template repository](https://github.com/forestryio-templates/serverless-atomic-algolia) to your local machine by running:

    git clone https://github.com/forestryio-templates/serverless-atomic-algolia.git

{{% tip %}}

Don't have or want to use Git? Feel free to [download the template](https://github.com/forestryio-templates/serverless-atomic-algolia/archive/master.zip) as a zip instead.

{{% /tip %}}

Then, navigate to the template directory and install the dependencies:

    cd serverless-atomic-algolia
    npm install serverless -g && npm install

### Configuring

Next, if you don't already have a Webtasks profile set up, you'll need to do so. This can be done directly from the command line.

    serverless config credentials --provider webtasks

You will be asked for a phone number or email. You'll immediately receive a verification code. Enter the verification code and your profile will be entirely setup and ready to use

Next, you'll need to configure the function with your indices and Algolia app information.

First, copy `config/secrets.yml.stub` to `config/secrets.yml` and then open it up in your favorite text editor.

    ALGOLIA_APP_ID: {{ YOUR_APP_ID }}
    ALGOLIA_ADMIN_KEY: {{ YOUR_ADMIN_KEY }}
    DEBOUNCE: 0

Then, open up `config/index.js` in your favorite text editor:

    module.exports = () => {
    
      var indexes = [
    
        {
    
          name: "YOUR_INDEX_NAME",
    
          url: "PUBLIC_URL_OF_INDEX"
    
        }
    
      ]
    
      return JSON.stringify(indexes)
    
    }

Update `name` to the name of your index that you set up earlier, and `url` to `yourdomain.com/algola.json`, replacing `yourdomain.com`with your site's domain.

### Deploying the Function

Now we can deploy the function by running:

    serverless deploy

In the terminal, you'll receive an output for the success of your deployment, including the public URL for your new function. Copy that to the clipboard, as this is the URL we'll trigger with a web hook when changes are made to the site.

### Setting Up A Webhook

Finally, our last step is to set up a post-deployment web hook with your deployment tool. Set up for each tool will be different, but we'll provide setup for:

* Forestry.io
* GitHub Pages

#### Forestry.io

![](/uploads/2018/01/settings-webhook.png)

Head over to the _Settings_ page of your site in Forestry, and scroll down to the _Webhook URL_ setting.

Enter the URL you received when deploying your function, and then click _Save Settings_.

Now each time Forestry finishes deploying your site, your function will be invoked to update your Algolia index.

{{% warning %}}

This set up only works when Forestry is set up to handle the build and deployment of your site. If you're using a third party CI service to build your site (like GitLab CI or Netlify), you will need to use their webhook features to trigger your function.

{{% /warning %}}

#### GitHub Pages

Head over to the _Settings_ page of your GitHub repository, and then to the _Webhooks_ tab.

Click the _Add Webhook_ button, and then fill out the information as follows:

1. Set _Payload URL_ to the URL you received when deploying your function
2. Set the _Content Type_ to application/json
3. Set _Which events would you like to trigger this webhook?_  to _Let me select individual events._ Then ensure only _Page Build_ is checked.
4. Ensure _Active_ is checked
5. Click _Add webhook_

Now each time your GitHub pages site has finished building, your function will be invoked to update your Algolia index.

{{% warning %}}

This only applies when using GitHub pages to build your site. If you're using Forestry or another third-party services to build your site and commit it back to the `gh-pages` branch, you will need to use their webhook features to trigger your function.

{{% /warning %}}

## 5) Next Steps

Now that you've successfully set up search indexing for your static site, it's time to add the actual search interface to your website!

Algolia has a fantastic library called [InstantSearch.js](https://community.algolia.com/instantsearch.js/) for implementing search on the web, and provides a [full tutorial](https://community.algolia.com/instantsearch.js/v2/getting-started.html) for implementing search from scratch.

<div style="padding: 20px 40px;background: #f7f7f7;">  
<h2>Join us every Friday 📅</h2>  
<p><a href="/categories/frontend-friday/">Front end Friday</a> is a weekly series where we write in-depth posts about modern web development.  </p>  
<p><strong>Next week:</strong> We'll write about <a href="https://forestry.io/blog/search-with-algolia-in-hugo/">Algolia search for your Hugo site.</a> Stay tuned!</p>  
<p><strong>Last week:</strong> We measured the build performance of Hugo and Jekyll in <a href="https://forestry.io/blog/hugo-vs-jekyll-benchmark/">Hugo vs Jekyll: Benchmarked</a>.</p>  
</div>

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16347171">Discuss on Hacker News</a>