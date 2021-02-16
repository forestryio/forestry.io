---
title: Forestry Isn't Using My Timezone Setting!
weight: 7
layout: single
publishdate: 2018-10-24 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-10-24 04:00:00 +0000
images:
- "/uploads/2018/10/forestry-timezones.png"
menu:
  faqs:
    parent: FAQs
    weight: 4

---
![You may see a different timezone in your commit than you see in the Forestry UI.](/uploads/2018/10/forestry-timezones.png)

**We hear this one a lot, and the confusion is understandable.**

When you edit a date or time in Forestry, the times you input are based on the timezone reported by **your web browser.** You will see this feedback in the Forestry UI. For example, if you are in the Eastern time zone during daylight savings, you might see `8:00 AM -0500` as the time zone in the date field, because your current timezone is UTC-5.

However, when this data is saved in the site's git repo, it will be converted to **whatever timezone is set in your site settings.** So in our example, if the site is in the Atlantic time zone (1 hour ahead of Eastern), you will see the time zone saved in the file's front matter as `09:00:00 -0400`.

The most important observation we can make here is that **these are the same times, just in different time zones.** `08:00:00 -0500` is equivalent to `09:00:00 -0400`.

The upshot of this behavior is that anyone editing content on your Forestry site will be able to edit dates and times relative to their preferred time zone, but when the content is saved it is all normalized to the same timezone across the entire site.

**While we're on the subject,** I highly recommend watching this wonderful rant on the challenge of programming with time zones:

<iframe style="display: block; margin: 0 auto;" width="560" height="315" src="https://www.youtube.com/embed/-5wpm-gesOY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<div style="text-align: center;">🤷</div>
