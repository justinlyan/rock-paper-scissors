function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?");
  if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
    return choice.toLowerCase();
  } else {
    console.log("Not a valid choice.");
    getHumanChoice();
  }
}