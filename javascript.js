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
        getPlayerSelection();
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
    
    console.log('still figuring it out');
}