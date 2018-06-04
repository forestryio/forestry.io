---
title: Building a Company Component Library
description: ''
date: 2018-02-02 12:25:45 +0000
authors: []
publishdate: 2017-12-07 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images: []
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []
draft: true

---
Building a Company Component Library

* When to consider this approach
  * You have a multiple projects 
  * There's a lot of copies of the same component
  * You struggle to keep the styles consistent across projects
* React apps have a lot of components
  * You're going to build a ton of your own
  * You should also use some of the great third party components out there
    * Sometimes you might make an Adapter component to change the API
    * Keeping them up-to-date across projects can be a pain
* Benefits
  * Designers can build and style new components in a tidy environment
  * Reduced duplication of components across projects
  * Consistent styling across projects
  * Consistent use of third party dependencies
    * Customize them site wide in one place
    * Audit updates in a single place before updating
      * If their API breaks then not all projects needs to update the internal component library at the same time.
* Forestry
  * Almost all our components are custom
  * We use styled-components
  * Third party components:
    * react-select