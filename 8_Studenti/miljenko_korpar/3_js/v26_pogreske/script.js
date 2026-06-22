const personName = 'James'

const person = {firstName: personName}

console.log(person)

const sayHelloLinting = (fName) => {
    console.log(`Hello linting, ${fName}`);
};

sayHelloLinting(person.firstName);