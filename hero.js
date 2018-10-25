//create a hero with ES6 class
class Hero {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
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
    moveForward(){
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        loadBackground();
        this.xPosition = this.xPosition + 10;
        if(this.heroImage.getAttribute("src") == "style/images/boy_sprite/sprite_right_stand.png"){
            this.heroImage.src = "style/images/boy_sprite/sprite_right_walk.png";
        } else {
            this.heroImage.src = "style/images/boy_sprite/sprite_right_stand.png";
        }
        this.drawHero();

    }
    moveBack(){
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        loadBackground();
        if (this.xPosition > 0){
            this.xPosition = this.xPosition - 10;
        }
        if(this.heroImage.getAttribute("src") == "style/images/boy_sprite/sprite_left_stand.png"){
            this.heroImage.src = "style/images/boy_sprite/sprite_left_walk.png";
        } else {
            this.heroImage.src = "style/images/boy_sprite/sprite_left_stand.png";
        }
        this.drawHero();
    }
    moveUp(){
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        loadBackground();
        if (this.yPosition > 0){
            this.yPosition = this.yPosition - 10;
        }
        if(this.heroImage.getAttribute("src") == "style/images/boy_sprite/sprite_back_rightfoot.png"){
            this.heroImage.src = "style/images/boy_sprite/sprite_back_leftfoot.png";
        } else {
            this.heroImage.src = "style/images/boy_sprite/sprite_back_rightfoot.png";
        }
        this.drawHero();
    }
    moveDown(){
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        loadBackground();
        this.yPosition = this.yPosition + 10;
        if(this.heroImage.getAttribute("src") == "style/images/boy_sprite/sprite_front_rightfoot.png"){
            this.heroImage.src = "style/images/boy_sprite/sprite_front_leftfoot.png";
        } else {
            this.heroImage.src = "style/images/boy_sprite/sprite_front_rightfoot.png";
        }
        this.drawHero();

    }
    drawHero(){
        ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
    }
    interact(){
        console.log("interaction");
    }
}

//set name in local storage
function getName(){
    localStorage.setItem("name", "John");
    let name = localStorage.getItem("name");
    return name;
}

//set gender in local storage
function getGender(){
    localStorage.setItem("gender", "male");
    let gender = localStorage.getItem("gender");
    return gender;
}

//show items in local storage
for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
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


