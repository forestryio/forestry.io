---
title: Preview Commands
aliases:
- "/docs/settings/build-commands"
weight: "7"
publishdate: 2018-09-19T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: 2019-08-07T04:00:00.000+00:00
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"

---

**Instant previews**  allow for you to spin up a development server in our preview environment which will drastically reduce preview times in most cases.

To help you get started, we provide [default commands](#default-commands). You can then tailor preview settings to your needs, if your website source lives in a subdirectory for example or if you use a different script to run your preview.

[How to use instant previews](/docs/instant-previews/).

## Preview Environment

All sites are built in a Linux container and have access by default to the following tools:

* Ruby / Bundler for Jekyll websites
* Go / Hugo
* NodeJS, NPM, Yarn for NodeJS based SSG like Gatsby, Gridsome, Nuxt, Eleventy, etc.

Hugo and Jekyll users relying on node modules for their asset pipeline can also use a preview environment embedding NodeJS.

If your project has a `package.json` file, your `node_modules` will be installed automatically. **You should use NPM or Yarn scripts in your build commands**.

In the advanced settings, you can also provide any custom Docker image hosted on [https://hub.docker.com](https://hub.docker.com) if your project has specific dependencies.

## Preview Command settings

Preview command configuration in Forestry consists of the **command**, the **output directory**, **advanced settings**, and any number of **environment variables**.

### _Command_

The **Command** is a shell command that will be run inside the build environment to generate your site.

### _Output Directory_

You will use the **Output Directory** setting to tell Forestry where to find the generated HTML of your site after the build runs. For example, if your set your command to `npm run develop`, and that your site will be generated into a folder named `dist`, you should set your **Output Directory** to `dist`.

{{% tip "Why do I need to set the output directory in two places?" %}}
When we build your site, we treat your build command as a black box. In the above example, Forestry doesn't know that the HTML is being generated in the `dist` folder. We use the **output directory** setting to tell Forestry to look in the `dist/` directory to host the preview .

{{% /tip %}}

### _Environment Variables_

**Environment variables** are values that will be passed into the preview environment. Depending on the static site generator you're using and how your site is coded, you can control different behaviors with environment variables.

Additionally, you can override the following variables to control the preview environment:

| Variable | Description | Default |
| :--- | :--- | :--- |
| HUGO_VERSION | Version of Hugo to use | Version selected when importing site |
| HUGO_ENV | Environment used by Hugo | staging for previews |
| JEKYLL_ENV | Environment used by Jekyll | staging for preview |

### Customizing the Preview Command

To modify your site's preview command, head to **Settings** > **Previews**. The **Configuration** section will contain fields to configure the command, output directory, and environment variables.

Alternatively, you can configure preview commands directory in your `.forestryio/settings.yml` file under the `build` namespace.

### Examples

#### JS-based static site generators: Gatsby, Gridsome, Eleventy, Next, etc.

For a JS-based static site generator build from a `src` subfolder and aliasing `npm start` to the development command in the `package.json`, you would write:

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

Here the preview environment will launch the NodeJS 10 official Docker image, install dependencies with NPM, build the site from the `src`subfolder with the `npm start` command and output the site in `src/site`. We also pass a global ENV variable here to avoid production optimizations.

#### Hugo example

For a Hugo website, `.forestry/settings.yml` will default to:

```yaml
build:
  preview_docker_image: forestryio/hugo:latest
  install_dependencies_command:
  instant_preview_command: hugo server -D -E -F --port 8080 --bind 0.0.0.0 --renderToDisk -d public
  mount_path: "/srv"
  working_dir: "/srv"
  preview_output_directory: "public"
  preview_env:
  - HUGO_VERSION=0.57.2
  - HUGO_ENV=staging
```

### Jekyll example

For a Jekyll website, `.forestry/settings.yml` will default to:

```yaml
build:
  preview_docker_image: forestryio/ruby:2.6
  install_dependencies_command: bundle install --path vendor/bundle
  instant_preview_command: bundle exec jekyll serve --drafts --unpublished --future --port 8080 --host 0.0.0.0 -d _site
  mount_path: "/srv"
  working_dir: "/srv"
  preview_output_directory: "_site"
  preview_env:
  - JEKYLL_ENV=staging
```

### Default commands

{{% code_tabs %}}
{{% tab "Hugo" %}}

```yaml
build:
  instant_preview_command: hugo server -D -E -F --port 8080 --bind 0.0.0.0 --renderToDisk -d public
```

{{% /tab %}}
{{% tab "Jekyll" %}}

```yaml
build:
  instant_preview_command: bundle exec jekyll serve --drafts --unpublished --future --port 8080 --host 0.0.0.0 -d _site
```

{{% /tab %}}
{{% tab "Gatsby" %}}

```yaml
build:
  instant_preview_command: npm run forestry:preview
```

{{% /tab %}}
{{% tab "VuePress" %}}

```yaml
build:
  instant_preview_command: npm run forestry:preview
```

{{% /tab %}}
{{% tab "Generic" %}}

```yaml
build:
  instant_preview_command: npm run forestry:preview
```

{{% /tab %}}
{{% /code_tabs %}}

## Using NPM scripts as Build Commands

Of course, many modern frontend stacks leverage NPM libraries and might have a build process managed by a tool like Gulp or Webpack. Our build environment will automatically install your NPM packages and can run NPM scripts defined in a `package.json` file.

When using custom build tools not already supported by our build environment, **using NPM scripts is the recommended way** to incorporate these tools into your preview or publish command.

In the following example, we will run our instant previews as an NPM script:

### 1. Install SSG in your project

This step is important, as you could otherwise run node packages on your local machine by installing them globally, but Forestry won't have these global packages installed.

{{% code_tabs %}}
{{% tab "Gatsby" %}}

    npm install --save gatsby-cli

{{% /tab %}}
{{% tab "Eleventy" %}}

    npm install --save @11ty/eleventy

{{% /tab %}}
{{% tab "Gridsome" %}}

    npm install --save @gridsome/cli

{{% /tab %}}
{{% tab "VuePress" %}}

    npm install --save vuepress

{{% /tab %}}
<!-- {{% tab "Next" %}}

    npm install --save next react react-dom

{{% /tab %}}
{{% /code_tabs %}} -->


### 2. Configure a build script in _package.json_

Commands run as NPM scripts will automatically include any installed node modules in your **PATH**.

{{% code_tabs %}}
{{% tab "Gatsby" %}}

    "scripts": {
      "forestry:preview": "gatsby develop -H 0.0.0.0 -p 8080"
    }

{{% /tab %}}
{{% tab "Eleventy" %}}

    "scripts": {
      "forestry:preview": "eleventy --serve"
    }

{{% /tab %}}
{{% tab "Gridsome" %}}

    "scripts": {
      "forestry:preview": "gridsome develop -H 0.0.0.0 -p 8080"
    }


{{% /tab %}}
{{% tab "VuePress" %}}

    "scripts": {
      "forestry:preview": "vuepress dev -p 8080 -h 0.0.0.0"
    }

{{% /tab %}}
{{% /code_tabs %}}

### 3. Run the NPM script in your build command

{{% code_tabs %}}
{{% tab "Gatsby" %}}

    build:
      preview_command: npm run forestry:preview
      preview_output_directory: dist

{{% /tab %}}
{{% tab "Eleventy" %}}

    build:
      preview_command: npm run forestry:preview
      preview_output_directory: _site

{{% /tab %}}
{{% tab "Gridsome" %}}

    build:
      preview_command: npm run forestry:preview
      preview_output_directory: dist

{{% /tab %}}
{{% tab "VuePress" %}}

    build:
      preview_command: npm run forestry:preview
      preview_output_directory: .vuepress/dist

{{% /tab %}}
{{% /code_tabs %}}
