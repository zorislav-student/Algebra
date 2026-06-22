var btnEl = document.getElementById("btn");
var inpEl = document.getElementById("inp");
var divEl = document.querySelector("div");
// var bodyEl = document.body;


function clickHandler(event) {
    // event.stopPropagation(); // zaustavljamo event bubling - propagaciju eventu od target elementa prema prethodnicima
    event.preventDefault(); // zaustavljamo defaultnu akciju elementa (npr. submit forme, linka...)
    console.log("Button click event handler")
    console.log(event.target)
}

function divClickHandler() {
    console.log("Div click event handler")
}

function inputHandler() {
    console.log("Input value: " + event.target.value);
}

btnEl.addEventListener("click", clickHandler);
inpEl.addEventListener("input", inputHandler);
divEl.addEventListener("click", divClickHandler);
// bodyEl.addEventListener("click", function() {
//     console.log("Body click event handler")
// });