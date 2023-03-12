// array of the possible choices
const choices = ["rock", "paper", "scissors", "spock", "lizard"];

// Function that takes in the player's choice and whether or not it's the computer's turn
function play(playerChoice, isComputer = false) {

    // Declare a variable for the computer's choice
    let computerChoice = "";

    // If it's the computer's turn, choose a random option from the array of choices and display it
    if (isComputer) {
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById("computer-choice").innerHTML = `Computer chose ${computerChoice}.`;
    }

    // Display the player's choice
    document.getElementById("player-choice").innerHTML = `You chose ${playerChoice}.`;

    // Determine the outcome based on the player's choice and the computer's choice
    if (playerChoice === computerChoice) {
        // If it's a tie, display a message saying so
        document.getElementById("result").innerHTML = "It's a tie!";
    }