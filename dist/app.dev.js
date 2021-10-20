"use strict";

function handleToggleMenu() {
  var menuToggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".header-menu");
  if (!menuToggle || !menu) return;
  menuToggle.addEventListener("click", function () {
    menu.classList.add("is-active");
  });
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
      menu.classList.remove("is-active");
    }
  });
}

handleToggleMenu();