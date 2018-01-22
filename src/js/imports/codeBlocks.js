import Clipboard from "clipboard"

/**
 * Adds hljs highlighting and a copy button
 * to codeblocks
 * @param {Object} options
 * @param {String|Array[String]} options.copyClass
 * @param {String} options.copyText
 * @param {String} options.copySuccessText
 * @param {Number} options.copyTimeout
 * @param {Array[String]} options.copyTargets
 * @param {Array[String]} options.highlightTargets
 * @param {Object} options.hljsOptions
 */
export default class CodeBlock {
  constructor(options) {
    if (typeof options !== Object) options = {}

    const defaultOptions = {
      copyClass: ["code--copy", "button", "main", "small"],
      copyText: "Copy",
      copySuccessText: "Copied!",
      copyTimeout: 1000,
      copyTargets: ["pre"],
      highlightTargets: ["pre code"],
      hljsOptions: {
        tabReplace: 4
      }
    }

    this.options = Object.assign(defaultOptions, options)

    this.init()
  }

  init() {
    this.setupHighlighting(() => {
      if (Clipboard.isSupported()) {
        this.setupCopy()
      }
    })
  }

  setupHighlighting(cb) {
    const elements = document.querySelectorAll(this.options.highlightTargets)

    elements.forEach((element) => {
      const worker = new Worker("/js/hljs.worker.min.js")
      const contents = element.textContent || element.innerText

      worker.onmessage = (event) => {
        element.innerHTML = event.data
        element.classList.add("hljs")
      }

      worker.postMessage(element.textContent || element.innerText)
    })

    cb()
  }

  setupCopy() {
    const elements = document.querySelectorAll(this.options.copyTargets)

    elements.forEach((element) => {
      const contents = element.textContent || element.innerText
      const copyButton = document.createElement("span")
      copyButton.classList.add(...this.options.copyClass)
      copyButton.innerHTML = this.options.copyText
      copyButton.setAttribute("data-clipboard-text", contents)
      const clipboard = new Clipboard(copyButton)
      const newElement = this.addElement(element, copyButton)

      clipboard.on("success", (e) => {
        e.trigger.innerHTML = this.options.copySuccessText
        e.clearSelection()

        setTimeout(() => {
          e.trigger.innerHTML = this.options.copyText
        }, this.options.copyTimeout)
      })

      if (element.parent) {
        element.parent.innerHTML = newElement.outerHTML
      }
    })
  }

  addElement(parent, element) {
    element = element || document.createElement("span")
    parent.appendChild(element)

    return parent
  }
}
