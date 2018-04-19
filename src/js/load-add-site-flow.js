console.log("Load add site flow")
const addSiteHost = "https://assets.forestry.io/add-site/"
fetch(addSiteHost + "asset-manifest.json", {
  headers: {
    "Content-Type": "application/json"
  }
})
  .then((response) => response.json())
  .then(addManifestFiles)
  .catch((e) => console.log("Error", e))

function addManifestFiles(manifest) {
  addScriptTag(addSiteHost + manifest["main.js"])
  addStylesheet(addSiteHost + manifest["main.css"])
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
