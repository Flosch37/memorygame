const cardContainer = document.querySelector(".container");

function createCardYellow(){
let cardYellow = document.createElement("div")
cardYellow.classList.add("card")
cardYellow.classList.add("cardYellow")
cardContainer.appendChild(cardYellow)
}