class MemoryMatch {
    constructor(){
        this.body = document.getElementsByClassName("textBody")[0];
        this.game = document.createElement("div");
    }
    layoutCards(){
        console.log("Cards laid out")
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
            cardBack.addEventListener("click", this.cardClicked);

            let cardContainer = document.createElement("div");
            cardContainer.append(cardFront);
            cardContainer.append(cardBack);
            this.game.append(cardContainer);
        };
    }
    cardClicked(event){
        console.log(event.target);

    }
}