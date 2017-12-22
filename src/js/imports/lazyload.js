import lazysizes from "lazysizes"

const isProduction = process.env.NODE_ENV === "production"

/**
 * Lazy loads images when they are in viewport or close
 * to coming into the viewport, to save bandwidth and
 * handle animations
 * https://www.npmjs.com/package/lazysizes
 */
document.addEventListener("lazybeforeunveil", (e) => {
  const srcset = e.target.getAttribute("data-srcset").split(", ")
  if (srcset[0]) {
    const replaceRE = new RegExp(".*?[s](.*?w)")
    const lowestQuality = replaceRE.exec(srcset[0])
    if (lowestQuality[0]) {
      e.target.style.src = "url(" + lowestQuality[0] + ")"
    }
  }
})
