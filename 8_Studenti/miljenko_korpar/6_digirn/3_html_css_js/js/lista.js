import { toggleNav, loadWorkOrdersFromDB, saveWorkOrdersToDB } from "./shared/functions.js"

document.addEventListener("DOMContentLoaded", main) // slicno kao "load" event na window objektu

function main() {
    const humburgerElem = document.getElementById("hamburger-icon");
    const navElem = document.getElementsByTagName("nav")[0];
    const menuLoadOptionElem = document.getElementById("load");
    const saveWorkOrdersOptionElem  = document.getElementById("save-work-orders");
    const tableElem = document.getElementsByTagName("table")[0];
    const noWorkOrdersElem = document.getElementById("nema-naloga");

    humburgerElem.addEventListener("click", () => toggleNav(humburgerElem, navElem));
    document.addEventListener("click", (event) => {
        const navEnabled = navElem.classList.contains("open");
        if (event.target !== humburgerElem && event.target.parentNode !== humburgerElem && navEnabled) {
            toggleNav(humburgerElem, navElem);
        }
    })

    menuLoadOptionElem.addEventListener("click", loadWorkOrders)
    async function loadWorkOrders() {
        const answer = confirm("Želite li učitati naloge iz baze ?");

        if (answer) {
            console.log("Loading work orders...")
            const workOrders = await loadWorkOrdersFromDB();
            console.log(`Loaded work orders from DB:\n ${JSON.stringify(workOrders)}`);

            if (workOrders) {
                localStorage.setItem("tmpWorkOrders", JSON.stringify(workOrders));
            } else {
                localStorage.setItem("tmpWorkOrder", JSON.stringify([]));
            }

            showWorkOrdersInTable(workOrders);
        }
    }

    saveWorkOrdersOptionElem.addEventListener("click", persistTmpWorkOrders);

    function showWorkOrdersFromLocalStorage() {
        const tmpWorkOrders = localStorage.getItem("tmpWorkOrders") || "[]";
        const workOrders = JSON.parse(tmpWorkOrders);

        console.log(`tmp work orders:${tmpWorkOrders}`);
        showWorkOrdersInTable(workOrders);
    }

    function showWorkOrdersInTable(workOrders) {
        const tableBody = tableElem.tBodies[0];
        while(tableBody.firstChild) {
            tableBody.firstChild.remove();
        }

        if (workOrders.length === 0) {
            noWorkOrdersElem.style.display = 'block';
            return;
        } 
        noWorkOrdersElem.style.display = 'none';

        workOrders.forEach((workOrder, idx) => {
            // const newRow = tableElem.insertRow(idx + 1); // row[0] je header, pa je prvi data row row[1]
            const newRow = tableBody.insertRow(); // mozemo i samo ovako
            newRow.title = "Odaberi za prikaz/izmjenu/brisanje naloga."
            newRow.addEventListener("click", () => {
                openWorkOrder(workOrder);
            })
            
            const workOrderNumberCol = newRow.insertCell();
            workOrderNumberCol.innerText = `${workOrder.brojNaloga}.`; 
            const workOrderCodeCol = newRow.insertCell();
            workOrderCodeCol.innerText = workOrder.id;
            const workOrderDateCol = newRow.insertCell();
            workOrderDateCol.innerText = workOrder.datumNaloga; 
            workOrderDateCol.classList.add("table-col-hide");
            const workOrderStartDateCol = newRow.insertCell();
            workOrderStartDateCol.innerText = workOrder.datumPocetka;
            workOrderStartDateCol.classList.add("table-col-hide");
            const workOrderEndDateCol = newRow.insertCell();
            workOrderEndDateCol.innerText = workOrder.datumZavrsetka;
            workOrderEndDateCol.classList.add("table-col-hide"); 
            const workOrderRequesterCol = newRow.insertCell();
            workOrderRequesterCol.innerText = workOrder.narucitelj; 
            const workOrderExecutorCol = newRow.insertCell();
            workOrderExecutorCol.innerText = workOrder.izvrsitelj; 
            const workOrderTitleCol = newRow.insertCell();
            workOrderTitleCol.innerText = workOrder.naslov;
            workOrderTitleCol.classList.add("table-col-hide");

            // mogli smo to napraviti i "standardno" kao sto kreiramo svaki drugi element
            // const newRow = document.createElement("tr")
            // const newCol = document.createElement("td")
            // // ... kreiraj preostale td element
            // newRow.appendChild(newCol);
            // tableBody.appendChild(newRow);
        });
    }

    function persistTmpWorkOrders() {
        const tmpWorkOrders = JSON.parse(localStorage.getItem("tmpWorkOrders") || "[]")
        if (tmpWorkOrders.length !== 0) {
            const approved = confirm("Želite li spremiti lokalne naloge u bazu ?");
            if (approved) {
                saveWorkOrdersToDB(tmpWorkOrders);
            }
        } else {
            alert("Nema naloga za spremanje");
        }
    }
    
    function openWorkOrder(workOrder) {
        window.open(`prikaz.html?id=${workOrder.id}`, "_self")
    }

    showWorkOrdersFromLocalStorage();
}