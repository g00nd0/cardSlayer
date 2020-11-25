const cardsAll = [
                    {
                        id: "card0",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "card1",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "card2",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "card3",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "card4",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "card5",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "card6",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "card7",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "card8",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "card9",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "card10",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "card11",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "card12",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "card13",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "card14",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "card15",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "card16",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "card17",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "card18",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "card19",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "card20",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "card21",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "card22",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "card23",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "card24",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "card25",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "card26",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "card27",
                        imgPath: "img/iconOfSin.png"
                    },
                    {
                        id: "card28",
                        imgPath: "img/cannotDie.gif"
                    },
                    {
                        id: "card29",
                        imgPath: "img/soulsphere.gif"
                    },
                    {
                        id: "card30",
                        imgPath: "img/invisible.gif"
                    },
                    {
                        id: "card31",
                        imgPath: "img/invisible.gif"
                    }
]

// create object for cards instead
// use following attributes:
// id: (id of the card for html)
// name: (text name for diplaying card)
// imgPath: (path of image)
// specialFx: (for card power ups later in game)

const gameLevelData = [
                        {
                            "level": 0,
                            "numOfCards": 4,
                            "demon": "Angry Bat",
                            "imgPath": 'img/bat.gif'
                        },
                        {
                            "level": 1,
                            "numOfCards": 6,
                            "demon": "Zombie",
                            "imgPath": 'img/zombieman.gif'
                        },
                        {
                            "level": 2,
                            "numOfCards": 8,
                            "demon": "Bigger, Uglier Zombie",
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
                            "demon": "Restless Spirit",
                            "imgPath": ''
                        },
                        {
                            "level": 5,
                            "numOfCards": 20,
                            "demon": "Hungry Ghost",
                            "imgPath": ''
                        },
                        {
                            "level": 6,
                            "numOfCards": 25,
                            "demon": "Cerberus",
                            "imgPath": ''
                        },
                        {
                            "level": 7,
                            "numOfCards": 30,
                            "demon": "Minotaur",
                            "imgPath": ''
                        },
                        {
                            "level": 8,
                            "numOfCards": 36,
                            "demon": "Wendigo",
                            "imgPath": ''
                        },
                        {
                            "level": 9,
                            "numOfCards": 40,
                            "demon": "Lovecraftian Horror",
                            "imgPath": ''
                        },
                        {
                            "level": 10,
                            "numOfCards": 48,
                            "demon": "Cthulhu",
                            "imgPath": ''
                        },
                        {
                            "level": 11,
                            "numOfCards": 64,
                            "demon": "Satan Himself",
                            "imgPath": ''
                        }];


const gameStatus = {
                    currentLevel: 0,
                    gameOverStatus: false,
                    cardsInGame: [],
                    chosenCards: [],
                    chosenIndex: [],
                    health: 100
                    
}

const setDifficulty = (gameData, status) => {
    const level = status.currentLevel;                 // get current level of game
    const setLevel = gameData[level];                     //  select level data from current level (i.e. num of cards)
    let newCards = []; 

    updatePlayerHealth(100);
   
    for (let i = 0; i < (setLevel.numOfCards/2); i++) {    // new cards in temp array
        newCards[i] = cardsAll[i];
    }

    newCards = newCards.concat(newCards);           // each card will have a copy of itself
    status.cardsInGame = cardArrayShuffle(newCards);       // shuffle order of new cards and save to cardsInGame
    
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

const updateDemon = (level) => {
    const $demon = $(".demon");
    const levelData = gameLevelData[level];
    $demon.children(".text").text(levelData.demon);
    $demon.children(".demonImg").children(".mugshot").attr("src",levelData.imgPath);
}

const setNewLevel = () => {
    gameStatus.gameOverStatus = false;
    setDifficulty(gameLevelData,gameStatus)
    setCardGrid(gameStatus.cardsInGame);
    setEventFlipCard();
    const displayLevel = gameStatus.currentLevel + 1;
    $(".levelNum").text(displayLevel);
    updateDemon(gameStatus.currentLevel);
    updateCardsRemain();
}

const nextLevel = () => {
    gameStatus.currentLevel++;
    setNewLevel();
}

const flipCard = (id) => {
    const cardIdOnGrid = "#" + id;         // id given in HTML tag
    const $chooseCard = $(cardIdOnGrid);   
    const cardName = $chooseCard.attr("alt"); // get the alt attr in given id's HTML tag
    const chosenCards = gameStatus.chosenCards;
    const chosenIndex = gameStatus.chosenIndex;
    let imgPath;  // set imgPath as the path of the card image
    let whichCard;    // refers to the card object from cardsAll array

    for ( let i = 0; i < cardsAll.length; i++) {
        if ( cardName === cardsAll[i].id ) {
            imgPath = "url(" + cardsAll[i].imgPath + ")";
            whichCard = cardsAll[i];
        }
    }
    $chooseCard.css("background-image",imgPath);
    removeEventFlipCard(cardIdOnGrid);
    const isFirstCard = (chosenCards.length === 0);
    if (isFirstCard){
        chosenCards[0] = whichCard;
        chosenIndex[0] = cardIdOnGrid;
    } else {
        chosenCards[1] = whichCard;
        chosenIndex[1] = cardIdOnGrid;
        cardsChosenMatch(chosenCards, chosenIndex); 
    }
    
}

const cardsChosenMatch = (chosenCardsArr, chosenIndexArr) => {
    removeEventFlipCard();
    if (chosenCardsArr[0] === chosenCardsArr[1]) {
        cardsWon(chosenCardsArr, chosenIndexArr);
    } else {
        flipCardReset(chosenCardsArr, chosenIndexArr);
    }
}

const flipCardReset = (chosenCardsArr, chosenIndexArr) => {
    setTimeout(() => {
        $(".card").css("background-image","url(img/card-blank-doomslayer-logo.png)");
        setEventFlipCard();
    }, 500)
    
    gameStatus.chosenCards = [];
    lessPlayerHealth();
    endGameCheck();
}

const cardsWon = (chosenCardsArr, chosenIndexArr) => {
    setTimeout(() => {              // after 500ms, change face to game win face img
        for (let i = 0; i < chosenIndexArr.length; i++) {
            $(chosenIndexArr[i]).css("background-image","url(img/winFace.png)");
        }
        
    }, 500)
    
    setTimeout(() => {              //after 1000ms, remove won cards
        $(chosenIndexArr[0]).remove();
        $(chosenIndexArr[1]).remove();
        $('.cardsRemain').children('span').text(updateCardsRemain());
        setEventFlipCard();
        if(updateCardsRemain() === 0) {
            nextLevel();
        }
    }, 900);

    gameStatus.chosenCards = [];
    
}

const endGameCheck = () => {
    if (gameStatus.health <= 0) {
        gameStatus.gameOverStatus = true; // need an end game page
        $('.container').hide();
        $('#gameOver').show();
    }

}

const updateCardsRemain = () => {
    const numCardsLeft = $(".display").children().length;
    $(".cardsRemain > span").text(numCardsLeft);
    return numCardsLeft;
}

const updatePlayerHealth = (healthLeft) => {
    const $healthBar = $(".healthBar");
    gameStatus.health = healthLeft;
    $healthBar.text(gameStatus.health + "%");
    $healthBar.css("width",(5*healthLeft))
}

const lessPlayerHealth = () => {
    const currentLevel = gameStatus.currentLevel;
    const lessMultiplier = gameLevelData[currentLevel].numOfCards;
    const newHealth = gameStatus.health - Math.round(100 / lessMultiplier);
    updatePlayerHealth(newHealth);
}

const setEventFlipCard = () => {
    $(".display").children().on("click", () => {
        flipCard(event.target.id);
        // console.log(event.target.id)
        // if (gameStatus.gameOverStatus === true){
        //     console.log("you lose")
        // }
        
    });
}

const removeEventFlipCard = (cardIdOnGrid) => {
    $(".display").children(cardIdOnGrid).off("click");

}

const startGameButton = () => {
    $('#startButton').on("click", () => {
        $('.container').hide();
        setNewLevel(); 
        $('#game').show();
    })
}

const retryGameButton = () => {
    $('#retryButton').on("click", () => {
        $('.container').hide();
        $('.display').children().remove();
        gameStatus.currentLevel = 0;
        setNewLevel();
        $('#game').show();
    })
}

const quitGameButton = () => {
    $('#quitButton').on("click", () => {
        $('.container').hide();
        $('.display').children().remove();
        gameStatus.currentLevel = 0;
        gameStatus.gameOverStatus = false;
        $('#intro').show();
    })
}

const setup = () => {
    startGameButton();
    retryGameButton();
    quitGameButton();
     
}

const render = () => {
    $('.container').hide();
    $('#intro').show();
    }
    
$(() => {
    setup();
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
// [DONE] cardArrayShuffle() // shuffles positions of the cards 
// [DONE] cardsInGame() // chosen cards arranged in array
// [DONE] cardsChosen() // 2 element array for user to choose 2 cards, clear cards after match/no match
// [DONE]cardsPaired() // cards won/paired are stored here
// [DONE] flipCard() // flip card to front or back when user chooses card, or when both cards revealed
// [DONE] createGrid // need to dynamically create card grid in CSS