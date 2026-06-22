var x = "Lorem ipsum", y = 2345, z = "2345";
q = false;

// 1. Koja je vrijednost variajble trueFalse ? Čemu služe dvostruki negacijski znakovi ?

// U JS-u su sve vrijednosti truthy osim: false, 0, -0, 0n, "", null, undefined, NaN, document.all.

// var sampleString = "false" // "false" je boolean true (truthy) vrijednst jer je non-empty string
// console.log(!!sampleString) // ovo efektivno casta string varijablu u boolean, prvi ! radi negaciju i casting u boolean, drugi ! radi revert

var trueFalse = !!"false" == !!"true"; // "false" i "true" su non-empty stringovi, znaci da oni imaju truthy vrijednost; true == true je true
console.log(trueFalse);

// 2.
console.log(q || x || y || z); // console.log ispisuje prvu vrijednost koja je truthy; u ovom slucaju x = "Lorem ipsum"

// 3. 
var num = 6;
num--;
console.log(num);

// 4.
var price = 26.5;
var taxRate = 0.082;

var totalPrice = price + price * taxRate;

console.log("Total: ", totalPrice);
console.log("Total (2 decimals):" + totalPrice.toFixed(2));

// 5.
var c = z === "234" ? z : x; // z je "2345" pa z === "234" vraca false i cijeli izraz vraca x ("Lorem ipsum") 
console.log(c);

//a+b*c

// ()
// !, +, typeof ...
// *, /
// +, -
// ==, !=
// &&, ||
// =

//{ isLoading && <LoadingSpinner /> }