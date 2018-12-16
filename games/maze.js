class Maze {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");

    }
    layoutBoard(){
        console.log('Maze game started');
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        }
        img.src = "style/images/maze.svg";
    }
}

// put this in for testing.
let mazeGame = new Maze();
mazeGame.layoutBoard();
