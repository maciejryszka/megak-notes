const hamburgerMenuButton = document.querySelector(
  ".header-navigation__menu-button"
);
const hamburgerMenu = document.querySelector(".hamburger-menu");

function showHamburgerMenu() {
  hamburgerMenu.classList.toggle("hamburger-menu--active");
}

hamburgerMenuButton.addEventListener("click", showHamburgerMenu);
