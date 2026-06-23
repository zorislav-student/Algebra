var descriptionEl = document.getElementsByClassName("description")[0];
var h1El = document.createElement("h1");

descriptionEl.parentNode.prepend(h1El);

// 2
var divEl = document.createElement("div");
divEl.classList.add("info")

// insert new div before the next sibling of descriptionEl (before footer element)
descriptionEl.parentNode.insertBefore(divEl, descriptionEl.nextSibling)

// 3
var ulEl = document.getElementById("list")
for(var i=0; i<3; i++) {
    ulEl.appendChild(document.createElement("li"))
}