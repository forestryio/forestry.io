---
aliases:
- "/blog/post/march-27th-service-outage"
authors:
- scott-gallant
images:
- "/uploads/2017/12/forestry-outage-2.png"
publishdate: 2017-03-27 21:25:39 +0000
expirydate: 2030-01-01 04:00:00 +0000
excerpt: A post mortem on the Forestry service outage
title: March 27th Service Outage
categories:
- company
- CMS
date: 2017-03-27 21:25:39 +0000

---
As some of you may have noticed, Forestry was down for about 2.5 hours between 23:00 UTC March 27 until 01:30 UTC March 28. In the spirit of full disclosure I'd like to explain what happened and why.

Forestry is a Rails application and from time to time the number of migrations we have get unwieldy. Being an application under rapid development, things are constantly changing and migrations are created sometimes daily. To keep this every growing list of files at bay we use a tool called 
<a href="https://github.com/jalkoby/squasher" style="font-size: 1rem; background-color: rgb(255, 255, 255);">squasher</a>
<span style="font-size: 1rem;">&nbsp;to squash our migrations into a single migration.</span>

The way squasher works is by taking the current state of the database and adding it to a migration with a filename that reflects the most recent migration that has run. This prevents the squashed migration from running when the database is migrated. This migration shouldn't run because, as it turns out, it will delete your entire database. The create_table statements are suffixed with `force: :cascade` which drops the table and all the related tables then recreates them. I think you can see where I am going.

I ran squasher on our migrations in dry run mode (as I have done before) to ensure that everything looked ok. Dry run mode creates the new squashed migration so that it can be inspected. My mistake was that I forgot to delete the migration that the dry run created before I ran it for real. On the subsequent run squasher picked up on the new migration, which didn't have a record in the database because it had never been run. The new squashed migration now had a name that did not exist in our production database and so when it ran, wiped our entire production database clean. The migration was run in development, but it was on a clean database so the issue wasn't noticed. And frankly, I wasn't worried because "I've done this before".

But... this is why we have backups. Our production database runs on 
<a href="https://aws.amazon.com/rds/" style="font-size: 1rem; background-color: rgb(255, 255, 255);">Amazon&nbsp;RDS</a>
<span style="font-size: 1rem;">&nbsp;in a multi-az deployment. By the time the issue was noticed, the changes had already propagated to the failover instance so we had to go back to a point-in-time restore. So we took the site offline and searched our logs to find the most recent successful API request (this was the longest part). Once we found that, it was just a few clicks (and some waiting) to get a restored copy of the database back up and running. All in all, we lost &lt; 1min worth of data.</span>

Once service was restored, we had a backlog jobs that needed to be processed. You may have experienced slow publish/preview/import times while we churned through them. After about 30 mins of Forestry coming back online everything was back to normal.

TLDR; Accidentally deleted our production database by way of a bad migration so we had to restore from a backup.

<span style="font-size: .8em;"><em>Thanks to
<a href="https://thenounproject.com/rockicon/">Rockicon</a> for the great DB icon on this post!</em></span>
