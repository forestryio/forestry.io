---
aliases:
- "/docs/deployment-and-management/managing-users/"
- "/settings/collaborators/"
title: Collaborators & Teams
weight: "6"
publishdate: 2020-06-11T04:00:00.000+00:00
expirydate: 2030-01-01T04:00:00.000+00:00
date: 2017-03-28T04:00:00.000+00:00
layout: single
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
menu:
  docs:
    parent: Settings & Configuration
    weight: 7

---
Forestry allows you to define how you work as teams or with collaborators. Teams are available from [our starter plan](/pricing).

## On personal sites

Sites that are not part of an organization are personal sites. On those sites you can add up to **3** collaborators. Each collaborator can be an [admin, developer or editor](#site-access-levels).

Upgrade to [our starter plan](/pricing) if you need more collaborators.

### Managing Collaborators

Admins and organization owners can manage site collaborators.
From your site settings, select the _Collaborators & Teams_ tab.

![](/uploads/2019/05/add-collaborator-free-plan.png)

### Inviting Collaborators

To add a Collaborator, click _Add Collaborator_, and enter the new collaborator's email address, and select an [access level](#site-access-levels). This will add a new row to the list. You can repeat this process and continue adding collaborators.

This will send an email invitation to the new collaborators to join the site.

All collaborators are marked as **external** on personal sites.

### Removing Collaborators from a site

To remove a Collaborator, click the remove icon on the right.
Then confirm the removal by clicking "Remove Collaborator".

## On organization sites

You can add unlimited [organization](/docs/collaboration/organizations/ "About organizations") users as site collaborators, but can only have up to **3 external collaborators per site**. You can make an an external collaborator a member of your organization anytime.

Each collaborator is assigned [different access levels](#site-access-levels).

### Teams

In addition to adding individual collaborators, Organization sites can also add teams with [different access levels](#site-access-levels).

If a user belongs to multiple teams on a site, or is also an individual collaborator on a site, this user's role is defined by his/her highest access level.

#### Adding a team

To add a team to a site, click _Add Team_. Then choose the team from the dropdown and apply its [access level](#site-access-levels).

![](/uploads/2019/05/collaborators-teams-settings.png)

You can click on a team name to manage its members from the [organization](/docs/collaboration/organizations/ "About Organizations") settings.

#### Determining access level

A user can be added to a site as an individual collaborator but they may also belong to a site through [team](#teams) membership or via [organization](/docs/collaboration/organizations/ "About Organizations") ownership. When determining access level for a site, the highest level of all relationships is selected.

For instance an individual contributor that was added as an individual **editor**, but also belongs to a team with the **developer** access level, has **developer** access to the site. If the user is an **owner** of the organization they are automatically an **admin** on the site.

{{% tip %}}
Collaborators can always [sign up](https://app.forestry.io//signup) to Forestry and will have access to all the sites and organizations they have been invited to.
{{%/ tip %}}

## Site Access Levels

Users & Teams can be given one of three access levels.
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