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

    for (const field of [
      this.urlField,
      this.versionField,
      this.branchField,
      this.configField
    ]) {
      field.addEventListener("keyup", this.debounceUpdate.bind(this))
    }

    this.engineField.addEventListener("change", this.debounceUpdate.bind(this))
    for (const button of this.buttonStyleOptions) {
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
    for (const button of this.buttonStyleOptions) {
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
    const repoUrl = this.urlField.value
    const engine = this.engineField.value
    const version = this.versionField.value
    const buttonStyle = this.getSelectedButtonOption().value
    const branch = this.branchField.value
    const config = this.configField.value

    // parse URL to get provider and repo path
    try {
      var {provider, repoPath} = this.parseRepoUrl(repoUrl)
    } catch (err) {
      // go into some kind of "you entered a bad URL" state
      this.container.classList.add("has-error")
      return
    }

    this.container.classList.remove("has-error")

    const addsiteUrl = this.getAddsiteURL(
      provider,
      repoPath,
      engine,
      version,
      branch,
      config
    )
    const imageUrl = this.getImageUrl(buttonStyle)

    // update preview and code samples
    this.previewContainer.innerHTML = this.getHTML(addsiteUrl, imageUrl)

    const buttonHTML = this.getHTML(addsiteUrl, imageUrl)
    const sanitizedHTML = buttonHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    const markdown = this.getMarkdown(addsiteUrl, imageUrl)
    this.HTMLContainer.innerHTML = sanitizedHTML
    this.HTMLContainer.setAttribute(
      "data-clipboard-text",
      buttonHTML
    )
    this.markdownContainer.innerHTML = markdown
    this.markdownContainer.setAttribute(
      "data-clipboard-text",
      markdown
    )
  }

  parseRepoUrl(url) {
    const urlInfo = new URL(url)

    if (
      ["github.com", "gitlab.com", "bitbucket.org"].indexOf(
        urlInfo.host.toLowerCase()
      ) < 0
    ) {
      throw "Invalid provider"
    }

    const provider = urlInfo.host.split(".")[0].toLowerCase()
    const repoPath = urlInfo.pathname
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
    if (provider !== "github") {
      url += `&provider=${provider}`
    }
    url += `&engine=${engine}`
    if (engine === "hugo" && version) {
      url += `&version=${version}`
    }
    if (branch !== "master") {
      url += `&branch=${branch}`
    }
    if (config !== "/") {
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
