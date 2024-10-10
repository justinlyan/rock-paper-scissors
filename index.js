
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
};

function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?");
  if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
    return choice.toLowerCase();
  } else {
    console.log("Not a valid choice.");
    getHumanChoice();
  }
};



function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(computerChoice, humanChoice) {
    let computerCap = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    let humanCap = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else if (humanChoice === computerChoice) {
      console.log("Tie!")
    } else {
      console.log("You lose! " + computerCap + " beats " + humanCap);
      computerScore++;
    }
  };

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
  }

  console.log("You: " + humanScore);
  console.log("Computer: " + computerScore);
};

playGame();