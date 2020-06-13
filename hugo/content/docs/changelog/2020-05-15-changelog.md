---
authors:
- team forestry
date: 2020-05-15
title: 2020/05/15 Changelog
summary: Copy media path, cleanup filenames, YAML by default, and bug fixes!

---
A bunch of small fixes and small additions to make the editor's life a little bit easier.

### Enhancements

* **Copy media path**: editors can now copy the relative path to a media. Select a media in the library and click _copy URL_.   
  Pretty convenient when you need to link to a PDF file or get a media path to insert in a text field, or a shortcode for instance. 😅
* **Better search on select fields:** when you type to search in a select field, it returns the expected entries without you have to type the whole file path 🕵️‍♀️
* **Cleanup media filenames**: Forestry now removes all spaces and accents on a media upload, to be compatible with the CommonMark specification. Should help sites using Hugo > 0.60 that weren't showing images with spaces in their filenames.
* **Cleanup document filenames**: Spanish, Danish, Polish, French, Russian, and editors from all over the world can now safely create new documents without worrying about having accents in the generated filename. 

### Fixes

* **Better document loading**: we increased the resources available to be able to respond to the growing number of network requests.
* **YAML front matter by default**: Forestry will now write YAML front matter instead of TOML when you use "_other"_ static site generators like Pelican for instance.