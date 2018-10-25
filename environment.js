let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");
let chosenHero = new Hero(getName(),getGender());

function loadCanvas(){
    gameCanvas.width = 700;
    gameCanvas.height = 500;
    gameCanvas.style.border = "1px solid #000000";
    document.getElementById("container").appendChild(gameCanvas);
}

function loadBackground(){
    ctx.beginPath();
    ctx.rect(0, 0, 700, 500);
    ctx.fillStyle = "green";
    ctx.fill();
}

function loadDoor(){
    let doorReady = false;
    let doorImage = new Image();

    doorImage.onload = function(){
        doorReady = true;
        ctx.drawImage(doorImage, (Math.random() * (gameCanvas.width)), (Math.random() * (gameCanvas.height)));

    }
    doorImage.src = "style/images/environment/door.png";


}

function loadHero(){
    chosenHero.heroReady = true;
    if(chosenHero.heroReady){
        chosenHero.heroImage.onload = function(){
            ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
        }
    }
}

function runGame() {
    loadBackground();
    loadDoor();
    loadHero();
}

loadCanvas();
runGame();