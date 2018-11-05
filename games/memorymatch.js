class MemoryMatch {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
        this.firstCard = null;
        this.secondCard = null;
    }

    layoutCards(){
        let introTitle = document.createElement("h2");
        introTitle.classList.add("intro");
        introTitle.textContent = `Quick! Match the cards to hop onto the scooter!`;
        this.body.append(introTitle);

        this.body.append(this.game);
        this.game.classList.add("gameBody");

        for(let number =0; number < 8; number++){
            let cardFront = document.createElement("div");
            cardFront.classList.add("cardFront");

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

    // handleCardClicked(event){
    //     let matchCounter = 0;
    //     let possibleMatches = 4;
    //     let firstCard = null;
    //     let secondCard = null;
    //     debugger;
    //     if (firstCard == null){
    //         firstCard = this;
    //         firstCard.style.display = "none";
    //         console.log(firstCard);
    //         return;
    //     } else if (secondCard == null){
    //         secondCard = this;
    //         secondCard.style.display = "none";
    //     } else {
    //         return;
    //     }
    // }

    handleCardClicked(){
        let matchCounter = 0;
        let possibleMatches = 4;
        if (this.firstCard == null ){
            this.firstCard = event.target;
            this.firstCard.style.display = "none";
            return this.firstCard;
        } else if (this.secondCard == null){
            this.secondCard = event.target;
            this.secondCard.style.display = "none";
        } else {
            return;
        }
    }

}
// let firstCard = null;

//take this out
let mmGame = new MemoryMatch();
mmGame.layoutCards();