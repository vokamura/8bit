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
            cardBack.addEventListener("click", this.handleCardClicked);
            cardBack.setAttribute("id", "card" + [number]);

            let cardContainer = document.createElement("div");
            cardContainer.append(cardFront);
            cardContainer.append(cardBack);
            this.game.append(cardContainer);
        };
    }
    handleCardClicked(event){
        let matchCounter = 0;
        let possibleMatches = 4;
        if (mmGame.firstCard === null || mmGame.firstCard === undefined){
            mmGame.firstCard= this;
            mmGame.firstCard.style.display = "none";
            return;
        } else if (mmGame.secondCard === null || mmGame.secondCard === undefined){
            mmGame.secondCard = this;
            mmGame.secondCard.style.display = "none";
        } else {
            return;
        }
    }
}
let firstCard = null;