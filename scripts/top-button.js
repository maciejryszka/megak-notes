const topButton = document.querySelector(".header-navigation__button--top");

function goToTheTop() {
  window.scrollTo(0, 0);
}

topButton.addEventListener("click", goToTheTop);

// visibility

window.addEventListener("scroll", () =>
  window.scrollY >= 500
    ? (topButton.style.display = "block")
    : (topButton.style.display = "none")
);
