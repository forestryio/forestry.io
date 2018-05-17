---
title: Storing Media in Git
weight: 2
menu:
  docs:
    parent: Media
    weight: 2
    name: Git
---


The Media Library displays media files found inside a single uploads folder. This can be configured from your site's settings.

![](/uploads/2018/01/settings-filepaths.png)

#### Upload Folder

The upload path where media uploads should be saved, relative to the root of your repository.

* _Default:_ `/uploads/:year:/:month:/:day:/`

#### Front Matter File URL

The relative path from the root of your site for media uploads inserted into front matter fields.

* _Default:_ `/uploads/:year:/:month:/:day:/`

{{% tip %}}
The _Front Matter File URL_ may need to be different than the _Content Body File URL_ if your theme handles appending the path to the media upload.
{{% /tip %}}

#### Content Body File URL

The relative path from the site's root for media uploads in the content body.

* _Default:_ `/uploads/:year:/:month:/:day:/`

{{% tip %}}
The _Content Body File URL_ should always be the relative path to your media uploads folder from the root of your site to ensure that images load correctly.
{{% /tip %}}

#### Variables

Each of these settings support the following variables at upload time:

* `:year:`: the current year, formatted `YYYY`
* `:month:`: the current month, formatted `MM`
* `:day:`: the current day, formatted `DD`