var names = ["John", "Jane", "Bob", , "Mike"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

names.forEach(function ispis(element) {
  console.log(element);
});

names.push("Zrinka");
console.log(names);

for (var element of names) {
  console.log(element);
  if (element === "Jane") break;
}

for (var i = 0; i < names.length; i++) {
  if (!names[i]) names.splice(i, 1);
}
console.log(names);

//var noviNiz = names.filter(function (element){
return element !== undefined;

//})
//console.log(names);
//console.log(noviNiz);

console.log(names);

//map

var noviNiz = names.map(function (element) {
  return "Ime: " + element;
});

console.log(names);
console.log(noviNiz);
