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

function capitalize(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function playRound(playerSelection, computerSelection) {
// your code here!
console.log(playerSelection);
console.log(computerSelection);
return "Win, lose or draw"
}
   
const playerSelection = capitalize("myrock");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));