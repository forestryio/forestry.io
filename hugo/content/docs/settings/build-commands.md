---
title: Build Commands
weight: 7
publishdate: 2018-09-19 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2019-01-16 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Settings & Configuration
    weight: 8

---
**Build Commands** allow you to customize how Forestry builds your website when it creates a preview or before it deploys your site.

Build commands are optional for all projects. Jekyll and Hugo projects have a default build configuration that will be followed when custom build commands are not provided. VuePress and all other project types will simply not have preview and deployment capabilities unless a build configuration is defined.

## The Build Environment

All sites are built in a Linux container and have access to the following tools:

* Ruby
* Bundler
* Hugo
* NodeJS
* NPM
* Yarn

If your project has a `package.json` file, your `node_modules` will be installed automatically. Feel free to use NPM or Yarn scripts in your build commands!

## Components of a Build Command

Build command configuration in Forestry consists of the **command**, the **output directory**, and any number of **environment variables**.

### _Command_

The **Command** is a shell command that will be run inside the build environment to generate your site.

### _Output Directory_

You will use the **Output Directory** setting to tell Forestry where to find the generated HTML of your site after the build runs. For example, if your build command is `jekyll build --destination dist`, your site will be generated into a folder named `dist`, so you should set your **Output Directory** to `dist`.

{{% tip "Why do I need to set the output directory in two places?" %}}
When we build your site, we treat your build command as a black box. In the above example, we're using the `--destination` flag to tell Jekyll to build our site to the `dist/` directory, but Forestry doesn't know that the HTML is being generated there. We use the **output directory** setting to tell Forestry to look in the `dist/` directory to host the preview or deploy the files.
<br /><br />
In this example, the `--destination` flag could be omitted from your build command entirely if you wish, as long as you set the **output directory** to `_site`, which is the default destination that Jekyll will use when generating your site's HTML.
{{% /tip %}}

### _Environment Variables_

**Environment variables** are values that will be passed into the build environment. Depending on the static site generator you're using and how your site is coded, you can control different behaviors with environment variables.

Additionally, you can override the following variables to control the preview environment:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `RUBY_VERSION` | Sets the version of ruby used in your environment. You can use any version installable via rvm. | `2.3.6` |
| `NODE_VERSION` | Sets the version of nodejs used in your environment. You can use any version installable via nvm. | `8` |
| `HUGO_VERSION` | Version of Hugo to use | Version selected when importing site |
| `HUGO_ENV` | Environment used by Hugo | `staging` for previews, `production` for publish. |
| `JEKYLL_ENV` | Environment used by Jekyll | `staging` for preview, `production` for publish. |

## Defining Custom Build Commands

Forestry currently recognizes two different commands for building your site: a **preview command**, and a **publish command**.

The **preview command** should build a development version of your site suitable for testing and previewing changes. Such a command will, for example, generate drafts as well as published content so that you can preview unfinished posts.

The **publish command** should build a production-ready version of your site. This command wouldn't generate drafts, and may perform other production optimizations like minifying assets.

### Customizing the Preview Command

{{% warning "Don't start a development server!" %}}
You might be accustomed to running commands like `hugo serve` and `jekyll serve` when developing your site locally to start up a local development server. This behavior is not currently compatible with our preview system, and will result in your previews never completing, not to mention frustrated users!
{{% /warning %}}

To modify your site's preview command, head to **Settings** > **Previews**. The **Build** section will contain fields to configure the command, output directory, and environment variables.

Alternatively, you can configure preview commands directory in your `.forestryio/settings.yml` file under the `build` namespace:

```yaml
build:
  preview_output_directory: public
  preview_command: hugo -D -F -E
  preview_env:
  - HUGO_VERSION=0.42
```

### Customizing Publish Command

To modify your site's publish command, head to **Settings** > **Build**. This section will contain fields to configure the command, output directory, and environment variables.

Alternatively, you can once again use the `build` namespace in your `.forestryio/settings.yml` file to configure the publish command:

```yaml
build:
  output_directory: public
  publish_command: hugo -D -F -E
  publish_env:
  - HUGO_VERSION=0.42
```

### Example Config

```yaml
build:
  # preview
  preview_command: hugo -D -F -E
  preview_output_directory: public
  preview_env:
  - HUGO_ENV=staging

  #publish
  publish_command: hugo
  output_directory: public
  publish_env: 
  - HUGO_ENV=production
```
{{% feature_flag "preview-method" "kubernetes" %}}
### Instant Previews

As mentioned, your preview command should *not* start a development server, as this will cause the preview to be stuck generaring indefinitely.

However, our **instant previews** feature treats preview generation differently, allowing for you to spin up a development server in our preview environment which will drastically reduce preview times in most cases.

To learn more about how to use instant previews, view the [instant previews documentation](/docs/instant-previews/).
{{% /feature_flag %}}

## Default Commands

When you import a new project, basic build commands will be configured for you based on what type of site you're importing. The default configuration is as follows:

{{% code_tabs %}}
{{% tab "Hugo" %}}

```yaml
build:
  # preview
  preview_command: hugo -E -F -D -b $DEPLOY_URL -d public
  preview_output_directory: public
  preview_env:
  - HUGO_ENV=staging
  - HUGO_VERSION=#{self.site_settings.engine_version}

  # publish
  publish_command: hugo -d public
  output_directory: public
  publish_env: 
  - HUGO_ENV=production
  - HUGO_VERSION=#{self.site_settings.engine_version}
```

{{% /tab %}}
{{% tab "Jekyll" %}}

```yaml
build:
  # preview
  preview_command: bundle exec jekyll build --drafts --unpublished --future -d _site
  preview_output_directory: _site
  preview_env:
  - JEKYLL_ENV=staging

  # publish
  publish_command: bundle exec jekyll build -d _site
  output_directory: _site
  publish_env: 
  - JEKYLL_ENV=production
```

{{% /tab %}}
{{% tab "VuePress" %}}

```yaml
build:
  # preview
  preview_command: vuepress build -d .vuepress/dist
  preview_output_directory: .vuepress/dist
  preview_env:

  # publish
  publish_command: vuepress build -d .vuepress/dist
  output_directory: .vuepress/dist
  publish_env: 
```

{{% /tab %}}
{{% tab "Gatsby [beta]" %}}
```yaml
build:
  # preview
  preview_command: gatsby build
  preview_output_directory: public
  preview_env:

  # publish
  publish_command: gatsby build
  output_directory: public
  publish_env: 

```
{{% /tab %}}
{{% /code_tabs %}}

{{% feature_flag "preview-method" "kubernetes" %}}
### Default Instant Preview Commands
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
{{% tab "VuePress" %}}
```yaml
build:
  instant_preview_command: vuepress dev -p 8080 -h 0.0.0.0
```
{{% /tab %}}
{{% tab "Gatsby" %}}
```yaml
build:
  instant_preview_command: gatsby develop -H 0.0.0.0 -p 8080
```
{{% /tab %}}
{{% /code_tabs %}}
{{% /feature_flag %}}

## Using NPM Scripts as Build Commands

Of course, many modern frontend stacks leverage NPM libraries and might have a build process managed by a tool like Gulp or Webpack. Our build environment will automatically install your NPM packages and can run NPM scripts defined in a `package.json` file.

When using custom build tools not already supported by our build environment, using NPM scripts is the recommended way to incorporate these tools into your preview or publish command.

In the following example, we will run our VuePress build as an NPM script:

### 1. Install VuePress in your project

This step is important, as you could otherwise run node packages on your local machine by installing them globally, but Forestry won't have these global packages installed.

```bash
npm install --save vuepress
```

### 2. Configure a build script in _package.json_

Commands run as NPM scripts will automatically include any installed node modules in your **PATH**.

```json
"scripts": {
  "forestry:preview": "vuepress build"
}
```

### 3. Run the NPM script in your build command

```yaml
build:
  preview_command: npm run forestry:preview
  preview_output_directory: .vuepress/dist
```