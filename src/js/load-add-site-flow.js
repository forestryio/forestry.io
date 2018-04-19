console.log("Load add site flow")

fetch("https://assets.forestry.io/add-site/asset-manifest.json", {
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then((response) => console.log(response) || response.json())
  .then(addManifestFiles)
  .catch((e) => console.log("Error", e))

function addManifestFiles(manifest) {
  addScriptTag(manifest["main.js"])
  addStylesheet(manifest["main.css"])
}

function addScriptTag(url) {
  const el = document.createElement("script")
  el.setAttribute("src", url)
  el.setAttribute("type", "text/javascript")
  document.body.appendChild(el)
}

function addStylesheet(url) {
  const el = document.createElement("link")
  el.setAttribute("href", url)
  el.setAttribute("rel", "text/css")
  document.body.appendChild(el)
}
