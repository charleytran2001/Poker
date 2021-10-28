function playerBestHand() {
    fourOfAKind();
    flush();
    threeOfAKind();
    pair();

    switch (true) {
        case playerFourOfAKind:
            console.log("Best Hand: Four of a Kind " + playerFourOfAKindFace);
            break;
        case (playerThreeOfAKind && playerPair):
            console.log("Best Hand: Full House " + playerThreeOfAKindFace + "-" + playerPairFace);
            break;
        case playerFlush:
            console.log("Best Hand: Flush " + playerFlushFace);
            break;
        case playerThreeOfAKind:
            console.log("Best Hand: Three of a Kind " + playerThreeOfAKindFace);
            break;
        case playerPair:
            console.log("Best Hand: Pair " + playerPairFace);
            break;
        default:
            playerHighCard = true;
            highCard();
            console.log("Best Hand: High Card " + playerHighCardFace);
            break;
    }
}