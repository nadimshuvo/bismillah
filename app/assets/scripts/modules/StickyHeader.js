import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class stickyHeader {
    constructor() {
      this.siteHeader = document.querySelector(".header")
      this.browserHeight = window.innerHeight
      this.previousScrollY = window.scrollY
      this.events()
  }

  events() {
    window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
    window.addEventListener("resize", debounce(() => {
      this.browserHeight = window.innerHeight
    }, 333))
  }

  runOnScroll() {
    if (window.scrollY > 60) {
        this.siteHeader.classList.add("header--sticky")
      } else {
        this.siteHeader.classList.remove("header--sticky")
      }
    }
}

export default stickyHeader;