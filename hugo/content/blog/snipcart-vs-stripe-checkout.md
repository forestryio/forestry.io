+++
Categories = []
banner = "/blog/assets/images/stripe-snipcart-1.png"
date = "2016-09-25T16:50:00Z"
description = "Simple E-commerce with Jekyll, Stripe Checkout and Snipcart"
draft = true
excerpt = "Simple E-commerce with Jekyll, Stripe Checkout and Snipcart"
show_author = true
show_comments = true
show_signup = true
tags = []
title = "Why Shopify is Overkill For Your Next E-commerce Site "
twitter_card = "/blog/assets/images/stripe-snipcart-1.png"
[[author]]
bio = "Marc Boisvert is a frontend web developer and UX architect at <a href=\"https://yokai.io/\">yokai</a>. When he's not brewing some delicious CSS goodness he likes to talk about cats, politics and tech. You can find him on Twitter at <a href=\"https://twitter.com/yokaicorp\">@yokaicorp</a> or on the web at yokai.io"
img = "/blog/assets/images/marc-3.jpg"
name = "Marc Boisvert-Dupras"
twitter = "https://twitter.com/yokaicorp"
[[suggested]]
link = "https://forestry.io/blog/post/e-commerce-with-jekyll-and-snipcart/"
title = "E-commerce with Jekyll and Snipcart - Marc Boisvert-Dupras"
[[suggested]]
link = "https://forestry.io/blog/post/snipcart-vs-stripe-checkout/"
title = "E-commerce with Jekyll and Stripe Checkout - Marc Boisvert-Dupras"
[[suggested]]
link = "https://forestry.io/blog/post/forestry-gitlab/"
title = "Forestry + GitLab - Jordan Patterson"

+++
If you're developing an online store, you'll know that these days there are more options than ever to handle payments. It's a classic example of how multiple standards proliferate[^1]. So which one should *you* use?

<img src="/blog/assets/images/standards.png" class="center">

A popular solution for online stores is to bulid the front-end with a static site generator (like the GitHub Pages favorite,

<a href="https://jekyllrb.com/">Jekyll</a>).  Using a static site generator brings

<a href="https://forestry.io/blog/post/choose-static/">many advantages over heavier solutions like WordPress or Shopify</a> but how does one integrate an online payments solution on a static platform? Thankfully, there's a new breed of integrated payment companies like

<a href="https://snipcart.com/">Snipcart</a> and

<a href="https://stripe.com/">Stripe</a> that provide all you'll need to make your own store.## Stripe Checkout Vs Snipcart for your Jekyll

Although these platforms seemingly provide similar features and integration, they have key differences that will define which one is the right solution for you. Let's look at some of these differences, starting with how you can accept payments.## Payment Gateways* <p>Snipcart allows you to accept payments from all the major payment gateway providers (PayPal, Authorize.net, PaySafe, etc... And yes, even Stripe).</p>*
  <p>In contrast, Stripe allows you to accept payments through credit cards directly and acts as the gateway itself. If mobile payments are important to you, Stripe offers great integration with Apple Pay and Android Pay. They also offer a few other payment gateways like Bitcoin, Alipay and ACH.</p>

**Takeaway:** Snipcart allows for more flexibility in regards to the choice of payment gateways offered. They also support PayPal which can be very important to some businesses while Stripe does not.## Front-end website integration

The largest difference betweent these two platforms is that Snipcart provides a full shopping cart, where as Stripe Checkout just provides a one-off payment overlay.* Snipcart's checkout window uses by default the `snipcart.css` theme which doesn't necessarily integrate well with all colour schemes/website designs. You can however roll out your own theme quite easily and customize the look to your heart's content. This means there is some additional configuration needed and will require some mild CSS chops.
<img src="/blog/assets/images/snipcart.gif" class="large center">
<div style="text-align: center; display: block; font-size: 14px; ">Example from <a href="https://cestbeau.co" target="_blank">cestbeau.co</a></div>
<img src="/blog/assets/images/stripe.gif" class="large center">
<div style="text-align: center; display: block; font-size: 14px; ">Example from <a href="https://www.masteringmodernpayments.com/" target="_blank">masteringmodernpayments.com</a></div>

**Takeaway:** Both platforms offer great front-end solutions targeted at slightly different audiences. Stripe's Checkout is a no-nonsense, easy to use out-of-the-box experience aimed at everyone with no particular configuration required.

With Snipcart you have more flexibility by default which allows you to get hands-on with the styling easily however you will need some CSS knowledge and a bit more time to make everything look how you want it to.## Fees* <p>Snipcart offers two different plans, Standard and "I am special". The standard plan charges a 2% fee per transaction <strong>in addition</strong> to any fees incurred by the choice of payment gateways. If your total sales for the month are under $500, the 2% is replaced by a $10 fee. The "I am special" plan offers fixed pricing for large businesses.</p>*
  <p>Like Snipcart, Stripe offers two distinct plans, Pay as you Go and Enterprise. The Pay as you Go plan charges a 2.9% fee + $0.30 with no other fees associated for payment gateways.</p>

For easy visualization, we created a small table to illustrate each platform's pricing and fees.
<table class="pure-table">
<thead>
<tr>
<th>Transaction Amount</th>
<th width="35%">Snipcart Fees</th>
<th width="35%">Stripe Fees</th>
</tr>
</thead>
<tbody>
<tr>
<td>$10 <br><div style="font-size: 13px; color: #666;">(Credit Card)</div></td>
<td><strong>$0.35 </strong><br><div style="font-size: 13px; color: #666;">2% Snipcart fee + 2.9% + $0.30 per transaction (using PayPal)</div></td>
<td><strong>$0.33</strong><br><div style="font-size: 13px; color: #666;">2.9% + $0.30 per transaction</div></td>
</tr>
<tr>
<td>$100 <br><div style="font-size: 13px; color: #666;">(Credit Card)</div></td>
<td><strong>$5.20 </strong><br><div style="font-size: 13px; color: #666;">2% Snipcart fee + 2.9% + $0.30 per transaction (using PayPal)</div></td>
<td><strong>$3.20</strong><br><div style="font-size: 13px; color: #666;">2.9% + $0.30 per transaction</div></td>
</tr>
</tbody>
</table>

**Takeaway:** Both platforms offer compelling pricing options however Stripe may be slightly cheaper in the long run depending on your choice of payment gateway and amount of sales.## Admin Dashboard
<img src="/blog/assets/images/snipcart-3.png" alt="Snipcart's Dashboard">* Snipcart's dashboard features a dual pane layout with all your store related operations on one side and all your account settings on the other. Small nitpicking here but I find that the dual pane system requires more clicking and feels a bit clunky.
<img src="/blog/assets/images/stripecheckout-1.png" alt="Stripe's Dashboard">* Stripe's on the other hand makes use of a simple and clean unified layout reminiscent of a macOS application. A notable feature I personally find very useful is the global search bar which makes it incredibly easy to sift through all your customers, orders, etc...

**Takeaway:** Snipcart and Stripe have excellent administrator dashboards with quick and easy access to all the common features you'd expect. Choosing which one you like better is a matter of personal preference so I recommend taking a close look at the two solutions. Personally, I think Stripe's solution is slightly superior overall in terms of design and user experience.## Setup* <p>Snipcart's installation is incredibly easy and straightforward. Simply link their <code>snipcart.min.js</code> script and optionally the default <code>snipcart.min.css</code> theme before the <code>&lt;head&gt;</code> closing tag of your website and you are ready to go! Don't forget to include your API key with the <code>snipcart.min.js</code> script. Note that Snipcart also makes use of jQuery, so make sure you have it included in your page.</p>*
  <p>In contrast, setting up Stripe is a bit more time consuming since it requires the use of a back-end server to accept payments. If you do not already have a VPS, you can use a PaaS like Heroku to host your code for free, keeping setup time and costs down.</p>

**Takeaway:** All-in-all, Snipcart is most definitely the easiest to install out of the two products. The fact the is does not require any external server or backend gives it a clear advantage over Stripe.

Check out our example integration guides below for both

<a href="#!">Snipcart</a> and

<a href="#!">Stripe</a> to get a feel for which solution you might prefer.## Support & Documentation

Here, Snipcart and Stripe have comparable offerings. Both services offer live chat with fast response from the support staff. I've found the documentation easy to navigate through and well written with plenty of code examples.

One thing I liked about Stripe is their searchable knowledge base. Snipcart only offers a regular F.A.Q. but once again, this is only personal preference and shouldn't affect your decision.## Conclusion
<hr>

Overall, Stripe seems to be better if you're selling one-off products and you don't mind setting up a back-end server.  If you need a full shopping cart where you can add and remove products and you don't mind paying the additional fee Snipcart might be more for you.  Here's a quick summary of our comparison:
<table class="pure-table">
<thead>
<tr>
<th>Feature</th>
<th>Snipcart</th>
<th>Stripe</th>
</tr>
</thead>
<tbody>
<tr>
<td>Payment Gateways</td>
<td>Many to choose from, very flexible.</td>
<td>Mainly credit card.</td>
</tr>
<tr>
<td>Frontend</td>
<td>Customizable but requires some setup.</td>
<td>Simple defaults, non-customizable.</td>
</tr>
<tr>
<td>Pricing</td>
<td>Standard fee of 2% on top of payment gateway fees.</td>
<td>Standard 2.9% fee on transactions. No other fees associated.</td>
</tr>
<tr>
<td>Admin Dashboard</td>
<td>Access to all the common features. A bit clunky to use.</td>
<td>Clean, searchable interface with easy access to all the features.</td>
</tr>
<tr>
<td>Setup</td>
<td>Plug-and-play setup experience. Can be entirely hosted on GitHub/Gitlab Pages.</td>
<td>Relatively easy to setup. Requires the use of an external server to handle payment requests.</td>
</tr>
<tr>
<td>Support</td>
<td>Good, in-depth information. Again, a bit clunky to navigate through,</td>
<td>Excellent documentation covering all topics. Has a handy search bar to locate information quickly.</td>
</tr>
</tbody>
</table>

Snipcart offers great flexibility with a wide variety of payment gateways and lets you customize the look and feel of your checkout experience. If having PayPal as a payment option is core to your business then Snipcart will likely be your best option. Integration is also arguably easier than Stripe's so if time is of the essence, Snipcart can be set-up very quickly and easily.

Stripe provides a clean and simple checkout flow however it offers little in the way of customization or payment gateways. If you plan on accepting credit cards or Bitcoins as your sole method of payment, then Stripe is a great option. Since Stripe requires a server to generate tokens, it's integration might be a little more time consuming and will require maintenance in the long term.### Footnotes

[^1]:

<a href="https://xkcd.com/927/">xkcd: Standards</a>
