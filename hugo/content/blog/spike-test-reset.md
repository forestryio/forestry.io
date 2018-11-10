---
title: Spike, Test, Reset
description: 'Spike, Test, Reset: How to refactor when you''re lost'
date: 2018-11-09 22:33:28 +0000
authors:
- Nolan Phillips
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
In the past two years, we have written a lot of code. Some of our code is elegant, efficient, easy to ready, and thoroughly tested. Other code is, well...

### The Code

```ruby
class Site
  # ...
  def create_menu_items_from_page(page)
    if self.hugo?
      menu_key = "menu"
    elsif self.jekyll?
      menu_key = "menus"
    end

    unless page.front_matter[menu_key].blank?
      page_menu = page.front_matter[menu_key]

      if page_menu.instance_of? String
        menu = self.menus.find_or_create_by(name: page_menu)
        menu.menu_items.create(front_matter: {name: page.front_matter["title"]}, position: nil, page: page)
      elsif page_menu.instance_of? Hash
        page_menu.each do |name, item|
          if item["name"].nil?
            item["name"] = page.front_matter["title"]
          end
          menu = self.menus.find_or_create_by(name: name)
          menu.menu_items.create(front_matter: item, position: item["weight"], page: page)
        end
      end
    end
  end
  # ...
end
```

The best thing I can say about this code, is that **it works and it hasn't been a problem for us**. But there's changes a-coming to Forestry that will make this little method troublesome. Here are a few of the things I have in mind:

* **Coupling:** So. Much. Coupling. The `Site` class is our main domain model, and this method deeply couples it to both Hugo's _and_ Jekyll's menu systems. 
* **Zero Test:** None. There is not one piece of information here that describes the expected behaviour of this method, or confirms that it works.
* **It's wrong:** One detail missing from this method, is that `jekyll-menus` supports both the `"menu"` and `"menus"` keys in the front matter of a page.
* **"unless"**: One of the strangest keywords I've come across. Maybe someday it will just seem natural to me.
* **Nesting, Looping Nesting:** end end end end end

Feeling ambitious, I decided to take this method on. My goal was to get this code well tested, pull the behaviour out of `Site`,  and create two utility classes–one for Hugo and one for Jekyll.

My initial plan was to write all the test before changing anything. This is usually a great strategy because refactoring is significantly safer when you have tests to catch your mistakes. During a recent _Learning Hour_, we watched the ["Untested Code"](https://www.destroyallsoftware.com/screencasts/catalog/untested-code-part-1-introduction) series by Gary Bernhardt. In these videos, Gary laid out a fantastic strategy for testing unfamiliar code. Unfortunately, I am slow after lunch and I couldn't figure out where to start. 

### Spike

My discipline broke and I dove right into refactoring. I extracted the `menu_key` logic; inverted that `unless`; reformatted; and pulled both sides of the `if/elsif` for creating menu items into their own methods. Suddenly it didn't seem so daunting:

```ruby
class Site
  def create_menu_items_from_page(page)
    page_menu = page.front_matter[menu_key]
    
    return if page_menu.blank?
  
    if page_menu.instance_of? String
      create_menu_item_from_string(page, page_menu)
    elsif page_menu.instance_of? Hash
      create_menu_item_from_hash(page, page_menu)
    end
  end
  
  def menu_key
    if self.hugo?
      "menu"
    elsif self.jekyll?
      "menus"
    end
  end
  
  def create_menu_item_from_string(page, page_menu)
    menu = self.menus.find_or_create_by(name: page_menu)
    menu.menu_items.create(
      front_matter: {name: page.front_matter["title"]}, 
      position: nil, 
      page: page
    )
  end
  
  def create_menu_item_from_has(page, page_menu)
    page_menu.each do |name, item|
      if item["name"].nil?
        item["name"] = page.front_matter["title"]
      end
      menu = self.menus.find_or_create_by(name: name)
      menu.menu_items.create(
        front_matter: item, 
        position: item["weight"], 
        page: page
      )
   end
end
```

### Test

With the code flattened out, and the actions abstracted a bit further, I started testing. Following Gary's wise advice, I started building up a spec sort of like this...

```ruby
describe Site
  describe "#create_menu_items_from_page(page)" do
    describe "when the menu is a string" do
      it "should create a menu item for that page"
      it "should create a menu with the value from the front matter"
      it "should not create a menu if it already exists"
    end
    
    describe "when page's front matter does not contain the menu key" do
      it 'should do nothing'
    end
    
    # and so on...
  end
end
```

### Reset

With the tests passing and my understanding of the code improved, I ran the most important step:

```bash
git checkout app/models/site.rb
```

The purpose of refactoring is to improve the design of your software without changing it's visible behaviour. Doing this without tests (especially after filling your belly with shawarma) is a risky game. By resetting the source code after getting the system under test, you validate that your tests actually describe the existing behaviour. 

### Summary

_Spike, Test, Reset_  is programming strategy for getting old code under test. It consists of three steps:

* **Spike:** Change the code until it's clear how it works.
* **Test:** Write as many tests as you can; and do not use stubs or mocks for any of the new methods/classes you made.
* **Reset:** Reset all changes to your source code, leaving only the tests.

This strategy is useful when you don't understand the code well enough to even write one test. You refactor until you (a) understand the code, and (b) know what test to write. Once you've done this, you put the test in place. Resetting makes sure that your new tests describe the _old code_. This is how you can confirm that you were refactoring during your spike, and not breaking things.

***

**Longer Feedback Cycle:** We don't really know if the tests we write are valid until after we reset. There's a chance everything will turn red if we made an error in logic half-way through refactoring.

***

Spike, Test, Reset, is like using the Sand of Time from Prince of Persia to run ahead, learn that the hallway contains a giant saw (which cut you in two), and than go back in time to navigate the hallway safely.

<!-- TODO: Remove the previous analogy. It's bad. -->