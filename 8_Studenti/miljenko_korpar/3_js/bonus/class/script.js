function Person(firstName, lastName) { // constructor function - ES5
    this.firstName = firstName;
    this.lastName = lastName;
    // Pravilno bi deklarirati funkciju na prototypu, da se izbjegne kreiranje nove funkcije svaki put kad se insancira novi Person objekt
    this.printName = function() { 
        console.log(`Name: ${firstName} ${lastName}`)
    }
}

// Person.prototype.printName = function() {
    // console.log(`Name: ${this.firstName} ${this.lastName}`)
// } // prototype

const firstPerson = new Person("Ivan", "Horvat");
firstPerson.printName();


// ES6 nacin koristenjem klase
class PersonClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // DO NOT DO THIS ! => it creates new function per every PersonClass instance
    // Validacija: PersonClass.prototype NE vraca prototype objekt koji ima referencu na ovu funkciju.
    // printName = () => { 
    //     console.log(`Name: ${this.firstName} ${this.lastName}`)
    // }

    // This is better, function is defined on prototype.
    // Validacija: PersonClass.prototype vraca prototype objekt koji ima referencu na ovu funkciju.
    printName() { 
        console.log(`Name: ${this.firstName} ${this.lastName}`)
    }
}

const secondPerson = new PersonClass("Matija", "Stefonovski")
secondPerson.printName()