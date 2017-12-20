import contentLoaded from "content-loaded"
import "./imports/sidebarActiveState"
import "./imports/lazyload"
import Nav from "./imports/nav"
//import Search from "./imports/algoliaSearch"
import HeadingLinks from "./imports/headingLinks"
import SmoothScroll from "./imports/smoothScroll"
import Sticky from "./imports/sticky"
import CodeBlocks from "./imports/codeBlocks";

/**
 * Don't fire application logic
 * until the DOM is ready
 */
contentLoaded().then(() => {

  /**
   * Enable navbar logic
   */
  const nav = new Nav()

  /**
   * Enable search
   */
  //const search = new Search("80HKRA52OJ", "f13c10ad814c92b85f380deadc2db2dc", "www")

  /**
   * Enable heading links
   */
  const headingLinks = new HeadingLinks([".single-post", ".docs-content .container"])

  /**
   * Actvate smooth scrolling for the entire
   * website for hash links
   */
  SmoothScroll()

  /**
   * Enable position sticky for certain elements
   */
  const sticky = new Sticky([".blog-header--sticky"])

  /**
   * Enable code highlighting and copying
   */
  const codeBlocks = new CodeBlocks()
})
