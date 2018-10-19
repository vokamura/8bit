class Hero {
    constructor(name){
        this.name = name;
    }
    moveForward(){
        console.log("Moved forward");
    }
}

let hero1 = new Hero("Vikki");
hero1.moveForward();