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

Forestry allows you to define how you work as teams or with collaborators. Teams are available from [our starter plan](/pricing).

## Collaborators on personal sites

Sites that are not part of an organization are **personal** sites. On those sites you can add up to three collaborators. Each collaborator can be an [admin, developer or editor](#user-roles), depending of the permissions you wish to set for each one of them. Upgrade to our starter plan if you need more collaborators.

### Managing Collaborators

To add collaborators to your sites, go to your site settings.

![Add Collaborators](/uploads/2019/05/add-collaborator-free-plan.png)

## Inviting Collaborators

To add a Collaborator, click _Add Collaborator_. This will add a new row to the list. Enter the new collaborator's email address you can repeat this process and continue adding collaborators.

This will send an email invitation to the new collaborators to join the site.

{{% tip %}}
Collaborators can always [sign up](https://app.forestry.io//signup) to Forestry and will have access to all the sites and organizations they have been invited to.
{{%/ tip %}}

## Removing Collaborators from a site

To remove a Collaborator, click the remove icon on the right.
Then proceed to the effective removal by clicking "Remove Collaborator" when you're invited to.


## Organizations

*This is a paid feature*

Organization can manage their members and add them to teams to define default roles. Those roles can be later overriden on a per-site basis.

### Create an Organization

You can create an organization on your dashboard by clicking on _Create Organization_ in the left sidebar.
Once you filled in your information and named the organization you can proceed by clicking on _Create_.

The Organization you created will now show up underneath _My sites_ in the left sidebar. You can access the Organization's sites and settings by clicking on the Organization.

Depending on your role in this organization your dashboard may vary, please read more in different [user roles](/docs/settings/team-management/#user-roles) to see what your assigned role allows you to do.

Before managing the sites permissions, you have to add owners and members to your organization.

Users can only be managed in Organization settings. Organizations are collections of sites assigned to teams and collaborators.
Organizations can have multiple users with different [user roles](#user-roles) work across all sites of an organization.

### Add Users to an organization

To add Users, go to your organization settings and click _add User_.

Enter the email, set if this person should be an **owner** or a **member** or the organization.

![Add User to organization](/uploads/2019/05/add-user-to-org.png)

- **Owners** have total access control on the organization
- **Members** can add sites to the organization

### Manage Teams

Once you have added members to an organization, you can create teams to define default permissions for all team members.

Click on _Add Team_ button to add a new team to an organization, then enter the desired team name and click _Create_.

![Add Team to organization](/uploads/2019/05/add-team.png)

Click on a team name to manage its members, you can now pick existing orgnization members and add them to one or more team.

### Define permissions per site

Teams and Users added to your organization can then we added to a site's organization in order to define what permissions have those users on that particular website.

The admins and owners can go to the site settings, and manage permissions from _Collaborators & Teams_ tab.

![Add Collaborators and Teams to a site](/uploads/2019/05/collaborators-teams-settings.png)

Pick up the teams you wish to add on the current site. You can override a team member role by adding him as a Collaborator with greater priviledges.

#### Collaborators on organization sites

You can add unlimited organization users as site collaborators, but can have up to 3 **external** collaborators. Nothing prevents you to make an external collaborator a member of your organization.

Each collaborator can be assigned [different roles](#user-roles).

## Site Access Levels

Users can be given one of three roles (Editor, Developer, Admin)
These affect what the user can do in the CMS.