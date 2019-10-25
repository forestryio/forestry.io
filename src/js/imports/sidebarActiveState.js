import Gumshoe from "gumshoejs"

let spy = new Gumshoe(".sidebar .table-of-contents a", {
  offset: "80px"
})

/**
 * Scroll active sidebar item into view
 */
var scrollPane = document.querySelector(".sidebar-inner")
var activeSidebar = document.querySelector(".sidebar a.active")

if (activeSidebar) {
  scrollToElement(scrollPane, activeSidebar)
}

/**
 * Scrolls to the child node inside of an overflow parent
 * @param {Node} parent
 * @param {Node} child
 */
function scrollToElement(parent, child) {
  var topPos = child.offsetTop
  parent.scrollTop = topPos - 64
}
