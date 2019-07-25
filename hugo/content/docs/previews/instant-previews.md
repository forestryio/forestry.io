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
{{% warning %}}
This feature is currently in beta.
{{% /warning %}}

With **instant previews**, you can take advantage of your static site generator's built-in "watch" or incrementally-updating mode to dramatically reduce the time it takes to refresh a Forestry preview, providing a shorter feedback cycle for editors working on your site.

## Adding an Instant Preview

Instant previews are configured just like other [build commands](/docs/settings/build-commands/). To use instant previews, navigate to **Settings** > **Previews**. Activate the **Instant Previews** toggle to enable this feature.

Once the **Instant Previews** toggle is activated, your dev server will start spinning up in our preview environment and you will be able to edit the **Instant Preview Command**.

You can edit the command used to run your dev server by editing the **Instant Preview Command** field.

### Preview Settings In _.forestry/settings.yml_

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

Your preview needs to run on **port 8080 and bind to all network interfaces on** `**0.0.0.0**`.

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
npm run forestry:preview
```

{{% /tab %}}

{{% tab "Gatsby" %}}

```bash
npm run forestry:preview
```

{{% /tab %}}
{{% /code_tabs %}}

### Live Reloading

Forestry's live previewing relies on the built-in live browser reloading provided by your preview process. Instant previews have been tested and confirmed working with [Browsersync](https://browsersync.io/) and [LiveReload](http://livereload.com/).

## Default Instant Preview Commands

See [default build commands](/docs/previews/build-commands#default-commands) for the default instant preview commands for each supported SSG.

## Using The Preview

Note that your live preview will initially start on the homepage of your site, regardless of which content you initialize the preview from.