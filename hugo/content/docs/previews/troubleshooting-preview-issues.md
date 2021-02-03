---
title: Troubleshooting Preview Problems
weight: 9
publishdate: 2019-02-22 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2020-06-28 12:00:00 +0000
layout: single-toc
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    name: Troubleshooting 
    parent: Previews
    weight: 4

---
As Forestry moves to support more Static Site Generators and workflows, we need to make our preview environment more flexible to support this variety. Unfortunately, this means there are many more opportunities for things to go wrong 🤷.

If you're having problems previewing your site, this guide is for you! In general, preview problems can be broken down into two broad categories:

* **Forestry can't _build_ your preview**: Something went wrong running your preview [build command](/docs/previews/build-commands/#default-commands), or while setting your site up on our preview hosting server.
* **Forestry can't _find_ your preview**: The preview site was generated successfully, but our previewing webserver couldn't locate it.

If you're attempting to preview your site and you encounter an error like _failed to build preview_, _error generating preview_, or _failed to create preview_, there was a problem building your preview.

On the other hand, if you receive a successful _Preview created_ message, but instead of your site you see an error page declaring "There's nothing here... 🤔", then we were able to build the site, but aren't sure where it ended up!

Either way: if you're encountering one of these two problems, this guide can help you resolve it!

***

{{< toc >}}

***

## Error Generating Preview

If Forestry is unable to build your site, check the following:

### Does your build command look correct?

Head to **Settings** > **Previews** and check that your server is up and running.

{{% tip %}}
For more information on build commands, consult the following resources:

* [Build Commands](/docs/previews/build-commands)
* [Hugo docs: the hugo command](https://gohugo.io/commands/hugo/)
* [Jekyll docs: command line usage](https://jekyllrb.com/docs/usage/)
  {{% /tip %}}

### Does your site build locally?

If your build command looks correct, it's possible that your build is still throwing an error. Errors in your template code, or missing files in your repository, may cause the static site generator to throw an error.

To determine if this is the case, clone a fresh copy of your site, install your dependencies (via NPM and bundler, if applicable,) and run your build command locally. The command you run locally should be equivalent to the command you have configured in Forestry.

If you receive an error at this point, there is a problem with your code that needs to be addressed before your Forestry preview will work. Plugging the error message you receive into Google is often a quick way to find a solution to your problem, but it isn't always that easy.

{{% tip %}}
If you're struggling, the following communities are a good place to seek help from fellow developers:

* {{% slack_invite_link "Forestry.io Slack Community" %}}
* [Hugo Forum](https://discourse.gohugo.io)
* [Jekyll Forum](https://talk.jekyllrb.com)
* [VueJS Discord](https://vue-land.js.org/)
* [Gatsby Discord](https://gatsby.dev/discord)
* [Gridsome Discord](https://discord.gg/daeay6n)
  {{% /tip %}}

#### Are your project's dependencies being installed correctly?

If your site builds locally, but Forestry still encounters an error when trying to build your site, it's possible that your project may require some dependencies that exist in your local environment, but are not being installed in Forestry's preview environment. The preview environment will automatically install the following types of dependencies if their corresponding metadata is present:

* Ruby gems
* NPM packages
* Git submodules
* Hugo modules

To make your project as portable as possible, ensure that you are not relying on external or globally-installed dependencies in order to build your site. For Ruby (Jekyll) projects, this means that your project **must have a Gemfile.** For projects that use NPM modules, **ensure that all packages are tracked in package.json.** For submodules, **ensure that Forestry can install the necessary submodules.**

{{% tip %}}
Related resources:

* [Troubleshooting: Could not locate Gemfile or .bundle/ directory](/docs/troubleshooting/could-not-locate-gemfile-or-bundle-directory/)
* [Using a Git Submodule for Your Theme](/docs/troubleshooting/using-a-git-submodule-for-your-theme/)
* [Using Private Submodules with Forestry](/docs/troubleshooting/using-private-submodules/)
* [Using NPM Scripts as Build Commands](/docs/previews/build-commands/#using-npm-scripts-as-build-commands)
  {{% /tip %}}

#### Ensure Jekyll Ignores `vendor/bundle` (only Jekyll < v4.0)

We recommend installing gems locally to your project by running `bundle install --path vendor/bundle`. One potential pitfall of this is that Jekyll may try to process the gems stored in `vendor/bundle` as if they are part of your site layout, leading to build errors. To fix this, ensure the `vendor` directory is excluded in your `_config.yml` file:

```yaml
exclude:
  - vendor/bundle
```

### Is your site in a subdirectory?

If your site is located in a subdirectory of your Git repo, you need to provide some special configuration to your preview settings.

[Troubleshooting guide: build issues for sites in subdirectories](/docs/troubleshooting/build-issues-for-sites-in-subdirectories/)

### Ensure that the output directory correlates to your build command

The **output directory** in your preview settings is where Forestry will look for your preview website after it's generated. Your **build command** is what determines the directory that your site will be generated in. If your **output directory** doesn't match up with your **build command**, your preview will not work.

For example: the default output directory for Hugo is `public/`. This means that, if your build command is just `hugo -E -F -D`, your **output directory** should be set to `public`. However, you can use the `-d` flag to change the output directory in your build command. If you wanted your site to build to `www/`, for example, you could run `hugo -E -F -D -d www`, and change your **output directory** to `www`. For the most part, the build directory doesn't matter, but it should meet the following criteria:

1. It does not already exist in your site (or else those files will be overwritten,) and
2. It is in your `.gitignore` (recommended, but not required.)

Sticking with the default value is recommended unless you have a specific reason for changing it.

If your **output directory** does not map to the directory created by your build command, and the directory does not exist in your project, your build will fail. If the directory already exists in your project, but is not the directory generated by your build command, you will likely encounter the [Page Not Found](#page-not-found) error discussed below.

### Keep your repository size under 4GB

We won't be able to upload repositories larger than 4GB, this is a physical limit of the filesystem. This would result in files missing on the preview environment and build errrors. If your repository is that large, you must clean it up, optimize your media, either through [Git LFS](/blog/versioning-large-files-with-git-lfs/) or an external provider like [Cloudinary](/docs/media/cloudinary/). Make sure also to scrub your Git history, else your repository size won't shrink that much.

### Try to identify errors in your build log

If none of the above seem to apply to your situation, see if you can parse the build output to determine if an error occurred. Open your notification panel and, underneath the "Failed to create preview" message, click the button labeled **Failed, show log**. This will display the output from the preview environment.

![](/uploads/2019/02/failedtopreview.png)

This output log can be hard to parse sometimes, and the last line of the log is usually _not_ where the error will be reported. Most of the time, errors will be reported shortly after the line containing the phrase `Executing user command:`. This is where your custom build command is run.

Even if you can't locate a problem in the output log, if you decide to send us a support request, go ahead and include the log in your request.

### Ensure you've performed the migration to key-based authentication

If your site was added to forestry before **August 28, 2018**, ensure that you've performed the migration to _key-based authentication_. View the following article for instructions on how to do this:

[Blog: Migrating to Key-Based Authentication](/blog/migrating-to-key-based-authentication/)

## Page Not Found

![](/uploads/2019/02/theresnothinghere.png)

If your preview builds successfully, but you're faced with an error page proclaiming that "There's nothing here... 🤔", then there are a couple things you can try:

### Check the URL

When you click the preview button, Forestry attempts to open your preview site
at the page you're currently editing. To do this, we make an educated guess on
what the URL for that specific content is. However, your SSG conventions and
configuration may cause your URLs to look different than we're expecting, and we
guess wrong. In this case, try navigating to the homepage of your preview. If
the homepage works, the preview is working, but we aren't able to determine the
correct URL for your content. Unfortunately, there's nothing further you can do
here. You will have to manually correct the URLs in your browser's URL bar, or
navigate to the content from the homepage.

### Check baseurl is set to root on staging

Our preview environment will serve your site from the root, if you setup a `baseurl` for instance with Jekyll or Hugo, you have to use a dedicated config file to override your `baseurl` for staging environment.

### Override Jekyll's baseurl

Create a dedidcated config file `_config_staging.yml`that contains at least an empty value for `baseurl`:

```yaml
baseurl: ""
```

Commit this file to your repository.

Then [pass multiple config files to Jekyll with the `--config`  option](https://jekyllrb.com/docs/configuration/options/#build-command-options)

Go to your preview settings and update your build command to:

```sh
bundle exec jekyll serve --config _config.yml,_config_staging.yml --drafts --unpublished --future --port 8080 --host 0.0.0.0 -d _site
```

Restart the preview server.


### Override Hugo baseurl

Set your baseurl to `\` in your main config file or in a [`config/staging/config.toml`](https://gohugo.io/getting-started/configuration/#configuration-directory) file.

Go to your preview settings, and update your build command to:
```
hugo server --environment staging -D -E -F --port 8080 --bind 0.0.0.0 --renderToDisk -d public
```

Restart the preview server.


### Check your output directory

If your preview **output directory** is misconfigured, but maps to an existing directory in your project, your build will appear successful but you will receive this error when trying to access the preview. View the _output directory_ instructions above for help in resolving this.

## Still Need Help?

If you made it through this guide, and still think there's something else going on, don't hesitate to reach out to us! Click on the **Support** link in the Forestry sidebar, and we will respond to you as soon as we're able.
