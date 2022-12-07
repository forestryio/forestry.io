---
title: Migrating from Forestry.io to TinaCMS 
description: TinaCMS is our successor to Forestry CMS. Here's what you need to know about migrating.
  large binary files.
date: 2022-12-09T04:00:00.000+00:00
authors:
- Scott Gallant
- James OHalloran
publishdate: 2022-12-09T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
headline: ''
textline: ''
images:
- "/uploads/2021/04/next-iteration-of-forestry.png"
categories:
- CMS
- Company
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
---


Below is a list of features currently missing from TinaCMS. Each feature falls in one of the following categories:

### Support Planned

This is a feature that we are confident will be added to TinaCMS.

### Considering Support

We are looking into this feature, and may or may not bring it forward to TinaCMS.

### Not Considering Support

We are relatively confident that this feature won't be built by the Tina team. 
Keep in mind, TinaCMS's frontend is open source, so we are open to community additions / plugins. 

## Missing Feature List


| Category | Name | Status |
|----------|------|--------|
|**Hugo Features**   |Hugo Menus  |Considering Support       |
|          |Drafts      |Supported        |
|          |Insertable Hugo shortcodes |Considering Support        |
|**Jekyll Features**          |Jekyll Menus |Support not planned        |
|**Sections/Collections**          |Globs in sidebar definition      |Considering Support        |
|          |Customizable headers in sidebar      |Support not planned        |
|          |Readonly Documents      |Support not planned        |
|          |Configurable section icons in sidebar      |Support planned        |
|          |Single Document modeling:  "Data files"      |Support planned        |
|**Organization Features:**          |"Sub-Teams"      |Considering Support        |
|          |Permissions per section per team|Support planned        |
|          |SSO|Support planned        |
|          |Audit Logs|Support planned        |
|**Media**          |Netlify Large Media|Support not planned        |
|          |Media Search|Support planned        |
|          |Date variables for media storage locations (:year:/:month:/:filename)|Considering Support        |
|          |PDF support|Support planned        |
|          |Multi-image field|Considering support        |
|**Content Modeling:**          |UI for defining Front Matter Templates ("collections")    |Support not planned        |
|          |Hidden fields        |Support planned
|          |Include template field       |Supported (by nature of JS-based templates)
|          |Ability to setup references to lists in a document       |Considering Support
|          |Ability to change a document's template through UI      |Support not planned
|          |Ability to create a template from a document      |Support planned
|**Editor Functionality:**          |Document Search    |Support planned        |
|          |Duplicating documents      |Support planned
|          |Ability to rename documents      |Support planned
|          |Persisting unsaved changes in a document      |Support planned
|          |Multi-user document-locking       |Support planned (in some capacity)
|          |Ability to create folders in the UI       |Considering support
|          |UI around creating a document that can have multiple templates       |Support planned
|          |Ability to create folders in the UI       |Considering support
|          |Previews (for non-react based sites)       |Support not planned
|**Git Providers:**          |GitLab    |Support planned        |
|         |BitBucket    |Considering support        |
|         |Azure DevOps    |Considering support        |
|         |Ability to connect via SSH key    |Considering support        |
