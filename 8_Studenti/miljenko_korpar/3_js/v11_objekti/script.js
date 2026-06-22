// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.
var auto = {
    boja: "crvena",
    brzina: 60,
    maxBrzina: 160,
    godinaProizvodnje: 1998,
    naziv: {
        brend: "Volvo",
        model: "V40"
    },
    ubrzaj: function(sekunde) {
        if (sekunde <= 0) {
            return false;
        }
        
        while(sekunde && this.brzina < this.maxBrzina) {
            this.brzina = Math.min(this.brzina + 5, this.maxBrzina);
            sekunde--;
        }

        return this.brzina;
    },
    zakoci: function(sekunde) {
        if (sekunde <= 0) {
            return false;
        }

        while(sekunde && this.brzina > 0) {
            this.brzina = Math.max(this.brzina - 5, 0);
            sekunde--;
        }

        return this.brzina;
    },
    promijeniBoju: function(boja) {
        this.boja = boja;
        return this.boja;
    }
}

// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
console.log(auto.ubrzaj(10));
console.log(auto.zakoci(5));
console.log(auto.promijeniBoju("plava"));

// 3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
console.log("Ispis svojstva objekta")
for (const property in auto) {
    // console.log(property, ":", auto[property])
    if (auto.propertyIsEnumerable(property)) { // ovo zapravo nije potrebno jer for..in uzima samo enumerable svojstva
        console.log(property, ":", auto[property])
    }
}

// 4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
console.log("Auto", auto.naziv.brend, auto.naziv.model, "ima sljedeću boju:", auto.boja)

// 5. Pretvori svoj objekt u JSON string.
console.log(JSON.stringify(auto))