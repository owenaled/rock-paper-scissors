function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
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

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection){
        return 'It\'s a draw';
    }
    else if(playerSelection === 'Rock'){
        if (computerSelection === 'Paper'){
            return 'You Lose! Paper beats Rock';
        } else {
            return ['You Win! Rock beats Scissors'];
        }
    }
    else if(playerSelection === 'Paper'){
        if(computerSelection === 'Scissors'){
            return 'You Lose! Scissors beats paper';
        }else{
            return 'You Win! Paper beats rock';
        }
    }
    else if(playerSelection === 'Scissors'){
        if(computerSelection === 'Rock'){
            return 'You Lose! Rock beats scissors.';
        }else{
            return 'You Win! Paper beats rock';
        }
    }
    
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 1; i <= rounds; i++) { 
        // askplayer = window.prompt('Rock, Paper or Scissors');
        askplayer = 'Paper';
        const playerSelection = capitalize(askplayer);
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        let result = playRound(playerSelection, computerSelection);

        console.log(`------ Round: ${i}`);
        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
    
        console.log(result);
 
        if (result.includes('You Win')) {
            playerScore++;
          } else if (result.includes('You Lose')) {
            computerScore++;
          }

      }

    console.log('-------------------------');
    console.log(`You won ${playerScore}`);
    console.log(`Computer won ${computerScore}`);
    console.log('-------------------------');
      if (playerScore > computerScore) {
        console.log('You win the game!');
      } else if (computerScore > playerScore) {
        console.log('Computer wins the game.');
      } else {
        console.log('It\'s a tie game.');
      }
}

game();

/* 

// ChatGPT generated example

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return 'It\'s a tie!';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5;
  
    for (let i = 0; i < rounds; i++) {
    //   const playerSelection = prompt('Rock, Paper, or Scissors?');
      const playerSelection = 'Rock';
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      
      console.log(`Round ${i + 1}: ${result}`);
      
      if (result === 'You win!') {
        playerScore++;
      } else if (result === 'Computer wins!') {
        computerScore++;
      }
    }
  
    console.log('Game Over');
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (computerScore > playerScore) {
      console.log('Computer wins the game.');
    } else {
      console.log('It\'s a tie game.');
    }
  }
  
  game();
  
 */