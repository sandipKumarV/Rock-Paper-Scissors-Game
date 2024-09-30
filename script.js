let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You won")
    }else{
        console.log("You lose")
    }
}

const drawGame = () => {
    console.log("Game is draw")
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
        showWinner(userWin);
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