
const choice = ['rock', 'paper', 'scissors'];

let computerPlay = function() {
    let ind = Math.floor(Math.random() * 3);
    return choice[ind];
}

let playRound = function(playerSelection, computerSelection) {
    let pn = choice.indexOf(playerSelection);
    let cn = choice.indexOf(computerSelection);
    let outcome = (pn - cn) % 3;
    if (outcome < 0) outcome += 3;
    if (outcome == 1) {
        console.log("You win! " + playerSelection + " beats " + computerSelection + "!");
        return [1, 0];
    } else if (outcome == 2) {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + "!");
        return [0, 1];
    } else {
        console.log("Draw!");
        return [0, 0];
    }
}

let playerScore = 0
let computerScore = 0;
for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your turn (Default: rock)", "rock").toLowerCase();
    let computerSelection = computerPlay();
    let res = playRound(playerSelection, computerSelection);
    playerScore += res[0];
    computerScore += res[1];

    console.log("Player: " + playerScore + "\nComputer: " + computerScore);
}