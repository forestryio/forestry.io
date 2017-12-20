/**
 * Generates links for headings inside
 * of the markdown body
 */
export default class HeadingLinks {
  constructor(targets) {
    if (!targets) throw new Error("No targets defined")

    this.targets = this.getTargets(targets)
    this.icon = "<svg height=\"16px\" viewBox=\"0 0 24 24\" width=\"16px\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>"
    this.minLevel = 2
    this.maxLevel = 6

    this.linkifyTargets()
  }

  /**
   * Returns all target elements
   * @param {Array} targets
   * @return {Array} targetElements
   */
  getTargets(targets) {
    if (!Array.isArray(targets)) {
      targets = [targets]
    }

    return targets.map((t) => {
      return document.querySelector(t)
    })
  }

  /**
   * Given a heading ID, generate a valid
   * anchor element for the heading
   * @param {String} id
   */
  anchorForId(id) {
    var anchor = document.createElement("a")
    anchor.href = `${window.location.pathname}#${id}`
    anchor.setAttribute("data-scroll", "")
    return anchor
  }

  /**
   * Adds the hash anchor to the target element
   * @param {Element} element
   * @param {Element} anchor
   */
  addAnchor(element, anchor) {
    const inside = element.innerHTML

    anchor = anchor || document.createElement("span")
    anchor.innerHTML = inside
    anchor.innerHTML += this.icon
    element.innerHTML = ""
    element.appendChild(anchor)
    element.setAttribute("data-hlink", "")

    return element
  }

  /**
   * Loops through all headings in the target
   * element and adds an achor to them
   * @param {Int} level
   * @param {Element} container
   */
  linkifyHeadings(level, container) {
    var headers = container.getElementsByTagName("h" + level)
    for (var h = 0; h < headers.length; h++) {
      var header = headers[h]

      if (typeof header.id !== "undefined" && header.id !== "") {
        var anchor = this.anchorForId(header.id)
        var wrapped = this.addAnchor(header, anchor)
        header.replaceWith(wrapped)
      }
    }
  }

  /**
   * Runs through all target elements
   * and linkifys their headings
   */
  linkifyTargets() {
    this.targets.forEach((t) => {
      if (t !== null) {
        for (var level = this.minLevel; level <= this.maxLevel; level++) {
          this.linkifyHeadings(level, t)
        }
      }
    })
  }
}
