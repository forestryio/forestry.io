import gumshoe from "gumshoe"

/**
 * Dynamically highlights sidebar table of contents
 * links as they scroll into view
 */
gumshoe.init({
  selector: ".sidebar--table-of-contents a", // Default link selector (must use a valid CSS selector)
  container: window, // The element to spy on scrolling in (must be a valid DOM Node)
  activeClass: "active", // Class to apply to active navigation link and its parent list item
  scrollDelay: true // Wait until scrolling has stopped before updating the navigation
})
