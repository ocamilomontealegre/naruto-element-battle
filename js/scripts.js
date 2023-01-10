// Footer Year
// This function gets the current year and place it on the copyright credits at the footer section
const currentYear = () => {
  let footerYear = new Date();
  document.getElementById("year").innerHTML = footerYear.getFullYear();
};

currentYear();

// Define variables

// Save player-icon and computer-icon elements into variables
const playerSelection = document.querySelector("#player-icon");
const computerSelection = document.querySelector("#computer-icon");

// Save player-score and computer-score elements into variables
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

// Save round element into a variable
const roundCounter = document.querySelector("#round-counter");

// Save all the button elements that contain the class .selection
const buttons = document.querySelectorAll(".selection");

// Save all the span element that contain the class .element
const elements = document.querySelectorAll(".element");

// Number Variables
let playerLives = 0;
let computerLives = 0;
let rounds = 0;

// Classes for the icons
const elementClasses = {
  fire: "fa-solid fa-fire element element-fire",
  wind: "fa-solid fa-wind element element-wind",
  lightning: "fa-solid fa-bolt-lightning element element-lightning",
  earth: "fa-solid fa-mountain element element-earth",
  water: "fa-solid fa-water element element-water",
};

// Methods

// Gets the computer selection
const getComputerSelection = () => {
  const keys =
    Object.values(elementClasses)[
      Math.floor(Math.random() * Object.values(elementClasses).length)
    ];
  computerSelection.className = keys;
  return computerSelection;
};

// Get counter
const counter = () => {
  rounds += 1;
  roundCounter.innerText = rounds;
  return rounds;
};

// End Game
const endGame = (playerHealth, computerHealth) => {
  if (playerHealth == 5 || computerHealth == 5) {
    buttons.forEach((element) => {
      element.setAttribute("disabled", "");
    })
  }
}

// Game Battle
const gameBattle = () => {
  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      playerSelection.className = element.firstElementChild.className;
      getComputerSelection();
      endGame(playerLives, computerLives);
      counter();
      if (
        (playerSelection.className.includes("element-fire") &&
          computerSelection.className.includes("element-wind")) ||
        (playerSelection.className.includes("element-wind") &&
          computerSelection.className.includes("element-lightning")) ||
        (playerSelection.className.includes("element-lightning") &&
          computerSelection.className.includes("element-earth")) ||
        (playerSelection.className.includes("element-earth") &&
          computerSelection.className.includes("element-water")) ||
        (playerSelection.className.includes("element-water") &&
          computerSelection.className.includes("element-fire"))
      ) {
        playerLives += 1;
        playerScore.innerText = playerLives;
        return playerLives;
      } else if (
        (computerSelection.className.includes("element-fire") &&
          playerSelection.className.includes("element-wind")) ||
        (computerSelection.className.includes("element-wind") &&
          playerSelection.className.includes("element-lightning")) ||
        (computerSelection.className.includes("element-lightning") &&
          playerSelection.className.includes("element-earth")) ||
        (computerSelection.className.includes("element-earth") &&
          playerSelection.className.includes("element-water")) ||
        (computerSelection.className.includes("element-water") &&
          playerSelection.className.includes("element-fire"))
      ) {
        computerLives += 1;
        computerScore.innerText = computerLives;
        return computerLives;
      } else {
        playerLives += 0;
        computerLives += 0;
      }
    });
  });
};

gameBattle();

