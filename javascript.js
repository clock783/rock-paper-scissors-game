/*
* The Odin Project
* Creating a Rock Paper Scissors Game with Javascript
* To be played from the browser console.
*/

//gameplay variables
let round = 1;
let playerScore = 0;
let computerScore = 0;
let compWeapon;
let playerWeapon;

//select weapons
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerWeapon='rock';
    console.log(playerWeapon);
})

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerWeapon='paper';
    console.log(playerWeapon);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerWeapon='scissors';
    console.log(playerWeapon);
});


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function updateScores() {
    const myScore = document.querySelector('#myScore');
    myScore.textContent = `YOUR SCORE: ${playerScore}`;

    const compScore = document.querySelector('#compScore');
    compScore.textContent = `COMPUTER'S SCORE: ${computerScore}`;
}

function updateRound(){
    round += 1;
    const roundX = document.querySelector('#round');
    roundX.textContent = `Round ${round}`;
}

function updateMessage(winner){
    //update gameplay message
    const gameMsg = document.querySelector('#gameMsg');
    if (winner === 'none'){
        gameMsg.textContent = `Tie!`;
    } else if (winner === 'player'){
        gameMsg.textContent = `You won this round 😀`;
    } else if (winner === 'computer'){
        gameMsg.textContent = `Computer won this round 😞`;
    }

    //update player message
    const compScore = document.querySelector('#compScore');


    //update computer message

}

function playRound(playerSelection, computerSelection){
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
    
    return `Computer chose ${computerSelection}\nYou chose ${playerSelection}\nWinner is ${winner}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`;
}





