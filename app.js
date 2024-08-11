let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const newRestBtn   = document.querySelector("#resetbtn");

alert("please switch to desktop mode for mobile");

const genComChoice = () => {
    const options = [ "rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random () * 3);
    return options[randomIdx];
}

const resetGame = () => {
    restNew();
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw . play again";
    msg.style.backgroundColor = "#081b31";

    
}

const showWinner = (userWin ,userChoice ,compChoice) => {
      if(userWin) {
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";

      }else {
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = `you lost. ${compChoice} beats Your ${userChoice}` 
        msg.style.backgroundColor = "red";

      }
}


const playGame = (userChoice) => {

     const compChoice = genComChoice();

     if(userChoice === compChoice){
        drawGame();
     }else{
        let userWin = true;
        if(userChoice === "rock"){

            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin , userChoice ,compChoice);
     }

}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
      const userChoice =choice.getAttribute("id");
      playGame(userChoice);
    })
})

const restNew = () => {
    userScorePara.innerHTML= 0;
    compScorePara.innerHTML= 0;
    userScore=0;
    compScore=0;
    msg.innerText ="Play your Move";
    msg.style.backgroundColor="#081b31";

}

newRestBtn.addEventListener("click", resetGame);

