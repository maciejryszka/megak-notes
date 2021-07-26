const hamburgerMenuButton = document.querySelector(
  ".header-navigation__button--menu"
);
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mainElement = document.querySelector(".main");

function showHamburgerMenu() {
  hamburgerMenu.classList.toggle("hamburger-menu--active");
}

function hideHamburgerMenu() {
  hamburgerMenu.classList.remove("hamburger-menu--active");
}

hamburgerMenuButton.addEventListener("click", showHamburgerMenu);
mainElement.addEventListener("click", hideHamburgerMenu);
