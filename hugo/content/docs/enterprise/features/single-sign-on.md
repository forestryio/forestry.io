---
aliases:
- "/docs/enterprise/features/single-sign-on/"
title: Single Sign-on
weight: 1
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-12-31 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  enterprise:
    name: Single Sign-on
    parent: enterprise-features
    weight: 1
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

Other identity providers can be configured however official setup guides are not available.

### Attributes

* Email
* FirstName
* LastName
* Teams (for [Cloud Enterprise](/docs/cloud-enterprise/), as a list of TeamIDs)
* Memberships (for [Private Enterprise](/docs/private-enterprise/), in the format of OrganizationID/TeamID)

`Username`, `Name`, and `MemberOf` are not used by Forestry but may still be sent.

The NameID format used by Forestry is `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`.

### Debugging Mode

Debugging mode, useful when configuring a new identity provider, shows extended error messages and parsed attributes. It can be enabled on the identity provider settings page.

## VCS Provider Login

When SAML SSO is disabled, users have the option of logging in through a VCS provider (if configured and enabled).
