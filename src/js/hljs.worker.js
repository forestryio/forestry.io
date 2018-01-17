onmessage = function(event) {
  self.hljs = require("highlight.js")
  self.hljs.configure(this.hljsOptions)
  var result = self.hljs.highlightAuto(event.data)
  postMessage(result.value)
  close()
}
