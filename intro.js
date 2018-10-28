function runIntro(){
    getUserData();

    // let introTitle = document.createElement("h2");
    // introTitle.classList.add("intro");
    // introTitle.textContent = "Good morning!";
    // askBody.append(introTitle);

    // let introBody = document.createElement("div");
    // introBody.classList.add("intro");
    // introBody.textContent = "It is Saturday morning and it is your SO's birthday!";
    // askBody.append(introBody);

}

function getUserData(){
    // if(localStorage.getItem("name") === undefined){
        let shadow = document.getElementsByClassName("askQuestionShadow")[0];
        shadow.style.visibility = "visible";
        let askBody = document.getElementsByClassName("askQuestionBody")[0];
        askBody.style.textAlign = "center";

        let introTitle = document.createElement("div");
        introTitle.textContent = "Before we start, please answer a few questions:";
        introTitle.classList.add("questionTitle");
        askBody.append(introTitle);

        let questionTitle = document.createElement("div");
        questionTitle.textContent = "What is your name and gender?";
        questionTitle.classList.add("question");
        askBody.append(questionTitle);

        //Create Question form
        let askQuestion = document.createElement("form");

        //Create question for name
        let nameLabel = document.createElement("label");
        let askName = document.createElement("input");
        nameLabel.for = askName;
        askName.type = "text";
        nameLabel.textContent = "What is your name?";
        askQuestion.append(nameLabel);
        askQuestion.append(askName);

        //Create question for gender selection dropdown
        let genderLabel = document.createElement("label");
        let askGender = document.createElement("select");
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
        nameSOLabel.for = askSOName;
        askSOName.type = "text";
        nameSOLabel.textContent = "What is your name?";
        askSOQuestion.append(nameSOLabel);
        askSOQuestion.append(askSOName);

        //Create question for SO gender selection dropdown
        let genderSOLabel = document.createElement("label");
        let askSOGender = document.createElement("select");
        genderSOLabel.for = askSOGender;
        genderSOLabel.textContent = "What is your gender?";
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
        submitBtn.addEventListener("click", getData);
        askBody.append(submitBtn);
    // }
}


function getData(){
    let saveName = document.querySelector("input").value;
    let saveGender = document.querySelector("select").value
    getName(saveName);
    getGender(saveGender);
    document.getElementsByClassName("askQuestionShadow")[0].style.visibility = "hidden";
}

//set name in local storage
function getName(saveName){
    localStorage.setItem("name", saveName);
    let name = localStorage.getItem("name");
    return name;
}

//set gender in local storage
function getGender(saveGender){
    localStorage.setItem("gender", saveGender);
    let gender = localStorage.getItem("gender");
    return gender;
}

function getSOName(saveSOName){
    localStorage.setItem("SOname", saveSOName);
    let SOname = localStorage.getItem("SOname");
    return SOname;
}

//set gender in local storage
function getSOGender(saveSOGender){
    localStorage.setItem("SOgender", saveSOGender);
    let SOgender = localStorage.getItem("SOgender");
    return SOgender;
}

//show items in local storage
for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
}