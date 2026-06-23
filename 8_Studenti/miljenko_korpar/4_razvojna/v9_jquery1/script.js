/// document.addEventListener("DOMContentLoaded", () => console.log("DOM loaded"))
$(document).ready(() => {
    const source = document.getElementById("hb-template").innerHTML;
    const destinationElem = document.getElementById("hb-result");
    const template = Handlebars.compile(source);

    async function getPokemons() {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")

            console.log(`Response ok: ${response.ok}.`)
            console.log(`Response status: ${response.status}`)
            if (!response.ok) {
                throw new Error(`Error. HTTP response status: ${response.status}.`)
            }

            const json = await response.json()
            return json.pokemon_species.slice(0, 20);
        } catch(err) {
            console.error(err)
            return []
        }
    }

    function addStripesOnEvenRows() {
        $("table tr:nth-child(even)").addClass("striped");
        $("table tr:nth-child(odd)").removeClass("striped");
    }

    function afterRender() {
        $("table th").css("color", "darkBlue") // primjenjuje se kao inline CSS

        addStripesOnEvenRows();

        setTimeout(() => {
            const elementsToHide = $("table td a:contains('p')").filter(function() {
                //return this.innerHTML.indexOf("p") == 0
                return this.textContent.startsWith("p")
            })

            console.log(elementsToHide)

            elementsToHide.closest("tr").remove();
            addStripesOnEvenRows();
            $("<div></div>").insertAfter("#hb-template").text(`Broj skrivenih pokemona: ${elementsToHide.length}.`)
        },2000)
    }

    function fillList(pokemons) {
        // Handlebars
        const ctx = {
            pokemon: pokemons, 
            tableClass: 'table'
        };
        // Template
        const html = template(ctx);
        // Result
        destinationElem.innerHTML = html;

        $('[data-toggle="popover"]').popover();
        
        afterRender();
    }

    // entry point
    getPokemons().then(pokemons => fillList(pokemons))

    // alternativa pomocu XMLHttpRequesta
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true); // async: true
    // xhr.onload = (event) => {
    //     if (xhr.readyState === 4 && xhr.status === 200) { // xhr.readyState === 4 znaci da je request zavrsen
    //         const json = JSON.parse(xhr.response);
    //         const top20Pokemons = json.pokemon_species.slice(0, 20);
    //         fillList(top20Pokemons)
    //     }
    // };
    // xhr.send();
})
