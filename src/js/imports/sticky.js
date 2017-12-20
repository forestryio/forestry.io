import Stickyfill from "stickyfilljs"

/**
 * Implements a polyfill for position: sticky;
 */
export default class Sticky {
  constructor(targets) {
    if (!targets) throw new Error("Missing targets")
    if (!Array.isArray(targets)) targets = [targets]

    this.targets = targets

    this.init(this.targets)
  }

  init(targets) {
    const elements = document.querySelectorAll(targets)
    Stickyfill.add(elements)
  }
}
