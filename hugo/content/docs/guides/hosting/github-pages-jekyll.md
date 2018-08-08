---
title: Using GitHub Pages to Build Your Jekyll Site
weight: 1
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  guides:
    parent: Hosting
    weight: 1

---
## Using Jekyll with GitHub Pages
GitHub can handle building your Jekyll site without the need of Forestry or a CI tool. GitHub will build your Jekyll site each time a new commit is pushed to GitHub and serve it automatically.

### Limitations
When using GitHub to build your GitHub Pages site, you are restricted to using the [white-listed GitHub Pages Jekyll version and plugins](https://pages.github.com/versions/).

## Getting Started
This requires the GitHub pages gem. Enable it by adding the following line to your `Gemfile`:

```ruby
gem "github-pages", group: :jekyll_plugins
```

![github pages settings](/uploads/2017/12/branch-management.png)

Next, head over to the *Settings* page of your repository in GitHub, and scroll down to *GitHub Pages*. Set the *Source* option to "master branch" and click *Save*.

{{% tip %}}
Note the URL listed at the top of the GitHub Pages settings. This is the URL that your GitHub Pages site will be served from.
{{% /tip %}}

Lastly, in Forestry navigate to the *Settings* page, click the *Hosting* tab, and set the *Connection* option to *Commit to source repo only*.

Your Jekyll site will now be re-built by GitHub each time a commit is pushed to your repository.

{{% tip Troubleshooting %}}
Your `_config.yml` file must reside in the root of your repository for GitHub Pages to build your site.
{{% /tip %}}