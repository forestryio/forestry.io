---
title: Spike, Test, Reset
description: 'Spike, Test, Reset: How to refactor when we''re lost'
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

The usual process for dealing with untested code is

1. Relearn how the code works
2. Write the tests we should have wrote a year ago
3. Refactor

With a clear head this process is fairly straightforward, but sometimes learning how the code works is just too hard.

### Spike-Test-Reset

_Spike, Test, Reset_  is programming strategy for getting old code under test. This strategy is useful when we don't understand the code well enough to even write a single test. It consists of three steps:

1. **Spike:** Change the code until it's clear how it works.
2. **Test:** Write as many tests as we can around the refactored code.
3. **Reset:** Reset all changes to we source code, leaving only the tests.

During the _Spike,_ refactoring is our learning tool. By extracting functions, renaming variables, flattening scopes, etc. we will make the code easier to understand. To move on, all we need is one understandable code path.

Writing tests here can still be tricky. Do not mock or stub any of the functions or classes we have extracted. The tests using those mocks/stubs will be fragile, and will definitely break once we reset. With our tests in place, it's time to reset.

Why is resetting so important? The goal is to get the old code under test so we can  safely refactor. The changes we make in the _Spike_ are made for the sake of getting a better understanding of the code. Resetting is the point at which we confirm that understanding. If the tests fail after we reset, then we know we made a mistake. 

The _Spike-Test-Reset_ strategy is way to push forward even when we're lost. We reduce the risk of doing so not by writing tests first but by resetting changes after. While I would not often recommend this approach, it is another useful tool to add to your toolbox. 