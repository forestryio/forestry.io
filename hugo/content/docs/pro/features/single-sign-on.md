---
aliases: 
title: Single Sign-on
weight: "3"
publishdate: 2020-06-11T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: 2020-06-11T04:00:00.000+00:00
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Pro
    weight: 3

---
## SAML SSO

Foresty supports SAML as a single sign-on solution. Multiple identity providers can be set up and enabled concurrently, allowing for easy certificate rotation.

### Supported Identity Providers

* OneLogin
* Okta
* Auth0
* Ping Identity
* Azure Active Directory
* ADFS

Other identity providers can be configured, however official setup guides are not yet available.

### Attributes

* Email
* FirstName
* LastName
* Teams (for Cloud Enterprise, as a list of TeamIDs)
* Memberships (for Private Enterprise, in the format of OrganizationID/TeamID)

`Username`, `Name`, and `MemberOf` are not used by Forestry but may still be sent.

The NameID format used by Forestry is `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`.

### Debugging Mode

Debugging mode, useful when configuring a new identity provider, shows extended error messages and parsed attributes. It can be enabled within the identity provider settings page.

### Configuration

Organization admins can setup identity providers through the organization settings.

![SAML settings](/uploads/2019/06/org-saml-settings.png)

Fields within the `Identity Provider Settings` should be configured using your existing SAML settings values.

After the provider has been created within Forestry, fields in the `Service Provider Info` section will need to be added to your SAML provider settings.

Make sure `enabled` is toggled on when you are ready to use the SAML provider.

### Authentication

From the login screen, after you click `Sign in with SAML SSO`, the user will be prompted to enter their subdomain.<br/>

![SSO Login](/uploads/2019/06/sso-login.png)

If only one SAML provider is configured within Forestry, it will immediately authenticate through SSO.<br/> If multiple identity providers are configured, the user will choose their desired SAML provider<br/> 

![SSO Multiple Providers](/uploads/2019/06/multiple-sso-providers.png)