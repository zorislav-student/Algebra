document.addEventListener("DOMContentLoaded", main)

function main() {

    const urlParams = new URLSearchParams(window.location.search)
    const workOrderId = urlParams.get("id");

    const submitButtonElem = document.querySelector("button[type=submit]")
    const cancelButtomElem = document.querySelector("button[type=reset]")

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

    const workOrders = JSON.parse(localStorage.getItem("tmpWorkOrders") || "[]")
    const workOrderToDisplay = workOrders.find(workOrder => workOrder.id === workOrderId);

    workOrderNumberElem.value = workOrderToDisplay.brojNaloga;
    workOrderFormNumberElem.value = workOrderToDisplay.brojNarudzbe;
    workOrderDateElem.value = workOrderToDisplay.datumNaloga;
    workOrderRequesterElem.value = workOrderToDisplay.narucitelj;
    workOrderExecutorElem.value = workOrderToDisplay.izvrsitelj;
    workOrderPlaceOfCostElem.value = workOrderToDisplay.mjestoTroska;
    workOrderCostBearerElem.value = workOrderToDisplay.nositeljTroska;
    workOrderStartDateElem.value = workOrderToDisplay.datumPocetka;
    workOrderStartTimeElem.value = workOrderToDisplay.vrijemePocetka;
    workOrderEndDateElem.value = workOrderToDisplay.datumZavrsetka;
    workOrderEndTimeElem.value = workOrderToDisplay.vrijemeZavrsetka;
    workOrderTitleElem.value = workOrderToDisplay.naslov;
    workOrderDescriptionElem.value = workOrderToDisplay.opis;
    
    submitButtonElem.addEventListener("click", handleSubmitClick)
    cancelButtomElem.addEventListener("click", handleCancelClick);
    
    function handleSubmitClick(event) {
        event.preventDefault();
        
        const saveChanges = window.confirm("Spremi izmjene?")
        if (saveChanges) {
            workOrderToDisplay.brojNaloga = workOrderNumberElem.value; 
            workOrderToDisplay.brojNarudzbe = workOrderFormNumberElem.value;
            workOrderToDisplay.datumNaloga = workOrderDateElem.value;
            workOrderToDisplay.narucitelj = workOrderRequesterElem.value;
            workOrderToDisplay.izvrsitelj = workOrderExecutorElem.value;
            workOrderToDisplay.mjestoTroska = workOrderPlaceOfCostElem.value;
            workOrderToDisplay.nositeljTroska = workOrderCostBearerElem.value;
            workOrderToDisplay.datumPocetka = workOrderStartDateElem.value;
            workOrderToDisplay.vrijemePocetka = workOrderStartTimeElem.value;
            workOrderToDisplay.datumZavrsetka = workOrderEndDateElem.value;
            workOrderToDisplay.vrijemeZavrsetka = workOrderEndTimeElem.value;
            workOrderToDisplay.naslov = workOrderTitleElem.value;
            workOrderToDisplay.opis = workOrderDescriptionElem.value;

            localStorage.setItem("tmpWorkOrders", JSON.stringify(workOrders));

            window.open("lista.html", "_self")
        }
    }

    function handleCancelClick() {
        const cancelConfirmed = window.confirm("Napusti izmjenu bez spremanja?");
        if (cancelConfirmed) {
            window.open(`prikaz.html?id=${workOrderId}`, "_self")
        }
    }    
}
