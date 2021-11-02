class Menu {
  constructor(menuBtn, listContainer) {
    this.hamburger = menuBtn;
    this.menuList = listContainer;
  }

  openMenu() {
    this.hamburger.addEventListener("click", () => {
      this.menuList.classList.toggle("menu__content--active");
    });
  }
}

export default Menu;
