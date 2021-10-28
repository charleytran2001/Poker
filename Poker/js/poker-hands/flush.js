// Flush
function flush() {
    if((playerSpades || playerClubs || playerHearts || playerDiamonds) >= 5) {
        console.log("Flush")
        playerFlush = true;
        highCard();
        playerFlushFace = playerHighCardFace;
        playerHighCardFace = "";
    }
}