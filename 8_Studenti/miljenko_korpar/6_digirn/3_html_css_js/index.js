import { toggleNav } from "./js/shared/functions.js"

document.addEventListener("DOMContentLoaded", main) // slicno kao "load" event na window objektu

function main() {
    const humburgerElem = document.getElementById("hamburger-icon");
    const navElem = document.getElementsByTagName("nav")[0];

    humburgerElem.addEventListener("click", () => toggleNav(humburgerElem, navElem));
    document.addEventListener("click", (e) => {
        const navEnabled = navElem.classList.contains("open");
        if (e.target !== humburgerElem && e.target.parentNode !== humburgerElem && navEnabled) {
            toggleNav(humburgerElem, navElem);
        }
    })
}

var myTestGlobalVar = "itWorks";