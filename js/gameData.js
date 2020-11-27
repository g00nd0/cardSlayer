const cardsAll = [
    {
        id: "card0",
        type: "normal",
        power: "none",
        imgPath: "img/crosshairs.gif"
    },
    {
        id: "card1",
        type: "normal",
        power: "none",
        imgPath: "img/SmallLockDoor.png"
    },
    {
        id: "card2",
        type: "normal",
        power: "none",
        imgPath: "img/GrapplingHook.png"
    },
    {
        id: "card3",
        type: "normal",
        power: "none",
        imgPath: "img/door1.png"
    },
    {
        id: "card4",
        type: "normal",
        power: "none",
        imgPath: "img/door2.png"
    },
    {
        id: "card5",
        type: "normal",
        power: "none",
        imgPath: "img/deer_skull1.jpeg"
    },
    {
        id: "card6",
        type: "normal",
        power: "none",
        imgPath: "img/deer_skull2.jpeg"
    },
    {
        id: "card7",
        type: "normal",
        power: "none",
        imgPath: "img/ghost_1.png"
    },
    {
        id: "card8",
        type: "normal",
        power: "none",
        imgPath: "img/knot.png"
    },
    {
        id: "card9",
        type: "powerUp",
        power: "Shotgun",
        imgPath: "img/shotgun.png"
    },
    {
        id: "card10",
        type: "normal",
        power: "none",
        imgPath: "img/crow1.png"
    },
    {
        id: "card11",
        type: "normal",
        power: "none",
        imgPath: "img/skull3.png"
    },
    {
        id: "card12",
        type: "normal",
        power: "none",
        imgPath: "img/skull2.jpg"
    },
    {
        id: "card13",
        type: "normal",
        power: "none",
        imgPath: "img/skull1.png"
    },
    {
        id: "card14",
        type: "normal",
        power: "none",
        imgPath: "img/skull4.jpg"
    },
    {
        id: "card15",
        type: "normal",
        power: "none",
        imgPath: "img/SpiderWeb.png"
    },
    {
        id: "card16",
        type: "normal",
        power: "none",
        imgPath: "img/SpookyEctoplasm.png"
    },
    {
        id: "card17",
        type: "powerUp",
        power: "Clairvoyance",
        imgPath: "img/clairvoyance.jpg"
    },
    {
        id: "card18",
        type: "normal",
        power: "none",
        imgPath: "img/spookyhousesheet.png"
    },
    {
        id: "card19",
        type: "normal",
        power: "none",
        imgPath: "img/stairs_32x32_EVENEVENMOARSHADOW.png"
    },
    {
        id: "card20",
        type: "normal",
        power: "none",
        imgPath: "img/wishing_well.svg_.png"
    },
    {
        id: "card21",
        type: "normal",
        power: "none",
        imgPath: "img/roaming_cultist_0.gif"
    },
    {
        id: "card22",
        type: "normal",
        power: "none",
        imgPath: "img/serpent.png"
    },
    {
        id: "card23",
        type: "powerUp",
        power: "R.P.G. (Ridiculously overPowered Gun)",
        imgPath: "img/rpg.jpg"
    },
    {
        id: "card24",
        type: "normal",
        power: "none",
        imgPath: "img/eyebot.png"
    },
    {
        id: "card25",
        type: "normal",
        power: "none",
        imgPath: "img/eyelander_0.png"
    },
    {
        id: "card26",
        type: "normal",
        power: "none",
        imgPath: "img/bat.gif"
    },
    {
        id: "card27",
        type: "normal",
        power: "none",
        imgPath: "img/blue-thing.png"
    },
    {
        id: "card28",
        type: "normal",
        power: "none",
        imgPath: "img/book-cursed.jpg"
    },
    {
        id: "card29",
        type: "normal",
        power: "none",
        imgPath: "img/crab-thing.png"
    },
    {
        id: "card30",
        type: "normal",
        power: "none",
        imgPath: "img/green-thing.png"
    },
    {
        id: "card31",
        type: "normal",
        power: "none",
        imgPath: "img/lovecraftian-horror.gif"
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
            "demon": "Minion",
            "imgPath": 'img/eyebot.png'
        },
        {
            "level": 2,
            "numOfCards": 8,
            "demon": "Zombie",
            "imgPath": 'img/zombie.gif'
        },
        {
            "level": 3,
            "numOfCards": 12,
            "demon": "Lost Soul",
            "imgPath": 'img/ghost_1.png'
        },
        {
            "level": 4,
            "numOfCards": 16,
            "demon": "Restless Spirit",
            "imgPath": 'img/SpookyEctoplasm.png'
        },
        {
            "level": 5,
            "numOfCards": 20,
            "demon": "Hungry Ghost",
            "imgPath": 'img/green-thing.png'
        },
        {
            "level": 6,
            "numOfCards": 24,
            "demon": "Cerberus",
            "imgPath": 'img/cerberus.png'
        },
        {
            "level": 7,
            "numOfCards": 30,
            "demon": "Crab Demon",
            "imgPath": 'img/crab-thing.png'
        },
        {
            "level": 8,
            "numOfCards": 36,
            "demon": "Wendigo",
            "imgPath": 'img/deer_skull1.jpeg'
        },
        {
            "level": 9,
            "numOfCards": 40,
            "demon": "Lovecraftian Horror",
            "imgPath": 'img/lovecraftian-horror.gif'
        },
        {
            "level": 10,
            "numOfCards": 48,
            "demon": "Cthulhu",
            "imgPath": 'img/roaming_cultist_0.gif'
        },
        {
            "level": 11,
            "numOfCards": 64,
            "demon": "Satan Himself",
            "imgPath": 'img/blue-thing.png'
        }];


const gameStatus = {
    currentLevel: 0,
    gameOverStatus: false,
    cardsInGame: [],
    chosenCards: [],
    chosenIndex: [],
    health: 100
    
}