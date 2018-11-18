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
            this.heroImage.onload = function(){
                // ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
                ctx.drawImage(this.heroImage, this.xPosition, this.yPosition);
            }
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
            ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
            loadBackground();
            if(firstDoor.xPosition !== null && firstDoor.yPosition){
                firstDoor.drawDoor();
            }
            this.xPosition = this.xPosition + 10;
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
            ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
            loadBackground();
            if(firstDoor.xPosition !== null && firstDoor.yPosition){
                firstDoor.drawDoor();
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
            ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
            loadBackground();
            if(firstDoor.xPosition !== null && firstDoor.yPosition){
                firstDoor.drawDoor();
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
            ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
            loadBackground();
            if(firstDoor.xPosition !== null && firstDoor.yPosition){
                firstDoor.drawDoor();
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
        ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
    }
    checkForDoor(){
        if(
            chosenHero.xPosition <= (firstDoor.xPosition + 32)
            && firstDoor.xPosition <= (chosenHero.xPosition + 32)
            && chosenHero.yPosition <= (firstDoor.yPosition + 32)
            && firstDoor.yPosition <= (chosenHero.yPosition + 32)
            && document.getElementsByClassName("textShadow")[0].style.visibility !== "visible"
        ){
            reachScooter();
        }   
    }
    rideScooter(){
        clearWindow();
        let mmGame = new MemoryMatch();
        mmGame.layoutCards();
    }
    // walk(){
    //     console.log("user is walking");
    // }
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


