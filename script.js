"use strict";

const rpsSelection = ["rock", "paper", "scissors"];

function game() {

    let i = 0;

    do {
        i += 1;
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    } while (i < 5);
}

function playRound(playerSelection, computerSelection) {

    let result  = ""

    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "Congrats you won!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Congrats you won!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "Congrats you won!";
    } else if (playerSelection === computerSelection) {
        result = "It is a tie!";
    } else {
        result = "The Computer Won, You lose!";
    }

    console.log(result + "\nPlayer: " + playerSelection + "\nComputer: "+ computerSelection);
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

game();

