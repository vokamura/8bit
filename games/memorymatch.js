class MemoryMatch {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
        this.firstCard = null;
        this.secondCard = null;
        this.matchCounter = 0;
        this.possibleMatches = 4;
    }

    layoutCards(){
        let introTitle = document.createElement("h2");
        introTitle.classList.add("intro");
        introTitle.textContent = `Quick! Match the cards to hop onto the scooter!`;
        this.body.append(introTitle);

        this.body.append(this.game);
        this.game.classList.add("gameBody");

        for(let number =0; number < 8; number++){
            let randomPicArray = [];
            let imageList = ["style/images/memory_match/01.png", "style/images/memory_match/02.png", "style/images/memory_match/03.png", "style/images/memory_match/04.png", "style/images/memory_match/01.png", "style/images/memory_match/02.png", "style/images/memory_match/03.png", "style/images/memory_match/04.png"];

            while (imageList.length) {
                var randomIndex = Math.floor(Math.random() * imageList.length);
                randomPicArray.push(imageList[randomIndex]);
                imageList.splice(randomIndex, 1);
            }

            let cardFront = document.createElement("div");
            cardFront.classList.add("cardFront");
            let image = document.createElement("img");
            // image.setAttribute("id", [number]);
            image.src = `${randomPicArray[number]}`
            image.style.height = "175px";
            image.style.width = "160px";
            cardFront.append(image);

            let cardBack = document.createElement("div");
            cardBack.classList.add("cardBack");
            cardBack.addEventListener("click", this.handleCardClicked.bind(this));
            cardBack.setAttribute("id", "card" + [number]);

            let cardContainer = document.createElement("div");
            cardContainer.append(cardFront);
            cardContainer.append(cardBack);
            this.game.append(cardContainer);
        };
    }

    handleCardClicked(){
        if (this.firstCard == null ){
            this.firstCard = event.target;
            this.firstCard.style.visibility = "hidden";
            return this.firstCard;
        } else {
            this.secondCard = event.target;
            this.secondCard.style.visibility = "hidden";
            if(this.firstCard.previousSibling.childNodes[0].src == this.secondCard.previousSibling.childNodes[0].src){
                this.firstCard = null;
                this.secondCard = null;
                this.matchCounter++;
                console.log(this.matchCounter);
            } else {
                console.log(this.firstCard.style[0]);
                setTimeout( ()=> {
                    this.firstCard.style.visibility = "visible";
                    this.secondCard.style.visibility= "visible";
                    this.firstCard = null;
                    this.secondCard = null;
                }, 2000);
            }
            if (this.matchCounter === 4){
                console.log("you win!");
            }
        } 
    }
    cardReset(){
        this.firstCard.style.visibility = "visible";
        this.secondCard.style.visibility= "visible";
        this.firstCard = null;
        this.secondCard = null;
    }

}

//take this out
let mmGame = new MemoryMatch();
mmGame.layoutCards();