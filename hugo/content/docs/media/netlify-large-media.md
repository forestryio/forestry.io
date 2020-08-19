---
title: Storing Uploads With Netlify Large Media
weight: 5
date: 2020-05-02 00:00:00 +0000
menu:
  docs:
    name: Netlify Large Media
    parent: Media
    weight: 5

---

{{% warning "Known limitations" %}}

Images stored in GitLab and Bitbucket private repositories will not be shown in Forestry due to current limitations: [https://gitlab.com/gitlab-org/gitlab-ce/issues/45149](https://gitlab.com/gitlab-org/gitlab-ce/issues/45149 "https://gitlab.com/gitlab-org/gitlab-ce/issues/45149")

Dont track SVG files with LFS and Netlify Large Media, they're not supported by JIMP the image transformation library used by Netlify.

{{% /warning %}}

Forestry can integrate with [Netlify Large Media](https://www.netlify.com/docs/large-media/) for storing your uploads. Netlify Large Media is a Git LFS target, enabling you to seamlessly incorporate large media files in your repository without the performance penalty that this usually requires.

For more information on Git LFS, view our blog post: [Versioning Large Files with Git LFS](https://forestry.io/blog/versioning-large-files-with-git-lfs/).

## Getting Started With Netlify Large Media

Before setting up Netlify Large Media on your site, ensure you have successfully deployed your site to Netlify. From there, you will want to clone your repository to your local machine to set up Netlify Large Media via Netlify's CLI tool. Follow the steps outlined in [Netlify's Large Media Documentation](https://www.netlify.com/docs/large-media/) to complete the set up.

## Connecting Large Media to Forestry

Once you have successfully configured Netlify Large Media on your repository, you will need to configure your media library on Forestry to use it.

{{% pretty_screenshot img="/uploads/2019/05/media-settings-netlify.png" %}}

Go to **Settings** > **Media** on your Forestry site, and change your **Media Storage Provider** setting to **Netlify Large Media**. 

### Configuration
Your **upload directory** should remain the same, so re-enter the upload directory you were using previously. The **public path** should be the URL to the media file on your Netlify site. This will be your original public path prepended with the URL to your Netlify site.

Beneath the path fields, click the **Connect to Netlify** button to connect Forestry to Netlify in order to authenticate the media library.

{{% pretty_screenshot img="/uploads/2019/05/media-settings-netlify-complete.png" %}}

Once you have successfully connected to Netlify, you will see the **Connected** message on the settings page.

### Usage with Instant Previews

If you're using [Instant Previews](https://forestry.io/docs/previews/instant-previews/) with Netlify Large Media, you will need to skip the LFS file download when your preview runs. To do this, add an environment variable to your instant preview environment with the key of `GIT_LFS_SKIP_SMUDGE` and a value of `1`.

{{% pretty_screenshot img="/uploads/2019/05/instant-preview-skip-smudge.png" %}}


## Using Netlify's Image Transformations

Using Netlify Large Media, you can create image transformations for PNG, JPG and GIF files by appending parameters to the image URL.
For documentation and examples, check out [Netlify's image transformation docs](https://www.netlify.com/docs/image-transformation/).

