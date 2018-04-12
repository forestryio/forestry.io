---
title: Build a JSON API With Hugo's Custom Output Formats
description: ''
date: 2018-04-12 02:53:27 +0000
authors:
- Régis Philibert
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
As developers, we love open and accessible data.  For example, you may want to use your local transit data for a mobile app, or maybe you want a service like [Zapier](https://zapier.com/) or [IFTTT](https://ifttt.com/) to send you an email every time the weather forecast calls for rain.  If you’re a super geek like [@bdougieyo](https://twitter.com/bdougieyo), you’ve built an app that tells you when to leave work in order to avoid traffic from your local baseball team’s home games ([from his excellent talk here](https://youtu.be/XpveOehxvoM?t=6m1s)).

In order to make data that is “machine friendly” like this, we need to expose it with a [RESTful API](https://stackoverflow.com/questions/671118/what-exactly-is-restful-programming). Normally, the quickest way to bootstrap an API like this would be to start with a popular framework like Flask or Ruby on Rails, spin up a webserver, and connect a database. We can achieve something even simpler, however, by creating a read-only API with a static site generator. In this article, we’ll use [Hugo](https://gohugo.io) to build a JSON API using its [Custom](https://gohugo.io/templates/output-formats#output-formats) [Output Formats](https://gohugo.io/templates/output-formats#output-formats) feature.


## Planning the Interface

API stands for **Application Programming Interface**. The important part of an API isn’t the underlying software: the main focus is on creating an **Interface** that other developers can use for **Programming their Applications.** See what I did there?

{{% tip %}}

A **RESTful API** loosely follows the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) paradigm for API design: its goal is to use the built-in semantics of the HTTP standard to define the interface.
<br />
One of the primary ways an API can be RESTful is by using HTTP verbs to declare actions. These verbs include `GET`, `PUT`, `POST`, and `DELETE`, and correspond to different actions that should be performed on the requested resource. Since our static site can’t run any backend code, it can’t do anything meaningful with a `PUT`, `POST`, or `DELETE` request: we will only respond to `GET`. This is why our API is **read-only**.

{{% /tip %}}

Our API will expose data for sports teams and players of a fictional High School.

We’ll start with three endpoints where we’ll focus on returning listed data and individual player data:

| Endpoint               | Resource                 |
| ---------------------- | ------------------------ |
| `GET /`                | Lists everything         |
| `GET` `/players`       | Lists players            |
| `GET /players/{:slug}` | Data for a single player |

Later on, we will add teams and a sports taxonomy, adding three new endpoints.

| Endpoint               | Resource                                          |
| ---------------------- | ------------------------------------------------- |
| `GET /teams`           | Lists teams                                       |
| `GET /team/{:slug}`    | Team data and players                             |
| `GET /sports/{:sport}` | List of players and teams for the specified sport |

## Setting up the Site

Create a new Hugo site (see Hugo’s [quick start guide](https://gohugo.io/getting-started/quick-start/)).

  

In our content directory, we’ll create a `players` folder and add some players to it. 

  
    ├── hugo/                  # The Hugo project; 
    |   ├── content/           # Where all site content is stored 
    |   |   ├── players/       # Your players section  
    |   |   |   ├── frank-j-robinson.md
    |   |   |   └── jody-garland.md
        
    

Our player markdown will look something like this:


    ---
    title: "Frank J. Robinson"
    date: 2018-02-05
    age: 17
    emergency_contact: +1 (555) 555 5555
    year: junior
    ---
    
    Frank, our number one second baseman!


## Output Formats

By default, Hugo will build an HTML version of each page. It will also build an XML version of your home page, using its built-in RSS Output Format.

In our case, all we need to output is a JSON formatted file for each page, section and the home page.

The JSON output format is also [built-in](https://gohugo.io/templates/output-formats/#output-formats), all we need is to open our config file and tell Hugo where to use it.


    [outputs]
      page = ["json"] # A player
      section = ["json"] # All players
      home = ["json"] # Everything
  

Next, we need to create a template for Hugo to build this format. When creating Hugo template files for a custom output format, we need to follow a specific naming convention:


    {pageKind}.{outputFormatName}.{extension}

From within `layouts/` to build our single players page, Hugo will look for 

  
    _default/single.json.json 
  

To build our section list page and our home page Hugo will look for


    _default/list.json.json


## Templating

What we want to build is the API responses for our 3 different endpoints. Each of them will use a consistent « player » object.

We still need to build several templates for our different responses.

We want:

- A list output for our players section and home page.
- A single item output for each player.

To achieve this, we’ll create the following templates in `/layouts/_default/`:

- `baseof.json.json` — A [base template](https://gohugo.io/templates/base/#base-template-lookup-order) for our API response.
- `item.json.json` — The single item object, which will be reused in all of our templates, every time we need to output a player. In Hugo we call this a [Content View](https://gohugo.io/templates/views), but for our API I see it more like a transformer.
- `single.json.json` — The response output for a single player
- `list.json.json` — The response output for a list of players

[Base templates](https://gohugo.io/templates/base) are overarching templates that get used for all pages in Hugo. They are usually full of HTML where we lodge in different blocks but it will be much simpler for us. Our API response should contain a `data` object on success and an `error` object on error.  So we will set up the data object and use a block for the individual response.

  

Our simple `baseof.json`:

    {
        "data" : {{ block "response" .}}{{ end }}
    }

**item.json.json**
The Hugo docs suggest you call this template `li.json`, but for clarity we’ll call it `item.json`. This is the one item we’ll load or render every time we want to output information for a player.

We want the output of a player object to look like this

    {
        "name": "Frank J. Robinson",
        "contact" : "+1 555 555-555",
        "permalink" : "https://school.api/players/frank-j-robinson/index.json"
    }

To reflect our model above, add the following to `item.json.json`


    {
        "name": "{{ .Title }}",
        "contact" : "{{ .Params.emergency_contact }}",
        "permalink" : "{{ .Permalink }}"
    }

Nice!

**single.json.json**
We just have to render our `item.json.json` inside our response block.  To do so, add this to `single.json.json`.


    {{ define "response" }} {{ .Render "item" }} {{ end }}

Now you should be able to visit the API endpoint for a single player ([http://localhost:1313/players/frank-j-robinson/index.json](http://localhost:1313/players/frank-j-robinson/index.json)) and get a response.

Notice: Hugo LiveReload is a bit capricious with output formats, if your JSON output does not update with your latest change on save: hit that refresh button!


    {
        "data": {
            "name": "Frank J. Robinson",
            "contact": "+1 (555) 555 5555",
            "permalink": "https://school.api/players/frank-j-robinson/index.json"
        }
    }

**list.json.json**
For our list template, we need to range on current section’s pages and render our `item.json.json` inside our response block. 

JSON hating trailing commas, we’ll use `$index` to guard the door.

    {{ define "response" }}
    [
        {{ range $index, $e := .Data.Pages }}
        {{ if $index }}, {{ end }}{{ .Render "item" }}
        {{ end }}
    ]
    {{ end }}
  

Now your players API endpoint (http://localhost:1313/players/index.json) should return a list


    {
        "data": [
            {
                "name": "Frank J. Robinson",
                "contact": "+1 (555) 555 5555",
                "permalink": "http://localhost:1313/players/frank-j-robinson/index.json"
            },
            {
                "name": "Jody Garland",
                "contact": "+1 (555) 555 5555",
                "permalink": "http://localhost:1313/players/jody-garland/index.json"
            },
            ...
        ]
    }

**404.json**
Yes we need to eventually send out an error code in case the url does not exist.
We’ll add a `404.json` in our static directory.

    {
        "error" : "404",
        "message" : "page not found"
    }

Then, all you have to do is make sure your server redirect to this file in case of a 404. If you’re not familiar on how to set up a server redirect, check out this [overview](https://gohugo.io/templates/404/) on different ways to go about it.


## Level 2 : Teams and Sports

Great job, you just built a simple but fully functioning API using Hugo’s Output formats and templating. Don’t stop now! Let’s add some additional features.

**Team section**
A lot of these steps are similar to creating the endpoint for `players`. First, we’ll add a `teams` section to our content directory and add team `.md` files. We’ll create `/content/teams/sly-turtles.md`.

    ---
    title: Sly Turtles
    mascot: Turtle Todd
    ---
    
    Sly Turtles were cool before Nemo!

We need a new item object to display a team. All we have to do is create `layouts/teams/item.``json.``json` for Hugo to pick it up instantly when rendering a page from `teams`.


    {
        "title": "{{ .Title }}",
        "mascot": "{{ .Params.mascot }}",
        "permalink": "{{ .Permalink }}"
    }
  

And we have a team: http://localhost:1313/teams/sly-turtles/index.json

  
    {
        "data": {
            "title": "Sly Turtles",
            "mascot": "Turtle Todd",
            "permalink": "http://localhost:1313/teams/sly-turtles/index.json"
        }
    }
  

**Improving our response**
Now that we have two types of entries, it makes sense to provide some additional information when listing them in our `list.json.json`. This is the structure of our new response:


1. What are we looking at ?
2. How many are there ?
3. Entries stored into an array


    {{ define "response" }}
        {
            {{ with .Section }}
                "section" : "{{ . }}",
            {{ end }}
            "count" : "{{ len .Data.Pages }}"
            ,"items" : [
            {{ range $i, $e := .Data.Pages }}
                {{ if $i }}, {{ end }}{{ .Render "item" }}
            {{ end }}
            ]
        }
    {{ end }}

**Sports taxonomy**
Adding a sports category into the mix is not that complicated. Let’s open our `config.toml` and tell Hugo there’s a new Taxo in town and that we need an Output Format for it.


    [taxonomies]
        sport = "sports"
    [outputs]
        page = ["json"] # A player
        section = ["json"] # All players
        home = ["json"] # Everything
        taxonomy = ["json"] # All items from a sport
  

Then add them to our players and teams:


    ---
    title: "Frank J. Robinson"
    [...]
    sports: ["soccer", "baseball"]
  Then in our `list.json.json` template, we could add the possibility of a taxonomy page and enrich the output by checking if the page of kind `section` or `taxonomy`.
    {{ with eq .Kind  "section"}}
        "section" : "{{ $.Section }}",
    {{ end }}
    {{ with eq .Kind  "taxonomy"}}
        "taxonomy" : "{{ $.Data.Singular }}",
        "term" : "{{ $.Data.Term }}",
    {{ end }}

And we have a sport: http://localhost:1313/sports/football/index.json


    {
        "data": {
            "taxonomy": "sport",
            "term": "football",
            "count": "3",
            "items": [
                {
                    "name": "Jody Garland",
                    "contact": "+1 (555) 555 5555",
                    "permalink": "http://localhost:1313/players/jody-garland/index.json",
                    "year": "freshman"
                },
                {
                    "name": "John Artfield",
                    "contact": "+1 (555) 555 5555",
                    "permalink": "http://localhost:1313/players/john-artfield/index.json",
                    "year": "sophomore"
                },
                {
                    "title": "Sly Turtles",
                    "type": "teams",
                    "mascot": "Turtle Todd",
                    "permalink": "http://localhost:1313/teams/sly-turtles/index.json"
                }
            ]
        }
    }

**Creating a generic item.json.json**
For the sake of simplicity we added `items.json.json` to `layouts/_default`, however, it really only caters to the `players` endpoint. Let’s move it to `layouts/players/item.json.json`. 

Instead we'll create a more generic `layouts/_default/item.json.json` for all other types of entries.

    {
      "title": "{{ .Title }}",
      "date": "{{ .Date }}",
      "type": "{{ .Type }}",
      "permalink" : "{{ .Permalink }}",
      "summary" : "{{ .Summary }}"
    }

Nice, the API is now Content type proof!

## Next Steps

What we built is a stand alone API, but in order to add it as an extra layer to your existing website, all you'll have to do is drop the templates we created today in your project's `layouts` directory and assign the needed output formats to your page kinds, without forgetting to mention the default ones: HTML and for some page kinds, RSS. This way Hugo will output the desired pages in HTML, RSS and JSON:

    [outputs]
      page = ["HTML", "json"]
      home = ["HTML", "RSS", "json"]
      section = ["HTML", "RSS", "json"]
      ...

Using Hugo's Output Formats we were able to tell Hugo to output our pages in JSON. We now have an out of the box RESTful GET API!
Thanks to its templating logic we can now change or add keys to our players’ or teams’ output, add new content type and create a custom output object for them or let them use the default one. 

A nice little follow-up exercise would be to create a JSON output for our sports taxonomy to list all of our sports!

