var auto = {
  brend: {
    tip: "Volvo",
    model: "V40",
  },
  Boja: "crvena",
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
  zakoči: function (brojSekundi) {
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

console.log(auto.ubrzaj(10));
console.log(auto.zakoci(5));

for (var key in auto) {
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + "-" + auto[key]);
  }
}

console.log("Boja mog " + auto.brend.tip + "je" + auto.boja);

console.log(JSON.stringify(auto));
