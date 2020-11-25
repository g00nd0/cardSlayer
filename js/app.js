const cardsAll = [
                    {
                        id: "cannotDie",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "soulsphere",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "invisible",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "iconOfSin",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "monster4",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "monster5",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "monster6",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "monster7",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "monster8",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "monster9",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "monster10",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "monster11",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "monster12",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "monster13",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "monster14",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "monster15",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "monster16",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "monster17",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "monster18",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "monster19",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "monster20",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "monster21",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "monster22",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "monster23",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "monster24",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "monster25",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "monster26",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "monster27",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "monster28",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "monster29",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "monster30",
                        imgPath: "img/invisible.gif"
                    }
]

// create object for cards instead
// use following attributes:
// id: (id of the card for html)
// name: (text name for diplaying card)
// imgPath: (path of image)
// specialFx: (for card power ups later in game)

let cardsInGame = [];
let chosenCards = [];
let chosenIndex = [];
let health = 100;
let numOfChosen = 0;

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

const setDifficulty = (gameData, status) => {
    const level = status.currentLevel;                 // get current level of game
    const setLevel = gameData[level];                     //  select level data from current level (i.e. num of cards)
    let newCards = []; 

    const $healthBar = $(".healthBar");
    health = 100;
    $healthBar.text(health + "%");
   
    for (let i = 0; i < (setLevel.numOfCards/2); i++) {    // new cards in temp array
        newCards[i] = cardsAll[i];
    }

    newCards = newCards.concat(newCards);           // each card will have a copy of itself
    cardsInGame = cardArrayShuffle(newCards);       // shuffle order of new cards and save to cardsInGame
    
}

const cardArrayShuffle = (cardsOnGrid) => {
    let index, newIndex, tempCard;
    for (let i = 0; i < cardsOnGrid.length; i++) {
        index = Math.floor(Math.random() * cardsOnGrid.length);
        tempCard = cardsOnGrid.splice(index, 1);
        newIndex = Math.floor(Math.random() * cardsOnGrid.length)
        cardsOnGrid.splice(newIndex, 0, tempCard[0]);
    }
    return cardsOnGrid;
}

const setCardGrid = (cards) => {                    //takes in cardsInGame  
    const $cardDisplay = $(".display");
    for (let i = 0; i< cards.length; i++){          //renders the number of cards equal to the size of cardsInGame
        const cardTitle = cards[i].id
        const $newCard = $('<div>').addClass('card').attr("id",i).attr("alt",cardTitle);
        $cardDisplay.append($newCard);
    }
    
    
}

const nextLevel = () => {
    gameStatus.currentLevel++;
    setDifficulty(gameLevelData,gameStatus)
    setCardGrid(cardsInGame);
    setEventFlipCard();
    
    console.log('this runs')
}

const flipCard = (id) => {
    const idNum = "#" + id;         // id given in HTML tag
    const $chooseCard = $(idNum);   
    const cardName = $chooseCard.attr("alt"); // get the alt attr in given id's HTML tag
    let imgPath;  // set imgPath as the path of the card image
    let whichCard;                  // refers to the card object from cardsAll array

    // "url(" + cardsAll[i].imgPath + ")"

    for ( let i = 0; i < cardsAll.length; i++) {
        if ( cardName === cardsAll[i].id ) {
            imgPath = "url(" + cardsAll[i].imgPath + ")";
            whichCard = cardsAll[i];
        }
    }
    $chooseCard.css("background-image",imgPath);
    const isFirstCard = (chosenCards.length === 0);
    if (isFirstCard){
        chosenCards[0] = whichCard;
        chosenIndex[0] = idNum;
    } else {
        chosenCards[1] = whichCard;
        chosenIndex[1] = idNum;
        cardsChosenMatch(); 
    }
    
}

const cardsChosenMatch = () => {
    if (chosenCards[0] === chosenCards[1]) {
        cardsWon();
    } else {
        flipCardReset();
    }
}

const flipCardReset = () => {
    setTimeout(() => {
        $(".card").css("background-image","url(img/card-blank-doomslayer-logo.png)");
        
    }, 500)
    chosenCards = [];
    lessPlayerHealth();
    endGameCheck();
}

const cardsWon = () => {
    setTimeout(() => {              // after 500ms, change face to game win face img
        for (let i = 0; i < chosenIndex.length; i++) {
            $(chosenIndex[i]).css("background-image","url(img/winFace.png)");
        }
    }, 500)
    
    setTimeout(() => {              //after 1000ms, remove won cards
        $(chosenIndex[0]).remove();
        $(chosenIndex[1]).remove();
        console.log("in timeout, there are "+ updateCardsRemain());
        $('.cardsRemain').children('span').text(updateCardsRemain());

        if(updateCardsRemain() === 0) {
            nextLevel();
            
        }
    }, 1000);

    chosenCards = [];
}

const endGameCheck = () => {
    if (health <= 0) {
        gameStatus.gameOverStatus = true; // need an end game page
    }

}

const updateCardsRemain = () => {
    const numCardsLeft = $(".display").children().length;
    return numCardsLeft;
}

const lessPlayerHealth = () => {
    const $healthBar = $(".healthBar");
    const currentLevel = gameStatus.currentLevel;
    const lessMultiplier = gameLevelData[currentLevel].numOfCards;
    health -= Math.round(100 / lessMultiplier);
    $healthBar.text(health + "%");
}

const setEventFlipCard = () => {
    $(".display").children().on("click", () => {
        flipCard(event.target.id);
        // console.log(event.target.id)
        if (gameStatus.gameOverStatus === true){
            console.log("you lose")
        }
        
    });
}


const setup = () => {
    setDifficulty(gameLevelData,gameStatus)
    setCardGrid(cardsInGame);
    setEventFlipCard();   
    // updateCardsRemain();
     
    // $(".display").children().on("click", () => {
    //     flipCard(event.target.id);
    //     // console.log(event.target.id)
    //     if (gameStatus.gameOverStatus === true){
    //         console.log("you lose")
    //     }
        
    // });

}

const render = () => {
    // playerHealth();
    // setInterval(playerHealth(), 1000);
    $('#intro').hide();
    $('#game').show();
    $('#gameOver').hide();
    }
    
$(() => {
    setup();
    render();
});

// const setup = () => {
//     // $cardDisplay.on("click", flipCard()); to flip card when user clicks
//     // $instructions.on("click", showInstructions);
//     // $quit.on("click", quit);
// }

// test parameters for fns:
//userChoice(0,3)
// console.log(cardArrayShuffle(cardsInGame));
// console.log(cardsInGame)
// nextLevel();
// setDifficulty(gameLevelData, gameStatus);
// console.log(cardsInGame);


// fn for: 
// [DONE] cardArrayShuffle() // shuffles positions of the cards 
// [DONE] cardsInGame() // chosen cards arranged in array
// [DONE] cardsChosen() // 2 element array for user to choose 2 cards, clear cards after match/no match
// [DONE]cardsPaired() // cards won/paired are stored here
// [DONE] flipCard() // flip card to front or back when user chooses card, or when both cards revealed
// [DONE] createGrid // need to dynamically create card grid in CSS

// test if jQuery is linked correctly
// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};