
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
        return [1, 0];
    } else if (outcome == 2) {
        return [0, 1];
    } else {
        return [0, 0];
    }
}

let container = document.querySelector('#container');

let createButtons = function(parent) {
    let ul = document.createElement('ul');
    ul.id = "btn-container";
    for (let i = 0; i < 3; ++i) {
        let btn = document.createElement('button');
        btn.textContent = choice[i];
        btn.classList.add('choice');
        btn.addEventListener('click', (e) => playerChoiceClick(e));
        ul.appendChild(btn);
    }
    parent.append(ul);
}

let createScore = function(parent) {
    let h1 = document.createElement('h1');
    parent.appendChild(h1);
    return h1;
}

let updateScore = function() {
    currScore.textContent = score[0] + ":" + score[1];
}

let playerChoiceClick = function(e) {
    let rs = playRound(e.target.textContent, computerPlay());
    console.log(rs);
    score[0] += rs[0];
    score[1] += rs[1];
    updateScore();
    roundsPlayed++;
    if (roundsPlayed == 5) {
        endGame();
    }

}

let startGame = function() {
    let children = container.children;
    let cl = children.length;
    while (cl > 0) {
        cl -= 1;
        container.removeChild(children[0]);
    }
    console.log("Game");
    
    currScore = createScore(container);
    updateScore();

    createButtons(container);
}

let endGame = function() {
    let children = container.children;
    let cl = children.length;
    while (cl > 0) {
        cl -= 1;
        container.removeChild(children[0]);
    }
    console.log("Bacon");
    
    currScore = createScore(container);
    updateScore();
}

let score = [0, 0];
let currScore;
let roundsPlayed = 0;