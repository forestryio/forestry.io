---
title: Using Instant Previews
aliases:
- "/docs/instant-previews-server"
date: 2019-01-05 00:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.jpg"
publishdate: 2018-01-15 17:00:00 +0000
authors: []
expirydate: 2030-01-01 04:00:00 +0000
layout: single
menu:
  docs:
    parent: Previews
    weight: 3

---
With **instant previews**, you can take advantage of your static site generator's built-in "watch" or incrementally-updating mode to dramatically reduce the time it takes to refresh a Forestry preview, providing a shorter feedback cycle for editors working on your site.


**TODO: Remind people they need to configure their previews.**

**TODO: ADD A PICTURE OF THE SERVER SECTION**

The Instant Preview server may be in one of several states:

| Status | Description |
|---|---|
| Disabled | Instant Previews are disabled. Standard Previews will be used instaed. |
| Stopped| The preview server is stopped. |
| Starting| The preview server is starting up. |
| Ready| The preview server is running the Build Command|
| Stopping| The preview server is shutting down.|
| Error| The an error occurred while running the preview server. |

## Turning on the Instant Previews Server
Depending on the state of your preview server, several server actions will be available,

| Action | Description |
|---|---|
| Start |  Starts the stopped preview server. |
| Stop |  Stops running preview server. |
| Restart |  Stops the running server and restarts it immediately. |
| Clear Cache  & Restart |  Clears the repository and dependency cache before restarting the server. |

## Reading the Server Logs

The lifecycle of a preview server contains multiple steps. Each step has a **status indicator**, **name**, and some **logs**. Common preview steps include:

| Setup Step | Description |
|---|---|
| Loading Repo Files |  TODO |
| Installing Dependencies |  Runs the  _Install Dependencies Command_ if it was set. |
| Saving Cache |  Caches the repository and any installed dependencies.  |
| Building Site |  Executes the _Build Command_ to start serving your preview. |