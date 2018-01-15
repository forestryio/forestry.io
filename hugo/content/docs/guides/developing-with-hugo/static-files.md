---
date: 2013-07-24 00:00:00 +0000
description: ''
related:
- title: "“Hugo Static Files Reference”"
  url: https://gohugo.io/themes/creation#static
tags: ''
title: Static Files
menu:
  guides:
    parent: hugo
weight: 4

---
In Hugo, any files/folders found in the `static/` directory in the root of your project or the root of your site’s theme will be made available at the root of your built site.

For example:
```
	.
	├── static/
	|   ├── image.jpg
	|   └── css/
	|        └── main.css
	└── themes/
	    └── example-theme/
	        ├── static/
	             └── script.js
```

Will be built as:
```
	.
	├── image.jpg
	├── script.js
	└── css/
	    └── main.css
```

If you use any build tools like Gulp or Grunt with Jekyll, please read our [Asset Pipeline Doc][1].

[1]:	/docs/developing-with-hugo/asset-pipeline
