var h1Elem = document.querySelector("h1")
h1Elem.innerText = "Karlovac"

var descriptionElem = document.querySelector(".description")
descriptionElem.innerHTML = "Grad na <h3>5 rijeka</h3>";

var infoElem = document.querySelector(".info")
infoElem.innerText = "Peta rijeka je pivo."


var rivers = ["Mrežnica", "Kupa", "Korana", "Dobra", "Pivo"]
var listElems = document.querySelector("footer").querySelectorAll("li")

for (let idx = 0; idx < listElems.length; idx++) {
    listElems[idx].innerText = rivers[idx];
}

// 3. Imate zadane vrijednosti:
// 	- pageOffsetY elementa je 1300px
// 	- scrollTop je 200px
// 	- visina korisničkog ekrana je 730px
// 	- visina elementa je 300px
	
// 	Da li je element vidljiv na ekranu? 
// 	U slučaju da nije, koliko mu piksela fali i u kojem smjeru?

// Odgovor: 