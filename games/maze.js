class Maze {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
        this.xPosition = 10;
        this.yPosition = 10;
        this.boardImage = new Image();
        this.boardImage.src = "style/images/maze.svg";
    }
    layoutBoard(){
        console.log('Maze game started');
        // var img = new Image();
        this.boardImage.onload = function() {
            ctx.drawImage(this.boardImage, this.xPosition, this.yPosition);
        }
        // img.src = "style/images/maze.svg";
    }
    loadMazeHero(){
        
    }
}

// put this in for testing.
let mazeGame = new Maze();
mazeGame.layoutBoard();
loadCanvas();
