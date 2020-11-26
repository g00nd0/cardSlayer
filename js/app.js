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
    const cardName = $(cardIdOnGrid).attr("alt"); // get the alt attr in given id's HTML tag
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
    $(cardIdOnGrid).css("background-image",imgPath);
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

const usePowerUp = (chosenCardsArr) => {
    switch(chosenCardsArr[0].power){
        case "Shotgun":
            powerUpRemove(chosenCardsArr,chosenCardsArr[0].power); 
            break;
        case "Clairvoyance":
            powerUpReveal();
            break;
        case "R.P.G. (Ridiculously overPowered Gun)":
            powerUpRemove(chosenCardsArr,chosenCardsArr[0].power);
            break;
        default:
            return ("No power ups.");
    }
}

const powerUpRemove = (chosenCardsArr,powerUpType) => {
    const numCardsLeft = $('.display').children().length;
    let numOfRemoves;

    if (powerUpType === "Shotgun"){
        numOfRemoves = 2;
    } else if (powerUpType === "R.P.G. (Ridiculously overPowered Gun)") {
        numOfRemoves = 6;
    }

    for (let i = 0; i < numOfRemoves; i++){
        const randomIndex = Math.floor(Math.random()*numCardsLeft);
        const indexInJQuery = ":eq("+ randomIndex + ")";
        const cardId = $('.display').children(indexInJQuery).attr("alt");
        if (cardId === chosenCardsArr[0].id) {
            i--; // redo iteration, because we want to exclude shotgun card
        } else {
            const cardAlt = "[alt=" + cardId + "]";
            $(cardAlt).remove();
        }
        updateCardsRemain();
    }
}

const powerUpReveal = () => {  // reveal all cards for 3000ms
    const numCardsLeft = $(".display").children().length;
    removeEventFlipCard();
    for (let i = 0; i < numCardsLeft; i++) {
        const gridIndex = ":eq(" + i + ")";
        const cardGridId = $(".display").children(gridIndex).attr("id");
        const cardName = $("#" + cardGridId).attr("alt")
        let imgPath;
        let whichCard;
        for ( let i = 0; i < cardsAll.length; i++) {
            if ( cardName === cardsAll[i].id ) {
                imgPath = "url(" + cardsAll[i].imgPath + ")";
                whichCard = cardsAll[i];
            }
        }
        $("#" + cardGridId).css("background-image",imgPath);
    }

    setTimeout(() => {
        $(".display").children().css("background-image","url(img/card-blank-doomslayer-logo.png)");
        }, 3000)
}

const cardsWon = (chosenCardsArr, chosenIndexArr) => {
    let cardRemoveTimeout = 1000;
    
    if(chosenCardsArr[0].type === "powerUp") {
        usePowerUp(chosenCardsArr);
        if(chosenCardsArr[0].power === "Clairvoyance") {
            cardRemoveTimeout = 3000;
        }
    }

    setTimeout(() => {              // after 500ms, change face to game win face img
        for (let i = 0; i < chosenIndexArr.length; i++) {
            $(chosenIndexArr[i]).css("background-image","url(img/winFace.png)");
        }
        
    }, 500)
    
    setTimeout(() => {              //after 1000ms, remove won cards
        $(chosenIndexArr[0]).remove();
        $(chosenIndexArr[1]).remove();
        updateCardsRemain();
        setEventFlipCard();
        if(updateCardsRemain() === 0) {
            nextLevel();
        }
    }, cardRemoveTimeout);

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
    });
}

const removeEventFlipCard = (cardIdOnGrid) => {
    $(".display").children(cardIdOnGrid).off("click");
}

const startGameButton = () => {
    $('#startButton').on("click", () => {
        $('.container').hide();
        gameStatus.currentLevel = 8; //set to level for testing powerup
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