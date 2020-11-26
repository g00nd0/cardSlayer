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
        $(".display").children().css("background-image","url(img/card-back.jpg)");
        }, 3000)
}