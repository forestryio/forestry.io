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

When you click on the **Start Preview** button, your dev server will spin up in our preview environment and you will be able to edit the **Instant Preview Command**.

![Preview environment started](/uploads/2019/07/instant-preview-started.png)

You can edit the command used to run your dev server by editing the **Instant Preview Command** field.

### Preview Settings in _.forestry/settings.yml_

Alternatively, you can add your instant preview command directly to your configuration file in `.forestry/settings.yml` by adding a value named `instant_preview_command` under the `build` section. You can activate instant previews by adding `instant_preview: true` to the top-level configuration.

Here's an example of a live preview configuration in a `.forestry/settings.yml` file:

```yaml
build:
  preview_docker_image: node:10
  install_dependencies_command: npm install
  instant_preview_command: npm start
  mount_path: "/srv"
  working_dir: "/srv/src"
  preview_output_directory: "src/dist"
  preview_env:
  - ENV=staging
```
{{% tip %}}
[Other examples of build commands](/docs/settings/build-commands/)
{{% /tip %}}

## Command Limitations

Your instant previewing command needs to be a "watch" style command that will start a process to watch for changes to your files, and rebuild your site automatically. This will most likely be the command that a developer would run in their local environment when working on the site, such as `hugo server` or `npm run develop`.

### Network Details

Your preview needs to run on **port 8080 and bind to all network interfaces on `0.0.0.0`**.

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
{{% tab "Eleventy" %}}
```bash
eleventy --serve --port 8080 --output=dist
```
{{% /tab %}}
{{% /code_tabs %}}


{{% tip %}}
**Eleventy**: to tell BrowserSync to bind to `0.0.0.0`, add the following in your Eleventy configuration file:

```
/* Forestry instant previews */
if( process.env.ELEVENTY_ENV == "staging" ) {
  config.setBrowserSyncConfig({
    host: "0.0.0.0"
  });
}
```

Don't forget to set `ELEVENTY_ENV` environment variable to `staging` in the preview settings.
{{% /tip %}}

## Default Instant Preview Commands

See [default build commands](/docs/previews/build-commands#default-commands) for the default instant preview commands for most used SSG.

### Live Reloading

Forestry's live previewing relies on the built-in live browser reloading provided by your preview process. Instant previews have been tested and confirmed working with [Browsersync](https://browsersync.io/) and [LiveReload](http://livereload.com/).

## Using The Preview

Note that your live preview will initially start on the homepage of your site, regardless of which content you initialize the preview from.
