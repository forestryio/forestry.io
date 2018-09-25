---
title: Build Commands
weight: 7
publishdate: 2018-09-19 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-09-19 04:00:00 +0000
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

- Ruby
- Bundler
- Hugo
- NodeJS
- NPM
- Yarn

If your project has a `package.json` file, your `node_modules` will be installed automatically. Feel free to use NPM or Yarn scripts in your build commands!

## Defining Custom Build Commands

To add custom build commands for your site, add a `build` section to your configuration file at `.forestry/settings.yml`. Your build configuration should at the very least define a `preview_command`, `publish_command`, and `output_directory`. You may also define certain environment variables via `preview_env` and `publish_env`.

### Example Config

```
build:
  preview_command: hugo -D -F -E
  publish_command: hugo
  output_directory: public
  preview_env:
  - HUGO_ENV=staging
  publish_env: 
  - HUGO_ENV=production
```

### Preview Command

The `preview_command` is run when creating a preview of your site. This command should generate your website and include any dev/draft content. For example, the command `hugo -D -F -E` builds a Hugo site that includes draft, expired, and future-dated content.

{{% warning "Don't start a development server!" %}}
You might be accustomed to running commands like `hugo serve` and `jekyll serve` when developing your site locally to start up a local development server. This behavior is not currently compatible with our preview system, and will result in your previews never completing, not to mention frustrated users!
{{% /warning %}}

### Publish Command

The `publish_command` is run when Forestry builds your site prior to deploying it. This command should result in a production-ready site. The default `hugo` command, for example, builds a production Hugo site excluding draft, expired, and future-dated content.

### Output Directory

You will use the `output_directory` setting to tell Forestry where to find the generated HTML of your site after the build runs. For example, if your build command is `jekyll build --destination dist`, your site will be generated into a folder named `dist`, so you should set the value of your `output_directory` to `dist`.

## Hugo & Jekyll Defaults

All Hugo & Jekyll projects can preview and deploy without specifying custom build commands. The default configuration for these projects is as follows:

### Hugo
```
build:
  preview_command: hugo -E -F -D -d public
  publish_command: hugo -d public
  output_directory: public
  preview_env:
  - HUGO_ENV=staging
  - HUGO_VERSION=#{self.site_settings.engine_version || '0.17'}
  publish_env: 
  - HUGO_ENV=production
  - HUGO_VERSION=#{self.site_settings.engine_version || '0.17'}
```

### Jekyll
```
build:
  preview_command: jekyll build --drafts --unpublished --future --destination _forestry_site
  publish_command: jekyll build --destination _forestry_site
  output_directory: _forestry_site
  preview_env:
  - JEKYLL_ENV=staging
  publish_env: 
  - JEKYLL_ENV=production
```

## Environment Variables

The following Environment Variables can be customized in your build commands:

### `RUBY_VERSION`

Sets the version of ruby used in your environment. You can use any version installable via [rvm](https://rvm.io/).

*Default:* `2.3.6`

### `NODE_VERSION`

Sets the version of nodejs used in your environment. You can use any version installable via [nvm](https://github.com/creationix/nvm).

*Default:* `8`

### `HUGO_VERSION`

Sets the version of Hugo used in your environment. This shouldn't be necessary in most cases, as it will use the Hugo version specified in your site settings by default.

*Default:* The Hugo version specified in your site settings.

### `HUGO_ENV` / `JEKYLL_ENV`

Sets the environment used by your Hugo or Jekyll site.

*Default:* `staging` for previews, `production` for publishing