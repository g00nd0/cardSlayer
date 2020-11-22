const cardGrid = ["a","b","b","a"];

const cardsAll = ["a","a","b","b","c","c","d","d",] // temp cards

const cardsInGame = ["a","a","b","b"]

let chosenCards = [];

const gameLevelData = [{
                            "level": 0,
                            "numOfCards": 4,
                            "demon": "Zombie Soldier",
                            "imgPath": ''
                        },
                        {
                            "level": 1,
                            "numOfCards": 6,
                            "demon": "Zombie Sergeant",
                            "imgPath": ''
                        },
                        {
                            "level": 2,
                            "numOfCards": 8,
                            "demon": "Zombie Sergeant",
                            "imgPath": ''
                            }];

let gameOverStatus = false;



const setCardGrid = (cards) => {
    const $cardDisplay = $(".display");
    for (let i = 0; i< cards.length; i++){
        const $newCard = $('<div>').addClass('card').text("card");
        $newCard.css("width",100)
        $cardDisplay.append($newCard)
        
    }

    console.log("this runs")
}

const cardArrayShuffle = (arr) => {
    let index, newIndex, tempCard;
    for (let i = 0; i < arr.length; i++) {
        index = Math.floor(Math.random() * arr.length);
        tempCard = arr.splice(index, 1);
        newIndex = Math.floor(Math.random() * arr.length)
        arr.splice(newIndex, 0, tempCard[0]);
    }
    return arr;
}


const userChoice = (x,y) => {
    if (cardGrid[x] === cardGrid[y]) {
        console.log("you guessed correctly")
    } else {
        console.log("nope")
    }
}

// const flipCard = () => {
    
// }

// const cardsChosenMatch = (chosenCards) => {
//     if (chosenCards[0] === chosenCards[1]) {
//         // for loop x 2 loops, 
//         // $cardsDisplay.remove(cardChosen)
//     }
    
// }

// const setup = () => {
//     // $cardDisplay.on("click", flipCard()); to flip card when user clicks
//     // $instructions.on("click", showInstructions);
//     // $quit.on("click", quit);
// }

const render = () => {
    // $cardsRemain.text(numOfCards)
        setCardGrid(cardsInGame);
    
}

// setCardGrid(cardsInGame);

userChoice(0,3)

console.log(cardArrayShuffle(cardsInGame));
console.log(cardsInGame)

$(() => {
    //  setup();
    render();
});

// fn for: 
// cardArrayShuffle() // shuffles positions of the cards [DONE]
// cardsInGame() // chosen cards arranged in array
// cardsChosen() // 2 element array for user to choose 2 cards, clear cards after match/no match
// cardsPaired() // cards won/paired are stored here
// flipCard() // flip card to front or back when user chooses card, or when both cards revealed
// createGrid // need to dynamically create card grid in CSS


// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};



