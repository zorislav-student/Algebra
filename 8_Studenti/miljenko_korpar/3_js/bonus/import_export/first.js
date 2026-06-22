function nekaFunkcija() {

}

// named export
export var module1 = {
    x: 1,
    y: function() {
        console.log("Hello from modul1");
    },
    z: nekaFunkcija
}

// named export
export var niz = [1, 2, 3, 4, 5]; 

var tekst = "Ovo je primjer za default export";

// default export, we can have only ONE default export
export default tekst; 