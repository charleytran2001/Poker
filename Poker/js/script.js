// Player Variables
var playerHand = [];
// Player Suit Count
var playerSpades = 0;
var playerClubs = 0;
var playerHearts = 0;
var playerDiamonds = 0;
// Player Face Card Count
var playerAces = 0;
var playerTwos = 0;
var playerThrees = 0;
var playerFours = 0;
var playerFives = 0;
var playerSixes = 0;
var playerSevens = 0;
var playerEights = 0;
var playerNines = 0;
var playerTens = 0;
var playerJacks = 0;
var playerQueens = 0;
var playerKings = 0;
// Player Poker Hands
var playerFourOfAKind = false;
var playerFlush = false;
var playerThreeOfAKind = false;
var playerPair = false;
var playerHighCard = false;
var playerFourOfAKindFace = "";
var playerFlushFace = "";
var playerThreeOfAKindFace = "";
var playerPairFace = "";
var playerHighCardFace = "";

// Creates Cards
function start() {
    newDeck();
    for(var i = 0; i < 20; i++) {
        playerHand[i] = drawRandomCard();
    }

    // Counts the number of Suits and Faces in the player's hand
    for(var i = 0; i < playerHand.length; i++) {
        switch(playerHand[i].suit) {
            case "S":
                playerSpades++;
                break;
            case "C":
                playerClubs++;
                break;
            case "H":
                playerHearts++;
                break;
            case "D":
                playerDiamonds++
                break;
        }
        
        switch(playerHand[i].face) {
            case "A":
                playerAces++;
                break;
            case "2":
                playerTwos++;
                break;
            case "3":
                playerThrees++;
                break;
            case "4":
                playerFours++;
                break;
            case "5":
                playerFives++;
                break;
            case "6":
                playerSixes++;
                break;
            case "7":
                playerSevens++;
                break;
            case "8":
                playerEights++;
                break;
            case "9":
                playerNines++;
                break;
            case "10":
                playerTens++;
                break;
            case "J":
                playerJacks++;
                break;
            case "Q":
                playerQueens++;
                break;
            case "K":
                playerKings++;
                break;
        }
    }
}

start();

// Debug
for(var i = 0; i < 20; i++) {
    console.log(playerHand[i].suit + playerHand[i].face);
}

playerBestHand();