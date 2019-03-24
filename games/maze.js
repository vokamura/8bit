class Maze {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
        this.xPosition = 510;
        this.yPosition = 387;
        this.boardImage = new Image();
        this.boardImage.src = "style/images/maze.svg";
        this.mazeHero = new Image();
        this.mazeHero.src = "style/images/mini_sprite.png";
    }
    layoutBoard(){
        console.log('Maze game started');
        this.boardImage.addEventListener("load", () => {
            ctx.drawImage(this.boardImage, 50, 50);
        });
    }
    loadMazeHero(){
        this.boardImage.addEventListener("load", ()=>{
            console.log("Hero loaded");
            // ctx.getImageData.data[0];
            ctx.drawImage(this.mazeHero, this.xPosition, this.yPosition);
        });
    }
    drawMazeHero(){
        ctx.drawImage(this.mazeHero, this.xPosition, this.yPosition);
    }
    moveLeft(){
        ctx.clearRect(this.xPosition, this.yPosition, 50, 50);
        console.log("Before left: " + "x is " + this.xPosition + " y is " + this.yPosition)
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.xPosition > 0){
            this.xPosition = this.xPosition - 10;
        }

        this.drawMazeHero();

        console.log("After left: " + "x is " + this.xPosition + " y is " + this.yPosition); 
    }
    moveUp(){
        ctx.clearRect(this.xPosition, this.yPosition, 50, 50);

        ctx.drawImage(this.boardImage, -2, -2);
        if(this.yPosition > 0){
            this.yPosition = this.yPosition - 10;
        }
        this.drawMazeHero();

        console.log("up: " + "x is " + this.xPosition + " y is " + this.yPosition);
    }
    moveRight(){
        ctx.clearRect(this.xPosition, this.yPosition, 50, 50);
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.xPosition > 0){
            this.xPosition = this.xPosition + 10;
            console.log("right: " + "x is " + this.xPosition + " y is " + this.yPosition);
        }
        this.drawMazeHero();

    }
    moveDown(){
        ctx.clearRect(this.xPosition, this.yPosition, 55, 55);


        ctx.drawImage(this.boardImage, -2, -2);
        if(this.yPosition >= 0 && this.yPosition < 530){
            this.yPosition = this.yPosition + 10;
            console.log("down: " + "x is " + this.xPosition + " y is " + this.yPosition);
        }
        this.drawMazeHero();

        this.checkForWalls();
    }
    checkForWalls(pic, x, y){
        
        //https://benjaminhorn.io/code/pixel-accurate-collision-detection-with-javascript-and-canvas/
        // if(
        //     this.xPosition <= (chosenDoor.xPosition + 32)
        //     && chosenDoor.xPosition <= (this.xPosition + 32)
        //     && this.yPosition <= (chosenDoor.yPosition + 32)
        //     && chosenDoor.yPosition <= (this.yPosition + 32)
        //     && document.getElementsByClassName("textShadow")[0].style.visibility !== "visible"
        // ){
        //     console.log("wall");
        // }
        let getData = ctx.getImageData(this.xPosition, this.yPosition, 13, 13).data;
        console.log(getData);
        console.log(getData[55]);
        console.log(this.xPosition + "," + this.yPosition);
        console.log(this);
    }
}


document.onkeydown = function(event) {
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
mazeGame.loadMazeHero();
