import "./imports/sidebarActiveState"
import "./imports/lazyload"
import CodeBlocks from "./imports/codeBlocks"
import contentLoaded from "content-loaded"
import EQCSS from "eqcss"
import HeadingLinks from "./imports/headingLinks"
import LightBox from "./imports/lightbox"
import Nav from "./imports/nav"
import Search from "./imports/algoliaSearch/instantSearch"
import SmoothScroll from "./imports/smoothScroll"
import Sticky from "./imports/sticky"

let ENV_VARS = process.env

if (ENV_VARS.NODE_ENV !== "production" || ENV_VARS.HUGO_ARGS === "staging") {
  ENV_VARS = require("../../.env.js").default
}

/**
 * Don't fire application logic
 * until the DOM is ready
 */
contentLoaded().then(() => {
  const isHome = document.body.classList.contains("home")
  const isDocs = document.body.classList.contains("docs")
  const isBlog = document.body.classList.contains("blog")

  /**
   * Enable navbar logic
   */
  const nav = new Nav()

  /**
   * Enable search
   */
  if (isHome) {
    new Search(ENV_VARS.ALGOLIA_APP_ID, ENV_VARS.ALGOLIA_SEARCH_KEY, "dist")
  } else if (isDocs) {
    new Search(ENV_VARS.ALGOLIA_APP_ID, ENV_VARS.ALGOLIA_SEARCH_KEY, "docs")
  } else if (isBlog) {
    new Search(ENV_VARS.ALGOLIA_APP_ID, ENV_VARS.ALGOLIA_SEARCH_KEY, "blog")
  }

  /**
   * Enable heading links
   */
  const headingLinks = new HeadingLinks([
    ".single-post",
    ".docs-content .container"
  ])

  /**
   * Actvate smooth scrolling for the entire
   * website for hash links
   */
  SmoothScroll()

  /**
   * Enable position sticky for certain elements
   */
  const sticky = new Sticky([".blog-header--sticky", ".search-header--sticky"])

  /**
   * Enable code highlighting and copying
   */
  const codeBlocks = new CodeBlocks()

  /**
   * Enable lightboxes for images
   */
  const lightBoxes = new LightBox([".md-content img"])
})
