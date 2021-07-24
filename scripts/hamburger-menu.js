const hamburgerMenuButton = document.querySelector(
  ".header-navigation__button--menu"
);
const hamburgerMenu = document.querySelector(".hamburger-menu");

function showHamburgerMenu() {
  hamburgerMenu.classList.toggle("hamburger-menu--active");
}

hamburgerMenuButton.addEventListener("click", showHamburgerMenu);
