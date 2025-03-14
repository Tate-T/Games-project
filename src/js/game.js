const userScoreText = document.getElementById("user-score");
const computerScoreText = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const showComputerChoiceButton = document.getElementById(
  "show-computer-choice"
);
const choiceButtons = document.querySelectorAll(".game__list-button");

let userScore = 0;
let computerScore = 0;
let computerChoice = "";
const choices = ["Камінь", "Ножиці", "Папір"];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultText.style.color = "rgb(248, 149, 0)";
    return "Нічия!";
    
  } else if (
    (userChoice === "Камінь" && computerChoice === "Ножиці") ||
    (userChoice === "Ножиці" && computerChoice === "Папір") ||
    (userChoice === "Папір" && computerChoice === "Камінь")
  ) {
    userScore++;
    resultText.style.color = "green";
    return "Ви виграли раунд!";
  } else {
    computerScore++;
    resultText.style.color = "red";
    return "Комп'ютер виграв раунд!";
  }
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const userChoice = this.getAttribute("data-choice");
    computerChoice = computerPlay();

    const result = determineWinner(userChoice, computerChoice);

    resultText.textContent = result;
    userScoreText.textContent = `Ви - ${userScore}`;
    computerScoreText.textContent = `Комп’ютер - ${computerScore}`;
  });
});

showComputerChoiceButton.addEventListener("click", function () {
  resultText.textContent = `Комп'ютер обрав: ${computerChoice}`;

});
