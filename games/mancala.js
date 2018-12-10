class MemoryMatch {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");

    }
    layoutBoard(){
        console.log('Mancala game started');
    }
}

// put this in for testing.
let mancalaGame = new Mancala();
mancalagame.layoutBoard();