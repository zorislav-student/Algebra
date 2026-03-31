var firstName = "Zrinka";
var lastName = "Martinec";
var fullName = firstName + "" + lastName;
console.log(fullName);

//Razlomite ovu ternarnu operaciju na 3 različite operacije!
//var x = z === 2? y : 5;

var x = z;
if (z === 2) {
  x = y;
} else {
  x = 5;
}
//Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").

for (var i = 1; i <= 20; i++);
if (i % 2) {
  console.log("Broj: " + i + "je neparan");
} else {
  console.log("Broj: " + i + "je paran");
}
