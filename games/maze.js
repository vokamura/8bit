class Maze {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
        this.xPosition = 10;
        this.yPosition = 10;
        this.boardImage = new Image();
        this.boardImage.src = "style/images/maze.svg";
        this.mazeHero = new Image();
    }
    layoutBoard(){
        console.log('Maze game started');
        this.boardImage.addEventListener("load", () => {
            ctx.drawImage(this.boardImage, -2, -2);
        })
    }
    loadMazeHero(){
        
    }
}

// put this in for testing.
let mazeGame = new Maze();
mazeGame.layoutBoard();
loadCanvas();
