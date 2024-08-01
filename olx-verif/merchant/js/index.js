document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navMenu = document.querySelector(".nav__menu");

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
});
