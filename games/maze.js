class Maze {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
        this.xPosition = 385;
        this.yPosition = 0;
        this.boardImage = new Image();
        this.boardImage.src = "style/images/maze.svg";
        this.mazeHero = new Image();
        this.background = [];
    }
    layoutBoard(){
        console.log('Maze game started');
        this.boardImage.addEventListener("load", () => {
            ctx.drawImage(this.boardImage, -2, -2);
        });
    }
    loadMazeHero(){
        this.boardImage.addEventListener("load", ()=>{
            ctx.beginPath();
            ctx.rect(385, 0, 13, 13);
            ctx.fillStyle = "red";
            ctx.fill();
            console.log("Hero loaded");
            // ctx.getImageData.data[0];
        });
    }
    drawMazeHero(){
        ctx.beginPath();
        ctx.rect(this.xPosition, this.yPosition, 13, 13);
        ctx.fillStyle = "red";
        ctx.fill(); 
    }
    moveLeft(){
        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.xPosition > 0){
            this.xPosition = this.xPosition - 10;
        }
        this.drawMazeHero();
        console.log("left: " + "x is " + this.xPosition + " y is " + this.yPosition); 
    }
    moveUp(){
        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.yPosition > 0){
            this.yPosition = this.yPosition - 10;
        }
        this.drawMazeHero();
        console.log("up: " + "x is " + this.xPosition + " y is " + this.yPosition);
    }
    moveRight(){
        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.xPosition > 0){
            this.xPosition = this.xPosition + 10;
            console.log("right: " + "x is " + this.xPosition + " y is " + this.yPosition);
        }
        this.drawMazeHero();
    }
    moveDown(){
        ctx.clearRect(this.xPosition, this.yPosition, 13, 13);
        ctx.drawImage(this.boardImage, -2, -2);
        if(this.yPosition >= 0 && this.yPosition < 530){
            this.yPosition = this.yPosition + 10;
            console.log("down: " + "x is " + this.xPosition + " y is " + this.yPosition);
        }
        this.drawMazeHero();
        this.checkForWalls();
    }
    checkForWalls(){
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
        let c = document.getElementById("gameID");
        let context = c.getContext("2d");
        // let n = this.yPosition * c.width + this.xPosition;
        // console.log(n);
        console.log(context.getImageData(this.xPosition, this.yPosition, 1, 1).data);
        // console.log(context.getImageData(this.xPosition, this.yPosition, 1, 1).data[1]);
        // console.log(context.getImageData(this.xPosition, this.yPosition, 1, 1).data[2]);
        debugger;
        var pixelMap = [];
        for( var y = 0; y < this.boardImage.width; y++ ) {
            for( var x = 0; x < this.boardImage.height; x++ ) {
                // Fetch pixel at current position
                var pixel = ctx.getImageData( x, y, 1, 1 );
                // Check that opacity is above zero
                if( pixel.data[3] != 0 ) {
                    pixelMap.push( { x:x, y:y } );
                }
            }
        }
        console.log(pixelMap);
        // return pixelMap;        
    }
}

    /* Box model detection, return true on collision */
    function hitBox( source, target ) {
        /* Source and target objects contain x, y and width, height */
        return !(
            ( ( source.y + source.height ) < ( target.y ) ) ||
            ( source.y > ( target.y + target.height ) ) ||
            ( ( source.x + source.width ) < target.x ) ||
            ( source.x > ( target.x + target.width ) )
        );
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
