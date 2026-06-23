// 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.

var i = 3;
while (i <= 20) {
    if (i % 9 !== 0) {
        console.log(i);
    }
    i++;
}

// 2. Koja je vrijednost isprintana u konzoli?
var x = 0;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        console.log(x++);
    }
}

console.log(x);

// 3. for...of
var niz = ["a", "b", "c"];
for (i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}

for (elem of niz) {
    console.log(elem);
}

// 4. for..in
console.log("Primjer 4")
var objekt = {
    a: 1,
    b: 2,
    c: 3
};

for (svojstvo in objekt) {
    console.log(svojstvo, ":", objekt[svojstvo])
}