import instantsearch from "instantsearch.js"
import mustache from "mustache"
import loadMore from "./templates/instantsearch/loadMore.html"
import hit from "./templates/instantsearch/hit.html"

export default class InstantSearch {
  /**
   * Initializes the search class
   * @param {String} appId
   * @param {String} apiKey
   * @param {Object} indexName
   * @param {Object} options
   */
  constructor(appId, apiKey, indexName, options = {}) {
    if (!appId) throw new Error("Missing App ID")
    if (!apiKey) throw new Error("Missing API Key")
    if (!indexName) throw new Error("Missing Index Name")

    const defaultOptions = {
      appId: appId,
      apiKey: apiKey,
      indexName: indexName,
      urlSync: true,
      searchParameters: {
        hitsPerPage: 10
      }
    }

    this.options = Object.assign(defaultOptions, options)
    this.defaultWidgets = {
      searchBox: instantsearch.widgets.searchBox({
        container: ".search input",
        queryHook: this.handleQuery
      }),
      hits: instantsearch.widgets.hits({
        container: ".section-search-results"
      }),
      stats: instantsearch.widgets.stats({
        container: "#stats"
      })
    }

    this.init()
  }

  init() {
    this.search = instantsearch(this.options)
    this.addWidgets(this.defaultWidgets)
    this.search.start()
  }

  addWidgets(widgets) {
    if (!widgets) return

    widgets.forEach((w) => {
      this.search.addWidget(w)
    })
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

  handleQuery(query) {
    
  }
}
