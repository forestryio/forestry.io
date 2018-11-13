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
Refactoring is one of the most important skills of software development. [DevOps Research and Assessment](https://devops-research.com "DevOps Research") has shown that delivering working software sooner and more frequently is correlated with positive organizational outcomes. Delivering quickly and frequently requires we defer design decisions and be able to easily modify existing code. To do these things well, we must know how to safely refactor.

Regression (i.e. a break existing behaviour) is the main risk of refactoring. We can mitigate this risk by checking that our code still works after each change. However as we increase the scope of the refactored code, the number of scenarios impacted increases non-linearly and testing becomes more difficult. By writing high-quality automated tests, we can drastically reduce the overhead of checking for regressions.

Ideally, we write these tests around the same time we write the code. Whether we should write the tests first or the code first is [up for debate](). Unfortunately this doesn't always happen. External pressures and lax discipline mean we leave our tests unwritten. Eventually we'll need to change this code, and it's a good idea to add the tests when we do.

### Dealing with Untested Code

The usual process for dealing with untested code is

1. Relearn how the code works
2. Write the tests you should have wrote a year ago
3. Refactor

With a clear head this process is fairly straightforward, but sometimes learning how the code works is just too hard.

### Spike-Test-Reset

_Spike, Test, Reset_  is programming strategy for getting old code under test. It consists of three steps:

* **Spike:** Change the code until it's clear how it works.
* **Test:** Write as many tests as you can; and do not use stubs or mocks for any of the new methods/classes you made.
* **Reset:** Reset all changes to your source code, leaving only the tests.

This strategy is useful **when you don't understand the code well enough to even write one test**. You refactor until you (a) understand the code, and (b) know what tests to write. Once you've done this, you put the tests in place. Having tests is a big improvement, but we don't know if they're valid. To make sure our tests are correct, we reset the source code. If they all still pass, we can be pretty sure that our _new tests_ describe the _old code_. Without the reset we have no idea whether we were refactoring during the spike, or just breaking things.

***

**TODO: I'm not sure if the examples below adds enough to the article. Maybe I'll leave them for now and write another article if necessary.**

***

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

The above code shows how Forestry extracts menu items from a page's front matter. The best I can say about this code, is that **it works and it hasn't been a problem for us**. But there's changes coming to Forestry that will make this little method troublesome. Here are a few of the things I have in mind:

* **Coupling:** The `Site` class is our main domain model, and this method deeply couples it to both Hugo's _and_ Jekyll's menu systems.
* **Zero Test:** There is not one piece of information here that describes the expected behaviour of this method, or confirms that it works.
* **It's wrong:** One detail missing from this method, is that `jekyll-menus` supports both the `"menu"` and `"menus"` keys in the front matter of a page.
* **"unless"**: One of the strangest keywords I've come across. Maybe someday it will just seem natural to me.
* **Nesting, Looping Nesting:** end end end end end

Feeling ambitious, I decided to take this method on. My goal was to get this code tested, pull the behaviour out of the `Site` class, and create two utility classes–one for Hugo and one for Jekyll. Unfortunately a large lunch left me dazed, so my usual strategy of learn/test/refactor wasn't working out.

### Spike

My discipline broke and I dove right into refactoring. I extracted the `menu``_key_` _logic; inverted that_ `_unless_`_; reformatted; and pulled out both sides of the_ `_if/elsif_` _for creating menu items. Suddenly, `create_menu_item` it didn't seem so daunting:

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

With the code flattened out, and each action abstracted a bit further, I started testing. 

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
    
    # etc.
  end
end
```

### Reset

With the tests passing and my understanding of the code improved, I ran the most important step:

```bash
git checkout app/models/site.rb
```

The purpose of refactoring is to improve the design of your software without changing it's visible behaviour. Doing this without tests (especially after filling your belly with shawarma) is a risky game. By resetting the source code after getting the system under test, you validate that your tests actually describe the existing behaviour.