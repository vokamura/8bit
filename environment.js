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
    constructor(doorSource, currentDoor){
        this.xPosition = 0;
        this.yPosition = 0;
        this.doorReady = false;
        this.doorImage = new Image();
        this.doorImage.src = doorSource;
        this.currentDoor = currentDoor;
    }
    drawDoor(){
        ctx.drawImage(this.doorImage, this.xPosition, this.yPosition);
    }
    loadCurrentDoor(){
        this.doorReady = true;
        this.xPosition = Math.random() * (gameCanvas.width - 250);
        this.yPosition = Math.random() * (gameCanvas.height - 250);
        if(this.doorReady){
            this.doorImage.addEventListener("load", () =>{
                ctx.drawImage(this.doorImage, this.xPosition, this.yPosition);
            })
        }
        console.log(this.currentDoor);
    }
    // loadSilverDoor(){
        // this.doorImage.src = "style/images/environment/silver_door.png";
    //     this.xPosition = Math.random() * (gameCanvas.width - 250);
    //     this.yPosition = Math.random() * (gameCanvas.height - 250);
    //     this.doorImage.addEventListener("load", () =>{
    //         ctx.drawImage(this.doorImage, this.xPosition, this.yPosition);
    //     })
    //     console.log(this.currentDoor);
    // }
}

function reachScooter(){
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
    walkBtn.addEventListener("click", continueWalk);
    askBody.append(walkBtn);
}

function reachSilverDoor(){
    let shadow = document.getElementsByClassName("textShadow")[0];
    shadow.style.visibility = "visible";
    let askBody = document.getElementsByClassName("textBody")[0];
    askBody.style.textAlign = "center";

    let introTitle = document.createElement("h2");
    introTitle.classList.add("intro");
    introTitle.textContent = `You've reached a door!`;
    askBody.append(introTitle);

    let choiceTitle = document.createElement("div");
    choiceTitle.classList.add("intro");
    choiceTitle.textContent = `Go inside and see what's behind it`;
    askBody.append(choiceTitle);

    let walkBtn = document.createElement("button");
    walkBtn.type = "button";
    walkBtn.textContent = "Keep walking";
    walkBtn.classList.add("centerButton");
    walkBtn.addEventListener("click", continueWalk);
    askBody.append(walkBtn);
}

function continueWalk(){
    clearWindow();
    closeWindow();
    loadBackground();
    chosenHero.drawHero();
    chosenDoor.xPosition = null;
    chosenDoor.yPosition = null;
    chosenDoor = new Door("style/images/environment/silver_door.png", "silverDoor");
    chosenDoor.loadCurrentDoor();
}

function runGame() {
    loadCanvas();
    loadBackground();
    chosenDoor.loadCurrentDoor();
    chosenHero.loadHero();
}

let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");
let chosenHero = new Hero();
let chosenDoor = new Door("style/images/environment/scooter.png", "scooter");

runGame();
