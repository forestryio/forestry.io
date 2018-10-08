---
title: Live Previews
draft: true
date: 2018-10-03
layout: plain
---

With **live previews**, you can take advantage of your static site generator's built-in "watch" or incrementally-updating mode to dramatically reduce the time it takes to refresh a Forestry preview, providing a shorter feedback cycle for editors working on your site.

## Adding a Live Preview

To add a live preview, add a compatible command to `preview_command` option in the `build` section of your `.forestry/settings.yml` file. You will also need to add an option named `custom_preview` to the top level of your forestry configuration, set to `true`.

{{% tip %}}
[More info on build commands](https://forestry.io/docs/settings/build-commands/)
{{% /tip %}}

Here's an example of a live preview configuration in a `.forestry/settings.yml` file:

```
custom_preview: true
build:
    preview_command: hugo server -D --port 8080 --bind 0.0.0.0
```

{{% warning "Attention Beta Users!" %}}
This configuration is subject to change. Be prepared to adjust your config when this feature goes live.
{{% /warning %}}

## Preview Settings in Forestry

If you browse to the **Settings** screen in Forestry, you should now see a tab labeled **Previews** where you can toggle the `custom_preview` settings as well as view the output of your preview process.

![preview settings](/uploads/2018/10/preview_settings.png)

Hit the **Restart Preview Environment** button to terminate the current preview process and re-run the preview command.



## Command Limitations

Your live previewing command needs to be a "watch" style command that will start a process to watch for changes to your files, and rebuild your site automatically. This will most likely be the command that a developer would run in their local environment when working on the site, such as `hugo server` or `jekyll serve`.

### Network Details

Your preview needs to run on **port 8080** and bind to all network interfaces (`0.0.0.0`).

For example, a compatible Hugo command would look like this: 
<br />`hugo server --port 8080 --bind 0.0.0.0`.

A Jekyll command might look like this: 
<br />`bundle exec jekyll serve --port 8080 --host 0.0.0.0`.

### Live Reloading

Forestry's live previewing relies on the built-in live browser reloading provided by your preview process. Live previews have been tested and confirmed working with [Browsersync](https://browsersync.io/) and [LiveReload](http://livereload.com/).

## Using The Preview

Note that your live preview will initially start on the homepage of your site, regardless of which content you initialize the preview from. 
