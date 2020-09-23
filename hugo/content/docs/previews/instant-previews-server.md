---
title: Using Instant Previews
aliases:
- "/docs/instant-previews-server"
date: 2019-06-28 12:00:00 +0000
images:
- "/uploads/2018/01/OGimage-01-docs-3x.png"
publishdate: 2018-01-15 17:00:00 +0000
authors: []
expirydate: 2030-01-01 04:00:00 +0000
layout: single
menu:
  docs:
    parent: Previews
    weight: 3

---

When using Instant Previews, managing the preview server is done independently from previewing content. To access the preview server controls, navigate to **Settings** > **Previews**.

{{% pretty_screenshot img="/uploads/2019/06/preview-server-controls.png" caption="Preview server controls" %}}

## Server Status

The Instant Preview server may be in one of several states:

| Status | Description |
|---|---|
| Disabled | Instant Previews are disabled. Standard Previews will be used instead. |
| Stopped| The preview server is stopped. |
| Starting| The preview server is starting up. |
| Ready| The preview server is running the Build Command|
| Stopping| The preview server is shutting down.|
| Hibernating| The preview server is going into hibernation.|
| Error| The an error occurred while running the preview server. |

## Server Actions
Depending on the state of your preview server, several server actions will be available,

| Action | Description |
|---|---|
| Start |  Starts the stopped preview server. |
| Stop |  Stops running preview server. |
| Restart |  Stops the running server and restarts it immediately. |
| Clear Cache & Restart |  Clears the repository and dependency cache before restarting the server. |

## Reading the Server Logs

<video playsinline autoplay muted loop width="100%" controls>
  <source src="/video/starting-preview-server.mp4" type="video/mp4">
  <a href="/video/starting-preview-server.mp4">Watch video</a>.
</video>

The lifecycle of a preview server contains multiple steps. Each step has a **status indicator**, **name**, and some **logs**.

Common preview steps include:

| Setup Step | Description |
|---|---|
| Loading Repo Files |  Imports the site repository and mounts it to the container. |
| Installing Dependencies |  Runs the  _Install Dependencies Command_ if it was set. Dependencies will be loaded from cache if it exists. |
| Saving Preview Cache |  Caches the repository and any installed dependencies.  |
| Building Site |  Executes the _Build Command_ to start serving your preview. |
