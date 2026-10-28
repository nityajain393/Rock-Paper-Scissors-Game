let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randOpt = Math.floor(Math.random() * 3);
    return options[randOpt];
}

function matchDraw() {
    msg.innerText = "Match is Draw! Play Again.";
    msg.style.backgroundColor = "rgb(3, 1, 37)";
}

function showWinner(userWin){
    if(userWin === true){
        console.log("win");
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green";
    } else{
        console.log("lose");
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}

function playGame(userChoice){
    let compChoice = genCompChoice();
    console.log("U:", userChoice, "C:", compChoice);
    if(userChoice === compChoice){
        matchDraw();
    } else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = (compChoice === "scissors")? true : false;
        } else if(userChoice === "paper"){
            userWin = (compChoice === "scissors")? false : true;
        } else{
            userWin = (compChoice == "paper")? true : false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click', () => {
        playGame(choice.getAttribute("id"));
    });
});

