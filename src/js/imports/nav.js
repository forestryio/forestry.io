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
    this.toggle.addEventListener("click", (e) => {
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

  signedInState() {
    const user = readCookie("signed_in_user")
    const container = document.querySelector("li[data-user]")
    const toHide = document.querySelectorAll("li[data-signed-out]")
    const toShow = document.querySelectorAll("li[data-signed-in]")

    if (user) {
      const name = decodeURIComponent(user)
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
