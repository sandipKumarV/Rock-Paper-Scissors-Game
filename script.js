let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-input")
const compScorePara = document.querySelector("#comp-input")

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        // console.log("You won");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won ! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }else{
        // console.log("You lose")
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const drawGame = () => {
    console.log("Game is draw")
    msg.innerText = "Game was Draw! Play again"
    msg.style.backgroundColor = "rgb(3, 3, 39)"
}

const playGame = (userChoice) => {
    console.log("user choice :", userChoice)

    const compChoice = genCompChoice();
    console.log("comp choice :", compChoice)

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked" , userChoice)
        playGame(userChoice);
    })
})