---
authors:
- team forestry
date: 2019-11-22
title: 2019/11/22 Changelog
summary: "Breadcrumbs in sections, Go modules for Hugo, no more front matter templates
  overrides \U0001F389  "
draft: true

---
## Enhancements

* All Hugo images are now running Go 1.13, it means if you're using Hugo > 0.58.0 you should be able to [use Hugo modules](https://gohugo.io/hugo-modules/use-modules/).
* We now check for the front template filename to prevent overrides. (See [feature](https://portal.productboard.com/forestry/1-forestry-io-roadmap/c/84-prevent-overriding-front-matter-templates) in our product board)
* We added breadcrumbs to directory sections to ease the navigation between deep nested folders.

![Posts/English/2019/October/story/ section breadcrumbs example](/uploads/2019/11/breadcrumbs-section.png)