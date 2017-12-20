+++
Categories = []
banner = "/blog/assets/images/code-bg-image-1-3.jpg"
date = "2017-02-13T10:47:46-05:00"
description = ""
excerpt = "The foundation for a hackable CMS"
link = ""
show_author = true
show_comments = true
show_signup = true
tags = []
title = "Customize the UI with Front Matter Templates"
twitter_card = "/blog/assets/images/help-text-1.png"
[[author]]
bio = "CEO and Co-founder of <a href='https://forestry.io' title='Forestry.io CMS'>Forestry.io</a>. Web developer, recovering freelancer."
img = "/blog/assets/images/Scott_Gallant.jpg"
name = "Scott Gallant"
twitter = "https://twitter.com/scottgallant"
[[suggested]]
link = ""
title = ""
[[suggested]]
link = ""
title = ""
[[suggested]]
link = ""
title = ""

+++
Does the following sound familiar?  You set up a WP site, hand it off to a non-dev, and then they point to some unused part of the UI and say:

<blockquote>
<p>"What does this do?"</p>
</blockquote>

To which you sheepishly reply:

<blockquote>
<p>"Oh, that doesn't do anything...just ignore it."</p>
</blockquote>

A CMS often feels like a work-around, designed for some other purpose.

## Front Matter Templates (FMTs)

FMTs allow you to customize the presentation of your UI fields in your CMS.

We're building a hackable CMS for Jekyll and Hugo sites. A CMS that allows you to strip out the non-essential clutter from your UI and [Front Matter Templates](https://forestry.io/docs/setting-up-a-site/front-matter-templates/) are the first step in this direction. This is handy if your pages use a lot of [front](https://jekyllrb.com/docs/frontmatter/) [matter](https://gohugo.io/content/front-matter/) fields.

## What you can do with FMTs

The following page makes use of a variety of front matter:

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

<span class="image-wrapper media-wrapper" contenteditable="false"></span>

<img src="/blog/assets/images/front-matter-templates-1.jpg" alt="Forestry front matter demo" class="wider-than-text">

```
---
title: Astronomy
layout: astronomy
order: 5
banner: /images/mars.jpg
bio: Astronomy compels the soul to look upward...
images:
- "/blog/assets/images/rover2.png"
- "/blog/assets/images/earth.jpg"
- "/blog/assets/images/rocket.jpg"
- "/blog/assets/images/aurora.jpg"
- "/blog/assets/images/nebula.jpg"
- "/blog/assets/images/rover.jpg"
- "/blog/assets/images/galaxy.jpg"
- "/blog/assets/images/rover3.png"
email: astronomy@gmail.com
phone: (555) 555-5555
permalink: /astronomy/

---
Astronomy compels the soul to look upward, and leads us from this world to another.
Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program.

```

With Front Matter Templates, you can do things like:

### Hide fields from your editors

![/blog/images/hidden-field-3.gif](/blog/assets/images/hidden-field-3.gif)

### Change the field type in the UI

For example, change type from a list of tags to an image gallery. [See full list of available fields](https://forestry.io/docs/setting-up-a-site/front-matter-templates/#field-types).

![change field type](/blog/assets/images/field-type-1.gif)

### Required fields

![set field as required](/blog/assets/images/required.gif)

### Reorder the fields in the UI

![reorder front matter fields](/blog/assets/images/reorder-fields-1.gif)

### Add help text

![add help text to front matter fields](/blog/assets/images/help-text.png)

### Set default values and much more.

![set a default value](/blog/assets/images/default-values.png)

## What's Next?

This is just the beginning. Soon we'll be adding more field types and more customizability.

### Coming soon: image resizing and cropping

![/blog/images/image-upload-4.gif](/blog/assets/images/image-upload-4.gif)

### Coming soon: advanced UI fields

Like color pickers, google map location picker, etc.

![/blog/images/color-picker-forestry.png](/blog/assets/images/color-picker-forestry.png)

### Coming soon: related fields

Select data from your elsewhere in your site. For example, choose a related post, or choose an author from a data file.

## Conclusion

[Front Matter Templates](https://forestry.io/docs/site-configuration/front-matter-templates/) allow you to customize the presentation of the fields in your CMS.  You can set up a template to be used for a single page or for a collection of pages (posts, projects, etc).  Customize the UI so non-developers aren't confused.

As always, if you have any thoughts or feedback, we'd love to hear from you!