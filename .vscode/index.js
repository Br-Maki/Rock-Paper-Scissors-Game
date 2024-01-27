const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceButton");

let player;
let computer;

choiceBtns.forEach(button => button.addEventListener("click", () =>{

    player = button.textContent;

    computerTurn();

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${checkWinner()}`;

}));

function computerTurn(){
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    switch(computerChoice){
        case 1:
            computer = 'ROCK';
            break;
        case 2:
            computer = 'PAPER';
             break;
        case 3:
            computer = 'SCISSORS';
            break;
    }
}

function checkWinner(){
    
    if(player == computer){
        return 'DRAW!';
    }

    else if(player == 'ROCK' && computer == 'PAPER'){
        return 'YOU LOSE!'
    }

    else if(player == 'PAPER' && computer == 'ROCK'){
        return 'YOU WIN!'
    }

    else if(player == 'ROCK' && computer == 'SCISSORS'){
        return 'YOU WIN!'
    }

    else if(player == 'SCISSORS' && computer == 'ROCK'){
        return 'YOU LOSE!'
    }

    else if(player == 'SCISSORS' && computer == 'PAPER'){
        return 'YOU WIN!'
    }

    else if(player == 'PAPER' && computer == 'SCISSORS'){
        return 'YOU LOSE!'
    }
}