import { toggleNav } from "./shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
    const urlParams = new URLSearchParams(window.location.search);
    const workOrderId = urlParams.get("id")

    const humburgerElem = document.getElementById("hamburger-icon");
    const navElem = document.getElementsByTagName("nav")[0];

    const workOrderNumberElem = document.getElementById("broj_naloga");
    const workOrderFormNumberElem = document.getElementById("narudzbenica");
    const workOrderDateElem = document.getElementById("datum_naloga");
    const workOrderRequesterElem = document.getElementById("narucitelj");
    const workOrderExecutorElem = document.getElementById("izvrsitelj");
    const workOrderPlaceOfCostElem = document.getElementById("mjesto_troska");
    const workOrderCostBearerElem = document.getElementById("nositelj_troska");
    const workOrderStartDateElem = document.getElementById("datum_pocetka");
    const workOrderStartTimeElem = document.getElementById("vrijeme_pocetka");
    const workOrderEndDateElem = document.getElementById("datum_zavrsetka");
    const workOrderEndTimeElem = document.getElementById("vrijeme_zavrsetka");
    const workOrderTitleElem = document.getElementById("naslov");
    const workOrderDescriptionElem = document.getElementById("opis");

    const workOrderEditOptionElem = document.getElementById("workOrderEditOption")
    const workOrderDeleteOptionElem = document.getElementById("workOrderDeleteOption")

    const workOrders = JSON.parse(localStorage.getItem("tmpWorkOrders") || "[]")
    const workOrderToDisplay = workOrders.find(workOrder => workOrder.id === workOrderId);

    workOrderNumberElem.innerText = workOrderToDisplay.brojNaloga;
    workOrderFormNumberElem.innerText = workOrderToDisplay.brojNarudzbe;
    workOrderDateElem.innerText = workOrderToDisplay.datumNaloga;
    workOrderRequesterElem.innerText = workOrderToDisplay.narucitelj;
    workOrderExecutorElem.innerText = workOrderToDisplay.izvrsitelj;
    workOrderPlaceOfCostElem.innerText = workOrderToDisplay.mjestoTroska;
    workOrderCostBearerElem.innerText = workOrderToDisplay.nositeljTroska;
    workOrderStartDateElem.innerText = workOrderToDisplay.datumPocetka;
    workOrderStartTimeElem.innerText = workOrderToDisplay.vrijemePocetka;
    workOrderEndDateElem.innerText = workOrderToDisplay.datumZavrsetka;
    workOrderEndTimeElem.innerText = workOrderToDisplay.vrijemeZavrsetka;
    workOrderTitleElem.innerText = workOrderToDisplay.naslov;
    workOrderDescriptionElem.innerText = workOrderToDisplay.opis;

    humburgerElem.addEventListener("click", () => toggleNav(humburgerElem, navElem));
    document.addEventListener("click", (event) => {
        const navEnabled = navElem.classList.contains("open");
        if (event.target !== humburgerElem && event.target.parentNode !== humburgerElem && navEnabled) {
            toggleNav(humburgerElem, navElem);
        }
    })
    
    workOrderEditOptionElem.addEventListener("click", (event) => {
        event.preventDefault();
        window.open(`izmjena.html?id=${workOrderId}`, "_self")

    })    

    workOrderDeleteOptionElem.addEventListener("click", (event) => {
        event.preventDefault();
        const deleteWorkOrder = window.confirm("Želite li obrisati nalog?");
        if (deleteWorkOrder) {
            const currentWorkOrderIdx = workOrders.indexOf(workOrderToDisplay);
            workOrders.splice(currentWorkOrderIdx,1); // splice(start, deleteCount)
            
            window.localStorage.setItem("tmpWorkOrders", JSON.stringify(workOrders));
            
            window.open("lista.html", "_self")
        }
    })
}  