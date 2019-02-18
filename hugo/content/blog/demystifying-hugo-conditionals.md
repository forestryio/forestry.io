---
title: Demystifying Hugo Conditionals
description: ''
date: 2018-09-28 16:00:00 +0000
authors:
- DJ Walker
publishdate: 2018-09-28 16:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/09/roman-mager-59976-unsplash.jpg"
categories:
- Hugo
- Frontend-Friday
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []
menu: []

---
When we published our [comparison of Jekyll and Hugo](https://forestry.io/blog/hugo-and-jekyll-compared/), we got a lot of flak from Hugo die-hards for suggesting that Jekyll had a more intuitive templating syntax. While the intuitiveness of a particular language is somewhat subjective, criticism of Hugo’s template syntax frequently comes up in discussion with other developers.

Hugo is a great choice for a static site generator: it’s compiled into a static binary, so it’s easy to install on any system, and [it’s _fast_](https://forestry.io/blog/hugo-vs-jekyll-benchmark/). Don’t let the learning curve turn you off: building sites with Hugo can be a very enjoyable experience! In this article, I’ll discuss one of the core concepts with Hugo templating, allowing you to dive into a Hugo project with confidence.

## A Functional Approach

One of the more abstruse aspects of templating in Hugo is that _operators are expressed as functions_.

For example, the following code in Jekyll:

    {% if a == b %}
    ...
    {% endif %}

Would be expressed like this in Hugo:

    {{ if eq a b }}
    ...
    {{ end }}

This will feel uncomfortable to some people, but there is nothing wrong with this approach. Technically, `a == b` is also an expression of a function. Written `a == b`, this function is using [infix notation](https://en.wikipedia.org/wiki/Infix_notation). We can write the same function in _prefix notation_ by writing `== a b`. `==` is the name of the function, and `a` and `b` are the parameters. Hugo’s template functions don’t use symbols; instead, `eq` is the name of our equality function.

Put another way, `a == b` is little more than **syntactic sugar**!

### Parentheses, But Not Where You Think

By this point, you have no doubt noticed (and may be disturbed by the fact) that our `eq a b` function doesn’t contain parentheses. In all likelihood, the languages you’re familiar with will wrap function parameters in parentheses, like this: `eq(a,b)`.

If you strictly follow the same notation for all of your function expressions, the extra symbols become superfluous. Consider the following JavaScript example:

    if (a == b && isNaN(c)) {
      // ...
    }

Infix and prefix notation together? _How unintuitive!_ We _need_ the extra symbols in there to make sense of this.

What if we expressed this in a Hugo template? (_Note: Hugo doesn’t have an_ `isNan` _function; it’s just included here for parity with the JS example_)

    {{ if and (eq a b) (isNaN c) }}

That’s right, `and` is a function just like the other operators, and we of course write it prefix instead of infix. Notice as well that we added parentheses to our code, but they wrap the _entire function expression_, not just the parameters. This is because functions can have a variable number of arguments, and without the parentheses, it wouldn’t be clear which parameters should be passed to which function.

## Pick Your Poison

This might be the crux of the disagreement: what is “intuitive” depends on one’s own experience. Developers who cut their teeth on imperative languages, using infix notation inside of conditionals, will find Hugo’s strict use of prefix notation and limited function set to be uncomfortable and confusing. Developers with a background in functional languages may have an easier time working with Hugo.

That’s not to say that templates in Hugo are perfect. It’s not currently possible to include line breaks in template expressions, making it difficult to write complex conditionals while keeping them easy to understand. However, by deliberately limiting the ways that conditionals can be expressed, developers can at least rely on a few simple rules to reliably unpack template conditionals in order to understand them.

Just remember that all operators are:

* written as **functions**, and
* written in **prefix notation**.

If you keep those things in mind, you should be able to tackle conditionals easily. Now go forth and build a great static site!

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;">
    <h2>Join us every Friday :date:</h2>
    <p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p>
    <p><strong>Last week:</strong> We explored how to <a href="https://forestry.io/blog/using-json-configuration-with-vuepress/">use a JSON config file with VuePress</a>.</p>
</div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=18096215">Discuss on Hacker News</a>