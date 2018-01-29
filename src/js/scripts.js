import "./imports/sidebarActiveState"
import CodeBlocks from "./imports/codeBlocks"
import contentLoaded from "content-loaded"
import EQCSS from "eqcss"
import HeadingLinks from "./imports/headingLinks"
import LazySizes from "lazysizes"
import LightBox from "./imports/lightbox"
import Nav from "./imports/nav"
import Search from "./imports/algoliaSearch/instantSearch"
import SmoothScroll from "./imports/smoothScroll"
import Sticky from "./imports/sticky"

/**
 * Don't fire application logic
 * until the DOM is ready
 */
contentLoaded().then(() => {
  const isHome = document.body.classList.contains("home")
  const isDocs = document.body.classList.contains("section-docs")
  const isBlog = document.body.classList.contains("section-blog")

  /**
   * Enable navbar logic
   */
  const nav = new Nav()

  /**
   * Enable search
   */
  if (isHome) {
    new Search(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_KEY,
      "dist"
    )
  } else if (isDocs) {
    new Search(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_KEY,
      "docs"
    )
  } else if (isBlog) {
    console.log(isBlog)
    new Search(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_KEY,
      "blog"
    )
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
