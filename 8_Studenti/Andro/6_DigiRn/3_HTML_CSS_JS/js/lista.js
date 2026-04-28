import { toggleNav, ucitajFirebase } from "./shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEl = document.getElementById("hamburger-icon");
  let navEl = document.getElementsByTagName("nav")[0];
  let aUcitajEl = document.getElementById("ucitaj");
  let tBodyEl = document.getElementsByTagName("tbody")[0];

  document.addEventListener("click", (event) => {
    let navElDisplay = window.getComputedStyle(navEl).display;

    if (!event.target.closest("div") && navElDisplay === "block") {
      toggleNav(hamburgerEl, navEl);
    }
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, navEl));
  aUcitajEl.addEventListener("click", ucitajNaloge);

  async function ucitajNaloge() {
    const answer = confirm("Učitaj naloge iz baze?");

    if (answer) {
      //ucitaj naloge
      console.log("učitavam naloge...");
      const nalozi = await ucitajFirebase();

      console.log(nalozi);

      prikaziNaloge(nalozi);
    }
  }

  function prikaziNaloge(nalozi) {
    while (tBodyEl.firstChild) {
      tBodyEl.firstChild.remove();
    }

    nalozi.forEach((data, index) => {
      let trEl = document.createElement("tr");

      let tdEl = document.createElement("td");
      tdEl.innerText = index + 1;
      trEl.append(tdEl);

      let brojNalogaEl = document.createElement("td");
      let datumNalogaEl = document.createElement("td");
      let datumPocetkaEl = document.createElement("td");
      let datumZavrsetkaEl = document.createElement("td");
      let naruciteljEl = document.createElement("td");
      let izvrsiteljEl = document.createElement("td");
      let naslovEl = document.createElement("td");

      brojNalogaEl.innerText = data["brojNaloga"];
      datumNalogaEl.innerText = data["datumNaloga"];
      datumPocetkaEl.innerText = data["datumPocetka"];
      datumZavrsetkaEl.innerText = data["datumZavrsetka"];
      naruciteljEl.innerText = data["narucitelj"];
      izvrsiteljEl.innerText = data["izvrsitelj"];
      naslovEl.innerText = data["naslov"];

      trEl.appendChild(brojNalogaEl);
      trEl.appendChild(datumNalogaEl);
      trEl.appendChild(datumPocetkaEl);
      trEl.appendChild(datumZavrsetkaEl);
      trEl.appendChild(naruciteljEl);
      trEl.appendChild(izvrsiteljEl);
      trEl.appendChild(naslovEl);

      tBodyEl.appendChild(trEl);
    });
  }
}
