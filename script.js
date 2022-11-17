function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);

    if (choice == 0) {
        choice = "Rock"
    } else if (choice === 1) {
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

askplayer = window.prompt('Rock, Paper or Scissors');


function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        // console.log("It's a draw");
        return 'It\'s a draw';
    }
    else if(playerSelection == 'Rock'){
        if(computerSelection == 'Paper'){
            return 'Computer Won';
        }else{
            return 'Player Won';
        }
    }
    else if(playerSelection == 'Paper'){
        if(computerSelection == 'Scissors'){
            return 'Computer Won';
        }else{
            return 'Player Won';
        }
    }
    else if(playerSelection == 'Scissors'){
        if(computerSelection == 'Rock'){
            return 'Computer Won';
        }else{
            return 'Player Won';
        }
    }
    
}
   
const playerSelection = capitalize(askplayer);
const computerSelection = getComputerChoice();
let result = playRound(playerSelection, computerSelection);

console.log(`Player: ${playerSelection}`);
console.log(`Computer: ${computerSelection}`);
console.log(result);