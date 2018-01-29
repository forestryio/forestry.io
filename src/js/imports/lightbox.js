import {isUndefined} from "util"

/**
 * Adds a simple lightbox to images
 * @param {string} targets
 */
export default class Lightbox {
  constructor(targets) {
    if (!targets) throw new Error("Missing targets")

    this.targets = targets

    this.init()
  }

  init() {
    this.nodes = this.getTargets(this.targets)
    this.bindClick(this.nodes)
    this.bindEscape()
  }

  getTargets(targets) {
    if (!targets) return false

    return document.querySelectorAll(targets)
  }

  bindClick(nodes) {
    this.nodes.forEach((n) => {
      n.addEventListener("click", () => {
        this.toggle(n)
      })
    })
  }

  bindEscape() {
    document.onkeydown = (e) => {
      e = e || window.event
      var isEscape = false

      if ("key" in e) {
        isEscape = e.key == "Escape" || e.key == "Esc"
      } else {
        isEscape = e.keyCode == 27
      }

      if (isEscape) {
        this.toggle()
      }
    }
  }

  generate(node) {
    if (!node) return false

    const lightbox = document.createElement("div")

    lightbox.classList.add("lightbox")
    lightbox.innerHTML = node.outerHTML

    const img = lightbox.querySelector("img")
    img.setAttribute("sizes", "100vw")
    img.classList.remove("lazyloaded")
    img.classList.add("lazyload")

    return lightbox
  }

  toggle(n) {
    const oldLightBoxes = document.querySelectorAll(".lightbox")

    oldLightBoxes.forEach((l) => {
      document.body.removeChild(l)
    })

    document.body.classList.remove("no-overflow")

    if (!isUndefined(n)) {
      const newLightBox = this.generate(n)

      newLightBox.addEventListener("click", () => {
        this.toggle()
      })

      document.body.classList.add("no-overflow")
      document.body.appendChild(newLightBox)
    }
  }
}
