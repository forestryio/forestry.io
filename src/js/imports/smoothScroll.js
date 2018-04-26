/**
 * Activate a smoothscroll polyfill
 * http://iamdustan.com/smoothscroll/
 */
require("smoothscroll-polyfill").polyfill()

/**
 * Binds the smoothscroll action to
 * valid anchors
 */
export default function bindSmoothScroll() {
  const anchorSelector = 'a[href*="#"]'
  const targets = document.querySelectorAll(anchorSelector)

  document.onreadystatechange = (e) => {
    if (document.readyState === "complete") {
      targets.forEach((t) => {
        t.addEventListener("click", (e) => {
          const element = document.getElementById(event.target.hash.substr(1))
          if (element) {
            scrollTo(element, 3000, "top")
            element.scrollIntoView({
              top: element.getBoundingClientRect().top,
              left: element.getBoundingClientRect().left,
              behavior: "smooth"
            })
          }
        })
      })
    }
  }
}
