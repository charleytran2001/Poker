// High Card
function highCard() {
    for(var i = 0; i < playerHand.length; i++) {
        switch(playerHand[i].face) {
            case "A":
                playerHighCardFace = "A";
                break;
            case "K":
                playerHighCardFace = "K";
                break;
            case "Q":
                playerHighCardFace = "Q";
                break;
            case "J":
                playerHighCardFace = "J";
                break;
            case "10":
                playerHighCardFace = "10";
                break;
            case "9":
                playerHighCardFace = "9";
                break;
            case "8":
                playerHighCardFace = "8";
                break;
            case "7":
                playerHighCardFace = "7";
                break;
            case "6":
                playerHighCardFace = "6";
                break;
            case "5":
                playerHighCardFace = "5";
                break;
            case "4":
                playerHighCardFace = "4";
                break;
            case "3":
                playerHighCardFace = "3";
                break;
            case "2":
                playerHighCardFace = "2";
                break;
        }
    }
}