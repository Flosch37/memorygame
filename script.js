const cardContainer = document.querySelector(".container");

function createCardYellow() {
  let cardYellow = document.createElement("div");
  cardYellow.classList.add("card");
  cardYellow.classList.add("cardYellow");
  cardContainer.appendChild(cardYellow);
}

function createCardRed() {
  let CardRed = document.createElement("div");
  CardRed.classList.add("card");
  CardRed.classList.add("cardRed");
  cardContainer.appendChild(CardRed);
}

function createCardBlue() {
  let cardBlue = document.createElement("div");
  cardBlue.classList.add("card");
  cardBlue.classList.add("cardBlue");
  cardContainer.appendChild(cardBlue);
}

function injectCardContainer(){
    createCardBlue()
    createCardRed()
    createCardYellow()
    createCardBlue()
    createCardRed()
    createCardYellow()

}

injectCardContainer();