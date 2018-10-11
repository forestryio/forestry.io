export default class ASBGenerator {
  constructor(element) {
    if (!element) {
      return
    }

    this.timeout = null
    this.container = element

    // get form fields
    this.urlField = this.container.querySelector('[name="asb_repo"]')
    this.engineField = this.container.querySelector('[name="asb_engine"]')
    this.versionField = this.container.querySelector('[name="asb_version"]')
    this.buttonStyleOptions = this.container.querySelectorAll(
      '[name="asb_buttonStyle"]'
    )
    this.branchField = this.container.querySelector('[name="asb_branch"]')
    this.configField = this.container.querySelector('[name="asb_config"]')

    // get preview/code sample containers
    this.previewContainer = this.container.querySelector(".asb-preview")
    this.HTMLContainer = this.container.querySelector(".asb-html")
    this.markdownContainer = this.container.querySelector(".asb-md")

    for (let field of [
      this.urlField,
      this.versionField,
      this.branchField,
      this.configField
    ]) {
      field.addEventListener("keyup", this.debounceUpdate.bind(this))
    }

    this.engineField.addEventListener("change", this.debounceUpdate.bind(this))
    for (let button of this.buttonStyleOptions) {
      button.addEventListener("change", this.debounceUpdate.bind(this))
    }

    // toggle visibility of version field when 'hugo' selected as engine
    this.engineField.addEventListener(
      "change",
      this.toggleVersionFieldVisibility.bind(this)
    )

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
    let branch = this.branchField.value
    let config = this.configField.value

    // parse URL to get provider and repo path
    try {
      var {provider, repoPath} = this.parseRepoUrl(repoUrl)
    } catch (err) {
      // go into some kind of "you entered a bad URL" state
      this.container.classList.add("has-error")
      return
    }

    this.container.classList.remove("has-error")

    let addsiteUrl = this.getAddsiteURL(
      provider,
      repoPath,
      engine,
      version,
      branch,
      config
    )
    let imageUrl = this.getImageUrl(buttonStyle)

    // update preview and code samples
    this.previewContainer.innerHTML = this.getHTML(addsiteUrl, imageUrl)

    let buttonHTML = this.getHTML(addsiteUrl, imageUrl)
    let sanitizedHTML = buttonHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    let markdown = this.getMarkdown(addsiteUrl, imageUrl)
    this.HTMLContainer.innerHTML = sanitizedHTML
    this.HTMLContainer.nextSibling.setAttribute(
      "data-clipboard-text",
      buttonHTML
    )
    this.markdownContainer.innerHTML = markdown
    this.markdownContainer.nextSibling.setAttribute(
      "data-clipboard-text",
      markdown
    )
  }

  parseRepoUrl(url) {
    let urlInfo = new URL(url)

    if (
      ["github.com", "gitlab.com", "bitbucket.org"].indexOf(
        urlInfo.host.toLowerCase()
      ) < 0
    ) {
      throw "Invalid provider"
    }

    let provider = urlInfo.host.split(".")[0].toLowerCase()
    let repoPath = urlInfo.pathname
      .split(".")[0]
      .substr(1)
      .toLowerCase()

    // do some sanity checks here and throw an error if things are wrong
    if (!provider || !repoPath) {
      throw "Invalid repository URL"
    }

    return {
      provider: provider,
      repoPath: repoPath
    }
  }

  getAddsiteURL(provider, repoPath, engine, version, branch, config) {
    let url = `https://app.forestry.io/quick-start?repo=${repoPath}`
    if (provider != "github") {
      url += `&provider=${provider}`
    }
    if (engine != "hugo") {
      url += `&engine=${engine}`
    } else if (version) {
      url += `&version=${version}`
    }
    if (branch != "master") {
      url += `&branch=${branch}`
    }
    if (config != "/") {
      url += `&config=${config}`
    }
    return url
  }

  getImageUrl(buttonStyle) {
    return `https://assets.forestry.io/${buttonStyle}`
  }

  getHTML(url, imageUrl) {
    return `<a href="${url}">
    <img alt="Import this project into Forestry" src="${imageUrl}" />
</a>`
  }

  getMarkdown(url, imageUrl) {
    return `[![Import this project into Forestry](${imageUrl})](${url})`
  }

  toggleVersionFieldVisibility() {
    if (this.engineField.value === "hugo") {
      this.versionField.parentNode.classList.remove("hidden")
    } else {
      this.versionField.parentNode.classList.add("hidden")
    }
  }
}
