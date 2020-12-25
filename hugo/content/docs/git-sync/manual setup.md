---
title: Manual Setup
weight: 4
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2019-04-29 00:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Git Sync
    weight: 5

---
The **manual setup** option can be used to set up your project without having to authenticate with your source provider through Forestry.

## Using Manual Setup

{{% pretty_screenshot img="/uploads/2019/04/add-site-disable-quick-setup.png" %}}

To perform manual setup of a project, disable the "Quick Setup via OAuth" toggle on the **Select your git provider** screen.

Before you can continue, you must still select the git provider you are using. This is necessary so Forestry can correctly interpret webhook payloads and other communication from the provider. Self-hosted GitLab installations are only available on-premise.

{{% markdownpartial "docs/manual-setup/addsite-and-settings.md" %}}

---

## Public Key

Forestry generates a keypair that will allow it to authenticate with your repository and push/pull commits. In order to do this, you need to add the **public key** provided by Forestry to the repository.

{{% tip %}}
The following GitHub and GitLab instructions will add a **deploy key** to your site's repository, which will give Forestry access to read from and write to the project. If your site requires additional private dependencies, you will instead want to add an SSH key to your user account in order to provide Forestry access to the private submodules.
<br /><br />
More info: [Using Private Submodules With Forestry](/docs/troubleshooting/using-private-submodules/)
{{% /tip %}}


{{% code_tabs %}}
{{% tab "Github" %}}

### Add Public Key to Github

To add a new key to your Github repo, navigate to `https://github.com/$USERNAME/$REPOSITORY/settings/keys`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository.

Click the **Add deploy key** button. Enter whatever you want for the **Title**: this will help you identify what the key is for. Under **Key**, paste the public key provided by Forestry.

Be sure to check the **Allow write access** box before clicking **Add key** to add this key to your repository.

{{% /tab %}}
{{% tab "GitLab" %}}

### Add Public Key to GitLab

To add a new key to your GitLab repo, navigate to `https://gitlab.com/$USERNAME/$REPOSITORY/settings/ci_cd`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository, and expand the **Deploy Keys** section.

Youy may add a label for this deploy key in the **Title** field to identify what this key is for. Paste the public key provided by Forestry in the **Key** field.

Make sure to check the **Write access allowed** box before clicking the **Add key** button to add this key to your repository.

{{% /tab %}}
{{% tab "Bitbucket" %}}

### Add Public Key to Bitbucket

{{% markdownpartial "docs/manual-setup/bitbucket-publickey.md" %}}

{{% /tab %}}
{{% tab "Azure DevOps" %}}

### Add Public Key to Azure DevOps

{{% markdownpartial "docs/manual-setup/azure-devops-publickey.md" %}}

{{% /tab %}}
{{% /code_tabs %}}

### Generating a New Keypair

If you need to generate a new keypair, click the **Generate new key** button. You should see your public key change to a new value. You must add this new public key to your repository using the above instructions.

{{% warning %}}
Generating a new keypair will **invalidate** your original keys. The connection to your source provider will not work until you add the new public key.
{{% /warning %}}

---

## Webhook URL

This URL needs to be added as a webhook that reacts to **push** events on your repository.

{{% code_tabs %}}
{{% tab "Github" %}}
### Add Webhook to Github

The webhooks for your repo can be accessed at `https://github.com/$USERNAME/$REPOSITORY/settings/hooks`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository.

Click on **Add Webhook** and enter Forestry's webhook URL as the **Payload URL**. Set the **Content type** to `application/json`, and select **Just the `push` event** where it asks you which events should trigger this webhook.

Click the **Add webhook** button to complete the webhook setup.

{{% /tab %}}
{{% tab "GitLab" %}}

### Add Webhook to GitLab

To add a webhook to your GitLab repository, navigate to `https://gitlab.com/$USERNAME/$REPOSITORY/settings/integrations`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository.

Enter the webhook URL provided by Forestry in the **URL** field, and leave the **Secret Token** field empty. Under **Trigger**, ensure that the box labeled **Push events** is checked.

{{% /tab %}}
{{% tab "Bitbucket" %}}

### Add Webhook to Bitbucket

{{% markdownpartial "docs/manual-setup/bitbucket-webhook.md" %}}

{{% /tab %}}
{{% tab "Azure DevOps" %}}

### Add Webhook to Azure DevOps

{{% markdownpartial "docs/manual-setup/azure-devops-webhook.md" %}}

{{% /tab %}}
{{% /code_tabs %}}
