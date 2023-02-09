

const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button")

dealButton.addEventListener('click', (e)=>{
  // dealer hand
  let cardImageD1 = document.createElement('img');
  cardImageD1.src = "images/10_of_diamonds.png";
  document.getElementById("dealer-hand").append(cardImageD1);

  let cardImageD2 = document.createElement('img');
  cardImageD2.src = "images/ace_of_clubs.png";
  document.getElementById("dealer-hand").append(cardImageD2);
 

  // player hand

  let cardImageP1 = document.createElement('img');
  cardImageP1.src = "images/3_of_hearts.png";
  document.getElementById("player-hand").append(cardImageP1);

  let cardImageP2 = document.createElement('img');
  cardImageP2.src = "images/jack_of_spades.png";
  document.getElementById("player-hand").append(cardImageP2);


})

hitButton.addEventListener('click', (e)=>{
  // dealer hand
  let cardImageD1 = document.createElement('img');
  cardImageD1.src = "images/10_of_diamonds.png";
  document.getElementById("dealer-hand").append(cardImageD1);
 

  // player hand

  let cardImageP1 = document.createElement('img');
  cardImageP1.src = "images/3_of_hearts.png";
  document.getElementById("player-hand").append(cardImageP1);

  
})

var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

var canHit = true;

window.onload = function(){
    buildDeck();
    shuffleDeck();
}

function buildDeck() {
  let values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];  
  let types = ["clubs", "diamonds", "hearts", "spades"];
   deck = [];

   for ( let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
        deck.push(values[j] + "_of_" + types[i]);
    }
   }
//    console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./images/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
    }


}

function getValue(card) {
    let data = card.split("_of_");
    let value = data[0];

    if(isNaN(value)) {
        if (value == "ace") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "ace") {
        return 1;
    }
    return 0;
}


