const cardGrid = ["a","b","b","a"];

const cardsAll = ["a","a","b","b","c","c","d","d",] // temp cards

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

//const cardsInGame = 

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

const userChoice = (x,y) => {
    if (cardGrid[x] === cardGrid[y]) {
        console.log("you guessed correctly")
    } else {
        console.log("nope")
    }
}

userChoice(0,3)

console.log(cardArrayShuffle(cardsAll));

// $(() => {
//     // run function here
// });

// fn for: 
// cardArrayShuffle() // shuffles positions of the cards
// cardsInGame() //cards arranged in array
// cardsChosen() // 2 element array for 2 cards chosen, clear cards after match/no match
// cardsPaired() // cards won/paired are stored here
// flipCard() // flip card to front or back when user chooses card, or when both cards revealed







