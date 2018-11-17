function runIntro(){
    if (localStorage.getItem("name") === "undefined" || localStorage.getItem("name") === null){
        chosenHero.pickFood();
        chosenHero.pickShow();
        getUserData();
    }
    else {
        chosenHero.pickFood();
        chosenHero.pickShow();
        introPage();
    }
}

function getData(){
    let saveName = document.getElementById("heroName").value;
    let saveGender = document.getElementById("heroGender").value;
    let saveSOName = document.getElementById("SOName").value;
    let saveSOGender = document.getElementById("SOGender").value;
    // getName(saveName);
    // getGender(saveGender);
    // getSOName(saveSOName);
    // getSOGender(saveSOGender);
    localStorage.setItem("name", saveName);
    localStorage.setItem("gender", saveGender);
    localStorage.setItem("SOname", saveSOName);
    localStorage.setItem("SOgender", saveSOGender);

    //show items in local storage
    for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
    }

    clearWindow();

    introPage();
    // document.getElementsByClassName("textShadow")[0].style.visibility = "hidden";

}

function getUserData(){
        let shadow = document.getElementsByClassName("textShadow")[0];
        shadow.style.visibility = "visible";
        let askBody = document.getElementsByClassName("textBody")[0];
        askBody.style.textAlign = "center";

        let introTitle = document.createElement("div");
        introTitle.textContent = "Before we start, please answer a few questions:";
        introTitle.classList.add("questionTitle");
        askBody.append(introTitle);

        let questionTitle = document.createElement("div");
        questionTitle.textContent = "What is your name and gender?";
        questionTitle.classList.add("question");
        askBody.append(questionTitle);

        let askQuestion = document.createElement("form");

        //Create question for name
        let nameLabel = document.createElement("label");
        let askName = document.createElement("input");
        nameLabel.for = askName;
        askName.type = "text";
        askName.setAttribute("id", "heroName");
        nameLabel.textContent = "What is your name?";
        askQuestion.append(nameLabel);
        askQuestion.append(askName);

        //Create question for gender selection dropdown
        let genderLabel = document.createElement("label");
        let askGender = document.createElement("select");
        askGender.setAttribute("id", "heroGender");
        genderLabel.for = askGender;
        genderLabel.textContent = "What is your gender?";
        askQuestion.append(genderLabel);

        let male = document.createElement("option");
        male.value = "male";
        male.textContent = "Male";
        askGender.append(male);

        let female = document.createElement("option");
        female.value = "female";
        female.textContent = "Female";
        askGender.append(female);

        let other = document.createElement("option");
        other.value = "other";
        other.textContent = "Other";
        askGender.append(other);

        askQuestion.append(askGender);

        askBody.append(askQuestion);

        let questionAnd = document.createElement("div");
        questionAnd.textContent = "AND";
        questionAnd.classList.add("question");
        askBody.append(questionAnd);

        let questionSOTitle = document.createElement("div");
        questionSOTitle.textContent = "What is your significant other's name and gender?";
        questionSOTitle.classList.add("question");
        askBody.append(questionSOTitle);

        //Create SO Question form
        let askSOQuestion = document.createElement("form");

        //Create question for SO name
        let nameSOLabel = document.createElement("label");
        let askSOName = document.createElement("input");
        askSOName.setAttribute("id", "SOName");
        nameSOLabel.for = askSOName;
        askSOName.type = "text";
        nameSOLabel.textContent = "What is their name?";
        askSOQuestion.append(nameSOLabel);
        askSOQuestion.append(askSOName);

        //Create question for SO gender selection dropdown
        let genderSOLabel = document.createElement("label");
        let askSOGender = document.createElement("select");
        askSOGender.setAttribute("id", "SOGender");
        genderSOLabel.for = askSOGender;
        genderSOLabel.textContent = "What is their gender?";
        askSOQuestion.append(genderSOLabel);

        let SOmale = document.createElement("option");
        SOmale.value = "male";
        SOmale.textContent = "Male";
        askSOGender.append(SOmale);

        let SOfemale = document.createElement("option");
        SOfemale.value = "female";
        SOfemale.textContent = "Female";
        askSOGender.append(SOfemale);

        let SOother = document.createElement("option");
        SOother.value = "other";
        SOother.textContent = "Other";
        askSOGender.append(SOother);

        askSOQuestion.append(askSOGender);

        askBody.append(askSOQuestion);

        let submitBtn = document.createElement("button");
        submitBtn.type = "button";
        submitBtn.textContent = "Next";
        submitBtn.classList.add("submitData");
        submitBtn.style.float = "right";
        submitBtn.addEventListener("click", getData);
        askBody.append(submitBtn);
}

function introPage(){
    // if(localStorage.getItem("name") !== null || localStorage.getItem("name") !== undefined){
        let shadow = document.getElementsByClassName("textShadow")[0];
        shadow.style.visibility = "visible";
        let askBody = document.getElementsByClassName("textBody")[0];
        askBody.style.textAlign = "center";

        let introTitle = document.createElement("h2");
        introTitle.classList.add("intro");
        introTitle.textContent = `Good morning, ${chosenHero.name}!`;
        askBody.append(introTitle);

        let introBody = document.createElement("div");
        introBody.classList.add("intro");
        introBody.textContent = `It's your significant other, ${chosenHero.SOname}'s birthday!`;
        askBody.append(introBody);

        let instructions = document.createElement("div");
        instructions.classList.add("intro");
        instructions.textContent = `${chosenHero.SOname} really wants their favorite food, ${chosenHero.favoriteFood}, but doesn't want to go outside.  They just want to sit and watch ${chosenHero.favoriteShow} all day.`;
        askBody.append(instructions);

        let mission = document.createElement("div");
        mission.classList.add("intro");
        mission.textContent = `Your mission is to traverse the wonder that is Los Angeles from your suburb of Torrance, to retrieve the ${chosenHero.favoriteFood}`;
        askBody.append(mission);

        let welcome = document.createElement("div");
        welcome.classList.add("intro");
        welcome.textContent = `Welcome to: The Hangry Games`;
        askBody.append(welcome);

        let submitBtn = document.createElement("button");
        submitBtn.type = "button";
        submitBtn.textContent = "Next";
        submitBtn.classList.add("submitData");
        submitBtn.style.float = "right";
        submitBtn.addEventListener("click", closeWindow);
        askBody.append(submitBtn);
    // }
}

function clearWindow(){
    //delete anything in textBody
    let askBody = document.getElementsByClassName("textBody")[0];
    while(askBody.firstChild){
        askBody.removeChild(askBody.firstChild);
    };
}

function closeWindow(){
    let askBody = document.getElementsByClassName("textBody")[0];
    while(askBody.firstChild){
        askBody.removeChild(askBody.firstChild);
    };
    document.getElementsByClassName("textShadow")[0].style.visibility = "hidden";
}

// //set name in local storage
// function getName(saveName){
//     localStorage.setItem("name", saveName);
//     let name = localStorage.getItem("name");
//     return name;
// }

// //set gender in local storage
// function getGender(saveGender){
//     localStorage.setItem("gender", saveGender);
//     let gender = localStorage.getItem("gender");
//     return gender;
// }

// function getSOName(saveSOName){
//     localStorage.setItem("SOname", saveSOName);
//     let SOname = localStorage.getItem("SOname");
//     return SOname;
// }

// //set gender in local storage
// function getSOGender(saveSOGender){
//     localStorage.setItem("SOgender", saveSOGender);
//     let SOgender = localStorage.getItem("SOgender");
//     return SOgender;
// }

