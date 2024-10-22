
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

    const results = document.querySelector("#results");
    const score = document.querySelector("#score");
    const winner = document.querySelector("#winner");

    if (humanChoice === "rock" && computerChoice === "scissors") {
      results.textContent = "You win! Rock beats Scissors";
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      results.textContent = "You win! Paper beats Rock";
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      results.textContent = "You win! Scissors beats Paper";
      humanScore++;
    } else if (humanChoice === computerChoice) {
      results.textContent = "Tie!";
    } else {
      results.textContent = "You lose! " + computerCap + " beats " + humanCap;
      computerScore++;
    }

    score.textContent = "You: " + humanScore + " | Computer: " + computerScore;

    if (humanScore === 5) {
      winner.textContent = "You win!"
    }
    if (computerScore === 5) {
      winner.textContent = "Computer wins :("
    }
  };

  const btns = document.querySelectorAll("button");

  btns.forEach((element) => {
    element.addEventListener("click", (e) => {
      playRound(getComputerChoice(), e.target.value)
    })
  })

  console.log("You: " + humanScore);
  console.log("Computer: " + computerScore);
};

playGame();