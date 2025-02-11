document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuBtn = document.querySelector(".burger-menu-btn");
  const closeMenuBtn = document.querySelector(".close-menu-btn");
  const burgerMenuOverlay = document.querySelector(".burger-menu-overlay");

  burgerMenuBtn.addEventListener("click", function () {
    burgerMenuOverlay.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", function () {
    burgerMenuOverlay.classList.remove("active");
  });

  burgerMenuOverlay.addEventListener("click", function (event) {
    if (event.target === burgerMenuOverlay) {
      burgerMenuOverlay.classList.remove("active");
    }
  });
});