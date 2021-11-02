import Menu from "./modules/menu";

const hamburger = document.querySelector(".menu__hamburger");
const menuList = document.querySelector(".menu__content");

const newMenu = new Menu(hamburger, menuList);

newMenu.openMenu();
