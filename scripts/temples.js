// Footer Year
document.getElementById("year").textContent =
new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent =
document.lastModified;

// Hamburger Menu

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {

navMenu.classList.toggle("open");

menuButton.textContent =
navMenu.classList.contains("open") ? "✖" : "☰";

});