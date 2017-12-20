import hljs from "highlight.js"
import Clipboard from "clipboard"

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
    const workerFunction = new Blob(["(" + highlight_worker_function.toString() + ")()"], {type: "text/javascript"})
    const localWorkerURL = URL.createObjectURL(workerFunction);

    function highlight_worker_function() {
      onmessage = function (event) {
        importScripts("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/highlight.min.js")
        self.hljs.configure(this.hljsOptions)
        var result = self.hljs.highlightAuto(event.data)
        postMessage(result.value)
        close()
      }
    }

    elements.forEach((element) => {
      const worker = new Worker(localWorkerURL)
      const contents = element.textContent || element.innerText

      worker.onmessage = (event) => {
        element.innerHTML = event.data
        element.classList.add("hljs")

      }
      worker.postMessage(contents)
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
