import {isUndefined} from "util"
import readCookie from "../utils/cookies"

/**
 * Handles all logic for the fixed navbar
 */
export default class NavBar {
  constructor() {
    this.header = document.querySelector(".header")
    this.nav = document.querySelector(".nav")
    this.rightBlock = document.querySelector(".right-block")
    this.mainSignUp = document.querySelector(".signup-button.main")
    this.toggle = document.querySelector(".mini-nav--toggle")
    this.html = document.querySelector("html")
    this.body = document.querySelector("body")

    this.init()
  }

  init() {
    this.handleScroll()
    this.handleToggle()
    this.handleTOC()
    this.signedInState()
  }

  /**
   * Handles toggling the navbar state on scroll
   */
  handleScroll() {
    window.addEventListener("scroll", (e) => {
      const scroll = window.pageYOffset

      if (scroll >= 300) {
        this.header.classList.add("scrolled")
      } else {
        this.header.classList.remove("scrolled")
      }

      if (!isUndefined(this.mainSignUp) && this.mainSignUp !== null) {
        if (scroll >= 600) {
          this.mainSignUp.classList.remove("secondary")
          this.mainSignUp.classList.add("primary")
        } else if (scroll < 600) {
          this.mainSignUp.classList.remove("primary")
          this.mainSignUp.classList.add("secondary")
        }
      }
    })
  }

  /**
   * Binds toggle events for the mobile navigation
   */
  handleToggle() {
    this.toggle.addEventListener("click", (e) => {
      this.doToggle()
    })
  }

  /**
   * Executes toggle events for the mobile navigation
   */
  doToggle() {
    this.nav.classList.toggle("expanded")

    if (
      this.html.classList.contains("docs") ||
      this.body.classList.contains("docs")
    ) {
      this.html.classList.toggle("no-overflow")
      this.body.classList.toggle("no-overflow")
    }
  }

  /**
   * Dismisses the nav when a table of contents
   * link is clicked
   */
  handleTOC() {
    const links = Array.from(this.nav.getElementsByTagName("a")).filter(
      (link) => {
        return link.getAttribute("href").indexOf("#") >= 0
      }
    )

    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        this.doToggle()
      })
    )
  }

  /**
   * Conditionally shows the logged out/logged in
   * nav items, and injects data from the cookie
   */
  signedInState() {
    const user = readCookie("signed_in_user")
    const container = document.querySelector("li[data-user]")
    const toHide = document.querySelectorAll("li[data-signed-out]")
    const toShow = document.querySelectorAll("li[data-signed-in]")

    if (user) {
      const name = decodeURIComponent(user.replace(/\+/g, "%20"))
      const target = container.querySelector("a")

      toHide.forEach((e) => {
        e.setAttribute("data-signed-out", "false")
      })

      toShow.forEach((e) => {
        e.setAttribute("data-signed-in", "true")
      })

      if (target) {
        target.textContent = name
      }
    }
  }
}
