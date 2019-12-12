---
authors:
- team forestry
date: 2019-12-13
title: 2019/12/13 Changelog
summary: "Breadcrumbs for directory sections, chars limit on text fields, less verbose
  commits for templates, new Hugo starter and more… \U0001F389 "
draft: true

---
## Enhancements

* [**Breadcrumbs for directory sections**](https://portal.productboard.com/forestry/1-forestry-io-roadmap/c/83-improve-navigation-within-sections) ease the navigation between deep nested folders.
* [**Limit characters on text and textarea fields**](https://portal.productboard.com/forestry/1-forestry-io-roadmap/c/81-characters-limit-on-text-and-textarea-fields) is useful to enforce SEO best practices for instance.
* **Less verbose commits**: we now force the pages sorting in your front matter templates, to minimize diffs and ease content reviews.
* We now [check for the front template filename](https://portal.productboard.com/forestry/1-forestry-io-roadmap/c/84-prevent-overriding-front-matter-templates) to prevent overrides.
* **Track rejected pushes**: sometimes Forestry can't commit to your repository, because your branch is protected or you don't have proper rights. Forestry will now warn you if a commit gets rejected.
* All Hugo images are now running Go 1.13, it means if you're using Hugo > 0.56.0 you are now able to [use **Hugo modules**](https://gohugo.io/hugo-modules/use-modules/)**.**

### Starters

* **Novela**: a [beautiful new Hugo starter](https://github.com/forestryio/novela-hugo-starter) adapted from Narative ([preview](https://hugo-novela-forestry.netlify.com/))
* Our [VuePress portfolio template](https://github.com/forestryio/portfolio-vuepress) has been updated to use version 1.2.0 to fix an issue with Instant Previews.
* [Gridsome Forestry starter](https://github.com/itsnwa/gridsome-forestry-starter) has been updated to use version 0.7 to fix an issue with Instant Previews.

Our team will be busy fixing a bunch of stuff in the next weeks, thanks for all the helpful feedback to make Forestry better 🙏

* [See our Roadmap](https://portal.productboard.com/forestry)
* [Join our Slack community Channel](https://join.slack.com/t/forestry-community/shared_invite/enQtNDAxMTU5NzcwMzA3LTY1MzM2YTZhN2Q2ZjkyMjk2ZmNhM2Y2ODIwYmU5YWRiNDYwMWRjNzhlOWJiMTg2NDc2ZWNlNjljOTNiNDZiZDk)

## Community

Special thanks to Steve Polito for showing [how to use Blocks ](https://stevepolito.design/blog/forestry-cms-blocks-field-demo/), it's great to see developers sharing knowledge about Forestry.

In other news, our team released a new Gatsby starter for [Tina CMS](https://tinacms.org). our open source effort to bring a better editing experience to the JAMstack.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">✨ Introducing Tina Grande – A <a href="https://twitter.com/gatsbyjs?ref_src=twsrc%5Etfw">@gatsbyjs</a> starter with full TinaCMS integration ✨<br><br>🏗️ – Blocks based page & form builder<br>🎨 – Full theme customization through Tina<br>🌙 – Dark mode<br>💅 – Styled Components<br><br>Check it out / clone it – <a href="https://t.co/9qlPlTdMNM">https://t.co/9qlPlTdMNM</a> <a href="https://t.co/ybH5hcEiYt">pic.twitter.com/ybH5hcEiYt</a></p>— TinaCMS (@tina_cms) <a href="https://twitter.com/tina_cms/status/1197224944083460096?ref_src=twsrc%5Etfw">November 20, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>