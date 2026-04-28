import { toggleNav } from "./js/shared/functions.js";

// Nakon ucitavanja dokumenta startaj funkciju main
document.addEventListener("DOMContentLoaded", main);

// Glavna funkcija skripte
function main() {
  // Varijable elemenata
  let hamburgerEl = document.getElementById("hamburger-icon");
  let navEl = document.getElementsByTagName("nav")[0];

  // Event listeneri
  document.addEventListener("click", (event) => {
    const navElDisplay = window.getComputedStyle(navEl).display;
    if (!event.target.closest("div") && navElDisplay === "block")
      toggleNav(hamburgerEl, navEl);
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, navEl));
}
