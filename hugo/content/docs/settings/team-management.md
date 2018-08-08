---
aliases:
- "/docs/deployment-and-management/managing-users/"
title: Team Management
weight: 6
publishdate: 2017-12-31 04:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
date: 2017-03-28 04:00:00 +0000
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
menu:
  docs:
    parent: Settings & Configuration
    weight: 7

---
Currently collaboration with other users can happen in two ways, as Users and as Guests. Users are managed on a per-organization basis and can be assigned [different roles](#user-roles). Guests on the other hand have a predefined permission level and are assigned on a per-site basis. Any site can have up to 3 Guests.

## Managing Guests

![](/uploads/2018/03/team-management-add-guest.png)

To add Guests to your sites, navigate to the dashboard and select "My sites" or an organization, choose a site and click on the "..." and then click on "Manage Guests". 

The following screen shows you all the users that are already Guests to this site. 

## Inviting Guests

To add a Guest, click _Add Guest_. This will add a new row to the list. Enter the new Guest's email address you can repeat this process and continue adding Guests.

When you've finished adding all new Guests, click _Save_ to confirm the changes.

_This will send an email invitation to the new Guests to join the site._

## Removing Guests

To remove a Guest, click the _trash_ icon to the right of their e-mail.

When you've finished, click _Save_ to confirm the changes.

## Organizations
*This is a paid feature*

Unlike Guests, Users can only be managed in Organization Accounts. Organizations are collections of sites assigned to a team. Organizations can have multiple users with different [user roles](/docs/settings/team-management/#user-roles) work across all sites of an organization.

You can create an organization on your dashboard by clicking on "Create an Organization" in the left sidebar. 
Once you filled in your information and named the organization you can proceed by clicking on "Create".

The Organization you created will now show up underneath "My sites" in the left sidebar. You can access the Organization's sites and settings by clicking on the Organization.

Depending on your role in this organization your dashboard may vary, please read more in different [user roles](/docs/settings/team-management/#user-roles) to see what your assigned role allows you to do.

## Managing Users

![](/uploads/2018/03/team-management-settings.png)

To manage the team for an organization, navigate to the dashboard and select your organization, click on the <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="currentcolor" stroke-width="2"><path d="M7.75 22.149L12 19.48l4.25 2.669a11.029 11.029 0 0 0 4.088-2.973l-1.224-4.865 3.85-3.216a10.933 10.933 0 0 0-1.561-4.807l-5.006-.34-1.87-4.656A11.032 11.032 0 0 0 12 1c-.87 0-1.715.1-2.527.292l-1.87 4.657-5.006.339a10.933 10.933 0 0 0-1.56 4.807l3.85 3.216-1.225 4.865a11.029 11.029 0 0 0 4.087 2.973z"></path><circle cx="12" cy="12" r="3"></circle></g></svg> in the upper right corner, and then click "Users".

## Inviting New Users

To add a new User, click _Add User_. This will add a new row to the list. Enter the new User's email address and desired user role.

When you've finished adding all new Users, click _Add_ to confirm the changes.

_This will send an email invitation to the new Users to join the Organization._

{{% tip %}}
You can cancel any changes to your Organization's team by clicking _Cancel_ in the bottom right corner.
{{% /tip %}}

## Removing Users

To remove a User, click the _trash_ icon to the right of their user role, make sure you're removing the right User and then click on "Remove User"

## User Roles

In Organizations, Users can be given one of three roles. These affect what the user can do in the CMS.

### Editor (also Guests)

The editor role gives a User the ability to manage content across sites within that organization.

{{% tip %}}
Guests have the ability to manage content for their respective site but don't have access to sites across the organization.
{{% /tip %}} 

*They can:*

1. Edit and publish content
2. Upload and manage media content

### Developer

The developer role gives a User all permissions of an Editor and they can:

*Editor Role and*

1. Edit and manage Front Matter templates
2. Create and manage sites
3. Manage site settings

### Admin

The admin role gives a User all permissions of a Developer and they can:

*Developer Role and*

1. Manage other users
2. Manage billing for the Organization
3. Manage the organization & sites settings
4. Delete the organization & sites (this is irreversible)