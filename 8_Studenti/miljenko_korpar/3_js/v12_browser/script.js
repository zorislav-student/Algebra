// Dimenzije ekrana
console.log("Sirina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

// Dimenzije prozora (viewport dimenzije)
console.log("Visina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

// Hostname
console.log("Hostname: " + window.location.hostname);

// Redirect
// window.location.replace("https://www.google.hr")

// Confirmation
// blocking call
// var odgovor = window.confirm("Prihvacate li kolacice ?");
// console.log("Odgovor korisnika: " + odgovor)

if (window.confirm("Preusmjeri browser na Goole trazilicu ?")) {
    window.location.replace("https://www.google.hr")
}

// alt window.timeout(f,t)
setTimeout(() => {
    console.log("Prosla baba s kolacima...prije 5 sekundi")
}, 5000)

// Bonus

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((geolocationPosition) => {
        console.log(`Tvoja trenutna pozicija: ${geolocationPosition.coords.latitude + '' + geolocationPosition.coords.longitude} u trentku ${geolocationPosition.timestamp}`)
    })
} else {
    console.log("Web browser ne podrzava geo lokaciju.")
}
