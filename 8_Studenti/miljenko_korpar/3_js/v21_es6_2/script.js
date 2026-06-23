// Arrow funckije 

const bark = () => "Woof woof";

// isto kao i 
//  |
// \/ 

// const bark = function (){
//   return "Woof Woof";
// }

// function bark(){
//   return "Woof Woof";
// }

console.log(bark());

const ispis = (ime) => {
    console.log(ime)
    return ime;
}

ispis("Perica")

const ispis2 = (ime, prezime) => {
  console.log(ime, prezime);
  return `${ime} ${prezime}`;
};

ispis2("Perica", "Mali");

// 1. Napišite Promise koji čeka funkciju getX, 
// i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, 
// a na reject reagira sa console.log-om stringa "Oh no!"

const getX = () => Math.random() >= 0.5;
// console.log(getX());

const prom = new Promise((resolve, reject) => {
    // VAŽNO - performance considerator
    // This executor function is executed immeditally, 
    // even without doing await prom or prom.then(...).catch(...) !

    const biggerThenHalf = getX()

    setTimeout(() => {
        console.log("Timeout function is executed")
        biggerThenHalf ? resolve(biggerThenHalf) : reject(biggerThenHalf)
    }, 2000)
    console.log("Promise function is executed")
});

// Opcija 1

prom
.then((val) => console.log(`Succcess. Val: ${val}`))  // tijelo resolve() funkcije
.catch((err) => console.log(`Oh, no. Val: ${err}`)); // tijelo rejected() funkcije

// Opcija 2

const run = async () => {
    try {
        const value = await prom; // ONLY waits for promise to complete, it doesn't call promise executor function (such function is executed on Promise creation)
        console.log(`Await. Yay! Value: ${value}`); // value = value passed to resolve function
    } catch(value) {
        console.log(`Await. Oh, no! Value: ${value}`) // value = value passed to reject function
    }
}

run();
console.log("I'm defined after, but executed before async timeout function called by run() function")
