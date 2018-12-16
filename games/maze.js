class Maze {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");

    }
    layoutBoard(){
        console.log('Maze game started');
    }
}

// put this in for testing.
let mazeGame = new Maze();
mazeGame.layoutBoard();
