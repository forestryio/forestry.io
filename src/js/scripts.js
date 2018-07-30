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
import AjaxForm from "./imports/ajaxForm"

/**
 * Don't fire application logic
 * until the DOM is ready
 */
contentLoaded().then(() => {
  const isHome = document.body.classList.contains("home")
  const isDocs = document.body.classList.contains("section-docs")
  const isBlog = document.body.classList.contains("section-blog")
  const isPricing = document.body.classList.contains("type-pricing")

  /**
   * Enable navbar logic
   */
  const nav = new Nav()

  /**
   * Enable search
   */
  try {
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
  } catch (err) {
    console.warn(err)
  }

  if (isPricing) {
    const info = [...document.querySelectorAll(".plan--item__tooltip-toggle")]
    info.forEach(function(item) {
      item.addEventListener("click", function(event) {
        item.nextElementSibling.classList.add("active")
        event.stopPropagation()
      })
      item.addEventListener("touchstart", function(event) {
        item.nextElementSibling.classList.add("active")
        event.stopPropagation()
      })
      document.body.addEventListener("click", function(event) {
        item.nextElementSibling.classList.remove("active")
        event.stopPropagation()
      })
      document.body.addEventListener("touchstart", function(event) {
        item.nextElementSibling.classList.remove("active")
        event.stopPropagation()
      })
    })
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

  const ajaxForm = new AjaxForm("")
})
