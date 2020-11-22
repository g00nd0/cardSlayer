const cardGrid = ["a","b","b","a"];

const cardsAll = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // temp cards

let cardsInGame = ["a","a","b","b","a","a","b","b","c","c","d","d","a","a","b","b","a","a","b","b","c","c","d","d","a","a","b","b","a","a","b","b","c","c","d","d","a","a","b","b","a","a","b","b","c","c","d","d","b","b","c","c","d","d","c","c","d","d","d","c","c","d","d"]

let chosenCards = [];

const gameLevelData = [
                        {
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


const gameStatus = {
                    currentLevel: 0,
                    gameOverStatus: false
}

const setCardGrid = (cards) => {                    
    const $cardDisplay = $(".display");
    for (let i = 0; i< cards.length; i++){
        const $newCard = $('<div>').addClass('card');
        $cardDisplay.append($newCard)
        
    }
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

const setDifficulty = (gameData, status) => {
    const level = status.currentLevel;                 // get current level of game
    const setLevel = gameData[level];                     //  select level data from current level (i.e. num of cards)
    let newCards = []; 
   
    for (let i = 0; i < (setLevel.numOfCards/2); i++) {    // new cards in temp array
        newCards[i] = cardsAll[i];
    }

    newCards = newCards.concat(newCards);           // each card will have a copy of itself
    cardsInGame = cardArrayShuffle(newCards);       // shuffle order of new cards and save to cardsInGame
}

const nextLevel = () => {
    gameStatus.currentLevel++;
}

// const userChoice = (x,y) => {
//     if (cardGrid[x] === cardGrid[y]) {
//         console.log("you guessed correctly")
//     } else {
//         console.log("nope")
//     }
// }





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

// // setCardGrid(cardsInGame);


$(() => {
    //  setup();
    render();
});


// test parameters for fns:
//userChoice(0,3)
// console.log(cardArrayShuffle(cardsInGame));
// console.log(cardsInGame)
// nextLevel();
// setDifficulty(gameLevelData, gameStatus);
// console.log(cardsInGame);


// fn for: 
// cardArrayShuffle() // shuffles positions of the cards [DONE]
// cardsInGame() // chosen cards arranged in array
// cardsChosen() // 2 element array for user to choose 2 cards, clear cards after match/no match
// cardsPaired() // cards won/paired are stored here
// flipCard() // flip card to front or back when user chooses card, or when both cards revealed
// createGrid // need to dynamically create card grid in CSS

// test if jQuery is linked correctly
// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};



