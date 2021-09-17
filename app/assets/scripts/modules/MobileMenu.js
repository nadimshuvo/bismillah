class MobileMenu {
    constructor() {
      this.menuIcon = document.querySelector(".header__menu-icon")
      this.events()
    }
  
    events() {
      this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }
  
    toggleTheMenu() {           
      this.menuIcon.classList.toggle("header__menu-icon--close-x")
    }
  }
  
  export default MobileMenu