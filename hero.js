class Hero {
    constructor(name, gender, SOname, SOgender){
        this.name = localStorage.getItem("name");
        this.gender = localStorage.getItem("gender");
        this.SOname = localStorage.getItem("SOname");
        this.SOgender = localStorage.getItem("SOgender");
        this.favoriteFood = '';
        this.favoriteShow = '';
        this.xPosition = 0;
        this.yPosition = 400;
        this.heroReady = false;
        this.heroImage = new Image();
        this.heroImage.src = `style/images/${this.gender}_sprite/sprite_front_forward.png`;
    }
    loadHero(){
        this.heroReady = true;
        if(this.heroReady){
            this.heroImage.addEventListener("load", ()=>{
                ctx.drawImage(this.heroImage, this.xPosition, this.yPosition);
            })
        }
    }
    sayName(){
        console.log(name);
    }
    returnGender(){
        console.log(gender);
    }
    pickFood(){
        let food = ["Umami Bacon Kale Salad", "Artisnal Kimchi Vegan Tacos", "Cheese Fried Egg and Duck on a Stick"];
        this.favoriteFood = food[Math.floor(Math.random()*food.length)];
    }
    pickShow(){
        let show = ["Stranger Things", "Black Mirror", "The Good Place"];
        this.favoriteShow = show[Math.floor(Math.random()*show.length)];
    }
    moveForward(){
        if(document.getElementsByClassName("textShadow")[0].style.visibility !== "visible"){
            ctx.clearRect(this.xPosition, this.yPosition, 160, 160);
            loadBackground();
            if(chosenDoor.xPosition !== null && chosenDoor.yPosition){
                chosenDoor.drawDoor();
            }
            //moves character 10 pixels
            this.xPosition = this.xPosition + 10;
            //alternates between images for movement
            if(this.heroImage.getAttribute("src") == `style/images/${this.gender}_sprite/sprite_right_walk.png`){
                this.heroImage.src = `style/images/${this.gender}_sprite/sprite_right_stand.png`;
            } else {
                this.heroImage.src = `style/images/${this.gender}_sprite/sprite_right_walk.png`;
            }
            this.drawHero();
            this.checkForDoor();
        }
    }
    moveBack(){
        if(document.getElementsByClassName("textShadow")[0].style.visibility !== "visible"){
            ctx.clearRect(this.xPosition, this.yPosition, 160, 160);
            loadBackground();
            if(chosenDoor.xPosition !== null && chosenDoor.yPosition !== null){
                chosenDoor.drawDoor();
            }
            if (this.xPosition > 0){
                this.xPosition = this.xPosition - 10;
            }
            if(this.heroImage.getAttribute("src") == `style/images/${this.gender}_sprite/sprite_left_stand.png`){
                this.heroImage.src = `style/images/${this.gender}_sprite/sprite_left_walk.png`;
            } else {
                this.heroImage.src = `style/images/${this.gender}_sprite/sprite_left_stand.png`;
            }
            this.drawHero();
            this.checkForDoor();
        }
    }
    moveUp(){
        if(document.getElementsByClassName("textShadow")[0].style.visibility !== "visible"){
            ctx.clearRect(this.xPosition, this.yPosition, 160, 160);
            loadBackground();
            if(chosenDoor.xPosition !== null && chosenDoor.yPosition){
                chosenDoor.drawDoor();
            }
            if (this.yPosition > 0){
                this.yPosition = this.yPosition - 10;
            }
            if(this.heroImage.getAttribute("src") == `style/images/${this.gender}_sprite/sprite_back_rightfoot.png`){
                this.heroImage.src = `style/images/${this.gender}_sprite/sprite_back_leftfoot.png`;
            } else {
                this.heroImage.src = `style/images/${this.gender}_sprite/sprite_back_rightfoot.png`;
            }
            this.drawHero();
            this.checkForDoor();
        }
    }
    moveDown(){
        if(document.getElementsByClassName("textShadow")[0].style.visibility !== "visible"){
            ctx.clearRect(this.xPosition, this.yPosition, 160, 160);
            loadBackground();
            if(chosenDoor.xPosition !== null && chosenDoor.yPosition){
                chosenDoor.drawDoor();
            }
            this.yPosition = this.yPosition + 10;
            if(this.heroImage.getAttribute("src") == `style/images/${this.gender}_sprite/sprite_front_rightfoot.png`){
                this.heroImage.src = `style/images/${this.gender}_sprite/sprite_front_leftfoot.png`;
            } else {
                this.heroImage.src = `style/images/${this.gender}_sprite/sprite_front_rightfoot.png`;
            }
            this.drawHero();
            this.checkForDoor();
        }
    }
    drawHero(){
        ctx.drawImage(this.heroImage, this.xPosition, this.yPosition);
    }
    checkForDoor(){
        if(
            this.xPosition <= (chosenDoor.xPosition + 32)
            && chosenDoor.xPosition <= (this.xPosition + 32)
            && this.yPosition <= (chosenDoor.yPosition + 32)
            && chosenDoor.yPosition <= (this.yPosition + 32)
            && document.getElementsByClassName("textShadow")[0].style.visibility !== "visible"
        ){
            switch (chosenDoor.currentDoor){
                case "scooter":
                    reachScooter();
                    break;
                case "silverDoor":
                    reachSilverDoor();
                    break;
            }
        }   
    }
    rideScooter(){
        clearWindow();
        let mmGame = new MemoryMatch();
        mmGame.layoutCards();
    }

    interact(){
        console.log("interaction");
    }
}

//key events-basic movement
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 32:
            chosenHero.interact();
            break;
        case 37:
            chosenHero.moveBack();
          break;
       case 38:
            chosenHero.moveUp();
          break;
       case 39:
            chosenHero.moveForward();
            break;
       case 40:
            chosenHero.moveDown();
          break;
    }
};


