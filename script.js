"use strict";

const rpsSelection = ["rock", "paper", "scissors"];

var pScore = 0;
var cScore = 0;

function game() {

    // let i = 0;

    // do {
    //     i += 1;
    //     const playerSelection = playerPlay();
    //     const computerSelection = computerPlay();
    //     playRound(playerSelection, computerSelection);
    // } while (i < 5);
}

function playRound(playerSelection) {
    
    let computerSelection = computerPlay();

    console.log(playerSelection);
    console.log(computerSelection);
    
    let result  = ""

    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "Congrats you won!";
        pScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Congrats you won!";
        pScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "Congrats you won!";
        pScore += 1;
    } else if (playerSelection === computerSelection) {
        result = "It is a tie!";
    } else {
        result = "The Computer Won, You lose!";
        cScore += 1;
    }

    let resultDiv = document.querySelector('.displayResults');
    resultDiv.textContent = '';

    let p = document.createElement('p');

    p.textContent =  result + "\nPlayer: " + playerSelection + "\nComputer: "+ computerSelection;

    let pScoreDiv = document.querySelector("#pScore");
    let cScoreDiv = document.querySelector("#cScore");

    pScoreDiv.textContent = pScore;
    cScoreDiv.textContent = cScore;

    resultDiv.append(p);
}

function playerPlay() {
    let selection = prompt("Choose one of the Following - rock - paper- scissors")

    if (selection === "rock" || selection === "paper" || selection === "scissors") {
        return selection;
    } else {
        alert("You must choose either rock, paper, or scissors");
    }
}

function computerPlay() {
    let selection = rpsSelection[Math.floor(Math.random() * rpsSelection.length)];

    return selection;
}



