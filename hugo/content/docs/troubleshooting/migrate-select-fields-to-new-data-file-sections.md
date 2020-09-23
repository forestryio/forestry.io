---
title: Migrate Select Fields to New Data File Sections
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
authors: []
publishdate: 2018-09-13 03:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
layout: single
date: 2018-09-13 09:37:36 +0000
headline: ''
description: ''
textline: ''
categories: []
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu:
  troubleshooting:
    weight: 1
    parent: Troubleshooting

---
<!--With our recent update for Data Files we allow users to have full control over their Data Files in their Sidebar. To make this change happen we need to ask our users to update their existing sites. A guide on how to update the Sidebar to show Data Files can be found [here](/blog/custom-configuration-for-data-files/)-->
If you're using Data Files as a source for your Select Fields there is an additional step to migrate successfully to the new handling of Data Files.

To update your data source with Forestry you can navigate to a relevant Front Matter Template in your Front Matter Settings and click on the <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="2"><path d="M7.75 22.149L12 19.48l4.25 2.669a11.029 11.029 0 0 0 4.088-2.973l-1.224-4.865 3.85-3.216a10.933 10.933 0 0 0-1.561-4.807l-5.006-.34-1.87-4.656A11.032 11.032 0 0 0 12 1c-.87 0-1.715.1-2.527.292l-1.87 4.657-5.006.339a10.933 10.933 0 0 0-1.56 4.807l3.85 3.216-1.225 4.865a11.029 11.029 0 0 0 4.087 2.973z"></path><circle cx="12" cy="12" r="3"></circle></g></svg> next to the Select Field.

![](/uploads/2018/09/field-editor-new-data-files-handling.png)

At the bottom of the Field Editor you now have to set your `Source Type` to `Document Fields`.

In the following field you set the `Section` to the section label that holds your data files.

The remaining Fields should be familiar and might not need any updating.

If you need any assistance, feel free to reach out via our support and the team will get back to you as soon as possible.