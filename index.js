const choices = ["rock", "paper", "scissors", "spock", "lizard"];

function play(playerChoice, isComputer = false)
let computerChoice = "";
if (isComputer) {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer-choice").innerHTML = `Computer chose ${computerChoice}.`;
}
document.getElementById("player-choice").innerHTML = `You chose ${playerChoice}.`;
if (playerChoice === computerChoice) {
    document.getElementById("result").innerHTML = "It's a tie!";
}
