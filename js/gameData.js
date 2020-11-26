const cardsAll = [
    {
        id: "card0",
        type: "normal",
        power: "none",
        imgPath: "img/cannotDie.gif"
    },
    {
        id: "card1",
        type: "normal",
        power: "none",
        imgPath: "img/soulsphere.gif"
    },
    {
        id: "card2",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    },
    {
        id: "card3",
        type: "normal",
        power: "none",
        imgPath: "img/iconOfSin.png"
    },
    {
        id: "card4",
        type: "normal",
        power: "none",
        imgPath: "img/cannotDie.gif"
    },
    {
        id: "card5",
        type: "normal",
        power: "none",
        imgPath: "img/soulsphere.gif"
    },
    {
        id: "card6",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    },
    {
        id: "card7",
        type: "normal",
        power: "none",
        imgPath: "img/iconOfSin.png"
    },
    {
        id: "card8",
        type: "normal",
        power: "none",
        imgPath: "img/cannotDie.gif"
    },
    {
        id: "card9",
        type: "powerUp",
        power: "Shotgun",
        imgPath: "img/soulsphere.gif"
    },
    {
        id: "card10",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    },
    {
        id: "card11",
        type: "normal",
        power: "none",
        imgPath: "img/iconOfSin.png"
    },
    {
        id: "card12",
        type: "normal",
        power: "none",
        imgPath: "img/cannotDie.gif"
    },
    {
        id: "card13",
        type: "normal",
        power: "none",
        imgPath: "img/soulsphere.gif"
    },
    {
        id: "card14",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    },
    {
        id: "card15",
        type: "normal",
        power: "none",
        imgPath: "img/iconOfSin.png"
    },
    {
        id: "card16",
        type: "normal",
        power: "none",
        imgPath: "img/cannotDie.gif"
    },
    {
        id: "card17",
        type: "powerUp",
        power: "Clairvoyance",
        imgPath: "img/soulsphere.gif"
    },
    {
        id: "card18",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    },
    {
        id: "card19",
        type: "normal",
        power: "none",
        imgPath: "img/iconOfSin.png"
    },
    {
        id: "card20",
        type: "normal",
        power: "none",
        imgPath: "img/cannotDie.gif"
    },
    {
        id: "card21",
        type: "normal",
        power: "none",
        imgPath: "img/soulsphere.gif"
    },
    {
        id: "card22",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    },
    {
        id: "card23",
        type: "powerUp",
        power: "R.P.G. (Ridiculously overPowered Gun)",
        imgPath: "img/iconOfSin.png"
    },
    {
        id: "card24",
        type: "normal",
        power: "none",
        imgPath: "img/cannotDie.gif"
    },
    {
        id: "card25",
        type: "normal",
        power: "none",
        imgPath: "img/soulsphere.gif"
    },
    {
        id: "card26",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    },
    {
        id: "card27",
        type: "normal",
        power: "none",
        imgPath: "img/iconOfSin.png"
    },
    {
        id: "card28",
        type: "normal",
        power: "none",
        imgPath: "img/cannotDie.gif"
    },
    {
        id: "card29",
        type: "normal",
        power: "none",
        imgPath: "img/soulsphere.gif"
    },
    {
        id: "card30",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    },
    {
        id: "card31",
        type: "normal",
        power: "none",
        imgPath: "img/invisible.gif"
    }
]

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
            "imgPath": 'img/zombie.gif'
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
            "numOfCards": 24,
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