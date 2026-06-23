var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

var quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

// 1.
// Nadite prototip objekta "character"
// (naputak: koristite metode globalnog Object objekta).
// Nadite prototip tog prototipa. Ispisite ih.

var characterPrototype = Object.getPrototypeOf(character);
var characterPrototypePrototype = Object.getPrototypeOf(characterPrototype);

console.log("Character prototype:", characterPrototype);
console.log("Character prototype's prototype:", characterPrototypePrototype);

// 2.
// Dodajte prototipu objekta "character" funkciju koja vraća jedan
// (slucajno odabran) citat iz niz "quotes".

// characterPrototype.getQuote = function () { // metoda definirana i dio je prototipa NAKON što je character objekt/niz kreiran
//     var randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
// }

character.__proto__.getQuote = function () { // metoda definirana i dio je prototipa NAKON što je character objekt/niz kreiran
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

console.log("Random quote from character:", character.getQuote());