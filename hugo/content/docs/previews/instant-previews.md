---
title: Instant Previews
aliases:
- "/docs/instant-previews"
date: 2019-01-05 00:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
publishdate: 2018-01-15 17:00:00 +0000
authors: []
expirydate: 2030-01-01 04:00:00 +0000
layout: single
menu:
  docs:
    parent: Previews
    weight: 3

---
With **instant previews**, you can take advantage of your static site generator's built-in "watch" or incrementally-updating mode to dramatically reduce the time it takes to refresh a Forestry preview, providing a shorter feedback cycle for editors working on your site.

{{% warning "Before You Start" %}}

In order to use instant previews, your site must be using **Key-based Authentication** to access your Git repo. Sites created before **August 28, 2018** may need to perform a manual upgrade in order to work with instant previews.
<br /><br />
[Upgrade Guide: Key-Based Authentication](https://forestry.io/blog/migrating-to-key-based-authentication/)

{{% /warning %}}

## Adding an Instant Preview

Instant previews are configured just like other [build commands](/docs/settings/build-commands/). To use instant previews, navigate to **Settings** > **Previews**. Activate the **Instant Previews** toggle to enable this feature.

Once the **Instant Previews** toggle is activated, your dev server will start spinning up in our preview environment and you will be able to edit the **Instant Preview Command**.

![preview settings](/uploads/2019/01/preview_settings.png)

You can edit the command used to run your dev server by editing the **Instant Preview Command** field.

### Preview Settings In *.forestry/settings.yml*
Alternatively, you can add your instant preview command directly to your configuration file in `.forestry/settings.yml` by adding a value named `instant_preview_command` under the `build` section. You can activate instant previews by adding `instant_preview: true` to the top-level configuration.

{{% tip %}}
[More info on build commands](https://forestry.io/docs/settings/build-commands/)
{{% /tip %}}

Here's an example of a live preview configuration in a `.forestry/settings.yml` file:

```yaml
instant_preview: true
build:
    instant_preview_command: hugo server -D --renderToDisk --port 8080 --bind 0.0.0.0
```

{{% tip %}}
Your instant preview command will use the same **output directory** and **environment variables** as the standard preview command.
{{% /tip %}}

## Command Limitations

Your instant previewing command needs to be a "watch" style command that will start a process to watch for changes to your files, and rebuild your site automatically. This will most likely be the command that a developer would run in their local environment when working on the site, such as `hugo server` or `jekyll serve`.

{{% warning "A Caveat for Hugo users" %}}
You must include the `--renderToDisk` flag when starting the Hugo server in order for your site to work with our preview system.
{{% /warning %}}

### Network Details

Your preview needs to run on **port 8080** and bind to all network interfaces (`0.0.0.0`).

{{% code_tabs %}}
{{% tab "Hugo" %}}
```bash
hugo server --renderToDisk --port 8080 --bind 0.0.0.0
```
{{% /tab %}}
{{% tab "Jekyll" %}}
```bash
bundle exec jekyll serve --port 8080 --host 0.0.0.0
```
{{% /tab %}}
{{% tab "VuePress" %}}
```bash
vuepress dev --port 8080 --host 0.0.0.0
```
{{% /tab %}}

{{% tab "Gatsby [beta]" %}}
```bash
gatsby develop -p 8080 -H 0.0.0.0
```
{{% /tab %}}
{{% /code_tabs %}}

### Live Reloading

Forestry's live previewing relies on the built-in live browser reloading provided by your preview process. Instant previews have been tested and confirmed working with [Browsersync](https://browsersync.io/) and [LiveReload](http://livereload.com/).

## Default Instant Preview Commands

See [default build commands](/docs/previews/build-commands#default-commands) for the default instant preview commands for each supported SSG.

## Instant Preview URLs

When you click the preview button on a piece of content, Forestry will attempt to determine which URL to open by temporarily inserting a unique preview token in the markdown body. There are two situations where this won't work:

### If the Layout Doesn't Use Markdown Body

You may have some layouts that don't utilize the body of the markdown file. This happens when you instead build the page entirely from front matter data, such as when you use [blocks](/docs/settings/fields/blocks).

For these layouts, Forestry also inserts a special front matter value that you can include in these layouts to improve Forestry's preview URL behavior. By outputting the contents of the `forestry_instant_preview_id` front matter key in your layout, Forestry will be able to identified the content being previewed. You can output this value anywhere between the opening and closing `<body>` tags of your HTML, and it is recommended to add it as an HTML comment. If your HTML is being run through a minifier that strips comments, it's fine to insert it differently, such as in a `<meta>` tag.

Be aware that `forestry_preview_id` will only be inserted in one file at a time, and won't be guaranteed to be there, so your code should check for it before outputting its value.

{{% code_tabs %}}
{{% tab "Hugo" %}}
```go-html-template
{{ with .Params.forestry_instant_preview_id }}
  {{- safeHTML (printf "<!-- %s -->" .) -}}
{{ end }}
```
_HTML comments in Hugo must be filtered with_ `safeHTML` _in order to be output to the document._
{{% /tab %}}
{{% tab "Jekyll" %}}
```liquid
{% if page.forestry_instant_preview_id %}
<!-- {{ page.forestry_instant_preview_id }} -->
{% end %}
```
{{% /tab %}}
{{% /code_tabs %}}

### If the SSG Doesn't Write Content to HTML Files in Dev Mode


If your static site generator doesn't write content updates to html (such as when using `gatsby develop`,) this won't work and the preview will always open the home page of your site.