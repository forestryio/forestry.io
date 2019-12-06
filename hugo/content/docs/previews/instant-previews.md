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

Instant previews are configured via a [build command](/docs/settings/build-commands/).  
To use instant previews, navigate to **Settings** > **Previews**.

### Default Instant Preview Settings

Most of the time, you shouldn't have to change the defaults.  When you pick up an SSG on import, we automatically add a [default build commands](/docs/previews/build-commands#default-commands). We will set a matching [preview environment](/docs/previews/build-commands/#preview-environment) for you, but your can always pick up a different one or bring your own custom Docker image.

![](/uploads/2019/12/preview-environments.png)

## Customize your settings

You can edit the command used to run your preview by editing the **Instant Preview Command** field.

![Preview settings example for a Gatsby site](/uploads/2019/12/preview-settings-example.png "Example of preview configuration for a Gatsby site")

Your instant previewing command needs to be a "watch" style command that will start a process to watch for changes to your files, and rebuild your site automatically. This will most likely be the command that a developer would run in their local environment when working on the site, such as `hugo server` or `npm run develop`.

{{% warning %}}

1. Your preview needs to run on **0000:8080** network interface
2. Commands for any NodeJS-based static site generator needs to be [run as an npm script](/docs/previews/build-commands/#using-npm-scripts-as-build-commands).
3. If your site lives in a subfolder, you need to [setup working directory and output path accordingly](https://forestry.io/docs/troubleshooting/build-issues-for-sites-in-subdirectories/#including-subdirectory-in-preview).

Preview still not running? See our [troubleshooting section](/docs/previews/troubleshooting-preview-issues/) to do some checks.

{{% /warning %}}

#### Defaults commands

{{% code_tabs %}}
{{% tab "Hugo" %}}

```bash
hugo server -D -E -F --port 8080 --bind 0.0.0.0 --renderToDisk -d public
```

{{% /tab %}}
{{% tab "Jekyll" %}}

```bash
bundle exec jekyll serve --drafts --unpublished --future --port 8080 --host 0.0.0.0 -d _site
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
{{% tab "Hexo" %}}

```bash
hexo server -p 8080
```

{{% /tab %}}
{{% /code_tabs %}}

{{% tip %}}
**Eleventy**: to tell BrowserSync to bind to `0.0.0.0`,  amend your Eleventy configuration file with something like:

    /* Run serve on 0.0.0.0 on staging */
    if( process.env.ELEVENTY_ENV == "staging" ) {
      eleventyConfig.setBrowserSyncConfig({
        host: "0.0.0.0"
      });
    }

Don't forget to set `ELEVENTY_ENV` environment variable to `staging` in the preview settings.
{{% /tip %}}

### Start the preview

When you click on the **Start Preview** button, your preview will spin up.

![Preview environment started](/uploads/2019/07/instant-preview-started.png)

Once your preview environment is running fine, your editors will be able to click to preview icon button, that will open a preview of your website in a new browser tab.

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