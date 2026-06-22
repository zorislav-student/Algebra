export var exercise = (function() {
    var steps = 0;

    function increaseSteps() {
        steps++;
    }

    function getSteps() {
        return steps;
    }

    // Glavni razlog zasto ovo radi je closure - inner funkcije (increaesSteps() i getSteps())
    // imaju referencu na "steps" varijablu/objekt iz outer funkcije (tzv. lexical environemnt).
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
    
    // To zapravno znači da, iako se je anonimna funkcija izvršila, 
    // inner funkcije i dalje drže referencu na njezine lokalne varijable (koje imaj function scope),
    // što znači da ih garbarge collector ne briše (u suprotnom closure ne bi radio, dobili bi segmentation fault ili neki drugi error)!
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management

    // Ovo je super za module, jer se anonimna funkcija izvršava samo jednom
    // pa se alokacije memorije za inner funckije radi samo jednom po inner funkciji. 

    // Ali kad bi imali funkciju koja se izvršava mnogo puta, onda treba vidjeti 
    // postoji li opravdanost za korištenje closurea/inner funkcije u takvoj funkciji jer dodatno trošimo memoriju.
    // U prijevodu, ako inner funkcija ne ovisi o stanju/vanjskoj varijabli, onda nam inner funkcija (closure) nije ni potrebna.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures#performance_considerations
    return {
        increaseSteps: function() {
            increaseSteps();
        },
        getSteps: function() {
            return getSteps();
        }
        // Alternative - marginalno bolji pristup jer se kreira jedna funkcija manje (increaseSteps in direktnu referencu na increaseSteps() funkciju)
        // increaseSteps: increaseSteps,
        // getSteps: getSteps

        // ES6 Alternative
        // increaseSteps() { 
        //     increaseSteps();
        // },
        // getSteps() {
        //     return getSteps();
        // }
    };
})();
