const cardContainer = document.querySelector(".container");

function createCardYellow() {
  let cardYellow = document.createElement("div");
  cardYellow.classList.add("card");
  cardYellow.classList.add("cardYellow");
  return cardYellow
//   cardContainer.appendChild(cardYellow);
}

function createCardRed() {
  let CardRed = document.createElement("div");
  CardRed.classList.add("card");
  CardRed.classList.add("cardRed");
  return CardRed
//   cardContainer.appendChild(CardRed);
}

function createCardBlue() {
  let cardBlue = document.createElement("div");
  cardBlue.classList.add("card");
  cardBlue.classList.add("cardBlue");
  return cardBlue
//   cardContainer.appendChild(cardBlue);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// injecte un nombres de cartes en parametres avec un placement aléatoire

function injectCardContainer(numberCard){
let arrayCards = []
if(numberCard == 6){
    arrayCards.push("Blue")
    arrayCards.push("Red")
    arrayCards.push("Blue")
    arrayCards.push("Red")
    arrayCards.push("Yellow")
    arrayCards.push("Yellow")
    
}
console.log(arrayCards)
let pair = numberCard / 2 
for(let i = 0; i <numberCard; i++) {

    if(arrayCards[getRandomInt(numberCard - i)] == "Blue") {
        cardContainer.appendChild(createCardBlue()); 
    }

}




    // createCardBlue()
    // createCardRed()
    // createCardYellow()
    // createCardBlue()
    // createCardRed()
    // createCardYellow()
}

injectCardContainer(6);