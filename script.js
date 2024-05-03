let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let result = document.querySelector(".msg-container");

const userScorePara = document.getElementById("user-score");

const compScorePara = document.getElementById("comp-score");


const genCompChoice = () =>  {
    let options = ["rock","paper", "scissors"];
    const ranIdx = Math.floor(Math.random ()*3);
    return options[ranIdx];
};

showWinner = (userWin ,userChoice, compChoice) => {
    if (userWin){
        result.innerText = `Hurrey ! you won. ${userChoice}  beats ${compChoice}`;
        result.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
       
    }else {
        result.innerText =  `oops! you loose , try again . ${compChoice}  beats ${userChoice}`;
      result.style.backgroundColor = "red";
      compScore++;
      compScorePara.innerText = compScore;
     

    }
}



const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();
  
if(userChoice === compChoice){
    result.innerText = "Match is drawn";
    result.style.backgroundColor = "#081b31";
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true ;
    }else{
       userWin =  compChoice === "rock" ? false : true;
    }

    showWinner(userWin ,userChoice, compChoice);
}



};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
       console.log(userChoice)
        playGame(userChoice);
    });
});

