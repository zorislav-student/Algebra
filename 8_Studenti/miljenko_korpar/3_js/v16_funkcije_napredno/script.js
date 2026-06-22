// 1. 
var x = "John Doe"
function vratiNesto(name) {
    var x = name;
    function vrati() {
        return x;
    }
    return vrati;
}

var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

console.log(y);
console.log(z);

var myIeffFunc = (function (name) {
    var x = name;
    function vrati() {
        return x;
    }
    return vrati;
})(); // IEFF

var mySecondIeffFunc = (function (name) {
    var x = name;
    function vrati() {
        return x;
    }
    return vrati;
})(x); // IEFF 

console.log("IEFF result: " + myIeffFunc())
console.log("Second IEFF result: " + mySecondIeffFunc())