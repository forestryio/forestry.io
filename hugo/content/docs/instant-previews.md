---
title: Instant Previews
draft: true
date: 2019-01-08
menu:
  docs:
    name: Instant Previews
    parent: Settings & Configuration
    weight: 11
---

{{% warning %}}
This feature is currently in private beta.
{{% /warning %}}

---

{{% feature_flag "preview-method" "kubernetes" %}}

With **instant previews**, you can take advantage of your static site generator's built-in "watch" or incrementally-updating mode to dramatically reduce the time it takes to refresh a Forestry preview, providing a shorter feedback cycle for editors working on your site.

{{% warning "Before You Start" %}}

In order to use instant previews, your site must be using **Key-based Authentication** to access your Git repo. Sites created before **August 28, 2018** may need to perform a manual upgrade in order to work with instant previews.
<br /><br />
[Upgrade Guide: Key-Based Authentication](https://forestry.io/blog/migrating-to-key-based-authentication/)

{{% /warning %}}

## Adding an Instant Preview

To add an instant preview, add a compatible command to `preview_command` option in the `build` section of your `.forestry/settings.yml` file. You will also need to add an option named `custom_preview` to the top level of your forestry configuration, set to `true`.

{{% tip %}}
[More info on build commands](https://forestry.io/docs/settings/build-commands/)
{{% /tip %}}

Here's an example of a live preview configuration in a `.forestry/settings.yml` file:

```yaml
custom_preview: true
build:
    preview_command: hugo server -D --renderToDisk --port 8080 --bind 0.0.0.0
```

{{% warning "A Caveat for Hugo users" %}}
You must include the `--renderToDisk` flag when starting the Hugo server in order for your site to work with our preview system.
{{% /warning %}}

## Preview Settings in Forestry

If you browse to the **Settings** screen in Forestry, you will see a tab labeled **Previews** where you can toggle the `custom_preview` settings as well as view the output of your preview process.

![preview settings](/uploads/2018/10/preview_settings.png)

Hit the **Restart Preview Environment** button to terminate the current preview process and re-run the preview command.



## Command Limitations

Your instant previewing command needs to be a "watch" style command that will start a process to watch for changes to your files, and rebuild your site automatically. This will most likely be the command that a developer would run in their local environment when working on the site, such as `hugo server` or `jekyll serve`.

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
{{% tab "Gatsby" %}}
```bash
gatsby develop -p 8080 -H 0.0.0.0
```
{{% /tab %}}
{{% tab "VuePress" %}}
```bash
vuepress dev --port 8080 --host 0.0.0.0
```
{{% /tab %}}
{{% /code_tabs %}}

### Live Reloading

Forestry's live previewing relies on the built-in live browser reloading provided by your preview process. Instant previews have been tested and confirmed working with [Browsersync](https://browsersync.io/) and [LiveReload](http://livereload.com/).

## Using The Preview

Note that your live preview will initially start on the homepage of your site, regardless of which content you initialize the preview from. 

{{% /feature_flag %}}
