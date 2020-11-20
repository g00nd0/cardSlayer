const cardGrid = ["a","b","b","a"];

const gameLevelData = [{
                        "level": 0,
                        "numOfCards": 4,
                        "demon": "Generic Zombie"
                        },
                        {
                        "level": 1,
                        "numOfCards": 8,
                        "demon": "Zombie Soldier"
                        }]

let gameOverStatus = false;

const userChoice = (x,y) => {
    if (cardGrid[x] === cardGrid[y]) {
        console.log("you guessed correctly")
    } else {
        console.log("nope")
    }
}

userChoice(0,3)