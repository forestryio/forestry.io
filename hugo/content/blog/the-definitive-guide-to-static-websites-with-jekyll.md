+++
Categories = ""
banner = ""
date = "2017-03-28T14:01:34Z"
description = ""
draft = true
excerpt = ""
show_author = true
show_comments = true
show_signup = true
tags = ""
title = "The definitive guide to static websites with Jekyll"
twitter_card = ""
[[author]]
bio = "Marketer. Developer. Founder of <a href='https://desiredpersona.com/' target='_blank'>Desired Persona</a>"
img = "/blog/assets/images/colin-garvey-2.jpg"
link = "https://desiredpersona.com/about/"
name = "Colin Garvey"
twitter = "https://twitter.com/desiredpersona"
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
[Jekyll](http://jekyllrb.com/) is a simple, blog-aware, static site generator that was created by [Tom Preston-Werner](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) in October 2008 when he challenged himself to write his own blogging engine. The goal was to eliminate the complexity of other blogging platforms by creating a much easier workflow for writing.

 >I was tired of complicated blogging engines like WordPress.
 >
 > --- <cite>Tom Preston-Werner</cite>
 
Jekyll allows you to blog using a simple static HTML website, with all of the content hosted and version-controlled on GitHub. 

As developers we are often given the task of creating websites with blog functionality. Often it is also necessary to include a [client friendly content management system (CMS)](https://forestry.io/).

With Jekyll we can easily turn any normal static website in to a valid Jekyll project which makes Jekyll one of the easiest static site generators to get started with. I personally love how Jekyll gets out of your way and allows you to set everything up to suit your preferred workflow.

For example, let’s take this client website and turn it in to a Jekyll project.

```
<!DOCTYPE HTML>

<html>

<head>
	<meta charset="utf-8">
	<title>Company name</title>
</head>

<body>

	<header>
		<nav>
			<ul>
				<li>menu item</li>
			</ul>
		</nav>
	</header>
	
	<section>
		<h1>Main section</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus rhoncus urna in cursus. Ut lobortis feugiat magna a lacinia.</p>
	</section>

	<aside>
		<h2>About section</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</aside>

	<footer>
		<p>Copyright 2017 Company name</p>
	</footer>

</body>

</html>


```

## Install Jekyll dependencies

Open Terminal app and install [Homebrew](https://www.brew.sh) package manager for macOS.
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install Ruby using Homebrew.
```
brew install ruby
```

Check the Ruby version you installed.
```
ruby -v
```

Install bundler gem from [RubyGems](https://rubygems.org/). Bundler ensures that the Ruby gems you need are present in development, staging, and production.
```
gem install bundler
```

Go to the Mac app store and install Xcode if you haven’t already. Then install the Xcode Command Line Tools.
```
xcode-select --install
```

## Install Jekyll
Install Jekyll
```
gem install jekyll
```

Check Jekyll version
```
jekyll --version
```

Create a Jekyll site
```
jekyll new site-name
```

Change directory to view site
```
cd site-name
```

Run your Jekyll server
```
bundle exec jekyll serve
```

Preview your site locally at [http://localhost:4000/](http://localhost:4000/).
