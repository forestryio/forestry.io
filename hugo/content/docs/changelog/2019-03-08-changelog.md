---
title: 2019/03/08 Changelog
date: 2019-03-08 04:00:00 +0000
menu:
  changelog:
    name: 2019/03/08
    parent: Changelog
    weight: 2

---
Help us build the right thing by voting for features on our [roadmap](https://portal.productboard.com/forestry/t "Forestry Roadmap")!

## Bug Fixes

* **Builds:** Fixed a bug where builds requiring certain versions of Ruby would fail due to an issue when installing Bundler. 
* **Creating Documents:** Fixed bug that prevented the Create Document/Folder modal from being dismissed.

## Removals

* **Partial Template Distinction:** The "is partial" flag was originally created to help cleanup the template select boxes when creating content. Since a list of acceptable templates can now be set on the section, we believe the distinction between partial and whole templates adds unnecssary confusion for too little value. net negative. We have opted to remove the concept of "Partial" front matter templates.

## Beta

* **Front Matter Templates Redesign:** Front matter template are one of the core pieces of Forestry used to define how content is structured and edited. Unfortunately, even though Forestry has improved in many ways over the last year, the experience of managing templates has deteriorated. Because of this we have been working on a redesign of the FMT interface that we hope will address many of the common issues we see today. If anyone is interested in becoming a part of this beta, send us the email or site lookup you want added to the beta.