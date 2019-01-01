class Maze {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
        this.xPosition = 385;
        this.yPosition = 0;
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
       
        document.addEventListener("load", ()=>{
            ctx.beginPath();
            ctx.rect(385, 0, 13, 13);
            ctx.fillStyle = "red";
            ctx.fill();
        })
    }
    drawMazeHero(){
        
    }
    moveLeft(){
        if(this.xPosition > 0){
            this.xPosition = this.xPosition - 10;
        }
        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);
        ctx.beginPath();
        ctx.rect(this.xPosition, this.yPosition, 13, 13);
        ctx.fillStyle = "red";
        ctx.fill(); 
        console.log("left: " + "x is " + this.xPosition + " y is " + this.yPosition); 

    }
    moveUp(){
        if(this.yPosition < 0){
            this.yPosition = this.yPosition + 10
        }
        console.log("up: " + "x is " + this.xPosition + " y is " + this.yPosition);
    }
    moveRight(){
        if(this.xPosition > 0){
            this.xPosition = this.xPosition + 10;
            console.log("right: " + "x is " + this.xPosition + " y is " + this.yPosition);
        }
    }
    moveDown(){
        if(this.yPosition <= 0){
            this.yPosition = this.yPosition - 10
            console.log("down: " + "x is " + this.xPosition + " y is " + this.yPosition);
        }
    }

}

document.onkeydown = function(event) {
    // switch (event.keyCode) {
    //     case 37:
    //         mazeGame.moveLeft();
    //       break;
    //    case 38:
    //         mazeGame.moveUp();
    //       break;
    //    case 39:
    //         mazeGame.moveRight();
    //         break;
    //    case 40:
    //         mazeGame.moveDown();
    //       break;
    // }
    if(event.which == 37){
        mazeGame.moveLeft();
    } else if(event.which == 38) {
        mazeGame.moveUp();
    } else if(event.which == 39){
        mazeGame.moveRight();
    } else if(event.which == 40){
        mazeGame.moveDown();
    }
};

// put this in for testing.
let mazeGame = new Maze();
mazeGame.layoutBoard();
loadCanvas();
// mazeGame.loadMazeHero();
