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
        console.log("Hero loaded");
        ctx.beginPath();
        ctx.rect(385, 0, 13, 13);
        ctx.fillStyle = "red";
        ctx.fill();
    }
    moveLeft(){
        console.log("left: " + "x is " + this.xPosition + " y is " + this.yPosition);

    }
    moveUp(){
        console.log("up: " + "x is " + this.xPosition + " y is " + this.yPosition);
    }
    moveRight(){
        console.log("right: " + "x is " + this.xPosition + " y is " + this.yPosition);
    }
    moveDown(){
        console.log("down: " + "x is " + this.xPosition + " y is " + this.yPosition);
    }
}

document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
            mazeGame.moveLeft();
          break;
       case 38:
            mazeGame.moveUp();
          break;
       case 39:
            mazeGame.moveRight();
            break;
       case 40:
            mazeGame.moveDown();
          break;
    }
};
// put this in for testing.
let mazeGame = new Maze();
mazeGame.layoutBoard();
loadCanvas();
mazeGame.loadMazeHero();
