var text = " Lorem ipsum dolor sit amet";

//1. spremite duljinu stringa u vrijablu

var duljinaStringa = text.length;
console.log(duljinaStringa);

//2.izdvojite riječ "sit" u posebnu varijablu

//var rijec = text.substr(19, 3);
var rijec = text.substring(19, 22);
console.log(rijec);

//3.zamijenite riječ "amet" sa "elit"
var noviText = text.replace("amet", "elit");
console.log(noviText);

//4.konkatenirajte u novu varijablu sa stringom consectetur adipiscing elit', sa zarezom izmedu.

var dodaniText = text + ", consectetur adipiscing elit";
console.log(dodaniText);

//5.konvertirajte sve rijeći u velika slova
var velikiText = text.toUpperCase();
console.log(velikiText);

//6.maknite početnu prazninu u stringu
var bezPrazninaText = text.trim();
console.log(bezPrazninaText);

//7.nađite slovo na poziciji 12

var slovo = text.charAt(12);
console.log(slovo);
