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

Sites that are not part of an organization are **personal** sites. On those sites you can add up to three collaborators. Each collaborator can be an [admin, developer or editor](#site-access-levels), depending of the permissions you wish to set for each one of them. Upgrade to our starter plan if you need more collaborators.

### Managing Collaborators

To add collaborators to your sites, go to your site settings.

![Add Collaborators](/uploads/2019/05/add-collaborator-free-plan.png)

### Inviting Collaborators

To add a Collaborator, click _Add Collaborator_. This will add a new row to the list. Enter the new collaborator's email address you can repeat this process and continue adding collaborators.

This will send an email invitation to the new collaborators to join the site.

{{% tip %}}
Collaborators can always [sign up](https://app.forestry.io//signup) to Forestry and will have access to all the sites and organizations they have been invited to.
{{%/ tip %}}

### Removing Collaborators from a site

To remove a Collaborator, click the remove icon on the right.
Then proceed to the effective removal by clicking "Remove Collaborator" when you're invited to.

## Collaborators on organization sites

You can add unlimited organization users as site collaborators, but can have up to 3 **external** collaborators. Nothing prevents you to make an external collaborator a member of your organization.

Each collaborator can be assigned [different roles](#site-access-levels).

### Teams

In addition to adding individual collaborators, Organization sites can also add teams with [different roles](#site-access-levels).
If a user belongs to multiple teams on a site, or is also an individual collaborator on a site, this user's role will be defiend by his/her highest access level. 

#### Adding a team

To add a team to a site, click _Add Team_. Then choose the team from the dropdown and apply its access level.

![Add Collaborators and Teams to a site](/uploads/2019/05/collaborators-teams-settings.png)


## Site Access Levels

Users can be given one of three roles.
These affect what the user can do in the CMS.

<table>
<tr>
<th></th>
<th>Editor</th>
<th>Developer</th>
<th>Admin</th>
</tr>
<tr>
<td>Edit and Publish Content</td>
<td class="center">✔️</td>
<td class="center">✔️</td>
<td class="center">✔️</td>
</tr>
<tr>
<td>Upload and Manage Media Content</td>
<td class="center">✔️</td>
<td class="center">✔️</td>
<td class="center">✔️</td>
</tr>
<tr>
<td>Edit Front Matter Templates</td>
<td class="center"></td>
<td class="center">✔️</td>
<td class="center">✔️</td>
</tr>
<tr>
<td>Edit Site Settings</td>
<td class="center"></td>
<td class="center">✔️</td>
<td class="center">✔️</td>
</tr>
<tr>
<td>Delete Sites</td>
<td class="center"></td>
<td class="center"></td>
<td class="center">✔️</td>
</tr>
<tr>
<td>Manage Collaborators on a Site</td>
<td class="center"></td>
<td class="center"></td>
<td class="center">✔️</td>
</tr>
</table>

{{% tip %}}
Organization owners automatically have admin access on all of the organization's sites.
{{%/ tip %}}