class Menu {
  constructor(menuBtn, listContainer, activeClass) {
    this.hamburger = menuBtn;
    this.menuList = listContainer;
    this.activeClass = activeClass;
    this.firstHamburgerClass = this.hamburger.className.split();
  }

  openMenu() {
    this.hamburger.addEventListener("click", () => {
      this.menuList.classList.toggle(this.activeClass);
      this.hamburger.classList.toggle(`${this.firstHamburgerClass[0]}--active`);
    });
  }
}

export default Menu;
