import Menu from "./modules/menu";

const hamburger = document.querySelector(".menu__hamburger");
const menuList = document.querySelector(".menu");
const activeClass = "menu--active";

const newMenu = new Menu(hamburger, menuList, activeClass);

newMenu.openMenu();
