class Hero {
    constructor(name, gender, SOname, SOgender){
        this.name = localStorage.getItem("name");
        this.gender = localStorage.getItem("gender");
        this.SOname = localStorage.getItem("SOname");
        this.SOgender = localStorage.getItem("SOgender");
        this.favoriteFood = function(){
            let food = ["Umami Bacon Kale Salad", "Artisnal Kimchi Vegan Tacos", "Cheese Fried Egg and Duck on a Stick"];
            return food[Math.floor(Math.random()*food.length)];
        };
        this.favoriteShow = function(){
            let show = ["Stranger Things", "Black Mirror", "The Good Place"];
            return show[Math.floor(Math.random()*show.length)];
        };
        this.xPosition = 0;
        this.yPosition = 350;
        this.heroReady = false;
        this.heroImage = new Image();
        this.heroImage.src = "style/images/boy_sprite/sprite_front_forward.png";
    }
    sayName(){
        console.log(name);
    }
    returnGender(){
        console.log(gender);
    }
    pickFood(){
        let food = ["Umami Bacon Kale Salad", "Artisnal Kimchi Vegan Tacos", "Cheese Fried Egg and Duck on a Stick"];
        return food[Math.floor(Math.random()*food.length)];
    }
    moveForward(){
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        loadBackground();
        firstDoor.drawDoor();
        this.xPosition = this.xPosition + 10;
        if(this.heroImage.getAttribute("src") == "style/images/boy_sprite/sprite_right_stand.png"){
            this.heroImage.src = "style/images/boy_sprite/sprite_right_walk.png";
        } else {
            this.heroImage.src = "style/images/boy_sprite/sprite_right_stand.png";
        }
        this.drawHero();
        this.checkForDoor();

    }
    moveBack(){
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        loadBackground();
        firstDoor.drawDoor();
        if (this.xPosition > 0){
            this.xPosition = this.xPosition - 10;
        }
        if(this.heroImage.getAttribute("src") == "style/images/boy_sprite/sprite_left_stand.png"){
            this.heroImage.src = "style/images/boy_sprite/sprite_left_walk.png";
        } else {
            this.heroImage.src = "style/images/boy_sprite/sprite_left_stand.png";
        }
        this.drawHero();
        this.checkForDoor();
    }
    moveUp(){
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        loadBackground();
        firstDoor.drawDoor();
        if (this.yPosition > 0){
            this.yPosition = this.yPosition - 10;
        }
        if(this.heroImage.getAttribute("src") == "style/images/boy_sprite/sprite_back_rightfoot.png"){
            this.heroImage.src = "style/images/boy_sprite/sprite_back_leftfoot.png";
        } else {
            this.heroImage.src = "style/images/boy_sprite/sprite_back_rightfoot.png";
        }
        this.drawHero();
        this.checkForDoor();
    }
    moveDown(){
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        loadBackground();
        firstDoor.drawDoor();
        this.yPosition = this.yPosition + 10;
        if(this.heroImage.getAttribute("src") == "style/images/boy_sprite/sprite_front_rightfoot.png"){
            this.heroImage.src = "style/images/boy_sprite/sprite_front_leftfoot.png";
        } else {
            this.heroImage.src = "style/images/boy_sprite/sprite_front_rightfoot.png";
        }
        this.drawHero();
        this.checkForDoor();

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
        ){
            console.log("Enter door");
            let shadow = document.getElementsByClassName("textShadow")[0];
            shadow.style.visibility = "visible";
            let askBody = document.getElementsByClassName("textBody")[0];
            askBody.style.textAlign = "center";

            let introTitle = document.createElement("h2");
            introTitle.classList.add("intro");
            introTitle.textContent = `You've reached a scooter!`;
            askBody.append(introTitle);
           
        }

            
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


