import {isUndefined} from "util"

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

    this.handleScroll()
    this.handleToggle()
  }

  /**
   * Handles toggling the navbar state on scroll
   */
  handleScroll() {
    window.addEventListener("scroll", e => {
      const scroll = window.pageYOffset

      if (scroll >= 300) {
        this.header.classList.add("scrolled")
      } else {
        this.header.classList.remove("scrolled")
      }

      if (this.mainSignup != null && !isUndefined(this.mainSignUp)) {
        console.log(this.mainSignUp, scroll)
        if (scroll >= 600) {
          this.mainSignUp.classList.remove("secondary")
          this.mainSignUp.classList.add("primary")
        } else {
          this.mainSignUp.classList.remove("primary")
          this.mainSignUp.classList.add("secondary")
        }
      }
    })
  }

  /**
   * Handles toggling the mobile navigation
   */
  handleToggle() {
    this.toggle.addEventListener("click", e => {
      this.nav.classList.toggle("expanded")

      if (
        this.html.classList.contains("docs") ||
        this.body.classList.contains("docs")
      ) {
        this.html.classList.toggle("no-overflow")
        this.body.classList.toggle("no-overflow")
      }
    })
  }
}
