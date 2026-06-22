'use strict';

// 1.
var a = 78;
var b = 0o34; // oktalna vrijednost
// delete a;
// delete window.b; - u strict modeu ne mogu obrisati svojstva globalnog objekta (window objekt u browseru) 
const myObject = {property1:1, property2:2, property1:1};

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];
const user = { name: 'Lorenzo', surname: 'Verdi' };

//users.push(user)
//console.log(users);
// ILI kreiramo novi niz pomoću spread operatora
const allUsers = [...users, user];  
console.log(allUsers);

// 3.

// Deklariranje counter varijable sa let oznacava da ta varijabla ima block scope
// Ponaša se kao da smo u svakoj iteraciji unutar for bloka napravili kopiju vrijednosti varijable.
for (let i = 0; i < 10; i++) {
 // let test = i -> potrebno ako se counter variajbla i deklarira s var (ima function scope, tj. u ovom slucaju global scope)
 setTimeout(function() {
   console.log('The number is: ' + i);
 }, 1000);
}

//console.log(i);
