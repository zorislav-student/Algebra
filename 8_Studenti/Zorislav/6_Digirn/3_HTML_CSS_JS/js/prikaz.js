import { toggleNav } from "./shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEl = document.getElementById("hamburger-icon");
  let navEl = document.getElementsByTagName("nav")[0];

  let brojNalogaEl = document.getElementById("broj-naloga");
  let brojNarudzbeEl = document.getElementById("broj-narudzbe");
  let datumNalogaEl = document.getElementById("datum-naloga");
  let naruciteljEl = document.getElementById("narucitelj");
  let izvrsiteljEl = document.getElementById("izvrsitelj");
  let mjestoTroskaEl = document.getElementById("mjesto-troska");
  let nositeljTroskaEl = document.getElementById("nositelj-troska");
  let datumPocetkaEl = document.getElementById("datum-pocetka");
  let vrijemePocetkaEl = document.getElementById("vrijeme-pocetka");
  let datumZavrsetkaEl = document.getElementById("datum-zavrsetka");
  let vrijemeZavrsetkaEl = document.getElementById("vrijeme-zavrsetka");
  let naslovEl = document.getElementById("naslov");
  let opisEl = document.getElementById("opis");
  let aIzmjenaEl = document.getElementById("izmjena");
  let aBrisanjeEl = document.getElementById("brisanje");

  const nalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

  const urlParams = new URLSearchParams(window.location.search);
  const odabraniNalogId = urlParams.get("id");

  document.addEventListener("click", (event) => {
    let navElDisplay = window.getComputedStyle(navEl).display;

    if (!event.target.closest("div") && navElDisplay === "block") {
      toggleNav(hamburgerEl, navEl);
    }
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, navEl));

  aIzmjenaEl.addEventListener("click", (event) => {
    event.preventDefault();
    window.open(`izmjena.html?id=${odabraniNalogId}`, "_self");
  });

  aBrisanjeEl.addEventListener("click", (event) => {
    event.preventDefault();
    const answer = window.confirm("Obriši nalog?");
    if (answer) {
      const nalogIndex = nalozi.indexOf(odabraniNalog);
      nalozi.splice(nalogIndex, 1);
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
      window.open("lista.html", "_self");
    }
  });

  const odabraniNalog = nalozi.find((nalog) => nalog.id === odabraniNalogId);

  brojNalogaEl.innerText = odabraniNalog.brojNaloga;
  brojNarudzbeEl.innerText = odabraniNalog.brojNarudzbe;
  datumNalogaEl.innerText = odabraniNalog.datumNaloga;
  naruciteljEl.innerText = odabraniNalog.narucitelj;
  izvrsiteljEl.innerText = odabraniNalog.izvrsitelj;
  mjestoTroskaEl.innerText = odabraniNalog.mjestoTroska;
  nositeljTroskaEl.innerText = odabraniNalog.nositeljTroska;
  datumPocetkaEl.innerText = odabraniNalog.datumPocetka;
  vrijemePocetkaEl.innerText = odabraniNalog.vrijemePocetka;
  datumZavrsetkaEl.innerText = odabraniNalog.datumZavrsetka;
  vrijemeZavrsetkaEl.innerText = odabraniNalog.vrijemeZavrsetka;
  naslovEl.innerText = odabraniNalog.naslov;
  opisEl.innerText = odabraniNalog.opis;
}
