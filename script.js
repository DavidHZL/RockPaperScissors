"use strict";

const rpsSelection = ["rock", "paper", "scissors"];

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Congrats you won!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Congrats you won!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Congrats you won!");
    } else if (playerSelection === computerSelection) {
        console.log("It is a tie!");
    } else {
        console.log("The computer won!");
    }
    console.log ("Player: " + playerSelection + "\nComputer: "+ computerSelection);
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

const playerSelection = playerPlay();
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);