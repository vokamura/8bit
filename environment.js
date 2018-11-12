function loadCanvas(){
    gameCanvas.width = 800;
    gameCanvas.height = 550;
    gameCanvas.style.border = "1px solid #000000";
    document.getElementById("container").appendChild(gameCanvas);
    gameCanvas.classList.add("canvasPosition");
}

function loadBackground(){
    ctx.beginPath();
    ctx.rect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.fillStyle = "green";
    ctx.fill();
}

class Door {
    constructor(){
        this.xPosition = 0;
        this.yPosition = 0;
        this.doorReady = false;
        this.doorImage = new Image();
        this.doorImage.src = "style/images/environment/scooter.png";
    }
    drawDoor(){
        ctx.drawImage(firstDoor.doorImage, firstDoor.xPosition, firstDoor.yPosition);
    }
}

function loadHero(){
    chosenHero.heroReady = true;
    if(chosenHero.heroReady){
        chosenHero.heroImage.onload = function(){
            ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
        }
    }
}

function loadScooter(){
    firstDoor.doorReady = true;
    firstDoor.xPosition = Math.random() * (gameCanvas.width - 250);
    firstDoor.yPosition = Math.random() * (gameCanvas.height - 250);
    if(firstDoor.doorReady){
        firstDoor.doorImage.onload = function(){
            ctx.drawImage(firstDoor.doorImage, firstDoor.xPosition, firstDoor.yPosition);
        }
    }
}

function scooterCheck(){
    let shadow = document.getElementsByClassName("textShadow")[0];
    shadow.style.visibility = "visible";
    let askBody = document.getElementsByClassName("textBody")[0];
    askBody.style.textAlign = "center";

    let introTitle = document.createElement("h2");
    introTitle.classList.add("intro");
    introTitle.textContent = `You've reached a scooter!`;
    askBody.append(introTitle);

    let choiceTitle = document.createElement("div");
    choiceTitle.classList.add("intro");
    choiceTitle.textContent = `Would you like to take the scooter or walk?`;
    askBody.append(choiceTitle);

    let scooterChoice = document.createElement("div");
    scooterChoice.classList.add("intro");
    scooterChoice.textContent = `Choose the scooter to play a mini-game and get there faster!`;
    askBody.append(scooterChoice);

    let walkChoice = document.createElement("div");
    walkChoice.classList.add("intro");
    walkChoice.textContent = `Choose walk and get there a lot slower`;
    askBody.append(walkChoice);
   
    let scooterBtn = document.createElement("button");
    scooterBtn.type = "button";
    scooterBtn.textContent = "Scooter";
    scooterBtn.classList.add("submitData");
    scooterBtn.style.float = "left";
    scooterBtn.addEventListener("click", chosenHero.rideScooter);
    askBody.append(scooterBtn);

    let walkBtn = document.createElement("button");
    walkBtn.type = "button";
    walkBtn.textContent = "Walk";
    walkBtn.classList.add("submitData");
    walkBtn.style.float = "right";
    walkBtn.addEventListener("click", chosenHero.walk);
    askBody.append(walkBtn);

    // let mmGame = new MemoryMatch();
    // mmGame.layoutCards();
}

function runGame() {
    loadCanvas();
    loadBackground();
    loadScooter();
    loadHero();
}

let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");
let chosenHero = new Hero();
let firstDoor = new Door();

runGame();