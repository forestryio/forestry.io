---
title: Instant Previews
aliases:
- "/docs/instant-previews"
date: 2019-01-05T00:00:00.000+00:00
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
publishdate: 2018-01-15T17:00:00.000+00:00
authors: []
expirydate: 2030-01-01T04:00:00.000+00:00
layout: single
menu:
  docs:
    parent: Previews
    weight: 2

---
With **instant previews**, you can take advantage of your static site generator's built-in "watch" or incrementally-updating mode to dramatically reduce the time it takes to refresh a Forestry preview, providing a shorter feedback cycle for editors working on your site.

## Adding an Instant Preview

Instant previews are configured via a [build command](/docs/settings/build-commands/). To use instant previews, navigate to **Settings** > **Previews**.

It should be as easy as 1,2,3:

1. Pick up a preview environment matching your project stack.
2. Customize your settings (build command, paths)
3. Start the preview

When you click on the **Start Preview** button, your dev server will spin up in our preview environment and you will be able to edit the **Instant Preview Command**.

![Preview environment started](/uploads/2019/07/instant-preview-started.png)

You can edit the command used to run your dev server by editing the **Instant Preview Command** field.

## Command Limitations

Your instant previewing command needs to be a "watch" style command that will start a process to watch for changes to your files, and rebuild your site automatically. This will most likely be the command that a developer would run in their local environment when working on the site, such as `hugo server` or `npm run develop`.

### Network Details

{{% warning %}}
Your preview needs to run on **port 8080** and bind to all network interfaces on **0.0.0.0**.
{{% /warning %}}

The default command for any NodeJS-based static site generator should be [added as an npm script in the ](/docs/previews/build-commands/#using-npm-scripts-as-build-commands)`[package.json](/docs/previews/build-commands/#using-npm-scripts-as-build-commands)`.

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

{{% tab "Gatsby" %}}

```bash
gatsby develop -p 8080 -H 0.0.0.0
```

{{% /tab %}}  
{{% tab "Gridsome" %}}

    gridsome develop

{{% /tab %}}
{{% tab "Eleventy" %}}

```bash
eleventy --serve --port 8080 --output=dist
```

{{% /tab %}}
{{% /code_tabs %}}

{{% tip %}}
**Eleventy**: to tell BrowserSync to bind to `0.0.0.0`, add the following in your Eleventy configuration file:

    /* Forestry instant previews */
    if( process.env.ELEVENTY_ENV == "staging" ) {
      config.setBrowserSyncConfig({
        host: "0.0.0.0"
      });
    }

Don't forget to set `ELEVENTY_ENV` environment variable to `staging` in the preview settings.
{{% /tip %}}

### Live Reloading

Forestry's live previewing relies on the built-in live browser reloading provided by your preview process. Instant previews have been tested and confirmed working with [Browsersync](https://browsersync.io/) and [LiveReload](http://livereload.com/).

### Preview Settings in _.forestry/settings.yml_

Alternatively, you can setup your instant previews directly from your configuration file in `.forestry/settings.yml` in the `build` section.

Here's an example of a build section in the `.forestry/settings.yml` file:

    build:
      preview_docker_image: node:10 # Our project use a node-based SSG
      install_dependencies_command: npm install # We manage dependencies through NPM
      instant_preview_command: npm start # Our preview script is aliased to npm start script in our package.json
      mount_path: "/srv" # Don't touch this unless you use a custom Docker image
      working_dir: "/srv/src" # Our project lives in a `src` subfolder
      preview_output_directory: "src/dist" # we build our site in `dist` folder
      preview_env:
      - ENV=staging # we don't want to optimize for production

{{% tip %}} [See other examples of build commands](/docs/settings/build-commands/) {{% /tip %}}

## Default Instant Preview Commands

When you pick up an SSG on import, we automatically add a [default build commands](/docs/previews/build-commands#default-commands).

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
  {{- safeHTML (printf "<meta property='forestry_instant_preview_id' content='%s'>" .) -}}
{{ end -}}
```

_HTML comments in Hugo must be filtered with_ `safeHTML` _in order to be output to the document._
{{% /tab %}}
{{% tab "Jekyll" %}}

```liquid
{% if page.forestry_instant_preview_id != "" %}
<meta property="forestry_instant_preview_id" content="{{ page.forestry_instant_preview_id }}">
{% end %}
```

{{% /tab %}}
{{% /code_tabs %}}

### If the SSG Doesn't Write Content to HTML Files in Dev Mode

If your static site generator doesn't write content updates to HT%M (such as when using `gatsby develop`,) this won't work and the preview will always open the home page of your site.