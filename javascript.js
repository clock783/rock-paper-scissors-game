/*
* The Odin Project
* Creating a Rock Paper Scissors Game with Javascript
* To be played from the browser console.
*/

//gameplay variables
let round = 1;
let playerScore = 0;
let computerScore = 0;
let numOfRounds = 3;
const roundX = document.querySelector('#round');


//select weapons
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
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
    roundX.textContent = `ROUND ${round}`;
}

function updateMessage(playerChoice, computerChoice, winner){
    //update player and computer messages
    let playerMessage = document.querySelector('#playerMsg');
    playerMessage.textContent = `Round ${round}: You chose ${playerChoice}`;

    let computerMessage = document.querySelector('#compMsg');
    computerMessage.textContent = `Round ${round}: Computer chose ${computerChoice}`
    //update gameplay message
    let gameMsg = document.querySelector('#gameMsg');
    if (winner === 'none'){
        gameMsg.textContent = `TIE!`;
    } else if (winner === 'player'){
        gameMsg.textContent = `YOU WON THIS ROUND 😀`;
    } else if (winner === 'computer'){
        gameMsg.textContent = `COMPUTER WON THIS ROUND 😞`;
    }
}

function playRound(playerSelection, computerSelection){
    //run function if nobody has won
    if ((playerScore < numOfRounds) && (computerScore < numOfRounds)){
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
        updateMessage(playerSelection, computerSelection,winner);
        updateGreyCompChoice(computerSelection);
        updateScores();
        updateRound();
    }

    if ((playerScore >= numOfRounds) || (computerScore >= numOfRounds)){
        endGame();
    }
    
    return;
}

function updateGreyCompChoice(computerChoice){
    // function will edit class of computer choice
    // so it won't be greyed out. CSS styling will indicate
    // computer's choice.
    computerImgs = document.querySelectorAll('.comp-img');
    computerImgs.forEach(element => {
        element.classList.add('greyOutCompImgs');
    });

    document.getElementById(`comp-${computerChoice}`).classList.remove('greyOutCompImgs');
}


//end game will be called after first to three
function endGame(){
    //after first to numOfRounds, declare Winner
    let gameMsg = document.querySelector('#gameMsg');
    let link = document.createElement('a');
    link.setAttribute('href', '.');
    link.textContent = 'Replay?';
    if (computerScore === numOfRounds) {
        gameMsg.textContent = `Computer Won.`;
        gameMsg.appendChild(link);
    } else if (playerScore === numOfRounds){
        gameMsg.textContent = `You won!!!`;
        gameMsg.appendChild(link);
    }
    roundX.textContent = 'Game Over';

    toGrey = document.querySelectorAll('.greyAtEnd')
    toGrey.forEach(element => {
        element.classList.add("endGameGreyBox");
    });
    // document.getElementByClass("grey").classList.add("endGameGreyBox");

}

//game();


