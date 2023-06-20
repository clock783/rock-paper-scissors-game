/*
* The Odin Project
* Creating a Rock Paper Scissors Game with Javascript
* To be played from the browser console.
*/

//gameplay variables
let round = 1;
let playerScore = 0;
let computerScore = 0;


//select weapons
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    // playerWeapon='rock';
    playRound('rock', getComputerChoice());
})

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    // console.log(playerWeapon);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    // console.log(playerWeapon);
});


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    randomNum = Math.floor(Math.random()*3);
   return choices[randomNum];
}

function updateScores() {
    const myScore = document.querySelector('#myScore');
    myScore.textContent = `YOUR SCORE: ${playerScore}`;

    const computerScoreMsg = document.querySelector('#computerScore');
    computerScoreMsg.textContent = `COMPUTER'S SCORE: ${computerScore}`;
}

function updateRound(){
    round += 1;
    const roundX = document.querySelector('#round');
    roundX.textContent = `Round ${round}`;
}

function updateMessage(winner){
    //update gameplay message
    let gameMsg = document.querySelector('#gameMsg');
    if (winner === 'none'){
        gameMsg.textContent = `Tie!`;
    } else if (winner === 'player'){
        gameMsg.textContent = `You won this round 😀`;
    } else if (winner === 'computer'){
        gameMsg.textContent = `Computer won this round 😞`;
    }
}

function playRound(playerSelection, computerSelection){
    //run function if nobody has won
    if ((playerScore < 3) || (computerScore < 3)){
        let winner;
        //determine winner
        if (playerSelection === computerSelection){
            winner = "none";
        } else if (playerSelection == 'rock') {
            if (computerSelection === 'scissors'){
                winner = "player";
            } else {
                winner = 'computer';
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection === 'rock'){
                winner = "player";
            } else {
                winner = 'computer';
            }
        } else if (playerSelection == 'scissors') {
            if (computerSelection === 'paper'){
                winner = "player";
            } else {
                winner = 'computer';
            }
        }
        
        //updateScores
        if (winner === 'player'){
            playerScore += 1;
        } else if (winner === 'computer'){
            computerScore += 1;
        }
        updateScores();
        updateRound();
        updateMessage(winner);
    }

    if ((playerScore >= 3) || (computerScore >= 3)){
        endGame();
    }
    
    return;
}

//end game will be called after first to three
function endGame(){
    //after first to three, declare Winner
    let gameMsg = document.querySelector('#gameMsg');
    let link = document.createElement('a');
    link.setAttribute('href', '.');
    link.textContent = 'Replay?';
    if (computerScore === 3) {
        gameMsg.textContent = `Computer Won.`;
        gameMsg.appendChild(link);
    } else if (playerScore === 3){
        gameMsg.textContent = `You won!!!`;
        gameMsg.appendChild(link);
    }

    //disable buttons

}

//game();


