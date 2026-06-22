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

            const pokemons = await response.json()
            const top20Pokemons = pokemons.pokemon_species.slice(0, 20);

            await Promise.all(top20Pokemons.map((pokemon) => enrichWithPokemonDetails(pokemon)))

            // console.log(top20Pokemons);

            return top20Pokemons;
        } catch(err) {
            console.error(err)
            return []
        }
    }

    function getPokemonsAjax() {
        $.ajax({url: "https://pokeapi.co/api/v2/pokemon-color/yellow", 
            success: function(responseBody) {            
                const pokemons = responseBody.pokemon_species;
                const top20Pokemons = pokemons.slice(0, 20);

                console.log(top20Pokemons)

                //$.when
                //.apply($, top20Pokemons.map(pokemon => enrichWithPokemonDetailsAjax(pokemon)))
                // mapping part returns 20 deffered xhr objects, when creates new Deffered which resolves when all of them are finished
                $.when(...top20Pokemons.map(pokemon => enrichWithPokemonDetailsAjax(pokemon))) // when signature => when(def1, def2, def3) 
                // done is callback method called when that new Deffered object, created in when() method, resolved
                .done(() => fillList(top20Pokemons));
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(`Fetching pokemons failed. Status code: ${jqXHR.status} (${textStatus})`);
            }
        });
    }

    function enrichWithPokemonDetailsAjax(pokemon) {
        return $.ajax({url: pokemon.url, 
            success: function(pokemonDetails) {            
                pokemon.habitat = pokemonDetails.habitat?.name ?? ""
                pokemon.growth_rate = pokemonDetails.growth_rate?.name ?? ""
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(`Fetching pokemon details failed. Status code: ${jqXHR.status} (${textStatus})`);
            }
        });
    }

    async function enrichWithPokemonDetails(pokemon) {
        const response = await fetch(pokemon.url);
        if (!response.ok) {
            throw new Error(`Error. HTTP response status: ${response.status}.`)
        }
        const pokemonDetails = await response.json();

        // console.log(pokemonDetails)

        pokemon.habitat = pokemonDetails.habitat?.name ?? ""
        pokemon.growth_rate = pokemonDetails.growth_rate?.name ?? ""
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

        $('[data-bs-toggle="popover"]').popover();
        
        afterRender();
    }

        function addStripesOnEvenRows() {
        $("table tr:nth-child(even)").addClass("striped");
        $("table tr:nth-child(odd)").removeClass("striped");
    }

    function afterRender() {
        $("table th").css("color", "darkBlue") // primjenjuje se kao inline CSS

        addStripesOnEvenRows();

        $("table tr").on("mouseenter", (event) => {
            $(event.currentTarget).css("backgroundColor", "yellow")
        })

        $("table tr").on("mouseleave", (event) => {
            $(event.currentTarget).removeAttr("style")
        })

        setTimeout(() => {
            const elementsToHide = $("table td a:contains('p')").filter(function() {
                //return this.innerHTML.indexOf("p") == 0
                return this.textContent.startsWith("p")
            })

            //console.log(elementsToHide)

            elementsToHide.closest("tr").remove();
            addStripesOnEvenRows();

            $("<div></div>").insertAfter("#hb-template").text(`Broj skrivenih pokemona: ${elementsToHide.length}.`)
        },2000)
    }

    // entry point
    //getPokemons().then(pokemons => fillList(pokemons))

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

    // entry point
    getPokemonsAjax();

    $(window).resize(() => {
        console.log($(window).width())
    })
})
