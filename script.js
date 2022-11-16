// computerSelection = Math.ceil(Math.random()*3);

function getComputerChoice() {
    let choice = Math.ceil(Math.random()*3);

    if (choice == 1) {
        choice = "Rock"
    } else if (choice === 2) {
        choice = "Paper"
    } else {
        choice = "Scissors"
    }
    return choice;
}

 console.log(getComputerChoice());

// function playRound(playerSelection, computerSelection) {
//     // your code here!
    
//   }
   
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
