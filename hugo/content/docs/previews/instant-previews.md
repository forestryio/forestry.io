---
title: Configuring Instant Previews
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
    weight: 2

---
With **instant previews**, you can take advantage of your static site generator's built-in "watch" or incrementally-updating mode to dramatically reduce the time it takes to refresh a Forestry preview, providing a shorter feedback cycle for editors working on your site.

To use instant previews, navigate to **Settings** > **Previews** > **Instant Previews** and click the **Use Instant Previews** toggle at the top of the page. Before starting **Instant Previews** server scroll to the **Environment** section to make sure it is configured correctly.

## Configure the Preview Environment

The first step on the path to *Instant Previews* is to configure the preview environment. To simplify the process we have created several preconfigured environments for you to choose from. These environments are kept slim to help keep your previews running quickly. Should you need something extra, you can bring your own custom preview environment.

### Select a Container

There are currently four preconfigured preview environments to choose from. An environment will have been chosen for you based on the static site generator you are using.

TODO: Insert Image of Container Modal

| Image | Description | Default For |
|---|---|---|
|Hugo | A bare-bones Linux container with Hugo. Set the `HUGO_VERSION` environment variable to select which version of Hugo to use. | Hugo |
|Hugo + Node | Hugo + NodeJS 10 + NPM, for Hugo sites that require Node modules. Set the `HUGO_VERSION` environment variable to select the version of Hugo to use. | – |
|Ruby 2.6 | A container with Ruby 2.6 and bundler, suited for Jekyll sites. | Jekyll |
|NodeJS 10 | NodeJS 10 + NPM. Will work with any Node-based static site generator defined in your package.json file such as Gatsby, VuePress, Gridsome, or Eleventy. | Gatsby, VuePress |
|Custom | Bring-your-own environment! Use any publicly available image on Docker Hub to run your preview. See the [Advanced Configuration](#advanced-configuration) section below. | – |

### Advanced Configuration
To get more control over your preview environment, click the **Advanced Configuration** field below the **Select a Different Environment** button.

TODO: Insert Image of Advanced Configuration Fields

| Field | Description |
|---|---|
| Docker Image |  Path to a publicly available image on [Docker Hub](https://hub.docker.com/). Use this field if you want to use a custom Docker Image. |
| Mount Path |  The directory inside the docker container where your site should be mounted. |
| Working Directory (Optional) |  Override the default working directory of the docker image. This is where the "Install Dependency" and "Build Command" are run from.  |

{{% tip "Is your site in a subdirectory?" %}}
A common use case for the **Working Directory** field is for site's that live in a subdirectory the Git repository.

{{% /tip %}}

## Configuring the Preview Commands

Each preview environment has a set of recommended values. These values are set by default but can be modified to fit your site.

There are four basic fields to configure:

| Basic Field | Description |
|---|---|
| Install Dependencies Command (Optional)| The command used to install your projcets dependencies. The results of this command will be cached for faster startup times.  |
| Build Command | The command that starts your static site generator's dev server.|
| Output Directory | The directory where your site is output to when previewing. This path must be relative to the root of your repository.|
| Environment Variables\* | A list of key-value pairs to be added to the preview server's environment. |

{{% warning "Environment Variables are stored in Git *" %}}
Be careful about which environment variables you add to your previwe server. All environment variables are stored in the `.forestry/settings.yml` of your Git repository.
{{% /warning %}}

![preview settings](/uploads/2019/01/preview_settings.png)

### Preview Settings In *.forestry/settings.yml*
Alternatively, you can add your instant preview command directly to your configuration file in `.forestry/settings.yml` by adding a value named `instant_preview_command` under the `build` section. You can activate instant previews by adding `instant_preview: true` to the top-level configuration.

{{% tip %}}
[More info on build commands](https://forestry.io/docs/settings/build-commands/)
{{% /tip %}}

Here's an example of a live preview configuration in a `.forestry/settings.yml` file:

TODO: Double Check that each of these fields have the right name
{{% code_tabs %}}
{{% tab "Hugo" %}}
```yaml
instant_preview: true
build_commands:
  preview_docker_image: forestryio/hugo:latest
  mount_path: /srv
  working_directory:
  install_dependencies_command:
  instant_preview_command: hugo server --renderToDisk --port 8080 --bind 0.0.0.0
  preview_output_directory: public
  preview_env:
    - HUGO_VERSION=0.52.1
```
{{% /tab %}}
{{% tab "Jekyll" %}}
```yaml
instant_preview: true
build_commands:
  preview_docker_image: forestryio/ruby:2.6
  mount_path: /srv
  working_directory:
  install_dependencies_command: bundle install --path vendor/bundle
  instant_preview_command: bundle exec jekyll serve --drafts --unpublished --future --port 8080 --host 0.0.0.0 -d _site
  output_directory: _site
  preview_env:
    - JEKYLL_ENV=staging
```
{{% /tab %}}
{{% tab "VuePress" %}}
```yaml
instant_preview: true
build_commands:
  preview_docker_image: nodejs:10
  mount_path: /srv
  working_directory:
  install_dependencies_command: npm install
  instant_preview_command: vuepress dev --port 8080 --host 0.0.0.0
  output_directory: .vuepress/dist
  preview_env:
    - NODE_ENV=development
```
{{% /tab %}}

{{% tab "Gatsby [beta]" %}}
```yaml
instant_preview: true
build_commands:
  preview_docker_image: nodejs:10
  mount_path: /srv
  working_directory:
  install_dependencies_command: npm install
  instant_preview_command: gatsby develop -p 8080 -H 0.0.0.0
  output_directory:
  preview_env:
    - NODE_ENV=development
```
{{% /tab %}}
{{% /code_tabs %}}

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

## Default Preview Commands

See [default build commands](/docs/previews/build-commands#default-commands) for the default instant preview commands for each supported SSG.

## Instant Preview URLs

When you click the preview button on a piece of content, Forestry will attempt to determine which URL to open by temporarily inserting a unique preview token in the markdown body. There are two situations where this won't work:

### If the Layout Doesn't Use Markdown Body

You may have some layouts that don't utilize the body of the markdown file. This happens when you instead build the page entirely from front matter data, such as when you use [blocks](/docs/settings/fields/blocks).

For these layouts, Forestry also inserts a special front matter value that you can include in these layouts to improve Forestry's preview URL behavior. By outputting the contents of the `forestry_preview_id` front matter key in your layout, Forestry will be able to identified the content being previewed. You can output this value anywhere between the opening and closing `<body>` tags of your HTML, and it is recommended to add it as an HTML comment.

Be aware that `forestry_preview_id` will only be inserted in one file at a time, and won't be guaranteed to be there, so your code should check for it before outputting its value.

{{% code_tabs %}}
{{% tab "Hugo" %}}
```go-html-template
{{ with .Params.forestry_preview_id }}
<!-- {{ . }}  -->
{{ end }}
```
{{% /tab %}}
{{% tab "Jekyll" %}}
```liquid
{% if page.forestry_preview_id %}
<!-- {{ page.forestry_preview_id }} -->
{% end %}
```
{{% /tab %}}
{{% /code_tabs %}}

this value isn't always included; will only be included on the specific page, should use code that checks for the value before using it

### If the SSG Doesn't Write Content to HTML Files in Dev Mode


If your static site generator doesn't write content updates to html (such as when using `gatsby develop`,) this won't work and the preview will always open the home page of your site.
