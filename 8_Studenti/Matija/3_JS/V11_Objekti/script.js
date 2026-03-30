//1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.

var auto = {
  brend: {
    tip: "Volvo",
    model: "V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,
  ubrzaj: function (brojSekundi) {
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 5;
      brojSekundi = brojSekundi - 1;
    }
    return this.brzina;
  },
  zakoci: function (brojSekundi) {
    while (brojSekundi && this.brzina > 0) {
      this.brzina -= 20;
      brojSekundi -= 1;
    }

    return this.brzina > 0 ? this.brzina : 0;
  },
  promjeniBoju: function (novaBoja) {
    this.boja = novaBoja;
    return this.boja;
  },
};

//2
console.log(auto.ubrzaj(10));
console.log(auto.zakoci(5));

// 3.

for (var key in auto) {
  if (auto.propertyIsEnaumerable(key)) {
    console.log(key + "-" + auto[key]);
  }
}

//4

console.log(Boja mog" + auto.brend.tip"+ ' auta je ' + auto.boja)
console.log(JSON.stringify(auto));