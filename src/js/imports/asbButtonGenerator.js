export default class ASBGenerator {
  constructor(element) {
    this.timeout = null
    this.container = element
    if (!this.container) {
      return
    }

    // get form fields
    this.urlField = this.container.querySelector('[name="asb_repo"]')
    this.engineField = this.container.querySelector('[name="asb_engine"]')
    this.versionField = this.container.querySelector('[name="asb_version"]')
    this.buttonStyleOptions = this.container.querySelectorAll(
      '[name="asb_buttonStyle"]'
    )

    // get preview/code sample containers
    this.previewContainer = this.container.querySelector(".asb-preview")
    this.HTMLContainer = this.container.querySelector(".asb-html")
    this.markdownContainer = this.container.querySelector(".asb-md")

    // detect form changes
    this.urlField.addEventListener("keyup", this.debounceUpdate.bind(this))
    this.versionField.addEventListener("keyup", this.debounceUpdate.bind(this))
    this.engineField.addEventListener("change", this.debounceUpdate.bind(this))
    for (let button of this.buttonStyleOptions) {
      button.addEventListener("change", this.debounceUpdate.bind(this))
    }

    // run initial render
    this.handleUpdate()
  }

  getSelectedButtonOption() {
    for (let button of this.buttonStyleOptions) {
      if (button.checked) {
        return button
      }
    }
    return this.buttonStyleOptions[0]
  }

  debounceUpdate() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.handleUpdate.bind(this), 250)
  }

  handleUpdate() {
    let repoUrl = this.urlField.value
    let engine = this.engineField.value
    let version = this.versionField.value
    let buttonStyle = this.getSelectedButtonOption().value

    // parse URL to get provider and repo path
    try {
      var {provider, repoPath} = this.parseRepoUrl(repoUrl)
    } catch (err) {
      // go into some kind of "you entered a bad URL" state
      return
    }

    let addsiteUrl = this.getAddsiteURL(provider, repoPath, engine, version)
    let imageUrl = this.getImageUrl(buttonStyle)

    // update preview and code samples
    this.previewContainer.innerHTML = this.getHTML(addsiteUrl, imageUrl)
    this.HTMLContainer.innerHTML =
      "<pre>" +
      this.getHTML(addsiteUrl, imageUrl)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;") +
      "</pre>"
    this.markdownContainer.innerHTML =
      "<pre>" + this.getMarkdown(addsiteUrl, imageUrl) + "</pre>"
  }

  parseRepoUrl(url) {
    console.log(new URL(url))
    let urlInfo = new URL(url)
    let provider = urlInfo.host.split(".")[0]
    let repoPath = urlInfo.pathname.split(".")[0].substr(1)

    return {
      provider: provider,
      repoPath: repoPath
    }
  }

  getAddsiteURL(provider, repoPath, engine, version) {
    return engine === "hugo"
      ? `https://app.forestry.io/quick-start?repo=${repoPath}&provider=${provider}&engine=${engine}&version=${version}`
      : `https://app.forestry.io/quick-start?repo=${repoPath}&provider=${provider}&engine=${engine}`
  }

  getImageUrl(buttonStyle) {
    return `https://assets.forestry.io/${buttonStyle}`
  }

  getHTML(url, imageUrl) {
    return `<a rel="nofollow" href="${url}">
    <img alt="Import this project into Forestry" src="${imageUrl}" />
</a>`
  }

  getMarkdown(url, imageUrl) {
    return `[![Import this project into Forestry](${imageUrl})](${url})`
  }

  debug() {
    console.log(this.urlField.value)
    console.log(this.engineField.value)
    console.log(this.versionField.value)
    console.log(this.getSelectedButtonOption().value)
  }
}
