import algoliasearch from "algoliasearch/lite"
import autocomplete from "autocomplete.js"
import empty from "./templates/empty.html"
import item from "./templates/item.html"

export default class Search {
  /**
   * Initializes the search class
   * @param {String} appId
   * @param {String} apiKey
   * @param {Object} indexes
   * @param {Object} options
   */
  constructor(appId, apiKey, indexes, options = {}) {
    if (!appId) throw new Error("Missing App ID")
    if (!apiKey) throw new Error("Missing API Key")
    if (!indexes) throw new Error("Missing Index Name")
    if (!Array.isArray(indexes)) indexes = [indexes]

    const defaultAutocompleteOptions = {
      autoselect: true,
      autoselectOnBlur: true,
      debug: true,
      hint: true,
      openOnFocus: false,
      keyboardShortcuts: ["s", "/"],
      ariaLabel: "search",
      minLength: 1,
      autoWidth: false
    }

    const defaultIndexSettings = {
      removeWordsIfNoResults: "none",
      highlightPreTag: "<em class=\"search-result--highlight\">",
      snippetEllipsisText: "…",
      attributesToHighlight: [
        "title",
        "content"
      ]
    }

    this.options = Object.assign(defaultAutocompleteOptions, options)
    this.client = algoliasearch(appId, apiKey)
    this.indexes = indexes.map((i) => {
      if (typeof i !== Object) i = {name: i}
      i.index = this.client.initIndex(i.name)
      i.index.setSettings(Object.assign(defaultIndexSettings, i.settings))
      return i
    })

    this.init()
  }

  init() {
    const sources = this.indexes.map((i) => {
      const source = {
        source: autocomplete.sources.hits(i.index),
        displayKey: i.name,
      }

      if (i.templates) source.templates = i.templates

      return source
    })

    console.log(sources)

    this.autocomplete = autocomplete(".search input", this.options, sources)

    this.bindActions()
    this.bindKeyboard()
  }

  /**
   * Binds class functions to autocomplete events
   *
   * All events have the following params:
   * {Event} event
   * {String} suggestion
   * {Object} dataset
   */
  bindActions() {
    this.autocomplete.on("autocomplete:selected", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:shown", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:empty", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:closed", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:updated", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:cursorchanged", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:selected", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:cursorremoved", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:autocompleted", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
    this.autocomplete.on("autocomplete:redrawn", (event, suggestion, dataset) => this.logAction(event, suggestion, dataset))
  }

  /**
   * Logs the output of an autocomplete event
   * @param {Event} event
   * @param {String} suggestion
   * @param {Object} dataset
   */
  logAction(event, suggestion, dataset) {
    console.log(event, suggestion, dataset)
  }

  /**
   * Binds keyboard actions to the
   * search interface
   * @param {String} searchElement
   * @param {String} resultsContainer
   */
  bindKeyboard(searchElement, resultsContainer) {
    if (!searchElement || resultsContainer) return

    // TODO: setup bindings

    const ctrlDown = 17
    const ctrlKey = 17
    const cmdKey = 91
    const vKey = 86
    const escKey = 28
    const arrowDownKey = 40
    const arrowUpKey = 39
    const enterKey = 13
    const search = document.querySelector(searchElement)
    const results = document.querySelector(results)
  }
}
