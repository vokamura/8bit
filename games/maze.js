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
    }

}

function loop(){

	draw_platforms();
	player.draw();

	if(keys[38] || keys[32]){
		if(!player.jumping){
			player.velY = -player.jumpStrength*2;
			player.jumping = true;
		}
	}

	if(keys[39]){
		if(player.velX < player.speed){
			player.velX++;
		}
	}

	if(keys[37]){
		if(player.velX > -player.speed){
			player.velX--;
		}
	}

	player.x += player.velX;
	player.y += player.velY;

	player.velX *= friction;
	player.velY += gravity;

	player.grounded = false;
	for(var i = 0; i < platforms.length; i++){
		var direction = collisionCheck(player, platforms[i]);

		if(direction == "left" || direction == "right"){
			player.velX = 0;
		} else if(direction == "bottom"){
			player.jumping = false;
			player.grounded = true;
		} else if(direction == "top"){
			player.velY *= -1;
		}

	}

	if(player.grounded){
		player.velY = 0;
	}

}

function collisionCheck(character, platform){

	var vectorX = (character.x + (character.width/2)) - (platform.x + (platform.width/2));
	var vectorY = (character.y + (character.height/2)) - (platform.y + (platform.height/2));

	var halfWidths = (character.width/2) + (platform.width/2);
	var halfHeights = (character.height/2) + (platform.height/2);

	var collisionDirection = null;

	if(Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights){

		var offsetX = halfWidths - Math.abs(vectorX);
		var offsetY = halfHeights - Math.abs(vectorY);
		if(offsetX < offsetY){

			if (vectorX > 0){
				collisionDirection = "left";
				character.x += offsetX;
			} else {
				collisionDirection = "right";
				character.x -= offsetX;
			}

		} else {

			if (vectorY > 0){
				collisionDirection = "top";
				character.y += offsetY;
			} else {
				collisionDirection = "bottom";
				character.y -= offsetY;
			}

		}

	}

	return collisionDirection;

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
