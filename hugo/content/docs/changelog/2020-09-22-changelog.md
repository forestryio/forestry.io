---
authors:
- team forestry
date: 2020-06-09
title: 2020/09/22 Changelog
summary: Zero config previews
draft: true

---
## Enhancements

* **Zero config instant previews**: For static site generators using a default port other than `8080`, no need to pass any more options to your preview command: `npm run develop` or `jekyll serve` will do, Forestry will do all the network binding for you! This is particularly useful for people importing Gatsby themes from [Stackbit](https://app.stackbit.com/create?cms=forestry "Import a Stackbit theme to Forestry").