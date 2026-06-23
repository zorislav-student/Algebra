document.addEventListener("DOMContentLoaded", main);

function main() {
    const workOrders = JSON.parse(localStorage.getItem("tmpWorkOrders")) || [];

    const submitButton = document.getElementById("submit");
    const cancelButton = document.getElementById("cancel");

    const workOrderNumberInput = document.getElementById("broj_naloga");
    const workOrderFormNumberInput = document.getElementById("narudzbenica");
    const workOrderDateInput = document.getElementById("datum_naloga");
    const workOrderRequesterInput = document.getElementById("narucitelj");
    const workOrderExecutorInput = document.getElementById("izvrsitelj");
    const workOrderPlaceOfCostInput = document.getElementById("mjesto_troska");
    const workOrderCostBearerInput = document.getElementById("nositelj_troska");
    const workOrderStartDateInput = document.getElementById("datum_pocetka");
    const workOrderStartTimeInput = document.getElementById("vrijeme_pocetka");
    const workOrderEndDateInput = document.getElementById("datum_zavrsetka");
    const workOrderEndTimeInput = document.getElementById("vrijeme_zavrsetka");
    const workOrderTitleInput = document.getElementById("naslov");
    const workOrderDescriptionInput = document.getElementById("opis");

    submitButton.addEventListener("click", handleSubmitClick);
    cancelButton.addEventListener("click", handleCancelClick);

    function handleSubmitClick(event) {
        event.preventDefault();
        
        const submitConfirmed = window.confirm("Želite li spremiti izmjene ?");

        if (submitConfirmed) {
            const newWorkOrder = {
                id: Math.random().toString(36).slice(5),
                brojNaloga: workOrderNumberInput.value,
                brojNarudzbe: workOrderFormNumberInput.value,
                datumNaloga: workOrderDateInput.value,
                narucitelj: workOrderRequesterInput.value,
                izvrsitelj: workOrderExecutorInput.value,
                mjestoTroska: workOrderPlaceOfCostInput.value,
                nositeljTroska: workOrderCostBearerInput.value,
                datumPocetka: workOrderStartDateInput.value,
                vrijemePocetka: workOrderStartTimeInput.value,
                datumZavrsetka: workOrderEndDateInput.value,
                vrijemeZavrsetka: workOrderEndTimeInput.value,
                naslov: workOrderTitleInput.value,
                opis: workOrderDescriptionInput.value
            };
            workOrders.push(newWorkOrder);

            localStorage.setItem("tmpWorkOrders", JSON.stringify(workOrders));

            window.open("lista.html", "_self")
        }
    }

    function handleCancelClick(event) {
        event.preventDefault();

        const cancelSubmit = window.confirm("Zelite li napusti unos bez spremanja ?");
        if (cancelSubmit) {
            window.open("lista.html", "_self");
        }
    }
}