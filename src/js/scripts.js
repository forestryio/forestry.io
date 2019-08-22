import "./imports/sidebarActiveState"
import contentLoaded from "content-loaded"
import EQCSS from "eqcss"
import HeadingLinks from "./imports/headingLinks"
import LazySizes from "lazysizes"
import LightBox from "./imports/lightbox"
import Nav from "./imports/nav"
import Search from "./imports/algoliaSearch/instantSearch"
import SmoothScroll from "./imports/smoothScroll"
import Shuffle from "shufflejs"
import Sticky from "./imports/sticky"
import AjaxForm from "./imports/ajaxForm"
import ASBGenerator from "./imports/asbButtonGenerator"
import {setCodeTabs, initCodeTabs} from "./imports/code-tabs"

window.setCodeTabs = setCodeTabs
/**
 * Don't fire application logic
 * until the DOM is ready
 */
contentLoaded().then(() => {
  const isHome = document.body.classList.contains("home")
  const isDocs = document.body.classList.contains("section-docs")
  const isBlog = document.body.classList.contains("section-blog")
  const isPricing = document.body.classList.contains("type-pricing")
  const isStarter = document.body.classList.contains("type-starters")

  /**
   * Enable navbar logic
   */
  const nav = new Nav()

  /**
   * Enable search
   */
  try {
    if (isHome) {
      new Search(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_KEY,
        "dist"
      )
    } else if (isDocs) {
      new Search(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_KEY,
        "docs"
      )
    } else if (isBlog) {
      console.log(isBlog)
      new Search(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_KEY,
        "blog"
      )
    }
  } catch (err) {
    console.warn(err)
  }

  if (isPricing) {
    const info = [...document.querySelectorAll(".plan--item__tooltip-toggle")]

    info.forEach(function(item) {
      item.addEventListener("click", function(event) {
        item.nextElementSibling.classList.add("active")
        event.stopPropagation()
      })
      item.addEventListener("touchstart", function(event) {
        item.nextElementSibling.classList.add("active")
        event.stopPropagation()
      })
      document.body.addEventListener("click", function(event) {
        item.nextElementSibling.classList.remove("active")
        event.stopPropagation()
      })
      document.body.addEventListener("touchstart", function(event) {
        item.nextElementSibling.classList.remove("active")
        event.stopPropagation()
      })
    })
  }

  if (isStarter) {
    const starterGridElement = document.querySelector(".starter-grid")
    const starterGrid = new Shuffle(starterGridElement, {
      itemSelector: ".starter-grid--item",
      delimiter: ","
    })
    const starterFilters = [...document.querySelectorAll(".starter-filter")]
    const starters = [...document.querySelectorAll(".starter-card")]

    const openMenu = (starter) => {
      const menuNode = starter
        .querySelector(".starter-card--menu")
        .cloneNode(true)
      const mainWrapper = document.querySelector(".starter-list-wrapper")
      const cta = starter.querySelector(".starter-card--cta")
      const ctaBounding = cta.getBoundingClientRect()
      const starterBounding = starter.getBoundingClientRect()
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      closeMenu()

      mainWrapper.appendChild(menuNode)
      menuNode.classList.add("open")
      starter.classList.add("open")

      if (starterBounding.right + starterBounding.width > window.innerWidth) {
        /* If there's not enough room to the right of the card, open the menu to the bottom */
        starter.classList.add("menu-position-bottom")
        menuNode.classList.add("position-bottom")
        menuNode.style.top =
          ctaBounding.top + scrollTop + ctaBounding.height * 1.25 + "px"
        menuNode.style.left =
          ctaBounding.left + scrollLeft + ctaBounding.width + "px"
      } else {
        /* If there's enough room, open the menu to the right of the card */
        starter.classList.remove("menu-position-bottom")
        menuNode.style.top =
          ctaBounding.top + scrollTop + ctaBounding.height / 2 + "px"
        menuNode.style.left =
          ctaBounding.left + scrollLeft + ctaBounding.width + 16 + "px"
      }

      menuNode.addEventListener("click", function(event) {
        event.stopPropagation()
      })
      menuNode.addEventListener("touchstart", function(event) {
        event.stopPropagation()
      })
    }

    const closeMenu = (menu) => {
      const openMenus = [
        ...document.querySelectorAll(".starter-card--menu.open")
      ]
      const openStarterCards = [
        ...document.querySelectorAll(".starter-card.open")
      ]

      openStarterCards.forEach(function(starter) {
        starter.classList.remove("open")
      })

      openMenus.forEach(function(menu) {
        menu.classList.add("closed")

        setTimeout(function() {
          /* Wait until the closing animation is finished before removing */
          if (menu.parentNode) {
            menu.parentNode.removeChild(menu)
          }
        }, 1000)
      })
    }

    starterFilters.forEach(function(filter) {
      const type = filter.dataset.filter
      filter.addEventListener("click", function(event) {
        starterFilters.forEach(function(filter) {
          filter.classList.remove("black")
        })
        filter.classList.add("black")
        starterGrid.filter(type)
      })
    })

    starters.forEach(function(starter) {
      starter.preview = starter.querySelector(".starter-card--preview-link")

      starter.preview.addEventListener("click", function(event) {
        event.stopPropagation()
      })
      starter.addEventListener("click", function(event) {
        openMenu(starter)
        event.stopPropagation()
      })
      starter.addEventListener("touchstart", function(event) {
        openMenu(starter)
        event.stopPropagation()
      })
    })

    document.body.addEventListener("click", function(event) {
      closeMenu()
      event.stopPropagation()
    })
    document.body.addEventListener("touchstart", function(event) {
      closeMenu()
      event.stopPropagation()
    })
  }

  /**
   * Enable heading links
   */
  const headingLinks = new HeadingLinks([
    ".single-post",
    ".docs-content .container"
  ])

  /**
   * Actvate smooth scrolling for the entire
   * website for hash links
   */
  SmoothScroll()

  /**
   * Enable position sticky for certain elements
   */
  const sticky = new Sticky([".blog-header--sticky", ".search-header--sticky"])

  /**
   * Hook up add-site-button generator behavior
   */
  const asbGenerator = new ASBGenerator(document.getElementById("ASBGenerator"))

  /**
   * Enable lightboxes for images
   */
  const lightBoxes = new LightBox([".md-content img:not(.no-lightbox)"])

  /**
   * handle forms via ajax to avoid ungraceful redirect
   */
  let formspreeForms = document.querySelectorAll(
    'form[action^="https://formspree.io"]'
  )
  for (let i = 0; i < formspreeForms.length; i++) {
    new AjaxForm(formspreeForms[i])
  }

  /**
   * Tabbed code snippets
   */
  initCodeTabs()
})
