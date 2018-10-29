class Hero {
    constructor(name, gender, SOname, SOgender){
        // this.name = name;
        // this.gender = gender;
        // this.SOname = SOname;
        // this.SOgender = SOgender;
        this.name = localStorage.getItem("name");
        this.gender = localStorage.getItem("gender");
        this.SOname = localStorage.getItem("SOname");
        this.SOgender = localStorage.getItem("SOgender");
        // this.food = ["Umami Bacon Kale Salad", "Artisnal Kimchi Vegan Tacos", "Cheese Fried Egg and Duck Stick"];
        // this.favoriteFood = food[Math.floor(Math.random()*food.length)];
        this.favoriteFood = function(){
            let food = ["Umami Bacon Kale Salad", "Artisnal Kimchi Vegan Tacos", "Cheese Fried Egg and Duck Stick"];
            return food[Math.floor(Math.random()*food.length)];
        }
        this.xPosition = 0;
        this.yPosition = 350;
        this.heroReady = false;
        this.heroImage = new Image();
        this.heroImage.src = "style/images/boy_sprite/sprite_front_forward.png";
        this.requestAnimationFrame = window.requestAnimationFrame || 
                window.mozRequestAnimationFrame || 
                window.webkitRequestAnimationFrame || 
                window.msRequestAnimationFrame;
    }
    sayName(){
        console.log(name);
    }
    returnGender(){
        console.log(gender);
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
            // ctx.clearRect(0, 0, 160, 160);

            let angle = 0;

            

            // color in the background
            ctx.fillStyle = "#EEEEEE";
            // ctx.fillRect(0, 0, 160, 160);
            
            // draw the circle
            ctx.beginPath();
            var radius = 25 + 150 * Math.abs(Math.cos(angle));
            // var radius = 175;
            ctx.arc(225, 225, radius, 0, Math.PI * 2, false);
            ctx.closePath();
            
            // color in the circle
            ctx.fillStyle = "#006699";
            ctx.fill();

            // requestAnimationFrame(this.checkForDoor);
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


