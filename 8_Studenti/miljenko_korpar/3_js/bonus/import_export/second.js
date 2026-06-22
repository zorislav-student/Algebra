import { module1 as myObject, niz } from "./first.js";
import mojTekst from "./first.js"; // import default export objekta

console.log(mojTekst); // "Ovo je primjer za default export"
console.log(myObject.x); // 1
console.log(niz); // [1, 2, 3, 4, 5]