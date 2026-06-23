var text = " Lorem ipsum dolor sit amet"

// 1. Spremi duljinu stringa u varijablu
var duljinaString = text.length;
console.log(duljinaString);

// 2. Izdvojit rijec "sit" u zasebnu varijablu.
var rijec = text.substring(19, 22);
console.log(rijec);

// 3. Zamijeni rijec "amet" sa rijeci "elit"
var noviTekst = text.replace("amet", "elit")
console.log(noviTekst);

// 4. Dodaj ", consectetur adipiscing elit" na tekstu u varijabli text i rezultat spremi u novu varijablu
var dodaniText = text + ", consectetur adipiscing elit";
console.log(dodaniText);

// 5. Konvertiraj tekst u velika slova
var velikiText = text.toUpperCase();
console.log(velikiText);

// 6. Makni praznine na početku i na kraju stringa
var bezPraznina = text.trim()
console.log(bezPraznina)

// 7. Nađite slovo na poziciji 12 (index = 11)
var slovo = text.charAt(11);
console.log(slovo);
