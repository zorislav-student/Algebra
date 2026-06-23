// U ovoj skripti se koristi lodash (pogledaj script tagove u index.html-u). 
// Nakon preuzimanja lodash.min.js skripte, browser ju izvršava. 
// Prilikom izvršavanja se instancira lodasj objekt kojem se može pristupiti preko varijable s nazivom "_" - globalno je dostupna.
// Referenciranje kreiranog lodash objekta na globalni objekt (u browseru je root=window objekt) se može vidjeti na sljedecem linku -> https://github.com/lodash/lodash/blob/cb0b9b9212521c08e3eafe7c8cb0af1b42b6649e/lodash.js#L17257.

var password = "0123456789";

// 	1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)
// 1.a
function isUnique(input) {
    return !input || _.uniq(input).length === input.length
}
console.log(password, "contains unique characters (loodash uniq):", isUnique(password))

// 1.b
function isUnique2(input) {
    return !input || new Set(input).length === input.length
}
console.log(password, "contains unique characters (set):", isUnique(password))

// 1.c
function isUnique3(input) {
    var strChars = "";

    for (var char of input) {
        if (strChars.includes(char)) {
            return false;
        }
        strChars += char;
    }

    return true;
}
console.log(password, "contains unique characters (string char iteration):", isUnique(password))


// 	2. Napisati funkciju koja provjerava jesu li svi znakovi brojke

// 2.a
function containsOnlyDigits(input) {
    return !!input && !!_.toNumber(input) // toNumber() returns number of NaN, so we cast it to boolean 
}
console.log(password, "contains unique characters (lodash toNumber):", containsOnlyDigits(password))

// 2.b
function containsOnlyDigits2(input) {
    if (!input) {
        return false;
    }

    var char = ''
    for (var idx = 0; idx < input.length; idx++) {
        if ((char = input.charCodeAt(idx)) < 48 || char > 57) {
            return false;
        }        
    }

    return true;
}
console.log(password, "contains unique characters (string char iteration):", containsOnlyDigits2(password))


// 	3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10
password = "01234567891"

// 3.a
function reduceLen(input) {
    return input ? _.take(input, 10).join("") : ""
}
console.log(password, " with only first 10 characters (lodash take):", reduceLen(password))

// 3.b
function reduceLen2(input) {
    return input?.substring(0, 10) ?? ""
}
console.log(password, " with only first 10 characters (using \"standard\" js substring):", reduceLen2(password))