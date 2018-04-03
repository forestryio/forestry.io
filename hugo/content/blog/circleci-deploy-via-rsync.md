---
title: 'CircleCI Followup: Deploying Via rsync'
description: In this follow-up, we show you how to use CircleCI with the `rsync` utility
  to deploy your site to any rsync-enabled server
date: 2018-03-29 12:00:00 +0000
authors:
- dj-walker
publishdate: 2018-03-29 12:00:00 +0000
expirydate: 2030-01-01 04:00:00 +0000
headline: 'CircleCI Followup: Deploying Via rsync'
textline: 'CircleCI Followup: Deploying Via rsync'
images:
- "/uploads/2018/03/follow-up-circleci-rsync.png"
categories:
- CICD
tags: []
cta:
  headline: ''
  textline: ''
  calls_to_action: []
private: false
weight: ''
aliases: []

---
{{% tip %}}

This tutorial was updated on **April 3, 2018**.

{{% /tip %}}

In last week's article, we showed you how to [automate the deployment of a Hugo site using CircleCI](/blog/automate-deploy-w-circle-ci). The example we provided used the `awscli` utility to deploy the results of your build process to an AWS S3 bucket. In this follow-up, we will show you how to use the `rsync` utility to deploy your site to any rsync-enabled server.


## Why rsync?

`rsync` is a utility for transferring files between machines. It is a good choice for our use case because:


- It is commonly available on Unix systems
- It can compute and send only parts of updated files to minimize network usage and transfer as fast as possible
- It allows us to transfer files using SSH

Unlike our AWS-specific deployment in the previous article, the `rsync` deployment can be used with a variety of hosting providers and is a good general-purpose solution.



## Review: The *.circleci/config.yml* File

Recall that we are telling CircleCI how to deploy our site by [inserting a configuration file](/blog/automate-deploy-w-circle-ci#configuring-your-deployment) at `.circleci/config.yml` with the following information:

```yaml
version: 2
jobs:
  build:
    docker:
      - image: cibuilds/hugo:latest
    working_directory: ~/hugo
    environment:
      HUGO_BUILD_DIR: ~/hugo/public
    steps:
      - run: apk update && apk add git
      - checkout
      - run: git submodule sync && git submodule update --init
      - run: curl -L https://github.com/bep/s3deploy/releases/download/v2.0.1/s3deploy_2.0.1_Linux-64bit.tar.gz | tar xvz
      - run: HUGO_ENV=production hugo -v -d $HUGO_BUILD_DIR
      - run: htmlproofer $HUGO_BUILD_DIR --allow-hash-href --check-html --empty-alt-ignore --disable-external
      - deploy:
          name: deploy
          command: |
            if [ "${CIRCLE_BRANCH}" = "master" ]; then
              ./s3deploy -source=$HUGO_BUILD_DIR -region=us-east-1 -bucket=dwalkr-hugo-demo -path=your-subfolder
            else
              echo "Not master branch, dry run only"
            fi
```
In order to use `rsync` to deploy instead, a few things will need to be changed:


1. The `s3deploy` installation step will be removed.
2. An **SSH key** will be added so the CI environment can connect to the hosting server.
3. The **hostkey** of the hosting server needs to be added to the CI environment’s `known_hosts` file.
4. The `deploy` command will be altered to use `rsync`

### Adding the SSH Key
<video playsinline="true" autoplay="true" muted="" loop="true">
    <source src="/video/circleci_add_ssh_key.webm" type="video/webm">
    <source src="/video/circleci_add_ssh_key.webm.mp4" type="video/mp4">
</video>
To enable CircleCI to send files to your server via `rsync`, access your project’s build settings by clicking the cog next to the project name on the **Builds** screen. On the settings screen, locate the **SSH Permissions** link under the Permissions section. Click the **Add SSH Key** button and add your server’s hostname and the contents of the private key.

```yaml
          - add_ssh_keys:
              fingerprints:
                - "xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx"
```

To import this key into our CI environment, we use the `add_ssh_keys` step. After adding the SSH key, CircleCI displays the key’s fingerprint on the settings screen. Copy this fingerprint and insert it into the above command, and our build environment will now be able to use the key.

### Providing the Hostkey for Verification
When the CircleCI server attempts to connect to your host, it may prompt you to verify the host key. Prompts are the kryptonite of automation: the CI environment will hang indefinitely, waiting for a user to give it a response. It is possible to disable this verification, but adding the correct key to the `known_hosts` file is a much better solution. CircleCI doesn’t have a semantic solution for adding host keys, but one option is to add the host key as an environment variable. To add environment variables, go to your project settings and click on the **Environment Variables** link under Build Settings. Click the **Add Variable** button and add a new value named `REMOTE_HOSTKEY` with the contents of your server’s host key. To obtain the host key, run the following command in your terminal:

```bash
$ ssh-keyscan your-server-hostname.com
```

We can then use this variable in our build environment to add the host key to the `known_hosts` file:

```yaml
          - run: echo $REMOTE_HOSTKEY >> ~/.ssh/known_hosts
```

### The Deploy Command
All that’s left is to send the generated static files contained in `$HUGO_BUILD_DIR` to the destination server.

```yaml
          - deploy:
              name: deploy
              command: |
                if [ "${CIRCLE_BRANCH}" = "master" ]; then
                  rsync -avce ssh $HUGO_BUILD_DIR your-user@your-host:/path/to/your/website
                else
                  echo "Not master branch, dry run only"
                fi
```

`rsync` has [a ton of options](https://ss64.com/bash/rsync_options.html). The following three are especially useful for our purposes:

| Flag | What it Does |
|:---|:---|
| **-a** | This configures rsync to run in **archive mode.** Archive mode automatically applies several useful settings such operating recursively on directory trees, preserving symlinks, and preserving file permissions. |
| **-v** | This will run `rsync` in verbose mode, which will provide more information to the error log in the event something goes wrong. |
| **-c** | By default, `rsync` skips files based on the file modification time. [As mentioned in the previous article](/blog/automate-deploy-w-circle-ci/), this is not optimal for static sites. With this flag, `rsync` will compute a **checksum** of each file to determine if the contents have changed. |
| **-e&nbsp;ssh** | This tells `rsync` that we wish to execute commands on the remote machine via `ssh`. |
  
## The Final Config File
```yaml

    version: 2
    jobs:
      build:
        docker:
          - image: cibuilds/hugo:latest
        working_directory: ~/hugo
        environment:
          HUGO_BUILD_DIR: ~/hugo/public
        steps:
          - run: apk update && apk add git
          - checkout
          - run: git submodule sync && git submodule update --init
          - run: HUGO_ENV=production hugo -v -d $HUGO_BUILD_DIR
          - run: htmlproofer $HUGO_BUILD_DIR --allow-hash-href --check-html --empty-alt-ignore --disable-external
          - add_ssh_keys:
              fingerprints:
                - "xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx"
          - run: echo $REMOTE_HOSTKEY >> ~/.ssh/known_hosts
          - deploy:
              name: deploy
              command: |
                if [ "${CIRCLE_BRANCH}" = "master" ]; then
                  rsync -avce ssh $HUGO_BUILD_DIR your-user@your-host:/path/to/your/website
                else
                  echo "Not master branch, dry run only"
                fi
```
There you have it! Using this configuration you can deploy from your CircleCI environment to a variety of different hosting providers. If `rsync` isn’t your sauce, you can easily tweak the `deploy` step to run any commands in your build environment to get your files where they need to go.

## Have something to add?

<a style="background: #F60; display: inline-block; border-radius: 5px; color: white; padding: 2px 9px; font-size: 14px;" href="https://news.ycombinator.com/item?id=16710224">Discuss on Hacker News</a>
