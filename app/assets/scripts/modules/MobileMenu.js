class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".header__menu-icon")
        this.menuContent = document.querySelector(".nav")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        console.log("Button clicked")
        this.menuContent.classList.toggle("nav--is-expanded")
        this.menuContent.classList.toggle("nav--is-visible")
        this.menuIcon.classList.toggle("header__menu-icon--close-x")
    }
}

export default MobileMenu