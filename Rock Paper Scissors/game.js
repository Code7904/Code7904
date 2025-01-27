let userScore = 0; // initial user scores number
let compScore = 0; // initial comp scores number

const choices = document.querySelectorAll(".choice");  // choice
const msg = document.querySelector("#msg"); // game msg

const userScorePara = document.querySelector("#user-score"); // user scores number
const compScorePara = document.querySelector("#comp-score"); // comp scores number


// computer choices
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}; 


// dram match 
const drawGame = () => {
    msg.innerText = "Game Draw! Play Again!!";
    msg.style.backgroundColor = "tomato";
};


// sh0w msg if win or lose or draw
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


// proper match function which conduct game 
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true // 1st win case
        } else if (userChoice === "paper") { 
            userWin = compChoice === "scissors" ? false : true // 2nd win case
        } else {
            userWin = compChoice === "rock" ? false : true // last win case
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


// user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});