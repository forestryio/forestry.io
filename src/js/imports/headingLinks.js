/**
 * Generates links for headings inside
 * of the markdown body
 */
export default class HeadingLinks {
  constructor(targets) {
    if (!targets) throw new Error("No targets defined")

    this.targets = this.getTargets(targets)
    this.icon =
      '<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm832 928v352q0 22-20 30-8 2-12 2-12 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z"' +
      'transform="scale(0.00875)"></path></svg>'
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
