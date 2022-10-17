const cardContainer = document.querySelector(".container");

function createCardYellow() {
  let cardYellow = document.createElement("div");
  cardYellow.classList.add("card");
  cardYellow.classList.add("cardYellow");
  return cardYellow;
  //   cardContainer.appendChild(cardYellow);
}

function createCardRed() {
  let CardRed = document.createElement("div");
  CardRed.classList.add("card");
  CardRed.classList.add("cardRed");
  return CardRed;
  //   cardContainer.appendChild(CardRed);
}

function createCardBlue() {
  let cardBlue = document.createElement("div");
  cardBlue.classList.add("card");
  cardBlue.classList.add("cardBlue");
  return cardBlue;
  //   cardContainer.appendChild(cardBlue);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// injecte un nombres de cartes en parametres avec un placement aléatoire

function injectCardContainer(numberCard) {
  let arrayCards = [];
  if (numberCard == 6) {
    arrayCards.push("Blue");
    arrayCards.push("Red");
    arrayCards.push("Blue");
    arrayCards.push("Red");
    arrayCards.push("Yellow");
    arrayCards.push("Yellow");
  }

  let pair = numberCard / 2;
  let numberOfBlue = 0;
  let numberOfRed = 0;
  let numberOfYellow = 0;
  for (let i = 0; i < arrayCards.length; i++) {
    let randomInt = getRandomInt(arrayCards.length);

    if (arrayCards[randomInt] == "Blue") {

        if(numberOfBlue != 2) {
            cardContainer.appendChild(createCardBlue());
            numberOfBlue++;
        }
      if (numberOfBlue == 2 && numberOfRed != 2) {
        cardContainer.appendChild(createCardRed());
        numberOfRed++;
        
      } else if(numberOfYellow != 2) {
        cardContainer.appendChild(createCardYellow());
        numberOfYellow++
        
      }
      
    } else if (arrayCards[randomInt] == "Red") {
      cardContainer.appendChild(createCardRed());



    } else if (arrayCards[randomInt] == "Yellow") {
      cardContainer.appendChild(createCardYellow());
    }
    console.log(randomInt);
    console.log(arrayCards);
  }

  // createCardBlue()
  // createCardRed()
  // createCardYellow()
  // createCardBlue()
  // createCardRed()
  // createCardYellow()
}

injectCardContainer(6);
