---
title: Beta Testers
weight: 100
publishdate: 2018-11-21 04:00:00 +0000
expirydate: 2020-01-01 04:00:00 +0000
date: 2018-11-21 04:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Other
    weight: 6

---
From time to time, we will invite some of our users to test new additions to the platform.

## How to Become a Beta Tester

If you are interested in participating in beta testing, [join our Slack community](/blog/join-our-slack-community/). We will announce beta features there, and coordinate feeback in a dedicated channel for the participants of the beta.

## Documentation For Beta Features

We are using LaunchDarkly to control feature access for users of the app. We may also include prototype documentation on our website to help guide our beta testers. This documentation will be gated behind the same LaunchDarkly access control.

### Ensuring You Have Access to Beta Documentation

To make sure you have access to any documentation that might help you as a beta tester, you should verify that you:

1. Are logged in to the app in the same browsing session that you are using to view the docs. You should see your name in the top navigation next to the "Dashboard" button.
2. Are not blocking communication with LaunchDarkly, such as via an adblocker.

If you are using an adblocker, you will need to whitelist communication with `events.launchdarkly.com`. For users of the uBlock Origin extension, visit your uBlock Dashboard and add the following line under **My filters**:

    @@events.launchdarkly.com/*
