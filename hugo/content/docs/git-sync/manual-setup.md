---
title: Manual Setup
weight: 4
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2018-08-27 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Git Sync
    weight: 5

---
The **manual setup** option can be used to set up your project without having to authenticate with your source provider through Forestry.

## Using Manual Setup

To perform manual setup of a project, disabled the "Quick Setup via OAuth" toggle on the **Select your git provider** screen.

Before you can continue, you must still select the git provider you are using. This is necessary so Forestry can correctly interpret webhook payloads and other communication from the provider.

## Setting the Repo Location

![](/uploads/2018/08/manual-init.png)

After you click **Next**, you will be prompted to enter the repository URL, the branch you wish to import, and the [config path](/docs/quickstart/setup-site#config-path). The repository URL should be the **SSH URL**, not the HTTPS URL.

## Completing the Connection

After you enter your repo information and click **Next**, you will be taken to the **repository settings** screen on your site dashboard. This screen will give you access to the information that needs to be added to your git provider's settings.

![](/uploads/2018/08/ssh-settings.png)

## Webhook URL

This URL needs to be added as a webhook that reacts to **push** events on your repository.

### Add Webhook to Github

The webhooks for your repo can be accessed at `https://github.com/$USERNAME/$REPOSITORY/settings/hooks`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository.

Click on **Add Webhook** and enter Forestry's webhook URL as the **Payload URL**. Set the **Content type** to `application/json`, and select **Just the** `**push**` **event** where it asks you which events should trigger this webhook.

Click the **Add webhook** button to complete the webhook setup.

### Add Webhook to GitLab

To add a webhook to your GitLab repository, navigate to `https://gitlab.com/$USERNAME/$REPOSITORY/settings/integrations`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository.

Enter the webhook URL provided by Forestry in the **URL** field, and leave the **Secret Token** field empty. Under **Trigger**, ensure that the box labeled **Push events** is checked.

### Add Webhook to Bitbucket

To add a webhook to your Bitbucket repository, navigate to `https://bitbucket.org/$USERNAME/$REPOSITORY/admin/addon/admin/bitbucket-webhooks/bb-webhooks-repo-admin`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository.

Click the **Add webhook** button to add a new webhook, and insert the webhook URL provided by Forestry in the **URL** field. Under **Triggers**, select **Repository push** and hit the **Save** button.

## Public Key

Forestry generates a keypair that will allow it to authenticate with your repository and push/pull commits. In order to do this, you need to add the **public key** provided by Forestry to the repository.

### Add Public Key to Github

To add a new key to your Github repo, navigate to `https://github.com/$USERNAME/$REPOSITORY/settings/keys`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository.

Click the **Add deploy key** button. Enter whatever you want for the **Title**: this will help you identify what the key is for. Under **Key**, paste the private key provided by Forestry.

Be sure to check the **Allow write access** box before clicking **Add key** to add this key to your repository.

### Add Public Key to GitLab

To add a new key to your GitLab repo, navigate to `https://gitlab.com/$USERNAME/$REPOSITORY/settings/repository`, substituting `$USERNAME` and `$REPOSITORY` for the path to your repository, and expand the **Deploy Keys** section.

Youy may add a label for this deploy key in the **Title** field to identify what this key is for. Paste the private key provided by Forestry in the **Key** field.

Make sure to check the **Write access allowed** box before clicking the **Add key** button to add this key to your repository.

### Add Public Key to Bitbucket

To add a new key to your Bitbucket repo, navigate to `https://bitbucket.org/account/user/$USERNAME/ssh-keys/`, where `$USERNAME` is your Bitbucket username.

Click **Add key** to add a new key. You can use the **Label** field to add an identifier for this key so you will know what it's being used for later on. In the **Key** field, paste in the public key provided by Forestry. Click the **Add key** button to save this key.

### Generating a New Keypair

If you need to generate a new keypair, click the **Generate new key** button. You should see your public key change to a new value. You must add this new public key to your repository using the above instructions.

{{% warning %}}
Generating a new keypair will **invalidate** your original keys. The connection to your source provider will not work until you add the new public key.
{{% /warning %}}