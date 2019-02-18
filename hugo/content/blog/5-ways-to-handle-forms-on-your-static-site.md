---
title: 5 Ways to Handle Forms on Your Static Site
description: ''
date: 2018-06-15 03:30:13 -1100
authors:
- DJ Walker
publishdate: 2018-06-15 03:30:00 -1100
expirydate: 2030-01-01 04:00:00 +0000
headline: ''
textline: ''
images:
- "/uploads/2018/06/pencil-and-envelopes.jpg"
categories:
- Beyond Static
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
When I first started exploring the potential of static sites, I was attracted by their speed and simplicity. I knew these benefits came at a cost, however: since static sites can’t run backend code, there are limits to what you can accomplish with a static solution.

I no longer see things this way.

JAMStack is not about sacrificing features for the sake of a performant, easy to maintain website. Rather, it is about re-evaluating how much of your desired functionality should be delegated to your web frontend. For example, does the same software that distributes your HTML contact form _also_ need to handle submissions from that form?

In this post I will explore five options for handling form submissions with your static site:

1. [Google Forms](#google-forms-https-www-google-com-forms-about)
2. [FormKeep](#formkeep-https-formkeep-com)
3. [Netlify Forms](#netlify-forms-https-www-netlify-com-docs-form-handling)
4. [Formspree](#formspree-https-formspree-io)
5. [FormPlug](#formplug-https-danielireson-github-io-formplug-serverless)

The options presented here range from fully-managed solutions for lean teams, all the way up to self-hosted alternatives for those who want full control.

## [Google Forms](https://www.google.com/forms/about/)

![](/uploads/2018/06/googleforms.png)

Google Forms provides a clean, intuitive form builder UI for creating forms. These forms can then be embedded on your website in an `iframe` tag. Submissions are visible in the form dashboard under the **Responses** tab.

**Best Feature:** Easy-to-use form builder.

**Biggest Downside:** Doesn’t integrate nicely with your site. Can’t retrofit existing forms, need to re-create them in Google Forms.

### Spam Countermeasures

Google implements reCAPTCHA for forms that collect email addresses.

### Extensibility

Google has a healthy library of add-ons for forms, and also lets you add functionality to your forms via [Google Apps Scripts](https://developers.google.com/apps-script/overview). It’s also easy to export your responses to google sheets for further processing.

### Using Google Forms

Navigate to the [Google Forms dashboard](https://docs.google.com/forms/) and select a form at the top to create a new form. Use the UI to create your form. When your form is finished, click the **Send** button and navigate to the `<>` tab to view the embed code. Copy this code and paste it anywhere in your document that you want the form to appear.

## [FormKeep](https://formkeep.com/)

![](/uploads/2018/06/formkeep.png)

FormKeep is another SaaS offering to handle your form submissions. FormKeep integrates easily with your existing forms, only requiring you to change the `action` attribute in the form HTML. You can view each form’s submissions in your FormKeep dashboard.

**Best Feature:** Lots of integration options.

**Biggest Downside:**  No free tier, only limited free trials.

### Spam Countermeasures

FormKeep uses a filtering strategy to automatically detect spam. You can also add a reCAPTCHA field to your forms. Further reading: [How does FormKeep protect from spam?](https://intercom.help/formkeep/frequently-asked-questions/how-does-formkeep-protect-from-spam)

### Extensibility

FormKeep allows you to add webhooks that will be called when submissions are recieved, and integrates with a handful of services including Zapier.

### Using FormKeep

After creating your FormKeep account, log in to view your forms and submissions. You can navigate between forms or add a new form from the dropdown in the top right. Navigate to the **Setup** tab to get the unique URL for that form. You will hook your existing HTML form up to FormKeep by adding this  URL to your form’s `action` attribute.

Before:

    <form method="POST">
      <label>Comments:
        <textarea name="comments"></textarea>
      </label>
    </form>

After:

      <form method="POST" action="https://formkeep.com/f/$UNIQUE_FORM_KEY">
      <label>Comments:
        <textarea name="comments"></textarea>
      </label>
    </form>

## [Netlify Forms](https://www.netlify.com/docs/form-handling/)

![](/uploads/2018/06/netlifyforms.png)

Netlify offers a unique approach for integrating forms into your site. There is no JavaScript required, and your form does not post to a different domain: you simply add a `netlify` attribute to your `<form>` tag, and you can start receiving submissions in your Netlify dashboard. This is possible because Netlify parses your site’s HTML at deploy time, so they can identify your forms and ensure the necessary form handling code is present in the site’s hosting environment. The downside of this is that this feature is only available if you are using Netlify’s platform to deploy and host your static site.

**Best Feature:** Easy integration and highly extensible

**Biggest Downside:** Only available if you’re already using Netlify for hosting and deployment. Free tier limited to 100 submissions per month.

### Spam Countermeasures

Netlify runs a spam filter against all submissions and will display a captcha only to submissions that it identifies as possible spam.

You have the option of forcing all users to fill out a captcha by including a `div` with the `netlify-recaptcha` attribute. Netlify will populate this div with the captcha field.

Netlify also supports a [honeypot field](https://www.netlify.com/docs/form-handling/#honeypot-field). Add the name of this field to your form via the `netlify-honeypot` attribute.

### Extensibility

Netlify’s form solution is highly extensible. Forms and submissions are accessible via an API, you can add webhooks to be triggered on new submissions, and they are currently beta testing an [integration with Zapier](https://zapier.com/developer/invite/27442/6c1b6a3bbcf86c07c0a0f7dfe2d0327c/?utm_source=Netlify+and+BitBalloon&utm_campaign=7897bcd976-Netlify_Newsletter_8_Zapier&utm_medium=email&utm_term=0_200b533eb5-7897bcd976-).

### Using Netlify Forms

Just add the `netlify` attribute to your form, and ensure your form has a `name`. For the following example, we will also demonstrate adding a honeypot field.

Before:

    <form method="POST">
      <label>Comments:
        <textarea name="comments"></textarea>
      </label>
    </form>

After:

    <form name="comments" method="POST" netlify-honeypot="hpfield" netlify>
      <div class="hpot">
        <label>Leave this field empty: <input name="hpfield"></label>
      </div>
      <label>Comments:
        <textarea name="comments"></textarea>
      </label>
    </form>
    
    // style.css
    .hpot {
      display: none;
    }

## [Formspree](https://formspree.io/)

![](/uploads/2018/06/formspree.png)

Of all the options presented here, Formspree provides the shortest path to adding submission handling to an existing form. Formspree works by receiving submissions at `https://formspree.io/$YOUR_EMAIL` and will forward the submission data to the email address specified in that URL. Unfortunately, this means that the only way to view submissions is through your email inbox, though users who register and upgrade to the Gold plan can view their submissions in Formspree’s dashboard.

Formspree is also an open source project ([view on Github](https://github.com/formspree/formspree),) and they provide instructions on how to run your own instance of Formspree on Heroku.

**Best Feature:** Open source, can run your own instance on Heroku

**Biggest Downside:** Submissions are only persisted in email (for free plan)

### Spam Countermeasures

Formspree uses reCAPTCHA to identify spam submissions. You can also add a honeypot field to your form with the name `_gotcha`.

### Extensibility

Formspree doesn’t offer any extension opportunities out of the box.

### Using Formspree

You can start using Formspree without even visiting their website. Just point your form to `https://formspree.io/$YOUR_EMAIL` where `$YOUR_EMAIL` is the email you want submissions to be sent to. Once the form is configured correctly, submit it once. You should then receive an email from Formspree asking you to confirm your email address.

{{% tip %}}
If you use the same form on multiple URLs, you will have to perform this confirmation step for each URL.
{{% /tip %}}

Once again we will demonstrate adding a honeypot field in the below example.

Before:

    <form method="POST">
      <label>Comments:
        <textarea name="comments"></textarea>
      </label>
    </form>

After:

    <form method="POST" action="https://formspree.io/you@example.com">
      <div class="hpot">
        <label>Leave this field empty: <input name="_gotcha"></label>
      </div>
      <label>Comments:
        <textarea name="comments"></textarea>
      </label>
    </form>
    
    // style.css
    .hpot {
      display: none;
    }

## [FormPlug](https://danielireson.github.io/formplug-serverless/)

[![](/uploads/2018/06/formplug.png)](https://github.com/danielireson/formplug-serverless)

FormPlug is an option for power users who want full control over the code that handles their submissions. FormPlug is an open source project built with the [Serverless Framework](https://serverless.com/). The code runs on AWS Lambda and uses Amazon SES to send emails.

**Best Features:** Free and open source. Uses Serverless Framework so it’s relatively easy to install on your AWS environment.

**Biggest Downside:**  Submissions are persisted in email, like Formspree

### Spam Countermeasures

FormPlug also offers a honeypot field using the name `_honeypot`. In my experience, honeypot fields are reasonably effective on their own. They don’t seem very hard to thwart, though, and I wouldn’t be surprised if at some point they become utterly useless.

FormPlug also allows you to [encrypt your email address](https://github.com/danielireson/formplug-serverless#encryption) so it isn’t exposed on the frontend.

### Extensibility

Similar to Formspree, FormPlug doesn’t offer any extensibility out of the box. Since it’s open source, you always have the option of forking it and implementing your own extension at least.

### Using FormPlug

To use FormPlug, you will need an AWS account. Follow the [setup instructions](https://github.com/danielireson/formplug-serverless#setup) to install FormPlug to your AWS environment.

To hook your form up to FormPlug, retrieve the API Gateway URL for your FormPlug installation from the AWS console. Add this URL as the `action` attribute for your form, and insert the email that you want to receive submissions into a hidden field with the name of `_to`.

We will again demonstrate using the honeypot field in our example.

Before:

    <form method="POST">
      <label>Comments:
        <textarea name="comments"></textarea>
      </label>
    </form>

After:

    <form method="POST" action="https://$API_GATEWAY_URL">
      <input type="hidden" name="_to" value="you@example.com" />
      <div class="hpot">
        <label>Leave this field empty: <input name="_honeypot"></label>
      </div>
      <label>Comments:
        <textarea name="comments"></textarea>
      </label>
    </form>
    
    // style.css
    .hpot {
      display: none;
    }

## Finding the Form Solution That’s Right For You

Each of these solutions have different strengths and weaknesses. There is no one solution that stands out as the best; the utility of each depends on your needs. If you still aren’t sure which one to go with, here’s a brief summary of each one’s strengths:

* Your organization will appreciate **Google Forms** if you have non-developers involved in the form creation process.
* **Netlify Forms** is an excellent option if you already use Netlify for deploying and hosting your static site.
* You might like **FormKeep** if you have a high volume of submissions and want to automate as much as possible with its Zapier integration.
* If your needs are simple and you don’t want to devote a lot of time and money to forms, **Formspree** will get you up and running quickly.
* Code warriors who prefer to own their services will like **FormPlug**.

Regardless of which option you choose, these form handlers demonstrate that you can easily add dynamic behavior to your static site. The next time you decide that a static site is a bad choice for your use case, take a moment and consider: should your web frontend be responsible for this feature, or can you use some imagination and technical know-how to get the best of both worlds?

<div style="margin-top: 2em; padding: 20px 40px;background: #f7f7f7;"><h2>Join us every Friday :date:</h2><p><a href="/categories/frontend-friday/">Frontend Friday</a> is a weekly series where we write in-depth posts about modern web development.</p><p><strong>Next week:</strong> We'll show you a <a href="https://forestry.io/blog/ubuild-a-new-theme-for-static-sites-using-blocks/"> modular Jekyll theme</a> built for use with Forestry.  </p><p><strong>Last week:</strong> We discovered <a href="https://forestry.io/blog/for-static-sites-theres-no-excuse-not-to-use-a-cdn/">how a CDN works</a> with your static site.</p></div>


## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=17320887">Discuss on Hacker News</a>