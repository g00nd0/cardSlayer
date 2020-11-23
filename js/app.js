const cardTest = ["a","b","c","d"];

const cardsAll = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5"] // temp cards

// const cardsAll = [
//                     {
//                         id: "",
//                         name: "",
//                     },
//                     {
//                         id: "",
//                         name: "",
//                     },
// ]

// create object for cards instead
// use following attributes:
// id: (id of the card for html)
// name: (text name for diplaying card)
// imgPath: (path of image)
// specialFx: (for card power ups later in game)

let cardsInGame = [];

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
                            "demon": "Imp",
                            "imgPath": ''
                        },
                        {
                            "level": 3,
                            "numOfCards": 12,
                            "demon": "Lost Soul",
                            "imgPath": ''
                        },
                        {
                            "level": 4,
                            "numOfCards": 16,
                            "demon": "Demon AKA Pinky",
                            "imgPath": ''
                        },
                        {
                            "level": 5,
                            "numOfCards": 20,
                            "demon": "Revenant",
                            "imgPath": ''
                        },
                        {
                            "level": 6,
                            "numOfCards": 25,
                            "demon": "Cacodemon",
                            "imgPath": ''
                        },
                        {
                            "level": 7,
                            "numOfCards": 30,
                            "demon": "Pain Elemental",
                            "imgPath": ''
                        },
                        {
                            "level": 8,
                            "numOfCards": 36,
                            "demon": "Mancubus",
                            "imgPath": ''
                        },
                        {
                            "level": 9,
                            "numOfCards": 40,
                            "demon": "Baron of Hell",
                            "imgPath": ''
                        },
                        {
                            "level": 10,
                            "numOfCards": 49,
                            "demon": "Spiderdemon",
                            "imgPath": ''
                        },
                        {
                            "level": 11,
                            "numOfCards": 64,
                            "demon": "Cyberdemon",
                            "imgPath": ''
                        }];


const gameStatus = {
                    currentLevel: 0,
                    gameOverStatus: false
}

const setCardGrid = (cards) => {                    
    const $cardDisplay = $(".display");
    for (let i = 0; i< cards.length; i++){
        const $newCard = $('<div>').addClass('card').attr("id",i);
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

const flipCard = (id) => {
    const idNum = "#" + id;
    const $chooseCard = $(idNum);
    //select card's data, and image
    $chooseCard.css("background-image","url(img/soulsphere.gif)");
    
//     if (chosenCards.length === 0){
//      // add card to chosenCards[0]
//  } else {
//      // add card to chosenCards[0]
//      // run cardsChosenMatch()
//  }
}

// const userChoice = (x,y) => {
//     if (cardGrid[x] === cardGrid[y]) {
//         console.log("you guessed correctly")
//     } else {
//         console.log("nope")
//     }
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

const setup = () => {
    $(".display").children().on("click", () => {
        flipCard(event.target.id);
        console.log(event.target.id)
    });
}

const render = () => {
    // $cardsRemain.text(numOfCards)
    //    setCardGrid(cardsInGame);
    
}

// // setCardGrid(cardsInGame);


$(() => {
     setup();
    // render();
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



