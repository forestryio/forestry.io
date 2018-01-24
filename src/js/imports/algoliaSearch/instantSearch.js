import empty from "./templates/instantsearch/empty.html"
import hit from "./templates/instantsearch/hit.html"
import hitWrapper from "./templates/instantsearch/hitWrapper.html"
import instantsearch from "instantsearch.js"
import loadMore from "./templates/instantsearch/loadMore.html"
import Mustache from "mustache"
import stats from "./templates/instantsearch/stats.html"

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

    const customInfiniteHits = instantsearch.connectors.connectInfiniteHits(
      this.infiniteHits
    )
    const hasSearch = document.querySelector(".search--input")

    this.options = Object.assign(defaultOptions, options)
    this.defaultWidgets = {
      hits: customInfiniteHits({
        container: ".section-search-results",
        escapeHits: true
      }),
      sections: instantsearch.widgets.refinementList({
        container: ".search-results--filters",
        attributeName: "section",
        operator: "or",
        limit: 10,
        templates: {
          header: "Sections"
        }
      }),
      stats: instantsearch.widgets.stats({
        container: "#stats",
        autoHideContainer: false,
        transformData: (data) => {
          data.page = ++data.page
          return data
        },
        templates: {
          body: stats
        }
      })
    }

    if (hasSearch) {
      this.defaultWidgets.searchBox = instantsearch.widgets.searchBox({
        container: ".search--input",
        wrapInput: false,
        magnifier: false,
        reset: false,
        poweredBy: false
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

    Object.keys(widgets).forEach((k) => {
      this.search.addWidget(widgets[k])
    })
  }

  infiniteHits(options, isFirst) {
    const container = document.querySelector(options.widgetParams.container)

    if (isFirst) {
      container.innerHTML = Mustache.render(
        hitWrapper,
        {},
        {loadMore: loadMore}
      )
    }

    const query = options.results ? options.results.query : null
    const loadMoreElement = container.querySelector("[data-load-more]")
    const shouldNotRender = options.results === undefined || query === ""
    const renderHits = () => {
      if (options.hits.length < 1) return Mustache.render(empty, {query: query})

      const hits = options.hits.map((h) => {
        h["FormatDate"] = function() {
          return function(date, render) {
            const calcTime = function(d, offset) {
              var utc = d.getTime() + d.getTimezoneOffset() * 60000
              return new Date(utc + 3600000 * offset)
            }

            date = parseInt(render(date))
            const d = new Date(date * 1000)
            const dt = calcTime(d, 0)
            const year = dt.getFullYear()
            const day = dt.getDate()
            const months = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ]
            const month = months[dt.getMonth()]
            return `${month} ${day}, ${year}`
          }
        }

        return Mustache.render(hit, h)
      })

      return hits.join("")
    }

    if (options.hits.length < 1 || options.isLastPage || shouldNotRender) {
      loadMoreElement.classList.add("hidden")
    } else {
      loadMoreElement.classList.remove("hidden")
    }

    if (shouldNotRender) {
      document.body.classList.remove("searching")
    } else {
      document.body.classList.add("searching")
    }

    loadMoreElement.addEventListener("click", (event) => {
      event.preventDefault()

      const initialState = loadMoreElement.innerHTML

      if (!shouldNotRender) {
        loadMoreElement.innerHTML = "Loading..."
        options.showMore()

        setTimeout(() => {
          loadMoreElement.innerHTML = initialState
        }, 1000)
      }
    })

    container.querySelector(".ais-infinite-hits").innerHTML = renderHits()
  }
}
