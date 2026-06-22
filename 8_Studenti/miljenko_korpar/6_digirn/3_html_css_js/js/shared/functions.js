export function toggleNav(humburgerElem, navElem) {
    humburgerElem.classList.toggle("change")

    const navElemDisplay = window.getComputedStyle(navElem).display;

    if (navElemDisplay === 'block') {
        navElem.classList.remove("open")
    } else {
        navElem.classList.add("open")
    }
}

export async function loadWorkOrdersFromDB() {
    const response = await fetch("https://alg-fe-demo-default-rtdb.europe-west1.firebasedatabase.app/digirn.json", {
      method: "GET",
    });

    const workOrders = await response.json().then(responseBody => responseBody ? Object.values(responseBody)[0] : []);
    return workOrders;
}

export async function saveWorkOrdersToDB(workOrders) {
    await removeAllWorkOrdersFromDB();
    try {
        const response = await fetch("https://alg-fe-demo-default-rtdb.europe-west1.firebasedatabase.app/digirn.json", {
            method: "POST",
            body: JSON.stringify(workOrders),
            headers: {
                "Content-Type" : "application/json"
            }
        })
    } catch(error) {
        alert(error);
    }
}

export async function removeAllWorkOrdersFromDB() {
    try {
        const response = await fetch("https://alg-fe-demo-default-rtdb.europe-west1.firebasedatabase.app/digirn.json", {
            method: "DELETE"
        })
    } catch(error) {
        alert(error);
    }
}

const testVal = "abcd";