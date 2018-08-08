---
aliases:
- "/docs/managing-content/menus/"
title: Menus
weight: 7
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Editing
    weight: 6

---
Menus allow content editors to easily manage existing menus in your site, such as site navigation and sidebars using a simple drag-and-drop interface.

![](/uploads/2018/01/22.png)

## Adding New Menus

Forestry will automatically display menus found in your site, and allow content editors to manage menu items from existing content in your site, or to external links on the internet.

### Using with Hugo

The Menu Manager integrates directly with Hugo's menu system. See [Hugo's documentation](https://gohugo.io/content-management/menus/) on setting up your first menu.

Menu entries linking to existing content on your site will be added to the front matter of that content.

Menu entries with external links will be added to your Hugo site config file.

### Using with Jekyll

The Menu Manager integrates directly with the [Jekyll Menus plugin](https://github.com/forestryio/jekyll-menus).

Menu entries linking to existing content on your site will be added to the front matter of that content.

Menu entries with external links will be added to your menus data file located at `/data/menus.yml`.

## Managing Menus

The Menu Manager allows you to add, reorganize, and remove menu items from existing menus.

![](/uploads/2018/01/27.png)

### Adding Menu Items

1. Navigate to the _Menus_ section of your site, found in the sidebar
2. Click the menu you wish to update
3. Click _Add Item_
4. Provide a name for the menu item, and choose _Internal_ to select an existing piece of content, or _External_ to create a menu item to a publically accessible URL.

### Modifying Menu Items

1. Navigate to the _Menus_ section of your site, found in the sidebar
2. Click the menu you wish to update
3. Click settings icon to the right of the menu item you wish to edit

### Deleting Menu Items

1. Navigate to the _Menus_ section of your site, found in the sidebar
2. Click the menu you wish to update
3. Click trash icon to the right of the menu item you wish to delete

### Reorganizing Menus

Menus can easily be reorganized using a drag-and-drop functionality. To reorganize a menu, drag a menu item from the drag indicator to the left of the menu item, and drop it in its new position.

![](/uploads/2018/01/26.png)

If your site supports them, sub-menus can easily be created by dragging a menu item underneath another menu item! Give it a try!