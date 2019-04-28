To add a webhook to your Azure DevOps Repository, navigate to `https://dev.azure.com/$ORGANIZATION/$PROJECT/_settings/serviceHooks`, substituting `$ORGANIZATION` and `$PROJECT` for the name of the Azure DevOps organization and project you want to add hooks for. This will take you to the Service Hooks area of the project settings.

{{ partial "components/pretty_screenshot" (dict "Img" "/uploads/2019/04/az-add-webhook.png") }}

Click on **Create Subscription**, select **Web Hooks** from the available services, and then click **Next.**

Here you will configure the type of webhook to send. Select **Code pushed** for the trigger, and select the repository and branch that corresponds to your site in Forestry. Under **Pushed by a member of group**, use the default selection of **\[Any\]**. Click **Next** to continue configuring the webhook.

{{ partial "components/pretty_screenshot" (dict "Img" "/uploads/2019/04/az-add-webhook-2.png") }}

On this last configuration screen, paste in the **Webhook URL** from your site's settings page in Forestry and ensure the **Resource Version** is set to **1.0**. No further changes are necessary on this screen, so you can click **Finish** To create the webhook.

<div class="shortcode-tip">

If you want, you can remove the <em>messages</em> from the payload on this configuration screen, because they are not used by Forestry. However, you <strong>must</strong> select <strong>All</strong> for <strong>Resource details to send</strong>.

</div>

<div class="shortcode-warning">

Clicking <strong>Test</strong> to test the Azure DevOps webhook will not cause Forestry to import your site, because Azure sends a dummy payload in the test hook.

</div>