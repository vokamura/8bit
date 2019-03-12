class Maze {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
        this.xPosition = 385;
        this.yPosition = 0;
        this.boardImage = new Image();
        this.boardImage.src = "style/images/maze.svg";
        // this.mazeHero = new Image();
        // this.background = [];
        this.mazeHero = new Image();
        this.mazeHero.src = "style/images/mini_sprite.png";
    }
    layoutBoard(){
        console.log('Maze game started');
        this.boardImage.addEventListener("load", () => {
            ctx.drawImage(this.boardImage, -2, -2);
        });
    }
    loadMazeHero(){
        this.boardImage.addEventListener("load", ()=>{
            // ctx.beginPath();
            // ctx.rect(385, 0, 13, 13);
            // ctx.fillStyle = "red";
            // ctx.fill();
            console.log("Hero loaded");
            // ctx.getImageData.data[0];
            ctx.drawImage(this.mazeHero, this.xPosition, this.yPosition);
        });
    }
    drawMazeHero(){
        // ctx.beginPath();
        // ctx.rect(this.xPosition, this.yPosition, 13, 13);
        // ctx.fillStyle = "red";
        // ctx.fill(); 
        ctx.drawImage(this.mazeHero, this.xPosition, this.yPosition);

    }
    moveLeft(){
        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);

        this.drawMazeHero();

        ctx.drawImage(this.boardImage, -2, -2);
        if(this.xPosition > 0){
            this.xPosition = this.xPosition - 10;
        }
        console.log("left: " + "x is " + this.xPosition + " y is " + this.yPosition); 
    }
    moveUp(){
        this.drawMazeHero();
        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.yPosition > 0){
            this.yPosition = this.yPosition - 10;
        }
        console.log("up: " + "x is " + this.xPosition + " y is " + this.yPosition);
    }
    moveRight(){
        this.drawMazeHero();

        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.xPosition > 0){
            this.xPosition = this.xPosition + 10;
            console.log("right: " + "x is " + this.xPosition + " y is " + this.yPosition);
        }
    }
    moveDown(){
        this.drawMazeHero();

        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.yPosition >= 0 && this.yPosition < 530){
            this.yPosition = this.yPosition + 10;
            console.log("down: " + "x is " + this.xPosition + " y is " + this.yPosition);
        }
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

        console.log(this.xPosition + this.yPosition);

        let backImg = this.boardImage.src;
        console.log(backImg);
        
        // console.log(ctx.getImageData().data);

        console.log(document.getElementsByTagName("svg")[0]);
        // getPixel(url, x, y) {
        //     var img = new Image();
        //     img.src = url;
        //     var canvas = document.createElement('canvas');
        //     var context = canvas.getContext('2d');
        //     context.drawImage(img, 0, 0);
        //     return context.getImageData(x, y, 1, 1).data;
        //       
    }
    //try passing in random images
    
    // getPixel('./bg.png', 10, 10); // [255, 255, 255, 0];
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
