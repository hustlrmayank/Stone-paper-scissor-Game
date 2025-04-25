let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log('Game was draw');
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
     if( userWin){
        userScore++;
        userScorepara.innerText = userScore ;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
         }
     else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
}
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
    
    if(userChoice === compChoice){
        drawGame();
    }
     
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissors, paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            //scissors, rock
            userWin = compChoice === 'scissors' ? false : true;
        }
        else if(userChoice === 'scissors'){
            //rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
})
