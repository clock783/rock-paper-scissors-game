/*
* The Odin Project
* Creating a Rock Paper Scissors Game with Javascript
* To be played from the browser console.

* General Plan
*   Write function to getComputerChoice. Return choice (not just log in console)
*   Write function to getPlayerSelection. Input should be case insensitive and be either rock, paper or scissors.
*   Write function playRound with inputs playerSelection & computerSelection. Return string "You win/You lose! X beats X"
*   Write function called game(). Plays five rounds. keeps score and reports a winner at the end.
*/

/*
* getComputerChoice()
*   define array with rock, paper and scissors
*   generate random number between 0 and 2.
*   return item at random num position in array.
*/

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

/*
* getPlayerSelection()
*   prompt player to input choice
*   make input all lower case. compare it with approved choices.
*   if lowercase matches approved choices, accept input by logging 'you chose x'.
*   otherwise, log not approved input. re-enter choice.
*   keep doing this until player chooses correctly.
*/

let isFirstPrompt = true;

function getPlayerSelection() {
    // function uses recursion. prompt message changes after first call on recursions
    let promptMessage = isFirstPrompt ?
    'Choose either Rock, Paper, or Scissors':
    'Input Invalid - Acceptable options are Rock, Paper or Scissors';
    let input = prompt(promptMessage,'');
    isFirstPrompt = false;
    
    input = input.toLowerCase();
    
    if (!((input === 'rock') || (input === 'paper') || (input === 'scissors'))) {
        // if input is not accepted, recurse function with different prompt
        // console.log('no match');
        return getPlayerSelection();
        // Need to change the message prompt if it is a retry
    } else {
        // console.log('its a match!');
        return input;
    }
}

/*
* playRound(playerSelection, computerSelection)
*/

function playRound(playerSelection, computerSelection){
    // Check tie scenario
    if (playerSelection === computerSelection) {
        return `Game is a Tie. You both picked ${playerSelection}`;
    
    // check non tie scenarios
    } else if (playerSelection === 'rock'){
        if (computerSelection === 'scissors') {
            return 'You win. Rock beats Scissors';
        } else {//computerSelection must be paper
            return 'You lose. Paper beats Rock';
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock') {
            return 'You win. Paper beats Rock';
        } else {//computerSelection must be scissors
            return 'You lose. Scissors beats Paper';
        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'paper') {
            return 'You win. Scissors beats Paper';
        } else {//computerSelection must be rock
            return 'You lose. Rock beats Scissors';
        }
    }
}

function game() {

    let playerWins = 0;
    let compWins = 0;
    let ties = 0;

    console.log('You have started the Game\nYou will play five rounds')
    for (let i=0; i<5; i++){
        console.log(`Round ${i+1}`);
        let compSelection = getComputerChoice();
        console.log('   Computer has made selection\n   Your turn');
        //re-initialize prompt message in playerSelection() on each loop
        isFirstPrompt = true;
        let playerSelection = getPlayerSelection();
        console.log(`   You chose ${playerSelection}`);
        console.log(`   Playing Round ${i+1}...`);
        let result = playRound(playerSelection, compSelection);
        console.log(`   ${result}`);

        //check for winner and update counters
        if (result.search('win') != -1) {
            playerWins++;
        } else if (result.search('lose') != -1) {
            compWins++;
        } else {
            //should be a tie at this point
            ties++;
        }
        console.log(`   You've won: ${playerWins}\n   Computer has won: ${compWins}\n   Ties: ${ties}`);
    }

    //declare winner
    if (playerWins > compWins) {
        console.log('Cogratulations! You win the Game.');
    } else if (playerWins < compWins) {
        console.log ('Womp womp :( You lose.');
    } else {
        //must be a tie
        console.log('Game was a tie.');
    }
}

game()